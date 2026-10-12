---
id: park-structure
title: Park Structure
land: masterplanning
level: beginner
abstraction: super-concept
parent: null
children: [hub-and-spoke, loop-and-linear-layouts, land-design, entry-sequence, central-icon, land-transitions, site-selection]
relations:
  - { type: enables, target: wayfinding }
  - { type: applies-to, target: spatial-storytelling }
  - { type: enables, target: weenies }
  - { type: limits, target: walking-fatigue }
  - { type: example-of, target: disneyland-1955 }
summary: The big shapes of a park, from entry to hub to lands, decide how guests move and feel.
tags: [layout, masterplan, circulation, wayfinding]
visuals: [mermaid]
interactive_idea: "Drag lands around a hub or a loop and watch a simulated crowd's walking distance and backtracking change."
sources: [themedattraction-master-planning, falcons-master-planning-process, hench-designing-disney]
confidence: high
---
```mermaid
flowchart LR
  P["Parking and arrival"] --> E["Entry sequence"]
  E --> I["Central icon"]
  I --> H{"Hub or loop"}
  H --> L1["Land A"]
  H --> L2["Land B"]
  H --> L3["Land C"]
  L1 -. "transition" .-> L2
  L2 -. "transition" .-> L3
  S["Site and context"] --- H
```

Park structure is the skeleton of a theme park: where you arrive, what pulls you forward, how the themed zones connect, and what the site itself allows. Planners usually settle it before any single ride is drawn, because the structure sets walking distances, sightlines and crowd behaviour for decades.

The classic answer is Disneyland's [hub-and-spoke](../masterplanning/hub-and-spoke.md): one entrance, a [central icon](../masterplanning/central-icon.md) as the visual magnet, and lands fanning out from a plaza. Universal's parks around a lagoon show the other family, the [loop and linear layouts](../masterplanning/loop-and-linear-layouts.md). Either way the plan is read through a staged [entry sequence](../masterplanning/entry-sequence.md), divided into [themed lands](../masterplanning/land-design.md), stitched together with careful [transitions](../masterplanning/land-transitions.md), and shaped by [site selection](../masterplanning/site-selection.md).

Structure is also psychology. Clear structure supports [wayfinding](../human-factors/wayfinding.md) and lowers [walking fatigue](../human-factors/walking-fatigue.md); strong icons act as [weenies](../story-experience/weenies.md) that make a map unnecessary.

## Explore further
- `themedattraction-master-planning` — Theme Park Master Planning (Peter Alexander)
- `falcons-master-planning-process` — How to Design a Theme Park: Master Planning Process
- `hench-designing-disney` — Designing Disney (John Hench)
