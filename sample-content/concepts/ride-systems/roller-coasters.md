---
id: roller-coasters
title: Roller Coasters
land: ride-systems
level: beginner
abstraction: super-concept
parent: null
children: [launched-coasters]
relations:
  - { type: applies-to, target: g-force-basics }
  - { type: contrasts-with, target: early-coasters }
summary: Roller coasters are gravity-driven track rides; the family splits by structure (wooden, steel, hybrid) and by how the train gains its energy (lift or launch).
tags: [ride-systems, coasters, sample-content]
visuals:
  - { type: mermaid, title: "The roller coaster family", alt: "Tree diagram splitting roller coasters by structure into wooden, steel and hybrid, and by energy source into lift hill and launch" }
interactive_idea: null
sources:
  - { title: "Roller Coaster Database (RCDB)", author: "Duane Marden", url: "https://rcdb.com" }
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
confidence: high
---

```mermaid
%% title: The roller coaster family | alt: Tree diagram splitting roller coasters by structure into wooden, steel and hybrid, and by energy source into lift hill and launch
flowchart TD
  RC[Roller coasters]
  RC --> S[By structure]
  RC --> E[By energy source]
  S --> W[Wooden]
  S --> ST[Steel]
  S --> H[Hybrid: steel track on wood]
  E --> L[Lift hill: chain or cable]
  E --> LA[Launch: LSM, hydraulic, pneumatic]
  L --> G[Gravity does the rest]
  LA --> G
```

A roller coaster is a train of cars that rides a fixed track and is powered mostly by gravity. Energy is put into the train once, either by hauling it up a lift hill with a chain or cable, or by firing it out of the station as in [launched coasters](../ride-systems/launched-coasters.md). From that point the train coasts, trading height for speed and back again until the brakes catch it.

Designers usually sort coasters two ways. By structure, there are wooden coasters with laminated timber track, steel coasters with tubular rails, and hybrids that bolt steel track onto a wooden frame. By energy source, there are lifts and launches. Every branch of the family obeys the same physics, which is why [g-force basics](../ride-engineering/g-force-basics.md) apply to a gentle family coaster just as much as to a record-breaker.

The modern coaster descends from the gravity railways and scenic railways described under [early coasters](../history/early-coasters.md), and its shapes are still governed by [track geometry](../ride-engineering/track-geometry.md).

## Explore further
- [Launched Coasters](../ride-systems/launched-coasters.md) — how a train gets its energy in seconds instead of minutes.
- [Early Coasters](../history/early-coasters.md) — where the family came from.
