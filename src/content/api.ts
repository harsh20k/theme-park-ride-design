/**
 * Browser-side content API. Everything comes from the build-time loader via
 * virtual modules — no hardcoded content anywhere in the site.
 */
import index from 'virtual:content-index'
import type { ConceptIndexEntry } from 'virtual:content-index'
import type { Concept, GraphEdge, Land, MindmapNode } from '@content/schema'

export type { ConceptIndexEntry }

export const content = index

export const lands: Land[] = index.lands
export const landById = new Map(lands.map((l) => [l.id, l]))

export const conceptIndex: ConceptIndexEntry[] = index.conceptIndex
export const conceptById = new Map(conceptIndex.map((c) => [c.id, c]))

export const conceptsByLand = (() => {
  const m = new Map<string, ConceptIndexEntry[]>()
  for (const c of conceptIndex) {
    if (!m.has(c.land)) m.set(c.land, [])
    m.get(c.land)!.push(c)
  }
  return m
})()

/** Super-concepts in a land (shelves), each with its descendants (books), in tree order. */
export function shelvesForLand(landId: string): { shelf: ConceptIndexEntry; books: ConceptIndexEntry[] }[] {
  const all = conceptsByLand.get(landId) ?? []
  const supers = all.filter((c) => c.abstraction === 'super-concept')
  // Concepts without a reachable super-concept go on a "Miscellany" shelf.
  const placed = new Set<string>()
  const shelves = supers.map((s) => {
    const books: ConceptIndexEntry[] = []
    const walk = (id: string) => {
      for (const ch of all.filter((c) => c.parent === id)) {
        if (placed.has(ch.id)) continue
        placed.add(ch.id)
        books.push(ch)
        walk(ch.id)
      }
    }
    placed.add(s.id)
    walk(s.id)
    return { shelf: s, books }
  })
  const leftovers = all.filter((c) => !placed.has(c.id))
  if (leftovers.length) {
    shelves.push({
      shelf: { ...leftovers[0], id: `${landId}-miscellany`, title: 'Miscellany', abstraction: 'super-concept', summary: 'Concepts without a parent shelf.' },
      books: leftovers,
    })
  }
  return shelves
}

/** Edges touching a concept. */
export function edgesFor(id: string): GraphEdge[] {
  return index.graph.edges.filter((e) => e.source === id || e.target === id)
}

export interface LocalGraph {
  center: ConceptIndexEntry
  parent: ConceptIndexEntry | null
  children: ConceptIndexEntry[]
  related: { concept: ConceptIndexEntry; type: GraphEdge['type']; direction: 'out' | 'in' }[]
}

export function localGraph(id: string): LocalGraph | null {
  const center = conceptById.get(id)
  if (!center) return null
  const parent = center.parent ? (conceptById.get(center.parent) ?? null) : null
  const children = conceptIndex.filter((c) => c.parent === id)
  const related: LocalGraph['related'] = []
  const seen = new Set<string>()
  for (const e of edgesFor(id)) {
    if (e.type === 'parent') continue
    const otherId = e.source === id ? e.target : e.source
    const key = `${otherId}|${e.type}`
    if (seen.has(key)) continue
    seen.add(key)
    const other = conceptById.get(otherId)
    if (other) related.push({ concept: other, type: e.type, direction: e.source === id ? 'out' : 'in' })
  }
  // Inline links count as soft relations.
  for (const l of center.body.links) {
    if (l === id || l === center.parent || children.some((c) => c.id === l)) continue
    if ([...seen].some((k) => k.startsWith(`${l}|`))) continue
    const other = conceptById.get(l)
    if (other) {
      seen.add(`${l}|link`)
      related.push({ concept: other, type: 'applies-to', direction: 'out' })
    }
  }
  return { center, parent, children, related }
}

// ---------------------------------------------------------------------------
// Lazy per-land bodies
// ---------------------------------------------------------------------------

const landCache = new Map<string, Promise<Map<string, Concept>>>()

export function loadLandConcepts(landId: string): Promise<Map<string, Concept>> {
  if (!landCache.has(landId)) {
    const loader = index.landLoaders[landId]
    const p = loader
      ? loader().then((m) => new Map(m.concepts.map((c) => [c.id, c])))
      : Promise.resolve(new Map<string, Concept>())
    landCache.set(landId, p)
  }
  return landCache.get(landId)!
}

export async function loadConcept(id: string): Promise<Concept | null> {
  const entry = conceptById.get(id)
  if (!entry) return null
  const m = await loadLandConcepts(entry.land)
  return m.get(id) ?? null
}

// ---------------------------------------------------------------------------
// Mindmap helpers
// ---------------------------------------------------------------------------

export const mindmap: MindmapNode | null = index.mindmap

/** Build a mindmap tree from the concept index when mindmap.md is missing or stale. */
export function mindmapFromIndex(): MindmapNode {
  const root: MindmapNode = { id: 'root', label: 'Theme Park & Ride Design', depth: 0, children: [] }
  for (const land of lands) {
    const ln: MindmapNode = { id: land.id, label: land.title, depth: 1, children: [] }
    const all = conceptsByLand.get(land.id) ?? []
    const build = (parentId: string | null, depth: number): MindmapNode[] =>
      all
        .filter((c) => (parentId ? c.parent === parentId : c.abstraction === 'super-concept'))
        .map((c) => ({ id: c.id, label: c.title, depth, level: c.level, children: build(c.id, depth + 1) }))
    ln.children = build(null, 2)
    root.children.push(ln)
  }
  return root
}

export const isSample = (c: { origin: 'real' | 'sample' }) => c.origin === 'sample'
export const provenance = index.provenance
