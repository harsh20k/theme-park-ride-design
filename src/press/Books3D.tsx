import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { books, type Book } from './books'
import { useShelf } from './store'
import { drawCover, drawPages, drawSpine } from './theme'

/**
 * Fixed, full-height, 70vw-wide canvas (as on press.stripe.com). Books lie on
 * their backs, spine toward the camera, and follow the invisible DOM rows as
 * the document scrolls. Hover lifts a book toward the camera. The active book
 * stands up, turns, and parks in the detail page's left column.
 */

const FOV = 14
const CAM_Z = 40
const CAM_Y = 0.95
const DETAIL_YAW = THREE.MathUtils.degToRad(28)
const DETAIL_PITCH = THREE.MathUtils.degToRad(6)

const FLAT_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, Math.PI / 2, 0, 'YXZ'))
const STAND_Q = new THREE.Quaternion().setFromEuler(new THREE.Euler(DETAIL_PITCH, DETAIL_YAW, 0, 'YXZ'))

interface Metrics {
  visH: number
  pxPerUnit: number
  winW: number
  winH: number
  L: number
  T: number
  W: number
}

function useMetrics(): Metrics {
  const { size } = useThree()
  return useMemo(() => {
    const winW = window.innerWidth
    const winH = window.innerHeight
    const visH = 2 * CAM_Z * Math.tan(THREE.MathUtils.degToRad(FOV / 2))
    const pxPerUnit = size.height / visH
    const L = (0.5 * winW) / pxPerUnit // book length ≈ 50vw on screen
    const T = 0.122 * visH // spine thickness ≈ 12.2vh
    const W = L * 0.7
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

const pagesTex = (() => {
  let t: THREE.CanvasTexture | null = null
  return () => {
    if (!t) {
      t = new THREE.CanvasTexture(drawPages())
      t.colorSpace = THREE.SRGBColorSpace
      t.wrapS = t.wrapT = THREE.RepeatWrapping
    }
    return t
  }
})()

function BookMesh({ book, index, metrics, fontsReady }: { book: Book; index: number; metrics: Metrics; fontsReady: boolean }) {
  const mesh = useRef<THREE.Mesh>(null)
  const pos = useMemo(() => new THREE.Vector3(0, -index * 3, 0), [index])
  const quat = useMemo(() => FLAT_Q.clone(), [])
  const scale = useRef(1)
  const opacity = useRef(1)
  const tmpV = useMemo(() => new THREE.Vector3(), [])
  const tmpQ = useMemo(() => new THREE.Quaternion(), [])

  const materials = useMemo(() => {
    const cover = new THREE.CanvasTexture(drawCover(book.title, book.author, book.theme, book.seed))
    cover.colorSpace = THREE.SRGBColorSpace
    cover.anisotropy = 8
    const spineCanvas = drawSpine(book.title, book.author, book.theme, book.seed)
    // Rotate the horizontal spine art into the tall −x face (text reads top→bottom when standing).
    const tall = document.createElement('canvas')
    tall.width = spineCanvas.height
    tall.height = spineCanvas.width
    const ctx = tall.getContext('2d')!
    ctx.translate(tall.width, 0)
    ctx.rotate(Math.PI / 2)
    ctx.drawImage(spineCanvas, 0, 0)
    const spine = new THREE.CanvasTexture(tall)
    spine.colorSpace = THREE.SRGBColorSpace
    spine.anisotropy = 8
    const pages = pagesTex()
    const mk = (map: THREE.Texture | null, color = '#ffffff') =>
      new THREE.MeshStandardMaterial({ map, color, roughness: 0.85, metalness: 0.05, transparent: true })
    const back = mk(null, book.theme.palette[1])
    return [mk(pages), mk(spine), mk(pages), mk(pages), mk(cover), back]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book, fontsReady])

  useFrame((_, dt) => {
    const m = mesh.current
    if (!m) return
    const { hovered, active, rows, tilt } = useShelf.getState()
    const { pxPerUnit, winW, winH, L, visH } = metrics
    const d = Math.min(dt, 1 / 30)
    const k = 1 - Math.exp(-d * 6)

    let targetQ = FLAT_Q
    let targetScale = 1
    let targetOpacity = 1

    if (active) {
      if (active === book.id) {
        // Stand in the left column: column centre ≈ 32.4vw, book centre ≈ 47vh.
        const cx = winW >= 900 ? 0.335 * winW : 0.5 * winW
        const cy = winW >= 900 ? 0.48 * winH : 0.33 * winH
        tmpV.set((cx - winW / 2) / pxPerUnit, (winH / 2 - cy) / pxPerUnit, 2.5)
        targetScale = (0.6 * visH) / L
        tmpQ.setFromEuler(new THREE.Euler(DETAIL_PITCH + tilt[1] * 0.08, DETAIL_YAW + tilt[0] * 0.12, 0, 'YXZ'))
        targetQ = tmpQ
      } else {
        // Everyone else drifts off to the sides and fades.
        const row = rows.get(book.id)
        const r = row?.getBoundingClientRect()
        const y = r ? (winH / 2 - (r.top + r.height / 2)) / pxPerUnit : pos.y
        tmpV.set((index % 2 ? 1 : -1) * visH * 1.4, y, -4)
        targetOpacity = 0
      }
    } else {
      const row = rows.get(book.id)
      const r = row?.getBoundingClientRect()
      if (r) {
        const y = (winH / 2 - (r.top + r.height / 2)) / pxPerUnit
        const isHover = hovered === book.id
        tmpV.set(isHover ? -0.18 : 0, y, isHover ? 0.9 : 0)
      } else {
        tmpV.copy(pos)
      }
      targetQ = STAND_Q === targetQ ? FLAT_Q : FLAT_Q
    }

    pos.lerp(tmpV, active ? k * 0.8 : Math.min(1, k * 1.6))
    quat.slerp(targetQ, k * 0.9)
    scale.current += (targetScale - scale.current) * k * 0.9
    opacity.current += (targetOpacity - opacity.current) * k * 1.2

    m.position.copy(pos)
    m.quaternion.copy(quat)
    m.scale.setScalar(scale.current)
    for (const mat of materials) {
      mat.opacity = opacity.current
    }
    m.visible = opacity.current > 0.02 && Math.abs(pos.y) < visH * 1.2
  })

  // Books on a real shelf differ a little in size and page count.
  const { L, T, W } = metrics
  const v = (book.seed % 1000) / 1000
  const w2 = (((book.seed >> 10) % 1000) / 1000)
  return (
    <mesh ref={mesh} material={materials} frustumCulled={false}>
      <boxGeometry args={[W * (0.96 + w2 * 0.08), L * (0.97 + v * 0.06), T * (0.8 + w2 * 0.4)]} />
    </mesh>
  )
}

function Scene() {
  const metrics = useMetrics()
  const fontsReady = useFontsReady()
  const { camera } = useThree()
  const setInitialized = useShelf((s) => s.setInitialized)

  useEffect(() => {
    camera.position.set(0, CAM_Y, CAM_Z)
    camera.lookAt(0, 0, 0)
    ;(camera as THREE.PerspectiveCamera).fov = FOV
    camera.updateProjectionMatrix()
  }, [camera, metrics])

  useEffect(() => {
    if (fontsReady) setInitialized(true)
  }, [fontsReady, setInitialized])

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[-6, 10, 14]} intensity={1.4} />
      <directionalLight position={[8, -4, 6]} intensity={0.35} />
      {fontsReady && books.map((b, i) => <BookMesh key={b.id} book={b} index={i} metrics={metrics} fontsReady={fontsReady} />)}
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
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
