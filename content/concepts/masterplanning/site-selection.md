---
id: site-selection
title: Site Selection & Context
land: masterplanning
level: intermediate
abstraction: concept
parent: park-structure
children: []
relations:
  - { type: enables, target: feasibility-and-early-costing }
  - { type: applies-to, target: roi-and-attendance-modeling }
  - { type: limits, target: expansion-and-phasing }
  - { type: example-of, target: walt-and-the-imagineers }
  - { type: applies-to, target: shade-and-microclimate }
summary: Choosing the land by market reach, access, climate and ground before drawing a single ride.
tags: [feasibility, market, climate, economics]
visuals: [chart]
interactive_idea: "Move a pin on a regional map; a drive-time ring and population count update to score candidate sites."
sources: [d23-harrison-price, openlibrary-walts-revolution, wikipedia-disneyland, falcons-master-planning-process]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative site scorecard: weights a planner might apply",
  "width": 300, "height": 150,
  "data": {"values": [
    {"factor": "Population in 2-hr drive", "weight": 30},
    {"factor": "Highway and airport access", "weight": 20},
    {"factor": "Climate and operating days", "weight": 15},
    {"factor": "Land cost and acreage", "weight": 15},
    {"factor": "Ground, water table, drainage", "weight": 10},
    {"factor": "Zoning and incentives", "weight": 10}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "factor", "type": "nominal", "sort": "-x", "title": null},
    "x": {"field": "weight", "type": "quantitative", "title": "Weight, percent"}
  }
}
```

Site selection is the first masterplanning decision and the hardest to undo. In 1953 Walt and Roy Disney hired the Stanford Research Institute, where economist Harrison "Buzz" Price compared ten Southern California sites on population growth, freeway access and climate. He pointed at a 160-acre orange grove in Anaheim beside the planned Santa Ana Freeway, and Disneyland opened there in 1955. Price later founded Economics Research Associates and ran the studies that put Walt Disney World near Orlando. His book Walt's Revolution! By the Numbers is the industry's founding text on this kind of [feasibility work](../design-process/feasibility-and-early-costing.md).

The method still holds. Planners count the people within a day's drive, model [attendance and return](../operations-business/roi-and-attendance-modeling.md), then test the ground: topography, soil, drainage, water table, wind and sun. Florida's high water table forced Magic Kingdom's service tunnels to grade and the park one storey up. Hot climates push parks indoors or under heavy [shade](../sensory-environment/shade-and-microclimate.md). A site that is too small caps [expansion](../masterplanning/expansion-and-phasing.md) forever; Disneyland's cramped acreage is why Walt bought 27,000 acres in Florida.

## Explore further
- `d23-harrison-price` — Harrison Price, Disney Legend (D23)
- `openlibrary-walts-revolution` — Walt's Revolution! By the Numbers
- `wikipedia-disneyland` — Disneyland (Wikipedia)
- `falcons-master-planning-process` — Master Planning Process (Falcon's Creative Group)
