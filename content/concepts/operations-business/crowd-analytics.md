---
id: crowd-analytics
title: Crowd Analytics
land: operations-business
level: intermediate
abstraction: concept
parent: data-and-technology
children: []
relations:
  - { type: enables, target: crowd-modeling }
  - { type: applies-to, target: guest-flow-patterns }
  - { type: enables, target: digital-twins }
  - { type: applies-to, target: ride-operations-staffing }
  - { type: applies-to, target: pinch-points }
summary: Combine gate counts, app pings and wait histories to see where guests are, forecast where they will be, and staff accordingly.
tags: [data, analytics, forecasting, simulation]
visuals: [chart]
interactive_idea: "A heat map of a park that plays back a simulated day; a side panel shows how a forecast made at 9 a.m. compares with what happened."
sources: [popsci-touring-plans-wait-time-science-2017, sas-theme-park-wait-time-simulation-2024, input-wait-time-trackers-2022]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: forecast vs actual posted wait at one ride across a day",
  "width": 300, "height": 140,
  "data": {"values": [
    {"hour": 9, "series": "forecast", "v": 20}, {"hour": 11, "series": "forecast", "v": 55}, {"hour": 13, "series": "forecast", "v": 70},
    {"hour": 15, "series": "forecast", "v": 60}, {"hour": 17, "series": "forecast", "v": 45}, {"hour": 19, "series": "forecast", "v": 30},
    {"hour": 9, "series": "actual", "v": 15}, {"hour": 11, "series": "actual", "v": 60}, {"hour": 13, "series": "actual", "v": 75},
    {"hour": 15, "series": "actual", "v": 40}, {"hour": 17, "series": "actual", "v": 50}, {"hour": 19, "series": "actual", "v": 25}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "hour", "type": "quantitative", "title": "Hour of day"},
    "y": {"field": "v", "type": "quantitative", "title": "Posted wait, minutes"},
    "color": {"field": "series", "type": "nominal", "title": null}
  }
}
```

Crowd analytics is the work of turning raw traces into decisions. The inputs are gate counts, ticket types, hotel occupancy, app and wearable pings, posted-wait histories, weather and the calendar. The outputs are forecasts: how many people tomorrow, where they will cluster, which rides will hit a two-hour wait, and how many operators each platform needs. Staffing rosters, show schedules and the day's Lightning Lane inventory are all set against these forecasts.

The outside world shows how it is done. Touring Plans builds its crowd calendar from roughly 600 features, including the school calendars of the hundred largest U.S. districts, economic indicators, holidays, ride closures and even sunset times, and corrects it through the day with crowd-sourced timings. Operators have richer data and the same logic. When formulas run out, teams simulate: a 2024 SAS example builds a fictional park with 47 attractions and generates a fresh snapshot every five minutes, the same approach [crowd modeling](../ai-future/crowd-modeling.md) and [digital twins](../ai-future/digital-twins.md) scale up.

For designers, analytics closes the loop on the master plan. Measured [guest flow patterns](../masterplanning/guest-flow-patterns.md) reveal which [pinch points](../masterplanning/pinch-points.md) really jam and which planned paths nobody uses, so the next land can be drawn against evidence rather than assumption.

## Explore further
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
- `sas-theme-park-wait-time-simulation-2024` — Simulating theme park wait times within SAS Viya
- `input-wait-time-trackers-2022` — The amateur data scientists tracking Disney World's lines
