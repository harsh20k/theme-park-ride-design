---
id: g-tolerance-and-duration
title: G-Tolerance & Duration
land: ride-engineering
level: intermediate
abstraction: concept
parent: forces-and-tolerance
children: []
relations:
  - { type: applies-to, target: astm-f2291 }
  - { type: applies-to, target: medical-exclusions }
  - { type: enables, target: launched-coasters }
  - { type: contrasts-with, target: head-and-neck-loads }
  - { type: applies-to, target: height-and-health-requirements }
summary: How much g you can take depends on how long it lasts and which way it points.
tags: [g-force, tolerance, duration, physiology, standards]
visuals: [chart]
interactive_idea: "Pick a g level and an exposure time; the widget shows whether it sits in the sustained, impact or forbidden region."
sources: [wikipedia-g-force, smith-meaney-g-forces-brain-2002, coaster101-flip-flap-g-force, astm-f2291-design-practice]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: tolerated forward g for untrained people falls with exposure time",
  "width": 300, "height": 140,
  "data": {"values": [
    {"seconds": 10, "g": 20}, {"seconds": 60, "g": 10}, {"seconds": 600, "g": 6}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "seconds", "type": "quantitative", "scale": {"type": "log"}, "title": "Exposure (s, log)"},
    "y": {"field": "g", "type": "quantitative", "title": "Forward g (eyeballs in)"}
  }
}
```

A number like "5 g" means little on its own. The body is a bag of fluids and springs, so what hurts is force held long enough for blood to pool or tissue to stretch. Untrained people have taken about 20 g pushing them into a seat for a few seconds, 10 g for a minute, and 6 g for ten minutes. Pilots grey out near 5 g head-to-foot, but only after sustained load; the pilot limits quoted in the press come from exposures averaging about 43 seconds. Coaster peaks last under 3 seconds, as Smith and Meaney noted when Congress debated g-force laws.

Direction matters too: forward g is tolerated best, backward g worse, and negative g worst, at roughly 2 to 3 g.

Standards encode this as limits that fall with duration. Coaster101's reading of ASTM F24 practice cites a 6 g cap for exposures under 0.8 seconds; the precise curves sit inside [ASTM F2291](../safety-standards/astm-f2291.md), and impacts under 200 milliseconds are judged by muscle response rather than blood flow. Treat the figures here as medium confidence. This logic makes [launched coasters](../ride-systems/launched-coasters.md) survivable and shapes [medical exclusions](../human-factors/medical-exclusions.md). Brain risk follows different rules, covered under [head and neck loads](../ride-engineering/head-and-neck-loads.md).

## Explore further
- `wikipedia-g-force` — g-force
- `smith-meaney-g-forces-brain-2002` — Roller Coasters, G Forces, and Brain Trauma: On the Wrong Track?
- `coaster101-flip-flap-g-force` — Did the Infamous Flip Flap Railway Truly Hit a Neck-Snapping 12 Gs?
