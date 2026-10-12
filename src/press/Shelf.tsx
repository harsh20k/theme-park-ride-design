import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { books } from './books'
import { useShelf } from './store'

/**
 * The shelf page: a header, one invisible row per book (real links, so the
 * shelf is keyboard and screen-reader accessible), and the left rail of dashes.
 * The 3D books in <Books3D/> follow these rows.
 */
export default function Shelf({ hidden }: { hidden?: boolean }) {
  const setHovered = useShelf((s) => s.setHovered)
  const registerRow = useShelf((s) => s.registerRow)
  const [current, setCurrent] = useState(0)

  // Which row is nearest the viewport centre (for the rail).
  useEffect(() => {
    if (hidden) return
    const onScroll = () => {
      const rows = useShelf.getState().rows
      const mid = window.innerHeight / 2
      let best = 0
      let bestD = Infinity
      books.forEach((b, i) => {
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
  }, [hidden])

  const jump = useCallback((i: number) => {
    const el = useShelf.getState().rows.get(books[i].id)
    if (!el) return
    const r = el.getBoundingClientRect()
    window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - window.innerHeight / 2, behavior: 'smooth' })
  }, [])

  return (
    <>
      <header className={`PressHeader ${hidden ? 'is-hidden' : ''}`}>
        <Link to="/" className="PressHeader__logo" aria-label="Theme Park Press home">
          <PressMark />
        </Link>
        <div className="PressHeader__text">
          <h1 className="PressHeader__name">Theme Park Press</h1>
          <p className="PressHeader__tagline">Ideas for designing joy</p>
        </div>
      </header>

      <Rail current={current} onJump={jump} hidden={!!hidden} />

      <div className={`PressList__container ${hidden ? 'is-hidden' : ''}`}>
        <ol className="PressList" aria-label="Books">
          {books.map((b) => (
            <li key={b.id} className="PressBook">
              <Link
                to={`/book/${b.id}`}
                className="PressBook__link"
                ref={(el) => registerRow(b.id, el)}
                onMouseEnter={() => setHovered(b.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(b.id)}
                onBlur={() => setHovered(null)}
              >
                <span className="PressBook__text">
                  <span className="PressBook__title">{b.title}</span>
                  <span className="PressBook__author">{b.author}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}

export function Rail({ current, onJump, hidden, back }: { current: number; onJump: (i: number) => void; hidden: boolean; back?: boolean }) {
  const navigate = useNavigate()
  const [help, setHelp] = useState(false)
  return (
    <nav className="PressRail" aria-label="Shelf navigation">
      {back && (
        <button className="PressRail__back" onClick={() => navigate('/')} aria-label="Back to the shelf">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 10H3M9 4l-6 6 6 6" />
          </svg>
        </button>
      )}
      <ol className={`PressRail__list ${hidden && !back ? 'is-hidden' : ''}`}>
        {books.map((b, i) => (
          <li key={b.id}>
            <button
              className={`PressRail__dash ${i === current ? 'is-active' : ''}`}
              onClick={() => (back ? navigate('/') : onJump(i))}
              aria-label={b.title}
              title={b.title}
            />
          </li>
        ))}
      </ol>
      <button className="PressRail__help" onClick={() => setHelp((v) => !v)} aria-expanded={help} aria-label="Help">
        ?
      </button>
      {help && (
        <div className="PressRail__helpBox" role="dialog">
          Scroll to browse the shelf. Hover a book to lift it. Click to open it. Press <kbd>Esc</kbd> to put it back.
        </div>
      )}
    </nav>
  )
}

export function PressMark() {
  return (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="14" cy="18" rx="12.5" ry="16.5" />
      <path d="M7 27 14 9l7 18M9.5 21h9" />
    </svg>
  )
}
