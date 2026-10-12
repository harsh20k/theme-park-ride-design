import { useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router'
import Books3D from './press/Books3D'
import Shelf from './press/Shelf'
import BookDetails from './press/BookDetails'
import { useShelf } from './press/store'

export default function App() {
  return (
    <>
      <Books3D />
      <Routes>
        <Route path="/" element={<ShelfPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="*" element={<ShelfPage />} />
      </Routes>
    </>
  )
}

function ShelfPage() {
  const setActive = useShelf((s) => s.setActive)
  const setEntry = useShelf((s) => s.setEntry)
  useEffect(() => {
    // Coming back from a book: land on its row so the book lies back down in place.
    const last = useShelf.getState().active
    setActive(null)
    setEntry(null)
    document.body.classList.remove('is-activeProduct')
    if (last) {
      requestAnimationFrame(() => {
        const el = useShelf.getState().rows.get(last)
        if (!el) return
        const r = el.getBoundingClientRect()
        window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - window.innerHeight / 2 })
      })
    }
  }, [setActive, setEntry])
  return <Shelf />
}

function BookPage() {
  const { id = '' } = useParams()
  const setActive = useShelf((s) => s.setActive)
  const setEntry = useShelf((s) => s.setEntry)
  useEffect(() => {
    setActive(id)
    if (!useShelf.getState().entry) setEntry(id)
    document.body.classList.add('is-activeProduct')
  }, [id, setActive, setEntry])
  useEffect(() => () => document.body.classList.remove('is-activeProduct'), [])
  return (
    <>
      <Shelf hidden />
      <BookDetails id={id} />
    </>
  )
}
