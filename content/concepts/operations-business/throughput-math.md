---
id: throughput-math
title: Throughput Math
land: operations-business
level: beginner
abstraction: concept
parent: throughput-and-queueing
children: [dispatch-interval, load-unload-design]
relations:
  - { type: applies-to, target: capacity-planning }
  - { type: limits, target: attraction-mix }
  - { type: applies-to, target: omnimover }
  - { type: enables, target: design-day }
  - { type: contrasts-with, target: duration-neglect }
summary: Hourly ride capacity is riders per dispatch multiplied by dispatches per hour, then cut by real-world losses.
tags: [operations, capacity, throughput, math]
visuals: [formula, chart]
interactive_idea: "Type in seats per vehicle, vehicles and dispatch interval; a counter shows theoretical hourly capacity and a slider for load efficiency shows the operational number."
sources: [disneyblog-capacity-analysis-methodology, little-1961-queuing-formula]
confidence: high
---
> **Formula** $THRC = R \times \dfrac{3600}{t_d}$
> where
> - $THRC$ is theoretical hourly ride capacity, riders per hour
> - $R$ is riders per dispatch, seats per vehicle times vehicles sent together
> - $t_d$ is the dispatch interval in seconds, the time between one departure and the next
> - $3600 / t_d$ is simply dispatches per hour

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: how dispatch interval changes hourly capacity for a 24-seat train",
  "width": 300, "height": 140,
  "data": {"values": [
    {"interval_s": 45, "riders_per_hour": 1920}, {"interval_s": 60, "riders_per_hour": 1440},
    {"interval_s": 75, "riders_per_hour": 1152}, {"interval_s": 90, "riders_per_hour": 960},
    {"interval_s": 120, "riders_per_hour": 720}, {"interval_s": 150, "riders_per_hour": 576}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "interval_s", "type": "quantitative", "title": "Dispatch interval, seconds"},
    "y": {"field": "riders_per_hour", "type": "quantitative", "title": "Riders per hour"}
  }
}
```

Throughput math answers one question: how many people can this ride serve in an hour? Multiply the riders in each dispatch by the number of dispatches you can fit into sixty minutes. A 24-seat train leaving every 60 seconds gives 1,440 riders per hour; stretch the interval to 90 seconds and you lose a third of the capacity without changing the ride at all.

Operators call the clean number theoretical hourly ride capacity, or THRC. The real figure, operational capacity, is lower because seats go empty, parties do not fit the row layout, and rides stop. That is why continuous-loading systems such as the [Omnimover](../ride-systems/omnimover.md) are prized: no dispatch gap at all.

The two levers you control are the [dispatch interval](../operations-business/dispatch-interval.md) and [load and unload design](../operations-business/load-unload-design.md). Both feed the master planner's [design day](../masterplanning/design-day.md) and the park's overall [capacity planning](../masterplanning/capacity-planning.md).

## Explore further
- `disneyblog-capacity-analysis-methodology` — Capacity Analysis Methodology, a transparent fan-built calculator for theoretical and operational capacity
- `little-1961-queuing-formula` — A Proof for the Queuing Formula: L = λW, John Little, Operations Research, 1961
- `wikipedia-queueing-theory` — Queueing theory, the broader mathematics of arrivals meeting limited service
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines, David Maister, 1985
