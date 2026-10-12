---
id: throughput-math
title: Throughput Math
land: operations-business
level: beginner
abstraction: concept
parent: throughput-and-queueing
children: [dispatch-interval]
relations:
  - { type: applies-to, target: perceived-vs-actual-wait }
  - { type: enables, target: wait-time-prediction }
summary: Riders per hour equals riders per vehicle times vehicles per hour, and vehicles per hour comes from how often you can send one.
tags: [sample-content, operations-business, throughput, capacity, formula, toy]
visuals:
  - { type: formula, title: "Hourly capacity", alt: "Three formula lines: hourly capacity equals riders per vehicle times vehicles per hour; vehicles per hour equals 3600 divided by dispatch interval in seconds; worked example of 24 riders every 90 seconds giving 960 riders per hour" }
interactive_idea: "Change seats, trains and dispatch time and see riders per hour and the queue length."
sources:
  - { title: "Theme Park Design & The Art of Themed Entertainment", author: "David Younger", year: 2016 }
  - { title: "Roller Coasters, Flumes and Flying Saucers", author: "Robert Reynolds", year: 1999 }
confidence: high
---

```formula
%% title: Hourly capacity | alt: Three formula lines: hourly capacity equals riders per vehicle times vehicles per hour; vehicles per hour equals 3600 divided by dispatch interval in seconds; worked example of 24 riders every 90 seconds giving 960 riders per hour
\text{riders per hour} = \text{riders per vehicle} \times \text{vehicles per hour}
\text{vehicles per hour} = \frac{3600}{\text{dispatch interval (s)}}
\text{example: } 24 \times \frac{3600}{90} = 24 \times 40 = 960 \text{ riders per hour}
```

The capacity of a ride comes down to two numbers: how many people fit in a vehicle, and how often a vehicle leaves the station. Multiply them and you have riders per hour. The second number is usually expressed as a [dispatch interval](../operations-business/dispatch-interval.md), the gap in seconds between one train leaving and the next, so vehicles per hour is simply 3600 divided by that gap. A 24-seat coaster train dispatched every 90 seconds gives 40 trains an hour and 960 riders an hour. The formula is simple, but every term hides operational reality. Seats go empty when groups do not fill a row, and intervals stretch when a guest fumbles a restraint, so the theoretical number is a ceiling that operators track actual throughput against. Knowing capacity turns a queue length into an expected wait, which is the basis of [wait-time prediction](../ai-future/wait-time-prediction.md) and the starting point for the [perceived versus actual wait](../human-factors/perceived-vs-actual-wait.md) problem.

## Explore further
- [Dispatch Interval](../operations-business/dispatch-interval.md) — the term that operators can actually change.
- [Throughput & Queueing](../operations-business/throughput-and-queueing.md) — why the queue is a buffer.
