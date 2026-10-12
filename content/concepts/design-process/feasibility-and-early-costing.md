---
id: feasibility-and-early-costing
title: Feasibility & Early Costing
land: design-process
level: intermediate
abstraction: concept
parent: concept-phase
children: []
relations:
  - { type: applies-to, target: capital-budgets }
  - { type: enables, target: roi-and-attendance-modeling }
  - { type: limits, target: blue-sky }
  - { type: applies-to, target: site-selection }
  - { type: enables, target: design-day }
summary: An early check of whether an idea can be built on this site, for this market, at this price.
tags: [budget, feasibility, estimating, business]
visuals: [chart]
interactive_idea: "Adjust theming level, schedule and location sliders to watch a rough-order-of-magnitude estimate and contingency move."
sources: [leisure-business-build-theme-park, iaapa-funworld-busted-budgets]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: how wide an estimate's error band is at each phase",
  "width": 300, "height": 140,
  "data": {"values": [
    {"phase": "1 Concept", "band": 40}, {"phase": "2 Schematic", "band": 25},
    {"phase": "3 Design dev", "band": 15}, {"phase": "4 Construction docs", "band": 7}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "phase", "type": "nominal", "title": null, "axis": {"labelAngle": 0}},
    "y": {"field": "band", "type": "quantitative", "title": "plus or minus %"}
  }
}
```

Before a studio spends real money on design, someone has to ask whether the idea can pay for itself. A feasibility study, usually written by an outside consultant, sizes the market, recommends an attraction mix and sets physical limits like land and building area. Lenders and investors expect one. The study then feeds a design charrette and a first bubble diagram of the site.

Early costing is deliberately rough: estimators multiply big quantities by unit costs from past jobs, then add a contingency that shrinks as the design firms up. An IAAPA Funworld piece lists six drivers that move the number: budget realism, time to market, theming level, location, how design is managed, and how changes are managed. Compressed schedules raise cost; location can swing labour and land by roughly ten to twenty percent. The result sets the [capital budget](../operations-business/capital-budgets.md) and the [attendance model](../operations-business/roi-and-attendance-modeling.md) that justify it, and it fixes the [design day](../masterplanning/design-day.md) the ride must serve. It is also the first real limit on [blue sky](../design-process/blue-sky.md) thinking, and the honest moment that avoids panic cuts later.

## Explore further
- `leisure-business-build-theme-park` — How to Build a Theme Park: The First Steps (Leisure Business Advisors)
- `iaapa-funworld-busted-budgets` — Avoiding Busted Budgets (IAAPA Funworld)
