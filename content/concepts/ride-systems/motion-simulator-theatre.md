---
id: motion-simulator-theatre
title: Motion Simulator Theatre
land: ride-systems
level: beginner
abstraction: concept
parent: simulators-and-motion-bases
children: []
relations:
  - { type: example-of, target: borrowed-crafts }
  - { type: applies-to, target: pre-show }
  - { type: enables, target: ip-adaptation }
  - { type: applies-to, target: retheming-and-overlays }
  - { type: applies-to, target: motion-sickness }
summary: An enclosed cabin on a hexapod faces a screen; cheap to retheme because the film is the ride.
tags: [simulators, cabin, star-tours, hexapod, retheme]
visuals: [mermaid]
interactive_idea: "Swap the film in a virtual Star Tours cabin and re-time the motion track; the tool scores how well cues match the new footage."
sources: [wikipedia-star-tours, wikipedia-motion-simulator, simworx-products]
confidence: high
---
```mermaid
flowchart LR
  Q[Queue and pre-show] --> C[Cabin loads 40 riders]
  C --> D[Doors close, screen lights]
  D --> M[Hexapod plays motion track]
  M --> F[Film plays in sync]
  F --> U[Cabin returns to level, doors open]
  U --> Q
```

A motion simulator theatre is the closest a theme park gets to a pilot's training device. A sealed cabin of twenty to sixty seats sits on a hexapod, with a screen filling its front wall. When the doors close, the cabin pitches, rolls and heaves in time with the film: a flight, a chase, a crash. Because the cabin is enclosed, nothing outside gives the game away, and the motion profile can be aggressive, which is also why these rides lead the field in [motion sickness](../human-factors/motion-sickness.md) complaints.

Disneyland's Star Tours (1987) set the pattern. Imagineering bought four military-grade flight simulators and rebuilt them as 40-seat Starspeeder cabins on hydraulic six-axis bases, a textbook case of a [borrowed craft](../story-experience/borrowed-crafts.md). Simworx and other suppliers now sell the cabins as catalogue products with film libraries.

The format's strength is that the ride is the film. A new movie and a new motion track turn an old attraction into a new one, the cheapest [retheme](../operations-business/retheming-and-overlays.md) in the business and a natural home for [IP adaptation](../story-experience/ip-adaptation.md). The downside is that a small screen in a box can feel dated, so the [pre-show](../story-experience/pre-show.md) and queue do much of the world-building.

## Explore further
- `wikipedia-star-tours` — Star Tours (Wikipedia)
- `wikipedia-motion-simulator` — Motion simulator (Wikipedia)
- `simworx-products` — Simworx attractions catalogue
