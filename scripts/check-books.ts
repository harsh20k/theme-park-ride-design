#!/usr/bin/env tsx
/** Open each given book on a deployed site and report its title and any console errors. */
import { chromium } from 'playwright-core'
const [base, ...ids] = process.argv.slice(2)
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors: string[] = []
page.on('pageerror', (e) => errors.push(e.message))
page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 200)))
for (const id of ids) {
  await page.goto(`${base}/book/${id}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)
  const title = await page.locator('.PressDetails__title').first().textContent()
  const words = await page.locator('.PressDetails__summary').first().textContent()
  console.log(id.padEnd(34), '→', title, '|', (words ?? '').split(/\s+/).length, 'words')
}
console.log(errors.length ? errors : 'no console errors')
await browser.close()
