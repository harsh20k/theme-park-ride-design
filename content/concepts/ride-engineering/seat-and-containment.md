---
id: seat-and-containment
title: Seat Design & Containment
land: ride-engineering
level: intermediate
abstraction: concept
parent: vehicle-and-restraint-engineering
children: []
relations:
  - { type: applies-to, target: seat-width-and-hip-breadth }
  - { type: applies-to, target: percentile-design }
  - { type: applies-to, target: reach-envelope }
  - { type: applies-to, target: patron-accommodation }
  - { type: applies-to, target: height-and-health-requirements }
summary: The seat shape, not just the bar, keeps a wide range of bodies inside through every force.
tags: [seats, containment, anthropometrics, ergonomics, design]
visuals: [svg]
interactive_idea: "Scale a rider silhouette from a small child to a large adult and watch which parts of the seat and restraint still make contact under negative g."
sources: [astm-f2291-design-practice, coasterpedia-otsr, pendrill-eager-jerk-snap-2020, wikipedia-roller-coaster-safety]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a bucket seat with a lap bar and a dashed containment envelope around the rider">
  <path d="M60 160 L60 70 Q60 55 75 55 L110 55 L110 110 L190 110 L190 160 Z" fill="#4c78a8" fill-opacity="0.6" stroke="currentColor" stroke-width="2"/>
  <circle cx="130" cy="40" r="14" fill="#f58518"/>
  <path d="M130 54 L130 110 L180 110" fill="none" stroke="#f58518" stroke-width="6" stroke-linecap="round"/>
  <path d="M180 110 L182 150" fill="none" stroke="#f58518" stroke-width="6" stroke-linecap="round"/>
  <rect x="140" y="92" width="50" height="10" rx="5" fill="currentColor"/>
  <path d="M40 170 L40 20 L230 20 L230 170" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="238" y="40" font-size="11" fill="currentColor">clearance</text>
  <text x="238" y="54" font-size="11" fill="currentColor">envelope</text>
  <text x="196" y="100" font-size="11" fill="currentColor">lap bar</text>
  <text x="66" y="150" font-size="11" fill="currentColor">bucket seat</text>
</svg>

Containment is the idea that seat and restraint together form a pocket a rider cannot leave, whatever the ride does. A deep bucket seat with a raised front edge stops hips sliding forward under braking; bolsters and dividers stop sideways shift in a turn; the lap bar closes the top of the pocket for negative g. ASTM F2291 treats all of this as one problem, with a section on patron restraint, clearance envelope and containment.

The hard part is the range of bodies. A seat that pins a tall adult may let a child slip beneath the bar, while a bar that reaches a child's lap may not close on a large adult. Designers work from [anthropometric percentiles](../human-factors/percentile-design.md), which is where [seat width and hip breadth](../human-factors/seat-width-and-hip-breadth.md) become engineering inputs, and the result is posted as [height and health requirements](../human-factors/height-and-health-requirements.md) at the entrance. 

Containment also reaches outward. The clearance or [reach envelope](../safety-standards/reach-envelope.md) is the volume a flailing arm can sweep, which scenery and structure must stay clear of, and [patron accommodation](../safety-standards/patron-accommodation.md) rules ask how the same seat serves riders with prosthetics, casts or limited grip.

## Explore further
- `astm-f2291-design-practice` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `coasterpedia-otsr` — Over-the-shoulder restraint (Coasterpedia)
- `wikipedia-roller-coaster-safety` — Roller coaster (mechanics and safety sections)
