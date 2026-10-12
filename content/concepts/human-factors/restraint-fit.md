---
id: restraint-fit
title: Restraint Fit
land: human-factors
level: intermediate
abstraction: concept
parent: comfort-and-body
children: []
relations:
  - { type: applies-to, target: restraint-mechanisms }
  - { type: applies-to, target: restraint-locking }
  - { type: applies-to, target: restraint-design-rules }
  - { type: applies-to, target: head-and-neck-loads }
  - { type: applies-to, target: dispatch-procedures }
summary: A restraint must hold a small child and a large adult through the same forces, comfortably, every time.
tags: [restraints, safety, ergonomics, comfort]
visuals: [mermaid]
interactive_idea: "Drag a lap bar down on riders of different sizes and see where it contacts the body and whether the gap is within limits."
sources: [astm-f2291-design-standard, ansur-ii-open-design-lab]
confidence: high
---
```mermaid
flowchart LR
  A[Rider range defined] --> B[Restraint type chosen]
  B --> C[Geometry sized to range]
  C --> D[Lock positions set]
  D --> E{Fit check at load}
  E -- gap too large --> F[Rider cannot ride]
  E -- within limits --> G[Dispatch]
  G --> H[Forces through ride]
  H --> I[Comfort and containment both]
```

A restraint has two jobs that pull against each other. It must contain the rider through every force the ride produces, including the moment a child goes weightless over an [airtime hill](../ride-engineering/airtime-hills.md). It must also be comfortable: no bruised adults, no nervous rider feeling trapped. Restraint fit is making one device do both across the whole rider range.

Fit starts with the anthropometric range the ride is designed for. ASTM F2291's Section 5 on patron restraint and containment asks designers to match restraint type and geometry to the ride's forces and intended riders, with an appendix for riders under 48 inches. A lap bar that locks in many positions fits more bodies than one with two; a bar that contacts the thigh rather than the belly tolerates more shapes. Where a seatbelt backs up a bar, the belt length becomes part of the fit envelope.

Fit is then checked by people. [Dispatch procedures](../safety-standards/dispatch-procedures.md) include a visual or physical check of every restraint, and [locking systems](../ride-engineering/restraint-locking.md) report their state to the control system. [Head and neck loads](../ride-engineering/head-and-neck-loads.md) depend on how well the shoulders are held, which is why over-the-shoulder restraints on inverting rides are shaped around the collarbone.

## Explore further
- `astm-f2291-design-standard` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `ansur-ii-open-design-lab` — ANSUR II anthropometric dataset
