import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { lands } from '@/content/api'
import { books, libraryIndex, sectionsByLand, type Book } from './books'
import { useShelf } from './store'
import BookModel, { useBookMaterials, type BookDims } from './BookModel'

/**
 * Fixed, full-height, 70vw-wide canvas (as on press.stripe.com).
 *
 * Library: one wooden plank per topic, bracketed to a shadow-only wall; the
 * topic's section books stand on it, spines toward the viewer, turned a little
 * so the covers show. Planks and books read their DOM rect every frame, so
 * they move with the page exactly (no smoothing on the scroll-driven part).
 *
 * Topic shelf: the topic's books lie on their backs, spine toward the camera,
 * following the invisible DOM rows. Hover (or a pointer near the row) lifts
 * the book and tilts it toward the pointer.
 *
 * Reading flow: each book stands up and tracks its sticky anchor in the
 * left column — pinned while its text scrolls, then rising and shrinking as
 * the anchor is pushed out by the next section.
 */

const FOV = 14
const CAM_Z = 40
const CAM_Y = 0.95
/** Standing pose in the reading flow: turned to the right, tilted slightly back so the cover faces a little upward. */
const STAND = { yaw: THREE.MathUtils.degToRad(26), pitch: THREE.MathUtils.degToRad(-7), roll: THREE.MathUtils.degToRad(-2) }
/** Pose on the library shelf: spine toward the viewer, turned so a slice of the front cover shows. */
const SHELF_YAW = THREE.MathUtils.degToRad(58)
/** The shelves are seen from slightly above: planks (and the books on them) pitch toward the viewer. */
const SHELF_TILT = THREE.MathUtils.degToRad(9)
const PLANK_T = 0.16
const WALL_Z = -1.1
/** Max tilt toward the pointer on the topic shelf. */
const HOVER_TILT = THREE.MathUtils.degToRad(7)

const FLAT_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, Math.PI / 2, 0, 'YXZ'))
const TILT_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(SHELF_TILT, 0, 0))

interface Metrics extends BookDims {
  visH: number
  visW: number
  pxPerUnit: number
  winW: number
  winH: number
}

function useMetrics(): Metrics {
  const { size } = useThree()
  return useMemo(() => {
    const winW = window.innerWidth
    const winH = window.innerHeight
    const visH = 2 * CAM_Z * Math.tan(THREE.MathUtils.degToRad(FOV / 2))
    const pxPerUnit = size.height / visH
    const visW = size.width / pxPerUnit
    const L = (0.5 * winW) / pxPerUnit // book length ≈ 50vw on screen
    const T = 0.115 * visH // spine thickness ≈ 11.5vh — identical for every book
    const W = L * 0.68
    return { visH, visW, pxPerUnit, winW, winH, L, T, W }
  }, [size.height, size.width])
}

/** How a plank sits for a given DOM rect: centre, book scale, plank size. */
function plankLayout(r: DOMRect, m: Metrics, n: number) {
  const { pxPerUnit, winW, winH, L, T, W } = m
  let s = ((r.height * 0.86) / pxPerUnit) / L
  const footUnit = T * Math.sin(SHELF_YAW) + W * Math.cos(SHELF_YAW)
  const width = (r.width * 0.96) / pxPerUnit
  // Crowded shelves (many sections) scale down so every book fits on the plank.
  s = Math.min(s, (width * 0.94) / (footUnit * 1.06 * Math.max(1, n)))
  const foot = footUnit * s
  const depth = foot * 1.25 + 0.35
  const cx = (r.left + r.width / 2 - winW / 2) / pxPerUnit
  const topPx = r.bottom - 19 // the plank's top surface, in page pixels
  const topY = (winH / 2 - topPx) / pxPerUnit
  return { s, foot, gap: foot * 1.06, width, depth, cx, topY }
}

function useFontsReady(): boolean {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let alive = true
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
    const p = fonts
      ? Promise.all([fonts.load('700 76px Newsreader'), fonts.load('italic 500 42px Newsreader'), fonts.load('500 58px Newsreader')]).then(() => fonts.ready)
      : Promise.resolve()
    p.then(() => alive && setReady(true)).catch(() => alive && setReady(true))
    return () => {
      alive = false
    }
  }, [])
  return ready
}

function BookInstance({ book, index, metrics }: { book: Book; index: number; metrics: Metrics }) {
  const group = useRef<THREE.Group>(null)
  const dims = useMemo(() => ({ W: metrics.W, L: metrics.L, T: metrics.T }), [metrics.W, metrics.L, metrics.T])
  const [wanted, setWanted] = useState(false)
  const materials = useBookMaterials(book, dims, wanted)
  const pos = useMemo(() => new THREE.Vector3(0, -index * 3, 0), [index])
  const lift = useMemo(() => new THREE.Vector3(), [])
  const quat = useMemo(() => FLAT_Q.clone(), [])
  const scale = useRef(1)
  const opacity = useRef(1)
  const tmpV = useMemo(() => new THREE.Vector3(), [])
  const tmpLift = useMemo(() => new THREE.Vector3(), [])
  const tmpQ = useMemo(() => new THREE.Quaternion(), [])
  const tmpQ2 = useMemo(() => new THREE.Quaternion(), [])
  const tmpE = useMemo(() => new THREE.Euler(0, 0, 0, 'YXZ'), [])
  const lib = useMemo(() => libraryIndex.get(book.id), [book.id])

  useFrame(({ clock }, dt) => {
    const g = group.current
    if (!g) return
    const { mode, land, hovered, active, rows, shelves, anchors, dragYaw, pointer } = useShelf.getState()
    const { pxPerUnit, winW, winH, L, visH } = metrics
    const d = Math.min(dt, 1 / 30)
    const k = 1 - Math.exp(-d * 6)

    // Books that take no part in the current view are simply hidden.
    const participates = mode === 'library' ? !!lib : land === book.land
    if (!participates) {
      opacity.current = 0
      g.visible = false
      return
    }

    let targetQ: THREE.Quaternion = FLAT_Q
    let targetScale = 1
    let targetOpacity = 1
    let snap = false // position follows the DOM exactly (scroll-driven views)
    let lerpK = Math.min(1, k * 1.6)
    tmpLift.set(0, 0, 0)

    const anchor = mode === 'book' && active ? anchors.get(book.id) : undefined
    if (!wanted) {
      // Generate art once the book is within ~1.5 screens of the viewport.
      const el = anchor ?? (mode === 'library' ? shelves.get(book.land) : rows.get(book.id))
      const r = el?.getBoundingClientRect()
      if (r && r.height && r.bottom > -winH * 1.5 && r.top < winH * 2.5) setWanted(true)
    }

    if (mode === 'library' && lib) {
      // Standing on the topic's plank, which pitches toward the viewer; the book sits in the plank's frame.
      const plank = shelves.get(book.land)
      const r = plank?.getBoundingClientRect()
      if (r && r.height) {
        const p = plankLayout(r, metrics, lib.n)
        const total = p.gap * lib.n
        const localX = -total / 2 + p.gap * (lib.i + 0.5)
        const localY = (L * p.s) / 2 + 0.012
        tmpV.set(localX, localY, 0).applyQuaternion(TILT_Q)
        tmpV.x += p.cx
        tmpV.y += p.topY
        tmpV.z += WALL_Z + p.depth / 2
        tmpE.set(0, SHELF_YAW, 0)
        tmpQ.setFromEuler(tmpE)
        tmpQ2.copy(TILT_Q).multiply(tmpQ)
        targetQ = tmpQ2
        targetScale = p.s
        snap = true
      } else {
        targetOpacity = 0
        tmpV.copy(pos)
      }
    } else if (mode === 'book' && active && anchor) {
      // Standing in the reading flow, tracking the sticky anchor.
      const r = anchor.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      // Shrink once the anchor has been pushed above its sticky position.
      const stickyTop = winH * 0.14
      const pushed = Math.max(0, stickyTop - r.top)
      const shrink = 1 - Math.min(0.45, (pushed / winH) * 0.9)
      tmpV.set((cx - winW / 2) / pxPerUnit, (winH / 2 - cy) / pxPerUnit, 2.5)
      targetScale = ((0.8 * r.height) / pxPerUnit / L) * shrink
      const idle = Math.sin(clock.elapsedTime * 0.5 + index) * 0.02
      tmpE.set(STAND.pitch, STAND.yaw + dragYaw + idle, STAND.roll)
      tmpQ.setFromEuler(tmpE)
      targetQ = tmpQ
      lerpK = k * 1.3
    } else if (mode === 'book' && active) {
      // Not part of the flow: drift aside and fade.
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      const y = r && r.height ? (winH / 2 - (r.top + r.height / 2)) / pxPerUnit : pos.y
      tmpV.set((index % 2 ? 1 : -1) * visH * 1.4, y, -4)
      targetOpacity = 0
      lerpK = k * 0.8
    } else {
      // Topic shelf: lying flat on its row.
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      if (r && r.height) {
        const cy = r.top + r.height / 2
        tmpV.set(0, (winH / 2 - cy) / pxPerUnit, 0)
        snap = true
        // Near = the pointer is over the row or just outside it.
        const near =
          hovered === book.id ||
          (pointer.active && pointer.x > r.left - r.width * 0.1 && pointer.x < r.right + r.width * 0.1 && pointer.y > r.top - r.height * 0.6 && pointer.y < r.bottom + r.height * 0.6)
        if (near) {
          tmpLift.set(-0.18, 0, 0.9)
          // Tilt toward the pointer: the side nearest the cursor rises.
          const dx = THREE.MathUtils.clamp((pointer.x - (r.left + r.width / 2)) / (r.width / 2), -1, 1)
          const dy = THREE.MathUtils.clamp((pointer.y - cy) / (r.height * 1.2), -1, 1)
          tmpE.set(-dy * HOVER_TILT, -dx * HOVER_TILT, 0)
          tmpQ.setFromEuler(tmpE).multiply(FLAT_Q)
          targetQ = tmpQ
        }
      } else {
        targetOpacity = 0
        tmpV.copy(pos)
      }
    }

    if (snap) pos.copy(tmpV)
    else pos.lerp(tmpV, lerpK)
    lift.lerp(tmpLift, k * 1.6)
    quat.slerp(targetQ, snap ? k * 1.6 : k * 1.1)
    scale.current += (targetScale - scale.current) * (snap ? 1 : k * 1.1)
    opacity.current += (targetOpacity - opacity.current) * k * 1.2

    g.position.copy(pos).add(lift)
    g.quaternion.copy(quat)
    g.scale.setScalar(scale.current)
    for (const mat of materials.all) mat.opacity = opacity.current
    g.visible = opacity.current > 0.02 && Math.abs(pos.y) < visH * 1.5
  })

  return <BookModel ref={group} book={book} dims={dims} wanted={wanted} materials={materials} />
}

// ---------------------------------------------------------------------------
// Library furniture: planks with wall brackets, on a shadow-only wall
// ---------------------------------------------------------------------------
const plankMat = new THREE.MeshStandardMaterial({ color: '#4a3734', roughness: 0.72, metalness: 0.05 })
const plankEdgeMat = new THREE.MeshStandardMaterial({ color: '#2f2321', roughness: 0.8 })
const bracketMat = new THREE.MeshStandardMaterial({ color: '#1b1516', roughness: 0.55, metalness: 0.5 })

function Plank({ landId, metrics }: { landId: string; metrics: Metrics }) {
  const group = useRef<THREE.Group>(null)
  const plank = useRef<THREE.Mesh>(null)
  const edge = useRef<THREE.Mesh>(null)
  const brackets = useRef<THREE.Group>(null)
  const n = sectionsByLand.get(landId)?.length ?? 1

  useFrame(() => {
    const g = group.current
    if (!g) return
    const { mode, shelves } = useShelf.getState()
    const r = mode === 'library' ? shelves.get(landId)?.getBoundingClientRect() : undefined
    if (!r || !r.height || r.bottom < -metrics.winH || r.top > metrics.winH * 2) {
      g.visible = false
      return
    }
    const p = plankLayout(r, metrics, n)
    g.visible = true
    g.position.set(p.cx, p.topY, WALL_Z)
    g.rotation.x = SHELF_TILT
    // plank: top surface at local y = 0, back edge on the wall
    if (plank.current) {
      plank.current.position.set(0, -PLANK_T / 2, p.depth / 2)
      plank.current.scale.set(p.width, PLANK_T, p.depth)
    }
    if (edge.current) {
      edge.current.position.set(0, -PLANK_T / 2, p.depth + 0.015)
      edge.current.scale.set(p.width, PLANK_T, 0.03)
    }
    if (brackets.current) {
      brackets.current.children.forEach((b, i) => {
        const x = (i === 0 ? -1 : 1) * p.width * 0.42
        b.position.set(x, -PLANK_T, 0)
        b.scale.set(1, 1, p.depth * 0.78)
      })
    }
  })

  return (
    <group ref={group} visible={false}>
      <mesh ref={plank} material={plankMat} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <mesh ref={edge} material={plankEdgeMat}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
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
    </group>
  )
}

function Wall({ metrics }: { metrics: Metrics }) {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (!mesh.current) return
    mesh.current.visible = useShelf.getState().mode === 'library'
  })
  return (
    <mesh ref={mesh} position={[0, 0, WALL_Z - 0.02]} receiveShadow>
      <planeGeometry args={[metrics.visW * 1.6, metrics.visH * 1.6]} />
      <shadowMaterial transparent opacity={0.34} />
    </mesh>
  )
}

function Scene() {
  const metrics = useMetrics()
  const fontsReady = useFontsReady()
  const { camera, gl, scene } = useThree()
  const setInitialized = useShelf((s) => s.setInitialized)
  const light = useRef<THREE.DirectionalLight>(null)

  useEffect(() => {
    camera.position.set(0, CAM_Y, CAM_Z)
    camera.lookAt(0, 0, 0)
    ;(camera as THREE.PerspectiveCamera).fov = FOV
    camera.updateProjectionMatrix()
  }, [camera, metrics])

  // Room environment → believable reflections and clearcoat highlights, no HDR download.
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl)
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    scene.environment = env
    return () => {
      scene.environment = null
      env.dispose()
      pmrem.dispose()
    }
  }, [gl, scene])

  // The shadow camera covers the visible slab of the scene (the camera never moves; the content does).
  useEffect(() => {
    const l = light.current
    if (!l) return
    const c = l.shadow.camera
    c.left = -metrics.visW * 0.7
    c.right = metrics.visW * 0.7
    c.top = metrics.visH * 0.9
    c.bottom = -metrics.visH * 0.9
    c.near = 1
    c.far = 60
    c.updateProjectionMatrix()
    l.shadow.mapSize.set(2048, 2048)
    l.shadow.normalBias = 0.03
    l.shadow.bias = -0.0005
  }, [metrics])

  useEffect(() => {
    if (fontsReady) setInitialized(true)
  }, [fontsReady, setInitialized])

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight ref={light} position={[-8, 14, 18]} intensity={1.35} color="#fff4e6" castShadow />
      <directionalLight position={[10, -2, 8]} intensity={0.3} color="#dfe8ff" />
      <Wall metrics={metrics} />
      {lands.map((l) => (
        <Plank key={l.id} landId={l.id} metrics={metrics} />
      ))}
      {fontsReady && books.map((b, i) => <BookInstance key={b.id} book={b} index={i} metrics={metrics} />)}
    </>
  )
}

export default function Books3D() {
  const initialized = useShelf((s) => s.initialized)
  return (
    <div className="PressCanvas__container" aria-hidden="true">
      <Canvas
        className={`PressCanvas ${initialized ? 'is-initialized' : ''}`}
        dpr={[1, 2]}
        shadows={{ type: THREE.PCFSoftShadowMap }}
        camera={{ fov: FOV, near: 1, far: 120, position: [0, CAM_Y, CAM_Z] }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.9 }}
        style={{ pointerEvents: 'none' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
