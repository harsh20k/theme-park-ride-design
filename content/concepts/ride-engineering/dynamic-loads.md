---
id: dynamic-loads
title: Dynamic Loads & Vibration
land: ride-engineering
level: advanced
abstraction: concept
parent: structures-and-materials
children: []
relations:
  - { type: applies-to, target: vehicle-suspension }
  - { type: applies-to, target: rough-rides }
  - { type: applies-to, target: noise-exposure }
  - { type: applies-to, target: en-13814 }
  - { type: applies-to, target: simulation-and-surrogates }
summary: A moving train shakes the structure; if it shakes at the structure's own rhythm, loads multiply.
tags: [vibration, resonance, damping, dynamics, structures]
visuals: [formula]
interactive_idea: "Tune a column's stiffness and mass against the wheel-passing frequency; a gauge shows the dynamic amplification climbing toward resonance."
sources: [wikipedia-vibration, pendrill-eager-jerk-snap-2020, wikipedia-bolliger-mabillard, wikipedia-wooden-roller-coaster]
confidence: high
---
> **Formula** $f_n = \dfrac{1}{2\pi}\sqrt{\dfrac{k}{m}}$
> where:
> - $f_n$ — the natural frequency at which a structure or body part wants to vibrate
> - $k$ — its stiffness, how hard it pushes back per unit of deflection
> - $m$ — the mass that is moving

Static analysis treats the train as a weight parked on the track. Real trains arrive at speed and leave the structure ringing. Every column and track span has a natural frequency, set by stiffness and mass as the formula shows, and if the train excites a member near that frequency the deflection can grow many times the static value. Steel structures are lightly damped, typically under five per cent of critical, so resonance is a real concern.

Designers answer in three ways: stiffen or add mass to move natural frequencies away from the wheel-passing rhythm, add damping, and verify with strain gauges during commissioning. Bolliger & Mabillard fill some spines with damping material to tame the roar and the vibration. Wooden coasters take the opposite route: the structure flexes inches to feet under a train, and that give is its shock absorber.

The rider is also a structure. Pendrill and Eager note that soft body parts have their own resonances a designer should avoid exciting, so vibration ties into [vehicle suspension](../ride-engineering/vehicle-suspension.md) and the perception of [rough rides](../ride-engineering/rough-rides.md). [EN 13814](../safety-standards/en-13814.md) requires dynamic effects in the load cases, [simulation](../ai-future/simulation-and-surrogates.md) predicts them, and the sound they make is a [noise exposure](../human-factors/noise-exposure.md) question.

## Explore further
- `wikipedia-vibration` — Vibration (natural frequency, resonance, damping ratio and amplification)
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration: forces in our bodies during a roller coaster ride
- `wikipedia-bolliger-mabillard` — Bolliger & Mabillard (box spine filled with sound-damping material)
- `wikipedia-wooden-roller-coaster` — Wooden roller coaster (designed-in flex of track and structure)
