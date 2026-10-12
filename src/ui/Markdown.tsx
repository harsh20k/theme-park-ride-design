import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Link } from 'react-router'
import { conceptIdFromHref } from '@content/markdown'
import { conceptById } from '@/content/api'
import { conceptPath } from '@/routes'

interface Props {
  children: string
  mode?: 'park' | 'library'
  className?: string
}

/**
 * Markdown with inline concept links resolved to in-app routes.
 * `[motion sickness](../human-factors/motion-sickness.md)` → <Link to="/land/human-factors/motion-sickness">
 */
export default function Markdown({ children, mode = 'park', className }: Props) {
  const components: Components = {
    a: ({ href, children: kids, ...rest }) => {
      const h = href ?? ''
      const external = /^(?:[a-z]+:)?\/\//i.test(h)
      const id = external ? null : conceptIdFromHref(h)
      if (id && conceptById.has(id)) {
        const c = conceptById.get(id)!
        return (
          <Link to={conceptPath(id, mode)} className="concept-link" title={c.summary || c.title} data-land={c.land}>
            {kids}
          </Link>
        )
      }
      if (id && !external) {
        return (
          <span className="concept-link concept-link--missing" title={`No card for "${id}" yet`}>
            {kids}
          </span>
        )
      }
      return (
        <a href={h} target="_blank" rel="noopener noreferrer" {...rest}>
          {kids}
        </a>
      )
    },
    img: ({ src, alt }) => <img src={mediaUrl(String(src ?? ''))} alt={alt ?? ''} loading="lazy" />,
  }
  return (
    <div className={className}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  )
}

/** `../../media/x.svg` or `media/x.svg` → `/media/x.svg` (served by the content plugin). */
export function mediaUrl(src: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('data:')) return src
  const m = /(?:^|\/)(media\/.+)$/.exec(src)
  return m ? `/${m[1]}` : src
}
