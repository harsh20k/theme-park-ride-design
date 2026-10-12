---
id: reach-envelope
title: Reach Envelope & Clearance
land: safety-standards
level: intermediate
abstraction: concept
parent: design-safety
children: []
relations:
  - { type: limits, target: set-dressing-and-props }
  - { type: limits, target: kinetics-in-scenes }
  - { type: applies-to, target: percentile-design }
  - { type: applies-to, target: anthropometrics }
  - { type: limits, target: ride-layout-design }
summary: The swept volume a rider's outstretched limbs could occupy, which nothing fixed may enter along the whole ride path.
tags: [clearance, envelope, anthropometrics, layout, scenery]
visuals: [svg]
interactive_idea: "Drag a prop toward a moving vehicle in plan and section; it turns red the moment it enters the swept envelope."
sources: [astm-f2291-design, genorma-en-13814-1, ada-2010-standards]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <rect x="110" y="40" width="100" height="120" rx="14" stroke-dasharray="5 3"/>
  <text x="118" y="56" font-size="10" fill="currentColor" stroke="none">reach envelope</text>
  <rect x="135" y="110" width="50" height="40" rx="4"/>
  <circle cx="160" cy="80" r="10"/>
  <path d="M160 90 L160 118 M160 98 L132 70 M160 98 L188 70 M160 118 L150 150 M160 118 L170 150"/>
  <path d="M20 160 L300 160" stroke-width="3"/>
  <rect x="40" y="90" width="40" height="70" fill="currentColor" fill-opacity="0.15"/>
  <text x="34" y="84" font-size="10" fill="currentColor" stroke="none">prop ok</text>
  <rect x="200" y="60" width="30" height="100" fill="currentColor" fill-opacity="0.3"/>
  <text x="236" y="84" font-size="10" fill="currentColor" stroke="none">too close</text>
</svg>

Riders stretch. They raise their arms on the drop and lean out to touch a rock. The reach envelope, called the patron clearance envelope in ASTM F2291, is the three-dimensional volume that an extended arm or leg of the largest expected rider could occupy around the seat. Sweep that volume along every metre of track, with the vehicle rolled, banked and bouncing on its suspension, and you have a tube that no column, catwalk, beam, prop or animatronic may enter. Both F2291 and EN 13814 define envelope dimensions by seat and restraint type and require the designer to prove the clearance.

Exact dimensions are edition-specific and not reproduced here. For creative teams it is the most frequent source of friction. Scenery that reads beautifully from the queue may sit inside the envelope on a banked curve, and a swinging element in a scene has its own moving envelope that must never meet the rider's.

The envelope is anchored in [anthropometrics](../human-factors/anthropometrics.md) and [percentile design](../human-factors/percentile-design.md): it is sized for the long-armed rider, not the average one. It constrains [set dressing and props](../story-experience/set-dressing-and-props.md), limits [kinetics in scenes](../story-experience/kinetics-in-scenes.md) and is checked in every [ride layout design](../design-process/ride-layout-design.md) pass.

## Explore further
- `astm-f2291-design` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `genorma-en-13814-1` — EN 13814-1:2019+A1:2024 Safety of amusement rides, Part 1
