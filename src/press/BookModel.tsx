import { forwardRef, useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import type { Book } from './books'
import { COVER_IMAGES } from './covers'
import { drawCover, drawPages, drawSpine, tallCanvas, type CoverArt } from './theme'

/**
 * A built hardcover, standing frame: x = width (spine at −x), y = height,
 * z = thickness (front cover at +z).
 *
 *  - two cover boards with a small overhang past the page block
 *  - an inset page block with page-edge texture on head, tail and fore-edge
 *  - a shallow rounded spine joining the boards
 *  - MeshPhysicalMaterial: clearcoat for the laminate sheen, roughness from the
 *    cloth grain, metallic foil where the gold motifs and titles are
 *
 * Art is generated lazily (one book per frame) so the page never stalls; until
 * then a plain cloth material in the book's colour stands in.
 */
export interface BookDims {
  W: number
  L: number
  T: number
}

interface Props {
  book: Book
  dims: BookDims
  /** Generate the real cover art (when the book is near the viewport). */
  wanted: boolean
}

const pagesTexture = (() => {
  let t: THREE.CanvasTexture | null = null
  return () => {
    if (!t) {
      t = new THREE.CanvasTexture(drawPages())
      t.colorSpace = THREE.SRGBColorSpace
      t.wrapS = t.wrapT = THREE.RepeatWrapping
      t.anisotropy = 8
    }
    return t
  }
})()

function tex(canvas: HTMLCanvasElement, srgb = true) {
  const t = new THREE.CanvasTexture(canvas)
  if (srgb) t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 8
  return t
}

const PHYS = { roughness: 0.9, clearcoat: 0.35, clearcoatRoughness: 0.38, envMapIntensity: 0.65, transparent: true }

/** A photographed cover (3:4 studio shot of the whole book) cropped to the board's W:L face. */
function imageCoverMaterial(url: string, aspect: number): THREE.MeshPhysicalMaterial {
  const mat = new THREE.MeshPhysicalMaterial({ color: '#ffffff', metalness: 0, roughness: 0.62, clearcoat: 0.45, clearcoatRoughness: 0.35, envMapIntensity: 0.5, transparent: true })
  new THREE.TextureLoader().load(url, (t) => {
    t.colorSpace = THREE.SRGBColorSpace
    t.anisotropy = 8
    // The photo has dark margins and shows the book's own spine on the left; crop to the front board, then to the face aspect.
    const u0 = 0.17
    const v0 = 0.07
    let uw = 0.7
    let vh = 0.86
    const photoAspect = (uw * 3) / (vh * 4)
    if (photoAspect > aspect) uw = (aspect * vh * 4) / 3
    else vh = (uw * 3) / (4 * aspect)
    t.repeat.set(uw, vh)
    t.offset.set(u0 + (0.7 - uw) / 2, v0 + (0.86 - vh) / 2)
    mat.map = t
    mat.needsUpdate = true
  })
  return mat
}

function coverMaterial(art: CoverArt, rotate: boolean): THREE.MeshPhysicalMaterial {
  const c = rotate ? tallCanvas(art.color) : art.color
  const f = rotate ? tallCanvas(art.foil) : art.foil
  const r = rotate ? tallCanvas(art.rough) : art.rough
  return new THREE.MeshPhysicalMaterial({ map: tex(c), metalnessMap: tex(f, false), metalness: 1, roughnessMap: tex(r, false), ...PHYS })
}

// ---------------------------------------------------------------------------
// One-per-frame generation queue
// ---------------------------------------------------------------------------
const queue: (() => void)[] = []
let pumping = false
function pump() {
  if (pumping) return
  pumping = true
  const step = () => {
    const job = queue.shift()
    if (job) job()
    if (queue.length) requestAnimationFrame(step)
    else pumping = false
  }
  requestAnimationFrame(step)
}
function enqueue(job: () => void) {
  queue.push(job)
  pump()
}

export interface BookMaterials {
  cover: THREE.Material
  back: THREE.Material
  spine: THREE.Material
  boardEdge: THREE.Material
  inner: THREE.Material
  pages: THREE.Material
  all: THREE.Material[]
}

export function useBookMaterials(book: Book, dims: BookDims, wanted: boolean): BookMaterials {
  const shared = useMemo(() => {
    const boardEdge = new THREE.MeshPhysicalMaterial({ color: book.theme.palette[1], roughness: 0.8, clearcoat: 0.3, transparent: true })
    const inner = new THREE.MeshStandardMaterial({ color: '#efe8d8', roughness: 0.95, transparent: true })
    const pages = new THREE.MeshStandardMaterial({ map: pagesTexture(), color: '#f1ebdc', roughness: 0.9, transparent: true })
    const cloth = new THREE.MeshPhysicalMaterial({ color: book.theme.palette[0], ...PHYS })
    return { boardEdge, inner, pages, cloth }
  }, [book])
  const [art, setArt] = useState<{ cover: THREE.Material; back: THREE.Material; spine: THREE.Material } | null>(null)

  useEffect(() => {
    if (!wanted || art) return
    let alive = true
    enqueue(() => {
      if (!alive) return
      const aspect = dims.W / dims.L
      const coverArt = drawCover(book.title, book.author, book.theme, book.seed, aspect)
      const image = COVER_IMAGES[book.id]
      const cover = image ? imageCoverMaterial(image, aspect) : coverMaterial(coverArt, false)
      // Back board: same cloth/marble, no text — reuse the pre-text art.
      const back = coverMaterial(coverArt.plain, false)
      const spine = coverMaterial(drawSpine(book.title, book.author, book.theme, book.seed, dims.L / dims.T), true)
      setArt({ cover, back, spine })
    })
    return () => {
      alive = false
    }
  }, [wanted, art, book, dims.W, dims.L, dims.T])

  return useMemo(() => {
    const cover = art?.cover ?? shared.cloth
    const back = art?.back ?? shared.cloth
    const spine = art?.spine ?? shared.cloth
    return { cover, back, spine, boardEdge: shared.boardEdge, inner: shared.inner, pages: shared.pages, all: [cover, back, spine, shared.boardEdge, shared.inner, shared.pages] }
  }, [art, shared])
}

const BookModel = forwardRef<THREE.Group, Props & { materials: BookMaterials }>(function BookModel({ dims, materials: m }, ref) {
  const { W, L, T } = dims
  const boardT = T * 0.075
  const over = L * 0.012
  const pagesT = T - boardT * 2
  const pagesW = W - over
  const pagesL = L - over * 2
  const spineGeo = useMemo(() => new THREE.CylinderGeometry(T / 2, T / 2, L + over * 2, 24, 1, true, Math.PI, Math.PI), [T, L, over])

  return (
    <group ref={ref}>
      <mesh position={[0, 0, T / 2 - boardT / 2]} material={[m.boardEdge, m.boardEdge, m.boardEdge, m.boardEdge, m.cover, m.inner]}>
        <boxGeometry args={[W, L + over * 2, boardT]} />
      </mesh>
      <mesh position={[0, 0, -T / 2 + boardT / 2]} material={[m.boardEdge, m.boardEdge, m.boardEdge, m.boardEdge, m.inner, m.back]}>
        <boxGeometry args={[W, L + over * 2, boardT]} />
      </mesh>
      <mesh position={[-over / 2, 0, 0]} material={[m.pages, m.inner, m.pages, m.pages, m.inner, m.inner]}>
        <boxGeometry args={[pagesW, pagesL, pagesT]} />
      </mesh>
      <mesh position={[-W / 2, 0, 0]} scale={[0.38, 1, 1]} geometry={spineGeo} material={m.spine} />
    </group>
  )
})

export default BookModel
