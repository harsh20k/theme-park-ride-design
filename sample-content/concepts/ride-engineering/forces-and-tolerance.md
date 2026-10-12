---
id: forces-and-tolerance
title: Forces & Human Tolerance
land: ride-engineering
level: intermediate
abstraction: super-concept
parent: null
children: [g-force-basics]
relations:
  - { type: limits, target: track-geometry }
  - { type: applies-to, target: motion-sickness }
  - { type: applies-to, target: design-safety }
summary: Rides push, pull and spin the body; this field maps those forces against what people can safely and comfortably tolerate, and turns that into design limits.
tags: [ride-engineering, biomechanics, safety, sample-content]
visuals:
  - { type: mermaid, title: "From track shape to design limit", alt: "Flowchart from track shape and speed, through the forces on the rider in three axes and their duration, to tolerance limits and a verdict of pass or redesign" }
interactive_idea: null
sources:
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
  - { title: "EN 13814 Safety of amusement rides and amusement devices", author: "CEN", year: 2019 }
confidence: high
---

```mermaid
%% title: From track shape to design limit | alt: Flowchart from track shape and speed, through the forces on the rider in three axes and their duration, to tolerance limits and a verdict of pass or redesign
flowchart LR
  T[Track shape and speed] --> A[Accelerations on rider]
  A --> Z[Vertical: head to foot]
  A --> X[Longitudinal: chest to back]
  A --> Y[Lateral: side to side]
  Z --> D[How strong and for how long]
  X --> D
  Y --> D
  D --> L{Within tolerance?}
  L -->|Yes| OK[Approve]
  L -->|No| R[Reshape track or slow down]
```

Every ride is a machine for applying forces to a human body. A drop makes you light, a valley presses you into the seat, a turn shoves you sideways, a launch pushes you back. Forces and human tolerance asks how much of each the body can take, for how long, and still enjoy it.

Engineers describe the forces in three axes: vertical (head to foot), longitudinal (chest to back) and lateral (side to side). The body copes best with vertical and chest-to-back loads and worst with lateral ones, which is why turns are banked. Duration matters as much as strength; a brief +5 g valley is fine where a sustained one is not. Standards such as ASTM F2291 publish acceleration-versus-time envelopes designers must stay inside, which is what [limits track geometry](../ride-engineering/track-geometry.md).

The foundations are in [g-force basics](../ride-engineering/g-force-basics.md). Forces also interact with the inner ear, where [motion sickness](../human-factors/motion-sickness.md) begins, and they feed the hazard list in [design safety](../safety-standards/design-safety.md).

## Explore further
- [G-Force Basics](../ride-engineering/g-force-basics.md) — the one number everyone quotes, explained.
- [Motion Sickness](../human-factors/motion-sickness.md) — when the body tolerates the force but the brain does not.
