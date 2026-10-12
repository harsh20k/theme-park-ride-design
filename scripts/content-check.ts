#!/usr/bin/env tsx
/**
 * npm run content:check [-- --json] [--source auto|sample|real] [--dir <path>] [--strict]
 *
 * Validates the content corpus and prints a report:
 *   schema errors, broken inline links, orphan nodes, missing visuals,
 *   cards over 200 words, plus consistency warnings.
 *
 * Exit code 1 when there are errors (or warnings with --strict).
 * Never writes to /content.
 */
import { loadContent, type Diagnostic } from '../content-contract/loader'
import { checkContent, subjectFromRaw, summarise } from '../content-contract/check'

const args = process.argv.slice(2)
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 ? args[i + 1] : undefined
}
const has = (name: string) => args.includes(`--${name}`)

const source = (flag('source') ?? process.env.CONTENT_SOURCE ?? 'auto') as 'auto' | 'sample' | 'real'
const realDir = flag('dir') ?? process.env.CONTENT_DIR
const json = has('json')
const strict = has('strict')

const { bundle, diagnostics: loadDiags, raw } = loadContent({ source, realDir })

// Check each source on its own (so real-content problems show even when the
// site falls back to sample), then the merged bundle for cross-source issues.
const reports: { name: string; diags: Diagnostic[]; summary: ReturnType<typeof summarise> }[] = []
if (raw.real) {
  const subject = subjectFromRaw(raw.real)
  reports.push({ name: `real (${raw.real.dir})`, diags: [...loadDiags.filter((d) => d.file.startsWith('real:')), ...checkContent(subject)], summary: summarise(subject) })
}
if (source !== 'real') {
  const subject = subjectFromRaw(raw.sample)
  reports.push({ name: `sample (${raw.sample.dir})`, diags: [...loadDiags.filter((d) => d.file.startsWith('sample:')), ...checkContent(subject)], summary: summarise(subject) })
}
if (raw.real && source === 'auto') {
  const merged = checkContent({
    origin: 'merged',
    lands: bundle.lands,
    concepts: bundle.concepts,
    graph: null,
    resources: bundle.resources,
    glossary: bundle.glossary,
    timeline: bundle.timeline,
    learningPaths: bundle.learningPaths,
  }).filter((d) => ['broken-link', 'broken-relation', 'broken-child', 'orphan', 'broken-ref', 'unknown-land'].includes(d.code))
  reports.push({ name: 'merged (what the site will show)', diags: merged, summary: summarise({ origin: 'merged', lands: bundle.lands, concepts: bundle.concepts, graph: bundle.graph, resources: bundle.resources, glossary: bundle.glossary, timeline: bundle.timeline, learningPaths: bundle.learningPaths }) })
}

if (json) {
  console.log(JSON.stringify({ provenance: bundle.provenance, reports }, null, 2))
} else {
  printReport()
}

const errors = reports.flatMap((r) => r.diags).filter((d) => d.severity === 'error').length
const warns = reports.flatMap((r) => r.diags).filter((d) => d.severity === 'warn').length
process.exit(errors > 0 || (strict && warns > 0) ? 1 : 0)

// ---------------------------------------------------------------------------

function printReport() {
  const c = {
    dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
    bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
    red: (s: string) => `\x1b[31m${s}\x1b[0m`,
    yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
    green: (s: string) => `\x1b[32m${s}\x1b[0m`,
    cyan: (s: string) => `\x1b[36m${s}\x1b[0m`,
  }
  const p = bundle.provenance
  console.log(c.bold('\nPapercraft Park — content check'))
  console.log(c.dim(`mode=${p.mode}  real=${p.realDir ?? '(none)'}  sample=${p.sampleDir}`))
  console.log(c.dim(`files: ${Object.entries(p.files).map(([k, v]) => `${k}:${v}`).join('  ')}`))
  if (p.realLands.length) console.log(c.dim(`real lands: ${p.realLands.join(', ')}`))
  if (p.sampleLands.length) console.log(c.dim(`sample lands: ${p.sampleLands.join(', ')}`))

  for (const r of reports) {
    const s = r.summary
    console.log(`\n${c.bold(c.cyan(`■ ${r.name}`))}`)
    console.log(
      `  ${s.lands} lands · ${s.concepts} concepts (${Object.entries(s.byAbstraction).map(([k, v]) => `${v} ${k}`).join(', ') || 'none'}) · ${s.edges} edges · avg ${s.avgWords} words · ${s.withToys} with toy ideas`,
    )
    console.log(`  ${s.resources} resources · ${s.glossary} glossary · ${s.timeline} timeline · ${s.learningPaths} learning paths`)
    if (Object.keys(s.byLand).length) console.log(c.dim(`  per land: ${Object.entries(s.byLand).map(([k, v]) => `${k}=${v}`).join(' ')}`))

    const byCode = new Map<string, Diagnostic[]>()
    for (const d of r.diags) {
      if (!byCode.has(d.code)) byCode.set(d.code, [])
      byCode.get(d.code)!.push(d)
    }
    const order = ['schema', 'json', 'frontmatter', 'duplicate-id', 'unknown-land', 'broken-link', 'broken-relation', 'broken-child', 'orphan', 'missing-visual', 'too-long']
    const codes = [...byCode.keys()].sort((a, b) => (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99) || a.localeCompare(b))
    const e = r.diags.filter((d) => d.severity === 'error').length
    const w = r.diags.filter((d) => d.severity === 'warn').length
    if (!r.diags.length) console.log(`  ${c.green('✔ no issues')}`)
    else console.log(`  ${e ? c.red(`${e} errors`) : c.green('0 errors')} · ${w ? c.yellow(`${w} warnings`) : '0 warnings'} · ${r.diags.length - e - w} info`)
    for (const code of codes) {
      const list = byCode.get(code)!
      const sev = list[0].severity
      const tag = sev === 'error' ? c.red(`✖ ${code}`) : sev === 'warn' ? c.yellow(`▲ ${code}`) : c.dim(`ℹ ${code}`)
      console.log(`\n  ${tag} ${c.dim(`(${list.length})`)}`)
      const shown = has('all') ? list : list.slice(0, 15)
      for (const d of shown) console.log(`    ${c.dim(d.file)}  ${d.message}`)
      if (shown.length < list.length) console.log(c.dim(`    …${list.length - shown.length} more (use --all)`))
    }
  }
  console.log('')
}
