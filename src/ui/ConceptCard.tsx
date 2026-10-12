import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import type { Concept } from '@content/schema'
import { conceptById, landById, loadConcept, localGraph } from '@/content/api'
import { conceptPath, landPath } from '@/routes'
import { useApp } from '@/state/store'
import { toyFor } from '@/toys/registry'
import Markdown from './Markdown'
import Visual from './visuals/Visual'
import './ConceptCard.css'

interface Props {
  conceptId: string
  mode: 'park' | 'library'
  onClose: () => void
}

/**
 * The concept card: an accessible HTML overlay (dialog) — visual first, short
 * prose with inline links, related concepts (local graph), sources, and the
 * interactive toy when one exists.
 */
export default function ConceptCard({ conceptId, mode, onClose }: Props) {
  const [concept, setConcept] = useState<Concept | null>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading')
  const markVisited = useApp((s) => s.markVisited)
  const visited = useApp((s) => s.visited)
  const reducedMotion = useApp((s) => s.reducedMotion)
  const navigate = useNavigate()
  const closeRef = useRef<HTMLButtonElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let alive = true
    setState('loading')
    loadConcept(conceptId).then((c) => {
      if (!alive) return
      setConcept(c)
      setState(c ? 'ready' : 'missing')
      if (c) markVisited(c.id)
    })
    return () => {
      alive = false
    }
  }, [conceptId, markVisited])

  useEffect(() => {
    closeRef.current?.focus()
    bodyRef.current?.scrollTo({ top: 0 })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [conceptId, onClose])

  const entry = conceptById.get(conceptId)
  const land = entry ? landById.get(entry.land) : undefined
  const graph = localGraph(conceptId)
  const toy = entry ? toyFor(entry.id, entry.toy) : null

  return (
    <div className="card-backdrop" onClick={onClose} role="presentation">
      <article
        className={`concept-card paper ${reducedMotion ? '' : 'concept-card--popup'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="concept-title"
        onClick={(e) => e.stopPropagation()}
        style={{ ['--land-color' as string]: land?.color ?? 'var(--paper-2)', ['--land-accent' as string]: land?.accent ?? 'var(--accent)' }}
      >
        <span className="tape" aria-hidden="true" />
        <span className="tape tape--right" aria-hidden="true" />
        <header className="concept-card__head">
          <div className="concept-card__crumbs">
            {land && (
              <Link to={landPath(land.id, mode)} className="crumb" style={{ background: land.color }}>
                {land.icon} {land.title}
              </Link>
            )}
            {entry && <span className="badge">{entry.abstraction}</span>}
            {entry && <span className="badge">{entry.level}</span>}
            {entry?.origin === 'sample' && (
              <span className="badge badge--sample" title="Placeholder text from /sample-content — real research content will replace it">
                placeholder
              </span>
            )}
          </div>
          <h1 id="concept-title" className="concept-card__title">
            {entry?.title ?? conceptId}
          </h1>
          {entry?.summary && <p className="concept-card__summary">{entry.summary}</p>}
          <button ref={closeRef} className="paper-btn paper-btn--small concept-card__close" onClick={onClose} aria-label="Close card (Esc)">
            ✕ close
          </button>
        </header>

        <div className="concept-card__body scroll" ref={bodyRef}>
          {state === 'loading' && <p className="concept-card__loading">unfolding…</p>}
          {state === 'missing' && (
            <p>
              There is no card for <code>{conceptId}</code> yet.
            </p>
          )}
          {concept && (
            <>
              {concept.body.visuals.map((v, i) => (
                <Visual key={i} block={v} index={i} />
              ))}

              <Markdown mode={mode} className="concept-card__prose">
                {concept.body.prose}
              </Markdown>

              {toy && (
                <section className="concept-card__toy paper" aria-labelledby="toy-title">
                  <h2 id="toy-title" className="concept-card__h2">
                    🎛 Try it: {toy.title}
                  </h2>
                  <p className="concept-card__blurb">{toy.blurb}</p>
                  <Suspense fallback={<p className="concept-card__loading">winding up the toy…</p>}>
                    <toy.component conceptId={concept.id} />
                  </Suspense>
                </section>
              )}
              {!toy && concept.interactive_idea && (
                <aside className="concept-card__idea">
                  <strong>Toy idea:</strong> {concept.interactive_idea}
                </aside>
              )}

              {graph && (graph.parent || graph.children.length || graph.related.length) ? (
                <section className="concept-card__graph" aria-labelledby="related-title">
                  <h2 id="related-title" className="concept-card__h2">
                    Nearby ideas
                  </h2>
                  <LocalGraphView graph={graph} mode={mode} visited={visited} />
                </section>
              ) : null}

              {concept.body.exploreFurther && (
                <section aria-labelledby="explore-title">
                  <h2 id="explore-title" className="concept-card__h2">
                    Explore further
                  </h2>
                  <Markdown mode={mode} className="concept-card__explore">
                    {concept.body.exploreFurther}
                  </Markdown>
                </section>
              )}

              {concept.sources.length > 0 && (
                <section aria-labelledby="sources-title" className="concept-card__sources">
                  <h2 id="sources-title" className="concept-card__h2">
                    Sources
                  </h2>
                  <ul>
                    {concept.sources.map((s, i) => (
                      <li key={i}>
                        {typeof s === 'string' ? (
                          s
                        ) : (
                          <>
                            {s.url ? (
                              <a href={s.url} target="_blank" rel="noopener noreferrer">
                                {s.title}
                              </a>
                            ) : (
                              s.title
                            )}
                            {s.author && <span className="src-meta"> — {s.author}</span>}
                            {s.year && <span className="src-meta"> ({s.year})</span>}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="concept-card__confidence">
                    Confidence: <strong>{concept.confidenceLabel}</strong>
                    {concept.tags.filter((t) => t !== 'sample-content' && t !== 'toy').length > 0 && (
                      <>
                        {' · '}
                        {concept.tags
                          .filter((t) => t !== 'sample-content' && t !== 'toy')
                          .map((t) => (
                            <span key={t} className="tag">
                              #{t}
                            </span>
                          ))}
                      </>
                    )}
                  </p>
                </section>
              )}
            </>
          )}
        </div>

        <footer className="concept-card__foot">
          {graph?.parent && (
            <button className="paper-btn paper-btn--small" onClick={() => navigate(conceptPath(graph.parent!.id, mode))}>
              ↑ {graph.parent.title}
            </button>
          )}
          <span className="concept-card__url">{conceptPath(conceptId, mode)}</span>
        </footer>
      </article>
    </div>
  )
}

/** Small local graph: parent above, children below, related around — as paper tags on strings. */
function LocalGraphView({ graph, mode, visited }: { graph: NonNullable<ReturnType<typeof localGraph>>; mode: 'park' | 'library'; visited: Set<string> }) {
  const chip = (id: string, title: string, kind: string, color?: string, dir = '') => (
    <Link key={`${kind}-${dir}-${id}`} to={conceptPath(id, mode)} className={`graph-chip graph-chip--${kind} ${visited.has(id) ? 'graph-chip--visited' : ''}`} style={color ? ({ ['--rel' as string]: color } as React.CSSProperties) : undefined}>
      <span className="graph-chip__rel">{kind.replace(/-/g, ' ')}</span>
      {title}
    </Link>
  )
  return (
    <div className="local-graph">
      {graph.parent && <div className="local-graph__row">{chip(graph.parent.id, graph.parent.title, 'parent', 'var(--parent)')}</div>}
      <div className="local-graph__center">{graph.center.title}</div>
      {graph.children.length > 0 && <div className="local-graph__row">{graph.children.map((c) => chip(c.id, c.title, 'child', 'var(--parent)'))}</div>}
      {graph.related.length > 0 && (
        <div className="local-graph__row local-graph__row--related">
          {graph.related.map((r) => chip(r.concept.id, r.concept.title, r.type, `var(--${r.type})`, r.direction))}
        </div>
      )}
    </div>
  )
}
