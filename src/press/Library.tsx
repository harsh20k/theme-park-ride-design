import { Link } from 'react-router'
import { lands } from '@/content/api'
import { books, booksByLand, sectionsByLand } from './books'
import { useShelf } from './store'
import { PressHeaderBar } from './Shelf'
import PressFooter from './Footer'

/**
 * The library: one horizontal shelf per topic. The topic's section books
 * stand on the plank (drawn by <Books3D/>, which reads each plank's rect);
 * clicking the label or the plank opens the topic's full shelf of books.
 */
export default function Library() {
  const registerShelf = useShelf((s) => s.registerShelf)
  const setHoveredShelf = useShelf((s) => s.setHoveredShelf)
  const hoveredShelf = useShelf((s) => s.hoveredShelf)

  return (
    <>
      <PressHeaderBar />
      <main className="Library" aria-label="Topics">
        <p className="Library__intro">
          {lands.length === 13 ? 'Thirteen' : lands.length} shelves, {books.length} short books. Pick a topic to open its shelf, or search for anything.
        </p>
        <ol className="Library__shelves">
          {lands.map((land) => {
            const n = booksByLand.get(land.id)?.length ?? 0
            const sections = sectionsByLand.get(land.id) ?? []
            const hover = hoveredShelf === land.id
            return (
              <li key={land.id} className={`Library__shelf ${hover ? 'is-hovered' : ''}`} style={{ '--shelfColor': land.color } as React.CSSProperties}>
                <Link
                  to={`/topic/${land.id}`}
                  className="Library__label"
                  onMouseEnter={() => setHoveredShelf(land.id)}
                  onMouseLeave={() => setHoveredShelf(null)}
                  onFocus={() => setHoveredShelf(land.id)}
                  onBlur={() => setHoveredShelf(null)}
                >
                  <span className="Library__title">{land.title}</span>
                  <span className="Library__tagline">{land.tagline}</span>
                  <span className="Library__count">
                    <b>{n}</b> {n === 1 ? 'book' : 'books'} · {sections.length} {sections.length === 1 ? 'section' : 'sections'}
                  </span>
                </Link>
                <Link
                  to={`/topic/${land.id}`}
                  className="Library__plank"
                  aria-label={`Open the ${land.title} shelf`}
                  ref={(el) => registerShelf(land.id, el)}
                  onMouseEnter={() => setHoveredShelf(land.id)}
                  onMouseLeave={() => setHoveredShelf(null)}
                >
                  <span className="Library__sections" aria-hidden="true">
                    {sections.map((s) => (
                      <span key={s.id} className="Library__sectionName">
                        {s.title}
                      </span>
                    ))}
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </main>
      <PressFooter />
    </>
  )
}
