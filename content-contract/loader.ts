/**
 * Content loader (Node only — used by the Vite plugin and the check script).
 *
 * Reads from the real content dir (/content) when it exists and validates,
 * otherwise falls back to /sample-content. Merging is per-file, and for
 * concept cards per-land: a land whose folder exists in real content with at
 * least one valid card uses real cards; every other land uses sample cards.
 *
 * Env:
 *   CONTENT_SOURCE=auto|sample|real   (default auto)
 *   CONTENT_DIR=<path>                 (default <root>/content)
 *   SAMPLE_CONTENT_DIR=<path>          (default <root>/sample-content)
 *
 * The loader NEVER writes to either directory.
 */
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { ZodType } from 'zod'
import {
  ConceptFrontmatter,
  GlossaryFile,
  GraphFile,
  LandsFile,
  LearningPathFile,
  MediaIndexFile,
  ResourcesFile,
  TimelineFile,
  confidenceLabel,
  type Concept,
  type ContentBundle,
  type Graph,
  type GraphEdge,
  type Land,
  type MediaAsset,
  type Provenance,
} from './schema'
import { parseBody } from './markdown'
import { parseMindmap } from './mindmap'

export type Origin = 'real' | 'sample'
export type Severity = 'error' | 'warn' | 'info'

export interface Diagnostic {
  severity: Severity
  /** Short machine code: `schema`, `broken-link`, `orphan`, `missing-visual`, `too-long`, ... */
  code: string
  /** File path relative to its content root, prefixed with origin. */
  file: string
  message: string
}

export interface LoadOptions {
  root?: string
  source?: 'auto' | 'sample' | 'real'
  realDir?: string
  sampleDir?: string
}

export interface LoadResult {
  bundle: ContentBundle
  diagnostics: Diagnostic[]
  /** Raw per-origin data for the checker (so it can report on real content even when skipped). */
  raw: {
    real: RawSource | null
    sample: RawSource
  }
}

export interface RawSource {
  origin: Origin
  dir: string
  lands: Land[] | null
  concepts: Concept[]
  graph: Graph | null
  mindmapText: string | null
  resources: ContentBundle['resources'] | null
  glossary: ContentBundle['glossary'] | null
  timeline: ContentBundle['timeline'] | null
  learningPaths: ContentBundle['learningPaths'] | null
  media: MediaAsset[]
  present: Record<string, boolean>
}

export const FILES = {
  lands: 'lands.json',
  graph: 'graph.json',
  mindmap: 'mindmap.md',
  resources: 'resources.json',
  glossary: 'glossary.json',
  timeline: 'timeline.json',
  learningPath: 'learning-path.json',
  mediaIndex: 'media/index.json',
} as const

// ---------------------------------------------------------------------------

export function resolveDirs(opts: LoadOptions = {}) {
  const root = opts.root ?? process.cwd()
  const source = opts.source ?? (process.env.CONTENT_SOURCE as LoadOptions['source']) ?? 'auto'
  const realDir = path.resolve(root, opts.realDir ?? process.env.CONTENT_DIR ?? 'content')
  const sampleDir = path.resolve(root, opts.sampleDir ?? process.env.SAMPLE_CONTENT_DIR ?? 'sample-content')
  return { root, source, realDir, sampleDir }
}

export function loadContent(opts: LoadOptions = {}): LoadResult {
  const { source, realDir, sampleDir } = resolveDirs(opts)
  const diagnostics: Diagnostic[] = []

  const sample = readSource(sampleDir, 'sample', diagnostics)
  const realExists = fs.existsSync(realDir) && fs.statSync(realDir).isDirectory()
  const real = source !== 'sample' && realExists ? readSource(realDir, 'real', diagnostics) : null

  if (source === 'real' && !real) {
    diagnostics.push({
      severity: 'error',
      code: 'missing-source',
      file: 'real:',
      message: `CONTENT_SOURCE=real but ${realDir} does not exist`,
    })
  }

  const useReal = source === 'real' ? real : source === 'sample' ? null : real
  const files: Provenance['files'] = {}

  const pick = <T>(key: keyof typeof FILES, r: T | null | undefined, s: T | null | undefined): T | null => {
    if (source === 'real') {
      files[FILES[key]] = r ? 'real' : 'missing'
      return r ?? null
    }
    if (useReal && r) {
      files[FILES[key]] = 'real'
      return r
    }
    files[FILES[key]] = s ? 'sample' : 'missing'
    return s ?? null
  }

  const lands = pick('lands', useReal?.lands, sample.lands) ?? []
  const graphFile = pick('graph', useReal?.graph, sample.graph)
  const mindmapText = pick('mindmap', useReal?.mindmapText, sample.mindmapText)
  const resources = pick('resources', useReal?.resources, sample.resources) ?? []
  const glossary = pick('glossary', useReal?.glossary, sample.glossary) ?? []
  const timeline = pick('timeline', useReal?.timeline, sample.timeline) ?? []
  const learningPaths = pick('learningPath', useReal?.learningPaths, sample.learningPaths) ?? []

  // Concepts: per-land merge.
  const realLands = new Set<string>()
  const sampleLands = new Set<string>()
  const realByLand = groupBy(useReal?.concepts ?? [], (c) => c.land)
  const sampleByLand = groupBy(source === 'real' ? [] : sample.concepts, (c) => c.land)
  const landIds = new Set<string>([...lands.map((l) => l.id), ...realByLand.keys(), ...sampleByLand.keys()])
  const concepts: Concept[] = []
  for (const id of landIds) {
    const r = realByLand.get(id)
    if (r && r.length) {
      concepts.push(...r)
      realLands.add(id)
    } else if (sampleByLand.get(id)?.length) {
      concepts.push(...sampleByLand.get(id)!)
      sampleLands.add(id)
    }
  }
  // Any land that has concepts but no lands.json entry gets a stub so the park still renders it.
  const knownLands = new Set(lands.map((l) => l.id))
  for (const id of landIds) {
    if (!knownLands.has(id) && (realByLand.get(id)?.length || sampleByLand.get(id)?.length)) {
      lands.push({
        id,
        title: titleCase(id),
        tagline: '',
        description: '',
        color: '#e8d8b8',
        accent: '#c9a66b',
        landmark: '',
        building: 'pavilion',
        mood: '',
        icon: '📚',
      })
      diagnostics.push({
        severity: 'warn',
        code: 'land-missing',
        file: `${realLands.has(id) ? 'real' : 'sample'}:lands.json`,
        message: `concepts reference land "${id}" which is not in lands.json; stub land added`,
      })
    }
  }
  concepts.sort((a, b) => a.land.localeCompare(b.land) || a.title.localeCompare(b.title))
  // lands.json order is the shelf order unless a land sets `order` explicitly.
  lands.forEach((l, i) => {
    if (l.order == null) l.order = i
  })
  lands.sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title))

  // Media: real overrides sample by path.
  const mediaMap = new Map<string, MediaAsset>()
  for (const m of sample.media) mediaMap.set(m.path, m)
  if (useReal) for (const m of useReal.media) mediaMap.set(m.path, m)

  const bundle: ContentBundle = {
    lands,
    concepts,
    graph: buildGraph(concepts, graphFile, diagnostics),
    mindmap: mindmapText ? parseMindmap(mindmapText) : null,
    resources,
    glossary,
    timeline,
    learningPaths,
    media: [...mediaMap.values()],
    provenance: {
      mode: source,
      realDir: realExists ? realDir : null,
      sampleDir,
      files,
      realLands: [...realLands].sort(),
      sampleLands: [...sampleLands].sort(),
    },
  }

  return { bundle, diagnostics, raw: { real, sample } }
}

// ---------------------------------------------------------------------------
// Reading one source directory
// ---------------------------------------------------------------------------

function readSource(dir: string, origin: Origin, diagnostics: Diagnostic[]): RawSource {
  const present: Record<string, boolean> = {}
  const exists = (rel: string) => {
    const ok = fs.existsSync(path.join(dir, rel))
    present[rel] = ok
    return ok
  }

  const readJson = <T>(rel: string, schema: ZodType<T, any>): T | null => {
    if (!exists(rel)) return null
    let data: unknown
    try {
      data = JSON.parse(fs.readFileSync(path.join(dir, rel), 'utf8'))
    } catch (e) {
      diagnostics.push({ severity: 'error', code: 'json', file: `${origin}:${rel}`, message: `invalid JSON: ${(e as Error).message}` })
      return null
    }
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      for (const issue of parsed.error.issues.slice(0, 25)) {
        diagnostics.push({
          severity: 'error',
          code: 'schema',
          file: `${origin}:${rel}`,
          message: `${issue.path.join('.') || '(root)'}: ${issue.message}`,
        })
      }
      if (parsed.error.issues.length > 25) {
        diagnostics.push({ severity: 'error', code: 'schema', file: `${origin}:${rel}`, message: `…and ${parsed.error.issues.length - 25} more issues` })
      }
      return null
    }
    return parsed.data
  }

  const lands = readJson(FILES.lands, LandsFile)
  const graph = readJson(FILES.graph, GraphFile)
  const resources = readJson(FILES.resources, ResourcesFile)
  const glossary = readJson(FILES.glossary, GlossaryFile)
  const timeline = readJson(FILES.timeline, TimelineFile)
  const learningPaths = readJson(FILES.learningPath, LearningPathFile)
  const mediaIndex = readJson(FILES.mediaIndex, MediaIndexFile) ?? []

  const mindmapText = exists(FILES.mindmap) ? fs.readFileSync(path.join(dir, FILES.mindmap), 'utf8') : null

  const concepts = readConcepts(dir, origin, diagnostics)
  present['concepts/'] = concepts.length > 0

  const media = readMedia(dir, origin, new Map(mediaIndex.map((m) => [m.path.replace(/^\/?/, ''), m])))
  present['media/'] = media.length > 0

  return { origin, dir, lands, concepts, graph, mindmapText, resources, glossary, timeline, learningPaths, media, present }
}

function readConcepts(dir: string, origin: Origin, diagnostics: Diagnostic[]): Concept[] {
  const base = path.join(dir, 'concepts')
  if (!fs.existsSync(base)) return []
  const files = walk(base).filter((f) => f.endsWith('.md'))
  const out: Concept[] = []
  const seen = new Map<string, string>()
  for (const abs of files) {
    const rel = path.relative(dir, abs).split(path.sep).join('/')
    const file = `${origin}:${rel}`
    let fm: matter.GrayMatterFile<string>
    try {
      fm = matter(fs.readFileSync(abs, 'utf8'))
    } catch (e) {
      diagnostics.push({ severity: 'error', code: 'frontmatter', file, message: `cannot parse frontmatter: ${(e as Error).message}` })
      continue
    }
    // Infer land from folder if the frontmatter omits it.
    const folderLand = rel.split('/').length >= 3 ? rel.split('/')[1] : undefined
    const data = { land: folderLand, id: path.basename(abs, '.md'), ...fm.data }
    const parsed = ConceptFrontmatter.safeParse(data)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        diagnostics.push({ severity: 'error', code: 'schema', file, message: `${issue.path.join('.') || '(root)'}: ${issue.message}` })
      }
      continue
    }
    const f = parsed.data
    // The corpus writes `parent: <land-id>` on super-concepts; the contract treats that as no parent.
    if (f.abstraction === 'super-concept' && f.parent === f.land) f.parent = null
    if (seen.has(f.id)) {
      diagnostics.push({ severity: 'error', code: 'duplicate-id', file, message: `duplicate concept id "${f.id}" (also in ${seen.get(f.id)})` })
      continue
    }
    seen.set(f.id, rel)
    if (folderLand && folderLand !== f.land) {
      diagnostics.push({ severity: 'warn', code: 'land-folder', file, message: `frontmatter land "${f.land}" differs from folder "${folderLand}"` })
    }
    const body = parseBody(fm.content)
    out.push({
      ...f,
      confidenceLabel: confidenceLabel(f.confidence),
      origin,
      path: rel,
      body: {
        visuals: body.visuals,
        prose: body.prose,
        wordCount: body.wordCount,
        exploreFurther: body.exploreFurther,
        links: Array.from(new Set(body.links.map((l) => l.conceptId).filter((x): x is string => !!x))),
      },
    })
  }
  return out
}

const MEDIA_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif', '.mp3', '.ogg', '.wav', '.mp4', '.webm', '.glb', '.gltf', '.json'])

function readMedia(dir: string, origin: Origin, index: Map<string, { alt?: string; credit?: string }>): MediaAsset[] {
  const base = path.join(dir, 'media')
  if (!fs.existsSync(base)) return []
  return walk(base)
    .filter((f) => MEDIA_EXT.has(path.extname(f).toLowerCase()) && path.basename(f) !== 'index.json')
    .map((abs) => {
      const rel = path.relative(dir, abs).split(path.sep).join('/')
      const meta = index.get(rel) ?? index.get(rel.replace(/^media\//, ''))
      return { path: rel, bytes: fs.statSync(abs).size, alt: meta?.alt, credit: meta?.credit, origin }
    })
}

// ---------------------------------------------------------------------------
// Graph: concepts are authoritative for nodes; edges = file ∪ frontmatter ∪ hierarchy
// ---------------------------------------------------------------------------

export function buildGraph(concepts: Concept[], file: Graph | null, diagnostics?: Diagnostic[]): Graph {
  const ids = new Set(concepts.map((c) => c.id))
  const nodes = concepts.map((c) => ({ id: c.id, title: c.title, land: c.land, abstraction: c.abstraction, level: c.level }))
  const edges = new Map<string, GraphEdge>()
  const add = (e: GraphEdge) => {
    if (!ids.has(e.source) || !ids.has(e.target) || e.source === e.target) return
    edges.set(`${e.source}|${e.target}|${e.type}`, e)
  }
  for (const c of concepts) {
    if (c.parent) add({ source: c.parent, target: c.id, type: 'parent' })
    for (const ch of c.children) add({ source: c.id, target: ch, type: 'parent' })
    for (const r of c.relations) add({ source: c.id, target: r.target, type: r.type })
  }
  let dropped = 0
  for (const e of file?.edges ?? []) {
    if (!ids.has(e.source) || !ids.has(e.target)) dropped++
    add(e)
  }
  if (dropped && diagnostics) {
    diagnostics.push({ severity: 'info', code: 'graph-edges-dropped', file: 'graph.json', message: `${dropped} graph edges reference concepts that are not in the merged set and were dropped` })
  }
  return { nodes, edges: [...edges.values()] }
}

// ---------------------------------------------------------------------------
// utils
// ---------------------------------------------------------------------------

export function walk(dir: string): string[] {
  const out: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(p))
    else out.push(p)
  }
  return out.sort()
}

function groupBy<T>(items: T[], key: (t: T) => string): Map<string, T[]> {
  const m = new Map<string, T[]>()
  for (const it of items) {
    const k = key(it)
    if (!m.has(k)) m.set(k, [])
    m.get(k)!.push(it)
  }
  return m
}

function titleCase(slug: string): string {
  return slug.split('-').map((w) => w[0]?.toUpperCase() + w.slice(1)).join(' ')
}
