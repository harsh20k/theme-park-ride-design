---
id: brake-types
title: Brake Types
land: ride-engineering
level: intermediate
abstraction: concept
parent: braking-and-control-hardware
children: []
relations:
  - { type: applies-to, target: redundancy-and-fail-safe }
  - { type: applies-to, target: finale-design }
  - { type: example-of, target: hyper-and-giga-era }
  - { type: applies-to, target: noise-exposure }
  - { type: applies-to, target: preventive-maintenance }
summary: Skid plates, clamped fins and permanent magnets each slow a train in a different way.
tags: [brakes, magnetic, eddy-current, friction, hardware]
visuals: [formula]
interactive_idea: "Send a train through a brake run and switch between friction and magnetic braking; compare the deceleration curves and stopping distance."
sources: [wikipedia-brake-run, wikipedia-eddy-current-brake, velocity-magnetics-eddy-brakes, pendrill-stopping-train-2012]
confidence: high
---
> **Formula** $F_{\text{eddy}} \approx c\,v$
> where:
> - $F_{\text{eddy}}$ — the drag force a magnetic brake puts on the train
> - $c$ — a constant set by magnet strength, fin material and geometry
> - $v$ — the train's speed; at zero speed the force is zero, so the brake cannot hold a stopped train

Every coaster must shed the energy its lift bought. The oldest is the skid brake: a bar between the rails lifts to rub the train's underside, as on Kennywood's Thunderbolt. Modern friction brakes clamp metal fins hanging from the cars; they are usually arranged to close when power or air is lost, so a fault stops the train, and they come in redundant sets. These can hold a train still, which is why block brakes are friction brakes.

Magnetic brakes never touch. Rows of neodymium magnets on the track straddle copper or aluminium fins on the train; the moving fin induces eddy currents whose field opposes the motion, and kinetic energy becomes heat in the fin. The force rises with speed, so deceleration is smooth and self-limiting, but it fades to nothing as the train stops, so a friction brake or drive tyre finishes the job. Permanent magnets need no power. Intamin fitted them to Millennium Force in 2000, stopping a train from 65 miles per hour in about six seconds; Bolliger & Mabillard followed from 2004.

Brake choice shapes [finale design](../story-experience/finale-design.md), the squeal behind [noise exposure](../human-factors/noise-exposure.md), pad changes in [preventive maintenance](../operations-business/preventive-maintenance.md), and must satisfy [redundancy and fail-safe](../safety-standards/redundancy-and-fail-safe.md) rules.

## Explore further
- `wikipedia-brake-run` — Brake run (skid, fin and magnetic brakes; trim versus block brakes)
- `wikipedia-eddy-current-brake` — Eddy current brake (why the force scales with speed and cannot hold at rest)
- `velocity-magnetics-eddy-brakes` — Velocity Magnetics: frictionless motion control for amusement attractions
- `pendrill-stopping-train-2012` — Stopping a roller coaster train (accelerometer data through a magnetic brake run)
