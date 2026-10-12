/**
 * Vite plugin: exposes the content bundle as virtual modules, split per land
 * so each land's cards are lazy-loaded.
 *
 *   import index from 'virtual:content-index'        // lands, graph, glossary, … + concept index (no bodies)
 *   const land = await index.landLoaders['human-factors']()  // → { concepts: Concept[] } with bodies
 *
 * Media under <content>/media is served at /media/* in dev and emitted into
 * the build. Changes to content dirs trigger a full reload in dev.
 */
import fs from 'node:fs'
import path from 'node:path'
import type { Plugin, ViteDevServer } from 'vite'
import { loadContent, resolveDirs, type LoadResult } from '../content-contract/loader'
import type { Concept } from '../content-contract/schema'

const INDEX_ID = 'virtual:content-index'
const LAND_PREFIX = 'virtual:content-land:'
const RESOLVED = '\0'

export type ConceptIndexEntry = Omit<Concept, 'body'> & {
  body: { wordCount: number; links: string[]; visualKinds: Concept['body']['visuals'][number]['kind'][] }
}

export default function contentPlugin(): Plugin {
  let result: LoadResult | null = null
  let server: ViteDevServer | null = null
  let dirs = resolveDirs()

  const load = () => {
    dirs = resolveDirs()
    result = loadContent()
    const errors = result.diagnostics.filter((d) => d.severity === 'error')
    const p = result.bundle.provenance
    // eslint-disable-next-line no-console
    console.log(
      `[content] mode=${p.mode} lands=${result.bundle.lands.length} concepts=${result.bundle.concepts.length} ` +
        `(real: ${p.realLands.length} lands, sample: ${p.sampleLands.length} lands)` +
        (errors.length ? ` — ${errors.length} errors, run npm run content:check` : ''),
    )
    return result
  }
  const get = () => result ?? load()

  const mediaFile = (urlPath: string): string | null => {
    const rel = decodeURIComponent(urlPath.replace(/^\/+/, ''))
    if (rel.includes('..')) return null
    const asset = get().bundle.media.find((m) => m.path === rel)
    if (!asset) return null
    const base = asset.origin === 'real' ? dirs.realDir : dirs.sampleDir
    const abs = path.join(base, rel)
    return fs.existsSync(abs) ? abs : null
  }

  return {
    name: 'papercraft-content',
    enforce: 'pre',

    buildStart() {
      load()
    },

    configureServer(s) {
      server = s
      const watchDirs = [dirs.realDir, dirs.sampleDir].filter((d) => fs.existsSync(d))
      for (const d of watchDirs) s.watcher.add(d)
      const onChange = (file: string) => {
        if (!watchDirs.some((d) => file.startsWith(d))) return
        result = null
        for (const id of [...s.moduleGraph.idToModuleMap.keys()]) {
          if (id.startsWith(RESOLVED + 'virtual:content')) {
            const mod = s.moduleGraph.getModuleById(id)
            if (mod) s.moduleGraph.invalidateModule(mod)
          }
        }
        s.ws.send({ type: 'full-reload' })
      }
      s.watcher.on('change', onChange).on('add', onChange).on('unlink', onChange)

      s.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/media/')) return next()
        const abs = mediaFile(req.url.split('?')[0])
        if (!abs) return next()
        res.setHeader('Content-Type', mime(abs))
        fs.createReadStream(abs).pipe(res)
      })
    },

    resolveId(id) {
      if (id === INDEX_ID || id.startsWith(LAND_PREFIX)) return RESOLVED + id
      return null
    },

    load(id) {
      if (!id.startsWith(RESOLVED + 'virtual:content')) return null
      const { bundle } = get()
      const vid = id.slice(RESOLVED.length)

      if (vid === INDEX_ID) {
        const conceptIndex: ConceptIndexEntry[] = bundle.concepts.map(({ body, ...rest }) => ({
          ...rest,
          body: { wordCount: body.wordCount, links: body.links, visualKinds: body.visuals.map((v) => v.kind) },
        }))
        const { concepts: _omit, ...restBundle } = bundle
        const landLoaders = bundle.lands
          .map((l) => `  ${JSON.stringify(l.id)}: () => import(${JSON.stringify(LAND_PREFIX + l.id)}),`)
          .join('\n')
        return [
          `const data = ${JSON.stringify({ ...restBundle, conceptIndex })};`,
          `export const landLoaders = {\n${landLoaders}\n};`,
          `export default { ...data, landLoaders };`,
        ].join('\n')
      }

      if (vid.startsWith(LAND_PREFIX)) {
        const landId = vid.slice(LAND_PREFIX.length)
        const concepts = bundle.concepts.filter((c) => c.land === landId)
        return `export const concepts = ${JSON.stringify(concepts)};\nexport default { concepts };`
      }
      return null
    },

    generateBundle() {
      const { bundle } = get()
      for (const m of bundle.media) {
        const abs = mediaFile('/' + m.path)
        if (!abs) continue
        this.emitFile({ type: 'asset', fileName: m.path, source: fs.readFileSync(abs) })
      }
      void server
    },
  }
}

function mime(file: string): string {
  const ext = path.extname(file).toLowerCase()
  return (
    {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.webp': 'image/webp',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.avif': 'image/avif',
      '.mp3': 'audio/mpeg',
      '.ogg': 'audio/ogg',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.webm': 'video/webm',
      '.json': 'application/json',
      '.glb': 'model/gltf-binary',
      '.gltf': 'model/gltf+json',
    }[ext] ?? 'application/octet-stream'
  )
}
