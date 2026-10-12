/**
 * mindmap.md parser.
 *
 * The research process writes a Markdown file containing
 *   (a) a ```mermaid mindmap block, and/or
 *   (b) an "Outline with slugs and levels" section:
 *         ### Land Title — `land-id`
 *         - `slug` — Title *(level)*
 *           - `child-slug` — Title *(level)*
 *
 * We prefer (b) because it carries slugs + levels; (a) is the fallback.
 * Either way the result is a tree: root → lands → super-concepts → concepts → sub-concepts.
 */
import type { Level, MindmapNode } from './schema'

const LEVELS = new Set(['beginner', 'intermediate', 'advanced'])

export function parseMindmap(md: string, rootLabel = 'Knowledge map'): MindmapNode | null {
  const src = md.replace(/\r\n/g, '\n')
  return parseOutline(src, rootLabel) ?? parseMermaidMindmap(src, rootLabel)
}

// ---------------------------------------------------------------------------
// (b) outline with slugs
// ---------------------------------------------------------------------------

const LAND_HEADING_RE = /^#{2,4}\s+(.+?)\s+—\s+`([a-z0-9-]+)`\s*$/
const ITEM_RE = /^(\s*)-\s+`([a-z0-9-]+)`\s+—\s+(.+?)(?:\s+\*\((\w+)\)\*)?\s*$/

function parseOutline(src: string, rootLabel: string): MindmapNode | null {
  const lines = src.split('\n')
  const root: MindmapNode = { id: 'root', label: rootLabel, depth: 0, children: [] }
  let land: MindmapNode | null = null
  let stack: MindmapNode[] = []
  let inOutline = false

  for (const line of lines) {
    if (/^##\s+/.test(line) && !LAND_HEADING_RE.test(line)) {
      // A new top-level section; stay in outline only while headings carry a land slug.
      inOutline = /outline/i.test(line)
      if (!inOutline) {
        land = null
        stack = []
      }
      continue
    }
    const lh = LAND_HEADING_RE.exec(line)
    if (lh) {
      land = { id: lh[2], label: lh[1].trim(), depth: 1, children: [] }
      root.children.push(land)
      stack = [land]
      inOutline = true
      continue
    }
    if (!inOutline || !land) continue
    const im = ITEM_RE.exec(line)
    if (!im) continue
    const indent = im[1].replace(/\t/g, '  ').length
    const depth = 2 + Math.floor(indent / 2) // 2 = super-concept
    const node: MindmapNode = {
      id: im[2],
      label: im[3].trim(),
      depth,
      level: LEVELS.has(im[4]) ? (im[4] as Level) : undefined,
      children: [],
    }
    stack = stack.slice(0, depth - 1)
    const parent = stack[stack.length - 1] ?? land
    parent.children.push(node)
    stack.push(node)
  }
  return root.children.length ? root : null
}

// ---------------------------------------------------------------------------
// (a) mermaid mindmap block
// ---------------------------------------------------------------------------

const MERMAID_RE = /```mermaid\s*\n\s*mindmap\s*\n([\s\S]*?)```/

function parseMermaidMindmap(src: string, rootLabel: string): MindmapNode | null {
  const m = MERMAID_RE.exec(src)
  if (!m) return null
  const lines = m[1].split('\n').filter((l) => l.trim() && !l.trim().startsWith('%%'))
  if (!lines.length) return null

  const indents = lines.map((l) => l.length - l.trimStart().length)
  const minIndent = Math.min(...indents)
  // Normalise indent steps.
  const steps = Array.from(new Set(indents.map((i) => i - minIndent))).sort((a, b) => a - b)
  const unit = steps.find((s) => s > 0) ?? 2

  let root: MindmapNode | null = null
  const stack: MindmapNode[] = []
  for (let i = 0; i < lines.length; i++) {
    const depth = Math.round((indents[i] - minIndent) / unit)
    const { id, label } = parseMermaidNode(lines[i].trim())
    const node: MindmapNode = { id, label, depth, children: [] }
    if (depth === 0 && !root) {
      root = { ...node, label: node.label || rootLabel }
      stack.length = 0
      stack.push(root)
      continue
    }
    stack.length = depth
    const parent = stack[depth - 1] ?? root
    parent?.children.push(node)
    stack[depth] = node
  }
  return root
}

/** `id((label))`, `id[label]`, `id(label)`, `id{{label}}` or bare `label`. */
function parseMermaidNode(s: string): { id: string; label: string } {
  const m = /^([A-Za-z0-9_-]+)?\s*(\(\(|\[\[|\{\{|\(|\[|\{|\)\)|\)|\])?(.*?)(\)\)|\]\]|\}\}|\)|\]|\})?$/.exec(s)
  if (m && m[2]) {
    const label = m[3].trim()
    const id = m[1] ? m[1].replace(/_/g, '-') : slugify(label)
    return { id, label }
  }
  return { id: slugify(s), label: s }
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Flatten a tree for lookups. */
export function flattenMindmap(root: MindmapNode | null): MindmapNode[] {
  const out: MindmapNode[] = []
  const walk = (n: MindmapNode) => {
    out.push(n)
    n.children.forEach(walk)
  }
  if (root) walk(root)
  return out
}
