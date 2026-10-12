/**
 * Per-book theme (derived from the land colour) and procedural cover/spine art.
 * Covers are drawn on 2D canvases and used as three.js textures — no image downloads.
 */
import type { Land } from '@content/schema'

export interface BookTheme {
  /** Detail-page background (dark, tinted). */
  bg: string
  /** Detail-page text colour (light, tinted). */
  color: string
  /** Base cover colour. */
  base: string
  /** Marbling palette. */
  palette: string[]
  /** Text colour on the cover/spine. */
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
    '#d9b46a',
    hslToHex(h, 0.2, 0.9),
  ]
  const lum = hexToHsl(palette[0]).l
  return { bg, color, base, palette, ink: lum > 0.55 ? '#201819' : '#fdf6e6' }
}

/** Sample colours are pastel; real lands.json uses saturated web colours. Pull both toward rich book-cloth tones. */
function normalise(hex: string, index: number): string {
  if (!/^#(?:[0-9a-f]{3}){1,2}$/i.test(hex)) return hslToHex((index * 137.5) % 360, 0.5, 0.42)
  const { h, s, l } = hexToHsl(hex)
  return hslToHex(h, Math.max(0.35, Math.min(0.75, s)), Math.max(0.3, Math.min(0.5, l)))
}

// ---------------------------------------------------------------------------
// Cover art
// ---------------------------------------------------------------------------

export const COVER_W = 1024
export const COVER_H = 1536
export const SPINE_W = 2048
export const SPINE_H = 256

const FONT = 'Newsreader, Georgia, serif'

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

/**
 * Cover art. Three looks, picked by seed so a shelf reads like a real press list:
 *  0 — combed marble (flowing bands, tonal palette with a gold thread)
 *  1 — book cloth with a single foil rosette
 *  2 — book cloth with diagonal foil lines
 */
export function drawMarble(ctx: CanvasRenderingContext2D, w: number, h: number, palette: string[], seed: number, motif = true) {
  const style = seed % 3
  const r = rng(seed)
  if (style === 0) drawCombed(ctx, w, h, palette, r)
  else drawCloth(ctx, w, h, palette, r, motif ? style : 0)
  grain(ctx, w, h, seed, style === 0 ? 10 : 16)
}

function drawCombed(ctx: CanvasRenderingContext2D, w: number, h: number, palette: string[], r: () => number) {
  const tones = [palette[1], palette[0], palette[2], palette[1], palette[0], palette[5], palette[1], palette[4]]
  ctx.fillStyle = palette[1]
  ctx.fillRect(0, 0, w, h)
  const bands = 34 + Math.floor(r() * 14)
  const bandH = (h * 1.3) / bands
  const phases = Array.from({ length: 4 }, () => r() * Math.PI * 2)
  const freqs = [1.5 + r() * 1.5, 3 + r() * 3, 6 + r() * 5, 11 + r() * 7]
  const amps = [h * 0.09, h * 0.04, h * 0.018, h * 0.008]
  const skew = (r() - 0.5) * 0.6
  for (let b = 0; b < bands; b++) {
    const y0 = -h * 0.15 + b * bandH
    ctx.beginPath()
    ctx.moveTo(-w * 0.1, y0)
    const steps = 80
    for (let s = 0; s <= steps; s++) {
      const x = -w * 0.1 + (s / steps) * w * 1.2
      const u = x / w
      let y = y0 + u * skew * h * 0.3
      for (let k = 0; k < 4; k++) y += amps[k] * Math.sin(freqs[k] * u * Math.PI * 2 + phases[k] + b * 0.17)
      ctx.lineTo(x, y)
    }
    for (let s = steps; s >= 0; s--) {
      const x = -w * 0.1 + (s / steps) * w * 1.2
      const u = x / w
      let y = y0 + bandH * 1.15 + u * skew * h * 0.3
      for (let k = 0; k < 4; k++) y += amps[k] * Math.sin(freqs[k] * u * Math.PI * 2 + phases[k] + (b + 1) * 0.17)
      ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.fillStyle = tones[b % tones.length]
    ctx.globalAlpha = 0.92
    ctx.fill()
  }
  ctx.globalAlpha = 1
}

function drawCloth(ctx: CanvasRenderingContext2D, w: number, h: number, palette: string[], r: () => number, style: number) {
  ctx.fillStyle = palette[0]
  ctx.fillRect(0, 0, w, h)
  // weave
  ctx.globalAlpha = 0.08
  ctx.fillStyle = '#000'
  for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1)
  ctx.fillStyle = '#fff'
  for (let x = 0; x < w; x += 4) ctx.fillRect(x, 0, 1, h)
  ctx.globalAlpha = 1
  ctx.strokeStyle = palette[4]
  ctx.lineCap = 'round'
  if (style === 0) return
  if (style === 1) {
    // foil rosette
    const cx = w * (0.3 + r() * 0.4)
    const cy = h * (0.3 + r() * 0.25)
    const R = Math.min(w, h) * (0.22 + r() * 0.12)
    const petals = 7 + Math.floor(r() * 6)
    ctx.lineWidth = Math.max(2, w * 0.004)
    for (let i = 0; i < 3; i++) {
      ctx.beginPath()
      const steps = 240
      for (let s = 0; s <= steps; s++) {
        const t = (s / steps) * Math.PI * 2
        const rr = R * (0.55 + 0.45 * Math.abs(Math.cos((petals * t) / 2))) * (1 - i * 0.22)
        const x = cx + Math.cos(t) * rr
        const y = cy + Math.sin(t) * rr
        if (s === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.stroke()
    }
    ctx.beginPath()
    ctx.arc(cx, cy, R * 0.12, 0, Math.PI * 2)
    ctx.fillStyle = palette[4]
    ctx.fill()
  } else {
    // diagonal foil lines
    ctx.lineWidth = Math.max(2, w * 0.003)
    const n = 5 + Math.floor(r() * 5)
    const gap = w / (n + 1)
    const tilt = (0.3 + r() * 0.5) * (r() > 0.5 ? 1 : -1)
    for (let i = 1; i <= n; i++) {
      const x = i * gap + (r() - 0.5) * gap * 0.4
      ctx.beginPath()
      ctx.moveTo(x - tilt * h * 0.5, -h * 0.05)
      ctx.lineTo(x + tilt * h * 0.5, h * 1.05)
      ctx.globalAlpha = 0.5 + r() * 0.5
      ctx.stroke()
    }
    ctx.globalAlpha = 1
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

function pressMark(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
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

export function drawCover(title: string, author: string, theme: BookTheme, seed: number): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = COVER_W
  c.height = COVER_H
  const ctx = c.getContext('2d')!
  drawMarble(ctx, COVER_W, COVER_H, theme.palette, seed, true)
  // Soft vignette toward the bottom so text reads.
  const grad = ctx.createLinearGradient(0, COVER_H * 0.55, 0, COVER_H)
  grad.addColorStop(0, 'rgba(0,0,0,0)')
  grad.addColorStop(1, 'rgba(0,0,0,0.45)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, COVER_W, COVER_H)

  ctx.fillStyle = '#fdf6e6'
  ctx.textBaseline = 'alphabetic'
  ctx.font = `700 76px ${FONT}`
  const lines = wrap(ctx, title, COVER_W * 0.5)
  const lh = 84
  let y = COVER_H - 120 - (lines.length - 1) * lh
  for (const line of lines) {
    ctx.fillText(line, 96, y)
    y += lh
  }
  ctx.font = `italic 500 42px ${FONT}`
  ctx.textAlign = 'right'
  const alines = wrap(ctx, author, COVER_W * 0.34)
  let ay = COVER_H - 120 - (alines.length - 1) * 48
  for (const line of alines) {
    ctx.fillText(line, COVER_W - 96, ay)
    ay += 48
  }
  ctx.textAlign = 'left'
  // Press mark on a small label, top right.
  ctx.fillStyle = 'rgba(253,246,230,0.85)'
  ctx.fillRect(COVER_W - 150, 0, 150, 110)
  pressMark(ctx, COVER_W - 75, 55, 70, '#201819')
  return c
}

export function drawSpine(title: string, author: string, theme: BookTheme, seed: number): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = SPINE_W
  c.height = SPINE_H
  const ctx = c.getContext('2d')!
  drawMarble(ctx, SPINE_W, SPINE_H, theme.palette, seed, false)
  ctx.fillStyle = 'rgba(0,0,0,0.18)'
  ctx.fillRect(0, 0, SPINE_W, SPINE_H)
  ctx.fillStyle = '#fdf6e6'
  ctx.textBaseline = 'middle'
  ctx.font = `500 54px ${FONT}`
  ctx.textAlign = 'left'
  ctx.fillText(author, 90, SPINE_H / 2 + 4, SPINE_W * 0.3)
  ctx.textAlign = 'center'
  ctx.font = `500 58px ${FONT}`
  ctx.fillText(title, SPINE_W / 2, SPINE_H / 2 + 4, SPINE_W * 0.42)
  pressMark(ctx, SPINE_W - 120, SPINE_H / 2, 72, '#fdf6e6')
  return c
}

export function drawPages(): HTMLCanvasElement {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 64
  const ctx = c.getContext('2d')!
  ctx.fillStyle = '#e8e0cf'
  ctx.fillRect(0, 0, 512, 64)
  for (let i = 0; i < 64; i += 2) {
    ctx.fillStyle = i % 4 === 0 ? '#d9cfbb' : '#efe8d8'
    ctx.fillRect(0, i, 512, 1)
  }
  return c
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
