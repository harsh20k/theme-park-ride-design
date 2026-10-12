---
id: positive-g
title: Positive G
land: ride-engineering
level: beginner
abstraction: sub-concept
parent: g-force-basics
children: []
relations:
  - { type: causes, target: greyout-and-redout }
  - { type: applies-to, target: clothoid-loop }
  - { type: applies-to, target: astm-f2291 }
  - { type: enables, target: thrill-and-arousal }
  - { type: example-of, target: loop-revival }
summary: Positive g presses you into the seat; valleys and loop bottoms are where it peaks.
tags: [g-force, physics, loops, valleys, tolerance]
visuals: [chart]
interactive_idea: "Adjust the drop height and loop radius of a simple layout and watch the peak positive g at the loop bottom update."
sources: [pendrill-loop-shapes-2005, wikipedia-roller-coaster-safety, wikipedia-great-american-revolution, coaster101-flip-flap-g-force]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: positive g along a drop, valley and loop",
  "width": 300, "height": 140,
  "data": {"values": [
    {"s": 0, "g": 1.0}, {"s": 1, "g": 0.3}, {"s": 2, "g": 0.5}, {"s": 3, "g": 3.8},
    {"s": 4, "g": 4.2}, {"s": 5, "g": 2.5}, {"s": 6, "g": 1.2}, {"s": 7, "g": 0.9},
    {"s": 8, "g": 2.0}, {"s": 9, "g": 3.9}, {"s": 10, "g": 1.5}
  ]},
  "mark": {"type": "area", "line": true, "opacity": 0.5},
  "encoding": {
    "x": {"field": "s", "type": "quantitative", "title": "Track position"},
    "y": {"field": "g", "type": "quantitative", "title": "Vertical g"}
  }
}
```

Positive g, written +Gz in the head-to-foot axis, is the familiar squash into the seat. It appears wherever the track curves upward under you: the pull-out at the bottom of a drop, a valley between hills, and the entry to a loop. Blood is pushed toward the legs, arms feel heavy, and a camera held loosely drops into your lap.

Most big coasters peak somewhere around 4 to 5 g. The 1976 Revolution at Six Flags Magic Mountain is listed at 4.9 g, and the wooden Balder at Liseberg hits about 4 g in its first valley. Published design practice keeps positive peaks in the 4 to 6 g range and only for well under a second; the exact caps live in [ASTM F2291](../safety-standards/astm-f2291.md) and depend on duration.

Shape matters as much as speed. A circular loop would spike to roughly 6 g at its base, which is why the [clothoid loop](../ride-engineering/clothoid-loop.md) was invented. Push positive g too long and riders drift toward [greyout](../ride-engineering/greyout-and-redout.md); the balance between squash and safety is a core part of [thrill and arousal](../human-factors/thrill-and-arousal.md).

## Explore further
- `pendrill-loop-shapes-2005` — Rollercoaster loop shapes
- `coaster101-flip-flap-g-force` — Did the Infamous Flip Flap Railway Truly Hit a Neck-Snapping 12 Gs?
- `wikipedia-great-american-revolution` — The New Revolution (roller coaster)
