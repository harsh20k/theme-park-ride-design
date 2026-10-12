---
id: spline-transitions
title: Transitions & Spline Design
land: ride-engineering
level: advanced
abstraction: concept
parent: track-geometry
children: []
relations:
  - { type: limits, target: jerk-and-onset-rate }
  - { type: applies-to, target: previs }
  - { type: applies-to, target: software-toolkit }
  - { type: enables, target: procedural-layout }
  - { type: applies-to, target: urban-planning-parallels }
summary: Transitions ramp curvature and bank gradually so forces glide in rather than jump.
tags: [splines, transitions, curvature, cad, smoothness]
visuals: [chart]
interactive_idea: "Compare a stepped and a ramped curvature profile side by side; a rider head icon jolts on the step and glides on the ramp."
sources: [wikipedia-track-transition-curve, wikipedia-euler-spiral, nolimits-2, coaster101-terminology]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: curvature along a turn entry, abrupt vs transition spiral",
  "width": 300, "height": 140,
  "data": {"values": [
    {"s": 0, "k": 0, "type": "abrupt"}, {"s": 9.9, "k": 0, "type": "abrupt"}, {"s": 10, "k": 1, "type": "abrupt"}, {"s": 30, "k": 1, "type": "abrupt"},
    {"s": 0, "k": 0, "type": "spiral"}, {"s": 10, "k": 0.33, "type": "spiral"}, {"s": 20, "k": 0.67, "type": "spiral"}, {"s": 30, "k": 1, "type": "spiral"}
  ]},
  "mark": "line",
  "encoding": {
    "x": {"field": "s", "type": "quantitative", "title": "Distance along track"},
    "y": {"field": "k", "type": "quantitative", "title": "Curvature"},
    "color": {"field": "type", "type": "nominal", "title": null}
  }
}
```

Join a straight to a circle directly and the curvature, and with it the sideways force, goes from zero to full in one step. Railways learned this as speeds rose and inserted easements: short lengths whose curvature grows gradually. The simplest has curvature proportional to distance, the Euler spiral, named the railway transition spiral by Arthur Talbot. It gives constant [jerk](../ride-engineering/jerk-and-onset-rate.md) rather than an infinite spike, and the clothoid loop is the same curve wrapped into a circle.

Coasters add a twist, literally. Bank must roll in at the same time as curvature builds, and in three dimensions the roll about the heartline has its own rate and acceleration. A pure Euler spiral has unbounded roll acceleration at its ends, so modern practice uses smoother splines whose curvature and roll both start and finish with zero slope. Designers may even work backwards, in what Coaster101 calls force vector design: specify g-forces over time and let software integrate the track. Tools such as NoLimits 2 and in-house solvers make this interactive, feeding [previs](../design-process/previs.md) and the wider [software toolkit](../careers/software-toolkit.md), and the same maths underlies [procedural layout](../ai-future/procedural-layout.md) experiments. Road engineers, as [urban planning parallels](../masterplanning/urban-planning-parallels.md) show, solve the flat version daily.

## Explore further
- `wikipedia-track-transition-curve` — Track transition curve
- `wikipedia-euler-spiral` — Euler spiral
- `nolimits-2` — NoLimits 2 Roller Coaster Simulation
