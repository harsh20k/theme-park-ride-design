import { conceptIndex, landById, lands, type ConceptIndexEntry } from '@/content/api'
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
}

const landIndex = new Map(lands.map((l, i) => [l.id, i]))
const abstractionRank: Record<string, number> = { 'super-concept': 0, concept: 1, 'sub-concept': 2 }

/** Every concept card is a book, shelved by land then hierarchy. */
export const books: Book[] = [...conceptIndex]
  .sort(
    (a, b) =>
      (landIndex.get(a.land) ?? 99) - (landIndex.get(b.land) ?? 99) ||
      abstractionRank[a.abstraction] - abstractionRank[b.abstraction] ||
      a.title.localeCompare(b.title),
  )
  .map((entry) => {
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
    }
  })

export const bookById = new Map(books.map((b) => [b.id, b]))
