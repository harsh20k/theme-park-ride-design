---
id: seasonality-and-events
title: Seasonality & Events
land: operations-business
level: beginner
abstraction: concept
parent: business-and-finance
children: []
relations:
  - { type: applies-to, target: seasonal-overlays }
  - { type: enables, target: retheming-and-overlays }
  - { type: applies-to, target: weather-policies }
  - { type: applies-to, target: shade-and-microclimate }
  - { type: causes, target: capacity-vs-demand }
summary: Regional parks earn most of their year in a few summer and Halloween weeks, so events are built to fill the shoulders.
tags: [business, seasonality, events, halloween]
visuals: [chart]
interactive_idea: "A 52-week attendance bar chart: add a Halloween event, a winter lights festival or a spring food festival and watch the shoulder weeks lift and annual revenue change."
sources: [six-flags-investor-relations, aecom-theme-index, popsci-touring-plans-wait-time-science-2017]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: monthly attendance share at a seasonal regional park with a Halloween event",
  "width": 300, "height": 140,
  "data": {"values": [
    {"month": "Apr", "share": 3}, {"month": "May", "share": 8}, {"month": "Jun", "share": 16},
    {"month": "Jul", "share": 24}, {"month": "Aug", "share": 20}, {"month": "Sep", "share": 7},
    {"month": "Oct", "share": 18}, {"month": "Nov", "share": 2}, {"month": "Dec", "share": 2}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "month", "type": "nominal", "title": "Month", "sort": null},
    "y": {"field": "share", "type": "quantitative", "title": "Share of annual visits, percent"}
  }
}
```

Most parks live on a lopsided calendar. A regional park in a temperate climate may open in April, earn the bulk of its year in July and August, and close after Halloween; public operators warn investors each year that a rainy summer weekend can cost a measurable slice of annual profit. Destination resorts in Florida and California run year-round but still swing with school holidays, which is why forecasters feed school calendars into their crowd models.

Events are the fix for the quiet shoulders. Halloween, once a dead month, is now the second peak at many parks thanks to separately ticketed night events such as Universal's Halloween Horror Nights and the haunt events most regional chains now run. Winter light festivals, food and wine festivals and concert series do the same for spring and late autumn. Each event is a cheap, repeatable [seasonal overlay](../sensory-environment/seasonal-overlays.md) on existing infrastructure, often with its own upcharge ticket.

Seasonality drives operations too: staffing scales up and down, [weather policies](../safety-standards/weather-policies.md) decide when rides close, and the off-season is when heavy maintenance happens. Designers can soften the curve with [shade and microclimate](../sensory-environment/shade-and-microclimate.md) choices and indoor capacity that keeps rainy days viable. The monthly shares above are illustrative.

## Explore further
- `six-flags-investor-relations` — Six Flags Entertainment Corporation Investor Relations
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
