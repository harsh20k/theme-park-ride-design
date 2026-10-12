---
id: emergency-stop-and-evacuation
title: Emergency Stop & Evacuation Design
land: safety-standards
level: intermediate
abstraction: concept
parent: design-safety
children: []
relations:
  - { type: applies-to, target: block-system }
  - { type: applies-to, target: emergency-access }
  - { type: applies-to, target: guest-recovery }
  - { type: applies-to, target: lift-systems }
  - { type: applies-to, target: design-oversight-cases }
summary: Designing where a ride can stop, how fast, and how every rider gets out from there safely.
tags: [e-stop, evacuation, iso-13850, walkways, emergency]
visuals: [mermaid]
interactive_idea: "Press a virtual E-stop at any point on a ride map; the widget shows where each vehicle halts and the walkway route out."
sources: [iso-13850-emergency-stop, qld-coroner-dreamworld-2020, coaster101-brakes-blocks-sensors]
confidence: high
---
```mermaid
flowchart TD
  T["Trigger: operator, sensor or control fault"] --> S["Stop category: immediate cut or controlled brake"]
  S --> H["Vehicles held at block brakes or lift"]
  H --> A["Assess: power, weather, rider condition"]
  A --> E["Evacuate via walkways, platforms, stairs"]
  A --> R["Or reset and resume if safe"]
  E --> G["Guest recovery and incident report"]
```

ISO 13850 sets the basics for machinery: a red mushroom-head control on a yellow background, reachable without hesitation, that latches until deliberately reset, with a defined stop category, either cutting power immediately or braking under control and then cutting power. On a ride the controller then holds every vehicle at the nearest [block](../ride-engineering/block-system.md) brake, launch position or lift, and that geometry decides the rest.

Evacuation design asks: from every place a vehicle can stop, how do riders get out? That means walkways or stairs beside lifts and [lift systems](../ride-engineering/lift-systems.md), platforms at block brakes, restraint releases that work without power, and routes that connect to the park's [emergency access](../masterplanning/emergency-access.md) roads.

The Dreamworld inquest shows the stakes. On the Thunder River Rapids ride the only stop control an operator could reach at the unload point was an emergency stop; investigators found it halted the conveyor in about two seconds, while the conveyor stop button at the main panel took around eight, and there was no single control that stopped both water pumps. Those seconds and that layout are part of why it is a [design oversight case](../safety-standards/design-oversight-cases.md). Afterwards comes the human side, handled by [guest recovery](../operations-business/guest-recovery.md).

## Explore further
- `iso-13850-emergency-stop` — ISO 13850:2015 Emergency stop function, principles for design
- `qld-coroner-dreamworld-2020` — Coroners Court of Queensland: Findings of the Dreamworld inquest
- `coaster101-brakes-blocks-sensors` — Coaster101: Brakes, blocks and sensors
