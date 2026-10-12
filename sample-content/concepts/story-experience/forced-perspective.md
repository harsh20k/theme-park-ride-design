---
id: forced-perspective
title: Forced Perspective
land: story-experience
level: beginner
abstraction: concept
parent: spatial-storytelling
children: []
relations:
  - { type: contrasts-with, target: the-berm }
  - { type: applies-to, target: go-away-green }
summary: "Building each upper storey smaller than the one below so the eye reads a modest building as a towering one."
tags: [sample-content, storytelling, scale, illusion, toy]
visuals:
  - { type: svg, title: "Forced perspective on a castle facade", alt: "Side view of a building whose storeys get shorter toward the top, with an eye at ground level and dashed sightlines showing that the roof reads as far taller than it is" }
interactive_idea: "Slide the scale of each storey and see how tall the castle feels."
sources:
  - { title: "Designing Disney: Imagineering and the Art of the Show", author: "John Hench with Peggy Van Pelt", year: 2003 }
confidence: high
---

```svg
<!-- title: Forced perspective on a castle facade | alt: Side view of a building whose storeys get shorter toward the top, with an eye at ground level and dashed sightlines showing that the roof reads as far taller than it is -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" fill="none" stroke="#333" stroke-width="2">
  <line x1="20" y1="210" x2="380" y2="210"/>
  <rect x="220" y="130" width="120" height="80"/>
  <rect x="235" y="85" width="90" height="45"/>
  <rect x="250" y="55" width="60" height="30"/>
  <rect x="262" y="35" width="36" height="20"/>
  <polygon points="262,35 280,15 298,35"/>
  <text x="228" y="175" font-size="11" fill="#333" stroke="none">Ground floor 100%</text>
  <text x="246" y="112" font-size="10" fill="#333" stroke="none">Second 80%</text>
  <text x="258" y="74" font-size="9" fill="#333" stroke="none">Third 60%</text>
  <circle cx="60" cy="195" r="8"/>
  <circle cx="63" cy="195" r="3" fill="#333"/>
  <line x1="68" y1="195" x2="220" y2="210" stroke-dasharray="4 3"/>
  <line x1="68" y1="195" x2="280" y2="15" stroke-dasharray="4 3"/>
  <text x="48" y="225" font-size="11" fill="#333" stroke="none">Eye</text>
  <text x="80" y="100" font-size="11" fill="#333" stroke="none">Reads as a full-size tower</text>
</svg>
```

Forced perspective is a trick borrowed from stage design. The ground floor of a building is built at nearly full size, the next storey a little smaller, and the top storey smaller still. Your eye expects things to shrink with distance, so it reads the whole building as much taller than it really is. A castle only a few storeys high can feel like a towering fortress. It is one of the core tools of [spatial storytelling](../story-experience/spatial-storytelling.md), and it lets a [weenie](../story-experience/weenies.md) look grand without the cost, wind loads and maintenance of real height. The trick only works where the eye cannot get close enough to compare, which is why upper storeys are kept out of reach and often painted in softer tones, the same thinking behind [go-away green](../sensory-environment/go-away-green.md). Unlike [the berm](../story-experience/the-berm.md), which hides things, forced perspective changes how the things you can see are judged.

## Explore further
- [Illusions](../show-technology/illusions.md) — the same willingness of the eye to be fooled, used inside a show.
- [Weenies](../story-experience/weenies.md) — the landmarks that most often get the forced-perspective treatment.
