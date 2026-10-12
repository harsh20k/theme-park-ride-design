import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

/** LaTeX block rendered with KaTeX. Multiple lines are rendered as separate display formulas. */
export default function FormulaVisual({ source, alt }: { source: string; alt?: string }) {
  const html = useMemo(() => {
    const lines = source
      .split(/\n\s*\n|\\\\\s*\n/)
      .map((l) => l.trim())
      .filter(Boolean)
    return lines
      .map((line) => {
        try {
          return katex.renderToString(line, { displayMode: true, throwOnError: false, strict: 'ignore' })
        } catch {
          return `<pre>${line.replace(/</g, '&lt;')}</pre>`
        }
      })
      .join('')
  }, [source])
  return <div className="visual__formula" role="img" aria-label={alt ?? source} dangerouslySetInnerHTML={{ __html: html }} />
}
