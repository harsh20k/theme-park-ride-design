import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'

let initialised = false
function init() {
  if (initialised) return
  initialised = true
  // Dark, ink-on-cloth theme to sit on the press pages. Colours follow the page's --color.
  const color = getComputedStyle(document.body).getPropertyValue('--color').trim() || '#f1e6d2'
  const bg = getComputedStyle(document.body).getPropertyValue('--backgroundColor').trim() || '#201819'
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
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    init()
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
  }, [source, id])

  if (error) {
    return (
      <pre className="visual__error" aria-label={alt}>
        diagram could not be drawn: {error}
      </pre>
    )
  }
  return <div className="visual__mermaid" role="img" aria-label={alt} dangerouslySetInnerHTML={{ __html: svg }} />
}
