---
id: airtime-hills
title: Airtime Hills & Vertical Curves
land: ride-engineering
level: intermediate
abstraction: concept
parent: track-geometry
children: []
relations:
  - { type: causes, target: airtime-and-negative-g }
  - { type: applies-to, target: hyper-and-giga-era }
  - { type: applies-to, target: restraint-mechanisms }
  - { type: applies-to, target: supports-and-foundations }
  - { type: example-of, target: wooden-coasters }
summary: The crest radius and speed set how hard a hill lifts you out of the seat.
tags: [airtime, hills, parabola, vertical-curves, geometry]
visuals: [formula, chart]
interactive_idea: "Set entry speed and target g at the crest; the widget draws the matching parabola and shows how long the float lasts."
sources: [pendrill-balder-motion-tracker-2005, pendrill-eager-jerk-snap-2020, wikipedia-roller-coaster-elements, coaster101-foundations]
confidence: high
---
> **Formula** $r = \dfrac{v^2}{g\,(1 - G)}$
> where:
> - $r$ — radius of the track at the crest of the hill
> - $v$ — speed of the train over the crest
> - $g$ — the acceleration of gravity
> - $G$ — the vertical g you want the rider to feel at the crest, with 0 meaning weightless and negative meaning pulled upward

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: vertical g over a camelback hill",
  "width": 300, "height": 140,
  "data": {"values": [
    {"s": 0, "g": 1.0}, {"s": 1, "g": 1.8}, {"s": 2, "g": 0.6}, {"s": 3, "g": -0.3},
    {"s": 4, "g": -0.5}, {"s": 5, "g": -0.3}, {"s": 6, "g": 0.6}, {"s": 7, "g": 1.8}, {"s": 8, "g": 1.0}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "s", "type": "quantitative", "title": "Position over hill"},
    "y": {"field": "g", "type": "quantitative", "title": "Vertical g"}
  }
}
```

An airtime hill is a vertical curve tuned to a feeling. Over a crest the track curves downward, so part of gravity is used up bending the train's path and less is left to press the rider into the seat. Make the crest radius equal to speed squared over gravity and the rider follows a free-fall parabola: exactly 0 g, a floater. Make it tighter and the restraint must pull the rider down: negative g, or ejector airtime. The formula shows the trade: faster trains need bigger radii for the same feeling, which is why hyper coasters have long, sweeping hills.

Balder at Liseberg, a wooden coaster from 2003, strings ten negative-g moments together and includes one hill shaped as a deliberate parabolic flight. Its data also shows that front and back seats cross a crest at different speeds, so the float differs by row.

The valley between hills is the mirror image: a concave curve that stacks gravity and centripetal push into the ride's biggest [positive g](../ride-engineering/positive-g.md). Both curves load the structure, pulling up on [supports and foundations](../ride-engineering/supports-and-foundations.md) at crests and pressing down in valleys, and both define the [hyper and giga era](../history/hyper-and-giga-era.md) of out-and-back layouts.

## Explore further
- `pendrill-balder-motion-tracker-2005` — A roller coaster viewed through motion tracker data (Balder at Liseberg, with ten airtime moments measured)
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration: forces in our bodies during a roller coaster ride
- `wikipedia-roller-coaster-elements` — List of roller coaster elements (camelback, airtime hill and related terms)
- `coaster101-foundations` — Coasters-101: Foundations (how airtime hills pull up on footers while valleys press down)
