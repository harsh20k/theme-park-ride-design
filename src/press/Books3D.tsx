import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { books, type Book } from './books'
import { useShelf } from './store'
import BookModel, { useBookMaterials, type BookDims } from './BookModel'

/**
 * Fixed, full-height, 70vw-wide canvas (as on press.stripe.com).
 *
 * Shelf: books lie on their backs, spine toward the camera, following the
 * invisible DOM rows as the document scrolls. Hover lifts a book.
 *
 * Reading flow: each book stands up and tracks its sticky anchor in the
 * left column — pinned while its text scrolls, then rising and shrinking as
 * the anchor is pushed out by the next section.
 */

const FOV = 14
const CAM_Z = 40
const CAM_Y = 0.95
const STAND = { yaw: THREE.MathUtils.degToRad(26), pitch: THREE.MathUtils.degToRad(7), roll: THREE.MathUtils.degToRad(-3.5) }

const FLAT_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, Math.PI / 2, 0, 'YXZ'))

interface Metrics extends BookDims {
  visH: number
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
    const L = (0.5 * winW) / pxPerUnit // book length ≈ 50vw on screen
    const T = 0.115 * visH // spine thickness ≈ 11.5vh — identical for every book
    const W = L * 0.68
    return { visH, pxPerUnit, winW, winH, L, T, W }
  }, [size.height, size.width])
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
  const quat = useMemo(() => FLAT_Q.clone(), [])
  const scale = useRef(1)
  const opacity = useRef(1)
  const tmpV = useMemo(() => new THREE.Vector3(), [])
  const tmpQ = useMemo(() => new THREE.Quaternion(), [])
  const tmpE = useMemo(() => new THREE.Euler(0, 0, 0, 'YXZ'), [])

  useFrame(({ clock }, dt) => {
    const g = group.current
    if (!g) return
    const { hovered, active, rows, anchors, dragYaw } = useShelf.getState()
    const { pxPerUnit, winW, winH, L, visH } = metrics
    const d = Math.min(dt, 1 / 30)
    const k = 1 - Math.exp(-d * 6)

    let targetQ: THREE.Quaternion = FLAT_Q
    let targetScale = 1
    let targetOpacity = 1
    let lerpK = Math.min(1, k * 1.6)

    const anchor = active ? anchors.get(book.id) : undefined
    if (!wanted) {
      // Generate art once the book is within ~1.5 screens of the viewport.
      const el = anchor ?? rows.get(book.id)
      const r = el?.getBoundingClientRect()
      if (r && r.height && r.bottom > -winH * 1.5 && r.top < winH * 2.5) setWanted(true)
    }
    if (active && anchor) {
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
    } else if (active) {
      // Not part of the flow: drift aside and fade.
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      const y = r && r.height ? (winH / 2 - (r.top + r.height / 2)) / pxPerUnit : pos.y
      tmpV.set((index % 2 ? 1 : -1) * visH * 1.4, y, -4)
      targetOpacity = 0
      lerpK = k * 0.8
    } else {
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      if (r && r.height) {
        const y = (winH / 2 - (r.top + r.height / 2)) / pxPerUnit
        const isHover = hovered === book.id
        tmpV.set(isHover ? -0.18 : 0, y, isHover ? 0.9 : 0)
      } else {
        tmpV.copy(pos)
      }
    }

    pos.lerp(tmpV, lerpK)
    quat.slerp(targetQ, k * 1.1)
    scale.current += (targetScale - scale.current) * k * 1.1
    opacity.current += (targetOpacity - opacity.current) * k * 1.2

    g.position.copy(pos)
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

  useEffect(() => {
    if (fontsReady) setInitialized(true)
  }, [fontsReady, setInitialized])

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[-8, 12, 16]} intensity={1.35} color="#fff4e6" />
      <directionalLight position={[10, -2, 8]} intensity={0.3} color="#dfe8ff" />
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
        camera={{ fov: FOV, near: 1, far: 120, position: [0, CAM_Y, CAM_Z] }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.9 }}
        style={{ pointerEvents: 'none' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
