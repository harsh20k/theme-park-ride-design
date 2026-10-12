---
id: rider-position
title: Rider Position
land: ride-engineering
level: intermediate
abstraction: concept
parent: rider-biomechanics
children: []
relations:
  - { type: applies-to, target: heartline }
  - { type: applies-to, target: flying-coasters }
  - { type: applies-to, target: wing-coasters }
  - { type: applies-to, target: anticipation-and-dread }
  - { type: applies-to, target: peripheral-vision-and-speed }
summary: "Where you sit changes the forces: the back row drops faster, the front row sees first."
tags: [seat-position, rows, airtime, perception, geometry]
visuals: [chart]
interactive_idea: "Pick a row in a six-car train and crest a hill; the widget shows that row's speed and vertical g against the train average."
sources: [pendrill-balder-motion-tracker-2005, kuo-brain-deformation-coasters-2017, liseberg-stengel-coasters, wikipedia-batman-the-ride]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: vertical g at a hill crest by row in one train",
  "width": 300, "height": 130,
  "data": {"values": [
    {"row": "Front", "g": 0.2}, {"row": "Middle", "g": 0.0}, {"row": "Back", "g": -0.4}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "row", "type": "nominal", "title": null, "sort": null},
    "y": {"field": "g", "type": "quantitative", "title": "Vertical g at crest"}
  }
}
```

A train is not a point. It is a string of linked cars, and only its centre of mass obeys the simple drop formula. When the front car tips over a crest, most of the train is still behind it, so the front creeps over and is then pulled down by the cars following. When the back car reaches the crest, the rest of the train is already plunging and yanks it over at speed. That is why the back row gets the strongest first-drop airtime and the front gets the view. Pendrill's Balder study notes exactly this: different parts of the train pass hills at different speeds.

Position changes the geometry too. Every track is rolled about a chosen heartline, so a rider sitting low under the rail, or far out to the side on a [wing coaster](../ride-systems/wing-coasters.md), has a different offset from the roll axis, and [heartline](../ride-engineering/heartline.md) design must pick whom to optimise for. On a [flying coaster](../ride-systems/flying-coasters.md) the body is prone, so the same loop loads the spine along a different axis.

Even two people in one seat differ, as Kuo's pilot study found. Seat choice also shapes [anticipation and dread](../human-factors/anticipation-and-dread.md) and how [peripheral vision](../human-factors/peripheral-vision-and-speed.md) reads speed.

## Explore further
- `pendrill-balder-motion-tracker-2005` — A roller coaster viewed through motion tracker data (Balder)
- `kuo-brain-deformation-coasters-2017` — Pilot Findings of Brain Displacements and Deformations during Roller Coaster Rides
- `liseberg-stengel-coasters` — Werner Stengel and the Liseberg roller coasters
