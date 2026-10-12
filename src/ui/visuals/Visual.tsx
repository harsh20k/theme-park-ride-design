import { Suspense, lazy, useMemo } from 'react'
import type { VisualBlock } from '@content/schema'
import { mediaUrl } from '@/press/Markdown'
import FormulaVisual from './FormulaVisual'
import './visuals.css'

const MermaidVisual = lazy(() => import('./MermaidVisual'))
const ChartVisual = lazy(() => import('./ChartVisual'))

/** Renders one visual block from a concept card. */
export default function Visual({ block, index }: { block: VisualBlock; index: number }) {
  const label = block.title ?? block.alt ?? `${block.kind} visual ${index + 1}`
  return (
    <figure className={`visual visual--${block.kind}`} aria-label={block.alt ?? block.title}>
      <div className="visual__frame">
        <Suspense fallback={<div className="visual__loading">drawing…</div>}>
          <VisualBody block={block} />
        </Suspense>
      </div>
      {(block.title || block.alt) && <figcaption className="visual__caption">{label}</figcaption>}
    </figure>
  )
}

function VisualBody({ block }: { block: VisualBlock }) {
  switch (block.kind) {
    case 'mermaid':
      return <MermaidVisual source={block.source} alt={block.alt} />
    case 'chart':
      return <ChartVisual source={block.source} alt={block.alt} />
    case 'svg':
      return <SvgVisual source={block.source} alt={block.alt} />
    case 'formula':
      return <FormulaVisual source={block.source} alt={block.alt} />
    case 'image':
      return <img className="visual__img" src={mediaUrl(block.source)} alt={block.alt ?? ''} loading="lazy" />
  }
}

/** Inline SVG from content, lightly sanitised (no scripts / event handlers / foreign hrefs). */
function SvgVisual({ source, alt }: { source: string; alt?: string }) {
  const html = useMemo(() => sanitizeSvg(source), [source])
  return <div className="visual__svg" role="img" aria-label={alt} dangerouslySetInnerHTML={{ __html: html }} />
}

export function sanitizeSvg(src: string): string {
  return src
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, '')
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(xlink:href|href)\s*=\s*("|')(?!#)[^"']*\2/gi, '')
}
