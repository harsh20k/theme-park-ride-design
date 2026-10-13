import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { Link } from 'react-router'
import { conceptIdFromHref } from '@content/markdown'
import { conceptById } from '@/content/api'
import { useOpenBook } from './openBook'

/** Markdown with inline concept links resolved to /book/<id>. */
export default function Markdown({ children, className }: { children: string; className?: string }) {
  const openBook = useOpenBook()
  const components: Components = {
    a: ({ href, children: kids }) => {
      const h = href ?? ''
      const external = /^(?:[a-z]+:)?\/\//i.test(h)
      const id = external ? null : conceptIdFromHref(h)
      if (id && conceptById.has(id)) {
        return (
          <Link to={`/book/${id}`} className="Link" onClick={(e) => openBook(id, e)}>
            {kids}
          </Link>
        )
      }
      if (id && !external) return <span className="Link Link--missing">{kids}</span>
      return (
        <a href={h} className="Link" target="_blank" rel="noopener noreferrer">
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

export function mediaUrl(src: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith('data:')) return src
  const m = /(?:^|\/)(media\/.+)$/.exec(src)
  return m ? `/${m[1]}` : src
}
