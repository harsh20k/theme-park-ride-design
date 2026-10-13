#!/usr/bin/env tsx
/** Screenshots of the library (full + zoomed crop) and a topic rail hover. */
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
const base = process.argv[2] ?? 'http://localhost:5173'
const outDir = process.argv[3] ?? path.join(process.env.CLAUDE_JOB_DIR ?? '.', 'tmp', 'd6')
fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
page.setDefaultTimeout(90000)
const errors: string[] = []
page.on('console', (m) => (m.type() === 'error' ? errors.push(m.text().slice(0, 300)) : null))
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForSelector('.PressCanvas.is-initialized')
await page.waitForTimeout(5000)
await page.screenshot({ path: path.join(outDir, 'library.png') })
await page.screenshot({ path: path.join(outDir, 'library-crop.png'), clip: { x: 420, y: 330, width: 620, height: 360 } })
await page.mouse.wheel(0, 1500)
await page.waitForTimeout(2500)
await page.screenshot({ path: path.join(outDir, 'library-2.png') })
if (process.argv[4] !== 'lib') {
  await page.goto(base + '/topic/ride-engineering', { waitUntil: 'networkidle' })
  await page.waitForTimeout(4000)
  await page.screenshot({ path: path.join(outDir, 'topic.png') })
  await page.mouse.wheel(0, 2600)
  await page.waitForTimeout(2000)
  await page.mouse.move(40, 450)
  await page.waitForTimeout(900)
  await page.screenshot({ path: path.join(outDir, 'topic-rail.png') })
}
console.log(errors.length ? `console errors:\n${[...new Set(errors)].join('\n')}` : 'no console errors')
await browser.close()
