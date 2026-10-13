import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { conceptIndex, landById } from '@/content/api'
import { booksByLand, type Book } from './books'
import { COVER_IMAGES, LOGO_URL } from './covers'
import { useShelf } from './store'

/**
 * A topic's shelf: the header, one invisible row per book (real links, so the
 * shelf is keyboard and screen-reader accessible) grouped under section
 * labels, and the left rail of dashes. The 3D books in <Books3D/> follow these rows.
 */
export default function Shelf({ landId, hidden }: { landId: string; hidden?: boolean }) {
  const setHovered = useShelf((s) => s.setHovered)
  const setEntry = useShelf((s) => s.setEntry)
  const registerRow = useShelf((s) => s.registerRow)
  const hovered = useShelf((s) => s.hovered)
  const [current, setCurrent] = useState(0)
  const topics = useMemo(() => topicCounts(), [])
  const list = useMemo(() => booksByLand.get(landId) ?? [], [landId])
  const land = landById.get(landId)
  // Sections of the shelf, for the rail's table of contents.
  const sections = useMemo(() => {
    const out: RailSection[] = []
    list.forEach((b, i) => {
      if (b.entry.abstraction === 'super-concept') out.push({ id: b.id, title: b.title, start: i, count: 1 })
      else if (out.length) out[out.length - 1].count++
    })
    return out
  }, [list])

  // Which row is nearest the viewport centre (for the rail).
  useEffect(() => {
    if (hidden) return
    const onScroll = () => {
      const rows = useShelf.getState().rows
      const mid = window.innerHeight / 2
      let best = 0
      let bestD = Infinity
      list.forEach((b, i) => {
        const r = rows.get(b.id)?.getBoundingClientRect()
        if (!r) return
        const d = Math.abs(r.top + r.height / 2 - mid)
        if (d < bestD) {
          bestD = d
          best = i
        }
      })
      setCurrent(best)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [hidden, list])

  const jump = useCallback(
    (i: number) => {
      const el = useShelf.getState().rows.get(list[i].id)
      if (!el) return
      const r = el.getBoundingClientRect()
      window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - window.innerHeight / 2, behavior: 'smooth' })
    },
    [list],
  )

  return (
    <>
      <PressHeaderBar hidden={hidden} crumb={land ? { title: land.title, tagline: land.tagline, count: list.length } : undefined} />

      {!hidden && <Rail items={list} current={current} onJump={jump} hidden={false} sections={sections} />}

      <div className={`PressList__container ${hidden ? 'is-hidden' : ''}`}>
        <ol className="PressList" aria-label={`Books in ${land?.title ?? landId}`}>
          {list.map((b) => {
            const n = topics.get(b.id) ?? 1
            const isSection = b.entry.abstraction === 'super-concept'
            return (
              <Fragment key={b.id}>
                {isSection && (
                  <li className="PressGroup" aria-hidden="true">
                    <span className="PressGroup__label">{b.title}</span>
                  </li>
                )}
                <li className="PressBook">
                  <Link
                    to={`/book/${b.id}`}
                    className="PressBook__link"
                    ref={(el) => registerRow(b.id, el)}
                    onMouseEnter={() => setHovered(b.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(b.id)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setEntry(b.id)}
                  >
                    <span className="PressBook__text">
                      <span className="PressBook__title">{b.title}</span>
                      <span className="PressBook__author">{b.author}</span>
                    </span>
                    <span className={`PressBook__badge ${hovered === b.id ? 'is-visible' : ''}`} aria-hidden="true">
                      <span className="PressBook__badgeCount">{n}</span> {n === 1 ? 'topic' : 'topics'}
                      {COVER_IMAGES[b.id] && <span className="PressBook__badgeNote"> · illustrated cover</span>}
                    </span>
                  </Link>
                </li>
              </Fragment>
            )
          })}
        </ol>
      </div>
    </>
  )
}

/** Topics in a book = the concept itself plus everything beneath it in the hierarchy. */
function topicCounts(): Map<string, number> {
  const children = new Map<string, string[]>()
  for (const c of conceptIndex) {
    if (!c.parent) continue
    if (!children.has(c.parent)) children.set(c.parent, [])
    children.get(c.parent)!.push(c.id)
  }
  const memo = new Map<string, number>()
  const count = (id: string): number => {
    if (memo.has(id)) return memo.get(id)!
    const n = 1 + (children.get(id) ?? []).reduce((acc, ch) => acc + count(ch), 0)
    memo.set(id, n)
    return n
  }
  for (const c of conceptIndex) count(c.id)
  return memo
}

/** Shared header: press mark (home), name, tagline / topic crumb, and the search trigger. */
export function PressHeaderBar({ hidden, crumb }: { hidden?: boolean; crumb?: { title: string; tagline: string; count: number } }) {
  const setSearchOpen = useShelf((s) => s.setSearchOpen)
  return (
    <header className={`PressHeader ${hidden ? 'is-hidden' : ''}`}>
      <Link to="/" className="PressHeader__logo" aria-label="Theme Park Press home">
        <PressMark />
      </Link>
      <div className="PressHeader__text">
        <h1 className="PressHeader__name">
          {crumb ? (
            <>
              <Link to="/" className="PressHeader__home">
                Theme Park Press
              </Link>
              <span className="PressHeader__sep"> / </span>
              {crumb.title}
            </>
          ) : (
            'Theme Park Press'
          )}
        </h1>
        <p className="PressHeader__tagline">{crumb ? `${crumb.tagline}  ·  ${crumb.count} books` : 'Ideas for designing joy'}</p>
      </div>
      <button className={`PressSearchButton ${hidden ? 'is-hidden' : ''}`} onClick={() => setSearchOpen(true)} aria-label="Search the library">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          <circle cx="6.8" cy="6.8" r="4.6" />
          <path d="M10.3 10.3 14 14" />
        </svg>
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>
    </header>
  )
}

export interface RailSection {
  id: string
  title: string
  /** Index of the section's first book in `items`. */
  start: number
  count: number
}

/**
 * The left rail: one tick per book (longer where a section starts), with the
 * name of the section in view written up its side. Hovering the rail (or
 * pressing the section name) opens the list of all sections to jump between.
 */
export function Rail({
  items,
  current,
  onJump,
  hidden,
  back,
  sections,
}: {
  items: Book[]
  current: number
  onJump: (i: number) => void
  hidden: boolean
  back?: string
  sections?: RailSection[]
}) {
  const navigate = useNavigate()
  const [help, setHelp] = useState(false)
  const [open, setOpen] = useState(false)
  const starts = useMemo(() => new Set(sections?.map((s) => s.start)), [sections])
  let now = -1
  sections?.forEach((s, i) => {
    if (s.start <= current) now = i
  })

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={`PressRail ${open ? 'is-open' : ''}`} aria-label="Shelf navigation">
      {back && (
        <button className="PressRail__back" onClick={() => navigate(back)} aria-label="Back to the shelf">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 10H3M9 4l-6 6 6 6" />
          </svg>
        </button>
      )}
      <div
        className="PressRail__zone"
        onMouseEnter={() => sections && setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false)
        }}
      >
        <ol className={`PressRail__list ${hidden && !back ? 'is-hidden' : ''}`} style={{ height: `min(60vh, ${items.length * 13}px)` }}>
          {items.map((b, i) => (
            <li key={b.id}>
              <button
                className={`PressRail__dash ${i === current ? 'is-active' : ''} ${starts.has(i) ? 'is-section' : ''}`}
                onClick={() => (back ? navigate(back) : onJump(i))}
                aria-label={b.title}
                title={b.title}
                tabIndex={open ? -1 : 0}
              />
            </li>
          ))}
        </ol>
        {sections && now >= 0 && (
          <button className="PressRail__now" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={`Section: ${sections[now].title}. Show all sections`}>
            <span>{sections[now].title}</span>
          </button>
        )}
        {sections && (
          <div className="PressRail__toc" aria-hidden={!open}>
            <p className="PressRail__tocHead">
              {sections.length} sections · {items.length} books
            </p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <button
                    className={`PressRail__tocItem ${i === now ? 'is-active' : ''}`}
                    tabIndex={open ? 0 : -1}
                    aria-current={i === now ? 'true' : undefined}
                    onClick={() => {
                      onJump(s.start)
                      setOpen(false)
                    }}
                  >
                    <span className="PressRail__tocNum">{i + 1}</span>
                    <span className="PressRail__tocTitle">{s.title}</span>
                    <span className="PressRail__tocCount">{s.count}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
      <button className="PressRail__help" onClick={() => setHelp((v) => !v)} aria-expanded={help} aria-label="Help">
        ?
      </button>
      {help && (
        <div className="PressRail__helpBox" role="dialog">
          Scroll to browse the shelf. Hover a book to lift it. Hover the rail on the left to see every section and jump between them. Click a book to open it; keep scrolling to read the next one. Drag the standing book to turn
          it. <kbd>Esc</kbd> puts it back. <kbd>⌘K</kbd> searches everything.
        </div>
      )}
    </nav>
  )
}

export function PressMark() {
  return <img className="PressMark" src={LOGO_URL} alt="" width="28" height="38" draggable={false} />
}
