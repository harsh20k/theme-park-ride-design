---
id: roi-and-attendance-modeling
title: ROI & Attendance Modeling
land: operations-business
level: advanced
abstraction: concept
parent: business-and-finance
children: []
relations:
  - { type: enables, target: site-selection }
  - { type: applies-to, target: feasibility-and-early-costing }
  - { type: applies-to, target: design-day }
  - { type: enables, target: regional-vs-destination }
  - { type: example-of, target: disneyland-1955 }
summary: Feasibility studies estimate how many people a park or ride will draw from its market, and whether that pays for the build.
tags: [business, feasibility, attendance, roi]
visuals: [formula, chart]
interactive_idea: "A market-area model: drop a park on a map, set drive-time rings and capture rates, and see projected attendance and payback years update."
sources: [openlibrary-walts-revolution, wikipedia-harrison-buzz-price, aecom-theme-index, milman-2001-future-of-theme-park-industry]
confidence: medium
---
> **Formula** $A = \sum_i P_i \, c_i$
> where
> - $A$ is projected annual attendance
> - $P_i$ is the resident or tourist population in market ring $i$, for example within one, two or three hours' drive
> - $c_i$ is the capture rate for that ring, the share of people expected to visit in a year, taken from comparable parks

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: capture rate falls with drive time from the park",
  "width": 300, "height": 140,
  "data": {"values": [
    {"ring": "0-1 h", "capture": 0.25}, {"ring": "1-2 h", "capture": 0.08},
    {"ring": "2-3 h", "capture": 0.03}, {"ring": "3 h plus", "capture": 0.01}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "ring", "type": "nominal", "title": "Drive time", "sort": null},
    "y": {"field": "capture", "type": "quantitative", "title": "Share visiting per year", "axis": {"format": "%"}}
  }
}
```

Before anyone draws a ride, someone estimates who will come. The modern feasibility study descends from Harrison "Buzz" Price, the economist Walt Disney hired in 1953 to pick a site for Disneyland; Price recommended Anaheim on access, climate and projected profit, the first modern [site selection](../masterplanning/site-selection.md) study, then founded Economics Research Associates in 1958. His memoir *Walt's Revolution! By the Numbers* describes the method.

The core idea is a market-area model. Count the people living within each drive-time ring, add tourists already visiting the region, and multiply each group by a capture rate borrowed from comparable parks. Adjust for competition, climate, income and whether the park is a [regional or destination](../masterplanning/regional-vs-destination.md) draw. The output is an attendance projection that drives [feasibility and early costing](../design-process/feasibility-and-early-costing.md) and everything downstream: the [design day](../masterplanning/design-day.md), ride capacity, parking, and the revenue side of the return-on-investment case.

For a single new ride the question is incremental: how many extra visits, and how much extra spend per visit, does it add over several years? That lift, set against capital cost, gives payback. Benchmarks come from the TEA/AECOM Theme Index; the chart's capture rates are illustrative.

## Explore further
- `openlibrary-walts-revolution` — Walt's Revolution! By the Numbers, Buzz Price's own account of the Disneyland and Walt Disney World feasibility studies
- `wikipedia-harrison-buzz-price` — Harrison Price, the 1953 Disneyland site study and the founding of Economics Research Associates in 1958
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index, the annual attendance benchmark for comparable-park analysis
- `milman-2001-future-of-theme-park-industry` — The Future of the Theme Park and Attraction Industry: A Management Perspective
