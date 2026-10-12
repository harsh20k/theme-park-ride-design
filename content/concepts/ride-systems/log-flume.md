---
id: log-flume
title: Log Flume
land: ride-systems
level: beginner
abstraction: concept
parent: water-rides
children: []
relations:
  - { type: example-of, target: arrow-dynamics }
  - { type: applies-to, target: water-ride-hydraulics }
  - { type: applies-to, target: lift-systems }
  - { type: enables, target: photo-moments }
  - { type: applies-to, target: load-unload-design }
summary: Hollow logs float a trough, climb conveyor lifts and finish with a drop and splashdown; Arrow's 1963 formula.
tags: [water-rides, flume, log, arrow, splashdown]
visuals: [mermaid]
interactive_idea: "Adjust drop height and boat weight; the sim shows splash size and how far the spray reaches a bridge of onlookers."
sources: [wikipedia-log-flume, intamin-flume-ride, wikipedia-pirates-of-the-caribbean-attraction]
confidence: high
---
```mermaid
flowchart LR
  L[Load dock] --> T1[Trough drifts on current]
  T1 --> C1[Conveyor lift]
  C1 --> T2[Elevated trough and small dip]
  T2 --> C2[Second lift]
  C2 --> D[Main drop]
  D --> S[Splashdown pool]
  S --> B[Brake run and return]
  B --> L
```

A log flume is a shallow trough of flowing water, a few conveyor lifts, and at least one big drop into a pool. Boats are shaped like hollow logs and have no motor; the current carries them, rubber-belted lifts haul them uphill, and the final splashdown both stops them and soaks the riders. Arrow Development, later [Arrow Dynamics](../history/arrow-dynamics.md), built the first, El Aserradero at Six Flags Over Texas in 1963, and it still runs.

The ride is a lesson in [water-ride hydraulics](../ride-engineering/water-ride-hydraulics.md). Trough width and water depth set boat speed; the splash pool's depth and the angle of the belting along its edge decide how big the wave is and whether it lands on riders or on the viewing bridge. Lifts are the one mechanical element and behave like any coaster [lift system](../ride-engineering/lift-systems.md). Intamin's catalogue flumes add vertical lifts, turntables, a swing-splash spike and a diagonal drop.

The splashdown is one of the park's reliable [photo moments](../human-factors/photo-moments.md). Loading from a moving dock with boats of six or eight sets throughput ([load and unload design](../operations-business/load-unload-design.md)). The same flume technology, with the drops used as story beats, carries Pirates of the Caribbean.

## Explore further
- `wikipedia-log-flume` — Log flume ride (Wikipedia)
- `intamin-flume-ride` — Intamin Flume Ride
- `wikipedia-pirates-of-the-caribbean-attraction` — Pirates of the Caribbean attraction (Wikipedia)
