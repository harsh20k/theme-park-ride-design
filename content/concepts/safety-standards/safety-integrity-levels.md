---
id: safety-integrity-levels
title: Safety Integrity Levels
land: safety-standards
level: advanced
abstraction: concept
parent: design-safety
children: []
relations:
  - { type: applies-to, target: show-control-systems }
  - { type: applies-to, target: sensors-and-switches }
  - { type: enables, target: redundancy-and-fail-safe }
  - { type: applies-to, target: robot-arm-ride }
  - { type: applies-to, target: ride-control-systems }
summary: Numeric targets from IEC 61508 and ISO 13849 that say how rarely a safety function is allowed to fail.
tags: [sil, performance-level, iec-61508, iso-13849, functional-safety]
visuals: [chart]
interactive_idea: "Choose severity, exposure and avoidability for a hazard and the widget walks the ISO 13849 risk graph to a required performance level."
sources: [iec-61508-1-2010, iso-13849-1-2023, wikipedia-safety-integrity-level]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "IEC 61508 high-demand mode: maximum dangerous failures per hour by SIL",
  "width": 300, "height": 140,
  "data": {"values": [
    {"sil": "SIL 1", "exp": 5, "label": "< 1e-5"},
    {"sil": "SIL 2", "exp": 6, "label": "< 1e-6"},
    {"sil": "SIL 3", "exp": 7, "label": "< 1e-7"},
    {"sil": "SIL 4", "exp": 8, "label": "< 1e-8"}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "sil", "type": "nominal", "title": null},
    "y": {"field": "exp", "type": "quantitative", "title": "Order of magnitude of allowed failure rate per hour (10^-n)"},
    "tooltip": [{"field": "label", "title": "PFH upper bound"}]
  }
}
```

How safe is "safe enough"? Functional safety standards answer with numbers. IEC 61508 defines four Safety Integrity Levels. For a safety function that is working continuously, like a block-zone interlock, each level caps the rate of dangerous failures per hour: SIL 1 allows fewer than one in a hundred thousand, SIL 4 fewer than one in a hundred million.

Machinery designers more often use ISO 13849-1, which expresses the same idea as Performance Levels a through e. You reach a required PL by walking a risk graph: how severe the injury, how often people are exposed, how easily they could avoid it. You then prove the achieved PL from the architecture category, component reliability (mean time to dangerous failure), diagnostic coverage and resistance to common-cause failure.

Ride standards such as EN 13814 point to these frameworks for safety-related control functions. In practice a restraint-locked interlock, a lift-hill anti-collision function or the zone-separation logic on a [robot-arm ride](../ride-systems/robot-arm-ride.md) will be specified at a given PL or SIL, which drives the choice of [sensors and switches](../ride-engineering/sensors-and-switches.md), the [redundancy](../safety-standards/redundancy-and-fail-safe.md) architecture and the separation between [show control](../show-technology/show-control-systems.md) and the safety-rated [ride control system](../safety-standards/ride-control-systems.md).

## Explore further
- `iec-61508-1-2010` — IEC 61508-1:2010 Functional safety of E/E/PE safety-related systems
- `iso-13849-1-2023` — ISO 13849-1:2023 Safety-related parts of control systems, Part 1
- `wikipedia-safety-integrity-level` — Wikipedia: Safety integrity level
