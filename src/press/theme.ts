/**
 * Per-book theme (derived from the land colour) and procedural cover/spine art.
 * Covers are drawn on 2D canvases and used as three.js textures — no image
 * downloads. Each cover also yields a foil mask (metalness / low roughness) so
 * gold motifs catch the light.
 */
import type { Land } from '@content/schema'

export interface BookTheme {
  bg: string
  color: string
  base: string
  palette: string[]
  ink: string
}

const PRESS_BG = '#201819'

export function themeForLand(land: Land, index: number): BookTheme {
  const base = normalise(land.color, index)
  const { h, s } = hexToHsl(base)
  const bg = hslToHex(h, Math.min(0.35, s * 0.6), 0.14)
  const color = hslToHex(h, Math.min(0.5, s * 0.7), 0.82)
  const palette = [
    hslToHex(h, Math.min(0.75, s + 0.1), 0.42),
    hslToHex(h, Math.min(0.7, s), 0.26),
    hslToHex((h + 28) % 360, Math.min(0.7, s + 0.15), 0.6),
    hslToHex((h + 340) % 360, Math.min(0.6, s), 0.5),
    '#e6c77a',
    hslToHex(h, 0.2, 0.9),
  ]
  const lum = hexToHsl(palette[0]).l
  return { bg, color, base, palette, ink: lum > 0.55 ? '#201819' : '#fdf6e6' }
}

function normalise(hex: string, index: number): string {
  if (!/^#(?:[0-9a-f]{3}){1,2}$/i.test(hex)) return hslToHex((index * 137.5) % 360, 0.5, 0.42)
  const { h, s, l } = hexToHsl(hex)
  return hslToHex(h, Math.max(0.35, Math.min(0.75, s)), Math.max(0.3, Math.min(0.5, l)))
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
  c.width = w
  c.height = h
  return c
}

/**
 * Three looks, picked by seed so a shelf reads like a real press list:
 *  0 — combed marble (flowing bands, tonal palette with a gold thread)
 *  1 — book cloth with a single foil rosette
 *  2 — book cloth with diagonal foil lines
 */
export function drawArt(w: number, h: number, palette: string[], seed: number, motif: boolean): CoverArt {
  const color = makeCanvas(w, h)
  const foil = makeCanvas(w, h)
  const rough = makeCanvas(w, h)
  const ctx = color.getContext('2d')!
  const fctx = foil.getContext('2d')!
  fctx.fillStyle = '#000'
  fctx.fillRect(0, 0, w, h)
  const style = seed % 3
  const r = rng(seed)
  if (style === 0) drawCombed(ctx, fctx, w, h, palette, r)
  else drawCloth(ctx, fctx, w, h, palette, r, motif ? style : 0)
  grain(ctx, w, h, seed, style === 0 ? 10 : 16)
  // Roughness: cloth is rougher than marble; grain modulates it; foil is smooth.
  const rctx = rough.getContext('2d')!
  rctx.fillStyle = style === 0 ? '#8c8c8c' : '#b4b4b4'
  rctx.fillRect(0, 0, w, h)
  grain(rctx, w, h, seed + 3, 40)
  rctx.globalCompositeOperation = 'multiply'
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
  rctx.drawImage(inv, 0, 0)
  rctx.globalCompositeOperation = 'source-over'
  const art: CoverArt = { color, foil, rough, plain: null as unknown as CoverArt }
  art.plain = art
  return art
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

function drawCombed(ctx: CanvasRenderingContext2D, fctx: CanvasRenderingContext2D, w: number, h: number, palette: string[], r: () => number) {
  const tones = [palette[1], palette[0], palette[2], palette[1], palette[0], palette[5], palette[1], palette[4]]
  ctx.fillStyle = palette[1]
  ctx.fillRect(0, 0, w, h)
  const bands = 34 + Math.floor(r() * 14)
  const bandH = (h * 1.3) / bands
  const phases = Array.from({ length: 4 }, () => r() * Math.PI * 2)
  const freqs = [1.5 + r() * 1.5, 3 + r() * 3, 6 + r() * 5, 11 + r() * 7]
  const amps = [h * 0.09, h * 0.04, h * 0.018, h * 0.008]
  const skew = (r() - 0.5) * 0.6
  const band = (c: CanvasRenderingContext2D, b: number) => {
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
      // the gold thread is foil
      band(fctx, b)
      fctx.fillStyle = '#fff'
      fctx.fill()
    }
  }
  ctx.globalAlpha = 1
}

function drawCloth(ctx: CanvasRenderingContext2D, fctx: CanvasRenderingContext2D, w: number, h: number, palette: string[], r: () => number, style: number) {
  ctx.fillStyle = palette[0]
  ctx.fillRect(0, 0, w, h)
  ctx.globalAlpha = 0.08
  ctx.fillStyle = '#000'
  for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1)
  ctx.fillStyle = '#fff'
  for (let x = 0; x < w; x += 4) ctx.fillRect(x, 0, 1, h)
  ctx.globalAlpha = 1
  if (style === 0) return
  const both = (fn: (c: CanvasRenderingContext2D) => void) => {
    ctx.strokeStyle = palette[4]
    ctx.fillStyle = palette[4]
    fctx.strokeStyle = '#fff'
    fctx.fillStyle = '#fff'
    for (const c of [ctx, fctx]) {
      c.lineCap = 'round'
      fn(c)
    }
  }
  if (style === 1) {
    const cx = w * (0.3 + r() * 0.4)
    const cy = h * (0.3 + r() * 0.25)
    const R = Math.min(w, h) * (0.22 + r() * 0.12)
    const petals = 7 + Math.floor(r() * 6)
    both((c) => {
      c.lineWidth = Math.max(2, w * 0.004)
      for (let i = 0; i < 3; i++) {
        c.beginPath()
        const steps = 240
        for (let s = 0; s <= steps; s++) {
          const t = (s / steps) * Math.PI * 2
          const rr = R * (0.55 + 0.45 * Math.abs(Math.cos((petals * t) / 2))) * (1 - i * 0.22)
          const x = cx + Math.cos(t) * rr
          const y = cy + Math.sin(t) * rr
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
  } else {
    const n = 5 + Math.floor(r() * 5)
    const gap = w / (n + 1)
    const tilt = (0.3 + r() * 0.5) * (r() > 0.5 ? 1 : -1)
    const xs = Array.from({ length: n }, (_, i) => (i + 1) * gap + (r() - 0.5) * gap * 0.4)
    both((c) => {
      c.lineWidth = Math.max(2, w * 0.003)
      for (const x of xs) {
        c.beginPath()
        c.moveTo(x - tilt * h * 0.5, -h * 0.05)
        c.lineTo(x + tilt * h * 0.5, h * 1.05)
        c.stroke()
      }
    })
  }
}

function grain(ctx: CanvasRenderingContext2D, w: number, h: number, seed: number, strength: number) {
  const img = ctx.getImageData(0, 0, w, h)
  const data = img.data
  const g = rng(seed + 99)
  for (let i = 0; i < data.length; i += 4) {
    const n = (g() - 0.5) * strength
    data[i] += n
    data[i + 1] += n
    data[i + 2] += n
  }
  ctx.putImageData(img, 0, 0)
}

/** Pick the largest font size (≤ basePx, ≥ minPx) at which `text` fits in maxW; ellipsise if it still does not. */
function fitText(ctx: CanvasRenderingContext2D, text: string, maxW: number, basePx: number, minPx: number, font: (px: number) => string): { text: string; font: string } {
  let px = basePx
  ctx.font = font(px)
  while (ctx.measureText(text).width > maxW && px > minPx) {
    px -= 1
    ctx.font = font(px)
  }
  let t = text
  while (ctx.measureText(t).width > maxW && t.length > 4) t = t.replace(/[^…]{1}…?$/, '…')
  return { text: t, font: ctx.font }
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

/** Front cover at the true W:L aspect. Title text is foil too. */
export function drawCover(title: string, author: string, theme: BookTheme, seed: number, aspect: number): CoverArt {
  const w = COVER_W
  const h = Math.round(COVER_W / aspect)
  const art = drawArt(w, h, theme.palette, seed, true)
  art.plain = cloneArt(art)
  const ctx = art.color.getContext('2d')!
  const fctx = art.foil.getContext('2d')!
  const grad = ctx.createLinearGradient(0, h * 0.55, 0, h)
  grad.addColorStop(0, 'rgba(0,0,0,0)')
  grad.addColorStop(1, 'rgba(0,0,0,0.4)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, w, h)

  const text = (c: CanvasRenderingContext2D, color: string) => {
    c.fillStyle = color
    c.textBaseline = 'alphabetic'
    c.textAlign = 'left'
    c.font = `700 76px ${FONT}`
    const lines = wrap(c, title, w * 0.5)
    const lh = 84
    let y = h - 120 - (lines.length - 1) * lh
    for (const line of lines) {
      c.fillText(line, 96, y)
      y += lh
    }
    c.font = `italic 500 42px ${FONT}`
    c.textAlign = 'right'
    const alines = wrap(c, author, w * 0.34)
    let ay = h - 120 - (alines.length - 1) * 48
    for (const line of alines) {
      c.fillText(line, w - 96, ay)
      ay += 48
    }
    c.textAlign = 'left'
  }
  text(ctx, '#fdf6e6')
  text(fctx, '#fff')
  pressMark(ctx, w - 110, 118, 92, '#f1dc9a')
  pressMark(fctx, w - 110, 118, 92, '#fff')
  return art
}

/** Spine at the true T:L aspect, drawn horizontally (reads top→bottom when standing). */
export function drawSpine(title: string, author: string, theme: BookTheme, seed: number, lengthOverThickness: number): CoverArt {
  const w = SPINE_W
  const h = Math.round(SPINE_W / lengthOverThickness)
  const art = drawArt(w, h, theme.palette, seed, false)
  const ctx = art.color.getContext('2d')!
  const fctx = art.foil.getContext('2d')!
  ctx.fillStyle = 'rgba(0,0,0,0.18)'
  ctx.fillRect(0, 0, w, h)
  const a = fitText(ctx, author, w * 0.25, Math.round(h * 0.2), Math.round(h * 0.13), (px) => `500 ${px}px ${FONT}`)
  // Title: one line at full size if it fits; otherwise two stacked lines; only then shrink.
  const titleMax = w * 0.4
  const base = Math.round(h * 0.23)
  ctx.font = `500 ${base}px ${FONT}`
  let lines: string[]
  let tfont = ctx.font
  if (ctx.measureText(title).width <= titleMax) lines = [title]
  else {
    const two = Math.round(h * 0.17)
    ctx.font = `500 ${two}px ${FONT}`
    const wrapped = wrap(ctx, title, titleMax)
    if (wrapped.length <= 2) {
      lines = wrapped
      tfont = ctx.font
    } else {
      const t = fitText(ctx, title, titleMax, base, Math.round(h * 0.13), (px) => `500 ${px}px ${FONT}`)
      lines = [t.text]
      tfont = t.font
    }
  }
  const text = (c: CanvasRenderingContext2D, color: string) => {
    c.fillStyle = color
    c.textBaseline = 'middle'
    c.textAlign = 'left'
    c.font = a.font
    c.fillText(a.text, h * 0.35, h / 2 + 2)
    c.textAlign = 'center'
    c.font = tfont
    const lh = parseInt(tfont, 10) * 1.02
    const y0 = h / 2 + 2 - ((lines.length - 1) * lh) / 2
    lines.forEach((line, i) => c.fillText(line, w * 0.56, y0 + i * lh))
  }
  text(ctx, '#fdf6e6')
  text(fctx, '#fff')
  pressMark(ctx, w - h * 0.5, h / 2, h * 0.3, '#fdf6e6')
  pressMark(fctx, w - h * 0.5, h / 2, h * 0.3, '#fff')
  return art
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
