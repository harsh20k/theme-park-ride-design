import { webkit } from 'playwright-core'
const base = process.argv[2] ?? 'http://localhost:5173'
const browser = await webkit.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const net: string[] = []
page.on('response', (r) => { if (r.url().includes('/covers/') || r.url().includes('/brand/')) net.push(`${r.status()} ${r.url()}`) })
page.on('requestfailed', (r) => net.push(`FAILED ${r.url()} ${r.failure()?.errorText}`))
page.on('console', (m) => (m.type() === 'error' ? console.log('[console.error]', m.text().slice(0, 200)) : null))
await page.goto(base + '/book/peak-end-rule', { waitUntil: 'networkidle' })
await page.waitForTimeout(6000)
console.log('network:', net)
await page.screenshot({ path: process.env.CLAUDE_JOB_DIR + '/tmp/smoke3/probe-cover-webkit.png' })
await browser.close()
