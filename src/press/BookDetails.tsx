import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import type { Concept } from '@content/schema'
import { conceptIdFromHref } from '@content/markdown'
import { conceptById, content, loadConcept, localGraph } from '@/content/api'
import { books, bookById, type Book } from './books'
import { useShelf } from './store'
import Markdown from './Markdown'
import Visual from '@/ui/visuals/Visual'
import { Rail } from './Shelf'

/**
 * The reading flow, mirroring press.stripe.com/<book>: a 58/42 split with the
 * 3D book standing in the left column (drawn by <Books3D/>, tracking the
 * sticky anchor) and serif text on the right. Sections run continuously from
 * the clicked book to the end of the shelf; the URL, rail and page tint follow
 * whichever section is in view.
 */
export default function BookDetails({ id }: { id: string }) {
  const navigate = useNavigate()
  const entry = useShelf((s) => s.entry) ?? id
  const entryIndex = Math.max(0, books.findIndex((b) => b.id === entry))
  const flow = useMemo(() => books.slice(entryIndex), [entryIndex])
  const [current, setCurrent] = useState(id)
  const currentRef = useRef(id)

  // Which section is in view → URL + tint + rail.
  useEffect(() => {
    const onScroll = () => {
      const anchors = useShelf.getState().anchors
      const probe = window.innerHeight * 0.45
      let best: string | null = null
      let bestD = Infinity
      for (const b of flow) {
        const r = anchors.get(b.id)?.getBoundingClientRect()
        if (!r) continue
        const d = Math.abs(r.top + r.height / 2 - probe)
        if (d < bestD) {
          bestD = d
          best = b.id
        }
      }
      if (best && best !== currentRef.current) {
        currentRef.current = best
        setCurrent(best)
        navigate(`/book/${best}`, { replace: true })
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [flow, navigate])

  // The whole page takes the current book's colours (as press.stripe.com does on the body).
  useEffect(() => {
    const book = bookById.get(current)
    if (!book) return
    const b = document.body
    b.style.setProperty('--backgroundColor', book.theme.bg)
    b.style.setProperty('--color', book.theme.color)
  }, [current])
  useEffect(
    () => () => {
      document.body.style.removeProperty('--backgroundColor')
      document.body.style.removeProperty('--color')
    },
    [],
  )

  // Opening a book always starts at the top of its page (the URL then follows the scroll).
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate('/')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  const currentIndex = books.findIndex((b) => b.id === current)

  if (!bookById.get(id)) {
    return (
      <main className="PressDetails">
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

  return (
    <main className="PressDetails">
      <Rail current={currentIndex} onJump={() => undefined} hidden={false} back />
      {flow.map((b, i) => (
        <BookSection key={b.id} book={b} first={i === 0} />
      ))}
      <footer className="PressDetails__end">
        <div className="PressDetails__endInner">
          <p>That is the whole shelf.</p>
          <Link to="/" className="Link">
            Back to the beginning
          </Link>
        </div>
      </footer>
    </main>
  )
}

function useInView(ref: React.RefObject<HTMLElement | null>, margin = '60% 0px') {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setSeen(true)
      },
      { rootMargin: margin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [ref, seen, margin])
  return seen
}

function BookSection({ book, first }: { book: Book; first: boolean }) {
  const registerAnchor = useShelf((s) => s.registerAnchor)
  const setDrag = useShelf((s) => s.setDrag)
  const sectionRef = useRef<HTMLElement>(null)
  const near = useInView(sectionRef)
  const [concept, setConcept] = useState<Concept | null>(null)

  useEffect(() => {
    if (!near || concept) return
    let alive = true
    loadConcept(book.id).then((c) => alive && setConcept(c))
    return () => {
      alive = false
    }
  }, [near, concept, book.id])

  const graph = useMemo(() => localGraph(book.id), [book.id])
  const explore = useMemo(() => (concept ? parseExplore(concept.body.exploreFurther) : []), [concept])
  const sources = useMemo(() => (concept ? resolveSources(concept) : []), [concept])
  const related = graph
    ? [
        ...(graph.parent ? [{ concept: graph.parent, type: 'parent of this idea' }] : []),
        ...graph.children.map((c) => ({ concept: c, type: 'builds on this idea' })),
        ...graph.related.map((r) => ({ concept: r.concept, type: r.type.replace(/-/g, ' ') })),
      ]
    : []

  // Drag to turn the standing book; springs back on release.
  const drag = useRef<{ x: number; yaw: number } | null>(null)

  return (
    <section ref={sectionRef} className={`PressDetails__section ${first ? 'is-first' : ''}`} data-book={book.id}>
      <div className="PressDetails__info">
        <div
          className="PressDetails__left"
          aria-hidden="true"
          onPointerDown={(e) => {
            drag.current = { x: e.clientX, yaw: useShelf.getState().dragYaw }
            e.currentTarget.setPointerCapture(e.pointerId)
            setDrag(useShelf.getState().dragYaw, true)
          }}
          onPointerMove={(e) => {
            if (!drag.current) return
            setDrag(drag.current.yaw + (e.clientX - drag.current.x) * 0.012, true)
          }}
          onPointerUp={() => {
            drag.current = null
            setDrag(0, false)
          }}
          onPointerCancel={() => {
            drag.current = null
            setDrag(0, false)
          }}
        >
          <div className="PressDetails__anchor" ref={(el) => registerAnchor(book.id, el)} />
        </div>
        <div className="PressDetails__right">
          <h1 className="PressDetails__title">{book.title}</h1>
          <p className="PressDetails__author">{book.author}</p>
          <div className="PressDetails__hr" />

          {!concept && <p className="PressDetails__summary">{book.entry.summary || 'Opening…'}</p>}
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
                        <Link key={i} to={e.to} className="PressDetails__buy" onClick={() => jumpTo(e.to!)}>
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
              <Link key={`${type}-${c.id}`} to={`/book/${c.id}`} className="PressPraise" onClick={() => jumpTo(`/book/${c.id}`)}>
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
    </section>
  )
}

/** Following a link to another book restarts the flow from that book. */
function jumpTo(path: string) {
  const id = path.replace('/book/', '')
  useShelf.getState().setEntry(id)
  window.scrollTo({ top: 0 })
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

/** `- [Title](../land/id.md) — note` lines → link rows. Resource-id bullets resolve against resources.json. */
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
