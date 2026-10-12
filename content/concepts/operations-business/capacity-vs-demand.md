---
id: capacity-vs-demand
title: Capacity vs Demand Curves
land: operations-business
level: intermediate
abstraction: concept
parent: throughput-and-queueing
children: []
relations:
  - { type: applies-to, target: design-day }
  - { type: enables, target: entertainment-scheduling }
  - { type: applies-to, target: paid-priority-access }
  - { type: enables, target: virtual-queues }
  - { type: applies-to, target: parade-and-show-crowds }
summary: Plot arrivals and ride capacity across a day; the area where demand sits above capacity is the queue.
tags: [operations, capacity, demand, planning]
visuals: [chart]
interactive_idea: "Drag a parade time or a rope-drop surge on the demand curve and watch the queue area fill and drain against a flat capacity line."
sources: [popsci-touring-plans-wait-time-science-2017, wikipedia-lightning-lane, disneyblog-capacity-analysis-methodology]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: hourly demand for one ride against a flat 1,500 per hour capacity",
  "width": 300, "height": 150,
  "data": {"values": [
    {"hour": 9, "series": "demand", "v": 2600}, {"hour": 10, "series": "demand", "v": 2200}, {"hour": 11, "series": "demand", "v": 1900},
    {"hour": 12, "series": "demand", "v": 1600}, {"hour": 13, "series": "demand", "v": 1500}, {"hour": 14, "series": "demand", "v": 1700},
    {"hour": 15, "series": "demand", "v": 1100}, {"hour": 16, "series": "demand", "v": 1300}, {"hour": 17, "series": "demand", "v": 1200},
    {"hour": 18, "series": "demand", "v": 900}, {"hour": 19, "series": "demand", "v": 700}, {"hour": 20, "series": "demand", "v": 1000},
    {"hour": 9, "series": "capacity", "v": 1500}, {"hour": 20, "series": "capacity", "v": 1500}
  ]},
  "mark": "line",
  "encoding": {
    "x": {"field": "hour", "type": "quantitative", "title": "Hour of day"},
    "y": {"field": "v", "type": "quantitative", "title": "Guests per hour"},
    "color": {"field": "series", "type": "nominal", "title": null}
  }
}
```

A capacity vs demand curve is the simplest honest picture of a park day. Capacity is roughly a flat line: a ride serves about the same number per hour from open to close. Demand is a hump: a rope-drop surge for the headline ride, a lull at lunch, a second bump after the afternoon parade, and a drop at dusk. Wherever demand sits above the line, the gap accumulates as a queue; wherever it sits below, the queue drains.

Operations teams spend the day pushing the hump down toward the line. [Virtual queues](../human-factors/virtual-queues.md) and timed-return products such as Lightning Lane move demand from the morning peak to the afternoon trough. [Entertainment scheduling](../operations-business/entertainment-scheduling.md) pulls crowds away from rides at chosen times; a parade is a demand sink. Posted waits that run high do the same job quietly.

Planners draw the same curves for the whole park on the [design day](../masterplanning/design-day.md), and use them to decide how much ride capacity to build in [capacity planning](../masterplanning/capacity-planning.md). Forecasters such as Touring Plans estimate the demand curve from school calendars, hotel bookings and economic data.

## Explore further
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
- `wikipedia-lightning-lane` — Lightning Lane
- `disneyblog-capacity-analysis-methodology` — Capacity Analysis Methodology
