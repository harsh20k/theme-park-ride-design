import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import Fuse from 'fuse.js'
import { conceptIndex, content, landById, lands } from '@/content/api'
import { useShelf } from './store'

/**
 * Universal search: ⌘K / Ctrl+K / "/" from anywhere. Indexes every book
 * (title, summary, tags), every topic and the glossary; Enter jumps straight
 * to the book or topic.
 */
interface Hit {
  kind: 'book' | 'topic' | 'term'
  id: string
  title: string
  sub: string
  to: string
  land: string
}

function buildIndex(): Hit[] {
  const hits: Hit[] = []
  for (const l of lands) hits.push({ kind: 'topic', id: l.id, title: l.title, sub: l.tagline, to: `/topic/${l.id}`, land: l.id })
  for (const c of conceptIndex) {
    hits.push({
      kind: 'book',
      id: c.id,
      title: c.title,
      sub: c.summary || (landById.get(c.land)?.title ?? c.land),
      to: `/book/${c.id}`,
      land: c.land,
    })
  }
  for (const g of content.glossary) {
    if (!g.concept) continue
    hits.push({ kind: 'term', id: `term-${g.term}`, title: g.term, sub: g.definition, to: `/book/${g.concept}`, land: g.land ?? '' })
  }
  return hits
}

export default function Search() {
  const open = useShelf((s) => s.searchOpen)
  const setOpen = useShelf((s) => s.setSearchOpen)
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const input = useRef<HTMLInputElement>(null)
  const all = useMemo(buildIndex, [])
  const fuse = useMemo(
    () =>
      new Fuse(all, {
        keys: [
          { name: 'title', weight: 0.6 },
          { name: 'sub', weight: 0.3 },
          { name: 'land', weight: 0.1 },
        ],
        threshold: 0.38,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [all],
  )
  const results = useMemo(() => {
    const t = q.trim()
    if (!t) return all.filter((h) => h.kind === 'topic')
    return fuse.search(t, { limit: 12 }).map((r) => r.item)
  }, [q, fuse, all])

  // Global shortcuts.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest?.('input, textarea, [contenteditable]')
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(!useShelf.getState().searchOpen)
      } else if (e.key === '/' && !typing && !useShelf.getState().searchOpen) {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape' && useShelf.getState().searchOpen) {
        e.stopImmediatePropagation()
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      setQ('')
      setSel(0)
      requestAnimationFrame(() => input.current?.focus())
      document.body.classList.add('is-searching')
    } else document.body.classList.remove('is-searching')
  }, [open])

  useEffect(() => setSel(0), [q])

  if (!open) return null

  const go = (h: Hit) => {
    setOpen(false)
    if (h.kind === 'book' || h.kind === 'term') {
      useShelf.getState().setEntry(h.to.replace('/book/', ''))
      window.scrollTo({ top: 0 })
    }
    navigate(h.to)
  }

  return (
    <div className="Search" role="dialog" aria-modal="true" aria-label="Search the library" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="Search__box">
        <input
          ref={input}
          className="Search__input"
          placeholder="Search books, topics and terms…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setSel((s) => Math.min(results.length - 1, s + 1))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              setSel((s) => Math.max(0, s - 1))
            } else if (e.key === 'Enter' && results[sel]) go(results[sel])
          }}
          aria-label="Search"
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
        <ol className="Search__results" role="listbox">
          {results.map((h, i) => {
            const land = landById.get(h.land)
            return (
              <li key={`${h.kind}-${h.id}`}>
                <button
                  className={`Search__hit ${i === sel ? 'is-selected' : ''}`}
                  role="option"
                  aria-selected={i === sel}
                  onMouseEnter={() => setSel(i)}
                  onClick={() => go(h)}
                >
                  <span className="Search__dot" style={{ background: land?.color ?? 'currentColor' }} />
                  <span className="Search__hitText">
                    <span className="Search__hitTitle">{h.title}</span>
                    <span className="Search__hitSub">{h.sub}</span>
                  </span>
                  <span className="Search__hitKind">{h.kind === 'book' ? (land?.title ?? 'book') : h.kind === 'topic' ? 'topic' : 'glossary'}</span>
                </button>
              </li>
            )
          })}
          {q.trim() && results.length === 0 && <li className="Search__empty">Nothing on the shelves for “{q}”.</li>}
        </ol>
        <p className="Search__hint">
          <kbd>↑</kbd> <kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close
        </p>
      </div>
    </div>
  )
}
