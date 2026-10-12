---
id: ride-layout-design
title: Ride Layout Design
land: design-process
level: intermediate
abstraction: concept
parent: design-development
children: []
relations:
  - { type: applies-to, target: track-geometry }
  - { type: applies-to, target: heartline }
  - { type: limits, target: acceleration-envelopes }
  - { type: enables, target: airtime-hills }
  - { type: applies-to, target: procedural-layout }
  - { type: example-of, target: schwarzkopf-and-stengel }
summary: Shaping a track or path so forces, pacing and site all work, usually with simulation tools.
tags: [layout, track, simulation, coaster, tools]
visuals: [chart]
interactive_idea: "Drag control points on a side-profile track and watch speed and vertical g update in real time."
sources: [blooloop-velocicoaster-design, wikipedia-werner-stengel, nolimits-2]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: layout pass on a coaster, speed versus vertical g",
  "width": 300, "height": 150,
  "data": {"values": [
    {"s": 0, "speed": 5, "g": 1.0}, {"s": 1, "speed": 6, "g": 1.0}, {"s": 2, "speed": 28, "g": 0.2},
    {"s": 3, "speed": 30, "g": 3.8}, {"s": 4, "speed": 22, "g": -0.8}, {"s": 5, "speed": 24, "g": 3.5},
    {"s": 6, "speed": 18, "g": 1.2}, {"s": 7, "speed": 20, "g": -1.0}, {"s": 8, "speed": 8, "g": 1.0}
  ]},
  "transform": [{"fold": ["speed", "g"], "as": ["series", "value"]}],
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "s", "type": "quantitative", "title": "track position"},
    "y": {"field": "value", "type": "quantitative", "title": null},
    "color": {"field": "series", "type": "nominal", "title": null}
  }
}
```

Ride layout is the craft of drawing the path a vehicle takes, in three dimensions, so that the forces are safe, the story beats land where they should, and the whole thing fits the site. For a coaster that means every hill height, bank angle and transition. For a dark ride it means a path that turns the vehicle toward each scene at the right second.

The modern discipline owes much to Werner Stengel, whose office introduced the clothoid loop and [heartlining](../ride-engineering/heartline.md), and whose layouts account for hundreds of coasters. Layout designers work inside [acceleration envelopes](../ride-engineering/acceleration-envelopes.md) set by standards and the manufacturer, then spend the remaining freedom on feeling. On VelociCoaster the layout designer planned 4,700 feet of track to maximise airtime and ejector moments while threading the resort's existing lagoon. Tools range from manufacturers' proprietary [track geometry](../ride-engineering/track-geometry.md) software to NoLimits 2, a physics-based simulator used for concept visualisation and now sold with a Vekoma-licensed coaster add-on. Research into [procedural layout](../ai-future/procedural-layout.md) aims to automate the first pass, but the final shaping is still judged by riding it.

## Explore further
- `blooloop-velocicoaster-design` — Universal Orlando's new VelociCoaster: more teeth, more thrills
- `wikipedia-werner-stengel` — Werner Stengel (Wikipedia)
- `nolimits-2` — NoLimits 2 Roller Coaster Simulation
