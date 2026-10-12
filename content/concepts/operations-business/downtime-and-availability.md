---
id: downtime-and-availability
title: Downtime & Availability
land: operations-business
level: intermediate
abstraction: concept
parent: throughput-and-queueing
children: []
relations:
  - { type: causes, target: guest-recovery }
  - { type: applies-to, target: figure-reliability }
  - { type: enables, target: predictive-maintenance }
  - { type: applies-to, target: emergency-stop-and-evacuation }
  - { type: limits, target: capacity-vs-demand }
summary: Availability is the share of operating hours a ride actually runs; every stop erases capacity that can never be recovered.
tags: [operations, reliability, downtime, maintenance]
visuals: [formula, chart]
interactive_idea: "A day-long timeline of a ride: click to insert breakdowns of various lengths and watch availability, lost riders and the recovering queue update."
sources: [blogmickey-wsj-ride-downtime-2022, hersheypark-skyrush-winter-maintenance, input-wait-time-trackers-2022]
confidence: high
---
> **Formula** $A = \dfrac{MTBF}{MTBF + MTTR}$
> where
> - $A$ is availability, the fraction of scheduled operating time the ride is actually running
> - $MTBF$ is mean time between failures, the average run before a stop
> - $MTTR$ is mean time to repair or reset, the average length of a stop

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: riders lost per 12-hour day at 1,500 riders per hour",
  "width": 300, "height": 140,
  "data": {"values": [
    {"availability": "99%", "lost": 180}, {"availability": "97%", "lost": 540},
    {"availability": "95%", "lost": 900}, {"availability": "90%", "lost": 1800}, {"availability": "85%", "lost": 2700}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "availability", "type": "nominal", "title": "Availability", "sort": null},
    "y": {"field": "lost", "type": "quantitative", "title": "Riders not served"}
  }
}
```

Downtime is any period during operating hours when a ride is not taking guests. Availability is the opposite measure: the fraction of the day the ride is open. Engineers track it with two averages, the mean time between failures and the mean time to repair; the formula above turns them into a percentage. Short, frequent stops and long, rare ones can give the same number but feel very different in the queue.

Lost capacity is gone for good. A ride cannot run faster later to catch up, so every minute down becomes a longer line for the rest of the day, which is why [capacity vs demand](../operations-business/capacity-vs-demand.md) curves bend so sharply after a stop. Causes range from genuine mechanical faults to sensor trips, weather holds and guests dropping phones onto track; Disney has pointed to those last causes when third-party data showed stoppages rising at its U.S. parks between 2018 and 2022.

Operations respond on three fronts. [Preventive maintenance](../operations-business/preventive-maintenance.md) reduces the failure rate. Trained crews and clear [emergency stop and evacuation](../safety-standards/emergency-stop-and-evacuation.md) procedures shorten the reset. And [guest recovery](../operations-business/guest-recovery.md), such as return passes, repairs the goodwill.

## Explore further
- `blogmickey-wsj-ride-downtime-2022` — Disney says ride reliability remains strong despite reported increase in downtime, November 2022
- `hersheypark-skyrush-winter-maintenance` — Behind the Scenes of Winter Maintenance on Skyrush at Hersheypark, daily and seasonal inspection routine
- `input-wait-time-trackers-2022` — The amateur data scientists tracking Disney World's lines, how third parties detect stoppages
- `wikipedia-queueing-theory` — Queueing theory, why lost capacity turns into much longer lines
