---
id: risk-assessment
title: Risk Assessment & FMEA
land: safety-standards
level: intermediate
abstraction: concept
parent: design-safety
children: []
relations:
  - { type: enables, target: ride-control-systems }
  - { type: applies-to, target: clothoid-loop }
  - { type: part-of, target: design-safety }
summary: Risk assessment lists what could fail on a ride and how bad it would be; FMEA is the standard worksheet that does this part by part, scores each failure, and tracks the fix.
tags: [safety-standards, risk, fmea, sample-content]
visuals:
  - { type: mermaid, title: "The FMEA loop", alt: "Flowchart of an FMEA cycle: pick a component, list its failure modes, trace each effect, score severity, occurrence and detection, rank by risk priority, act on the worst, then reassess" }
interactive_idea: null
sources:
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
  - { title: "ISO 17842-1 Safety of amusement rides and amusement devices, Part 1: Design and manufacture", author: "ISO", year: 2015 }
  - { title: "EN 13814 Safety of amusement rides and amusement devices", author: "CEN", year: 2019 }
confidence: high
---

```mermaid
%% title: The FMEA loop | alt: Flowchart of an FMEA cycle: pick a component, list its failure modes, trace each effect, score severity, occurrence and detection, rank by risk priority, act on the worst, then reassess
flowchart TD
  A[Pick a component or function] --> B[List how it could fail]
  B --> C[Trace the effect on riders and ride]
  C --> D[Score severity, occurrence, detection]
  D --> E[Rank by risk priority]
  E --> F[Act on the highest ranked]
  F --> G[Reassess with the fix in place]
  G -->|Still too high| F
  G -->|Acceptable| A
```

A risk assessment answers two questions about every part of a ride: how could this fail, and what would happen if it did? It is the working document behind [design safety](../safety-standards/design-safety.md), required by ASTM F2291, ISO 17842 and EN 13814.

The most common format is the FMEA, or Failure Mode and Effects Analysis. Take one component at a time, such as a lap bar lock, and write down each way it could fail. Trace the effect, then score three things: how severe the outcome is, how often it is likely to occur, and how easily it is detected. Multiplying the scores gives a risk priority number, so the worst problems get attention first; after a fix, the row is scored again.

FMEA findings decide which interlocks and redundant sensors the [ride control system](../safety-standards/ride-control-systems.md) must have, and feed back into physical design: assessing a [clothoid loop](../ride-engineering/clothoid-loop.md) means checking what happens if a train enters too slowly and stalls.

## Explore further
- [Design Safety](../safety-standards/design-safety.md) — the wider process the FMEA sits inside.
- [Ride Control Systems](../safety-standards/ride-control-systems.md) — turning an FMEA row into an interlock.
