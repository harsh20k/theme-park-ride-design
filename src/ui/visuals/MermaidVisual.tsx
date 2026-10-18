import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'
import { useBodyColors } from './useBodyColors'

let initialisedFor = ''

/** (Re)initialise mermaid whenever the page palette changes — the theme is baked into each render. */
function init(color: string, bg: string) {
  const key = `${color}|${bg}`
  if (initialisedFor === key) return
  initialisedFor = key
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    fontFamily: 'Work Sans, system-ui, sans-serif',
    themeVariables: {
      background: 'transparent',
      primaryColor: bg,
      primaryTextColor: color,
      primaryBorderColor: color,
      secondaryColor: bg,
      secondaryBorderColor: color,
      secondaryTextColor: color,
      tertiaryColor: bg,
      tertiaryBorderColor: color,
      tertiaryTextColor: color,
      lineColor: color,
      textColor: color,
      mainBkg: bg,
      nodeBorder: color,
      clusterBkg: 'transparent',
      clusterBorder: color,
      edgeLabelBackground: bg,
      fontSize: '15px',
      sectionBkgColor: 'rgba(255,255,255,0.06)',
      altSectionBkgColor: 'transparent',
      sectionBkgColor2: 'rgba(255,255,255,0.1)',
      taskBkgColor: 'rgba(255,255,255,0.12)',
      taskBorderColor: color,
      taskTextColor: color,
      taskTextLightColor: color,
      taskTextOutsideColor: color,
      activeTaskBkgColor: 'rgba(255,255,255,0.2)',
      activeTaskBorderColor: color,
      doneTaskBkgColor: 'rgba(255,255,255,0.08)',
      doneTaskBorderColor: color,
      gridColor: 'rgba(255,255,255,0.25)',
      todayLineColor: color,
      actorBkg: bg,
      actorBorder: color,
      actorTextColor: color,
      signalColor: color,
      signalTextColor: color,
      noteBkgColor: 'rgba(255,255,255,0.08)',
      noteBorderColor: color,
      noteTextColor: color,
      labelTextColor: color,
      loopTextColor: color,
      cScale0: bg,
      cScale1: 'rgba(255,255,255,0.08)',
      cScale2: 'rgba(255,255,255,0.14)',
      cScaleLabel0: color,
      cScaleLabel1: color,
      cScaleLabel2: color,
    },
    flowchart: { curve: 'basis', padding: 12, htmlLabels: false, useMaxWidth: true },
    sequence: { useMaxWidth: true },
    gantt: { useMaxWidth: true },
    timeline: { useMaxWidth: true },
    mindmap: { useMaxWidth: true },
  })
}

export default function MermaidVisual({ source, alt }: { source: string; alt?: string }) {
  const id = useId().replace(/:/g, '')
  const { color, bg } = useBodyColors()
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    init(color, bg)
    mermaid
      .render(`m${id}`, source)
      .then((r) => {
        if (!cancelled) setSvg(r.svg)
      })
      .catch((e) => {
        if (!cancelled) setError(String(e?.message ?? e))
      })
    return () => {
      cancelled = true
    }
  }, [source, id, color, bg])

  if (error) {
    return (
      <pre className="visual__error" aria-label={alt}>
        diagram could not be drawn: {error}
      </pre>
    )
  }
  return <div className="visual__mermaid" role="img" aria-label={alt} dangerouslySetInnerHTML={{ __html: svg }} />
}
