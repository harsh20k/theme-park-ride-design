import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigationType, useParams } from 'react-router'
import Books3D from './press/Books3D'
import Home from './press/Home'
import Library from './press/Library'
import Search from './press/Search'
import Shelf from './press/Shelf'
import BookDetails from './press/BookDetails'
import { bookById, booksByLand } from './press/books'
import { landById } from './content/api'
import { useShelf, type ShelfMode } from './press/store'
import { cancelPendingOpen } from './press/openBook'

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

/**
 * One place for what every page does on entry: cancel any fade-then-open that
 * was still pending, reset the reading state, tell the canvas which mode it is
 * in, and set the body class. Returns the previously active book (so a topic
 * page can land on the row the reader came from).
 */
function usePageMode(mode: Exclude<ShelfMode, 'book'>, land: string | null, bodyClass: string | null, ready = true): void {
  const setMode = useShelf((s) => s.setMode)
  useEffect(() => {
    if (!ready) return
    cancelPendingOpen()
    const st = useShelf.getState()
    st.setActive(null)
    st.setEntry(null)
    setMode(mode, land)
    document.body.classList.remove('is-activeProduct')
    if (bodyClass) document.body.classList.add(bodyClass)
    return () => {
      if (bodyClass) document.body.classList.remove(bodyClass)
    }
  }, [mode, land, bodyClass, ready, setMode])
}

function HomePage() {
  usePageMode('home', null, 'is-home')
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return <Home />
}

function LibraryPage() {
  usePageMode('library', null, 'is-library')
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return <Library />
}

function TopicPage() {
  const { land = '' } = useParams()
  const known = landById.has(land)
  // Read the book we are coming back from before usePageMode clears it.
  const last = useShelf.getState().active
  usePageMode('topic', land, null, known)
  useEffect(() => {
    if (!known) return
    // Coming back from a book: land on its row so the book lies back down in place.
    if (last && bookById.get(last)?.land === land) {
      requestAnimationFrame(() => {
        const el = useShelf.getState().rows.get(last)
        if (!el) return
        const r = el.getBoundingClientRect()
        window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - window.innerHeight / 2 })
      })
    } else window.scrollTo({ top: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [land, known])
  if (!known) return <Navigate to="/shelves" replace />
  return <Shelf landId={land} />
}

function BookPage() {
  const { id = '' } = useParams()
  const navType = useNavigationType()
  const setMode = useShelf((s) => s.setMode)
  const book = bookById.get(id)
  useEffect(() => {
    if (!book) return
    const st = useShelf.getState()
    const pop = navType === 'POP'
    if (pop) cancelPendingOpen()
    st.setActive(id)
    // The flow runs from `entry` to the end of the topic. Restart it from this
    // book when there is no entry, the entry is on another shelf, or this book
    // sits before the entry (Back/Forward to an earlier book).
    const order = (booksByLand.get(book.land) ?? []).map((b) => b.id)
    const entry = st.entry
    const stale = !entry || bookById.get(entry)?.land !== book.land || order.indexOf(id) < order.indexOf(entry)
    if (stale) st.setEntry(id)
    setMode('book', book.land)
    document.body.classList.add('is-activeProduct')
    // Back/Forward to a book further down the flow: bring its section into view.
    if (pop && !stale) {
      requestAnimationFrame(() => {
        const el = useShelf.getState().anchors.get(id)
        if (!el) return
        const r = el.getBoundingClientRect()
        const want = window.innerHeight * 0.14
        if (Math.abs(r.top - want) > 8) window.scrollTo({ top: window.scrollY + r.top - want })
      })
    }
  }, [id, book, navType, setMode])
  useEffect(() => () => document.body.classList.remove('is-activeProduct'), [])
  if (!book) return <Navigate to="/" replace />
  return (
    <>
      <Shelf landId={book.land} hidden />
      <BookDetails id={id} />
    </>
  )
}
