import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import Fuse from 'fuse.js'
import { conceptIndex, content, landById, lands } from '@/content/api'
import { useShelf } from './store'
import { useOpenBook } from './openBook'

/**
 * Universal search: ⌘K / Ctrl+K / "/" from anywhere. Indexes every book
 * (title, summary, tags), every topic and the glossary; Enter jumps straight
 * to the book or topic. Books open through `useOpenBook`, so from inside a
 * book the page fades rather than jumping.
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

const optionId = (i: number) => `search-option-${i}`

export default function Search() {
  const open = useShelf((s) => s.searchOpen)
  const setOpen = useShelf((s) => s.setSearchOpen)
  const navigate = useNavigate()
  const openBook = useOpenBook()
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const input = useRef<HTMLInputElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
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

  // Global shortcuts; while open, Tab stays on the input (it is the only focusable control).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest?.('input, textarea, [contenteditable]')
      const isOpen = useShelf.getState().searchOpen
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(!isOpen)
      } else if (e.key === '/' && !typing && !isOpen) {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape' && isOpen) {
        e.stopImmediatePropagation()
        setOpen(false)
      } else if (e.key === 'Tab' && isOpen) {
        e.preventDefault()
        input.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      returnFocus.current = document.activeElement as HTMLElement | null
      setQ('')
      setSel(0)
      requestAnimationFrame(() => input.current?.focus())
      document.body.classList.add('is-searching')
    } else {
      document.body.classList.remove('is-searching')
      const el = returnFocus.current
      returnFocus.current = null
      if (el && document.contains(el)) el.focus()
    }
  }, [open])

  useEffect(() => {
    setSel(0)
  }, [q])

  // Keep the keyboard selection visible.
  useEffect(() => {
    if (!open) return
    document.getElementById(optionId(sel))?.scrollIntoView({ block: 'nearest' })
  }, [sel, open, results])

  if (!open) return null

  const go = (h: Hit) => {
    setOpen(false)
    if (h.kind === 'book' || h.kind === 'term') openBook(h.to.replace('/book/', ''))
    else navigate(h.to)
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
            } else if (e.key === 'Home' && results.length) {
              e.preventDefault()
              setSel(0)
            } else if (e.key === 'End' && results.length) {
              e.preventDefault()
              setSel(results.length - 1)
            } else if (e.key === 'Enter' && results[sel]) go(results[sel])
          }}
          role="combobox"
          aria-label="Search"
          aria-expanded="true"
          aria-controls="search-results"
          aria-autocomplete="list"
          aria-activedescendant={results[sel] ? optionId(sel) : undefined}
          autoFocus
          autoComplete="off"
          spellCheck={false}
        />
        <ol className="Search__results" id="search-results" role="listbox" aria-label="Results">
          {results.map((h, i) => {
            const land = landById.get(h.land)
            return (
              <li
                key={`${h.kind}-${h.id}`}
                id={optionId(i)}
                className={`Search__hit ${i === sel ? 'is-selected' : ''}`}
                role="option"
                aria-selected={i === sel}
                onMouseEnter={() => setSel(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => go(h)}
              >
                <span className="Search__dot" style={{ background: land?.color ?? 'currentColor' }} />
                <span className="Search__hitText">
                  <span className="Search__hitTitle">{h.title}</span>
                  <span className="Search__hitSub">{h.sub}</span>
                </span>
                <span className="Search__hitKind">{h.kind === 'book' ? (land?.title ?? 'book') : h.kind === 'topic' ? 'topic' : 'glossary'}</span>
              </li>
            )
          })}
          {q.trim() && results.length === 0 && (
            <li className="Search__empty" role="presentation">
              Nothing on the shelves for “{q}”.
            </li>
          )}
        </ol>
        <p className="Search__hint" id="search-hint">
          <kbd>↑</kbd> <kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close
        </p>
      </div>
    </div>
  )
}
