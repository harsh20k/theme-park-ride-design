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
  useEffect(() => {
    setActive(null)
    document.body.classList.remove('is-activeProduct')
  }, [setActive])
  return <Shelf />
}

function BookPage() {
  const { id = '' } = useParams()
  const setActive = useShelf((s) => s.setActive)
  useEffect(() => {
    setActive(id)
    document.body.classList.add('is-activeProduct')
    return () => document.body.classList.remove('is-activeProduct')
  }, [id, setActive])
  return (
    <>
      <Shelf hidden />
      <BookDetails id={id} />
    </>
  )
}
