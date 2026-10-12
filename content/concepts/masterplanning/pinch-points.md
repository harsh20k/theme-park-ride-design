---
id: pinch-points
title: Pinch Points & Bottlenecks
land: masterplanning
level: intermediate
abstraction: concept
parent: guest-flow-and-capacity
children: []
relations:
  - { type: causes, target: crowding-and-enclosure }
  - { type: limits, target: emergency-access }
  - { type: applies-to, target: crowd-management }
  - { type: applies-to, target: queueing-theory }
  - { type: causes, target: personal-space-and-density }
summary: Narrow spots where paths, exits and queues collide and the crowd slows to a shuffle.
tags: [circulation, congestion, safety, walkways]
visuals: [svg]
interactive_idea: "Narrow a path in a flow simulation and watch density build upstream until it crosses level-of-service F."
sources: [gkstill-phd-crowd-dynamics-ch3, fhwa-fruin-walkway-los, fruin-pedestrian-planning-1971]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M10 40 L120 40 L170 75 L230 75 L230 105 L170 105 L120 140 L10 140 Z" fill="#9ec5e8" fill-opacity="0.3"/>
  <g fill="#f4b183" stroke="none">
    <circle cx="30" cy="60" r="5"/><circle cx="50" cy="90" r="5"/><circle cx="40" cy="120" r="5"/>
    <circle cx="80" cy="55" r="5"/><circle cx="90" cy="100" r="5"/><circle cx="110" cy="70" r="5"/>
    <circle cx="125" cy="90" r="5"/><circle cx="140" cy="80" r="5"/><circle cx="150" cy="95" r="5"/>
    <circle cx="160" cy="85" r="5"/><circle cx="165" cy="98" r="5"/><circle cx="178" cy="90" r="5"/>
    <circle cx="190" cy="88" r="5"/><circle cx="205" cy="92" r="5"/><circle cx="220" cy="88" r="5"/>
  </g>
  <text x="14" y="30" font-size="11" stroke="none" fill="currentColor">Wide path: free flow</text>
  <text x="150" y="130" font-size="11" stroke="none" fill="currentColor">Pinch: flow capped, density rises</text>
  <line x1="250" y1="90" x2="300" y2="90" marker-end="url(#a)"/>
  <defs><marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>
</svg>

A pinch point is any place where the walkway narrows, two streams merge, or a queue spills across a path. Flow through a corridor is capped by its narrowest width, so when more people arrive than the pinch can pass, density builds upstream and the crowd stalls. Keith Still's work on crowd dynamics shows that flow actually falls as density rises past a few people per square metre, which is why a bottleneck gets worse, not better, as the crowd pushes.

Parks collect pinch points in predictable places: the hub at fireworks time, a bridge between lands, a ride exit that dumps into a shop, a parade route that cuts the park in half, and the single exit at closing. Each one raises [density](../human-factors/personal-space-and-density.md), creates a sense of [crowding](../sensory-environment/crowding-and-enclosure.md), and can block [emergency access](../masterplanning/emergency-access.md).

Planners fix them by widening the pinch, splitting the flow, timing shows to stagger demand, or moving the queue entrance so it no longer bites the path. The same [queueing theory](../operations-business/queueing-theory.md) used for rides applies to corridors; the Fruin [level of service](../masterplanning/level-of-service.md) scale gives the target.

## Explore further
- `gkstill-phd-crowd-dynamics-ch3` — Crowd Dynamics, PhD chapter 3 (Keith Still)
- `fhwa-fruin-walkway-los` — Capacity Analysis of Pedestrian and Bicycle Facilities
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (Fruin)
