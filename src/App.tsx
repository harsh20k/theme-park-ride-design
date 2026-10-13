import { useEffect } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router'
import Books3D from './press/Books3D'
import Home from './press/Home'
import Library from './press/Library'
import Search from './press/Search'
import Shelf from './press/Shelf'
import BookDetails from './press/BookDetails'
import { bookById } from './press/books'
import { landById } from './content/api'
import { useShelf } from './press/store'

export default function App() {
  return (
    <>
      <Books3D />
      <Search />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shelves" element={<LibraryPage />} />
        <Route path="/topic/:land" element={<TopicPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

function HomePage() {
  const setMode = useShelf((s) => s.setMode)
  useEffect(() => {
    const st = useShelf.getState()
    st.setActive(null)
    st.setEntry(null)
    setMode('home', null)
    document.body.classList.remove('is-activeProduct')
    document.body.classList.add('is-home')
    window.scrollTo({ top: 0 })
    return () => document.body.classList.remove('is-home')
  }, [setMode])
  return <Home />
}

function LibraryPage() {
  const setMode = useShelf((s) => s.setMode)
  useEffect(() => {
    const st = useShelf.getState()
    st.setActive(null)
    st.setEntry(null)
    setMode('library', null)
    document.body.classList.remove('is-activeProduct')
    document.body.classList.add('is-library')
    window.scrollTo({ top: 0 })
    return () => document.body.classList.remove('is-library')
  }, [setMode])
  return <Library />
}

function TopicPage() {
  const { land = '' } = useParams()
  const setMode = useShelf((s) => s.setMode)
  const known = landById.has(land)
  useEffect(() => {
    if (!known) return
    const st = useShelf.getState()
    // Coming back from a book: land on its row so the book lies back down in place.
    const last = st.active
    st.setActive(null)
    st.setEntry(null)
    setMode('topic', land)
    document.body.classList.remove('is-activeProduct')
    if (last && bookById.get(last)?.land === land) {
      requestAnimationFrame(() => {
        const el = useShelf.getState().rows.get(last)
        if (!el) return
        const r = el.getBoundingClientRect()
        window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - window.innerHeight / 2 })
      })
    } else window.scrollTo({ top: 0 })
  }, [land, known, setMode])
  if (!known) return <Navigate to="/shelves" replace />
  return <Shelf landId={land} />
}

function BookPage() {
  const { id = '' } = useParams()
  const setMode = useShelf((s) => s.setMode)
  const book = bookById.get(id)
  useEffect(() => {
    if (!book) return
    const st = useShelf.getState()
    st.setActive(id)
    if (!st.entry || bookById.get(st.entry)?.land !== book.land) st.setEntry(id)
    setMode('book', book.land)
    document.body.classList.add('is-activeProduct')
  }, [id, book, setMode])
  useEffect(() => () => document.body.classList.remove('is-activeProduct'), [])
  if (!book) return <Navigate to="/" replace />
  return (
    <>
      <Shelf landId={book.land} hidden />
      <BookDetails id={id} />
    </>
  )
}
