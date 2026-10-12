---
id: parade-and-show-crowds
title: Parade & Show Crowd Planning
land: masterplanning
level: intermediate
abstraction: concept
parent: guest-flow-and-capacity
children: []
relations:
  - { type: applies-to, target: crowd-management }
  - { type: applies-to, target: entertainment-scheduling }
  - { type: applies-to, target: crowd-behavior }
  - { type: limits, target: emergency-access }
  - { type: applies-to, target: visual-attention }
summary: Designing routes, viewing areas and exits for the moments when thousands stop walking and stand still.
tags: [parade, fireworks, crowd, density, safety]
visuals: [svg]
interactive_idea: "Draw a parade route on a park map; the widget shades viewing depth and flags where crossing paths are cut."
sources: [gkstill-crowd-density, gkstill-phd-crowd-dynamics-ch3, wikipedia-magic-kingdom]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="10" y="80" width="300" height="24" fill="#ffd966" fill-opacity="0.6"/>
  <text x="120" y="96" font-size="11" stroke="none" fill="currentColor">parade route</text>
  <rect x="10" y="50" width="300" height="28" fill="#f4b183" fill-opacity="0.5"/>
  <rect x="10" y="106" width="300" height="28" fill="#f4b183" fill-opacity="0.5"/>
  <text x="14" y="68" font-size="11" stroke="none" fill="currentColor">standing crowd, highest density</text>
  <text x="14" y="124" font-size="11" stroke="none" fill="currentColor">standing crowd</text>
  <rect x="10" y="20" width="300" height="28" fill="#9ec5e8" fill-opacity="0.4"/>
  <rect x="10" y="136" width="300" height="28" fill="#9ec5e8" fill-opacity="0.4"/>
  <text x="14" y="38" font-size="11" stroke="none" fill="currentColor">moving lane kept clear behind the crowd</text>
  <text x="14" y="154" font-size="11" stroke="none" fill="currentColor">moving lane and crossing point</text>
  <line x1="160" y1="20" x2="160" y2="164" stroke-dasharray="4 3"/>
</svg>

A parade or a fireworks show changes the physics of the park. For twenty minutes, thousands of walking guests become a standing crowd, which packs far more tightly. Crowd scientist Keith Still separates static spaces, where people stand, from dynamic spaces, where they move; each needs its own density limit. A common ceiling for moving crowds is about four people per square metre; standing crowds press beyond that at the front.

Planners therefore design for the still moment. Parade routes get wide viewing bands on both sides with a kerb or rope line at the edge. Behind the watchers a lane stays clear for passing, and marked crossing points let guests reach the other half of the park, since a route like Magic Kingdom's, from Frontierland down Main Street, otherwise cuts it in two. Hubs are sized for the fireworks crowd, not the average hour.

The exit is the real test. When the show ends the whole crowd turns at once toward the gate, so [crowd management](../operations-business/crowd-management.md) staff, [scheduling](../operations-business/entertainment-scheduling.md) of a second show, and clear [emergency access](../masterplanning/emergency-access.md) lanes all come from the masterplan. [Crowd behaviour](../human-factors/crowd-behavior.md) is forgiving while people can see and brittle when they cannot.

## Explore further
- `gkstill-crowd-density` — Crowd density: static and dynamic spaces
- `gkstill-phd-crowd-dynamics-ch3` — Crowd Dynamics, PhD chapter 3 (Keith Still)
- `wikipedia-magic-kingdom` — Magic Kingdom (Wikipedia)
