import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import type { Concept } from '@content/schema'
import { conceptIdFromHref } from '@content/markdown'
import { conceptById, content, loadConcept, localGraph } from '@/content/api'
import { bookById } from './books'
import { useShelf } from './store'
import Markdown from './Markdown'
import Visual from '@/ui/visuals/Visual'
import { Rail } from './Shelf'

/**
 * The book page, mirroring press.stripe.com/<book>: 58/42 split, the 3D book
 * standing in the left column (drawn by <Books3D/>), serif text on the right.
 * Explore-further links become the bordered link rows; related concepts fill
 * the "praise" grid.
 */
export default function BookDetails({ id }: { id: string }) {
  const book = bookById.get(id)
  const [concept, setConcept] = useState<Concept | null>(null)
  const navigate = useNavigate()
  const setTilt = useShelf((s) => s.setTilt)

  useEffect(() => {
    let alive = true
    setConcept(null)
    loadConcept(id).then((c) => alive && setConcept(c))
    return () => {
      alive = false
    }
  }, [id])

  // The whole page takes the book's colours (as press.stripe.com does on the body).
  useEffect(() => {
    if (!book) return
    const b = document.body
    b.style.setProperty('--backgroundColor', book.theme.bg)
    b.style.setProperty('--color', book.theme.color)
    return () => {
      b.style.removeProperty('--backgroundColor')
      b.style.removeProperty('--color')
    }
  }, [book])

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [id, navigate])

  const graph = useMemo(() => localGraph(id), [id])
  const explore = useMemo(() => (concept ? parseExplore(concept.body.exploreFurther) : []), [concept])
  const sources = useMemo(() => (concept ? resolveSources(concept) : []), [concept])

  if (!book) {
    return (
      <main className="PressDetails" style={{ ['--backgroundColor' as string]: '#201819', ['--color' as string]: '#fff' }}>
        <div className="PressDetails__info">
          <div className="PressDetails__right">
            <div className="PressDetails__title">No book called “{id}”.</div>
            <Link to="/" className="Link">
              Back to the shelf
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const related = graph ? [...(graph.parent ? [{ concept: graph.parent, type: 'parent of this idea' }] : []), ...graph.children.map((c) => ({ concept: c, type: 'builds on this idea' })), ...graph.related.map((r) => ({ concept: r.concept, type: r.type.replace(/-/g, ' ') }))] : []

  return (
    <main className="PressDetails">
      <Rail current={-1} onJump={() => undefined} hidden={false} back />
      <div className="PressDetails__info">
        <div
          className="PressDetails__left"
          aria-hidden="true"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            setTilt([((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1])
          }}
          onMouseLeave={() => setTilt([0, 0])}
        />
        <div className="PressDetails__right">
          <h1 className="PressDetails__title">{book.title}</h1>
          <p className="PressDetails__author">{book.author}</p>
          <div className="PressDetails__hr" />

          {!concept && <p className="PressDetails__summary">Opening…</p>}
          {concept && (
            <>
              <Markdown className="PressDetails__summary">{concept.body.prose}</Markdown>

              {concept.body.visuals.length > 0 && (
                <div className="PressDetails__figures">
                  {concept.body.visuals.map((v, i) => (
                    <Visual key={i} block={v} index={i} />
                  ))}
                </div>
              )}

              {explore.length > 0 && (
                <div className="PressDetails__buyOptions">
                  <div className="PressDetails__buyGroupLabel">Explore further</div>
                  <div className="PressDetails__buyGroup">
                    {explore.map((e, i) =>
                      e.to ? (
                        <Link key={i} to={e.to} className="PressDetails__buy">
                          <span className="PressDetails__buyHoverLeft" />
                          <span className="PressDetails__buyLabel">
                            {e.text}
                            {e.note && <span className="PressDetails__buyNote"> {e.note}</span>}
                          </span>
                          <BuyIcon />
                        </Link>
                      ) : (
                        <a key={i} href={e.href} className="PressDetails__buy" target="_blank" rel="noopener noreferrer">
                          <span className="PressDetails__buyHoverLeft" />
                          <span className="PressDetails__buyLabel">
                            {e.text}
                            {e.note && <span className="PressDetails__buyNote"> {e.note}</span>}
                          </span>
                          <BuyIcon />
                        </a>
                      ),
                    )}
                  </div>
                </div>
              )}

              {sources.length > 0 && (
                <section className="PressAuthor">
                  <div className="PressAuthor__label">Sources</div>
                  <div className="PressAuthor__bio">
                    {sources.map((s, i) => (
                      <p key={i}>
                        {s.url ? (
                          <a className="Link" href={s.url} target="_blank" rel="noopener noreferrer">
                            {s.title}
                          </a>
                        ) : (
                          s.title
                        )}
                        {s.meta && <span className="PressAuthor__meta"> — {s.meta}</span>}
                      </p>
                    ))}
                    <p className="PressAuthor__meta">
                      Confidence: {concept.confidenceLabel}
                      {concept.origin === 'sample' ? ' · placeholder text from sample content' : ''}
                    </p>
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="PressPraiseList">
          <div className="PressPraiseList__label">Related ideas</div>
          <div className="PressPraiseList__carousel">
            {related.map(({ concept: c, type }) => (
              <Link key={`${type}-${c.id}`} to={`/book/${c.id}`} className="PressPraise">
                <div className="PressPraise__quote">{c.summary || c.title}</div>
                <div className="PressPraise__name">{c.title}</div>
                <div className="PressPraise__role">
                  {type} · {bookById.get(c.id)?.author ?? c.land}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function BuyIcon() {
  return (
    <span className="PressDetails__buyIcon" aria-hidden="true">
      <span className="PressDetails__buyIconPair">
        <svg className="PressDetails__buyIconSvg" width="9" height="9" viewBox="0 0 9 9">
          <path d="M1 8L8 1M8 1H2.5M8 1v5.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>
  )
}

interface ExploreItem {
  text: string
  href: string
  to?: string
  note?: string
}

/** `- [Title](../land/id.md) — note` lines → link rows. Plain bullets become notes without links. */
function parseExplore(md: string): ExploreItem[] {
  const out: ExploreItem[] = []
  for (const line of md.split('\n')) {
    const m = /^\s*[-*]\s+(.*)$/.exec(line)
    if (!m) continue
    const item = m[1].trim()
    const link = /\[([^\]]+)\]\(([^)\s]+)\)/.exec(item)
    if (link) {
      const id = /^(?:[a-z]+:)?\/\//i.test(link[2]) ? null : conceptIdFromHref(link[2])
      const rest = item
        .replace(link[0], '')
        .replace(/^\s*[—–-]\s*/, '')
        .replace(/\*\*/g, '')
        .trim()
      out.push({ text: link[1], href: link[2], to: id && conceptById.has(id) ? `/book/${id}` : undefined, note: rest || undefined })
    } else {
      const code = /`([a-z0-9-]+)`\s*[—–-]?\s*(.*)$/.exec(item)
      if (code) {
        const res = content.resources.find((r) => r.id === code[1])
        out.push({ text: res?.title ?? code[2] ?? code[1], href: res?.url ?? '#', note: res?.author })
      }
    }
  }
  return out
}

function resolveSources(c: Concept): { title: string; url?: string; meta?: string }[] {
  return c.sources.map((s) => {
    if (typeof s === 'string') {
      const r = content.resources.find((x) => x.id === s)
      if (r) return { title: r.title, url: r.url, meta: [r.author, r.year].filter(Boolean).join(', ') }
      return { title: s }
    }
    return { title: s.title, url: s.url, meta: [s.author, s.year].filter(Boolean).join(', ') }
  })
}
