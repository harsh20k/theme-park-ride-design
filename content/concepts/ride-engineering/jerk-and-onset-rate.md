---
id: jerk-and-onset-rate
title: Jerk & Onset Rate
land: ride-engineering
level: advanced
abstraction: concept
parent: forces-and-tolerance
children: []
relations:
  - { type: applies-to, target: spline-transitions }
  - { type: applies-to, target: clothoid-loop }
  - { type: causes, target: head-and-neck-loads }
  - { type: applies-to, target: vehicle-suspension }
  - { type: applies-to, target: lsm-lim-launch }
summary: Jerk is how fast acceleration changes; sudden onset hurts more than the peak itself.
tags: [jerk, physics, comfort, transitions, biomechanics]
visuals: [formula, mermaid]
interactive_idea: "Draw an acceleration curve by hand; the widget differentiates it live and highlights spikes in jerk and snap."
sources: [pendrill-eager-jerk-snap-2020, wikipedia-jerk-physics, wikipedia-track-transition-curve, liseberg-stengel-coasters]
confidence: high
---
> **Formula** $j = \dfrac{da}{dt}$
> where:
> - $j$ — jerk, the rate of change of acceleration, in metres per second cubed
> - $a$ — the rider's acceleration
> - $t$ — time

```mermaid
flowchart LR
  P["position"] -->|"d/dt"| V["velocity"]
  V -->|"d/dt"| A["acceleration: what you feel"]
  A -->|"d/dt"| J["jerk: how fast the feel changes"]
  J -->|"d/dt"| S["snap: how the jerk itself changes"]
```

Your muscles hold posture by balancing against the forces they expect. When the force changes faster than they can respond, they overshoot, and the head whips. That is jerk: the time derivative of acceleration, measured in metres per second cubed or in g per second. Pendrill and Eager show with real dive-coaster data that riders experience jerk differently from acceleration, and that the next derivative, snap, matters as well, because soft body parts have their own resonant frequencies.

This is why a circular loop is unpleasant even when its peak g is legal: the curvature, and so the force, jumps at the entry. The [clothoid loop](../ride-engineering/clothoid-loop.md) and railway-style [spline transitions](../ride-engineering/spline-transitions.md) grow curvature linearly with distance, giving constant jerk instead of a step. Elevator studies suggest around 2 metres per second cubed feels acceptable and 6 intolerable, though coaster values are higher and context dependent.

Launches are a jerk problem too: an [LSM launch](../ride-systems/lsm-lim-launch.md) can ramp force smoothly, while a cable catch car snaps. Unmanaged jerk feeds directly into [head and neck loads](../ride-engineering/head-and-neck-loads.md) and into what [vehicle suspension](../ride-engineering/vehicle-suspension.md) must absorb.

## Explore further
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration: forces in our bodies during a roller coaster ride (open-access paper)
- `wikipedia-jerk-physics` — Jerk (physics): definition, units, transition curves and human comfort limits
- `wikipedia-track-transition-curve` — Track transition curve (railway easements and the limits of the Euler spiral)
- `liseberg-stengel-coasters` — Werner Stengel and the Liseberg roller coasters (clothoid and heartline explained)
