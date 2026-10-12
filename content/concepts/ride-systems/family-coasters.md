---
id: family-coasters
title: Family & Junior Coasters
land: ride-systems
level: beginner
abstraction: concept
parent: roller-coasters
children: []
relations:
  - { type: applies-to, target: height-and-health-requirements }
  - { type: applies-to, target: age-differences }
  - { type: enables, target: attraction-mix }
  - { type: applies-to, target: lowest-common-denominator }
  - { type: applies-to, target: acceleration-envelopes }
summary: Low-height, moderate-g coasters built so a whole family can ride together, the bulk of the market.
tags: [coasters, family, junior, accessibility, capacity]
visuals: [chart]
interactive_idea: "Set a child's height and a parent's thrill tolerance; the tool shows which coaster classes both can ride together."
sources: [zamperla-roller-coasters, vekoma-sitdown-family-coasters, vekoma-family-boomerang, wikipedia-roller-coaster-safety]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Published manufacturer figures for two family models",
  "width": 300, "height": 120,
  "data": {"values": [
    {"model": "Vekoma Family Boomerang", "metric": "Top speed km/h", "value": 58},
    {"model": "Vekoma Family Boomerang", "metric": "Min height cm", "value": 95},
    {"model": "Zamperla Powered Coaster 120 m", "metric": "Top speed km/h", "value": 29},
    {"model": "Zamperla Powered Coaster 120 m", "metric": "Min height cm", "value": 90}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "model", "type": "nominal", "title": null},
    "x": {"field": "value", "type": "quantitative", "title": null},
    "color": {"field": "metric", "type": "nominal", "title": null},
    "yOffset": {"field": "metric"}
  }
}
```

Family coasters are the quiet majority of the industry. Most coasters opening each year are not record-breakers but compact steel rides with small drops, mild forces and a height limit around 90 to 100 cm, so a six-year-old can ride beside a grandparent. Zamperla, Vekoma, Zierer, Gerstlauer and Intamin all sell them as catalogue models with fixed layouts and known throughput, which keeps price and delivery predictable.

The design brief is the [lowest common denominator](../human-factors/lowest-common-denominator.md) in the good sense: every force stays inside a gentle [acceleration envelope](../ride-engineering/acceleration-envelopes.md), restraints are simple lap bars, and the layout is readable from the queue so nervous first-timers can see what they are in for. Vekoma's Family Boomerang, with 196 metres of track used forward and backward and 720 riders an hour, is a typical example; a "junior" coaster is smaller still.

For a park these rides do a different job from a flagship. They fill the [attraction mix](../masterplanning/attraction-mix.md) so that mixed-age groups have somewhere to ride together ([age differences](../human-factors/age-differences.md)), and they are often a child's first coaster, which makes them the start of a lifetime of [height requirements](../human-factors/height-and-health-requirements.md) being met one by one.

## Explore further
- `zamperla-roller-coasters` — Zamperla roller coaster range
- `vekoma-sitdown-family-coasters` — Vekoma sitdown family coasters
- `vekoma-family-boomerang` — Vekoma Family Boomerang
