---
id: heartline
title: Heartline
land: ride-engineering
level: intermediate
abstraction: concept
parent: track-geometry
children: []
relations:
  - { type: applies-to, target: schwarzkopf-and-stengel }
  - { type: limits, target: lateral-g }
  - { type: applies-to, target: inverted-coasters }
  - { type: applies-to, target: flying-coasters }
  - { type: applies-to, target: semicircular-canals }
  - { type: example-of, target: rmc-hybrid-era }
summary: Roll the track around the rider's chest, not the rail, and a barrel roll feels nearly weightless.
tags: [heartline, roll, stengel, inversions, geometry]
visuals: [svg]
interactive_idea: "Toggle the roll axis between rail centre and heart; a rider figure shows how much it is flung sideways in each case."
sources: [liseberg-stengel-coasters, wikipedia-werner-stengel, coaster101-wheel-design, wikipedia-rocky-mountain-construction]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-sections showing roll about the rail versus roll about the rider's heart">
  <circle cx="80" cy="95" r="50" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="70" y="135" width="20" height="8" fill="currentColor"/>
  <circle cx="80" cy="95" r="3" fill="currentColor"/>
  <circle cx="80" cy="52" r="8" fill="#f58518"/>
  <line x1="80" y1="60" x2="80" y2="130" stroke="#f58518" stroke-width="3"/>
  <text x="30" y="170" font-size="11" fill="currentColor">roll about rail: rider swung</text>
  <circle cx="240" cy="95" r="22" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="230" y="135" width="20" height="8" fill="currentColor"/>
  <circle cx="240" cy="95" r="3" fill="#4c78a8"/>
  <circle cx="240" cy="52" r="8" fill="#f58518"/>
  <line x1="240" y1="60" x2="240" y2="130" stroke="#f58518" stroke-width="3"/>
  <text x="178" y="170" font-size="11" fill="#4c78a8">roll about heart: rider stays put</text>
</svg>

Imagine a train rolling upside down along straight track. If the rails twist about their own centreline, the riders, who sit well above that line, are swung round a wide circle: heads sweep out an arc and the roll feels violent. Heartlining flips the logic. The designer chooses the axis of the roll to run through the average rider's chest, roughly at heart height, and then moves the track around that axis. The rider stays almost still while the world turns.

Werner Stengel introduced the idea in 1976, a year after the clothoid loop. Because the rider's own path barely bends, the net force during a heartline roll is close to zero: it is the most relaxed inversion in the catalogue and the reason modern barrel rolls feel floaty rather than wrenching. It also keeps [lateral g](../ride-engineering/lateral-g.md) and the rotation sensed by the [semicircular canals](../human-factors/semicircular-canals.md) small.

Where riders sit changes the geometry. On an [inverted coaster](../ride-systems/inverted-coasters.md) the heart sits below the rail, on a [flying coaster](../ride-systems/flying-coasters.md) it lies prone, so each track is built around a different offset. Rocky Mountain Construction even brought heartline rolls to wooden layouts in the [hybrid era](../history/rmc-hybrid-era.md).

## Explore further
- `liseberg-stengel-coasters` — Werner Stengel and the Liseberg roller coasters
- `wikipedia-werner-stengel` — Werner Stengel
- `wikipedia-rocky-mountain-construction` — Rocky Mountain Construction
