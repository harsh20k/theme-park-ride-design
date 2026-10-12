---
id: coaster-anatomy
title: Coaster Anatomy
land: ride-systems
level: beginner
abstraction: concept
parent: roller-coasters
children: []
relations:
  - { type: part-of, target: track-types }
  - { type: applies-to, target: wheels-and-bogies }
  - { type: applies-to, target: lift-systems }
  - { type: applies-to, target: brake-types }
  - { type: enables, target: block-system }
summary: The named parts of a coaster, from station and lift to brake run, and what each does.
tags: [coasters, anatomy, track, trains]
visuals: [svg]
interactive_idea: "Hover over a side-view coaster diagram to light up each part and show its job and its engineering card."
sources: [wikipedia-roller-coaster-safety, wikipedia-wooden-roller-coaster, coaster101-launch-systems]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="10" y="130" width="50" height="20" rx="3"/>
  <text x="14" y="165" font-size="10" fill="currentColor" stroke="none">station</text>
  <path d="M60 140 L130 40"/>
  <text x="70" y="80" font-size="10" fill="currentColor" stroke="none">lift hill</text>
  <path d="M130 40 C150 40 150 140 170 140 C185 140 185 90 200 90 C215 90 215 140 230 140 L300 140"/>
  <text x="140" y="30" font-size="10" fill="currentColor" stroke="none">crest</text>
  <text x="178" y="85" font-size="10" fill="currentColor" stroke="none">hill</text>
  <path d="M240 134 L290 134" stroke-width="6" stroke-linecap="round" opacity="0.5"/>
  <text x="236" y="160" font-size="10" fill="currentColor" stroke="none">brake run</text>
  <circle cx="140" cy="46" r="5" fill="currentColor"/>
  <circle cx="150" cy="52" r="5" fill="currentColor"/>
</svg>

Every coaster, from a kiddie oval to a giga, is made of the same handful of parts. The **station** is where trains load and unload. The **lift** (chain, cable or vertical) or a **launch** gives the train its energy. The **first drop** turns that stored height into speed, and the rest of the **course** spends it on hills, helices and inversions. A **mid-course brake run** can slow the train partway through, and the **final brake run** stops it before the station. Transfer tracks park spare trains in a storage shed.

Underneath, the **train** rides on three sets of wheels per axle, road wheels on top, guide wheels on the side and upstop wheels below, so it cannot leave the rails ([wheels and bogies](../ride-engineering/wheels-and-bogies.md)). The rails themselves come in several forms ([track types](../ride-engineering/track-types.md)).

Why does anatomy matter to designers? Because each part is a **block**: a stretch of track with its own brake or lift that can hold a train. The [block system](../ride-engineering/block-system.md) keeps two trains from ever sharing one, which sets capacity as much as thrill does. [Lift systems](../ride-engineering/lift-systems.md) and [brake types](../ride-engineering/brake-types.md) are the engineering versions of this map.

## Explore further
- `wikipedia-roller-coaster-safety` — Roller coaster (Wikipedia)
- `wikipedia-wooden-roller-coaster` — Wooden roller coaster (Wikipedia)
- `coaster101-launch-systems` — Coasters-101: Launch Systems
