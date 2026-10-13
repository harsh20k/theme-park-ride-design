import { Link } from 'react-router'
import { content, landById, lands } from '@/content/api'
import { bookById, books, booksByLand, sectionsByLand, type Book } from './books'
import { useShelf } from './store'
import { PressHeaderBar } from './Shelf'
import CoverThumb from './CoverThumb'
import PressFooter from './Footer'

/** Eight books that the rest of the library keeps pointing back to. */
const START_WITH = ['peak-end-rule', 'clothoid-loop', 'peppers-ghost', 'weenies', 'block-system', 'perceived-vs-actual-wait', 'forced-perspective', 'hub-and-spoke']

interface Beat {
  word: string
  title: string
  text: string
  image: string
  sizes: [number, number]
  ratio: string
  alt: string
  caption: string
  shelves: string[]
  reads: string[]
}

const BEATS: Beat[] = [
  {
    word: 'Drawn',
    title: 'Every park begins as a plan',
    text: 'Before anything is built, a park is a drawing: a hub, paths that fan out to the lands, a railway around the edge, and landmarks placed to pull you forward. These shelves cover how land is shaped so that crowds flow and stories connect.',
    image: 'blueprint-park',
    sizes: [1000, 2000],
    ratio: '2000 / 932',
    alt: 'A blueprint-style plan of an imaginary theme park: a central plaza with paths radiating to five lands, a river ride, a coaster and a railway around the edge.',
    caption: 'AI-generated illustration in the style of a blueprint. Not a real park or drawing.',
    shelves: ['masterplanning', 'design-process'],
    reads: ['hub-and-spoke', 'weenies', 'the-berm'],
  },
  {
    word: 'Calculated',
    title: 'Every thrill is a calculation',
    text: 'A coaster loop is a teardrop, not a circle, because a circle would load riders with far too much force as they enter it. Forces, structures, brakes and block zones are all worked out long before the first train runs.',
    image: 'blueprint-loop',
    sizes: [800, 1600],
    ratio: '1600 / 1017',
    alt: 'A blueprint-style elevation of a steel roller coaster with a lift hill, a first drop and a teardrop-shaped loop on lattice supports.',
    caption: 'AI-generated illustration in the style of an engineering drawing. Not a real ride; the figures on it mean nothing.',
    shelves: ['ride-engineering', 'ride-systems', 'safety-standards'],
    reads: ['clothoid-loop', 'airtime-and-negative-g', 'block-system'],
  },
  {
    word: 'Felt',
    title: 'So that a family can forget all of it',
    text: 'None of the engineering is meant to be noticed. What people take home is the best moment and the ending, a wait that felt shorter than it was, a grandparent laughing on a carousel. These shelves are about that side of the work.',
    image: 'family-carousel',
    sizes: [800, 1600],
    ratio: '1600 / 1195',
    alt: 'A cartoon-style family on a carousel at night: a girl laughing on a painted horse beside her father, a grandfather and a small boy waving from the next horse.',
    caption: 'AI-generated illustration.',
    shelves: ['human-factors', 'story-experience', 'sensory-environment'],
    reads: ['peak-end-rule', 'perceived-vs-actual-wait', 'carousel'],
  },
]

const src = (name: string, w: number) => `/home/${name}-${w}.webp`

export default function Home() {
  const setSearchOpen = useShelf((s) => s.setSearchOpen)
  const setEntry = useShelf((s) => s.setEntry)
  const starters = START_WITH.map((id) => bookById.get(id)).filter((b): b is Book => !!b)
  const stats: [number, string][] = [
    [lands.length, 'shelves'],
    [books.length, 'books'],
    [content.resources.length, 'sources'],
    [content.glossary.length, 'glossary terms'],
    [content.timeline.length, 'dated events'],
  ]

  return (
    <div className="Home">
      <PressHeaderBar />

      <section className="Home__hero">
        <picture className="Home__heroArt">
          <img
            src={src('hero-coaster', 2400)}
            srcSet={`${src('hero-coaster', 1200)} 1200w, ${src('hero-coaster', 2400)} 2400w`}
            sizes="100vw"
            alt="A cartoon-style family riding the front of a wooden roller coaster at dusk, laughing and shouting, with the lights of a fairground far below."
            fetchPriority="high"
          />
        </picture>
        <div className="Home__heroText">
          <p className="Home__eyebrow">A library of park and ride design</p>
          <h1 className="Home__title">
            How joy is <span>engineered</span>
          </h1>
          <p className="Home__lede">
            {books.length} short books on how theme parks and rides are designed: the psychology of a queue, the physics of a loop, the craft of a story you can walk through. Each takes about two minutes, with a diagram and its
            sources.
          </p>
          <div className="Home__actions">
            <Link to="/shelves" className="Home__button Home__button--solid">
              Browse the shelves
              <Arrow />
            </Link>
            <button className="Home__button" onClick={() => setSearchOpen(true)}>
              Search the library
            </button>
          </div>
        </div>
        <p className="Home__credit">AI-generated illustration</p>
      </section>

      <ul className="Home__stats" aria-label="The library in numbers">
        {stats.map(([n, label]) => (
          <li key={label}>
            <b>{n}</b>
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <section className="Home__section" aria-labelledby="home-start">
        <header className="Home__sectionHead">
          <h2 id="home-start" className="Home__h2">
            Start with these
          </h2>
          <p>Eight ideas the rest of the library keeps coming back to.</p>
        </header>
        <ul className="Home__books">
          {starters.map((b) => (
            <li key={b.id}>
              <Link to={`/book/${b.id}`} className="HomeBook" onClick={() => setEntry(b.id)}>
                <span className="HomeBook__stage">
                  <span className="HomeBook__book" style={{ '--cloth': b.theme.palette[1] } as React.CSSProperties}>
                    <CoverThumb book={b} className="HomeBook__cover" />
                  </span>
                </span>
                <span className="HomeBook__title">{b.title}</span>
                <span className="HomeBook__shelf">{b.imprint}</span>
                <span className="HomeBook__summary">{b.entry.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="Home__beats" aria-label="How a park comes to be">
        {BEATS.map((beat, i) => (
          <article key={beat.word} className={`HomeBeat ${i % 2 ? 'is-flipped' : ''}`}>
            <figure className="HomeBeat__figure">
              <img
                src={src(beat.image, beat.sizes[1])}
                srcSet={`${src(beat.image, beat.sizes[0])} ${beat.sizes[0]}w, ${src(beat.image, beat.sizes[1])} ${beat.sizes[1]}w`}
                sizes="(min-width: 900px) 56vw, 92vw"
                style={{ aspectRatio: beat.ratio }}
                alt={beat.alt}
                loading="lazy"
              />
              <figcaption>{beat.caption}</figcaption>
            </figure>
            <div className="HomeBeat__text">
              <p className="HomeBeat__word">
                <span>{String(i + 1).padStart(2, '0')}</span>
                {beat.word}
              </p>
              <h2 className="Home__h2">{beat.title}</h2>
              <p className="HomeBeat__body">{beat.text}</p>
              <ul className="HomeBeat__links">
                {beat.shelves
                  .filter((id) => landById.has(id))
                  .map((id) => (
                    <li key={id}>
                      <Link to={`/topic/${id}`} className="HomeBeat__shelf" style={{ '--dot': landById.get(id)!.color } as React.CSSProperties}>
                        {landById.get(id)!.title}
                        <Arrow />
                      </Link>
                    </li>
                  ))}
              </ul>
              <p className="HomeBeat__reads">
                Read:{' '}
                {beat.reads
                  .filter((id) => bookById.has(id))
                  .map((id, j) => (
                    <span key={id}>
                      {j > 0 && ' · '}
                      <Link to={`/book/${id}`} className="Link" onClick={() => setEntry(id)}>
                        {bookById.get(id)!.title}
                      </Link>
                    </span>
                  ))}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="Home__section" aria-labelledby="home-shelves">
        <header className="Home__sectionHead">
          <h2 id="home-shelves" className="Home__h2">
            {lands.length === 13 ? 'Thirteen' : lands.length} shelves
          </h2>
          <p>
            Each shelf is one part of the craft.{' '}
            <Link to="/shelves" className="Link">
              See them on the wall
            </Link>
          </p>
        </header>
        <ul className="Home__shelves">
          {lands.map((l, i) => (
            <li key={l.id}>
              <Link to={`/topic/${l.id}`} className="HomeShelf" style={{ '--dot': l.color } as React.CSSProperties}>
                <span className="HomeShelf__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="HomeShelf__title">{l.title}</span>
                <span className="HomeShelf__tagline">{l.tagline}</span>
                <span className="HomeShelf__count">
                  {booksByLand.get(l.id)?.length ?? 0} books · {sectionsByLand.get(l.id)?.length ?? 0} sections
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/shelves" className="HomeShelf HomeShelf--all">
              <span className="HomeShelf__title">All shelves</span>
              <span className="HomeShelf__tagline">The whole library on one wall.</span>
              <span className="HomeShelf__count">
                Open the wall <Arrow />
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <PressFooter />
    </div>
  )
}

function Arrow() {
  return (
    <svg className="Home__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  )
}
