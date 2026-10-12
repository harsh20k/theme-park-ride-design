---
id: lateral-g
title: Lateral G
land: ride-engineering
level: intermediate
abstraction: sub-concept
parent: g-force-basics
children: []
relations:
  - { type: applies-to, target: banking }
  - { type: causes, target: rough-rides }
  - { type: applies-to, target: semicircular-canals }
  - { type: applies-to, target: heartline }
  - { type: applies-to, target: vehicle-suspension }
summary: Lateral g is the sideways shove in a turn; banking turns it into a push through the seat.
tags: [g-force, lateral, banking, turns, comfort]
visuals: [formula]
interactive_idea: "Set a turn's speed and radius, then slide the bank angle until the lateral g meter drops to zero."
sources: [wikipedia-cant-superelevation, wikipedia-roller-coaster-safety, coasterpedia-otsr, hyperphysics-centripetal-force]
confidence: high
---
> **Formula** $\tan\theta = \dfrac{v^2}{g\,r}$
> where:
> - $\theta$ — the bank angle that leaves no sideways force on the rider
> - $v$ — the train's speed through the turn
> - $g$ — the acceleration of gravity
> - $r$ — the radius of the turn

Lateral g, written Gy, is the sideways component of the push on a rider. It shows up in flat turns, in badly matched transitions, and in any element where the track curves without being tilted enough. Human bodies are weak sideways: the neck is a slender column, there is little padding on the shoulders, and a sideways jolt turns straight into head motion. Published design practice keeps lateral acceleration generally under about 2 g, far below the positive-g allowance.

The main tool is [banking](../ride-engineering/banking.md). Tilt the track by the angle in the formula and the sideways force vanishes; the rider is pressed straight down into the seat instead. Railways call this superelevation and run slightly under the balance angle, a small cant deficiency, so riders feel a hint of the turn. Coaster designers go further with [heartline](../ride-engineering/heartline.md) geometry, rolling the track about the rider's chest so that the roll itself adds no sideways shove.

When lateral g is left in, especially as quick jolts, riders' heads strike the restraints: the classic [rough ride](../ride-engineering/rough-rides.md). The [semicircular canals](../human-factors/semicircular-canals.md) sense the rotation that comes with it, which is why lateral motion contributes so strongly to queasiness.

## Explore further
- `wikipedia-cant-superelevation` — Cant (road/rail): superelevation, balance speed and cant deficiency on railways
- `hyperphysics-centripetal-force` — Centripetal Force (HyperPhysics reference page with banked-curve example)
- `coasterpedia-otsr` — Over-the-shoulder restraint (Coasterpedia entry on headbanging and vest harnesses)
- `wikipedia-roller-coaster-safety` — Roller coaster (mechanics and safety sections, including typical lateral limits)
