import { create } from 'zustand'

interface ShelfState {
  hovered: string | null
  active: string | null
  /** Row elements by book id, so the 3D books can follow the DOM layout. */
  rows: Map<string, HTMLElement>
  /** Pointer position over the detail page's left column, −1..1, for a little tilt. */
  tilt: [number, number]
  initialized: boolean
  setHovered: (id: string | null) => void
  setActive: (id: string | null) => void
  registerRow: (id: string, el: HTMLElement | null) => void
  setTilt: (t: [number, number]) => void
  setInitialized: (v: boolean) => void
}

export const useShelf = create<ShelfState>((set, get) => ({
  hovered: null,
  active: null,
  rows: new Map(),
  tilt: [0, 0],
  initialized: false,
  setHovered: (id) => {
    if (get().hovered !== id) set({ hovered: id })
  },
  setActive: (id) => {
    if (get().active !== id) set({ active: id })
  },
  registerRow: (id, el) => {
    const rows = get().rows
    if (el) rows.set(id, el)
    else rows.delete(id)
  },
  setTilt: (t) => set({ tilt: t }),
  setInitialized: (v) => set({ initialized: v }),
}))
