import { create } from 'zustand'

interface ShelfState {
  hovered: string | null
  /** Book whose page is open (URL), or null on the shelf. */
  active: string | null
  /** First book of the continuous reading flow (the one clicked on the shelf). */
  entry: string | null
  /** Row elements by book id (shelf), so the 3D books follow the DOM layout. */
  rows: Map<string, HTMLElement>
  /** Sticky anchor elements by book id (reading flow); the standing book tracks them. */
  anchors: Map<string, HTMLElement>
  /** Extra yaw from dragging the standing book (radians); springs back to 0. */
  dragYaw: number
  dragging: boolean
  initialized: boolean
  setHovered: (id: string | null) => void
  setActive: (id: string | null) => void
  setEntry: (id: string | null) => void
  registerRow: (id: string, el: HTMLElement | null) => void
  registerAnchor: (id: string, el: HTMLElement | null) => void
  setDrag: (yaw: number, dragging: boolean) => void
  setInitialized: (v: boolean) => void
}

export const useShelf = create<ShelfState>((set, get) => ({
  hovered: null,
  active: null,
  entry: null,
  rows: new Map(),
  anchors: new Map(),
  dragYaw: 0,
  dragging: false,
  initialized: false,
  setHovered: (id) => {
    if (get().hovered !== id) set({ hovered: id })
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
  registerAnchor: (id, el) => {
    const anchors = get().anchors
    if (el) anchors.set(id, el)
    else anchors.delete(id)
  },
  setDrag: (dragYaw, dragging) => set({ dragYaw, dragging }),
  setInitialized: (v) => set({ initialized: v }),
}))
