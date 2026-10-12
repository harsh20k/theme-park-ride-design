#!/usr/bin/env tsx
/** Regenerates sample-content/graph.json from the sample concept frontmatter. Never touches /content. */
import fs from 'node:fs'
import path from 'node:path'
import { loadContent } from '../content-contract/loader'

const { bundle } = loadContent({ source: 'sample' })
const out = path.resolve('sample-content/graph.json')
fs.writeFileSync(
  out,
  JSON.stringify({ _placeholder: 'SAMPLE CONTENT — generated from sample concept frontmatter by scripts/build-sample-graph.ts', ...bundle.graph }, null, 2) + '\n',
)
console.log(`wrote ${out}: ${bundle.graph.nodes.length} nodes, ${bundle.graph.edges.length} edges`)
