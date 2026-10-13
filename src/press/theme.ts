/**
 * Per-book theme and procedural cover/spine art.
 *
 * Every book gets its own cloth colour (from a list of bookbinder's cloths), a
 * foil colour and one of twelve cover designs, all picked from the book's seed —
 * so a shelf reads like a real, mixed press list rather than one colour per topic.
 *
 * Covers are drawn on 2D canvases and used as three.js textures — no image
 * downloads. Each cover also yields a foil mask (metalness / low roughness) so
 * foil motifs catch the light. Everything is drawn in logical units (a cover is
 * COVER_W wide) on a scaled context, so the same code makes the full-size art
 * and the small art used on the library shelves.
 */

export interface BookTheme {
  /** Page background and text colour while the book is open. */
  bg: string
  color: string
  /** Cloth colour. */
  base: string
  /** [cloth, dark cloth, warm accent, cool accent, foil, pale] */
  palette: string[]
  ink: string
  foil: string
  /** A second cloth, for quarter bindings, bands and chips. */
  second: string
  /** Pale cloth: type is printed in dark ink instead of stamped in foil. */
  light: boolean
  /** Cover design, see STYLE. */
  style: number
  /** Spine decoration: 0 none, 1 rules at head and tail, 2 title label, 3 raised bands. */
  bands: number
}

const PRESS_BG = '#201819'

/** Bookbinder's cloths. The last four are pale. */
export const CLOTHS = [
  '#7b1e28', // oxblood
  '#a8243a', // crimson
  '#c2532e', // terracotta
  '#c96a1f', // burnt orange
  '#c2901c', // mustard
  '#8f6a1a', // bronze
  '#667a22', // olive
  '#1f5d3a', // forest
  '#0f4a3c', // bottle green
  '#12845f', // emerald
  '#0f766e', // teal
  '#0e5a73', // petrol
  '#1f6fb5', // azure
  '#1d3fae', // cobalt
  '#1c2a5e', // navy
  '#3b2fa8', // indigo
  '#6a2bb0', // violet
  '#6b1d5a', // plum
  '#b51b5d', // magenta
  '#c44d73', // rose
  '#3d4a5c', // slate
  '#26262c', // charcoal
  '#5a3320', // chocolate
  '#8a3b2a', // rust
  '#e6dcc3', // cream
  '#b9c4a6', // sage
  '#d9b8a8', // blush
  '#a9c3d6', // powder blue
]
const DARK_CLOTHS = 24

export const STYLE = {
  marble: 0,
  rosette: 1,
  diagonals: 2,
  frame: 3,
  pinstripe: 4,
  quarter: 5,
  contours: 6,
  leaves: 7,
  scallops: 8,
  terrazzo: 9,
  bands: 10,
  stars: 11,
} as const

// Weighted: the quieter designs come up more often than the loud ones.
const STYLES_DARK = [0, 0, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11]
const STYLES_LIGHT = [1, 2, 3, 3, 4, 5, 6, 8, 11]
const FOILS = ['#e6c77a', '#e6c77a', '#e6c77a', '#efd9a0', '#d3d8de', '#dfa27a']
const FOILS_LIGHT = ['#a9822c', '#a9822c', '#a8623a', '#7d6a3a']
/** Designs busy enough that the title needs a darker footing. */
const BUSY = new Set<number>([STYLE.marble, STYLE.leaves, STYLE.terrazzo, STYLE.bands])

/**
 * Theme for one book. `cloth` is an index into CLOTHS, or a hex colour for the
 * few books whose photographed cover fixes the colour.
 */
export function themeForBook(seed: number, cloth: number | string): BookTheme {
  const base = typeof cloth === 'string' ? cloth : CLOTHS[cloth % CLOTHS.length]
  const { h, s, l } = hexToHsl(base)
  const light = l > 0.62
  const a = seed >>> 3
  const b = seed >>> 9
  const c = seed >>> 15
  const foils = light ? FOILS_LIGHT : FOILS
  const foil = foils[a % foils.length]
  const styles = light ? STYLES_LIGHT : STYLES_DARK
  // A fixed colour means a photographed cover: keep the spine in that same plain cloth.
  const style = typeof cloth === 'string' ? STYLE.diagonals : styles[b % styles.length]
  const idx = typeof cloth === 'string' ? seed % DARK_CLOTHS : cloth
  let second = CLOTHS[(idx + 5 + (c % 11)) % DARK_CLOTHS]
  if (second === base) second = CLOTHS[(idx + 9) % DARK_CLOTHS]
  const palette = [
    base,
    light ? hslToHex(h, Math.min(0.5, s + 0.05), l - 0.16) : hslToHex(h, Math.min(0.75, s), Math.max(0.09, l * 0.6)),
    hslToHex((h + 28) % 360, Math.min(0.7, s + 0.15), light ? 0.5 : 0.6),
    hslToHex((h + 340) % 360, Math.min(0.6, Math.max(0.3, s)), light ? 0.42 : 0.5),
    foil,
    light ? hslToHex(h, 0.3, 0.3) : hslToHex(h, 0.2, 0.9),
  ]
  return {
    bg: hslToHex(h, Math.min(0.35, s * 0.6), 0.14),
    color: hslToHex(h, Math.min(0.5, s * 0.7), 0.82),
    base,
    palette,
    ink: light ? '#241a1b' : '#fdf6e6',
    foil,
    second,
    light,
    style,
    bands: (seed >>> 20) % 4,
  }
}

// ---------------------------------------------------------------------------
// Cover art
// ---------------------------------------------------------------------------

export const COVER_W = 896
export const SPINE_W = 1792
const FONT = 'Newsreader, Georgia, serif'

export interface CoverArt {
  color: HTMLCanvasElement
  /** White where foil is; black elsewhere. */
  foil: HTMLCanvasElement
  /** Grain-only canvas (grey) for a roughness map. */
  rough: HTMLCanvasElement
  /** The same art before any text was added (used for the back board). */
  plain: CoverArt
}

export interface ArtOptions {
  /** Pixels per logical unit (1 = full size). */
  k?: number
  /** Colour only: skip the roughness map and the text-free copy (library shelves). */
  lite?: boolean
}

function rng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    return ((s >>> 0) % 100000) / 100000
  }
}

export function seedFrom(id: string): number {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) h = Math.imul(h ^ id.charCodeAt(i), 16777619)
  return h >>> 0
}

function makeCanvas(w: number, h: number) {
  const c = document.createElement('canvas')
  c.width = Math.max(1, Math.round(w))
  c.height = Math.max(1, Math.round(h))
  return c
}

type Ctx = CanvasRenderingContext2D

/** A canvas whose context draws in logical units, k pixels each. */
function scaled(w: number, h: number, k: number): [HTMLCanvasElement, Ctx] {
  const c = makeCanvas(w * k, h * k)
  const ctx = c.getContext('2d')!
  ctx.setTransform(c.width / w, 0, 0, c.height / h, 0, 0)
  return [c, ctx]
}

/** Run `fn` in raw pixel space. */
function pixels(ctx: Ctx, fn: () => void) {
  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  fn()
  ctx.restore()
}

/** Stroke/fill the same shapes on the colour canvas (in `color`) and on the foil mask (in white). */
function foiled(ctx: Ctx, fctx: Ctx, color: string, fn: (c: Ctx) => void) {
  ctx.save()
  fctx.save()
  ctx.strokeStyle = ctx.fillStyle = color
  fctx.strokeStyle = fctx.fillStyle = '#fff'
  for (const c of [ctx, fctx]) {
    c.lineCap = 'round'
    c.lineJoin = 'round'
    fn(c)
  }
  ctx.restore()
  fctx.restore()
}

/**
 * Draw the board (or spine) for a theme: cloth, pattern, foil.
 * `part` 'spine' keeps to the plain base of the design so the lettering stays legible.
 */
export function drawArt(w: number, h: number, theme: BookTheme, seed: number, part: 'cover' | 'spine', opts: ArtOptions = {}): CoverArt {
  const k = opts.k ?? 1
  const [color, ctx] = scaled(w, h, k)
  const [foil, fctx] = scaled(w, h, k)
  fctx.fillStyle = '#000'
  fctx.fillRect(0, 0, w, h)
  const r = rng(seed)
  const p = theme.palette
  const style = theme.style
  const marbled = style === STYLE.marble
  if (part === 'spine') {
    if (marbled) drawCombed(ctx, fctx, w, h, p, r)
    else cloth(ctx, w, h, style === STYLE.quarter ? theme.second : p[0])
  } else {
    switch (style) {
      case STYLE.marble:
        drawCombed(ctx, fctx, w, h, p, r)
        break
      case STYLE.rosette:
        cloth(ctx, w, h, p[0])
        drawRosette(ctx, fctx, w, h, theme, r)
        break
      case STYLE.diagonals:
        cloth(ctx, w, h, p[0])
        drawDiagonals(ctx, fctx, w, h, theme, r)
        break
      case STYLE.frame:
        cloth(ctx, w, h, p[0])
        drawFrame(ctx, fctx, w, h, theme, r)
        break
      case STYLE.pinstripe:
        cloth(ctx, w, h, p[0])
        drawPinstripes(ctx, fctx, w, h, theme, r)
        break
      case STYLE.quarter:
        drawQuarter(ctx, fctx, w, h, theme, r)
        break
      case STYLE.contours:
        cloth(ctx, w, h, p[0])
        drawContours(ctx, fctx, w, h, theme, r)
        break
      case STYLE.leaves:
        cloth(ctx, w, h, p[0])
        drawLeaves(ctx, fctx, w, h, theme, r)
        break
      case STYLE.scallops:
        cloth(ctx, w, h, p[0])
        drawScallops(ctx, fctx, w, h, theme, r)
        break
      case STYLE.terrazzo:
        cloth(ctx, w, h, p[0])
        drawTerrazzo(ctx, fctx, w, h, theme, r)
        break
      case STYLE.bands:
        drawBands(ctx, fctx, w, h, theme, r)
        break
      default:
        cloth(ctx, w, h, p[0])
        drawStars(ctx, fctx, w, h, theme, r)
    }
  }
  grain(ctx, w, h, seed, marbled ? 10 : 16)
  const rough = opts.lite ? makeCanvas(1, 1) : roughness(foil, marbled, seed)
  const art: CoverArt = { color, foil, rough, plain: null as unknown as CoverArt }
  art.plain = art
  return art
}

/** Roughness: cloth is rougher than marbled paper; grain modulates it; foil is smooth. */
function roughness(foil: HTMLCanvasElement, marbled: boolean, seed: number): HTMLCanvasElement {
  const w = foil.width
  const h = foil.height
  const rough = makeCanvas(w, h)
  const rctx = rough.getContext('2d')!
  rctx.fillStyle = marbled ? '#8c8c8c' : '#b4b4b4'
  rctx.fillRect(0, 0, w, h)
  grain(rctx, w, h, seed + 3, 40)
  // foil mask inverted → dark where foil is
  const inv = makeCanvas(w, h)
  const ictx = inv.getContext('2d')!
  ictx.fillStyle = '#fff'
  ictx.fillRect(0, 0, w, h)
  ictx.globalCompositeOperation = 'difference'
  ictx.drawImage(foil, 0, 0)
  ictx.globalCompositeOperation = 'source-over'
  ictx.fillStyle = 'rgba(255,255,255,0.35)'
  ictx.fillRect(0, 0, w, h)
  rctx.globalCompositeOperation = 'multiply'
  rctx.drawImage(inv, 0, 0)
  return rough
}

function cloneArt(src: CoverArt): CoverArt {
  const copy = (c: HTMLCanvasElement) => {
    const n = makeCanvas(c.width, c.height)
    n.getContext('2d')!.drawImage(c, 0, 0)
    return n
  }
  const plain: CoverArt = { color: copy(src.color), foil: copy(src.foil), rough: copy(src.rough), plain: null as unknown as CoverArt }
  plain.plain = plain
  return plain
}

/** Woven book cloth in one colour. */
function cloth(ctx: Ctx, w: number, h: number, color: string, x0 = 0, x1 = w) {
  ctx.fillStyle = color
  ctx.fillRect(x0, 0, x1 - x0, h)
  ctx.globalAlpha = 0.08
  ctx.fillStyle = '#000'
  for (let y = 0; y < h; y += 4) ctx.fillRect(x0, y, x1 - x0, 1)
  ctx.fillStyle = '#fff'
  for (let x = x0; x < x1; x += 4) ctx.fillRect(x, 0, 1, h)
  ctx.globalAlpha = 1
}

function drawCombed(ctx: Ctx, fctx: Ctx, w: number, h: number, palette: string[], r: () => number) {
  const tones = [palette[1], palette[0], palette[2], palette[1], palette[0], palette[5], palette[1], palette[4]]
  ctx.fillStyle = palette[1]
  ctx.fillRect(0, 0, w, h)
  const bands = 34 + Math.floor(r() * 14)
  const bandH = (h * 1.3) / bands
  const phases = Array.from({ length: 4 }, () => r() * Math.PI * 2)
  const freqs = [1.5 + r() * 1.5, 3 + r() * 3, 6 + r() * 5, 11 + r() * 7]
  const amps = [h * 0.09, h * 0.04, h * 0.018, h * 0.008]
  const skew = (r() - 0.5) * 0.6
  const band = (c: Ctx, b: number) => {
    const y0 = -h * 0.15 + b * bandH
    c.beginPath()
    c.moveTo(-w * 0.1, y0)
    const steps = 80
    for (let s = 0; s <= steps; s++) {
      const x = -w * 0.1 + (s / steps) * w * 1.2
      const u = x / w
      let y = y0 + u * skew * h * 0.3
      for (let k = 0; k < 4; k++) y += amps[k] * Math.sin(freqs[k] * u * Math.PI * 2 + phases[k] + b * 0.17)
      c.lineTo(x, y)
    }
    for (let s = steps; s >= 0; s--) {
      const x = -w * 0.1 + (s / steps) * w * 1.2
      const u = x / w
      let y = y0 + bandH * 1.15 + u * skew * h * 0.3
      for (let k = 0; k < 4; k++) y += amps[k] * Math.sin(freqs[k] * u * Math.PI * 2 + phases[k] + (b + 1) * 0.17)
      c.lineTo(x, y)
    }
    c.closePath()
  }
  for (let b = 0; b < bands; b++) {
    band(ctx, b)
    ctx.fillStyle = tones[b % tones.length]
    ctx.globalAlpha = 0.92
    ctx.fill()
    if (b % tones.length === 7) {
      // the foil thread
      band(fctx, b)
      fctx.fillStyle = '#fff'
      fctx.fill()
    }
  }
  ctx.globalAlpha = 1
}

/** A single stamped rosette. */
function drawRosette(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const cx = w * (0.3 + r() * 0.4)
  const cy = h * (0.3 + r() * 0.25)
  const R = Math.min(w, h) * (0.22 + r() * 0.12)
  const petals = 7 + Math.floor(r() * 6)
  foiled(ctx, fctx, t.foil, (c) => {
    c.lineWidth = Math.max(2, w * 0.004)
    for (let i = 0; i < 3; i++) {
      c.beginPath()
      const steps = 240
      for (let s = 0; s <= steps; s++) {
        const a = (s / steps) * Math.PI * 2
        const rr = R * (0.55 + 0.45 * Math.abs(Math.cos((petals * a) / 2))) * (1 - i * 0.22)
        const x = cx + Math.cos(a) * rr
        const y = cy + Math.sin(a) * rr
        if (s === 0) c.moveTo(x, y)
        else c.lineTo(x, y)
      }
      c.closePath()
      c.stroke()
    }
    c.beginPath()
    c.arc(cx, cy, R * 0.12, 0, Math.PI * 2)
    c.fill()
  })
}

/** Fine diagonal foil lines. */
function drawDiagonals(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const n = 5 + Math.floor(r() * 5)
  const gap = w / (n + 1)
  const tilt = (0.3 + r() * 0.5) * (r() > 0.5 ? 1 : -1)
  const xs = Array.from({ length: n }, (_, i) => (i + 1) * gap + (r() - 0.5) * gap * 0.4)
  foiled(ctx, fctx, t.foil, (c) => {
    c.lineWidth = Math.max(2, w * 0.003)
    for (const x of xs) {
      c.beginPath()
      c.moveTo(x - tilt * h * 0.5, -h * 0.05)
      c.lineTo(x + tilt * h * 0.5, h * 1.05)
      c.stroke()
    }
  })
}

/** A gilt border: a heavy rule, a fine rule inside it, and corner ornaments. */
function drawFrame(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const m = w * 0.05
  const m2 = m + w * 0.02
  const corner = Math.floor(r() * 3)
  const lozenge = r() > 0.45
  foiled(ctx, fctx, t.foil, (c) => {
    c.lineJoin = 'miter'
    c.lineWidth = w * 0.007
    c.strokeRect(m, m, w - m * 2, h - m * 2)
    c.lineWidth = w * 0.0025
    c.strokeRect(m2, m2, w - m2 * 2, h - m2 * 2)
    const q = w * 0.055
    for (const [sx, sy] of [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ]) {
      const x = sx > 0 ? m2 : w - m2
      const y = sy > 0 ? m2 : h - m2
      c.beginPath()
      if (corner === 0) {
        // quarter-round
        c.arc(x, y, q, sy > 0 ? (sx > 0 ? 0 : Math.PI / 2) : sx > 0 ? -Math.PI / 2 : Math.PI, sy > 0 ? (sx > 0 ? Math.PI / 2 : Math.PI) : sx > 0 ? 0 : -Math.PI / 2)
        c.stroke()
      } else if (corner === 1) {
        // small square knot
        c.strokeRect(Math.min(x, x + sx * q * 0.8), Math.min(y, y + sy * q * 0.8), q * 0.8, q * 0.8)
      } else {
        // diamond
        const cx = x + sx * q * 0.55
        const cy = y + sy * q * 0.55
        c.moveTo(cx, cy - q * 0.3)
        c.lineTo(cx + q * 0.3, cy)
        c.lineTo(cx, cy + q * 0.3)
        c.lineTo(cx - q * 0.3, cy)
        c.closePath()
        c.fill()
      }
    }
    if (lozenge) {
      const cx = w / 2
      const cy = h * 0.36
      const a = w * 0.13
      const b = w * 0.18
      c.lineWidth = w * 0.004
      for (const s of [1, 0.72]) {
        c.beginPath()
        c.moveTo(cx, cy - b * s)
        c.lineTo(cx + a * s, cy)
        c.lineTo(cx, cy + b * s)
        c.lineTo(cx - a * s, cy)
        c.closePath()
        c.stroke()
      }
      c.beginPath()
      c.arc(cx, cy, w * 0.012, 0, Math.PI * 2)
      c.fill()
    }
  })
}

/** Vertical ticking: tone-on-tone stripes with the odd foil one. */
function drawPinstripes(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const n = 9 + Math.floor(r() * 12)
  const gap = w / n
  const triple = r() > 0.5
  const every = 3 + Math.floor(r() * 3)
  ctx.fillStyle = t.palette[1]
  for (let i = 0; i < n; i++) {
    const x = (i + 0.5) * gap
    if (i % every === every - 1) continue
    ctx.globalAlpha = 0.55
    ctx.fillRect(x - gap * 0.06, 0, gap * 0.12, h)
    if (triple) {
      ctx.globalAlpha = 0.35
      ctx.fillRect(x - gap * 0.2, 0, gap * 0.03, h)
      ctx.fillRect(x + gap * 0.17, 0, gap * 0.03, h)
    }
  }
  ctx.globalAlpha = 1
  foiled(ctx, fctx, t.foil, (c) => {
    for (let i = every - 1; i < n; i += every) c.fillRect((i + 0.5) * gap - w * 0.002, 0, w * 0.004, h)
  })
}

/** Quarter binding: a strip of second cloth at the spine, a foil rule, and a small repeat on the board. */
function drawQuarter(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const sw = quarterWidth(w, t)
  cloth(ctx, w, h, t.palette[0])
  // small repeat on the paper side
  const kind = Math.floor(r() * 4)
  const step = w * (0.05 + r() * 0.03)
  ctx.fillStyle = ctx.strokeStyle = t.palette[1]
  ctx.globalAlpha = 0.5
  ctx.lineWidth = w * 0.003
  if (kind < 3) {
    let row = 0
    for (let y = step / 2; y < h; y += step * 0.86, row++) {
      for (let x = sw + step / 2 + (row % 2 ? step / 2 : 0); x < w; x += step) {
        ctx.beginPath()
        if (kind === 0) ctx.arc(x, y, step * 0.09, 0, Math.PI * 2)
        else if (kind === 1) {
          ctx.moveTo(x, y - step * 0.16)
          ctx.lineTo(x + step * 0.12, y)
          ctx.lineTo(x, y + step * 0.16)
          ctx.lineTo(x - step * 0.12, y)
          ctx.closePath()
        } else {
          ctx.rect(x - step * 0.14, y - step * 0.015, step * 0.28, step * 0.03)
          ctx.rect(x - step * 0.015, y - step * 0.14, step * 0.03, step * 0.28)
        }
        ctx.fill()
      }
    }
  }
  ctx.globalAlpha = 1
  cloth(ctx, w, h, t.second, 0, sw)
  foiled(ctx, fctx, t.foil, (c) => {
    c.fillRect(sw - w * 0.004, 0, w * 0.006, h)
    c.fillRect(sw + w * 0.012, 0, w * 0.002, h)
  })
}

function quarterWidth(w: number, t: BookTheme) {
  return w * (0.2 + ((t.bands + t.style) % 3) * 0.035)
}

/** Nested wobbly rings, like a contour map or the end of a log. */
function drawContours(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const cx = w * (0.15 + r() * 0.7)
  const cy = h * (0.1 + r() * 0.55)
  const gap = w * (0.028 + r() * 0.018)
  const ph = Array.from({ length: 4 }, () => r() * Math.PI * 2)
  const am = [0.16 + r() * 0.1, 0.09 + r() * 0.06, 0.05 + r() * 0.04, 0.03]
  const far = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy)) * 1.25
  const rings = Math.ceil(far / gap)
  const foilEvery = 5 + Math.floor(r() * 3)
  const ring = (c: Ctx, i: number) => {
    const R = (i + 0.6) * gap
    c.beginPath()
    const steps = 96
    for (let s = 0; s <= steps; s++) {
      const a = (s / steps) * Math.PI * 2
      let k = 1
      for (let j = 0; j < 4; j++) k += am[j] * Math.sin((j + 2) * a + ph[j] + i * 0.045 * (j + 1))
      const x = cx + Math.cos(a) * R * k
      const y = cy + Math.sin(a) * R * k * 1.12
      if (s === 0) c.moveTo(x, y)
      else c.lineTo(x, y)
    }
    c.closePath()
  }
  ctx.strokeStyle = t.palette[1]
  ctx.lineWidth = w * 0.0035
  ctx.globalAlpha = 0.6
  for (let i = 0; i < rings; i++) {
    if (i % foilEvery === foilEvery - 1) continue
    ring(ctx, i)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
  foiled(ctx, fctx, t.foil, (c) => {
    c.lineWidth = w * 0.003
    for (let i = foilEvery - 1; i < rings; i += foilEvery) {
      ring(c, i)
      c.stroke()
    }
  })
}

/** A scatter of leaves with foil berries. */
function drawLeaves(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const p = t.palette
  const tones = [p[1], p[1], p[2], p[3], p[5]]
  const step = w * (0.1 + r() * 0.035)
  const berries: [number, number, number][] = []
  let row = 0
  for (let y = -step * 0.2; y < h + step; y += step * 0.82, row++) {
    for (let x = (row % 2 ? step / 2 : 0) - step * 0.2; x < w + step; x += step) {
      const px = x + (r() - 0.5) * step * 0.45
      const py = y + (r() - 0.5) * step * 0.45
      const len = step * (0.34 + r() * 0.22)
      const wid = len * (0.32 + r() * 0.16)
      const rot = r() * Math.PI * 2
      ctx.save()
      ctx.translate(px, py)
      ctx.rotate(rot)
      ctx.fillStyle = tones[Math.floor(r() * tones.length)]
      ctx.globalAlpha = 0.82
      ctx.beginPath()
      ctx.moveTo(-len, 0)
      ctx.quadraticCurveTo(0, -wid * 1.5, len, 0)
      ctx.quadraticCurveTo(0, wid * 1.5, -len, 0)
      ctx.fill()
      // midrib
      ctx.globalAlpha = 0.35
      ctx.strokeStyle = p[0]
      ctx.lineWidth = w * 0.002
      ctx.beginPath()
      ctx.moveTo(-len * 0.8, 0)
      ctx.lineTo(len * 0.8, 0)
      ctx.stroke()
      ctx.restore()
      if (r() > 0.62) berries.push([px + Math.cos(rot + 1.6) * len * 0.9, py + Math.sin(rot + 1.6) * len * 0.9, step * (0.035 + r() * 0.03)])
    }
  }
  ctx.globalAlpha = 1
  foiled(ctx, fctx, t.foil, (c) => {
    for (const [x, y, rad] of berries) {
      c.beginPath()
      c.arc(x, y, rad, 0, Math.PI * 2)
      c.fill()
    }
  })
}

/** Overlapping fish-scale arcs. */
function drawScallops(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const n = 6 + Math.floor(r() * 5)
  const R = w / n / 2
  const rowH = R * (0.82 + r() * 0.2)
  const foilRow = 3 + Math.floor(r() * 3)
  const arcs = (c: Ctx, row: number, scale: number) => {
    const y = row * rowH
    for (let i = -1; i <= n; i++) {
      const x = (i + (row % 2 ? 1 : 0.5)) * R * 2
      c.beginPath()
      c.arc(x, y, R * scale, 0, Math.PI)
      c.stroke()
    }
  }
  const rows = Math.ceil(h / rowH) + 1
  ctx.strokeStyle = t.palette[1]
  ctx.lineWidth = w * 0.0045
  ctx.globalAlpha = 0.6
  for (let row = -1; row < rows; row++) {
    arcs(ctx, row, 1)
    if (row % foilRow) arcs(ctx, row, 0.62)
  }
  ctx.globalAlpha = 1
  foiled(ctx, fctx, t.foil, (c) => {
    c.lineWidth = w * 0.003
    for (let row = 0; row < rows; row += foilRow) arcs(c, row, 0.62)
  })
}

/** Terrazzo: irregular chips of colour, a few of them foil. */
function drawTerrazzo(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const p = t.palette
  const tones = [p[5], p[2], p[3], p[1], t.second, p[5]]
  const count = 90 + Math.floor(r() * 60)
  const chip = (c: Ctx, x: number, y: number, size: number, sides: number, rot: number, jit: number[]) => {
    c.beginPath()
    for (let i = 0; i < sides; i++) {
      const a = rot + (i / sides) * Math.PI * 2
      const rr = size * jit[i]
      const px = x + Math.cos(a) * rr
      const py = y + Math.sin(a) * rr * 0.8
      if (i === 0) c.moveTo(px, py)
      else c.lineTo(px, py)
    }
    c.closePath()
    c.fill()
  }
  const foilChips: Parameters<typeof chip>[] = []
  for (let i = 0; i < count; i++) {
    const x = r() * w
    const y = r() * h
    const size = w * (0.012 + r() * r() * 0.045)
    const sides = 4 + Math.floor(r() * 3)
    const rot = r() * Math.PI * 2
    const jit = Array.from({ length: sides }, () => 0.6 + r() * 0.6)
    if (r() > 0.9) foilChips.push([ctx, x, y, size * 0.8, sides, rot, jit])
    else {
      ctx.fillStyle = tones[Math.floor(r() * tones.length)]
      ctx.globalAlpha = 0.9
      chip(ctx, x, y, size, sides, rot, jit)
    }
  }
  ctx.globalAlpha = 1
  foiled(ctx, fctx, t.foil, (c) => {
    for (const [, x, y, size, sides, rot, jit] of foilChips) chip(c, x, y, size, sides, rot, jit)
  })
}

/** Broad vertical bands of cloth with foil rules between some of them. */
function drawBands(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const p = t.palette
  const tones = [p[0], t.second, p[1], p[2], p[0], p[3]]
  const n = 4 + Math.floor(r() * 4)
  const weights = Array.from({ length: n }, () => 0.4 + r())
  const total = weights.reduce((a, b) => a + b, 0)
  const start = Math.floor(r() * tones.length)
  const edges: number[] = []
  let x = 0
  weights.forEach((wt, i) => {
    const bw = (wt / total) * w
    cloth(ctx, w, h, tones[(start + i) % tones.length], x, x + bw + 1)
    x += bw
    if (i < n - 1 && r() > 0.35) edges.push(x)
  })
  foiled(ctx, fctx, t.foil, (c) => {
    for (const e of edges) c.fillRect(e - w * 0.0025, 0, w * 0.005, h)
  })
}

/** A night sky of foil dots and a few four-point stars. */
function drawStars(ctx: Ctx, fctx: Ctx, w: number, h: number, t: BookTheme, r: () => number) {
  const dots = Array.from({ length: 70 + Math.floor(r() * 50) }, () => [r() * w, r() * h * 0.78, w * (0.0015 + r() * r() * 0.006)])
  const stars = Array.from({ length: 5 + Math.floor(r() * 5) }, () => [w * (0.1 + r() * 0.8), h * (0.06 + r() * 0.6), w * (0.018 + r() * 0.03)])
  foiled(ctx, fctx, t.foil, (c) => {
    for (const [x, y, rad] of dots) {
      c.beginPath()
      c.arc(x, y, rad, 0, Math.PI * 2)
      c.fill()
    }
    for (const [x, y, s] of stars) {
      c.beginPath()
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2
        const rr = i % 2 ? s * 0.22 : s
        if (i === 0) c.moveTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr)
        else c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr)
      }
      c.closePath()
      c.fill()
    }
  })
}

// One shared noise tile, laid over the art as a pattern: far cheaper than touching every pixel per book.
let noise: HTMLCanvasElement | null = null
function noiseTile(): HTMLCanvasElement {
  if (noise) return noise
  const n = 256
  noise = makeCanvas(n, n)
  const ctx = noise.getContext('2d')!
  const img = ctx.createImageData(n, n)
  const g = rng(977)
  for (let i = 0; i < img.data.length; i += 4) {
    const v = g()
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v > 0.5 ? 255 : 0
    img.data[i + 3] = Math.abs(v - 0.5) * 2 * 255
  }
  ctx.putImageData(img, 0, 0)
  return noise
}

function grain(ctx: Ctx, _w: number, _h: number, seed: number, strength: number) {
  pixels(ctx, () => {
    const c = ctx.canvas
    ctx.globalAlpha = Math.min(1, strength / 110)
    ctx.translate(-(seed % 256), -((seed >>> 8) % 256))
    ctx.fillStyle = ctx.createPattern(noiseTile(), 'repeat')!
    ctx.fillRect(0, 0, c.width + 256, c.height + 256)
  })
}

/** Pick the largest font size (≤ basePx, ≥ minPx) at which `text` fits in maxW; ellipsise if it still does not. */
function fitText(ctx: CanvasRenderingContext2D, text: string, maxW: number, basePx: number, minPx: number, font: (px: number) => string): { text: string; font: string; px: number } {
  let px = basePx
  ctx.font = font(px)
  while (ctx.measureText(text).width > maxW && px > minPx) {
    px -= 1
    ctx.font = font(px)
  }
  let t = text
  while (ctx.measureText(t).width > maxW && t.length > 4) t = t.replace(/[^…]{1}…?$/, '…')
  return { text: t, font: ctx.font, px }
}

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let cur = ''
  for (const w of words) {
    const t = cur ? `${cur} ${w}` : w
    if (ctx.measureText(t).width > maxW && cur) {
      lines.push(cur)
      cur = w
    } else cur = t
  }
  if (cur) lines.push(cur)
  return lines
}

// ---------------------------------------------------------------------------
// Press mark (the fal-generated emblem) — preloaded once, drawn tinted on canvases
// ---------------------------------------------------------------------------
let logoImg: HTMLImageElement | null = null
let logoPromise: Promise<void> | null = null

/** Resolve once the emblem is available (or failed); art generation waits for this. */
export function preloadLogo(url: string): Promise<void> {
  if (!logoPromise) {
    logoPromise = new Promise((res) => {
      const img = new Image()
      img.onload = () => {
        logoImg = img
        res()
      }
      img.onerror = () => res()
      img.src = url
    })
  }
  return logoPromise
}

/** Draw the emblem centred at (x, y) with the given height, tinted to `color`. Falls back to a drawn mark. */
function pressMark(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
  if (logoImg && logoImg.naturalWidth) {
    const h = size
    const w = (h * logoImg.naturalWidth) / logoImg.naturalHeight
    const tmp = makeCanvas(Math.ceil(w), Math.ceil(h))
    const t = tmp.getContext('2d')!
    t.drawImage(logoImg, 0, 0, w, h)
    t.globalCompositeOperation = 'source-in'
    t.fillStyle = color
    t.fillRect(0, 0, tmp.width, tmp.height)
    ctx.drawImage(tmp, x - w / 2, y - h / 2)
    return
  }
  ctx.save()
  ctx.strokeStyle = color
  ctx.lineWidth = size * 0.07
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.arc(x, y, size * 0.45, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x - size * 0.2, y + size * 0.18)
  ctx.lineTo(x, y - size * 0.22)
  ctx.lineTo(x + size * 0.2, y + size * 0.18)
  ctx.stroke()
  ctx.restore()
}

/** Front cover at the true W:L aspect. On dark cloth the title is stamped in foil; on pale cloth it is printed in ink. */
export function drawCover(title: string, author: string, theme: BookTheme, seed: number, aspect: number, opts: ArtOptions = {}): CoverArt {
  const w = COVER_W
  const h = Math.round(COVER_W / aspect)
  const art = drawArt(w, h, theme, seed, 'cover', opts)
  if (!opts.lite) art.plain = cloneArt(art)
  const k = art.color.width / w
  const ctx = art.color.getContext('2d')!
  const fctx = art.foil.getContext('2d')!
  ctx.setTransform(k, 0, 0, art.color.height / h, 0, 0)
  fctx.setTransform(k, 0, 0, art.foil.height / h, 0, 0)
  if (!theme.light) {
    const busy = BUSY.has(theme.style)
    const grad = ctx.createLinearGradient(0, h * (busy ? 0.42 : 0.55), 0, h)
    grad.addColorStop(0, 'rgba(0,0,0,0)')
    grad.addColorStop(1, busy ? 'rgba(0,0,0,0.68)' : 'rgba(0,0,0,0.4)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)
  }
  const left = theme.style === STYLE.quarter ? quarterWidth(w, theme) + 44 : 96
  // The author column is measured first; the title takes what is left.
  ctx.font = `italic 500 42px ${FONT}`
  const alines = wrap(ctx, author, w * 0.3)
  const aw = Math.max(...alines.map((l) => ctx.measureText(l).width))
  ctx.font = `700 76px ${FONT}`
  const titleMax = Math.min(w * 0.56, w - 96 - aw - 40 - left)
  let px = 76
  while (px > 54 && title.split(/\s+/).some((word) => ctx.measureText(word).width > titleMax)) {
    px -= 2
    ctx.font = `700 ${px}px ${FONT}`
  }
  const lines = wrap(ctx, title, titleMax)
  const text = (c: Ctx, color: string) => {
    c.fillStyle = color
    c.textBaseline = 'alphabetic'
    c.textAlign = 'left'
    c.font = `700 ${px}px ${FONT}`
    const lh = px * 1.1
    let y = h - 120 - (lines.length - 1) * lh
    for (const line of lines) {
      c.fillText(line, left, y)
      y += lh
    }
    c.font = `italic 500 42px ${FONT}`
    c.textAlign = 'right'
    let ay = h - 120 - (alines.length - 1) * 48
    for (const line of alines) {
      c.fillText(line, w - 96, ay)
      ay += 48
    }
    c.textAlign = 'left'
  }
  text(ctx, theme.ink)
  if (!theme.light) text(fctx, '#fff')
  const markColor = theme.light ? theme.foil : lighten(theme.foil)
  // Inside the gilt border where there is one.
  const inset = theme.style === STYLE.frame ? 46 : 0
  pressMark(ctx, w - 110 - inset, 118 + inset, 92, markColor)
  pressMark(fctx, w - 110 - inset, 118 + inset, 92, '#fff')
  return art
}

/** Spine at the true T:L aspect, drawn horizontally (reads top→bottom when standing). */
export function drawSpine(title: string, author: string, theme: BookTheme, seed: number, lengthOverThickness: number, opts: ArtOptions = {}): CoverArt {
  const w = SPINE_W
  const h = Math.round(SPINE_W / lengthOverThickness)
  const art = drawArt(w, h, theme, seed, 'spine', opts)
  const ctx = art.color.getContext('2d')!
  const fctx = art.foil.getContext('2d')!
  ctx.setTransform(art.color.width / w, 0, 0, art.color.height / h, 0, 0)
  fctx.setTransform(art.foil.width / w, 0, 0, art.foil.height / h, 0, 0)
  ctx.fillStyle = theme.light ? 'rgba(0,0,0,0.06)' : 'rgba(0,0,0,0.18)'
  ctx.fillRect(0, 0, w, h)

  // Binder's decoration, kept clear of the lettering.
  const rule = Math.max(3, h * 0.014)
  const bands = theme.bands
  if (bands === 2) {
    ctx.fillStyle = theme.light ? 'rgba(0,0,0,0.16)' : 'rgba(0,0,0,0.32)'
    ctx.fillRect(w * 0.335, h * 0.1, w * 0.45, h * 0.8)
  }
  foiled(ctx, fctx, theme.foil, (c) => {
    if (bands === 1 || bands === 3) {
      for (const x of [h * 0.12, h * 0.19, w - h * 0.12, w - h * 0.19]) c.fillRect(x - rule / 2, 0, rule, h)
    }
    if (bands === 3) {
      for (const x of [w * 0.315, w * 0.315 + h * 0.07, w * 0.805, w * 0.805 + h * 0.07]) c.fillRect(x - rule / 2, 0, rule, h)
    }
    if (bands === 2) {
      c.lineWidth = rule * 0.8
      c.lineJoin = 'miter'
      c.strokeRect(w * 0.335, h * 0.1, w * 0.45, h * 0.8)
    }
  })

  const a = fitText(ctx, author, w * 0.24, Math.round(h * 0.2), Math.round(h * 0.13), (px) => `500 ${px}px ${FONT}`)
  // Title: one line at full size if it fits; otherwise two stacked lines; only then shrink.
  const titleMax = w * 0.4
  const base = Math.round(h * 0.23)
  ctx.font = `500 ${base}px ${FONT}`
  let lines: string[]
  let tpx = base
  if (ctx.measureText(title).width <= titleMax) lines = [title]
  else {
    const two = Math.round(h * 0.17)
    ctx.font = `500 ${two}px ${FONT}`
    const wrapped = wrap(ctx, title, titleMax)
    if (wrapped.length <= 2) {
      lines = wrapped
      tpx = two
    } else {
      const t = fitText(ctx, title, titleMax, base, Math.round(h * 0.13), (px) => `500 ${px}px ${FONT}`)
      lines = [t.text]
      tpx = t.px
    }
  }
  const text = (c: Ctx, color: string) => {
    c.fillStyle = color
    c.textBaseline = 'middle'
    c.textAlign = 'left'
    c.font = a.font
    c.fillText(a.text, h * 0.35, h / 2 + 2)
    c.textAlign = 'center'
    c.font = `500 ${tpx}px ${FONT}`
    const lh = tpx * 1.02
    const y0 = h / 2 + 2 - ((lines.length - 1) * lh) / 2
    lines.forEach((line, i) => c.fillText(line, w * 0.56, y0 + i * lh))
  }
  text(ctx, theme.ink)
  if (!theme.light) text(fctx, '#fff')
  pressMark(ctx, w - h * 0.5, h / 2, h * 0.3, theme.ink)
  if (!theme.light) pressMark(fctx, w - h * 0.5, h / 2, h * 0.3, '#fff')
  return art
}

function lighten(hex: string): string {
  const { h, s, l } = hexToHsl(hex)
  return hslToHex(h, s, Math.min(0.82, l + 0.08))
}

export function drawPages(): HTMLCanvasElement {
  const c = makeCanvas(1024, 128)
  const ctx = c.getContext('2d')!
  ctx.fillStyle = '#e6dfcd'
  ctx.fillRect(0, 0, 1024, 128)
  const g = rng(5)
  for (let i = 0; i < 128; i += 1) {
    ctx.fillStyle = g() > 0.5 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.25)'
    ctx.fillRect(0, i, 1024, 1)
  }
  return c
}

/** Rotate horizontal spine art into the tall canvas the −x face / spine cylinder expects. */
export function tallCanvas(src: HTMLCanvasElement): HTMLCanvasElement {
  const tall = makeCanvas(src.height, src.width)
  const ctx = tall.getContext('2d')!
  ctx.translate(tall.width, 0)
  ctx.rotate(Math.PI / 2)
  ctx.drawImage(src, 0, 0)
  return tall
}

// ---------------------------------------------------------------------------
// colour utils
// ---------------------------------------------------------------------------

export function hexToHsl(hex: string) {
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

export function hslToHex(h: number, s: number, l: number): string {
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

export { PRESS_BG }
