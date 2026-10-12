#!/usr/bin/env tsx
/** Smoke test for draft 3: library → topic → book, plus search. Saves screenshots and console errors. */
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
const base = process.argv[2] ?? 'http://localhost:5173'
const outDir = process.argv[3] ?? path.join(process.env.CLAUDE_JOB_DIR ?? '.', 'tmp', 'smoke3')
fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
page.setDefaultTimeout(90000)
const errors: string[] = []
page.on('console', (m) => (m.type() === 'error' ? errors.push(`[${m.type()}] ${m.text().slice(0, 300)}`) : null))
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
const shot = async (name: string, wait = 1200) => {
  await page.waitForTimeout(wait)
  await page.screenshot({ path: path.join(outDir, `${name}.png`) })
  console.log('shot', name)
}
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForSelector('.PressCanvas.is-initialized')
await shot('library', 4000)
await page.hover('.Library__shelf:nth-child(2) .Library__plank')
await shot('library-hover', 1200)
await page.mouse.wheel(0, 1400)
await shot('library-scrolled', 1500)
await page.click('.Library__shelf:nth-child(2) .Library__label')
await page.waitForURL(/\/topic\//)
await shot('topic', 4000)
await page.mouse.wheel(0, 1600)
await shot('topic-scrolled', 1500)
await page.keyboard.press('Meta+k')
await page.waitForSelector('.Search__input')
await page.keyboard.type('clothoid')
await shot('search', 800)
await page.keyboard.press('Enter')
await page.waitForURL(/\/book\/clothoid-loop/)
await shot('book-clothoid', 5000)
await page.goto(base + '/book/peak-end-rule', { waitUntil: 'networkidle' })
await shot('book-peak-end', 5000)
await page.mouse.wheel(0, 900)
await shot('book-peak-end-scrolled', 1500)
await page.goto(base + '/book/peppers-ghost', { waitUntil: 'networkidle' })
await shot('book-peppers', 5000)
await page.goto(base + '/book/airtime-and-negative-g', { waitUntil: 'networkidle' })
await shot('book-formula-card', 5000)
console.log(errors.length ? `console errors:\n${[...new Set(errors)].join('\n')}` : 'no console errors')
await browser.close()
