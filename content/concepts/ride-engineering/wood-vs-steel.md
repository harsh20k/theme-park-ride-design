---
id: wood-vs-steel
title: Wood vs Steel Behavior
land: ride-engineering
level: intermediate
abstraction: concept
parent: structures-and-materials
children: []
relations:
  - { type: applies-to, target: wooden-coasters }
  - { type: applies-to, target: steel-coasters }
  - { type: applies-to, target: hybrid-coasters }
  - { type: example-of, target: rmc-hybrid-era }
  - { type: applies-to, target: materials-and-texture }
summary: Wood flexes and is renewed piece by piece; steel is rigid, precise and must be kept from rusting.
tags: [wood, steel, materials, maintenance, feel]
visuals: [chart]
interactive_idea: "Toggle a layout between wood, hybrid and steel; the ride feel, annual upkeep and possible elements update in a side panel."
sources: [wikipedia-wooden-roller-coaster, pendrill-balder-motion-tracker-2005, wikipedia-great-coasters-international, wikipedia-outlaw-run]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: qualitative comparison, 1 low to 5 high",
  "width": 300, "height": 150,
  "data": {"values": [
    {"trait": "Structural flex", "material": "Wood", "score": 5}, {"trait": "Structural flex", "material": "Steel", "score": 1},
    {"trait": "Shape freedom", "material": "Wood", "score": 2}, {"trait": "Shape freedom", "material": "Steel", "score": 5},
    {"trait": "Yearly upkeep", "material": "Wood", "score": 5}, {"trait": "Yearly upkeep", "material": "Steel", "score": 2},
    {"trait": "Rebuildability", "material": "Wood", "score": 5}, {"trait": "Rebuildability", "material": "Steel", "score": 2}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "trait", "type": "nominal", "title": null},
    "y": {"field": "score", "type": "quantitative", "title": "Score"},
    "color": {"field": "material", "type": "nominal", "title": null},
    "xOffset": {"field": "material"}
  }
}
```

A wooden coaster is a living structure. Its track is a stack of laminated boards topped with a flat steel strap, carried on timber bents, and the whole thing is meant to move: track and supports flex inches to feet as a train passes, and that give is what makes a woodie feel wild. The price is upkeep. Boards and strap wear, and parts are commonly replaced every year. Yet because it can be renewed piece by piece, a well-kept wooden coaster can outlive a steel one.

Steel is the opposite bargain. Tubular or box track is fabricated to millimetre precision, bends into any inversion, and barely moves, so the ride is smooth and repeatable. It needs little rebuilding but must be protected from corrosion for life.

The middle ground is now large. Intamin's prefabricated laminated track gave Balder steel-like precision on a wooden structure in 2003; Rocky Mountain Construction's Topper Track let Outlaw Run invert on a wooden frame in 2013; Great Coasters International's Titan Track arrived in 2020. The choice shapes the [wooden](../ride-systems/wooden-coasters.md), [steel](../ride-systems/steel-coasters.md) and [hybrid coaster](../ride-systems/hybrid-coasters.md) families, the [RMC hybrid era](../history/rmc-hybrid-era.md), and the [materials and texture](../sensory-environment/materials-and-texture.md) a guest reads from the queue.

## Explore further
- `wikipedia-wooden-roller-coaster` — Wooden roller coaster
- `pendrill-balder-motion-tracker-2005` — A roller coaster viewed through motion tracker data (Balder)
- `wikipedia-outlaw-run` — Outlaw Run
