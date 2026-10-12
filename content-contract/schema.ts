/**
 * Content contract — the ONLY thing the site depends on.
 *
 * Every file the research process produces is described here as a Zod schema
 * plus an inferred TypeScript type. Everything is permissive where the research
 * spec is silent (optional with sensible defaults) and strict where the spec is
 * explicit (ids, abstraction, relation types, graph shape).
 *
 * Files covered:
 *   lands.json, concepts/<land>/<id>.md (frontmatter + body), graph.json,
 *   mindmap.md, resources.json, glossary.json, timeline.json,
 *   learning-path.json, media/
 */
import { z } from 'zod'

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

/** kebab-case slug: `motion-sickness`, `ride-systems`. */
export const Slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be a kebab-case slug (a-z, 0-9, hyphens)')

export const Level = z.enum(['beginner', 'intermediate', 'advanced'])
export type Level = z.infer<typeof Level>

export const Abstraction = z.enum(['super-concept', 'concept', 'sub-concept'])
export type Abstraction = z.infer<typeof Abstraction>

export const RELATION_TYPES = [
  'is-a',
  'part-of',
  'causes',
  'enables',
  'limits',
  'contrasts-with',
  'applies-to',
  'example-of',
] as const
export const RelationType = z.enum(RELATION_TYPES)
export type RelationType = z.infer<typeof RelationType>

/** Confidence may be a word or a 0–1 number; normalised to a word downstream. */
export const Confidence = z.union([z.enum(['high', 'medium', 'low']), z.number().min(0).max(1)])
export type Confidence = z.infer<typeof Confidence>

/** Hex colour `#rgb` / `#rrggbb`. */
export const HexColor = z.string().regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/, 'must be a hex colour')

// ---------------------------------------------------------------------------
// lands.json
// ---------------------------------------------------------------------------

/** Which kind of library building stands in the land. The 3D scene picks a model by this. */
export const BuildingKind = z.enum([
  'pavilion',
  'castle',
  'station',
  'workshop',
  'observatory',
  'theatre',
  'greenhouse',
  'lighthouse',
  'tower',
  'museum',
  'control-room',
  'lab',
  'schoolhouse',
])
export type BuildingKind = z.infer<typeof BuildingKind>

export const Land = z.object({
  id: Slug,
  title: z.string().min(1),
  /** Short line shown on the park map and the gate sign. */
  tagline: z.string().default(''),
  description: z.string().default(''),
  /** Primary paper colour for the zone. */
  color: HexColor.default('#e8d8b8'),
  /** Secondary / accent paper colour. */
  accent: HexColor.default('#c9a66b'),
  /** Named landmark that identifies the zone from afar. */
  landmark: z.string().default(''),
  /** Library building type. */
  building: BuildingKind.default('pavilion'),
  /** One-word mood: "cozy", "electric", "misty", ... */
  mood: z.string().default(''),
  /** Display order around the park; lower = earlier. */
  order: z.number().int().optional(),
  /** Short emoji or glyph for 2D UI. */
  icon: z.string().default('📚'),
})
export type Land = z.infer<typeof Land>

/** lands.json may be a bare array or `{ lands: [...] }`. */
export const LandsFile = z.union([z.array(Land), z.object({ lands: z.array(Land) }).transform((o) => o.lands)])

// ---------------------------------------------------------------------------
// Concept card frontmatter
// ---------------------------------------------------------------------------

export const VISUAL_KINDS = ['mermaid', 'chart', 'svg', 'formula', 'image'] as const
export const VisualKind = z.enum(VISUAL_KINDS)
export type VisualKind = z.infer<typeof VisualKind>

/** Visual descriptor in frontmatter. A bare string is shorthand for `{ type }`. */
export const VisualDescriptor = z.union([
  VisualKind,
  z.object({
    type: VisualKind,
    title: z.string().optional(),
    /** Alt text for screen readers; strongly recommended. */
    alt: z.string().optional(),
    /** For `image`: path relative to content root (`media/...`). */
    src: z.string().optional(),
  }),
])
export type VisualDescriptor = z.infer<typeof VisualDescriptor>

export const Relation = z.object({
  type: RelationType,
  target: Slug,
  note: z.string().optional(),
})
export type Relation = z.infer<typeof Relation>

export const Source = z.union([
  z.string().min(1),
  z.object({
    title: z.string().min(1),
    url: z.string().url().optional(),
    author: z.string().optional(),
    year: z.union([z.number().int(), z.string()]).optional(),
    type: z.string().optional(),
    note: z.string().optional(),
  }),
])
export type Source = z.infer<typeof Source>

export const ConceptFrontmatter = z.object({
  id: Slug,
  title: z.string().min(1),
  land: Slug,
  level: Level,
  abstraction: Abstraction,
  /** Parent concept id; null/absent for super-concepts. */
  parent: Slug.nullable().optional(),
  children: z.array(Slug).default([]),
  relations: z.array(Relation).default([]),
  summary: z.string().default(''),
  tags: z.array(z.string()).default([]),
  visuals: z.array(VisualDescriptor).default([]),
  /** Free-text idea for an interactive toy; the site maps ids → toy components. */
  interactive_idea: z.string().nullable().optional(),
  /** Optional explicit toy id, overrides the site's id-based toy registry. */
  toy: Slug.nullable().optional(),
  sources: z.array(Source).default([]),
  confidence: Confidence.default('medium'),
})
export type ConceptFrontmatter = z.infer<typeof ConceptFrontmatter>

/** A rendered visual block extracted from the body. */
export interface VisualBlock {
  kind: VisualKind
  /** Mermaid / Vega-Lite / SVG / LaTeX source, or image path. */
  source: string
  title?: string
  alt?: string
}

/** A parsed concept card = frontmatter + structured body. */
export interface Concept extends ConceptFrontmatter {
  /** Normalised confidence word. */
  confidenceLabel: 'high' | 'medium' | 'low'
  /** Where it came from — `real` (/content) or `sample` (/sample-content). */
  origin: 'real' | 'sample'
  /** Path relative to the content root. */
  path: string
  body: {
    /** Visual blocks that appear before the prose. */
    visuals: VisualBlock[]
    /** Markdown prose (inline links intact). */
    prose: string
    /** Word count of `prose`. */
    wordCount: number
    /** Markdown under "Explore further" (may be empty). */
    exploreFurther: string
    /** Concept ids referenced by inline links anywhere in the body. */
    links: string[]
  }
}

// ---------------------------------------------------------------------------
// graph.json
// ---------------------------------------------------------------------------

export const GraphNode = z.object({
  id: Slug,
  title: z.string().min(1),
  land: Slug,
  abstraction: Abstraction,
  level: Level,
})
export type GraphNode = z.infer<typeof GraphNode>

/** Edge type = a relation type, or the hierarchy edge `parent` (source is parent of target). */
export const GraphEdgeType = z.enum([...RELATION_TYPES, 'parent'])
export type GraphEdgeType = z.infer<typeof GraphEdgeType>

export const GraphEdge = z.object({
  source: Slug,
  target: Slug,
  type: GraphEdgeType,
})
export type GraphEdge = z.infer<typeof GraphEdge>

export const GraphFile = z.object({
  nodes: z.array(GraphNode),
  edges: z.array(GraphEdge),
})
export type Graph = z.infer<typeof GraphFile>

// ---------------------------------------------------------------------------
// mindmap.md — parsed into a tree
// ---------------------------------------------------------------------------

export interface MindmapNode {
  /** Slug if known (from outline), otherwise derived from the label. */
  id: string
  label: string
  /** 0 = root, 1 = land, 2 = super-concept, 3 = concept, 4 = sub-concept. */
  depth: number
  level?: Level
  children: MindmapNode[]
}

// ---------------------------------------------------------------------------
// resources.json
// ---------------------------------------------------------------------------

export const ResourceType = z.enum([
  'book',
  'paper',
  'article',
  'video',
  'podcast',
  'course',
  'site',
  'tool',
  'standard',
  'talk',
  'patent',
  'other',
])
export type ResourceType = z.infer<typeof ResourceType>

export const Resource = z.object({
  id: Slug,
  title: z.string().min(1),
  url: z.string().url().optional(),
  type: ResourceType.default('other'),
  author: z.string().optional(),
  year: z.union([z.number().int(), z.string()]).optional(),
  summary: z.string().default(''),
  lands: z.array(Slug).default([]),
  concepts: z.array(Slug).default([]),
  tags: z.array(z.string()).default([]),
  /** Corpus fields (content/resources.json). */
  why_it_matters: z.string().optional(),
  land: Slug.optional(),
  level: z.string().optional(),
  verified_on: z.string().optional(),
})
export type Resource = z.infer<typeof Resource>

export const ResourcesFile = z.union([
  z.array(Resource),
  z.object({ resources: z.array(Resource) }).transform((o) => o.resources),
])

// ---------------------------------------------------------------------------
// glossary.json
// ---------------------------------------------------------------------------

export const GlossaryEntry = z.object({
  term: z.string().min(1),
  definition: z.string().min(1),
  /** Concept this term belongs to, if any. */
  concept: Slug.optional(),
  land: Slug.optional(),
  aliases: z.array(z.string()).default([]),
})
export type GlossaryEntry = z.infer<typeof GlossaryEntry>

export const GlossaryFile = z.union([
  z.array(GlossaryEntry),
  z.object({ glossary: z.array(GlossaryEntry) }).transform((o) => o.glossary),
  z.object({ terms: z.array(GlossaryEntry) }).transform((o) => o.terms),
])

// ---------------------------------------------------------------------------
// timeline.json
// ---------------------------------------------------------------------------

export const TimelineEvent = z.preprocess(
  (raw) => {
    // Corpus shape: { date: "1959-06-14", precision, concept, source } → contract shape.
    if (raw && typeof raw === 'object') {
      const o = { ...(raw as Record<string, unknown>) }
      if (o.year === undefined && typeof o.date === 'string') {
        const y = parseInt(o.date.slice(0, 4), 10)
        if (!Number.isNaN(y)) o.year = y
      }
      if (o.concepts === undefined && typeof o.concept === 'string') o.concepts = [o.concept]
      return o
    }
    return raw
  },
  z.object({
    /** Year (may be approximate / negative for BCE). */
    year: z.number().int(),
    /** Optional ISO date for ordering within a year. */
    date: z.string().optional(),
    precision: z.string().optional(),
    title: z.string().min(1),
    description: z.string().default(''),
    era: z.string().optional(),
    land: Slug.optional(),
    concepts: z.array(Slug).default([]),
    source: z.string().optional(),
    /** Optional media path for a small picture. */
    image: z.string().optional(),
  }),
)
export type TimelineEvent = z.infer<typeof TimelineEvent>

export const TimelineFile = z.union([
  z.array(TimelineEvent),
  z.object({ events: z.array(TimelineEvent) }).transform((o) => o.events),
  z.object({ timeline: z.array(TimelineEvent) }).transform((o) => o.timeline),
])

// ---------------------------------------------------------------------------
// learning-path.json
// ---------------------------------------------------------------------------

export const LearningStep = z.union([
  Slug,
  z.object({
    concept: Slug,
    note: z.string().optional(),
    land: Slug.optional(),
    level: z.union([Level, z.string()]).optional(),
  }),
])

export const LearningPath = z.object({
  id: Slug,
  title: z.string().min(1),
  description: z.string().default(''),
  /** Usually a Level, but tracks may say "mixed" / "all levels". */
  level: z.union([Level, z.string()]).default('beginner'),
  kind: z.string().optional(),
  audience: z.string().optional(),
  /** Rough time to complete, free text ("2 hours"). */
  duration: z.string().optional(),
  steps: z.array(LearningStep).min(1),
})
export type LearningPath = z.infer<typeof LearningPath>

export const LearningPathFile = z.union([
  z.array(LearningPath),
  z.object({ paths: z.array(LearningPath) }).transform((o) => o.paths),
  LearningPath.transform((p) => [p]),
])

// ---------------------------------------------------------------------------
// media/
// ---------------------------------------------------------------------------

/** We index what exists on disk; an optional media/index.json can add alt text. */
export const MediaIndexEntry = z.object({
  path: z.string().min(1),
  alt: z.string().optional(),
  credit: z.string().optional(),
})
export const MediaIndexFile = z.array(MediaIndexEntry)

export interface MediaAsset {
  /** Path relative to content root, e.g. `media/coaster-loop.svg`. */
  path: string
  bytes: number
  alt?: string
  credit?: string
  origin: 'real' | 'sample'
}

// ---------------------------------------------------------------------------
// The assembled bundle the site consumes
// ---------------------------------------------------------------------------

export interface ContentBundle {
  lands: Land[]
  concepts: Concept[]
  graph: Graph
  mindmap: MindmapNode | null
  resources: Resource[]
  glossary: GlossaryEntry[]
  timeline: TimelineEvent[]
  learningPaths: LearningPath[]
  media: MediaAsset[]
  /** Which source was used for which file — surfaced in the UI as "placeholder". */
  provenance: Provenance
}

export interface Provenance {
  mode: 'auto' | 'sample' | 'real'
  realDir: string | null
  sampleDir: string
  files: Record<string, 'real' | 'sample' | 'missing'>
  /** Lands whose concept folder came from real content. */
  realLands: string[]
  sampleLands: string[]
}

/** Normalise a Confidence to a word. */
export function confidenceLabel(c: Confidence): 'high' | 'medium' | 'low' {
  if (typeof c === 'string') return c
  if (c >= 0.75) return 'high'
  if (c >= 0.4) return 'medium'
  return 'low'
}
