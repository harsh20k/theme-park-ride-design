import { Suspense, lazy, useCallback, useEffect } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router'
import { lands } from './content/api'
import { useApp } from './state/store'
import { conceptPath, landPath } from './routes'
import Hud from './ui/Hud'
import ReadingRoom from './ui/ReadingRoom'
import ConceptCard from './ui/ConceptCard'
import './ui/library/library.css'

const ParkScene = lazy(() => import('./three/ParkScene'))
const LibraryPage = lazy(() => import('./ui/library/LibraryPage'))

/** Stage 2 art-direction test: only one land in the park. Remove `only` for the full park. */
const STAGE2_LAND = 'human-factors'

export default function App() {
  return (
    <Routes>
      <Route path="/library/*" element={<LibraryRoutes />} />
      <Route path="/" element={<ParkPage />}>
        <Route path="land/:land" element={null} />
        <Route path="land/:land/:concept" element={null} />
        <Route path="hub/:section?" element={null} />
      </Route>
      <Route path="/land/:land/:concept?" element={<ParkPage />} />
      <Route path="*" element={<ParkPage />} />
    </Routes>
  )
}

function ParkPage() {
  const { land, concept } = useParams<{ land?: string; concept?: string }>()
  const navigate = useNavigate()
  const near = useApp((s) => s.nearBuilding)

  const enterLand = useCallback((id: string) => navigate(landPath(id)), [navigate])
  const leaveRoom = useCallback(() => navigate('/'), [navigate])
  const closeCard = useCallback(() => {
    if (land) navigate(landPath(land))
    else navigate('/')
  }, [land, navigate])

  // E / Enter to enter the nearby building (only when nothing is open).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (land || concept) return
      if ((e.key === 'e' || e.key === 'E' || e.key === 'Enter') && near) {
        e.preventDefault()
        enterLand(near)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [near, land, concept, enterLand])

  return (
    <>
      <Suspense fallback={<LoadingScene />}>
        <ParkScene lands={lands} onEnterLand={enterLand} only={[STAGE2_LAND]} />
      </Suspense>
      <Hud onEnterNear={() => near && enterLand(near)} />
      {land && !concept && <ReadingRoom landId={land} mode="park" onClose={leaveRoom} />}
      {concept && <ConceptCard conceptId={concept} mode="park" onClose={closeCard} />}
      {concept && !land && <RedirectToConcept id={concept} />}
    </>
  )
}

/** `/land/unknown/<id>` style URLs get normalised to the concept's real land. */
function RedirectToConcept({ id }: { id: string }) {
  const navigate = useNavigate()
  useEffect(() => {
    void navigate(conceptPath(id), { replace: true })
  }, [id, navigate])
  return null
}

function LibraryRoutes() {
  return (
    <Suspense fallback={<LoadingScene label="opening the library…" />}>
      <LibraryPage />
    </Suspense>
  )
}

export function LoadingScene({ label = 'folding the park…' }: { label?: string }) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading__card paper">
        <span className="tape" aria-hidden="true" />
        <div className="loading__fold" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>{label}</p>
      </div>
    </div>
  )
}
