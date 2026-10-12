/**
 * Content checker — turns a loaded source into diagnostics.
 *
 * Reports: schema errors (from the loader), broken inline links, orphan nodes,
 * missing visuals, cards over 200 words, plus a few cheap consistency checks
 * (parent/children mismatch, unknown relation targets, dangling references
 * from glossary/resources/timeline/learning paths).
 */
import type { Concept, Graph, Land } from './schema'
import type { Diagnostic, RawSource } from './loader'
import { buildGraph } from './loader'

export const MAX_WORDS = 200
export const MIN_WORDS = 50

export interface CheckSubject {
  origin: 'real' | 'sample' | 'merged'
  lands: Land[]
  concepts: Concept[]
  graph: Graph | null
  resources: RawSource['resources']
  glossary: RawSource['glossary']
  timeline: RawSource['timeline']
  learningPaths: RawSource['learningPaths']
}

export function checkContent(s: CheckSubject): Diagnostic[] {
  const out: Diagnostic[] = []
  const o = s.origin
  const ids = new Map(s.concepts.map((c) => [c.id, c]))
  const landIds = new Set(s.lands.map((l) => l.id))
  const file = (c: Concept) => `${c.origin}:${c.path}`
  const referenced = new Set<string>()

  for (const c of s.concepts) {
    if (!landIds.has(c.land)) out.push({ severity: 'error', code: 'unknown-land', file: file(c), message: `land "${c.land}" is not in lands.json` })

    // hierarchy
    if (c.abstraction === 'super-concept' && c.parent) {
      out.push({ severity: 'warn', code: 'hierarchy', file: file(c), message: `super-concept has a parent ("${c.parent}")` })
    }
    if (c.abstraction !== 'super-concept' && !c.parent) {
      out.push({ severity: 'error', code: 'orphan', file: file(c), message: `${c.abstraction} has no parent` })
    }
    if (c.parent) {
      const p = ids.get(c.parent)
      if (!p) out.push({ severity: 'error', code: 'orphan', file: file(c), message: `parent "${c.parent}" does not exist` })
      else {
        referenced.add(c.parent)
        if (!p.children.includes(c.id)) {
          out.push({ severity: 'warn', code: 'hierarchy', file: `${p.origin}:${p.path}`, message: `children list is missing "${c.id}" (which names it as parent)` })
        }
        if (p.land !== c.land) out.push({ severity: 'warn', code: 'hierarchy', file: file(c), message: `parent "${c.parent}" is in a different land (${p.land})` })
      }
    }
    for (const ch of c.children) {
      const k = ids.get(ch)
      if (!k) out.push({ severity: 'error', code: 'broken-child', file: file(c), message: `child "${ch}" does not exist` })
      else {
        referenced.add(ch)
        if (k.parent !== c.id) out.push({ severity: 'warn', code: 'hierarchy', file: `${k.origin}:${k.path}`, message: `parent should be "${c.id}" (listed as its child) but is "${k.parent ?? 'none'}"` })
      }
    }

    // relations
    for (const r of c.relations) {
      if (!ids.has(r.target)) out.push({ severity: 'error', code: 'broken-relation', file: file(c), message: `relation ${r.type} → "${r.target}" does not exist` })
      else referenced.add(r.target)
      if (r.target === c.id) out.push({ severity: 'warn', code: 'self-relation', file: file(c), message: `relation ${r.type} points to itself` })
    }

    // inline links
    for (const l of c.body.links) {
      if (!ids.has(l)) out.push({ severity: 'error', code: 'broken-link', file: file(c), message: `inline link → "${l}" does not match any concept` })
      else referenced.add(l)
    }

    // visuals
    if (c.body.visuals.length === 0) {
      out.push({ severity: 'error', code: 'missing-visual', file: file(c), message: c.visuals.length ? `frontmatter lists ${c.visuals.length} visual(s) but the body has none` : 'card has no visual' })
    } else {
      const declared = c.visuals.map((v) => (typeof v === 'string' ? v : v.type))
      const actual = c.body.visuals.map((v) => v.kind)
      for (const d of declared) if (!actual.includes(d)) out.push({ severity: 'warn', code: 'visual-mismatch', file: file(c), message: `frontmatter declares a "${d}" visual that is not in the body` })
      for (const v of c.body.visuals) {
        if (v.kind === 'image' && !v.alt) out.push({ severity: 'warn', code: 'alt-text', file: file(c), message: `image "${v.source}" has no alt text` })
        if (v.kind === 'image' && !/^(?:\.\.\/)*media\//.test(v.source) && !/^https?:/.test(v.source)) {
          out.push({ severity: 'warn', code: 'media-path', file: file(c), message: `image "${v.source}" should live under media/` })
        }
      }
    }

    // length & shape
    if (c.body.wordCount > MAX_WORDS) out.push({ severity: 'error', code: 'too-long', file: file(c), message: `${c.body.wordCount} words (max ${MAX_WORDS})` })
    else if (c.body.wordCount < MIN_WORDS) out.push({ severity: 'warn', code: 'too-short', file: file(c), message: `${c.body.wordCount} words (min ${MIN_WORDS})` })
    if (!c.body.exploreFurther) out.push({ severity: 'warn', code: 'no-explore', file: file(c), message: 'no "Explore further" section' })
    if (!c.summary) out.push({ severity: 'warn', code: 'no-summary', file: file(c), message: 'summary is empty' })
    if (c.body.links.length === 0) out.push({ severity: 'warn', code: 'no-links', file: file(c), message: 'prose has no inline links to other concepts' })
    if (c.sources.length === 0) out.push({ severity: 'info', code: 'no-sources', file: file(c), message: 'no sources' })
  }

  // orphans: nothing points at them and they point at nothing
  for (const c of s.concepts) {
    const outgoing = (c.parent ? 1 : 0) + c.children.length + c.relations.length + c.body.links.length
    if (outgoing === 0 && !referenced.has(c.id)) {
      out.push({ severity: 'error', code: 'orphan', file: file(c), message: 'isolated node: no parent, children, relations or links in or out' })
    }
  }

  // graph.json consistency (when a file exists)
  if (s.graph) {
    const g = s.graph
    const gids = new Set(g.nodes.map((n) => n.id))
    for (const n of g.nodes) if (!ids.has(n.id)) out.push({ severity: 'warn', code: 'graph-extra-node', file: `${o}:graph.json`, message: `node "${n.id}" has no concept card` })
    for (const c of s.concepts) if (!gids.has(c.id)) out.push({ severity: 'warn', code: 'graph-missing-node', file: `${o}:graph.json`, message: `concept "${c.id}" is missing from graph.json` })
    const degree = new Map<string, number>()
    for (const e of g.edges) {
      if (!gids.has(e.source)) out.push({ severity: 'error', code: 'graph-edge', file: `${o}:graph.json`, message: `edge source "${e.source}" is not a node` })
      if (!gids.has(e.target)) out.push({ severity: 'error', code: 'graph-edge', file: `${o}:graph.json`, message: `edge target "${e.target}" is not a node` })
      degree.set(e.source, (degree.get(e.source) ?? 0) + 1)
      degree.set(e.target, (degree.get(e.target) ?? 0) + 1)
    }
    for (const n of g.nodes) if (!degree.get(n.id)) out.push({ severity: 'warn', code: 'orphan', file: `${o}:graph.json`, message: `node "${n.id}" has no edges` })
  } else if (s.concepts.length) {
    out.push({ severity: 'info', code: 'graph-derived', file: `${o}:graph.json`, message: 'no graph.json; graph is derived from concept frontmatter' })
  }

  // cross references
  for (const g of s.glossary ?? []) {
    if (g.concept && !ids.has(g.concept)) out.push({ severity: 'warn', code: 'broken-ref', file: `${o}:glossary.json`, message: `"${g.term}" → concept "${g.concept}" does not exist` })
    if (g.land && !landIds.has(g.land)) out.push({ severity: 'warn', code: 'broken-ref', file: `${o}:glossary.json`, message: `"${g.term}" → land "${g.land}" does not exist` })
  }
  for (const r of s.resources ?? []) {
    for (const c of r.concepts) if (!ids.has(c)) out.push({ severity: 'warn', code: 'broken-ref', file: `${o}:resources.json`, message: `"${r.id}" → concept "${c}" does not exist` })
    for (const l of r.lands) if (!landIds.has(l)) out.push({ severity: 'warn', code: 'broken-ref', file: `${o}:resources.json`, message: `"${r.id}" → land "${l}" does not exist` })
  }
  for (const t of s.timeline ?? []) {
    for (const c of t.concepts) if (!ids.has(c)) out.push({ severity: 'warn', code: 'broken-ref', file: `${o}:timeline.json`, message: `"${t.title}" → concept "${c}" does not exist` })
    if (t.land && !landIds.has(t.land)) out.push({ severity: 'warn', code: 'broken-ref', file: `${o}:timeline.json`, message: `"${t.title}" → land "${t.land}" does not exist` })
  }
  for (const p of s.learningPaths ?? []) {
    for (const step of p.steps) {
      const id = typeof step === 'string' ? step : step.concept
      if (!ids.has(id)) out.push({ severity: 'error', code: 'broken-ref', file: `${o}:learning-path.json`, message: `path "${p.id}" step → concept "${id}" does not exist` })
    }
  }

  // lands without any concepts
  const landsWithConcepts = new Set(s.concepts.map((c) => c.land))
  for (const l of s.lands) if (!landsWithConcepts.has(l.id)) out.push({ severity: 'warn', code: 'empty-land', file: `${o}:lands.json`, message: `land "${l.id}" has no concept cards` })

  return out
}

/** Build a check subject straight from one raw source (used for real-only reporting). */
export function subjectFromRaw(raw: RawSource): CheckSubject {
  return {
    origin: raw.origin,
    lands: raw.lands ?? [],
    concepts: raw.concepts,
    graph: raw.graph,
    resources: raw.resources,
    glossary: raw.glossary,
    timeline: raw.timeline,
    learningPaths: raw.learningPaths,
  }
}

export interface Summary {
  lands: number
  concepts: number
  byAbstraction: Record<string, number>
  byLand: Record<string, number>
  edges: number
  resources: number
  glossary: number
  timeline: number
  learningPaths: number
  withToys: number
  avgWords: number
}

export function summarise(s: CheckSubject): Summary {
  const byAbstraction: Record<string, number> = {}
  const byLand: Record<string, number> = {}
  let words = 0
  let toys = 0
  for (const c of s.concepts) {
    byAbstraction[c.abstraction] = (byAbstraction[c.abstraction] ?? 0) + 1
    byLand[c.land] = (byLand[c.land] ?? 0) + 1
    words += c.body.wordCount
    if (c.interactive_idea) toys++
  }
  const graph = s.graph ?? buildGraph(s.concepts, null)
  return {
    lands: s.lands.length,
    concepts: s.concepts.length,
    byAbstraction,
    byLand,
    edges: graph.edges.length,
    resources: s.resources?.length ?? 0,
    glossary: s.glossary?.length ?? 0,
    timeline: s.timeline?.length ?? 0,
    learningPaths: s.learningPaths?.length ?? 0,
    withToys: toys,
    avgWords: s.concepts.length ? Math.round(words / s.concepts.length) : 0,
  }
}
