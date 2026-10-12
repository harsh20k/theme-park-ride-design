---
id: redundancy-and-fail-safe
title: Redundancy & Fail-Safe
land: safety-standards
level: intermediate
abstraction: concept
parent: design-safety
children: []
relations:
  - { type: applies-to, target: brake-types }
  - { type: applies-to, target: restraint-locking }
  - { type: applies-to, target: anti-rollback }
  - { type: enables, target: protective-frame }
  - { type: applies-to, target: untethered-figures }
summary: Design so that any single failure is either caught by a second channel or leaves the ride in a safe state.
tags: [redundancy, fail-safe, brakes, restraints, reliability]
visuals: [svg]
interactive_idea: "Cut power, a sensor wire or a hydraulic line on a diagram and watch whether the brake, lock and lift each land in a safe state."
sources: [coaster101-gravity-max-safety, coaster101-brakes-blocks-sensors, astm-f2291-design]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <text x="12" y="22" font-size="11" fill="currentColor" stroke="none">Redundant channels: both must agree</text>
  <rect x="12" y="34" width="90" height="30" rx="6"/><text x="22" y="53" font-size="10" fill="currentColor" stroke="none">Sensor A</text>
  <rect x="12" y="74" width="90" height="30" rx="6"/><text x="22" y="93" font-size="10" fill="currentColor" stroke="none">Sensor B</text>
  <path d="M102 49 L140 69 M102 89 L140 69"/>
  <rect x="140" y="54" width="70" height="30" rx="6"/><text x="150" y="73" font-size="10" fill="currentColor" stroke="none">2oo2 vote</text>
  <path d="M210 69 L250 69"/>
  <rect x="250" y="54" width="60" height="30" rx="6"/><text x="258" y="73" font-size="10" fill="currentColor" stroke="none">Release</text>
  <text x="12" y="130" font-size="11" fill="currentColor" stroke="none">Fail-safe brake: spring applies, power only releases</text>
  <rect x="12" y="140" width="120" height="28" rx="6" fill="currentColor" fill-opacity="0.15"/><text x="20" y="158" font-size="10" fill="currentColor" stroke="none">power on = open</text>
  <rect x="150" y="140" width="150" height="28" rx="6"/><text x="158" y="158" font-size="10" fill="currentColor" stroke="none">power lost = closed and safe</text>
</svg>

Two ideas do most of the work in ride safety. Fail-safe means the ride's default state, the one it falls into when power, air or a signal is lost, is a safe one. Most coaster brakes are built this way: springs or pneumatics push the brake fins closed and energy is needed to hold them open, so a blackout stops every train. Redundancy means a second, independent way to do a critical job. Lap bars commonly have two separate locking devices, each able to hold the full load. Critical sensors are paired and both must agree.

Design standards push designers to show that no single failure, including a failure of the control system itself, can injure a rider. Coaster101's note on Gravity Max in Taiwan, a tilt coaster where the train is held at the edge of a dropped track segment, is a nice example: when a sensor reported a fault the train simply stayed held until staff cleared it.

The same thinking governs [brake types](../ride-engineering/brake-types.md), [restraint locking](../ride-engineering/restraint-locking.md), [anti-rollback](../ride-engineering/anti-rollback.md) devices and, increasingly, [untethered figures](../show-technology/untethered-figures.md) that share space with guests. It is also what makes the [protective frame](../human-factors/protective-frame.md) of a thrill ride honest.

## Explore further
- `coaster101-gravity-max-safety` — Coaster101: Gravity Max's safety system works as designed
- `coaster101-brakes-blocks-sensors` — Coaster101: Brakes, blocks and sensors
- `astm-f2291-design` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
