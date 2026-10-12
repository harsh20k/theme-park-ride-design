---
id: scope-and-value-engineering
title: "Scope & Value Engineering"
land: design-process
level: intermediate
abstraction: concept
parent: pipeline-overview
children: []
relations:
  - { type: limits, target: phase-timeline }
  - { type: applies-to, target: risk-assessment }
summary: The process of trimming or reshaping an attraction so it fits the budget, and the judgement about which cuts guests will notice.
tags: [sample-content, design-process, budget, value-engineering, scope]
visuals:
  - { type: chart, title: "Budget share before and after value engineering", alt: "Grouped bar chart comparing budget share by category, before and after value engineering, for six categories" }
sources:
  - { title: "Theme Park Design & The Art of Themed Entertainment", author: "David Younger", year: 2016 }
  - { title: "Value Engineering: Practical Applications", author: "Alphonse Dell'Isola", year: 1997 }
confidence: medium
---

```chart
%% title: Budget share before and after value engineering | alt: Grouped bar chart comparing budget share by category, before and after value engineering, for six categories
{
  "mark": "bar",
  "data": { "values": [
    { "category": "Ride system", "stage": "Before", "share": 30 },
    { "category": "Ride system", "stage": "After", "share": 33 },
    { "category": "Show sets", "stage": "Before", "share": 22 },
    { "category": "Show sets", "stage": "After", "share": 18 },
    { "category": "Animatronics", "stage": "Before", "share": 16 },
    { "category": "Animatronics", "stage": "After", "share": 12 },
    { "category": "Building", "stage": "Before", "share": 18 },
    { "category": "Building", "stage": "After", "share": 20 },
    { "category": "Media and AV", "stage": "Before", "share": 8 },
    { "category": "Media and AV", "stage": "After", "share": 11 },
    { "category": "Queue and exterior", "stage": "Before", "share": 6 },
    { "category": "Queue and exterior", "stage": "After", "share": 6 }
  ] },
  "encoding": {
    "x": { "field": "category", "type": "nominal", "title": "Budget category" },
    "xOffset": { "field": "stage" },
    "y": { "field": "share", "type": "quantitative", "title": "Share of budget (%)" },
    "color": { "field": "stage", "type": "nominal", "title": "" }
  }
}
```

Almost every attraction is designed bigger than it can be built, and value engineering is where the gap is closed. The team lists everything in the project, estimates what each piece costs and what it adds to the guest's experience, then cuts, simplifies or substitutes until the number fits. A fourth animatronic becomes a projection; a carved facade becomes a painted one. The chart shows the typical pattern: fixed items like the ride system and building cannot shrink much, so show elements absorb the cuts. The hard part is judgement, because guests rarely miss what they never saw, but they do notice a missing story beat. Value engineering interacts with the [phase timeline](../design-process/phase-timeline.md) in both directions: late cuts save less, and schedule slips force more cuts. It also feeds [risk assessment](../safety-standards/risk-assessment.md), since a cheaper component must still meet the same safety case. In the broader [pipeline](../design-process/pipeline-overview.md) it usually sits at the gate between schematic and design development.

## Explore further
- [Phase Timeline](../design-process/phase-timeline.md) — why the date of a cut matters.
- [Design Safety](../safety-standards/design-safety.md) — what cannot be value-engineered away.
