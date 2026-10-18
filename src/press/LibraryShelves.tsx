import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { lands } from '@/content/api'
import { sectionsByLand, type Book } from './books'
import { useShelf } from './store'
import { SPINE_ARC, enqueue, type BookDims } from './BookModel'
import { COVER_W, SPINE_W, drawCover, drawSpine, tallCanvas } from './theme'
import type { Metrics } from './metrics'

/**
 * The library wall: one wooden plank per topic, bracketed to a wall that leans
 * back as if seen from slightly above, with the topic's section books standing on it.
 *
 * Everything on a shelf is a child of one group placed on the wall where the
 * DOM plank is, so the books cannot drift from the plank: scrolling moves the
 * group, nothing else. The page is read once per shelf per frame.
 *
 * The books here are a light stand-in for the full hardcover: one merged mesh
 * and one small texture each (cover, spine and page edges on a single sheet),
 * no foil or clearcoat. At this size the difference does not show, and the
 * page scrolls without the cost of 73 full models.
 */

/** Books stand spine-out, turned so a slice of the front cover shows. */
const SHELF_YAW = THREE.MathUtils.degToRad(64)
/** The wall leans back by this much: shelves are seen from slightly above. */
export const SHELF_TILT = THREE.MathUtils.degToRad(14)
const PLANK_T = 0.16
const WALL_Z = -1.1
/** A book under or beside the pointer turns toward it and eases a touch off the wall. It does not grow. */
const HOVER_YAW = THREE.MathUtils.degToRad(6)
const HOVER_OUT = 0.14
const SIN = Math.sin(SHELF_TILT)
const COS = Math.cos(SHELF_TILT)
const WALL_NORMAL = new THREE.Vector3(0, -SIN, COS)
const WALL_POINT = new THREE.Vector3(0, 0, WALL_Z)
/** Every shelf is laid out for the fullest one, so books are the same size on all of them. */
const N_MAX = Math.max(1, ...lands.map((l) => sectionsByLand.get(l.id)?.length ?? 1))

interface ShelfLayout {
  /** Book scale. */
  s: number
  /** Plank size (local units). */
  width: number
  depth: number
  /** Distance between book centres. */
  gap: number
  /** Book centre, measured out from the wall. */
  zc: number
}

function shelfLayout(rw: number, rh: number, m: Metrics): ShelfLayout {
  const { pxPerUnit, L, T, W } = m
  const width = (rw * 0.96) / pxPerUnit
  const rowH = rh / pxPerUnit
  const xUnit = T * Math.sin(SHELF_YAW) + W * Math.cos(SHELF_YAW) // footprint along the shelf
  const zUnit = W * Math.sin(SHELF_YAW) + T * Math.cos(SHELF_YAW) // footprint out from the wall
  const back = 0.08
  const front = 0.3
  // Tall enough to fill the row: book + the plank's visible top and front edge must fit under the shelf above.
  const sH = (0.9 * rowH - ((back + front) * SIN + PLANK_T * COS)) / (L * COS + zUnit * SIN)
  // Narrow enough that the fullest shelf fits on its plank.
  const sW = (width * 0.95) / (xUnit * 1.07 * N_MAX)
  const s = Math.max(0.02, Math.min(sH, sW))
  const depth = zUnit * s + back + front
  return { s, width, depth, gap: xUnit * s * 1.07, zc: back + (zUnit * s) / 2 }
}

// ---------------------------------------------------------------------------
// Stand-in book: one geometry for all, one texture sheet per book
// ---------------------------------------------------------------------------
interface Sheet {
  w: number
  h: number
  coverW: number
  spineX: number
  spineW: number
  pagesX: number
  pagesW: number
  edgeX: number
}

const SHEET_H = 640
const GUTTER = 6

function sheetFor({ W, L, T }: BookDims): Sheet {
  const coverW = Math.round((SHEET_H * W) / L)
  const spineX = coverW + GUTTER
  const spineW = Math.max(8, Math.round((SHEET_H * SPINE_ARC * T) / L))
  const pagesX = spineX + spineW + GUTTER
  const pagesW = 32
  const edgeX = pagesX + pagesW + GUTTER
  return { w: edgeX + 10, h: SHEET_H, coverW, spineX, spineW, pagesX, pagesW, edgeX }
}

const liteCache = new Map<string, THREE.BufferGeometry>()

/** Boards, page block and rounded spine as one mesh, with UVs into the texture sheet. Standing frame, as BookModel. */
function liteGeometry(dims: BookDims): THREE.BufferGeometry {
  const { W, L, T } = dims
  const key = `${W.toFixed(4)}|${L.toFixed(4)}|${T.toFixed(4)}`
  const hit = liteCache.get(key)
  if (hit) return hit
  // Keep only the current size (see bookGeometry): dispose the previous entry.
  for (const old of liteCache.values()) old.dispose()
  liteCache.clear()
  const sh = sheetFor(dims)
  const boardT = T * 0.075
  const over = L * 0.012
  const boardL = L + over * 2
  const pagesT = T - boardT * 2
  const u = (px: number) => px / sh.w
  const edgeU = u(sh.edgeX + 5)

  const flat = (geo: THREE.BufferGeometry) => {
    const uv = geo.attributes.uv as THREE.BufferAttribute
    for (let i = 0; i < uv.count; i++) uv.setXY(i, edgeU, 0.5)
  }
  const front = new THREE.BoxGeometry(W, boardL, boardT)
  flat(front)
  {
    // +z face (vertices 16–19): the front cover
    const pos = front.attributes.position as THREE.BufferAttribute
    const uv = front.attributes.uv as THREE.BufferAttribute
    for (let i = 16; i < 20; i++) {
      const fu = (pos.getX(i) + W / 2) / W
      const fv = (pos.getY(i) + boardL / 2) / boardL
      uv.setXY(i, u(1 + fu * (sh.coverW - 2)), fv)
    }
  }
  front.translate(0, 0, T / 2 - boardT / 2)
  const back = new THREE.BoxGeometry(W, boardL, boardT)
  flat(back)
  back.translate(0, 0, -(T / 2 - boardT / 2))

  const pages = new THREE.BoxGeometry(W - over, L - over * 2, pagesT)
  {
    // Page edges: the lines run across the thickness on every face.
    const pos = pages.attributes.position as THREE.BufferAttribute
    const uv = pages.attributes.uv as THREE.BufferAttribute
    for (let i = 0; i < uv.count; i++) uv.setXY(i, u(sh.pagesX + 1 + ((pos.getZ(i) + pagesT / 2) / pagesT) * (sh.pagesW - 2)), 0.5)
  }
  pages.translate(-over / 2, 0, 0)

  const spine = new THREE.CylinderGeometry(T / 2, T / 2, boardL, 10, 1, true, Math.PI, Math.PI)
  {
    const uv = spine.attributes.uv as THREE.BufferAttribute
    for (let i = 0; i < uv.count; i++) uv.setX(i, u(sh.spineX + 1 + uv.getX(i) * (sh.spineW - 2)))
  }
  spine.scale(0.38, 1, 1)
  spine.computeVertexNormals()
  spine.translate(-W / 2, 0, 0)

  const merged = mergeGeometries([front, back, pages, spine])!
  for (const g of [front, back, pages, spine]) g.dispose()
  liteCache.set(key, merged)
  return merged
}

/** Cover, spine and page edges painted small on one canvas. */
function drawSheet(book: Book, dims: BookDims): HTMLCanvasElement {
  const sh = sheetFor(dims)
  const c = document.createElement('canvas')
  c.width = sh.w
  c.height = sh.h
  const ctx = c.getContext('2d')!
  // board edges and gutters
  ctx.fillStyle = book.theme.palette[1]
  ctx.fillRect(0, 0, sh.w, sh.h)
  const cover = drawCover(book.title, book.imprint, book.theme, book.seed, dims.W / dims.L, { k: sh.coverW / COVER_W, lite: true })
  ctx.drawImage(cover.color, 0, 0, sh.coverW, sh.h)
  const spine = drawSpine(book.title, book.imprint, book.theme, book.seed, dims.L / (SPINE_ARC * dims.T), { k: sh.h / SPINE_W, lite: true })
  ctx.drawImage(tallCanvas(spine.color), sh.spineX, 0, sh.spineW, sh.h)
  // page edges
  ctx.fillStyle = '#ece5d3'
  ctx.fillRect(sh.pagesX, 0, sh.pagesW, sh.h)
  for (let x = 0; x < sh.pagesW; x += 2) {
    ctx.fillStyle = (x / 2) % 2 ? 'rgba(0,0,0,0.13)' : 'rgba(255,255,255,0.3)'
    ctx.fillRect(sh.pagesX + x, 0, 1, sh.h)
  }
  return c
}

let blob: THREE.CanvasTexture | null = null
/** Soft dark patch under a book: the contact shadow that seats it on the plank. */
function contactTexture(): THREE.CanvasTexture {
  if (blob) return blob
  const c = document.createElement('canvas')
  c.width = 128
  c.height = 64
  const ctx = c.getContext('2d')!
  ctx.scale(1, 0.5)
  const g = ctx.createRadialGradient(64, 64, 6, 64, 64, 64)
  g.addColorStop(0, 'rgba(0,0,0,0.85)')
  g.addColorStop(0.55, 'rgba(0,0,0,0.45)')
  g.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, 128, 128)
  blob = new THREE.CanvasTexture(c)
  return blob
}

const plankMat = new THREE.MeshStandardMaterial({ color: '#4a3734', roughness: 0.72, metalness: 0.05 })
const plankEdgeMat = new THREE.MeshStandardMaterial({ color: '#2f2321', roughness: 0.8 })
const bracketMat = new THREE.MeshStandardMaterial({ color: '#1b1516', roughness: 0.55, metalness: 0.5 })
const unitBox = new THREE.BoxGeometry(1, 1, 1)
const flatPlane = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2)
let contactMat: THREE.MeshBasicMaterial | null = null

function ShelfBook({ book, dims, wanted }: { book: Book; dims: BookDims; wanted: boolean }) {
  const geometry = useMemo(() => liteGeometry(dims), [dims])
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: book.theme.palette[0], roughness: 0.8, metalness: 0, envMapIntensity: 0.55 }), [book])
  const done = useRef(false)

  useEffect(() => {
    if (!wanted || done.current) return
    let alive = true
    enqueue(() => {
      if (!alive || done.current) return
      done.current = true
      const t = new THREE.CanvasTexture(drawSheet(book, dims))
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 4
      material.map = t
      material.color.set('#ffffff')
      material.needsUpdate = true
    })
    return () => {
      alive = false
    }
  }, [wanted, book, dims, material])

  useEffect(
    () => () => {
      material.map?.dispose()
      material.dispose()
    },
    [material],
  )

  return <mesh geometry={geometry} material={material} castShadow receiveShadow />
}

function LibraryShelf({ landId, metrics }: { landId: string; metrics: Metrics }) {
  const group = useRef<THREE.Group>(null)
  const plank = useRef<THREE.Mesh>(null)
  const edge = useRef<THREE.Mesh>(null)
  const brackets = useRef<THREE.Group>(null)
  const bookGroups = useRef<(THREE.Group | null)[]>([])
  const contacts = useRef<(THREE.Mesh | null)[]>([])
  const laidOut = useRef('')
  /** Resting x and yaw of each book, and how far its hover turn has eased in. */
  const rest = useRef<{ x: number; yaw: number }[]>([])
  const turn = useRef<{ yaw: number; out: number }[]>([])
  const [wanted, setWanted] = useState(false)
  const { camera } = useThree()
  const sections = useMemo(() => sectionsByLand.get(landId) ?? [], [landId])
  const dims = useMemo(() => ({ W: metrics.W, L: metrics.L, T: metrics.T }), [metrics.W, metrics.L, metrics.T])
  const tmp = useMemo(() => new THREE.Vector3(), [])
  const fwd = useMemo(() => new THREE.Vector3(), [])
  if (!contactMat) contactMat = new THREE.MeshBasicMaterial({ map: contactTexture(), transparent: true, depthWrite: false, toneMapped: false })

  useFrame((_, dt) => {
    const g = group.current
    if (!g) return
    const { mode, shelves, pointer } = useShelf.getState()
    const r = mode === 'library' ? shelves.get(landId)?.getBoundingClientRect() : undefined
    const { winW, winH, pxPerUnit, cw, ch, L, W, T } = metrics
    if (!r || !r.height || r.bottom < -winH * 0.6 || r.top > winH * 1.6) {
      g.visible = false
      // Paint the art a little before the shelf scrolls into view.
      if (r && r.height && !wanted && r.bottom > -winH * 1.5 && r.top < winH * 2.5) setWanted(true)
      return
    }
    if (!wanted) setWanted(true)
    const lay = shelfLayout(r.width, r.height, metrics)

    // Local layout only changes when the plank's box does (resize), not on scroll.
    const key = `${r.width.toFixed(1)}|${r.height.toFixed(1)}|${pxPerUnit.toFixed(3)}`
    if (key !== laidOut.current) {
      laidOut.current = key
      plank.current?.position.set(0, -PLANK_T / 2, lay.depth / 2)
      plank.current?.scale.set(lay.width, PLANK_T, lay.depth)
      edge.current?.position.set(0, -PLANK_T / 2, lay.depth + 0.015)
      edge.current?.scale.set(lay.width, PLANK_T, 0.03)
      brackets.current?.children.forEach((b, i) => {
        b.position.set((i === 0 ? -1 : 1) * lay.width * 0.42, -PLANK_T, 0)
        b.scale.set(1, 1, lay.depth * 0.78)
      })
      const n = sections.length
      sections.forEach((b, i) => {
        const x = -(lay.gap * n) / 2 + lay.gap * (i + 0.5)
        // A degree or two of give, so the row looks placed by hand.
        const yaw = SHELF_YAW + ((b.seed % 7) - 3) * 0.006
        rest.current[i] = { x, yaw }
        turn.current[i] = { yaw: 0, out: 0 }
        const bg = bookGroups.current[i]
        if (bg) {
          bg.position.set(x, (L * lay.s * 1.024) / 2, lay.zc)
          bg.rotation.set(0, yaw, 0)
          bg.scale.setScalar(lay.s)
        }
        const c = contacts.current[i]
        if (c) {
          c.position.set(x + 0.03, 0.004, lay.zc + 0.02)
          c.rotation.set(0, yaw, 0)
          c.scale.set(W * lay.s * 1.3, 1, T * lay.s * 2.4)
        }
      })
    }

    // Where the plank's back top edge meets the wall, from the DOM: the plank's front edge sits just above the row's bottom.
    const ax = r.left + r.width / 2
    const ay = r.bottom - 4 - (lay.depth * SIN + PLANK_T * COS) * pxPerUnit
    tmp.set((ax - winW / 2) / (cw / 2), (winH / 2 - ay) / (ch / 2), 0.5).unproject(camera).sub(camera.position).normalize()
    const t = fwd.copy(WALL_POINT).sub(camera.position).dot(WALL_NORMAL) / tmp.dot(WALL_NORMAL)
    g.position.copy(camera.position).addScaledVector(tmp, t)
    // Farther along the leaning wall = smaller on screen; scale back so the plank is exactly as wide as its DOM box.
    camera.getWorldDirection(fwd)
    const far = tmp.dot(fwd) * t
    g.scale.setScalar(far / camera.position.length())
    g.visible = true

    // Hover: the book on or next to the pointer turns toward it.
    const ease = 1 - Math.exp(-Math.min(dt, 1 / 30) * 9)
    const half = (lay.gap * pxPerUnit) / 2
    const top = ay - L * lay.s * 1.024 * COS * pxPerUnit
    const bottom = ay + lay.zc * SIN * pxPerUnit
    const inBand = pointer.active && pointer.y > top - 14 && pointer.y < bottom + 28
    for (let i = 0; i < sections.length; i++) {
      const at = rest.current[i]
      const st = turn.current[i]
      if (!at || !st) continue
      const off = pointer.x - (ax + at.x * pxPerUnit)
      const near = inBand && Math.abs(off) < half * 1.5
      const wantYaw = near ? THREE.MathUtils.clamp(off / half, -1, 1) * HOVER_YAW : 0
      const wantOut = near ? HOVER_OUT : 0
      if (Math.abs(wantYaw - st.yaw) < 1e-4 && Math.abs(wantOut - st.out) < 1e-4) continue
      st.yaw += (wantYaw - st.yaw) * ease
      st.out += (wantOut - st.out) * ease
      const bg = bookGroups.current[i]
      if (bg) {
        bg.rotation.y = at.yaw + st.yaw
        bg.position.z = lay.zc + st.out
      }
      const c = contacts.current[i]
      if (c) {
        c.rotation.y = at.yaw + st.yaw
        c.position.z = lay.zc + 0.02 + st.out
      }
    }
  })

  return (
    <group ref={group} visible={false} rotation={[SHELF_TILT, 0, 0]}>
      <mesh ref={plank} geometry={unitBox} material={plankMat} castShadow receiveShadow />
      <mesh ref={edge} geometry={unitBox} material={plankEdgeMat} />
      <group ref={brackets}>
        {[0, 1].map((i) => (
          <group key={i}>
            {/* vertical plate against the wall */}
            <mesh position={[0, -0.42, 0.04]} material={bracketMat} castShadow>
              <boxGeometry args={[0.16, 0.84, 0.08]} />
            </mesh>
            {/* arm under the plank (scaled to the plank depth by the parent) */}
            <mesh position={[0, -0.04, 0.5]} material={bracketMat} castShadow>
              <boxGeometry args={[0.16, 0.08, 1]} />
            </mesh>
            {/* diagonal strut */}
            <mesh position={[0, -0.3, 0.3]} rotation={[-0.78, 0, 0]} material={bracketMat}>
              <boxGeometry args={[0.1, 0.72, 0.05]} />
            </mesh>
          </group>
        ))}
      </group>
      {sections.map((b, i) => (
        <group key={b.id}>
          <mesh ref={(el) => void (contacts.current[i] = el)} geometry={flatPlane} material={contactMat!} renderOrder={1} />
          <group ref={(el) => void (bookGroups.current[i] = el)}>
            <ShelfBook book={b} dims={dims} wanted={wanted} />
          </group>
        </group>
      ))}
    </group>
  )
}

/**
 * The wall itself: invisible except for the shadows that fall on it. Left out on
 * narrow screens, where the shelves stack under their labels and a shelf's
 * shadow would fall across the next label.
 */
function Wall({ metrics }: { metrics: Metrics }) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (mesh.current) mesh.current.visible = useShelf.getState().mode === 'library' && metrics.winW >= 900
  })
  return (
    <mesh ref={mesh} position={[0, 0.02 * SIN, WALL_Z - 0.02 * COS]} rotation={[SHELF_TILT, 0, 0]} receiveShadow>
      <planeGeometry args={[metrics.visW * 1.7, metrics.visH * 1.9]} />
      <shadowMaterial transparent opacity={0.28} />
    </mesh>
  )
}

export default function LibraryShelves({ metrics, ready }: { metrics: Metrics; ready: boolean }) {
  return (
    <>
      <Wall metrics={metrics} />
      {ready && lands.map((l) => <LibraryShelf key={l.id} landId={l.id} metrics={metrics} />)}
    </>
  )
}
