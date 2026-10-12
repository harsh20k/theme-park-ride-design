import { useEffect, useRef, useState } from 'react'
import vegaEmbed, { type VisualizationSpec } from 'vega-embed'

const PAPER_FONT = 'Nunito, Avenir Next, Segoe UI, system-ui, sans-serif'
const PALETTE = ['#c2566a', '#3f78b9', '#5f9b55', '#d9962b', '#7657b5', '#2f8f86', '#d6782a', '#8a7f6a']

/** Vega-Lite chart with a paper theme: cream background, ink strokes, hand-cut palette. */
const paperConfig = {
  background: 'transparent',
  font: PAPER_FONT,
  padding: 8,
  autosize: { type: 'fit', contains: 'padding' },
  axis: {
    labelFont: PAPER_FONT,
    titleFont: PAPER_FONT,
    labelColor: '#6c5a50',
    titleColor: '#3b2f2a',
    gridColor: '#e2d2b4',
    gridDash: [2, 4],
    domainColor: '#8a6d4a',
    tickColor: '#8a6d4a',
    labelFontSize: 12,
    titleFontSize: 13,
    titleFontWeight: 700,
  },
  legend: { labelFont: PAPER_FONT, titleFont: PAPER_FONT, labelColor: '#3b2f2a', titleColor: '#3b2f2a', symbolStrokeWidth: 1.5 },
  title: { font: PAPER_FONT, color: '#3b2f2a', fontSize: 15, anchor: 'start' },
  view: { stroke: null },
  range: { category: PALETTE, ordinal: PALETTE },
  bar: { stroke: '#3b2f2a', strokeWidth: 1.2, cornerRadiusEnd: 3 },
  line: { strokeWidth: 3, strokeCap: 'round', strokeJoin: 'round' },
  area: { opacity: 0.55, line: true },
  point: { filled: true, size: 70, stroke: '#3b2f2a', strokeWidth: 1 },
  mark: { color: PALETTE[0] },
} as Record<string, unknown>

export default function ChartVisual({ source, alt }: { source: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let result: { finalize: () => void } | null = null
    let spec: VisualizationSpec
    try {
      spec = JSON.parse(source)
    } catch (e) {
      setError(`chart spec is not valid JSON: ${(e as Error).message}`)
      return
    }
    const specWithSize = { width: 'container', ...spec, config: { ...paperConfig, ...(spec as { config?: object }).config } } as unknown as VisualizationSpec
    vegaEmbed(el, specWithSize, { actions: false, renderer: 'svg', ast: true })
      .then((r) => {
        result = r
        // Mark the SVG for screen readers.
        const svg = el.querySelector('svg')
        if (svg) {
          svg.setAttribute('role', 'img')
          if (alt) svg.setAttribute('aria-label', alt)
        }
      })
      .catch((e) => setError(String(e?.message ?? e)))
    return () => result?.finalize()
  }, [source, alt])

  if (error) return <pre className="visual__error">chart could not be drawn: {error}</pre>
  return <div className="visual__chart" ref={ref} />
}
