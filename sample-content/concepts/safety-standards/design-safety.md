---
id: design-safety
title: Design Safety
land: safety-standards
level: advanced
abstraction: super-concept
parent: null
children: [risk-assessment, ride-control-systems]
relations:
  - { type: applies-to, target: forces-and-tolerance }
  - { type: applies-to, target: pipeline-overview }
summary: Design safety is the discipline of finding what could go wrong with a ride before it is built, deciding how likely and how bad each case is, and proving the chosen controls actually work.
tags: [safety-standards, risk, engineering-process, sample-content]
visuals:
  - { type: mermaid, title: "Hazard to verification", alt: "Flowchart from identifying a hazard, estimating its risk, choosing a control, and verifying the control, with a loop back when the residual risk is still too high" }
interactive_idea: null
sources:
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
  - { title: "ISO 17842-1 Safety of amusement rides and amusement devices, Part 1: Design and manufacture", author: "ISO", year: 2015 }
  - { title: "EN 13814 Safety of amusement rides and amusement devices", author: "CEN", year: 2019 }
confidence: high
---

```mermaid
%% title: Hazard to verification | alt: Flowchart from identifying a hazard, estimating its risk, choosing a control, and verifying the control, with a loop back when the residual risk is still too high
flowchart LR
  H[Identify hazard] --> R[Estimate risk: likelihood x severity]
  R --> C[Choose control]
  C --> C1[Design it out]
  C --> C2[Guard or interlock]
  C --> C3[Warn and train]
  C1 --> V[Verify: test, inspect, calculate]
  C2 --> V
  C3 --> V
  V --> Q{Residual risk acceptable?}
  Q -->|No| C
  Q -->|Yes| D[Document and release]
```

Design safety assumes something will go wrong and works out what, how often, and how badly, before any steel is cut. It runs alongside the creative work from concept to opening and is required by ASTM F2291, EN 13814 and ISO 17842.

The method is a loop. First list the hazards: a restraint that opens, a train that stalls on a hill. Rate each by how likely it is and how severe the outcome would be. Choose a control, preferring to design the hazard out, then guards and interlocks, and only last warnings and training. Verify the control works and check whether the leftover risk is acceptable. If not, go round again.

The worksheet version of this loop is [risk assessment and FMEA](../safety-standards/risk-assessment.md); the hardware that enforces it is the [ride control system](../safety-standards/ride-control-systems.md). Rider-side inputs come from [forces and human tolerance](../ride-engineering/forces-and-tolerance.md), and the whole process is scheduled into the [design pipeline](../design-process/pipeline-overview.md).

## Explore further
- [Risk Assessment & FMEA](../safety-standards/risk-assessment.md) — the worksheet behind the loop.
- [Ride Control Systems](../safety-standards/ride-control-systems.md) — where the controls become hardware.
