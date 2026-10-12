---
id: water-coaster
title: Water Coaster
land: ride-systems
level: intermediate
abstraction: concept
parent: water-rides
children: []
relations:
  - { type: applies-to, target: friction-and-drag }
  - { type: applies-to, target: brake-types }
  - { type: applies-to, target: lsm-lim-launch }
  - { type: enables, target: attraction-mix }
  - { type: applies-to, target: train-mass-and-weather }
summary: A boat that rides coaster track between stretches of water, with the splashdown as its brake.
tags: [water-rides, water-coaster, mack, intamin, hybrid]
visuals: [mermaid]
interactive_idea: "Lay out alternating track and water segments; the energy plot shows how much speed each splash section bleeds off."
sources: [wikipedia-water-coaster, intamin-water-coaster, mack-rides-powersplash]
confidence: high
---
```mermaid
flowchart LR
  L[Load from water] --> V[Vertical or chain lift]
  V --> T1[Coaster track: drops and turns]
  T1 --> W1[Spillwater section slows boat]
  W1 --> T2[More track]
  T2 --> W2[Final splashdown]
  W2 --> L
```

A water coaster is a roller coaster whose train is a boat. The boat has coaster wheels and runs on steel track through drops and banked turns, then sails off the end of the track into a flooded trough, where drag through the water slows it before the next lift or the station ([friction and drag](../ride-engineering/friction-and-drag.md)). Those water sections are the ride's [brakes](../ride-engineering/brake-types.md), its loading system and its splash effect at once.

Mack Rides popularised the format with Journey to Atlantis at SeaWorld Orlando (1998) and Poseidon at Europa-Park (2000); Intamin's Divertical at Mirabilandia (2012) is billed as the tallest, with a vertical lift and 10-seat boats. The latest twist is Mack's Power Splash, an [LSM](../ride-systems/lsm-lim-launch.md) shuttle boat fired forward and backward up two spikes before a splash into a pool whose water level rises to meet it.

Boats are heavy, and when full of people and water heavier still, so [train mass and weather](../ride-engineering/train-mass-and-weather.md) matter more than on a dry coaster and valley risks are checked carefully. For a park the type is useful because it counts twice in the [attraction mix](../masterplanning/attraction-mix.md): a thrill coaster for the enthusiasts and a soak for the summer crowd.

## Explore further
- `wikipedia-water-coaster` — Water coaster (Wikipedia)
- `intamin-water-coaster` — Intamin Water Coaster
- `mack-rides-powersplash` — Mack Rides Power Splash
