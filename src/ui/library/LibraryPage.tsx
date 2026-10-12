import { Link, Route, Routes, useNavigate, useParams } from 'react-router'
import { lands, conceptsByLand, provenance } from '@/content/api'
import { conceptPath, landPath } from '@/routes'
import { useApp } from '@/state/store'
import ConceptCard from '../ConceptCard'
import ReadingRoom from '../ReadingRoom'
import './library.css'

/**
 * Library mode: the fast, flat 2D view of the whole knowledge base.
 * Stage 4 adds search, the 2D mindmap/graph, glossary, timeline and paths;
 * this first cut already lets you read every card without the 3D scene.
 */
export default function LibraryPage() {
  return (
    <Routes>
      <Route index element={<LibraryHome />} />
      <Route path="land/:land" element={<LibraryLand />} />
      <Route path="land/:land/:concept" element={<LibraryLand />} />
    </Routes>
  )
}

function LibraryHome() {
  const visited = useApp((s) => s.visited)
  return (
    <main className="library scroll">
      <header className="library__head">
        <div>
          <p className="library__kicker">Library mode</p>
          <h1>Theme Park & Ride Design — the whole shelf</h1>
          <p className="library__sub">
            Every land, every card, no driving required.{' '}
            <Link to="/" className="paper-btn paper-btn--small">
              🎢 Back to the park
            </Link>
          </p>
        </div>
      </header>
      <section className="library__lands">
        {lands.map((land, i) => {
          const cs = conceptsByLand.get(land.id) ?? []
          const done = cs.filter((c) => visited.has(c.id)).length
          const sample = provenance.sampleLands.includes(land.id)
          return (
            <Link to={landPath(land.id, 'library')} key={land.id} className="land-card paper" style={{ ['--land-color' as string]: land.color, ['--i' as string]: i }}>
              <span className="land-card__swatch" aria-hidden="true" />
              <h2>{land.title}</h2>
              <p>{land.tagline}</p>
              <p className="land-card__meta">
                {cs.length} cards · {done} read {sample && <span className="badge badge--sample">placeholder</span>}
              </p>
            </Link>
          )
        })}
      </section>
    </main>
  )
}

function LibraryLand() {
  const { land, concept } = useParams<{ land: string; concept?: string }>()
  const navigate = useNavigate()
  if (!land) return null
  return (
    <main className="library">
      <ReadingRoom landId={land} mode="library" onClose={() => navigate('/library')} />
      {concept && <ConceptCard conceptId={concept} mode="library" onClose={() => navigate(landPath(land, 'library'))} />}
      {concept && <span className="sr-only">{conceptPath(concept, 'library')}</span>}
    </main>
  )
}
