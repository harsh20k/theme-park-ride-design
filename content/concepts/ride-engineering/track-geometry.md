---
id: track-geometry
title: Track Geometry
land: ride-engineering
level: intermediate
abstraction: super-concept
parent: null
children: [clothoid-loop, heartline, banking, track-elements, spline-transitions, airtime-hills, track-types]
relations:
  - { type: enables, target: ride-layout-design }
  - { type: applies-to, target: coaster-anatomy }
  - { type: applies-to, target: acceleration-envelopes }
  - { type: enables, target: procedural-layout }
  - { type: applies-to, target: software-toolkit }
summary: Track geometry is the art of shaping curves so forces on riders stay smooth and legal.
tags: [geometry, curvature, track, design, physics]
visuals: [mermaid]
interactive_idea: "Bend a 3D spline with handles; a heads-up display shows curvature, bank angle and the resulting g at the rider's heart."
sources: [liseberg-stengel-coasters, wikipedia-euler-spiral, wikipedia-roller-coaster-elements, nolimits-2]
confidence: high
---
```mermaid
mindmap
  root(("Track geometry"))
    Curvature
      Clothoid loop
      Spline transitions
      Airtime hills
    Orientation
      Banking
      Heartline
    Vocabulary
      Track elements catalogue
    Hardware
      Track types
```

A coaster track is a line through space, and everything the rider feels comes from how that line bends and rolls. Curvature decides the size of the force; the rate of change of curvature decides how abruptly it arrives; bank and roll decide which way it points. Track geometry is the discipline of controlling all three at once, so that the forces on the rider stay inside the [acceleration envelopes](../ride-engineering/acceleration-envelopes.md) while still delivering the drama.

Two ideas from Werner Stengel underpin modern practice. The [clothoid loop](../ride-engineering/clothoid-loop.md) replaces the circle with a curve whose radius changes gradually, and [heartline](../ride-engineering/heartline.md) design rolls the track about the rider's chest rather than the rail centre. [Banking](../ride-engineering/banking.md) and [spline transitions](../ride-engineering/spline-transitions.md) apply the same thinking to turns, while [airtime hills](../ride-engineering/airtime-hills.md) show how a vertical curve becomes a feeling. The [track elements catalogue](../ride-engineering/track-elements.md) names the results and [track types](../ride-engineering/track-types.md) describe the steel and wood that carry them. All of this becomes concrete in [ride layout design](../design-process/ride-layout-design.md).

## Explore further
- `liseberg-stengel-coasters` — Werner Stengel and the Liseberg roller coasters
- `wikipedia-euler-spiral` — Euler spiral
- `nolimits-2` — NoLimits 2 Roller Coaster Simulation
