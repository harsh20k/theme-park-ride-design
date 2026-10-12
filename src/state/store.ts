import { create } from 'zustand'

export type Quality = 'high' | 'low'

interface Prefs {
  quality: Quality
  qualityAuto: boolean
  reducedMotion: boolean
  sound: boolean
  controlScheme: 'drive' | 'click'
}

interface AppState extends Prefs {
  /** Concept ids the visitor has opened. */
  visited: Set<string>
  markVisited: (id: string) => void
  /** Transient UI */
  mapOpen: boolean
  searchOpen: boolean
  setMapOpen: (v: boolean) => void
  setSearchOpen: (v: boolean) => void
  /** Building the vehicle is near (for the approach prompt). */
  nearBuilding: string | null
  setNearBuilding: (id: string | null) => void
  /** Travel target set by click-to-travel / fast travel. */
  travelTarget: [number, number, number] | null
  setTravelTarget: (t: [number, number, number] | null) => void
  /** Vehicle world position (for the map). */
  vehiclePos: [number, number, number]
  setVehiclePos: (p: [number, number, number]) => void
  setQuality: (q: Quality, auto?: boolean) => void
  setSound: (v: boolean) => void
  setControlScheme: (s: Prefs['controlScheme']) => void
  /** Pop-up book transition in progress. */
  transition: null | { kind: 'enter' | 'leave'; land: string }
  setTransition: (t: AppState['transition']) => void
}

const STORAGE_KEY = 'papercraft-park:v1'

function readStorage(): Partial<{ visited: string[]; quality: Quality; qualityAuto: boolean; sound: boolean; controlScheme: Prefs['controlScheme'] }> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function writeStorage(s: AppState) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ visited: [...s.visited], quality: s.quality, qualityAuto: s.qualityAuto, sound: s.sound, controlScheme: s.controlScheme }),
    )
  } catch {
    /* storage unavailable: progress is session-only */
  }
}

function detectReducedMotion(): boolean {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

/** Cheap heuristic: phones, low core counts or low device memory get the low tier. */
export function detectQuality(): Quality {
  try {
    const nav = navigator as Navigator & { deviceMemory?: number }
    const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    const cores = navigator.hardwareConcurrency ?? 4
    const mem = nav.deviceMemory ?? 8
    const dpr = window.devicePixelRatio ?? 1
    if (mobile || cores <= 4 || mem <= 4 || dpr > 2.5) return 'low'
    return 'high'
  } catch {
    return 'high'
  }
}

const stored = readStorage()

export const useApp = create<AppState>((set, get) => ({
  quality: stored.qualityAuto === false && stored.quality ? stored.quality : detectQuality(),
  qualityAuto: stored.qualityAuto ?? true,
  reducedMotion: detectReducedMotion(),
  sound: stored.sound ?? false,
  controlScheme: stored.controlScheme ?? 'drive',
  visited: new Set(stored.visited ?? []),
  markVisited: (id) => {
    if (get().visited.has(id)) return
    const visited = new Set(get().visited)
    visited.add(id)
    set({ visited })
    writeStorage(get())
  },
  mapOpen: false,
  searchOpen: false,
  setMapOpen: (v) => set({ mapOpen: v }),
  setSearchOpen: (v) => set({ searchOpen: v }),
  nearBuilding: null,
  setNearBuilding: (id) => {
    if (get().nearBuilding !== id) set({ nearBuilding: id })
  },
  travelTarget: null,
  setTravelTarget: (t) => set({ travelTarget: t }),
  vehiclePos: [0, 0, 0],
  setVehiclePos: (p) => set({ vehiclePos: p }),
  setQuality: (q, auto = false) => {
    set({ quality: q, qualityAuto: auto })
    writeStorage(get())
  },
  setSound: (v) => {
    set({ sound: v })
    writeStorage(get())
  },
  setControlScheme: (s) => {
    set({ controlScheme: s })
    writeStorage(get())
  },
  transition: null,
  setTransition: (t) => set({ transition: t }),
}))

if (typeof window !== 'undefined') {
  try {
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => useApp.setState({ reducedMotion: e.matches }))
  } catch {
    /* ignore */
  }
}
