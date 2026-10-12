// Reference grab of press.stripe.com for the proof-of-concept (screenshots + HTML). Dev-only.
import { chromium } from 'playwright-core'
import fs from 'node:fs'
const out = process.argv[2] ?? '/Users/harsh/.claude/jobs/231455f8/tmp/ref'
fs.mkdirSync(out, { recursive: true })
const b = await chromium.launch({ channel: 'chrome', headless: true })
const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
await p.goto('https://press.stripe.com/', { waitUntil: 'networkidle', timeout: 60000 })
await p.waitForTimeout(3000)
await p.screenshot({ path: out + '/home.png' })
await p.mouse.move(720, 450)
await p.waitForTimeout(800)
await p.screenshot({ path: out + '/home-hover.png' })
await p.mouse.wheel(0, 600)
await p.waitForTimeout(1200)
await p.screenshot({ path: out + '/home-scrolled.png' })
fs.writeFileSync(out + '/home.html', await p.content())
const links = await p.$$eval('a[href]', (as) => as.map((a) => (a as HTMLAnchorElement).href).filter((h) => h.startsWith('https://press.stripe.com/')))
const uniq = [...new Set(links)]
fs.writeFileSync(out + '/links.txt', uniq.join('\n'))
const book = uniq.find((h) => /press\.stripe\.com\/[a-z0-9-]+$/.test(h) && !/about|newsletter|cart|bookstore|privacy|terms/.test(h))
console.log('book', book)
if (book) {
  await p.goto(book, { waitUntil: 'networkidle', timeout: 60000 })
  await p.waitForTimeout(3000)
  await p.screenshot({ path: out + '/book.png' })
  await p.mouse.wheel(0, 700)
  await p.waitForTimeout(1200)
  await p.screenshot({ path: out + '/book-scrolled.png' })
  await p.mouse.wheel(0, 1400)
  await p.waitForTimeout(1200)
  await p.screenshot({ path: out + '/book-scrolled2.png' })
  fs.writeFileSync(out + '/book.html', await p.content())
}
await b.close()
