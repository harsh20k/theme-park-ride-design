#!/usr/bin/env tsx
/** Hover rotation: a library book and the standing book, pointer left / right / away. */
import { chromium } from 'playwright-core'
import path from 'node:path'
const base = process.argv[2] ?? 'http://localhost:5173'
const outDir = process.argv[3]!
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
page.setDefaultTimeout(90000)
const errors: string[] = []
page.on('console', (m) => (m.type() === 'error' ? errors.push(m.text().slice(0, 300)) : null))
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
await page.goto(base + '/shelves', { waitUntil: 'networkidle' })
await page.waitForSelector('.PressCanvas.is-initialized')
await page.waitForTimeout(4000)
const clip = { x: 440, y: 290, width: 780, height: 290 }
await page.mouse.move(100, 800)
await page.waitForTimeout(900)
await page.screenshot({ path: path.join(outDir, 'lib-away.png'), clip })
await page.mouse.move(820, 430)
await page.waitForTimeout(900)
await page.screenshot({ path: path.join(outDir, 'lib-hover.png'), clip })
await page.goto(base + '/book/clothoid-loop', { waitUntil: 'networkidle' })
await page.waitForTimeout(5000)
const bclip = { x: 180, y: 110, width: 520, height: 680 }
for (const [name, x, y] of [['book-away', 1200, 500], ['book-left', 270, 300], ['book-right', 620, 640]] as const) {
  await page.mouse.move(x, y)
  await page.waitForTimeout(1200)
  await page.screenshot({ path: path.join(outDir, `${name}.png`), clip: bclip })
}
console.log(errors.length ? `console errors:\n${[...new Set(errors)].join('\n')}` : 'no console errors')
await browser.close()
