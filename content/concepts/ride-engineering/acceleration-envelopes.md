---
id: acceleration-envelopes
title: Acceleration Envelopes
land: ride-engineering
level: advanced
abstraction: concept
parent: forces-and-tolerance
children: []
relations:
  - { type: applies-to, target: astm-f2291 }
  - { type: applies-to, target: en-13814 }
  - { type: limits, target: ride-layout-design }
  - { type: enables, target: speed-profile }
  - { type: applies-to, target: iso-17842 }
summary: Standards draw a closed region of allowed accelerations; a layout must stay inside it.
tags: [standards, g-force, envelope, design-limits, astm]
visuals: [svg]
interactive_idea: "Scrub through a simulated ride; a dot traces the Gx-Gz path inside an illustrative envelope and turns red when it leaves."
sources: [astm-f2291-design-practice, wikipedia-werner-stengel, pendrill-eager-jerk-snap-2020, coaster101-flip-flap-g-force]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative acceleration envelope in the vertical and fore-aft g plane">
  <line x1="160" y1="10" x2="160" y2="170" stroke="currentColor" stroke-width="1"/>
  <line x1="20" y1="110" x2="300" y2="110" stroke="currentColor" stroke-width="1"/>
  <path d="M100 150 L220 150 L270 110 L250 60 L200 30 L120 30 L70 60 L50 110 Z" fill="#4c78a8" fill-opacity="0.25" stroke="#4c78a8" stroke-width="2"/>
  <path d="M120 140 L200 140 L235 110 L225 75 L190 55 L130 55 L95 75 L85 110 Z" fill="#f58518" fill-opacity="0.25" stroke="#f58518" stroke-width="2"/>
  <circle cx="160" cy="110" r="3" fill="currentColor"/>
  <text x="165" y="22" font-size="11" fill="currentColor">+Gz into seat</text>
  <text x="165" y="166" font-size="11" fill="currentColor">-Gz out of seat</text>
  <text x="236" y="104" font-size="11" fill="currentColor">+Gx</text>
  <text x="24" y="104" font-size="11" fill="currentColor">-Gx</text>
  <text x="24" y="176" font-size="10" fill="currentColor">illustrative: outer = short peaks, inner = longer holds</text>
</svg>

An acceleration envelope is a map of where a ride is allowed to go. Plot vertical g against fore-aft g and the standard draws a closed shape; the train's combined acceleration at every instant must stay inside it. Separate envelopes cover the lateral axis and combinations, and the shape shrinks as duration grows, so a short pull-out may use a region a long helix may not.

ASTM F2291, the design practice from the F24 committee, holds these limits in its acceleration section, with an appendix on their basis. Europe's [EN 13814](../safety-standards/en-13814.md) and the international [ISO 17842](../safety-standards/iso-17842.md) carry equivalent diagrams, and recent ASTM work items describe harmonising the treatment of reversals, rapid direction changes, with the 2026 European text. Werner Stengel's firm has long sat on these committees and helped turn its biomechanical judgement into published curves.

The exact numbers are licensed content and change by edition, so this card gives none; figures quoted elsewhere, such as a 6 g cap for exposures under 0.8 seconds, should be treated as medium confidence until checked against the current [ASTM F2291](../safety-standards/astm-f2291.md). In practice the envelope is a hard constraint on [ride layout design](../design-process/ride-layout-design.md): a [speed profile](../ride-engineering/speed-profile.md) is iterated until every point sits inside.

## Explore further
- `astm-f2291-design-practice` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `wikipedia-werner-stengel` — Werner Stengel
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration
