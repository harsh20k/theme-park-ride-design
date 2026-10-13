#!/usr/bin/env tsx
/** Reading flow: standing pose, exact scroll tracking, flat-then-turn entrance, and the fade between books. */
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
const shot = (name: string) => page.screenshot({ path: path.join(outDir, `${name}.png`) })
await page.goto(base + '/topic/ride-engineering', { waitUntil: 'networkidle' })
await page.waitForSelector('.PressCanvas.is-initialized')
await page.waitForTimeout(2500)
await page.locator('.PressBook__link').nth(9).click()
await page.waitForURL(/\/book\//)
await page.waitForTimeout(4500)
await shot('1-standing')
// outline the anchors so tracking can be judged by eye
await page.addStyleTag({ content: '.PressDetails__anchor{outline:1px dashed rgba(255,80,80,.9)}' })
const info = `(() => { const a = [...document.querySelectorAll('.PressDetails__anchor')]; return a.slice(0,3).map(e => { const r = e.getBoundingClientRect(); return [Math.round(r.top), Math.round(r.height)] }) })()`
console.log('anchors at rest', JSON.stringify(await page.evaluate(info)))
// find the scroll position where the second anchor is half in view
const secondTop = await page.evaluate(`document.querySelectorAll('.PressDetails__anchor')[1].getBoundingClientRect().top + scrollY`) as number
const anchorH = await page.evaluate(`document.querySelectorAll('.PressDetails__anchor')[1].getBoundingClientRect().height`) as number
// jump so the first book is being pushed up by the related-ideas block: screenshot on the very next frame
const firstEnd = secondTop - 900
await page.evaluate(`scrollTo(0, ${Math.round(firstEnd - 500)})`)
await page.waitForTimeout(1200)
await page.evaluate(`new Promise(r => { scrollBy(0, 260); requestAnimationFrame(() => requestAnimationFrame(r)) })`)
await shot('2-pushed-next-frame')
// next book half risen: should be face-on
await page.evaluate(`scrollTo(0, ${Math.round(secondTop - 900 + anchorH * 0.55)})`)
await page.waitForTimeout(1500)
await shot('3-next-half-risen')
// almost fully risen: should have turned
await page.evaluate(`scrollTo(0, ${Math.round(secondTop - 900 + anchorH * 1.02)})`)
await page.waitForTimeout(1600)
await shot('4-next-risen')
// fade between books via a related-ideas card
const card = page.locator('.PressPraise').first()
await card.scrollIntoViewIfNeeded()
await page.waitForTimeout(1200)
await shot('5-before-link')
const before = page.url()
await card.click()
await page.waitForTimeout(160)
await shot('6-fade-160ms')
await page.waitForTimeout(260)
await shot('7-fade-420ms')
await page.waitForTimeout(500)
await shot('8-fade-920ms')
await page.waitForTimeout(1800)
await shot('9-arrived')
console.log('link:', before.split('/').pop(), '->', page.url().split('/').pop(), 'scrollY', await page.evaluate('scrollY'))
// inline link in the text
const inline = page.locator('.PressDetails__summary a.Link[href^="/book/"]').first()
if (await inline.count()) {
  const b2 = page.url()
  await inline.click()
  await page.waitForTimeout(2600)
  console.log('inline:', b2.split('/').pop(), '->', page.url().split('/').pop(), 'scrollY', await page.evaluate('scrollY'), 'title', await page.locator('.PressDetails__title').first().textContent())
  await shot('10-inline-arrived')
}
console.log(errors.length ? `errors:\n${[...new Set(errors)].join('\n')}` : 'no console errors')
await browser.close()
