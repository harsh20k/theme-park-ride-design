// Dev-only: pull the reference site's component stylesheets into one readable file.
import fs from 'node:fs'
const base = 'https://b.stripecdn.com/mkt-statics-srv/assets/'
const files = [
  'v1-Page-53812006aaa3053130dd',
  'v1-ProductListHeader-5278aa12a712cfb0f070',
  'v1-ProductList-7ddbcf8cdb352bbae943',
  'v1-Canvas-8ac80b09b2ebbb6485d1',
  'v1-ProductDetailsList-d11fdf8ee866a1c1b95d',
  'v1-BookDetails-49144c8187e5fa265980',
  'v1-BookAuthor-dd4cac78f13b9906116e',
  'v1-Link-d2d3aeca535307db3b84',
  'v1-PraiseList-05901f7eb005646967b7',
  'v1-Praise-cccb60e53e86626cabbb',
]
const out = process.argv[2] ?? '/Users/harsh/.claude/jobs/231455f8/tmp/ref/all.css.txt'
let text = ''
for (const f of files) {
  const r = await fetch(base + f + '.css')
  const css = await r.text()
  text += `\n\n/* ===== ${f} ===== */\n` + css.replace(/\}/g, '}\n').replace(/\{/g, ' {\n  ').replace(/;/g, ';\n  ')
}
fs.writeFileSync(out, text)
console.log('wrote', out, text.length)
