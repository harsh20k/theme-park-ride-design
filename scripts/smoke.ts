#!/usr/bin/env tsx
/**
 * Smoke test: loads the park, a reading room, a concept card and library mode
 * in headless Chrome, collects console errors and saves screenshots.
 *
 *   npx tsx scripts/smoke.ts [baseUrl] [outDir]
 */
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'

const base = process.argv[2] ?? 'http://localhost:5173'
const outDir = process.argv[3] ?? path.join(process.env.CLAUDE_JOB_DIR ?? '.', 'tmp', 'smoke')
fs.mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1 })
const errors: string[] = []
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text().slice(0, 300)}`)
})
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))

const shots: [string, string, number][] = [
  ['/', 'park', 6000],
  ['/land/human-factors', 'reading-room', 2500],
  ['/land/human-factors/peak-end-rule', 'card-peak-end', 4000],
  ['/land/ride-engineering/clothoid-loop', 'card-clothoid', 4000],
  ['/land/history/early-coasters', 'card-image', 3000],
  ['/library', 'library', 2000],
]
for (const [route, name, wait] of shots) {
  await page.goto(base + route, { waitUntil: 'networkidle' })
  await page.waitForTimeout(wait)
  await page.screenshot({ path: path.join(outDir, `${name}.png`) })
  console.log(`shot ${name} ← ${route}`)
}

// Drive a little and take another shot.
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForTimeout(5000)
await page.keyboard.down('w')
await page.waitForTimeout(1800)
await page.keyboard.up('w')
await page.keyboard.down('a')
await page.waitForTimeout(500)
await page.keyboard.up('a')
await page.waitForTimeout(600)
await page.screenshot({ path: path.join(outDir, 'park-driven.png') })
console.log('shot park-driven')

await browser.close()
const uniq = [...new Set(errors)]
console.log(`\n${uniq.length} distinct console errors/warnings`)
for (const e of uniq.slice(0, 30)) console.log('  ' + e)
