---
id: motion-cueing
title: Motion Cueing & Washout
land: ride-systems
level: advanced
abstraction: concept
parent: simulators-and-motion-bases
children: []
relations:
  - { type: applies-to, target: perceptual-thresholds }
  - { type: applies-to, target: otolith-organs }
  - { type: limits, target: motion-sickness }
  - { type: applies-to, target: semicircular-canals }
  - { type: enables, target: enhanced-motion-vehicle }
summary: Fake the onset of a motion, then drift the platform back to centre slower than the body can notice.
tags: [simulators, washout, cueing, perception, control]
visuals: [chart]
interactive_idea: "Feed a recorded acceleration trace through an adjustable washout filter and watch platform travel versus what riders would perceive."
sources: [nahon-reid-1990-motion-drive-algorithms, wikipedia-motion-simulator, wikipedia-stewart-platform]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: a sustained acceleration and what the platform actually does",
  "width": 300, "height": 150,
  "data": {"values": [
    {"t": 0, "s": "Vehicle in film", "a": 0}, {"t": 1, "s": "Vehicle in film", "a": 1}, {"t": 2, "s": "Vehicle in film", "a": 1},
    {"t": 3, "s": "Vehicle in film", "a": 1}, {"t": 4, "s": "Vehicle in film", "a": 1}, {"t": 5, "s": "Vehicle in film", "a": 1},
    {"t": 0, "s": "Platform surge", "a": 0}, {"t": 1, "s": "Platform surge", "a": 0.9}, {"t": 2, "s": "Platform surge", "a": 0.4},
    {"t": 3, "s": "Platform surge", "a": 0.1}, {"t": 4, "s": "Platform surge", "a": -0.05}, {"t": 5, "s": "Platform surge", "a": 0},
    {"t": 0, "s": "Platform tilt as g", "a": 0}, {"t": 1, "s": "Platform tilt as g", "a": 0.2}, {"t": 2, "s": "Platform tilt as g", "a": 0.6},
    {"t": 3, "s": "Platform tilt as g", "a": 0.85}, {"t": 4, "s": "Platform tilt as g", "a": 0.9}, {"t": 5, "s": "Platform tilt as g", "a": 0.9}
  ]},
  "mark": "line",
  "encoding": {
    "x": {"field": "t", "type": "quantitative", "title": "Seconds"},
    "y": {"field": "a", "type": "quantitative", "title": "Felt acceleration (relative)"},
    "color": {"field": "s", "type": "nominal", "title": null}
  }
}
```

A motion base has perhaps a metre of travel, but a film can accelerate for ten seconds. Motion cueing is the set of tricks that bridges the gap. The body senses the **start** of an acceleration sharply but is poor at judging whether it continues, so the platform reproduces the onset, then quietly stops. That stop and the slow return to centre is the **washout**, and it is done below the [perceptual thresholds](../human-factors/perceptual-thresholds.md) of the inner ear so riders never feel the platform sneaking home.

For sustained pushes a second trick, **tilt coordination**, leans the seat back slowly so gravity supplies a steady "forward" force to the [otolith organs](../human-factors/otolith-organs.md), while the tilt itself stays slower than the [semicircular canals](../human-factors/semicircular-canals.md) can detect. Classical washout filters are a stack of high-pass and low-pass filters tuned by hand; Nahon and Reid's 1990 review is the standard account, and adaptive and optimal variants exist.

Done well, cueing is invisible; done badly it is the source of false cues and [motion sickness](../human-factors/motion-sickness.md), especially in fast manoeuvres that hit the platform's limits. The same ideas, tuned for a moving chassis, are what make the [Enhanced Motion Vehicle](../ride-systems/enhanced-motion-vehicle.md) feel like a chase at 14 mph.

## Explore further
- `nahon-reid-1990-motion-drive-algorithms` — Simulator motion-drive algorithms: a designer's perspective
- `wikipedia-motion-simulator` — Motion simulator (Wikipedia)
- `wikipedia-stewart-platform` — Stewart platform (Wikipedia)
