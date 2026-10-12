---
id: personal-space-and-density
title: Personal Space & Density
land: human-factors
level: intermediate
abstraction: sub-concept
parent: crowd-behavior
children: []
relations:
  - { type: applies-to, target: switchback-design }
  - { type: applies-to, target: crowding-and-enclosure }
  - { type: applies-to, target: level-of-service }
  - { type: applies-to, target: seat-and-containment }
  - { type: applies-to, target: cultural-differences }
summary: Everyone carries an invisible bubble, and queues and ride vehicles are designed to squeeze it politely.
tags: [proxemics, density, queues, comfort]
visuals: [chart]
interactive_idea: "Drop people onto a 10 by 10 metre square at chosen densities and see the Hall zones each person is forced into."
sources: [hall-hidden-dimension, fhwa-fruin-walkway-los, gkstill-crowd-density]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Fruin walkway level of service: space per pedestrian (FHWA table)",
  "width": 300, "height": 150,
  "data": {"values": [
    {"los": "A", "space": 3.2}, {"los": "B", "space": 2.3}, {"los": "C", "space": 1.4},
    {"los": "D", "space": 0.9}, {"los": "E", "space": 0.5}, {"los": "F", "space": 0.3}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "los", "type": "nominal", "title": "Level of service"},
    "y": {"field": "space", "type": "quantitative", "title": "Minimum square metres per person"}
  }
}
```

Anthropologist Edward T. Hall named the study of personal space **proxemics**. He described nested zones: intimate distance for family, personal distance for friends, social distance for strangers, public distance for performers. Being forced into a closer zone than the relationship justifies feels uncomfortable, and that discomfort is what crowding is.

Pedestrian planner John Fruin turned space-per-person into a grading scale. Level of service A gives a walker over three square metres; by LOS E, with half a square metre each, nobody can choose their own speed; LOS F is a standstill. Keith Still's photo series shows these numbers as real crowds, with about five people per square metre as the ceiling for standing areas.

Parks squeeze personal space on purpose and must manage the cost. A [switchback queue](../human-factors/switchback-design.md) packs strangers into intimate distance for an hour, so good queues add rails, planting and screens that break eye contact and create a feeling of [enclosure without crowding](../sensory-environment/crowding-and-enclosure.md). Ride [seats](../ride-engineering/seat-and-containment.md) do the same with armrests and dividers. Hall also noted that comfortable distances vary by culture, which matters for parks in [different regions](../human-factors/cultural-differences.md).

## Explore further
- `hall-hidden-dimension` — The Hidden Dimension (book)
- `fhwa-fruin-walkway-los` — FHWA: Pedestrian level of service tables adapted from Fruin
- `gkstill-crowd-density` — Crowd density: what 1 to 5 people per square metre look like
