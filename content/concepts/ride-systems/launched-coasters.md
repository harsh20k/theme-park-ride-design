---
id: launched-coasters
title: Launched Coasters
land: ride-systems
level: beginner
abstraction: concept
parent: roller-coasters
children: [lsm-lim-launch, hydraulic-launch, pneumatic-launch, flywheel-and-catapult-launch]
relations:
  - { type: example-of, target: launch-era }
  - { type: contrasts-with, target: lift-systems }
  - { type: applies-to, target: jerk-and-onset-rate }
  - { type: enables, target: anticipation-and-dread }
  - { type: applies-to, target: speed-profile }
summary: Coasters that get their energy from a short burst of acceleration instead of a lift hill.
tags: [coasters, launch, acceleration, propulsion]
visuals: [chart]
interactive_idea: "Pick a launch type and target speed; a live plot shows acceleration, g-force and track length needed."
sources: [wikipedia-launched-roller-coaster, coaster101-launch-systems]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: speed over time, lift hill versus launch",
  "width": 300, "height": 150,
  "data": {"values": [
    {"t": 0, "type": "Lift hill", "v": 0}, {"t": 20, "type": "Lift hill", "v": 3}, {"t": 40, "type": "Lift hill", "v": 3},
    {"t": 45, "type": "Lift hill", "v": 30}, {"t": 60, "type": "Lift hill", "v": 22},
    {"t": 0, "type": "Launch", "v": 0}, {"t": 3, "type": "Launch", "v": 30}, {"t": 15, "type": "Launch", "v": 24},
    {"t": 30, "type": "Launch", "v": 18}, {"t": 60, "type": "Launch", "v": 10}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "t", "type": "quantitative", "title": "Seconds from dispatch"},
    "y": {"field": "v", "type": "quantitative", "title": "Speed m/s"},
    "color": {"field": "type", "type": "nominal", "title": null}
  }
}
```

A launched coaster skips the slow climb. Instead of a chain lift, a short stretch of track throws the train to full speed in a few seconds, and the rest of the course spends that energy as usual. The thrill is front-loaded: the launch itself is the moment people remember, which is why so many designs stage a countdown or a stalled "false start" first ([anticipation and dread](../human-factors/anticipation-and-dread.md)).

Four families of hardware do the throwing. **Linear motors** (LIM and LSM) push magnetically with no moving parts. **Hydraulic** launches store energy in nitrogen accumulators and reel the train in with a cable and catch car. **Pneumatic** launches do the same with compressed air. Older **flywheel and weight-drop** systems spun or dropped a mass to wind a cable. Friction-tyre launches, as on The Incredible Hulk Coaster, are a fifth, simpler method.

Designers care about more than top speed. How fast the acceleration arrives ([jerk and onset rate](../ride-engineering/jerk-and-onset-rate.md)) decides comfort, and the launch sets the whole [speed profile](../ride-engineering/speed-profile.md) of the ride. The [launch era](../history/launch-era.md) began in 1996 and now dominates new thrill coasters, partly because launches need less height and land than a [lift system](../ride-engineering/lift-systems.md).

## Explore further
- `wikipedia-launched-roller-coaster` — Launched roller coaster (Wikipedia)
- `coaster101-launch-systems` — Coasters-101: Launch Systems
