---
id: level-of-service
title: Density & Level of Service
land: masterplanning
level: advanced
abstraction: concept
parent: guest-flow-and-capacity
children: []
relations:
  - { type: applies-to, target: personal-space-and-density }
  - { type: applies-to, target: switchback-design }
  - { type: enables, target: crowd-modeling }
  - { type: applies-to, target: crowding-and-enclosure }
  - { type: applies-to, target: emergency-stop-and-evacuation }
summary: Fruin's A-to-F grading of how much space each walking person has, used to size paths.
tags: [density, pedestrian, fruin, standards]
visuals: [chart, formula]
interactive_idea: "Pick a path width and a flow rate; a live grid of dots shows the resulting level of service."
sources: [fhwa-fruin-walkway-los, fruin-pedestrian-planning-1971, gkstill-phd-crowd-dynamics-ch3]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Walkway level of service: lower bound of space per person (Fruin 1971, per FHWA-HRT-98-107)",
  "width": 300, "height": 140,
  "data": {"values": [
    {"los": "A", "m2": 3.2}, {"los": "B", "m2": 2.3}, {"los": "C", "m2": 1.4},
    {"los": "D", "m2": 0.9}, {"los": "E", "m2": 0.5}, {"los": "F", "m2": 0.2}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "los", "type": "nominal", "title": "Level of service"},
    "y": {"field": "m2", "type": "quantitative", "title": "Square metres per pedestrian"}
  }
}
```

> **Formula** $M = \frac{A}{N}$
- $M$ is pedestrian space, the area each walking person has, in square metres per person
- $A$ is the usable walkway area in square metres, after subtracting benches, planters and shop frontage
- $N$ is the number of pedestrians on that area at the same moment

Level of service is the grading scale planners use to say how crowded a path feels. John Fruin introduced it in 1971, borrowing the A-to-F letters from road engineering. A means free walking with room to overtake; C means you adjust your pace to others; E is a shuffle; F is a standing jam where flow breaks down. The metric is simply space per person, so a path is graded by dividing its usable area by the people on it.

The thresholds vary by source. Fruin's own walkway values run from about 3.2 square metres per person at the top of A down to half a square metre at E, while the US Highway Capacity Manual used more generous numbers, so always name the table you are using. Keith Still warns that these thresholds came from city streets and should be applied with judgement, especially for standing crowds, where four people per square metre is a common safety ceiling.

Parks use the scale to size walkways for the [design day](../masterplanning/design-day.md), to set [switchback](../human-factors/switchback-design.md) queue density, and to feed [crowd models](../ai-future/crowd-modeling.md). It also connects to how guests feel: [personal space](../human-factors/personal-space-and-density.md) shrinks long before safety is at risk.

## Explore further
- `fhwa-fruin-walkway-los` — Capacity Analysis of Pedestrian and Bicycle Facilities, FHWA-HRT-98-107, with the Fruin and Highway Capacity Manual walkway thresholds tabulated side by side
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design, John J. Fruin's 1971 book that introduced pedestrian level of service and walkway capacity
- `gkstill-phd-crowd-dynamics-ch3` — Crowd Dynamics, PhD thesis chapter 3 by G. Keith Still, a critical review of level of service and density limits for real crowds
