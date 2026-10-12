---
id: hub-and-spoke
title: Hub-and-Spoke
land: masterplanning
level: beginner
abstraction: concept
parent: park-structure
children: []
relations:
  - { type: example-of, target: park-structure }
  - { type: enables, target: weenies }
  - { type: applies-to, target: throughput-and-queueing }
summary: A park layout with one entry street leading to a central plaza, from which paths branch out to each land like the spokes of a wheel.
tags: [masterplanning, layout, wayfinding, sample-content]
visuals:
  - { type: svg, title: "Hub-and-spoke layout, top-down", alt: "Top-down diagram of a park with an entry at the bottom, a central hub, and five spokes leading to five lands" }
interactive_idea: null
sources:
  - { title: "The Imagineering Field Guide to Disneyland", author: "Alex Wright and The Imagineers", year: 2008 }
  - { title: "Walt Disney Imagineering: A Behind the Dreams Look at Making the Magic Real", author: "The Imagineers", year: 1996 }
confidence: medium
---

```svg
<!-- title: Hub-and-spoke layout, top-down | alt: Top-down diagram of a park with an entry at the bottom, a central hub, and five spokes leading to five lands -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" font-family="sans-serif" font-size="11">
  <!-- spokes -->
  <g stroke="#555" stroke-width="3" fill="none">
    <line x1="200" y1="225" x2="200" y2="140" />
    <line x1="200" y1="140" x2="200" y2="40" />
    <line x1="200" y1="140" x2="80" y2="70" />
    <line x1="200" y1="140" x2="320" y2="70" />
    <line x1="200" y1="140" x2="60" y2="170" />
    <line x1="200" y1="140" x2="340" y2="170" />
  </g>
  <!-- lands -->
  <g fill="#fff" stroke="#333" stroke-width="2">
    <circle cx="200" cy="40" r="22" />
    <circle cx="80" cy="70" r="22" />
    <circle cx="320" cy="70" r="22" />
    <circle cx="60" cy="170" r="22" />
    <circle cx="340" cy="170" r="22" />
  </g>
  <g text-anchor="middle" fill="#222">
    <text x="200" y="44">Land A</text>
    <text x="80" y="74">Land B</text>
    <text x="320" y="74">Land C</text>
    <text x="60" y="174">Land D</text>
    <text x="340" y="174">Land E</text>
  </g>
  <!-- hub -->
  <circle cx="200" cy="140" r="26" fill="#eee" stroke="#333" stroke-width="2" />
  <text x="200" y="144" text-anchor="middle" fill="#222">Hub</text>
  <!-- entry -->
  <rect x="170" y="212" width="60" height="22" fill="#fff" stroke="#333" stroke-width="2" />
  <text x="200" y="227" text-anchor="middle" fill="#222">Entry</text>
  <text x="220" y="185" fill="#444">Entry street</text>
</svg>
```

Hub-and-spoke is the classic [park structure](../masterplanning/park-structure.md): guests enter through a single gateway street, arrive at a central plaza, and choose a spoke that leads into a themed land. Disneyland (1955) made the pattern famous, with its castle standing at the hub as the park's main [weenie](../story-experience/weenies.md).

The layout solves several problems at once. Guests can always return to the hub, so nobody feels lost. The hub works as a natural meeting point and a stage for parades and shows. Operators can open or close a spoke to steer crowds, which helps balance [throughput and queueing](../operations-business/throughput-and-queueing.md) across the park.

The pattern has costs too. The hub itself can become the busiest, most congested spot, and themed lands that touch at their edges need careful screening so one world does not leak into another, a job often handed to earth [berms](../story-experience/the-berm.md) and planting.

## Explore further
- [Park Structure](../masterplanning/park-structure.md) — hub-and-spoke compared with loop and linear layouts.
- [The Berm](../story-experience/the-berm.md) — how parks hide the outside world and neighbouring lands.
