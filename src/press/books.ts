import { conceptIndex, landById, lands, shelvesForLand, type ConceptIndexEntry } from '@/content/api'
import { themeForBook, seedFrom, hexToHsl, CLOTHS, type BookTheme } from './theme'
import { COVER_CLOTH } from './covers'

export interface Book {
  id: string
  title: string
  /** Shown where Stripe shows the author: the land. */
  author: string
  land: string
  theme: BookTheme
  seed: number
  entry: ConceptIndexEntry
  /** Section (super-concept) this book belongs to; a section book points at itself. */
  section: string
  /** Short topic name used on spines and covers, where the full land title will not fit. */
  imprint: string
}

const SHORT: Record<string, string> = {
  'story-experience': 'Story & Experience',
  'human-factors': 'Human Factors',
  masterplanning: 'Masterplanning',
  'ride-systems': 'Ride Systems',
  'ride-engineering': 'Ride Engineering',
  'safety-standards': 'Safety & Standards',
  'show-technology': 'Show Technology',
  'sensory-environment': 'Sensory Design',
  'design-process': 'Design Process',
  'operations-business': 'Operations',
  history: 'History',
  'ai-future': 'AI & Future',
  careers: 'Careers',
}

const CLOTH_HSL = CLOTHS.map(hexToHsl)

/** Two cloths that would read as the same colour side by side. */
function alike(a: number, b: number): boolean {
  if (a < 0 || b < 0) return false
  if (a === b) return true
  const x = CLOTH_HSL[a]
  const y = CLOTH_HSL[b]
  const grey = x.s < 0.2 || y.s < 0.2
  const dh = Math.abs(((x.h - y.h + 540) % 360) - 180)
  return grey ? Math.abs(x.l - y.l) < 0.12 && x.s < 0.2 && y.s < 0.2 : dh < 42 && Math.abs(x.l - y.l) < 0.3
}

/**
 * Each book is bound in its own cloth, picked from its id. `avoid` lists the
 * cloths of its neighbours on the shelf, so two books side by side never look alike.
 */
function toBook(entry: ConceptIndexEntry, section: string, avoid: number[]): Book & { cloth: number } {
  const land = landById.get(entry.land)
  const seed = seedFrom(entry.id)
  let cloth = seed % CLOTHS.length
  for (let tries = 0; tries < CLOTHS.length && avoid.some((a) => alike(a, cloth)); tries++) cloth = (cloth + 5) % CLOTHS.length
  return {
    cloth,
    id: entry.id,
    title: entry.title,
    author: land?.title ?? entry.land,
    land: entry.land,
    theme: themeForBook(seed, COVER_CLOTH[entry.id] ?? cloth),
    seed,
    entry,
    section,
    imprint: SHORT[entry.land] ?? land?.title ?? entry.land,
  }
}

/**
 * Every concept card is a book. Within a topic (land) the order is tree order:
 * each section (super-concept) first, then everything beneath it.
 */
export const booksByLand = new Map<string, Book[]>()
/** Section books per land, in order — these are the books that stand on the library shelves. */
export const sectionsByLand = new Map<string, Book[]>()
/** Position of a section book on its library shelf. */
export const libraryIndex = new Map<string, { i: number; n: number }>()

for (const land of lands) {
  const list: Book[] = []
  const sections: Book[] = []
  let lastSection = -1
  let last = -1
  for (const { shelf, books: kids } of shelvesForLand(land.id)) {
    const isReal = conceptIndex.some((c) => c.id === shelf.id)
    if (isReal) {
      // Section books stand side by side in the library, and follow the previous book on the topic shelf.
      const b = toBook(shelf, shelf.id, [lastSection, last])
      lastSection = last = b.cloth
      list.push(b)
      sections.push(b)
    }
    for (const k of kids) {
      const b = toBook(k, shelf.id, [last])
      last = b.cloth
      list.push(b)
    }
  }
  booksByLand.set(land.id, list)
  sectionsByLand.set(land.id, sections)
  sections.forEach((b, i) => libraryIndex.set(b.id, { i, n: sections.length }))
}

export const books: Book[] = lands.flatMap((l) => booksByLand.get(l.id) ?? [])
export const bookById = new Map(books.map((b) => [b.id, b]))
