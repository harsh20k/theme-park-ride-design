import { create } from 'zustand'

/**
 * What the 3D canvas should be showing:
 *  - library: every topic is a shelf; its section books stand on the plank
 *  - topic:   one topic's books lie on their backs, one per row (the old shelf)
 *  - book:    the reading flow (standing book tracking its sticky anchor)
 */
export type ShelfMode = 'library' | 'topic' | 'book'

interface ShelfState {
  mode: ShelfMode
  /** Topic (land) in view for `topic` and `book` modes. */
  land: string | null
  hovered: string | null
  /** Shelf (land) hovered on the library page. */
  hoveredShelf: string | null
  /** Book whose page is open (URL), or null on the shelf. */
  active: string | null
  /** First book of the continuous reading flow (the one clicked on the shelf). */
  entry: string | null
  /** Row elements by book id (topic page), so the 3D books follow the DOM layout. */
  rows: Map<string, HTMLElement>
  /** Plank elements by land id (library page); section books stand on them. */
  shelves: Map<string, HTMLElement>
  /** Sticky anchor elements by book id (reading flow); the standing book tracks them. */
  anchors: Map<string, HTMLElement>
  /** Extra yaw from dragging the standing book (radians); springs back to 0. */
  dragYaw: number
  dragging: boolean
  initialized: boolean
  searchOpen: boolean
  /** Last pointer position in viewport px (mutated in place, no re-render). */
  pointer: { x: number; y: number; active: boolean }
  setMode: (mode: ShelfMode, land: string | null) => void
  setHovered: (id: string | null) => void
  setHoveredShelf: (id: string | null) => void
  setActive: (id: string | null) => void
  setEntry: (id: string | null) => void
  registerRow: (id: string, el: HTMLElement | null) => void
  registerShelf: (id: string, el: HTMLElement | null) => void
  registerAnchor: (id: string, el: HTMLElement | null) => void
  setDrag: (yaw: number, dragging: boolean) => void
  setInitialized: (v: boolean) => void
  setSearchOpen: (v: boolean) => void
}

export const useShelf = create<ShelfState>((set, get) => ({
  mode: 'library',
  land: null,
  hovered: null,
  hoveredShelf: null,
  active: null,
  entry: null,
  rows: new Map(),
  shelves: new Map(),
  anchors: new Map(),
  dragYaw: 0,
  dragging: false,
  initialized: false,
  searchOpen: false,
  pointer: { x: -1e4, y: -1e4, active: false },
  setMode: (mode, land) => {
    if (get().mode !== mode || get().land !== land) set({ mode, land })
  },
  setHovered: (id) => {
    if (get().hovered !== id) set({ hovered: id })
  },
  setHoveredShelf: (id) => {
    if (get().hoveredShelf !== id) set({ hoveredShelf: id })
  },
  setActive: (id) => {
    if (get().active !== id) set({ active: id })
  },
  setEntry: (id) => {
    if (get().entry !== id) set({ entry: id })
  },
  registerRow: (id, el) => {
    const rows = get().rows
    if (el) rows.set(id, el)
    else rows.delete(id)
  },
  registerShelf: (id, el) => {
    const shelves = get().shelves
    if (el) shelves.set(id, el)
    else shelves.delete(id)
  },
  registerAnchor: (id, el) => {
    const anchors = get().anchors
    if (el) anchors.set(id, el)
    else anchors.delete(id)
  },
  setDrag: (dragYaw, dragging) => set({ dragYaw, dragging }),
  setInitialized: (v) => set({ initialized: v }),
  setSearchOpen: (v) => {
    if (get().searchOpen !== v) set({ searchOpen: v })
  },
}))

if (typeof window !== 'undefined') {
  const p = useShelf.getState().pointer
  window.addEventListener(
    'pointermove',
    (e) => {
      p.x = e.clientX
      p.y = e.clientY
      p.active = e.pointerType !== 'touch'
    },
    { passive: true },
  )
  window.addEventListener('pointerleave', () => (p.active = false))
  document.addEventListener('mouseleave', () => (p.active = false))
}
