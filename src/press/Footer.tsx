import { Link } from 'react-router'
import { content, lands } from '@/content/api'
import { books } from './books'
import { useShelf } from './store'
import { PressMark } from './Shelf'

/** The colophon at the foot of the home page and the shelf pages. */
export default function PressFooter() {
  const setSearchOpen = useShelf((s) => s.setSearchOpen)
  return (
    <footer className="PressFooter">
      <div className="PressFooter__rule" aria-hidden="true">
        <span />
        <PressMark />
        <span />
      </div>
      <div className="PressFooter__grid">
        <div className="PressFooter__brand">
          <Link to="/" className="PressFooter__name">
            Theme Park Press
          </Link>
          <p className="PressFooter__tagline">Ideas for designing joy</p>
          <p className="PressFooter__about">
            A library of {books.length} short books on how theme parks and rides are designed. Every book is one idea, with a diagram and the sources it rests on.
          </p>
        </div>

        <nav className="PressFooter__col PressFooter__col--shelves" aria-label="Shelves">
          <h2 className="PressFooter__head">Shelves</h2>
          <ul>
            {lands.map((l) => (
              <li key={l.id}>
                <Link to={`/topic/${l.id}`} style={{ '--dot': l.color } as React.CSSProperties}>
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="PressFooter__col" aria-label="Library">
          <h2 className="PressFooter__head">Library</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shelves">All {lands.length} shelves</Link>
            </li>
            <li>
              <button onClick={() => setSearchOpen(true)}>Search everything</button>
            </li>
            <li>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
            </li>
          </ul>
        </nav>

        <div className="PressFooter__col">
          <h2 className="PressFooter__head">Colophon</h2>
          <p className="PressFooter__note">
            Titles are set in Anton and text in Work Sans; the books are lettered in Newsreader. Covers are drawn in your browser. The illustrations on the home page and three photographed covers are AI-generated, and are
            not real drawings or places. Photographs inside the books are open-licence and credited.
          </p>
        </div>
      </div>
      <p className="PressFooter__line">
        <span>{lands.length} shelves</span>
        <span>{books.length} books</span>
        <span>{content.resources.length} sources</span>
        <span>{content.glossary.length} glossary terms</span>
        <span>{content.timeline.length} dated events</span>
      </p>
    </footer>
  )
}
