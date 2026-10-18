import { useEffect, useRef, useState } from 'react'
import vegaEmbed, { type VisualizationSpec } from 'vega-embed'
import { useBodyColors } from './useBodyColors'

const FONT = 'Work Sans, system-ui, sans-serif'

/** Vega-Lite on the press page: transparent background, ink strokes in the page's --color. */
function paperConfig(color: string): Record<string, unknown> {
  const dim = 'rgba(255,255,255,0.18)'
  return {
    background: 'transparent',
    font: FONT,
    padding: 8,
    autosize: { type: 'fit', contains: 'padding' },
    axis: {
      labelFont: FONT,
      titleFont: FONT,
      labelColor: color,
      titleColor: color,
      gridColor: dim,
      gridDash: [2, 4],
      domainColor: color,
      tickColor: color,
      labelFontSize: 12,
      titleFontSize: 13,
      titleFontWeight: 600,
    },
    legend: { labelFont: FONT, titleFont: FONT, labelColor: color, titleColor: color, symbolStrokeWidth: 1.5 },
    title: { font: FONT, color, fontSize: 15, anchor: 'start', fontWeight: 600 },
    view: { stroke: null },
    range: { category: [color, '#d9b46a', '#8fb3c9', '#c98fa6', '#9fc49a', '#c9a98f'], ordinal: [dim, color] },
    bar: { fill: color, fillOpacity: 0.85, stroke: color, strokeWidth: 1, cornerRadiusEnd: 2 },
    line: { stroke: color, strokeWidth: 2.5, strokeCap: 'round', strokeJoin: 'round' },
    area: { fill: color, fillOpacity: 0.25, line: { stroke: color } },
    point: { filled: true, fill: color, size: 60 },
    rule: { stroke: color },
    text: { fill: color, font: FONT },
    mark: { color },
  }
}

export default function ChartVisual({ source, alt }: { source: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  // Live page ink: re-embed when the reading flow re-tints the page for the next book.
  const { color } = useBodyColors()

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
    const specWithSize = { width: 'container', ...spec, config: { ...paperConfig(color), ...(spec as { config?: object }).config } } as unknown as VisualizationSpec
    vegaEmbed(el, specWithSize, { actions: false, renderer: 'svg', ast: true })
      .then((r) => {
        result = r
        const svg = el.querySelector('svg')
        if (svg) {
          svg.setAttribute('role', 'img')
          if (alt) svg.setAttribute('aria-label', alt)
        }
      })
      .catch((e) => setError(String(e?.message ?? e)))
    return () => result?.finalize()
  }, [source, alt, color])

  if (error) return <pre className="visual__error">chart could not be drawn: {error}</pre>
  return <div className="visual__chart" ref={ref} />
}
