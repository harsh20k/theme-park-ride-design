#!/usr/bin/env tsx
/** Screenshot one element: shot-el.ts <url> <selector> <out.png> [width] [height] */
import { chromium } from 'playwright-core'
const [url, selector, out, w = '1440', h = '900'] = process.argv.slice(2)
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--use-angle=metal'] })
const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
const el = page.locator(selector).first()
await el.scrollIntoViewIfNeeded()
await page.waitForTimeout(1200)
await el.screenshot({ path: out })
await browser.close()
