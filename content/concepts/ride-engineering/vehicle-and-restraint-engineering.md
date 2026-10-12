---
id: vehicle-and-restraint-engineering
title: Vehicle & Restraint Engineering
land: ride-engineering
level: intermediate
abstraction: super-concept
parent: null
children: [restraint-mechanisms, restraint-locking, seat-and-containment, vehicle-suspension]
relations:
  - { type: applies-to, target: restraint-design-rules }
  - { type: applies-to, target: restraint-fit }
  - { type: applies-to, target: accessible-vehicles }
  - { type: applies-to, target: astm-f2291 }
  - { type: enables, target: inverted-coasters }
summary: The car is the only part of the ride a guest touches; it must hold everyone and hurt no one.
tags: [vehicles, restraints, seats, containment, design]
visuals: [mermaid]
interactive_idea: "Build a car from a menu of seat, restraint and wheel-carrier options; a panel reports containment, airtime feel and dispatch time."
sources: [coasterpedia-otsr, astm-f2291-design-practice, coaster101-wheel-design, pendrill-eager-jerk-snap-2020]
confidence: high
---
```mermaid
flowchart TD
  V["Vehicle"] --> S["Seat and containment: shape, dividers, body range"]
  V --> R["Restraint mechanism: lap bar, OTSR, vest, belt"]
  R --> L["Locking and redundancy: hydraulic, ratchet, sensors"]
  V --> U["Suspension: wheel compliance, pivoting bogies"]
  S --> O["Outcome: everyone held, nobody bruised"]
  L --> O
  U --> O
```

Track and structure are invisible to most guests; the vehicle is what they climb into, grip, and judge the ride by. This branch covers the engineering of that object. [Restraint mechanisms](../ride-engineering/restraint-mechanisms.md) compares lap bars, over-the-shoulder harnesses, vests and belts, each a different bargain between freedom and security. [Restraint locking](../ride-engineering/restraint-locking.md) explains how a bar stays shut when it must, with redundant cylinders and sensors that stop a dispatch if anything is open. [Seat and containment](../ride-engineering/seat-and-containment.md) looks at the seat itself: the shape that keeps a small child and a large adult equally inside under negative g. [Vehicle suspension](../ride-engineering/vehicle-suspension.md) is the less obvious part, the compliance in wheels and bogies that turns track imperfections into a smooth ride or a rough one.

All four sit under the restraint and containment criteria of [ASTM F2291](../safety-standards/astm-f2291.md) and the broader [restraint design rules](../safety-standards/restraint-design-rules.md), and they meet human bodies through [restraint fit](../human-factors/restraint-fit.md) and the demands of [accessible vehicles](../human-factors/accessible-vehicles.md). Hang the seat below the rail and the same engineering gives you an [inverted coaster](../ride-systems/inverted-coasters.md).

## Explore further
- `coasterpedia-otsr` — Over-the-shoulder restraint (Coasterpedia)
- `astm-f2291-design-practice` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `coaster101-wheel-design` — Coasters-101: Roller Coaster Wheel Design
