---
id: dispatch-interval
title: Dispatch Interval
land: operations-business
level: intermediate
abstraction: sub-concept
parent: throughput-math
children: []
relations:
  - { type: part-of, target: throughput-math }
  - { type: applies-to, target: ride-control-systems }
  - { type: causes, target: perceived-vs-actual-wait }
summary: The seconds between one vehicle leaving the station and the next; the single operational number with the biggest effect on hourly capacity.
tags: [sample-content, operations-business, dispatch, throughput, station]
visuals:
  - { type: chart, title: "Riders per hour vs dispatch interval", alt: "Line chart showing riders per hour for a 24-seat train falling from 1920 at a 45-second interval to 480 at 180 seconds" }
sources:
  - { title: "Theme Park Design & The Art of Themed Entertainment", author: "David Younger", year: 2016 }
  - { title: "Roller Coasters, Flumes and Flying Saucers", author: "Robert Reynolds", year: 1999 }
confidence: high
---

```chart
%% title: Riders per hour vs dispatch interval | alt: Line chart showing riders per hour for a 24-seat train falling from 1920 at a 45-second interval to 480 at 180 seconds
{
  "mark": { "type": "line", "point": true },
  "data": { "values": [
    { "interval": 45, "riders": 1920 },
    { "interval": 60, "riders": 1440 },
    { "interval": 75, "riders": 1152 },
    { "interval": 90, "riders": 960 },
    { "interval": 105, "riders": 823 },
    { "interval": 120, "riders": 720 },
    { "interval": 135, "riders": 640 },
    { "interval": 150, "riders": 576 },
    { "interval": 165, "riders": 524 },
    { "interval": 180, "riders": 480 }
  ] },
  "encoding": {
    "x": { "field": "interval", "type": "quantitative", "title": "Dispatch interval (seconds)" },
    "y": { "field": "riders", "type": "quantitative", "title": "Riders per hour (24-seat train)" }
  }
}
```

The dispatch interval is the time between consecutive vehicles leaving the station, set partly by the ride and partly by people. The ride fixes a floor: a block system will not release a train until the one ahead has cleared the next block, and the [ride control system](../safety-standards/ride-control-systems.md) enforces that whatever operators do. Above that floor, the interval is a human number made of unloading, loading, restraint checks and pressing the button. The chart shows why it matters: capacity falls as one over the interval, so shaving 90 seconds to 60 adds 480 riders an hour on a 24-seat train, while a slow crew drifting to 120 seconds loses 240. That is why stations get dual loading platforms, separate unload areas and drilled staff. Every slipped dispatch shows up in the queue, making interval discipline a root cause of [perceived versus actual wait](../human-factors/perceived-vs-actual-wait.md) complaints. It is the lever in [throughput math](../operations-business/throughput-math.md) that operations can move day to day.

## Explore further
- [Throughput Math](../operations-business/throughput-math.md) — the formula this number plugs into.
- [Ride Control Systems](../safety-standards/ride-control-systems.md) — the block logic that sets the minimum interval.
