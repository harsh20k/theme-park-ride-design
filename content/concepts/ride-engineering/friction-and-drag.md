---
id: friction-and-drag
title: Friction & Drag Losses
land: ride-engineering
level: intermediate
abstraction: concept
parent: energy-and-motion
children: []
relations:
  - { type: applies-to, target: wheels-and-bogies }
  - { type: limits, target: speed-profile }
  - { type: applies-to, target: brake-types }
  - { type: applies-to, target: preventive-maintenance }
  - { type: applies-to, target: strata-coasters }
summary: Rolling wheels and moving air steal energy on every metre, so each hill must be lower.
tags: [friction, drag, rolling-resistance, losses, physics]
visuals: [formula]
interactive_idea: "Swap wheel compound and train shape; the widget redraws how far the train coasts before it stalls."
sources: [wikipedia-rolling-resistance, wikipedia-drag-physics, coaster101-wheel-design, pendrill-loop-shapes-2005]
confidence: high
---
> **Formula** $F_D = \tfrac{1}{2}\,\rho\,v^2\,C_D\,A$
> where:
> - $F_D$ — the drag force from the air pushing back on the train
> - $\rho$ — the density of the air, which rises in cold weather
> - $v$ — the train's speed through the air
> - $C_D$ — a drag coefficient that depends on the train's shape
> - $A$ — the frontal area the air has to get around

Two leaks drain a coaster's energy. The first is rolling resistance: as a polyurethane tyre squashes against the rail and springs back, it does not return all the energy it absorbed, and the difference leaves as heat. The loss is a small fraction of the wheel load, set by a coefficient that depends on material; softer, grippier compounds lose more, which is why Coaster101 notes that nylon wheels run faster and rougher while polyurethane runs smoother and slower. Guide and upstop wheels, bearings and brake fins add their share.

The second leak is aerodynamic drag, which grows with the square of speed. At 30 miles per hour it is a nuisance; on a [strata coaster](../history/strata-coasters.md) topping 120 it dominates, and seats, restraints and riders' arms are all frontal area. Denser cold air makes it worse.

The result is visible in data. Pendrill's accelerometer traces through the Invertigo loop at Liseberg read about 4.5 g on entry and 4.0 g on exit; the difference is energy lost between the two. Designers build these losses into every [speed profile](../ride-engineering/speed-profile.md), choose [wheels and bogies](../ride-engineering/wheels-and-bogies.md) to tune them, and let [preventive maintenance](../operations-business/preventive-maintenance.md) keep them where the design expects.

## Explore further
- `wikipedia-rolling-resistance` — Rolling resistance (coefficient, hysteresis, temperature dependence)
- `wikipedia-drag-physics` — Drag (physics): the drag equation and air density
- `coaster101-wheel-design` — Coasters-101: Roller Coaster Wheel Design (nylon versus polyurethane speed trade-off)
- `pendrill-loop-shapes-2005` — Rollercoaster loop shapes (entry and exit g readings showing energy loss)
