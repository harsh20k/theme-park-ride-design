import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { landById, shelvesForLand, conceptsByLand } from '@/content/api'
import { conceptPath } from '@/routes'
import { useApp } from '@/state/store'
import { themeFor } from '@/three/landTheme'
import { lands } from '@/content/api'
import './ReadingRoom.css'

interface Props {
  landId: string
  mode: 'park' | 'library'
  onClose: () => void
}

/**
 * The cozy reading room inside a land's library: paper shelves grouped by
 * super-concept, each book a concept. HTML, so it is keyboard and screen-reader
 * friendly; the 3D room is dressing, the shelves are the real UI.
 */
export default function ReadingRoom({ landId, mode, onClose }: Props) {
  const land = landById.get(landId)
  const visited = useApp((s) => s.visited)
  const reduced = useApp((s) => s.reducedMotion)
  const firstRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    firstRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [landId, onClose])

  if (!land) {
    return (
      <div className="room-backdrop" onClick={onClose}>
        <div className="room paper">
          <p>No land called “{landId}”.</p>
        </div>
      </div>
    )
  }
  const theme = themeFor(
    land,
    lands.findIndex((l) => l.id === landId),
  )
  const shelves = shelvesForLand(landId)
  const total = conceptsByLand.get(landId)?.length ?? 0
  const done = (conceptsByLand.get(landId) ?? []).filter((c) => visited.has(c.id)).length
  let bookIndex = 0

  return (
    <div className="room-backdrop" onClick={onClose} role="presentation">
      <section
        className={`room paper ${reduced ? '' : 'room--unfold'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="room-title"
        onClick={(e) => e.stopPropagation()}
        style={{ ['--land-color' as string]: theme.color, ['--land-accent' as string]: theme.accent }}
      >
        <span className="tape" aria-hidden="true" />
        <header className="room__head">
          <div>
            <p className="room__kicker">
              {theme.icon} {theme.landmark}
            </p>
            <h1 id="room-title">{land.title}</h1>
            {land.tagline && <p className="room__tagline">{land.tagline}</p>}
            <p className="room__progress">
              <span className="room__bar" aria-hidden="true">
                <span style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
              </span>
              {done}/{total} books opened
            </p>
          </div>
          <button className="paper-btn paper-btn--small" onClick={onClose} aria-label="Leave the reading room (Esc)">
            ← back to park
          </button>
        </header>

        <div className="room__shelves scroll">
          {shelves.length === 0 && <p className="room__empty">The shelves are empty — no concept cards for this land yet.</p>}
          {shelves.map(({ shelf, books }) => (
            <div className="shelf" key={shelf.id}>
              <div className="shelf__label">
                {shelf.id.endsWith('-miscellany') ? (
                  <span className="shelf__title">{shelf.title}</span>
                ) : (
                  <Link
                    ref={bookIndex++ === 0 ? firstRef : undefined}
                    to={conceptPath(shelf.id, mode)}
                    className={`shelf__title ${visited.has(shelf.id) ? 'is-visited' : ''}`}
                    title={shelf.summary}
                  >
                    {shelf.title}
                  </Link>
                )}
                <span className="shelf__count">{books.length} books</span>
              </div>
              <div className="shelf__books">
                {books.map((b, i) => (
                  <Link
                    key={b.id}
                    to={conceptPath(b.id, mode)}
                    className={`book book--${b.abstraction} ${visited.has(b.id) ? 'is-visited' : ''}`}
                    style={{ ['--i' as string]: i, ['--hue' as string]: `${(i * 47) % 360}` }}
                    title={b.summary}
                  >
                    <span className="book__spine">{b.title}</span>
                    <span className="book__level" aria-label={b.level}>
                      {b.level.slice(0, 3)}
                    </span>
                  </Link>
                ))}
                {books.length === 0 && <span className="shelf__empty">no books yet</span>}
              </div>
              <div className="shelf__plank" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
