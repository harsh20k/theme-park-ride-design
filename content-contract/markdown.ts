/**
 * Concept-card body parser.
 *
 * Body layout per the research spec:
 *   1. visuals first (fenced ```mermaid / ```chart|vega-lite / ```svg /
 *      ```formula|latex|math or $$…$$ blocks, or ![alt](media/…) images)
 *   2. 50–200 words of prose with inline Markdown links to other concepts
 *   3. an "Explore further" section
 *
 * We extract visuals wherever they appear (so slightly out-of-order cards
 * still render), keep the prose with links intact, and resolve link targets
 * to concept ids so the site and checker can validate them.
 */
import type { VisualBlock, VisualKind } from './schema'

export interface ParsedBody {
  visuals: VisualBlock[]
  prose: string
  wordCount: number
  exploreFurther: string
  links: ParsedLink[]
  /** True if prose text appears before the first visual (spec says visuals first). */
  proseBeforeVisuals: boolean
}

export interface ParsedLink {
  text: string
  /** Raw href as written. */
  href: string
  /** Resolved concept id, or null for external / non-concept links. */
  conceptId: string | null
  external: boolean
}

const FENCE_RE = /^(`{3,}|~{3,})[ \t]*([\w-]+)?[^\n]*\n([\s\S]*?)\n\1[ \t]*$/gm
const MATH_RE = /\$\$\s*([\s\S]*?)\s*\$\$/g
const IMAGE_RE = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g
const LINK_RE = /(?<!!)\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g
const EXPLORE_RE = /^(?:#{1,6}\s*|\*\*)\s*explore\s+further\s*:?\s*(?:\*\*)?\s*$/im
/** Optional title/alt comment on the first line of a fence: `%% title: Foo | alt: Bar` or `<!-- alt: … -->`. */
const META_RE = /^\s*(?:%%|<!--|#|\/\/)\s*(.*?)\s*(?:-->)?\s*$/

const LANG_TO_KIND: Record<string, VisualKind> = {
  mermaid: 'mermaid',
  chart: 'chart',
  'vega-lite': 'chart',
  vegalite: 'chart',
  vega: 'chart',
  svg: 'svg',
  formula: 'formula',
  latex: 'formula',
  math: 'formula',
  tex: 'formula',
}

function parseMeta(firstLine: string): { title?: string; alt?: string } | null {
  const m = META_RE.exec(firstLine)
  if (!m) return null
  const out: { title?: string; alt?: string } = {}
  for (const part of m[1].split('|')) {
    const [k, ...rest] = part.split(':')
    const v = rest.join(':').trim()
    if (!v) continue
    if (/^title$/i.test(k.trim())) out.title = v
    if (/^alt$/i.test(k.trim())) out.alt = v
  }
  return out.title || out.alt ? out : null
}

export function parseBody(raw: string): ParsedBody {
  let body = raw.replace(/\r\n/g, '\n').trim()

  // 1. Split off "Explore further".
  let exploreFurther = ''
  const exploreMatch = EXPLORE_RE.exec(body)
  if (exploreMatch) {
    exploreFurther = body.slice(exploreMatch.index + exploreMatch[0].length).trim()
    body = body.slice(0, exploreMatch.index).trim()
  }

  // 2. Pull out visual blocks (in document order).
  const found: { index: number; length: number; block: VisualBlock | null }[] = []

  for (const m of body.matchAll(FENCE_RE)) {
    const lang = (m[2] ?? '').toLowerCase()
    const kind = LANG_TO_KIND[lang]
    if (!kind) continue // unknown fence: leave in prose
    const lines = m[3].split('\n')
    const meta = parseMeta(lines[0] ?? '')
    const source = (meta ? lines.slice(1) : lines).join('\n').trim()
    found.push({ index: m.index, length: m[0].length, block: { kind, source, ...meta } })
  }
  for (const m of body.matchAll(MATH_RE)) {
    // Skip if inside a fence we already took.
    if (found.some((f) => m.index >= f.index && m.index < f.index + f.length)) continue
    found.push({ index: m.index, length: m[0].length, block: { kind: 'formula', source: m[1].trim() } })
  }
  for (const m of body.matchAll(IMAGE_RE)) {
    if (found.some((f) => m.index >= f.index && m.index < f.index + f.length)) continue
    found.push({
      index: m.index,
      length: m[0].length,
      block: { kind: 'image', source: m[2], alt: m[1] || undefined, title: m[3] || undefined },
    })
  }
  found.sort((a, b) => a.index - b.index)

  const visuals = found.map((f) => f.block!).filter(Boolean)

  // 3. Prose = body minus visual blocks.
  let prose = ''
  let cursor = 0
  for (const f of found) {
    prose += body.slice(cursor, f.index)
    cursor = f.index + f.length
  }
  prose += body.slice(cursor)
  prose = prose.replace(/\n{3,}/g, '\n\n').trim()

  const firstVisualIndex = found[0]?.index ?? Infinity
  const leading = body.slice(0, Math.min(firstVisualIndex, body.length)).trim()
  const proseBeforeVisuals = found.length > 0 && countWords(leading) > 0

  // 4. Links (prose + explore further).
  const links: ParsedLink[] = []
  for (const text of [prose, exploreFurther]) {
    for (const m of text.matchAll(LINK_RE)) {
      links.push(resolveLink(m[1], m[2]))
    }
  }

  return { visuals, prose, wordCount: countWords(prose), exploreFurther, links, proseBeforeVisuals }
}

/** Resolve an inline link target to a concept id when it looks like one. */
export function resolveLink(text: string, href: string): ParsedLink {
  const external = /^(?:[a-z]+:)?\/\//i.test(href) || /^mailto:/i.test(href)
  if (external) return { text, href, conceptId: null, external: true }
  const conceptId = conceptIdFromHref(href)
  return { text, href, conceptId, external: false }
}

/**
 * Accepts: `motion-sickness`, `motion-sickness.md`, `../human-factors/motion-sickness.md`,
 * `/land/human-factors/motion-sickness`, `#motion-sickness`, `concept:motion-sickness`.
 */
export function conceptIdFromHref(href: string): string | null {
  let h = href.trim()
  h = h.replace(/^concept:/i, '')
  h = h.split('?')[0]
  if (h.startsWith('#')) h = h.slice(1)
  h = h.replace(/#.*$/, '')
  h = h.replace(/\.md$/i, '')
  const segs = h.split('/').filter((s) => s && s !== '.' && s !== '..')
  const last = segs[segs.length - 1]
  if (!last) return null
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(last) ? last : null
}

/** Rough word count on markdown prose (strips link urls, emphasis, headings). */
export function countWords(md: string): number {
  const text = md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>#~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text ? text.split(' ').length : 0
}
