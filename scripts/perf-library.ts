#!/usr/bin/env tsx
/** Scroll a page top to bottom and back, and report frame times (ms). */
import { chromium } from 'playwright-core'
const base = process.argv[2] ?? 'http://localhost:5173'
const route = process.argv[3] ?? '/shelves'
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
page.setDefaultTimeout(90000)
await page.goto(base + route, { waitUntil: 'networkidle' })
await page.waitForSelector('.PressCanvas.is-initialized')
await page.waitForTimeout(1500)
// Passed as a string so the bundler's helpers are not injected into the page.
const probe = `new Promise((res) => {
  const max = Math.min(document.documentElement.scrollHeight - innerHeight, 6000)
  const dts = []
  let last = performance.now()
  const t0 = last
  const dur = 7000
  const step = (now) => {
    dts.push(now - last)
    last = now
    const p = Math.min(1, (now - t0) / dur)
    const tri = p < 0.5 ? p * 2 : 2 - p * 2
    scrollTo(0, tri * max)
    if (p < 1) requestAnimationFrame(step)
    else {
      dts.shift()
      const s = [...dts].sort((a, b) => a - b)
      res({ frames: dts.length, avg: +(dts.reduce((a, b) => a + b, 0) / dts.length).toFixed(2), p95: +s[Math.floor(s.length * 0.95)].toFixed(1), max: +s[s.length - 1].toFixed(1), over25ms: dts.filter((d) => d > 25).length })
    }
  }
  requestAnimationFrame(step)
})`
console.log('first pass (art generating):', JSON.stringify(await page.evaluate(probe)))
console.log('second pass (warm):         ', JSON.stringify(await page.evaluate(probe)))
await browser.close()
