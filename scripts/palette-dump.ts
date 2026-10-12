import { themeForLand } from '../src/press/theme'
import fs from 'node:fs'
const lands = JSON.parse(fs.readFileSync('content/lands.json', 'utf8')) as { id: string; title: string; color: string }[]
for (const [i, l] of lands.entries()) {
  const t = themeForLand({ ...l, accent: '', tagline: '', description: '', landmark: '', building: 'pavilion', mood: '', icon: '' } as never, i)
  console.log(l.id.padEnd(22), 'src', l.color, 'cloth', t.palette[0], 'dark', t.palette[1], 'bg', t.bg)
}
