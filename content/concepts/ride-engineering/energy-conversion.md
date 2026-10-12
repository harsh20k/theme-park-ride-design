---
id: energy-conversion
title: Energy Conversion on a Coaster
land: ride-engineering
level: beginner
abstraction: concept
parent: energy-and-motion
children: []
relations:
  - { type: applies-to, target: coaster-anatomy }
  - { type: example-of, target: hyper-and-giga-era }
  - { type: applies-to, target: drop-tower }
  - { type: enables, target: speed-profile }
  - { type: applies-to, target: imagineering-in-a-box }
summary: Height turns into speed; the first drop sets the budget for everything after it.
tags: [energy, physics, potential, kinetic, drops]
visuals: [formula]
interactive_idea: "Drag the lift hill taller and read the bottom-of-drop speed; toggle a loss slider to see the ideal and real values diverge."
sources: [pendrill-eager-jerk-snap-2020, wikipedia-millennium-force, hyperphysics-centripetal-force, weisenberger-coasters-101-book]
confidence: high
---
> **Formula** $v = \sqrt{2 g h}$
> where:
> - $v$ — speed at the bottom of a drop, ignoring friction and drag
> - $g$ — the acceleration of gravity, about 9.8 metres per second squared
> - $h$ — the vertical height lost since the train was last at rest

The physics of a coaster fits in one sentence: energy is conserved, give or take leaks. At the top of the lift the train holds potential energy, mass times gravity times height. As it falls, that store becomes kinetic energy, half the mass times speed squared. Set the two equal and the mass cancels, which is the famous result that a heavy train and a light train reach the same speed in a vacuum. Only the height matters.

The formula gives a quick sanity check. Millennium Force at Cedar Point drops 300 feet, about 91 metres; the ideal speed is roughly 42 metres per second, or 94 miles per hour, and the ride's real top speed is 93. The tiny gap is what [friction and drag](../ride-engineering/friction-and-drag.md) ate on the way down.

Because every later hill can only use energy the first drop provided, the first drop is the budget for the whole layout, a point every [speed profile](../ride-engineering/speed-profile.md) begins from. The same arithmetic runs a [drop tower](../ride-systems/drop-tower.md), explains why [hyper and giga coasters](../history/hyper-and-giga-era.md) chase height, and is the first lesson in [Imagineering in a Box](../careers/imagineering-in-a-box.md) style physics teaching.

## Explore further
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration: forces in our bodies during a roller coaster ride (open-access paper)
- `wikipedia-millennium-force` — Millennium Force (300 ft drop and 93 mph top speed used as the worked example here)
- `hyperphysics-centripetal-force` — Centripetal Force (HyperPhysics reference page with vertical-circle notes)
- `weisenberger-coasters-101-book` — Coasters 101: An Engineer's Guide to Roller Coaster Design (short book by a ride engineer)
