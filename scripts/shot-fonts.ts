#!/usr/bin/env tsx
/** Screenshot the font sample sheet and report any family that did not load. */
import { chromium } from 'playwright-core'
const url = process.argv[2] ?? 'http://localhost:5173/fonts.html'
const out = process.argv[3]!
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const errors: string[] = []
page.on('response', (r) => r.status() >= 400 && errors.push(r.status() + ' ' + r.url().slice(0, 140)))
page.on('pageerror', (e) => errors.push(e.message))
page.on('requestfailed', (r) => errors.push('failed ' + r.url().slice(0, 120)))
await page.goto(url, { waitUntil: 'networkidle' })
await page.evaluate('document.fonts.ready')
await page.waitForTimeout(1500)
const missing = await page.evaluate(`[...document.querySelectorAll('.card')].flatMap((c) => {
  const s = getComputedStyle(c)
  const name = (v) => s.getPropertyValue(v).trim().replace(/'/g, '')
  const tw = getComputedStyle(c.querySelector('.title')).fontWeight
  const out = []
  if (!document.fonts.check(tw + ' 40px "' + name('--display') + '"')) out.push(name('--display') + ' ' + tw)
  if (!document.fonts.check('400 16px "' + name('--text') + '"')) out.push(name('--text') + ' 400')
  return out
})`)
console.log('cards', await page.locator('.card').count(), 'missing fonts:', JSON.stringify([...new Set(missing as string[])]))
await page.screenshot({ path: out + '-1.png' })
await page.screenshot({ path: out + '-full.png', fullPage: true })
await page.fill('#sample', 'Weenies & Visual Magnets')
await page.click('.chip[data-cat="sign"]')
await page.waitForTimeout(600)
await page.screenshot({ path: out + '-sign.png' })
await page.setViewportSize({ width: 390, height: 800 })
await page.click('.chip[data-cat="mono"]')
await page.waitForTimeout(500)
await page.screenshot({ path: out + '-phone.png' })
console.log('scrollW', await page.evaluate('document.documentElement.scrollWidth'), errors.length ? errors : 'no errors')
await browser.close()
