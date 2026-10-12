#!/usr/bin/env tsx
/**
 * Smoke test: loads the shelf and a book page in headless Chrome, collects
 * console errors and saves screenshots.
 *
 *   npx tsx scripts/smoke.ts [baseUrl] [outDir] [bookId]
 */
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'

const base = process.argv[2] ?? 'http://localhost:5173'
const outDir = process.argv[3] ?? path.join(process.env.CLAUDE_JOB_DIR ?? '.', 'tmp', 'smoke')
const bookId = process.argv[4] ?? 'peak-end-rule'
fs.mkdirSync(outDir, { recursive: true })

const gpu = process.env.SMOKE_GPU !== '0'
const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: gpu ? ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] : ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
page.setDefaultTimeout(90000)
const errors: string[] = []
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text().slice(0, 300)}`)
})
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))

await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForTimeout(5000)
await page.screenshot({ path: path.join(outDir, 'shelf.png') })
console.log('shot shelf')

await page.mouse.move(720, 400)
await page.waitForTimeout(900)
await page.screenshot({ path: path.join(outDir, 'shelf-hover.png') })
console.log('shot shelf-hover')

await page.mouse.wheel(0, 900)
await page.waitForTimeout(1500)
await page.screenshot({ path: path.join(outDir, 'shelf-scrolled.png') })
console.log('shot shelf-scrolled')

await page.goto(base + `/book/${bookId}`, { waitUntil: 'networkidle' })
await page.waitForTimeout(5000)
await page.screenshot({ path: path.join(outDir, 'book.png') })
console.log('shot book')
let total = 0
for (const [step, name] of [
  [700, 'book-scrolled'],
  [900, 'book-scrolled2'],
  [900, 'book-scrolled3'],
  [900, 'book-scrolled4'],
  [1200, 'book-scrolled5'],
] as [number, string][]) {
  await page.mouse.wheel(0, step)
  total += step
  await page.waitForTimeout(1400)
  await page.screenshot({ path: path.join(outDir, `${name}.png`) })
  console.log(`shot ${name} (scrollY≈${total}) url=${page.url()}`)
}

// Click-through transition from the shelf.
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForTimeout(4000)
await page.click(`a[href="/book/${bookId}"]`, { force: true })
await page.waitForTimeout(600)
await page.screenshot({ path: path.join(outDir, 'transition-mid.png') })
await page.waitForTimeout(2500)
await page.screenshot({ path: path.join(outDir, 'transition-end.png') })
console.log('shot transition')

await browser.close()
const uniq = [...new Set(errors)]
console.log(`\n${uniq.length} distinct console errors/warnings`)
for (const e of uniq.slice(0, 30)) console.log('  ' + e)
