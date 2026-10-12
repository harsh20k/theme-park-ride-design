import { conceptIndex, landById, lands, shelvesForLand, type ConceptIndexEntry } from '@/content/api'
import { themeForLand, seedFrom, type BookTheme } from './theme'

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

const landIndex = new Map(lands.map((l, i) => [l.id, i]))

function toBook(entry: ConceptIndexEntry, section: string): Book {
  const land = landById.get(entry.land)
  const li = landIndex.get(entry.land) ?? 0
  return {
    id: entry.id,
    title: entry.title,
    author: land?.title ?? entry.land,
    land: entry.land,
    theme: themeForLand(land ?? { id: entry.land, title: entry.land, color: '#888888', accent: '#666666', tagline: '', description: '', landmark: '', building: 'pavilion', mood: '', icon: '' }, li),
    seed: seedFrom(entry.id),
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
  for (const { shelf, books: kids } of shelvesForLand(land.id)) {
    const isReal = conceptIndex.some((c) => c.id === shelf.id)
    if (isReal) {
      const b = toBook(shelf, shelf.id)
      list.push(b)
      sections.push(b)
    }
    for (const k of kids) list.push(toBook(k, shelf.id))
  }
  booksByLand.set(land.id, list)
  sectionsByLand.set(land.id, sections)
  sections.forEach((b, i) => libraryIndex.set(b.id, { i, n: sections.length }))
}

export const books: Book[] = lands.flatMap((l) => booksByLand.get(l.id) ?? [])
export const bookById = new Map(books.map((b) => [b.id, b]))
