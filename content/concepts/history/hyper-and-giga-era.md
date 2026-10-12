---
id: hyper-and-giga-era
title: Hyper & Giga Era
land: history
level: beginner
abstraction: concept
parent: coaster-milestones
children: []
relations:
  - { type: example-of, target: airtime-hills }
  - { type: example-of, target: lift-systems }
  - { type: example-of, target: supports-and-foundations }
  - { type: example-of, target: pricing }
  - { type: applies-to, target: arrow-dynamics }
  - { type: example-of, target: speed-profile }
summary: Magnum XL-200 (1989) broke 200 ft and Millennium Force (2000) broke 300 ft, turning height into the industry's scoreboard.
tags: [history, hypercoaster, giga-coaster, cedar-point, coaster-wars]
visuals: [image, chart]
interactive_idea: "Set a lift height and watch a simple energy model draw the speed profile and airtime hills a designer could afford."
sources: [wikipedia-magnum-xl-200, wikipedia-millennium-force, wikipedia-cedar-point, wikipedia-intamin]
confidence: high
---
![Millennium Force at Cedar Point](https://upload.wikimedia.org/wikipedia/commons/6/6c/Millennium_Force_%28Cedar_Point%29_01.JPG)
*Photo: Cmedinger, CC BY-SA 3.0, via Wikimedia Commons — [source](https://commons.wikimedia.org/wiki/File:Millennium_Force_(Cedar_Point)_01.JPG)*

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Height classes defined by the record breakers (Wikipedia)",
  "width": 300, "height": 130,
  "data": {"values": [
    {"class": "Hyper 200-299 ft", "first": "Magnum XL-200, 1989", "ft": 205},
    {"class": "Giga 300-399 ft", "first": "Millennium Force, 2000", "ft": 310}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "class", "type": "nominal", "title": null},
    "x": {"field": "ft", "type": "quantitative", "title": "First example, ft"},
    "tooltip": [{"field": "first"}]
  }
}
```

Magnum XL-200 opened at Cedar Point on May 6, 1989. Designed by Ron Toomer at Arrow Dynamics, its 205 ft lift made it the first hypercoaster, a term for full-circuit coasters over 200 ft, and some credit it with starting the roller coaster wars. Its long out-and-back layout is a sequence of [airtime hills](../ride-engineering/airtime-hills.md), the signature of the class.

Eleven years later, on May 13, 2000, Cedar Point and Intamin opened Millennium Force, 310 ft tall and the first giga coaster, a name the park and manufacturer coined for the 300 ft class. Werner Stengel designed the layout. A conventional chain would have been too slow and heavy, so it uses a cable lift, a milestone among [lift systems](../ride-engineering/lift-systems.md). Height like this also drives the [supports and foundations](../ride-engineering/supports-and-foundations.md) budget, since a taller lift means a longer, faster train and heavier loads.

The business logic is simple: a record is a headline, and headlines move [pricing](../operations-business/pricing.md) and attendance for a season. The [speed profile](../ride-engineering/speed-profile.md) of a giga is also distinctive, with most of the energy spent in the first drop. Arrow's story is told in [Arrow Dynamics](../history/arrow-dynamics.md).

## Explore further
- `wikipedia-magnum-xl-200` — Magnum XL-200
- `wikipedia-millennium-force` — Millennium Force
- `wikipedia-cedar-point` — Cedar Point
- `wikipedia-intamin` — Intamin
