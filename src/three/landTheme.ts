import type { BuildingKind, Land } from '@content/schema'

/**
 * Site-side art direction for lands. lands.json may only carry id/title/color;
 * this fills in a building kind, landmark and palette. Known ids get a bespoke
 * look; anything else cycles through generic kinds, so any number of lands works.
 */
const BESPOKE: Record<string, Partial<LandTheme>> = {
  'story-experience': { building: 'castle', landmark: 'The Storybook Castle', icon: '📖' },
  'human-factors': { building: 'pavilion', landmark: 'The Big Brain Pavilion', icon: '🧠' },
  masterplanning: { building: 'lighthouse', landmark: 'The Survey Lighthouse', icon: '🗺️' },
  'ride-systems': { building: 'station', landmark: 'The Coaster Depot', icon: '🎢' },
  'ride-engineering': { building: 'lab', landmark: 'The Loop Laboratory', icon: '⚙️' },
  'safety-standards': { building: 'control-room', landmark: 'The Checklist Control Room', icon: '🛡️' },
  'show-technology': { building: 'theatre', landmark: 'The Illusion Theatre', icon: '🎭' },
  'sensory-environment': { building: 'greenhouse', landmark: 'The Scented Greenhouse', icon: '🌿' },
  'design-process': { building: 'workshop', landmark: 'The Drafting Barn', icon: '✏️' },
  'operations-business': { building: 'tower', landmark: 'The Dispatch Clock Tower', icon: '⏱️' },
  history: { building: 'museum', landmark: 'The Carousel Museum', icon: '🎠' },
  'ai-future': { building: 'observatory', landmark: 'The Signal Observatory', icon: '🤖' },
  careers: { building: 'schoolhouse', landmark: 'The Little Schoolhouse', icon: '🎓' },
}

const GENERIC_KINDS: BuildingKind[] = ['pavilion', 'workshop', 'tower', 'station', 'museum', 'theatre', 'greenhouse', 'lab']
const ICON_WORDS: Record<string, string> = {
  'book-open': '📖',
  book: '📖',
  brain: '🧠',
  map: '🗺️',
  'roller-coaster': '🎢',
  cog: '⚙️',
  settings: '⚙️',
  shield: '🛡️',
  'shield-check': '🛡️',
  sparkles: '✨',
  theater: '🎭',
  leaf: '🌿',
  pencil: '✏️',
  'pen-tool': '✏️',
  clock: '⏱️',
  timer: '⏱️',
  landmark: '🏛️',
  history: '🎠',
  bot: '🤖',
  cpu: '🤖',
  'graduation-cap': '🎓',
  briefcase: '💼',
}

export interface LandTheme {
  building: BuildingKind
  landmark: string
  icon: string
  color: string
  accent: string
}

const isDefaultColor = (c: string) => c.toLowerCase() === '#e8d8b8'
const isDefaultAccent = (c: string) => c.toLowerCase() === '#c9a66b'

export function themeFor(land: Land, index: number): LandTheme {
  const b = BESPOKE[land.id] ?? {}
  const building = land.building !== 'pavilion' ? land.building : (b.building ?? GENERIC_KINDS[index % GENERIC_KINDS.length])
  const landmark = land.landmark || b.landmark || `The ${land.title.split(/[&,]/)[0].trim()} ${capitalize(building)}`
  const icon = isEmoji(land.icon) ? land.icon : (ICON_WORDS[land.icon] ?? b.icon ?? '📚')
  const color = isDefaultColor(land.color) ? pastel(index) : land.color
  const accent = isDefaultAccent(land.accent) ? darken(color) : land.accent
  return { building, landmark, icon, color, accent }
}

/** Pastel paper colour for lands with no colour. */
function pastel(i: number): string {
  const h = (i * 137.5) % 360
  return hslToHex(h, 0.45, 0.82)
}

export function darken(hex: string, amt = 0.28): string {
  const { h, s, l } = hexToHsl(hex)
  return hslToHex(h, Math.min(1, s + 0.1), Math.max(0, l - amt))
}

export function lighten(hex: string, amt = 0.18): string {
  const { h, s, l } = hexToHsl(hex)
  return hslToHex(h, Math.max(0, s - 0.12), Math.min(1, l + amt))
}

/** Real lands.json may use saturated web colours; soften to paper tones for the 3D scene. */
export function paperTone(hex: string): string {
  const { h, s, l } = hexToHsl(hex)
  // Pastel sample colours pass through; saturated web colours (e.g. #C2410C) get lifted to card stock.
  if (s <= 0.75 && l >= 0.6) return hex
  return hslToHex(h, Math.min(0.7, s), Math.max(0.66, Math.min(0.8, l + 0.25)))
}

function isEmoji(s: string): boolean {
  return /\p{Extended_Pictographic}/u.test(s)
}
function capitalize(s: string): string {
  return s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function hexToHsl(hex: string) {
  let h = hex.replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  let hue = 0
  let s = 0
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) * 60
    else if (max === g) hue = ((b - r) / d + 2) * 60
    else hue = ((r - g) / d + 4) * 60
  }
  return { h: hue, s, l }
}

function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2
  let [r, g, b] = [0, 0, 0]
  if (h < 60) [r, g, b] = [c, x, 0]
  else if (h < 120) [r, g, b] = [x, c, 0]
  else if (h < 180) [r, g, b] = [0, c, x]
  else if (h < 240) [r, g, b] = [0, x, c]
  else if (h < 300) [r, g, b] = [x, 0, c]
  else [r, g, b] = [c, 0, x]
  const to = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, '0')
  return `#${to(r)}${to(g)}${to(b)}`
}
