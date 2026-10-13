#!/usr/bin/env tsx
/** Collapsed rail on a long topic, the reading page, and a narrow library. */
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
await page.goto(base + '/topic/human-factors', { waitUntil: 'networkidle' })
await page.waitForSelector('.PressCanvas.is-initialized')
await page.mouse.move(900, 300)
await page.mouse.wheel(0, 5200)
await page.waitForTimeout(3500)
await page.screenshot({ path: path.join(outDir, 'rail-collapsed.png') })
// jump to a section through the list
await page.hover('.PressRail__zone')
await page.waitForTimeout(400)
await page.click('.PressRail__tocItem:nth-child(1) >> nth=0')
await page.locator('.PressRail__tocItem').nth(5).click({ force: true }).catch(() => undefined)
await page.waitForTimeout(2500)
await page.mouse.move(900, 500)
await page.waitForTimeout(800)
await page.screenshot({ path: path.join(outDir, 'rail-after-jump.png') })
console.log('now label:', await page.locator('.PressRail__now span').textContent())
await page.goto(base + '/book/peak-end-rule', { waitUntil: 'networkidle' })
await page.waitForTimeout(5000)
await page.screenshot({ path: path.join(outDir, 'book.png') })
await page.goto(base + '/book/block-zones', { waitUntil: 'networkidle' }).catch(() => undefined)
await page.waitForTimeout(4000)
await page.screenshot({ path: path.join(outDir, 'book2.png') })
await page.setViewportSize({ width: 820, height: 1000 })
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForTimeout(4000)
await page.screenshot({ path: path.join(outDir, 'library-narrow.png') })
console.log(errors.length ? `console errors:\n${[...new Set(errors)].join('\n')}` : 'no console errors')
await browser.close()
