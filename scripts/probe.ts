#!/usr/bin/env tsx
// Quick timing probe: how long until the shelf is initialized, and frame cadence afterwards.
import { chromium } from 'playwright-core'
const base = process.argv[2] ?? 'http://localhost:5173'
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('pageerror', (e) => console.log('[pageerror]', e.message))
page.on('console', (m) => (m.type() === 'error' ? console.log('[console.error]', m.text().slice(0, 200)) : null))
const t0 = Date.now()
await page.goto(base + '/', { waitUntil: 'domcontentloaded' })
await page.waitForSelector('.PressCanvas.is-initialized', { timeout: 120000 })
console.log('initialized after', Date.now() - t0, 'ms')
const fps = await page.evaluate(
  () =>
    new Promise<number>((res) => {
      let n = 0
      const start = performance.now()
      const tick = () => {
        n++
        if (performance.now() - start < 2000) requestAnimationFrame(tick)
        else res(n / 2)
      }
      requestAnimationFrame(tick)
    }),
)
console.log('fps ~', fps)
console.log('gl', await page.evaluate(() => (document.querySelector('canvas')?.getContext('webgl2') as WebGL2RenderingContext | null)?.getParameter(0x1f01)))
await browser.close()
