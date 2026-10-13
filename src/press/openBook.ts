import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { useShelf } from './store'

const FADE_MS = 280

/**
 * Open a book from a link. From the shelf this is a plain navigation (the
 * book stands up from its row). From inside another book the page would
 * otherwise swap its whole contents and jump to the top in one frame, so the
 * text and the 3D book fade out, the flow is swapped while nothing is
 * visible, and the new book fades in already in place.
 *
 * Pass the click event to keep ⌘/Ctrl-click (new tab) working.
 */
export function useOpenBook() {
  const navigate = useNavigate()
  return useCallback(
    (id: string, e?: React.MouseEvent) => {
      if (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        e.preventDefault()
      }
      const st = useShelf.getState()
      if (st.turning) return
      const swap = () => {
        useShelf.getState().setEntry(id)
        navigate(`/book/${id}`)
        window.scrollTo({ top: 0 })
      }
      const reduced = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
      if (st.mode !== 'book' || reduced) {
        swap()
        return
      }
      st.setTurning(true)
      document.body.classList.add('is-turning')
      window.setTimeout(() => {
        swap()
        useShelf.getState().bumpCut()
        // Two frames: one for React to lay out the new flow, one for the books to take their places.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            useShelf.getState().setTurning(false)
            document.body.classList.remove('is-turning')
          }),
        )
      }, FADE_MS)
    },
    [navigate],
  )
}
