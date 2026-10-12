---
id: load-unload-design
title: Load & Unload Design
land: operations-business
level: intermediate
abstraction: sub-concept
parent: throughput-math
children: []
relations:
  - { type: applies-to, target: load-as-story }
  - { type: enables, target: omnimover }
  - { type: applies-to, target: accessible-vehicles }
  - { type: limits, target: dispatch-interval }
  - { type: applies-to, target: trackless-ride }
summary: Separating load from unload, and grouping riders before the gate, turns platform time into ride capacity.
tags: [operations, throughput, station, platform]
visuals: [svg]
interactive_idea: "Toggle between a single-platform station and a split load/unload station and watch simulated dwell time and riders per hour update."
sources: [disneyblog-capacity-analysis-methodology, maister-psychology-of-waiting-lines]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="10" y="20" width="300" height="60" rx="6"/>
  <text x="20" y="40" font-size="11" fill="currentColor" stroke="none">Single platform: unload then load on the same spot</text>
  <rect x="20" y="50" width="80" height="20" fill="#e8b84a" stroke="none"/>
  <rect x="100" y="50" width="120" height="20" fill="#5aa0d8" stroke="none"/>
  <text x="25" y="64" font-size="10" fill="#000" stroke="none">unload</text>
  <text x="130" y="64" font-size="10" fill="#000" stroke="none">load + check</text>
  <rect x="10" y="100" width="300" height="70" rx="6"/>
  <text x="20" y="120" font-size="11" fill="currentColor" stroke="none">Split station: unload upstream, load downstream</text>
  <rect x="20" y="130" width="80" height="14" fill="#e8b84a" stroke="none"/>
  <rect x="20" y="150" width="120" height="14" fill="#5aa0d8" stroke="none"/>
  <text x="110" y="141" font-size="10" fill="currentColor" stroke="none">unload</text>
  <text x="150" y="161" font-size="10" fill="currentColor" stroke="none">load, overlapped with the next train</text>
</svg>

Load and unload design is where a ride's theoretical capacity is won or lost. In a single-platform station, riders get off, then riders get on, then restraints are checked, all in sequence. A split station puts unload upstream of load so the two happen in parallel on different trains; a dual-loading station runs two platforms side by side and alternates.

Three details do most of the work. First, grouping: a cast member assigns parties to numbered rows before the gates open, so nobody is counting seats when the train arrives. Second, airgates that open all at once, so the whole train fills in one move. Third, a separate path for [accessible vehicles](../human-factors/accessible-vehicles.md) and transfers so one slow boarding does not hold the whole platform.

Continuous loaders sidestep the problem. The [Omnimover](../ride-systems/omnimover.md) and many [trackless rides](../ride-systems/trackless-ride.md) move past a slow conveyor, so loading never stops the system. Whatever the layout, the platform can still be a story beat; see [load area as story moment](../story-experience/load-as-story.md).

## Explore further
- `disneyblog-capacity-analysis-methodology` — Capacity Analysis Methodology
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines
