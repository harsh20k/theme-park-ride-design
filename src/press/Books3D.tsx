import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { booksByLand, type Book } from './books'
import { useShelf } from './store'
import BookModel, { useBookMaterials } from './BookModel'
import LibraryShelves from './LibraryShelves'
import { CAM_Y, CAM_Z, FOV, useMetrics, type Metrics } from './metrics'
import { artReady } from './theme'

/**
 * Fixed, full-height, 70vw-wide canvas (as on press.stripe.com).
 *
 * Library: one wooden plank per topic with its section books standing on it
 * (see LibraryShelves — light stand-in books, so the page scrolls freely).
 *
 * Topic shelf: the topic's books lie on their backs, spine toward the camera,
 * following the invisible DOM rows. Hover (or a pointer near the row) lifts
 * the book and tilts it toward the pointer.
 *
 * Reading flow: each book stands up and tracks its sticky anchor in the
 * left column — pinned while its text scrolls, then rising and shrinking as
 * the anchor is pushed out by the next section.
 */

/** Standing pose in the reading flow: turned to the right and tilted back, so the cover faces up and to the right. */
const STAND = { yaw: THREE.MathUtils.degToRad(33), pitch: THREE.MathUtils.degToRad(-12), roll: THREE.MathUtils.degToRad(-2.5) }
/**
 * A book scrolling up into the reading flow arrives face-on (no rotation) and
 * turns into the standing pose once this much of its height is on screen; it
 * goes flat again only if it drops back below the second figure.
 */
const STAND_AT = 0.9
const FLAT_BELOW = 0.55
const FRONT_Q = new THREE.Quaternion()
/** Max tilt toward the pointer on the topic shelf. */
const HOVER_TILT = THREE.MathUtils.degToRad(7)
/** Max turn of the standing book toward a pointer on or near it. */
const STAND_HOVER = { yaw: THREE.MathUtils.degToRad(9), pitch: THREE.MathUtils.degToRad(5) }

const FLAT_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, Math.PI / 2, 0, 'YXZ'))

function useFontsReady(): boolean {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let alive = true
    artReady().then(() => alive && setReady(true))
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
  const opacity = useRef(0) // fades in when the topic opens
  // The book is drawn at its target plus an offset that eases to zero. Scrolling moves the target, so the
  // book follows the page exactly; only changes of view (shelf → standing and back) are animated.
  const off = useMemo(() => new THREE.Vector3(), [])
  const scaleOff = useRef(0)
  const view = useRef<'row' | 'stand' | 'aside' | null>(null)
  const stood = useRef(true)
  const lastCut = useRef(useShelf.getState().cut)
  const tmpV = useMemo(() => new THREE.Vector3(), [])
  const tmpLift = useMemo(() => new THREE.Vector3(), [])
  const tmpQ = useMemo(() => new THREE.Quaternion(), [])
  const tmpE = useMemo(() => new THREE.Euler(0, 0, 0, 'YXZ'), [])

  useFrame(({ clock }, dt) => {
    const g = group.current
    if (!g) return
    const { mode, hovered, active, rows, anchors, dragYaw, dragging, pointer, turning, cut } = useShelf.getState()
    // The reading flow was just swapped behind a fade: take the new place at once, no flight.
    const cutNow = cut !== lastCut.current
    if (cutNow) {
      lastCut.current = cut
      view.current = null
    }
    const { pxPerUnit, winW, winH, L, visH } = metrics
    const d = Math.min(dt, 1 / 30)
    const k = 1 - Math.exp(-d * 6)

    let targetQ: THREE.Quaternion = FLAT_Q
    let targetScale = 1
    let targetOpacity = 1
    let next: 'row' | 'stand' | 'aside' = 'row'
    let lerpK = Math.min(1, k * 1.6)
    tmpLift.set(0, 0, 0)

    const anchor = mode === 'book' && active ? anchors.get(book.id) : undefined
    if (!wanted) {
      // Generate art once the book is within ~1.5 screens of the viewport.
      const el = anchor ?? rows.get(book.id)
      const r = el?.getBoundingClientRect()
      if (r && r.height && r.bottom > -winH * 1.5 && r.top < winH * 2.5) setWanted(true)
    }

    if (mode === 'book' && active && anchor) {
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
      next = 'stand'
      const bh = 0.8 * r.height * shrink
      // How much of the book has risen above the bottom of the window.
      const risen = (winH - (cy - bh / 2)) / bh
      if (view.current !== 'stand') stood.current = risen >= STAND_AT
      else if (risen >= STAND_AT) stood.current = true
      else if (risen < FLAT_BELOW) stood.current = false
      const idle = Math.sin(clock.elapsedTime * 0.5 + index) * 0.02
      // Turn a little toward the pointer, but only while it is on or just beside the book.
      let hoverYaw = 0
      let hoverPitch = 0
      if (pointer.active && !dragging && stood.current) {
        const bw = bh * (metrics.W / L)
        const nx = (pointer.x - cx) / (bw / 2)
        const ny = (pointer.y - cy) / (bh / 2)
        if (Math.abs(nx) < 1.35 && Math.abs(ny) < 1.2) {
          hoverYaw = THREE.MathUtils.clamp(nx, -1, 1) * STAND_HOVER.yaw
          hoverPitch = THREE.MathUtils.clamp(ny, -1, 1) * STAND_HOVER.pitch
        }
      }
      if (stood.current) {
        tmpE.set(STAND.pitch + hoverPitch, STAND.yaw + dragYaw + idle + hoverYaw, STAND.roll)
        tmpQ.setFromEuler(tmpE)
        targetQ = tmpQ
      } else targetQ = FRONT_Q // still arriving: face-on
      lerpK = k * 1.3
    } else if (mode === 'book' && active) {
      // Not part of the flow: drift aside and fade.
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      const y = r && r.height ? (winH / 2 - (r.top + r.height / 2)) / pxPerUnit : pos.y
      tmpV.set((index % 2 ? 1 : -1) * visH * 1.4, y, -4)
      targetOpacity = 0
      next = 'aside'
      lerpK = k * 0.8
    } else {
      // Topic shelf: lying flat on its row.
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      if (r && r.height) {
        const cy = r.top + r.height / 2
        tmpV.set(0, (winH / 2 - cy) / pxPerUnit, 0)
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

    if (next !== view.current) {
      // A change of view starts from wherever the book is now. Books lying back on the shelf from the
      // sides (or appearing for the first time) simply take their row.
      const animate = view.current !== null && (next === 'stand' || next === 'aside' || view.current === 'stand')
      if (animate) {
        off.copy(pos).sub(tmpV)
        scaleOff.current = scale.current - targetScale
      } else {
        off.set(0, 0, 0)
        scaleOff.current = 0
      }
      view.current = next
    }
    off.multiplyScalar(1 - lerpK)
    scaleOff.current *= 1 - lerpK
    pos.copy(tmpV).add(off)
    lift.lerp(tmpLift, k * 1.6)
    if (cutNow) {
      quat.copy(targetQ)
      opacity.current = 0
    } else quat.slerp(targetQ, next === 'row' ? k * 1.6 : k * 1.1)
    scale.current = targetScale + scaleOff.current
    // Between two books everything fades out quickly, then back in at the usual pace.
    if (turning) opacity.current += (0 - opacity.current) * Math.min(1, k * 3.5)
    else opacity.current += (targetOpacity - opacity.current) * k * 1.2

    g.position.copy(pos).add(lift)
    g.quaternion.copy(quat)
    g.scale.setScalar(scale.current)
    for (const mat of materials.all) mat.opacity = opacity.current
    g.visible = opacity.current > 0.02 && Math.abs(pos.y) < visH * 1.5
  })

  return <BookModel ref={group} book={book} dims={dims} wanted={wanted} materials={materials} />
}

function Scene() {
  const metrics = useMetrics()
  const fontsReady = useFontsReady()
  const { camera, gl, scene } = useThree()
  const setInitialized = useShelf((s) => s.setInitialized)
  const light = useRef<THREE.DirectionalLight>(null)
  // Only the open topic's books are in the scene; the library has its own stand-ins.
  const land = useShelf((s) => s.land)
  const shelfBooks = useMemo(() => (land ? (booksByLand.get(land) ?? []) : []), [land])

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
      <directionalLight ref={light} position={[-5, 11, 20]} intensity={1.35} color="#fff4e6" castShadow />
      <directionalLight position={[10, -2, 8]} intensity={0.3} color="#dfe8ff" />
      <LibraryShelves metrics={metrics} ready={fontsReady} />
      {fontsReady && shelfBooks.map((b, i) => <BookInstance key={b.id} book={b} index={i} metrics={metrics} />)}
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
