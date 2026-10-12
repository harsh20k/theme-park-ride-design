---
id: multi-launch-coasters
title: Multi-Launch & Multi-Pass Coasters
land: ride-systems
level: intermediate
abstraction: concept
parent: roller-coasters
children: []
relations:
  - { type: applies-to, target: block-system }
  - { type: applies-to, target: ride-beat-sheet }
  - { type: enables, target: tension-and-release }
  - { type: applies-to, target: drive-tires-and-transfer-tracks }
  - { type: applies-to, target: ride-control-systems }
summary: Several LSM launches, switch tracks and spikes let one coaster tell a multi-act story in a small footprint.
tags: [coasters, multi-launch, switch-track, lsm, storytelling]
visuals: [mermaid]
interactive_idea: "Build a multi-launch layout from blocks (launch, spike, switch, course); the tool checks block logic and plots the beat sheet."
sources: [mack-rides-stryker, gerstlauer-infinity-coaster, intamin-lsm-launch-coaster]
confidence: high
---
```mermaid
flowchart LR
  S[Station] --> L1[Launch 1 forward]
  L1 --> C1[Course section A]
  C1 --> L2[Launch 2 forward]
  L2 --> SP[Vertical spike]
  SP -->|rolls back| L2b[Launch 2 backward]
  L2b --> SW[Switch track or turntable]
  SW --> L3[Launch 3 forward]
  L3 --> C2[Course section B]
  C2 --> S
```

A multi-launch coaster uses electromagnetic launches more than once, and often in both directions. Because an [LSM](../ride-systems/lsm-lim-launch.md) section can accelerate a train whichever way it is travelling, a layout can throw the train up a dead-end spike, let it roll back through the same launch, catch it, and fire it off somewhere new. Switch tracks and turntables move the train onto another path mid-ride. The train's energy no longer peaks once at the top of a lift; it is topped up wherever the designer wants a new act.

That makes these rides natural storytellers. Each launch is a fresh beat, which maps directly onto a [ride beat sheet](../story-experience/ride-beat-sheet.md): a slow themed lead-in, a surprise launch, a false ending on a spike, a bigger launch for the finale ([tension and release](../story-experience/tension-and-release.md)). Intamin's Taron at Phantasialand (2016), Mack's Stryker-based Voltron Nevera at Europa-Park and Gerstlauer's Infinity Coasters with "pendulum" launches are the reference examples.

The cost is control complexity. Several trains, launches that can run backward and track switches mean a far more elaborate [block system](../ride-engineering/block-system.md), with [switch tracks](../ride-engineering/drive-tires-and-transfer-tracks.md) and launch zones all interlocked in the [ride control system](../safety-standards/ride-control-systems.md) so no two trains can ever meet.

## Explore further
- `mack-rides-stryker` — Mack Rides Stryker coaster system
- `gerstlauer-infinity-coaster` — Gerstlauer Infinity Coaster
- `intamin-lsm-launch-coaster` — Intamin LSM Launch Coaster
