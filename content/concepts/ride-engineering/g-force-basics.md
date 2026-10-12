---
id: g-force-basics
title: G-Force Basics
land: ride-engineering
level: beginner
abstraction: concept
parent: forces-and-tolerance
children: [positive-g, airtime-and-negative-g, lateral-g]
relations:
  - { type: applies-to, target: otolith-organs }
  - { type: applies-to, target: speed-profile }
  - { type: applies-to, target: clothoid-loop }
  - { type: applies-to, target: drop-tower }
  - { type: enables, target: fear-vs-fun }
summary: A g-force is the seat's push on you compared with standing still, measured in multiples of gravity.
tags: [physics, g-force, acceleration, centripetal]
visuals: [formula]
interactive_idea: "Slide a car around a loop and watch the normal-force arrow and a live g readout change from 0 g at the top to several g at the bottom."
sources: [pendrill-eager-jerk-snap-2020, hyperphysics-centripetal-force, wikipedia-g-force, weisenberger-coasters-101-book]
confidence: high
---
> **Formula** $G = \dfrac{a - g}{g_0}$
> where:
> - $G$ — the g-force the rider feels, as a multiple of normal gravity
> - $a$ — the rider's actual acceleration vector
> - $g$ — the acceleration of gravity, pointing down
> - $g_0$ — the size of standard gravity, about 9.8 metres per second squared

> **Formula** $a_c = \dfrac{v^2}{r}$
> where:
> - $a_c$ — centripetal acceleration, pointing toward the centre of the curve
> - $v$ — speed along the track
> - $r$ — radius of the curve at that point

A g-force is not gravity. It is the push the seat, floor or restraint must give you so that your body follows the track, compared with the push you get standing still. Physicists call it the normal force per unit mass, or the proper acceleration. Sit in a parked train and you feel 1 g. Fall freely and you feel 0 g, because nothing is pushing on you. Round the bottom of a dip and the seat shoves upward hard, so you feel several g.

The second formula explains where the numbers come from: the faster you go and the tighter the curve, the bigger the centripetal acceleration. Halve the radius and the force doubles; double the speed and it quadruples. Designers describe every point on a layout by three components, which the cards on [positive g](../ride-engineering/positive-g.md), [airtime](../ride-engineering/airtime-and-negative-g.md) and [lateral g](../ride-engineering/lateral-g.md) cover. Your [otolith organs](../human-factors/otolith-organs.md) sense exactly this push, which is why a [speed profile](../ride-engineering/speed-profile.md) is really a feeling profile.

## Explore further
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration: forces in our bodies during a roller coaster ride (open-access paper)
- `hyperphysics-centripetal-force` — Centripetal Force (HyperPhysics reference page with calculator and worked examples)
- `weisenberger-coasters-101-book` — Coasters 101: An Engineer's Guide to Roller Coaster Design (short book by a ride engineer)
- `wikipedia-g-force` — g-force (overview of definition, axes and human tolerance)
