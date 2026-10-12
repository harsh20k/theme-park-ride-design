import { useEffect, useId, useState } from 'react'
import mermaid from 'mermaid'

let initialised = false
function init() {
  if (initialised) return
  initialised = true
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    fontFamily: 'Nunito, Avenir Next, Segoe UI, system-ui, sans-serif',
    themeVariables: {
      background: 'transparent',
      primaryColor: '#fbf5e9',
      primaryTextColor: '#3b2f2a',
      primaryBorderColor: '#8a6d4a',
      secondaryColor: '#f7e3a1',
      secondaryBorderColor: '#b58a5a',
      tertiaryColor: '#cfe0f5',
      tertiaryBorderColor: '#5f7fa8',
      lineColor: '#6c5a50',
      textColor: '#3b2f2a',
      mainBkg: '#fbf5e9',
      nodeBorder: '#8a6d4a',
      clusterBkg: '#efe1c6',
      clusterBorder: '#b58a5a',
      edgeLabelBackground: '#fbf5e9',
      fontSize: '15px',
      // gantt / timeline
      sectionBkgColor: '#efe1c6',
      altSectionBkgColor: '#fbf5e9',
      sectionBkgColor2: '#e6d4b4',
      taskBkgColor: '#f3c6c6',
      taskBorderColor: '#c2566a',
      activeTaskBkgColor: '#f7e3a1',
      activeTaskBorderColor: '#d9962b',
      doneTaskBkgColor: '#cfe3c4',
      doneTaskBorderColor: '#5f9b55',
      gridColor: '#d9c7a6',
      todayLineColor: '#c2566a',
      // sequence
      actorBkg: '#fbf5e9',
      actorBorder: '#8a6d4a',
      signalColor: '#6c5a50',
      noteBkgColor: '#f7e3a1',
      noteBorderColor: '#d9962b',
    },
    flowchart: { curve: 'basis', padding: 12, htmlLabels: false, useMaxWidth: true },
    sequence: { useMaxWidth: true },
    gantt: { useMaxWidth: true },
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
