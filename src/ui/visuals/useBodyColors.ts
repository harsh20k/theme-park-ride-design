import { useEffect, useState } from 'react'

export interface BodyColors {
  color: string
  bg: string
}

function read(): BodyColors {
  const cs = getComputedStyle(document.body)
  return {
    color: cs.getPropertyValue('--color').trim() || '#f1e6d2',
    bg: cs.getPropertyValue('--backgroundColor').trim() || '#201819',
  }
}

/**
 * The page's live ink/background colours. The reading flow re-tints the body
 * per book by setting `--color` / `--backgroundColor` on its style attribute;
 * visuals that bake colours into an SVG subscribe here so they re-draw when
 * the book changes instead of keeping the previous book's palette.
 */
export function useBodyColors(): BodyColors {
  const [colors, setColors] = useState<BodyColors>(() => (typeof document === 'undefined' ? { color: '#f1e6d2', bg: '#201819' } : read()))
  useEffect(() => {
    const update = () => {
      const next = read()
      setColors((prev) => (prev.color === next.color && prev.bg === next.bg ? prev : next))
    }
    update()
    const mo = new MutationObserver(update)
    mo.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] })
    return () => mo.disconnect()
  }, [])
  return colors
}
