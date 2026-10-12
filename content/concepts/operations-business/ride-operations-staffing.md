---
id: ride-operations-staffing
title: Ride Operations Staffing
land: operations-business
level: beginner
abstraction: concept
parent: park-operations
children: []
relations:
  - { type: applies-to, target: operator-training }
  - { type: limits, target: dispatch-interval }
  - { type: applies-to, target: dispatch-procedures }
  - { type: enables, target: rider-compliance }
  - { type: applies-to, target: astm-f770 }
summary: How many trained people a ride needs per shift, and why that number sets both its capacity and its cost.
tags: [operations, staffing, labour, training]
visuals: [svg]
interactive_idea: "Assign operators to positions on a coaster platform diagram; the simulation reports the resulting dispatch interval and labour cost per rider."
sources: [hersheypark-skyrush-winter-maintenance, iaapa-research, maister-psychology-of-waiting-lines]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="20" y="70" width="280" height="40" rx="6"/>
  <text x="26" y="62" font-size="11" fill="currentColor" stroke="none">Coaster platform: typical operator positions</text>
  <circle cx="45" cy="90" r="9" fill="#5aa0d8" stroke="none"/><text x="30" y="130" font-size="10" fill="currentColor" stroke="none">grouper</text>
  <circle cx="110" cy="90" r="9" fill="#5aa0d8" stroke="none"/><text x="90" y="130" font-size="10" fill="currentColor" stroke="none">load side</text>
  <circle cx="175" cy="90" r="9" fill="#5aa0d8" stroke="none"/><text x="150" y="130" font-size="10" fill="currentColor" stroke="none">unload side</text>
  <circle cx="240" cy="90" r="9" fill="#e8b84a" stroke="none"/><text x="215" y="130" font-size="10" fill="currentColor" stroke="none">panel operator</text>
  <circle cx="285" cy="90" r="9" fill="#5aa0d8" stroke="none"/><text x="262" y="150" font-size="10" fill="currentColor" stroke="none">entrance host</text>
  <text x="26" y="170" font-size="10" fill="currentColor" stroke="none">Each position has a checklist; the panel operator gives the final dispatch.</text>
</svg>

Every ride has a minimum crew written into its operating procedures: a panel operator who controls dispatch, attendants who check restraints on each side, a grouper who sorts parties into rows, and an entrance host managing the merge and height checks. Drop below the minimum and the ride does not open; add positions and the dispatch interval usually falls, because tasks happen in parallel.

That makes staffing a capacity decision as much as a cost one. Labour is the largest controllable expense in a park day, so managers scale crews to forecast attendance: a full platform on a design-day Saturday, a skeleton crew on a rainy Tuesday. The exact crew sizes vary by ride and company and are not published, so treat the diagram as typical rather than a rule.

Training is the other half. Operators are certified per ride, drilled on [dispatch procedures](../safety-standards/dispatch-procedures.md) and evacuations, and audited; the ASTM F770 practice sets out owner responsibilities for operation and operator training in the U.S. Good crews also carry the show, which is where [cast and guest interaction](../operations-business/service-culture.md) begins. See [operator training](../safety-standards/operator-training.md) for the safety side.

## Explore further
- `hersheypark-skyrush-winter-maintenance` — Behind the Scenes of Winter Maintenance on Skyrush
- `iaapa-research` — IAAPA Research: Benchmark Reports, Outlooks and Economic Impact Studies
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines
