---
id: flywheel-and-catapult-launch
title: Flywheel & Catapult Launch
land: ride-systems
level: advanced
abstraction: sub-concept
parent: launched-coasters
children: []
relations:
  - { type: example-of, target: schwarzkopf-and-stengel }
  - { type: applies-to, target: energy-conversion }
  - { type: enables, target: shuttle-coasters }
  - { type: contrasts-with, target: lsm-lim-launch }
  - { type: example-of, target: loop-revival }
summary: "The 1970s way to launch: drop a 40-tonne weight or unwind a spinning flywheel through a cable."
tags: [launch, flywheel, weight-drop, schwarzkopf, history]
visuals: [formula]
interactive_idea: "Spin up a flywheel with a slider and release it; watch stored rotational energy convert to train speed, minus losses."
sources: [wikipedia-shuttle-loop, coaster101-launch-systems, wikipedia-launched-roller-coaster]
confidence: high
---
> **Formula** $\tfrac{1}{2} I \omega^2 \approx \tfrac{1}{2} m v^2 + \text{losses}$
> where
> - $I$ is the flywheel's moment of inertia, how hard it is to spin up
> - $\omega$ is its spin rate before release
> - $m$ is the mass of the loaded train
> - $v$ is the train's speed when the cable lets go
> - losses are clutch slip, cable stretch and friction

Before magnets and hydraulics, a launch was a mechanical trick for storing energy and dumping it through a cable. Anton Schwarzkopf's **Shuttle Loop**, first opened as King Kobra at Kings Dominion in 1977, used a **weight drop**: a 40-tonne block fell down a shaft inside a tower, pulling a cable and catch car that shoved the train into a vertical loop. From 1978 the design switched to a **flywheel**, a six-tonne disc spun above 1,000 rpm, with clutches engaging it to the cable drum.

Both are pure [energy conversion](../ride-engineering/energy-conversion.md): potential or rotational energy becomes train speed in a few seconds. Flywheels could be recharged by a modest motor between launches, which suited the short, intense **shuttle** layout: launch, loop, spike, fall back through the loop, reverse into the station ([shuttle coasters](../ride-systems/shuttle-coasters.md)). Twelve Shuttle Loops were built between 1977 and 1982 and several still run, a late echo of the [loop revival](../history/loop-revival.md) that [Schwarzkopf and Stengel](../history/schwarzkopf-and-stengel.md) led.

Diesel-driven cable catapults and Zamperla's flywheel Motocoasters kept the idea alive, but moving masses, clutches and cables are what [linear motors](../ride-systems/lsm-lim-launch.md) exist to eliminate.

## Explore further
- `wikipedia-shuttle-loop` — Shuttle Loop (Wikipedia)
- `coaster101-launch-systems` — Coasters-101: Launch Systems
- `wikipedia-launched-roller-coaster` — Launched roller coaster (Wikipedia)
