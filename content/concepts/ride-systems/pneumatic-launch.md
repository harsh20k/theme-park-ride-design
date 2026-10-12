---
id: pneumatic-launch
title: Pneumatic Launch
land: ride-systems
level: intermediate
abstraction: sub-concept
parent: launched-coasters
children: []
relations:
  - { type: applies-to, target: jerk-and-onset-rate }
  - { type: enables, target: drop-tower }
  - { type: applies-to, target: noise-exposure }
  - { type: contrasts-with, target: hydraulic-launch }
  - { type: applies-to, target: head-and-neck-loads }
summary: Compressed air instead of oil and nitrogen; simpler and fierce, but loud and less powerful at the top end.
tags: [launch, pneumatic, compressed-air, s-and-s]
visuals: [chart]
interactive_idea: "Compare launch curves: drag the acceleration slider and see how pneumatic, hydraulic and LSM reach the same exit speed over different distances."
sources: [s-s-air-launch-coaster, wikipedia-hypersonic-xlc, coaster101-launch-systems, wikipedia-launched-roller-coaster]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Published launch figures: speed reached and time taken",
  "width": 300, "height": 150,
  "data": {"values": [
    {"ride": "Hypersonic XLC 2001, pneumatic", "mph": 80, "s": 1.8},
    {"ride": "Xcelerator 2002, hydraulic", "mph": 82, "s": 2.3},
    {"ride": "Flight of Fear 1996, LIM", "mph": 54, "s": 4.0},
    {"ride": "Formula Rossa 2010, hydraulic", "mph": 149, "s": 4.9}
  ]},
  "mark": {"type": "point", "filled": true, "size": 120},
  "encoding": {
    "x": {"field": "s", "type": "quantitative", "title": "Seconds to top speed"},
    "y": {"field": "mph", "type": "quantitative", "title": "Top speed mph"},
    "color": {"field": "ride", "type": "nominal", "title": null}
  }
}
```

A pneumatic launch works like the hydraulic one with the oil taken out. Large compressors fill tanks with air; on dispatch the air is dumped into a long cylinder whose piston drags the train, or a catch car, down the launch track. Air is cheaper and simpler to handle than high-pressure hydraulics, but it stores less energy per tank and vents with a bang, so these launches are loud ([noise exposure](../human-factors/noise-exposure.md)) and top out lower than hydraulic rivals.

S&S Worldwide built the first one, Hypersonic XLC at Kings Dominion, in 2001: 0 to 80 mph in 1.8 seconds, the quickest acceleration of its day. The same year Dodonpa opened at Fuji-Q Highland in Japan. Both were brutal because the force arrives almost instantly ([jerk and onset rate](../ride-engineering/jerk-and-onset-rate.md)), which stresses riders' necks ([head and neck loads](../ride-engineering/head-and-neck-loads.md)) and machinery alike; Hypersonic closed in 2007. Maxx Force at Six Flags Great America, opened in 2019, is the modern version.

The same air technology, pointed upward, is S&S's Space Shot and Turbo Drop towers, which makes pneumatics the quiet workhorse of the [drop tower](../ride-systems/drop-tower.md) market even as coaster launches moved to [LSM](../ride-systems/lsm-lim-launch.md).

## Explore further
- `s-s-air-launch-coaster` — S&S Air Launch Coaster
- `wikipedia-hypersonic-xlc` — Hypersonic XLC (Wikipedia)
- `coaster101-launch-systems` — Coasters-101: Launch Systems
