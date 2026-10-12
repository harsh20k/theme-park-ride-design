---
id: ride-lifecycle
title: Ride Lifecycle & Refurbishment
land: operations-business
level: beginner
abstraction: concept
parent: maintenance-and-lifecycle
children: []
relations:
  - { type: applies-to, target: capital-budgets }
  - { type: applies-to, target: post-opening-plussing }
  - { type: applies-to, target: fatigue }
  - { type: enables, target: retheming-and-overlays }
  - { type: example-of, target: pirates-of-the-caribbean }
summary: Rides pass through opening, maturity, refurbishment and decline; refurbishment resets wear and refreshes demand.
tags: [operations, lifecycle, refurbishment, capital]
visuals: [chart]
interactive_idea: "A ride-age dial: as years pass, a demand curve sags and a maintenance-cost curve rises; press 'refurbish' to see both reset and the capital hit."
sources: [wikipedia-tianas-bayou-adventure, hersheypark-skyrush-winter-maintenance, aecom-theme-index]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: demand and upkeep over a ride's life, with a refurbishment at year 15",
  "width": 300, "height": 140,
  "data": {"values": [
    {"year": 0, "series": "demand", "v": 100}, {"year": 5, "series": "demand", "v": 80}, {"year": 10, "series": "demand", "v": 65},
    {"year": 14, "series": "demand", "v": 55}, {"year": 15, "series": "demand", "v": 90}, {"year": 20, "series": "demand", "v": 75},
    {"year": 25, "series": "demand", "v": 60}, {"year": 30, "series": "demand", "v": 50},
    {"year": 0, "series": "upkeep", "v": 10}, {"year": 5, "series": "upkeep", "v": 18}, {"year": 10, "series": "upkeep", "v": 30},
    {"year": 14, "series": "upkeep", "v": 40}, {"year": 15, "series": "upkeep", "v": 15}, {"year": 20, "series": "upkeep", "v": 25},
    {"year": 25, "series": "upkeep", "v": 38}, {"year": 30, "series": "upkeep", "v": 50}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "year", "type": "quantitative", "title": "Years since opening"},
    "y": {"field": "v", "type": "quantitative", "title": "Index"},
    "color": {"field": "series", "type": "nominal", "title": null}
  }
}
```

A ride has a life story. It opens to a surge of demand, settles into middle age, and slowly loses novelty and reliability as parts wear. Operators plan for this with a refurbishment cycle: a scheduled closure of weeks or months in which trains are rebuilt, track or structure is replaced, control systems are upgraded, and scenes are repainted or re-animated. A well-timed refurbishment resets the maintenance curve and gives marketing a new headline.

The scale varies. A light refurbishment is a repaint and new wheels during the off-season. A heavy one can take a year and approach the cost of a new attraction; the Splash Mountain conversions at Walt Disney World and Disneyland each closed the ride for well over a year before reopening as Tiana's Bayou Adventure in 2024. Wooden coasters are instead retracked section by section over many winters.

The decision is financial as much as mechanical. Refurbishment competes with new rides in the [capital budget](../operations-business/capital-budgets.md), and the trigger is often an [attendance model](../operations-business/roi-and-attendance-modeling.md) showing the ride no longer pulls visits. Engineering limits, such as the [fatigue](../ride-engineering/fatigue.md) life of steel, set the outer bound. Small improvements between closures are [post-opening plussing](../design-process/post-opening-plussing.md).

## Explore further
- `wikipedia-tianas-bayou-adventure` — Tiana's Bayou Adventure
- `hersheypark-skyrush-winter-maintenance` — Behind the Scenes of Winter Maintenance on Skyrush
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index
