#!/usr/bin/env tsx
/** Home page (desktop + phone), footers on the shelf pages, and the book-to-book fade. */
import { chromium } from 'playwright-core'
import fs from 'node:fs'
import path from 'node:path'
const base = process.argv[2] ?? 'http://localhost:5173'
const outDir = process.argv[3]!
fs.mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
page.setDefaultTimeout(90000)
const errors: string[] = []
page.on('console', (m) => (m.type() === 'error' ? errors.push(m.text().slice(0, 300)) : null))
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
page.on('response', (r) => r.status() >= 400 && errors.push(`${r.status()} ${r.url().slice(0, 120)}`))
const shot = (name: string, full = false) => page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: full })
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForTimeout(2500)
await shot('home-hero')
// lazy images: walk the page once so everything has loaded before the full-page shot
const h = await page.evaluate('document.documentElement.scrollHeight') as number
for (let y = 0; y < h; y += 700) {
  await page.mouse.wheel(0, 700)
  await page.waitForTimeout(250)
}
await page.waitForTimeout(800)
await page.evaluate('scrollTo(0,0)')
await page.waitForTimeout(400)
await shot('home-full', true)
console.log('home scrollWidth', await page.evaluate('document.documentElement.scrollWidth'), 'height', h)
if (process.argv[4] !== 'home') {
  await page.click('.Home__button--solid')
  await page.waitForURL(/\/shelves/)
  await page.waitForSelector('.PressCanvas.is-initialized')
  await page.waitForTimeout(3000)
  await shot('shelves-top')
  await page.evaluate('scrollTo(0, document.documentElement.scrollHeight)')
  await page.waitForTimeout(2500)
  await shot('shelves-footer')
  await page.goto(base + '/topic/safety-standards', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  await page.evaluate('scrollTo(0, document.documentElement.scrollHeight)')
  await page.waitForTimeout(2500)
  await shot('topic-footer')
}
await page.setViewportSize({ width: 390, height: 844 })
await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
await shot('home-phone')
const hp = await page.evaluate('document.documentElement.scrollHeight') as number
for (let y = 0; y < hp; y += 600) {
  await page.mouse.wheel(0, 600)
  await page.waitForTimeout(200)
}
await page.evaluate('scrollTo(0,0)')
await page.waitForTimeout(400)
await shot('home-phone-full', true)
console.log('phone scrollWidth', await page.evaluate('document.documentElement.scrollWidth'))
console.log(errors.length ? `errors:\n${[...new Set(errors)].join('\n')}` : 'no console errors')
await browser.close()
