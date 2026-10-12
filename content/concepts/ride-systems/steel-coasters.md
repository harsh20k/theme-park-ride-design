---
id: steel-coasters
title: Steel Coasters
land: ride-systems
level: beginner
abstraction: concept
parent: roller-coasters
children: []
relations:
  - { type: example-of, target: tubular-steel-breakthrough }
  - { type: enables, target: clothoid-loop }
  - { type: applies-to, target: wheels-and-bogies }
  - { type: example-of, target: arrow-dynamics }
  - { type: enables, target: hyper-and-giga-era }
  - { type: contrasts-with, target: wooden-coasters }
summary: Tubular steel rails and polyurethane wheels made loops, height and smoothness possible.
tags: [coasters, steel, tubular-track, inversions]
visuals: [chart]
interactive_idea: "Bend a virtual steel tube: drag control points and see the minimum radius a train could take at a chosen speed before g-limits are hit."
sources: [wikipedia-steel-roller-coaster, wikipedia-matterhorn-bobsleds, wikipedia-roller-coaster-safety]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: what tubular steel unlocked after 1959",
  "width": 300, "height": 150,
  "data": {"values": [
    {"capability": "Inversions", "wood": 1, "steel": 10},
    {"capability": "Height", "wood": 5, "steel": 10},
    {"capability": "Smoothness", "wood": 4, "steel": 9},
    {"capability": "Tight radius", "wood": 3, "steel": 9},
    {"capability": "Rider positions", "wood": 2, "steel": 10}
  ]},
  "transform": [{"fold": ["wood", "steel"], "as": ["material", "score"]}],
  "mark": "bar",
  "encoding": {
    "y": {"field": "capability", "type": "nominal", "title": null},
    "x": {"field": "score", "type": "quantitative", "title": "Relative capability (illustrative)"},
    "color": {"field": "material", "type": "nominal", "title": null},
    "yOffset": {"field": "material"}
  }
}
```

A steel coaster runs on two **round steel tubes**, held apart by cross ties and carried on steel columns. The wheels are polyurethane or nylon, and they wrap the tube from three sides, so the train is locked to the rail through any orientation. That is the whole trick: a tube can be rolled into a loop, a corkscrew or a heartline roll, and the wheels will follow.

The format arrived with [Matterhorn Bobsleds](../history/matterhorn-bobsleds.md) at Disneyland in 1959, built by Arrow Development ([the tubular steel breakthrough](../history/tubular-steel-breakthrough.md)). Arrow's corkscrews of the 1970s, then Schwarzkopf's and later B&M's [clothoid loops](../ride-engineering/clothoid-loop.md), grew straight out of it. So did height: the [hyper and giga era](../history/hyper-and-giga-era.md) is a steel story.

Steel is stiffer and more predictable than wood, so it rides smoother and can be fabricated to a computer model within millimetres. It also supports every seating position in this land, inverted, wing, flying and spinning included, because the [wheel assembly](../ride-engineering/wheels-and-bogies.md) can hang from or beside the tube as easily as sit on it. Most coasters built today are steel.

## Explore further
- `wikipedia-steel-roller-coaster` — Steel roller coaster (Wikipedia)
- `wikipedia-matterhorn-bobsleds` — Matterhorn Bobsleds (Wikipedia)
- `wikipedia-roller-coaster-safety` — Roller coaster (Wikipedia)
