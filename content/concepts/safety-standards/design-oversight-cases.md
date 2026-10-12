---
id: design-oversight-cases
title: Design Oversight Cases
land: safety-standards
level: advanced
abstraction: concept
parent: lessons-from-incidents
children: []
relations:
  - { type: applies-to, target: river-rapids }
  - { type: applies-to, target: water-ride-hydraulics }
  - { type: applies-to, target: risk-assessment }
  - { type: applies-to, target: retheming-and-overlays }
  - { type: applies-to, target: design-reviews-and-gates }
  - { type: applies-to, target: emergency-stop-and-evacuation }
summary: Dreamworld shows how a ride modified for decades without a fresh engineering risk assessment can hide a fatal single point of failure.
tags: [design, modifications, single-point-failure, coroner, river-rapids]
visuals: [mermaid]
interactive_idea: "Toggle the safeguards the coroner identified as missing, such as a water-level interlock or a pump E-stop, and see where the Dreamworld event chain would have broken."
sources: [qld-coroner-dreamworld-2020, wikipedia-thunder-river-rapids, iso-12100-risk-assessment]
confidence: high
---
```mermaid
flowchart TD
  P["South water pump fails"] --> W["Water level in the unload trough drops within seconds"]
  W --> S["Empty raft strands on the support rails at the conveyor end"]
  S --> C["Conveyor keeps running, next raft arrives about a minute later"]
  C --> X["Collision, raft lifted vertical by the conveyor"]
  N1["No water-level or raft-position interlock on the conveyor"] -.-> C
  N2["No single control to stop both pumps, slow stop took about 8 s"] -.-> C
  N3["No documented engineering risk assessment despite decades of modifications"] -.-> N1
```

Dreamworld's Thunder River Rapids ride opened in the 1980s and was modified many times over thirty years. On 25 October 2016 one of its two large water pumps failed. The water level at the unload end fell fast, an empty raft settled onto the steel support rails near the top of the conveyor, and the conveyor kept moving. About a minute later a raft carrying six people was driven into it and tipped vertically. Four people died.

The coroner's 2020 findings list several oversights. There was no interlock that stopped the conveyor when the water level or a raft position was wrong. There was no single emergency control that stopped both pumps, and the conveyor stop button at the main panel took about eight seconds to halt the belt while the emergency stop took two. A documented engineering risk assessment of the whole ride had never been conducted.

Every modification, including a [retheme or overlay](../operations-business/retheming-and-overlays.md), re-opens the [risk assessment](../safety-standards/risk-assessment.md). Water rides need [hydraulics](../ride-engineering/water-ride-hydraulics.md) treated as a safety system, with level sensing wired to the conveyor on a [river rapids](../ride-systems/river-rapids.md) ride. [Emergency stop](../safety-standards/emergency-stop-and-evacuation.md) placement and speed are design decisions. [Design review gates](../design-process/design-reviews-and-gates.md) exist so someone asks the obvious question first.

## Explore further
- `qld-coroner-dreamworld-2020` — Coroners Court of Queensland: Findings of the Dreamworld inquest
- `wikipedia-thunder-river-rapids` — Wikipedia: Thunder River Rapids Ride
- `iso-12100-risk-assessment` — ISO 12100:2010 Safety of machinery, risk assessment and risk reduction
