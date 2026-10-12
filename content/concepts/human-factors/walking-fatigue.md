---
id: walking-fatigue
title: Walking Fatigue & Rest
land: human-factors
level: beginner
abstraction: concept
parent: comfort-and-body
children: []
relations:
  - { type: applies-to, target: rest-areas }
  - { type: applies-to, target: hub-and-spoke }
  - { type: applies-to, target: parking-and-transit }
  - { type: applies-to, target: length-of-stay }
  - { type: applies-to, target: monorail-and-people-movers }
summary: Park guests walk for hours on hard surfaces, and the layout decides how much of that walking is wasted.
tags: [fatigue, walking, layout, rest]
visuals: [mermaid]
interactive_idea: "Trace a day's route on a park plan; a step counter and a 'foot pain' meter rise, and benches you pass reset part of it."
sources: [fruin-pedestrian-planning-1971, fhwa-fruin-walkway-los]
confidence: medium
---
```mermaid
flowchart LR
  P[Parking and transit] --> E[Entry walk]
  E --> H[Hub]
  H --> L1[Land A]
  H --> L2[Land B]
  L1 --> H
  L2 --> H
  H --> X[Exit walk]
  R1[Rest area] -.-> L1
  R2[Rest area] -.-> L2
```

A theme park day is a long hike in disguise. Guests walk from distant parking, across the entry plaza, between lands and through queues, almost all on concrete or asphalt. The exact distance varies by park and by guest, and published step counts are mostly anecdotal, so treat specific mileage claims as unverified. What is certain is that by late afternoon feet hurt, tempers shorten and spending drops.

Layout is the main cause and the main cure. A [hub-and-spoke](../masterplanning/hub-and-spoke.md) plan keeps every land a short walk from a central node and avoids the long back-tracks of a linear park. [People movers](../ride-systems/monorail-and-people-movers.md) and trams absorb the [parking](../masterplanning/parking-and-transit.md) walk. Fruin's pedestrian work gives planners walking speeds and level-of-service grades, so a crowded path that forces shuffling can be widened before it exhausts everyone on it.

Rest matters as much as distance. [Rest areas](../masterplanning/rest-areas.md) with shade and seating near big-ride exits let groups regroup and recover. Benches along paths, not just in plazas, let older guests stop without leaving the flow. Operators notice that well-rested guests stay longer, which links directly to [length of stay](../operations-business/length-of-stay.md).

## Explore further
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (book)
- `fhwa-fruin-walkway-los` — FHWA: Pedestrian level of service tables adapted from Fruin
