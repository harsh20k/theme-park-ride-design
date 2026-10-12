---
id: banking
title: Banking & Superelevation
land: ride-engineering
level: intermediate
abstraction: concept
parent: track-geometry
children: []
relations:
  - { type: limits, target: lateral-g }
  - { type: applies-to, target: urban-planning-parallels }
  - { type: applies-to, target: monorail-and-people-movers }
  - { type: applies-to, target: vehicle-suspension }
  - { type: enables, target: family-coasters }
summary: Tilting the track in a turn converts a sideways shove into a push through the seat.
tags: [banking, superelevation, turns, lateral-g, railway]
visuals: [svg]
interactive_idea: "Rotate a track cross-section in a turn; arrows show the sideways and seat-ward components of the force at the chosen speed."
sources: [wikipedia-cant-superelevation, wikipedia-track-transition-curve, wikipedia-roller-coaster-elements, wikipedia-roller-coaster-safety]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flat turn versus banked turn cross-sections with force arrows">
  <line x1="30" y1="120" x2="130" y2="120" stroke="currentColor" stroke-width="4"/>
  <rect x="65" y="92" width="30" height="26" rx="3" fill="#4c78a8"/>
  <line x1="80" y1="105" x2="40" y2="105" stroke="#f58518" stroke-width="3"/>
  <polygon points="34,105 44,99 44,111" fill="#f58518"/>
  <text x="36" y="150" font-size="11" fill="currentColor">flat: sideways force</text>
  <g transform="rotate(-30 240 120)">
    <line x1="190" y1="120" x2="290" y2="120" stroke="currentColor" stroke-width="4"/>
    <rect x="225" y="92" width="30" height="26" rx="3" fill="#4c78a8"/>
    <line x1="240" y1="118" x2="240" y2="150" stroke="#f58518" stroke-width="3"/>
    <polygon points="240,156 234,146 246,146" fill="#f58518"/>
  </g>
  <text x="186" y="170" font-size="11" fill="currentColor">banked: force through seat</text>
</svg>

A car taking a flat corner needs something to push it toward the centre of the turn. On a coaster that something is the guide wheels, and the rider feels it as a sideways shove against the restraint. Banking, which railway engineers call cant or superelevation, tilts the track so the seat itself does the pushing. At the balance angle, where the tangent of the bank equals speed squared over gravity times radius, the rider feels no sideways force: just a slightly heavier version of sitting still.

Real track rarely sits exactly at balance. Trains run at a range of speeds, so engineers accept a small cant deficiency, leaving a hint of lean the rider can feel. More important is how the bank is introduced. It cannot jump from flat to tilted; it must be rolled in along a transition curve while the curvature builds, which is the same problem solved by [spline transitions](../ride-engineering/spline-transitions.md). Done well, a banked helix keeps [lateral g](../ride-engineering/lateral-g.md) near zero; done badly, it bangs heads.

The principle is shared with highways and [monorails](../ride-systems/monorail-and-people-movers.md), and it is what lets gentle [family coasters](../ride-systems/family-coasters.md) take tight turns at speed without feeling rough. 

## Explore further
- `wikipedia-cant-superelevation` — Cant (road/rail)
- `wikipedia-track-transition-curve` — Track transition curve
- `wikipedia-roller-coaster-elements` — List of roller coaster elements
