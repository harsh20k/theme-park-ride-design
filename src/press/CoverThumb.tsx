import { useEffect, useRef } from 'react'
import type { Book } from './books'
import { COVER_IMAGES } from './covers'
import { COVER_W, artReady, drawCover } from './theme'

const ASPECT = 0.68
const W = 400

/**
 * A book's front cover as a flat picture (the same art the 3D books wear,
 * painted small), for pages that show books without the 3D canvas.
 */
export default function CoverThumb({ book, className }: { book: Book; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let alive = true
    artReady().then(() => {
      const c = ref.current
      if (!alive || !c) return
      const h = Math.round(W / ASPECT)
      c.width = W
      c.height = h
      const ctx = c.getContext('2d')!
      const art = drawCover(book.title, book.imprint, book.theme, book.seed, ASPECT, { k: W / COVER_W, lite: true })
      ctx.drawImage(art.color, 0, 0, W, h)
      const url = COVER_IMAGES[book.id]
      if (!url) return
      // Photographed covers show the whole book on a dark ground: crop to the front board (as BookModel does).
      const img = new Image()
      img.onload = () => {
        if (!alive) return
        const uw = 0.7
        const vh = (uw * 3) / (4 * ASPECT)
        const sx = 0.17 * img.naturalWidth
        const sy = (0.07 + (0.86 - vh) / 2) * img.naturalHeight
        ctx.drawImage(img, sx, sy, uw * img.naturalWidth, vh * img.naturalHeight, 0, 0, W, h)
      }
      img.src = url
    })
    return () => {
      alive = false
    }
  }, [book])

  return <canvas ref={ref} className={className} width={W} height={Math.round(W / ASPECT)} aria-hidden="true" />
}
