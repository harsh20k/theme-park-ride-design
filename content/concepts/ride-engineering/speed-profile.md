---
id: speed-profile
title: Speed Profile & Simulation
land: ride-engineering
level: intermediate
abstraction: concept
parent: energy-and-motion
children: []
relations:
  - { type: enables, target: ride-layout-design }
  - { type: applies-to, target: digital-twins }
  - { type: applies-to, target: simulation-and-surrogates }
  - { type: applies-to, target: testing-and-commissioning }
  - { type: applies-to, target: software-toolkit }
summary: Simulating speed along the track is how designers prove the train clears every hill.
tags: [simulation, speed, software, validation, design]
visuals: [chart]
interactive_idea: "Scrub along a layout; a speed curve, a g readout and a 'margin to stall' indicator update together."
sources: [nolimits-2, coaster101-terminology, pendrill-stopping-train-2012, wikipedia-roller-coaster-safety]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: speed along a layout, ideal vs with losses",
  "width": 300, "height": 140,
  "data": {"values": [
    {"d": 0, "v": 2, "case": "ideal"}, {"d": 1, "v": 2, "case": "ideal"}, {"d": 2, "v": 30, "case": "ideal"}, {"d": 3, "v": 14, "case": "ideal"}, {"d": 4, "v": 26, "case": "ideal"}, {"d": 5, "v": 18, "case": "ideal"}, {"d": 6, "v": 24, "case": "ideal"},
    {"d": 0, "v": 2, "case": "with losses"}, {"d": 1, "v": 2, "case": "with losses"}, {"d": 2, "v": 29, "case": "with losses"}, {"d": 3, "v": 12, "case": "with losses"}, {"d": 4, "v": 23, "case": "with losses"}, {"d": 5, "v": 13, "case": "with losses"}, {"d": 6, "v": 18, "case": "with losses"}
  ]},
  "mark": "line",
  "encoding": {
    "x": {"field": "d", "type": "quantitative", "title": "Distance along track"},
    "y": {"field": "v", "type": "quantitative", "title": "Speed (m/s)"},
    "color": {"field": "case", "type": "nominal", "title": null}
  }
}
```

A speed profile is the train's velocity plotted against position along the track. It is the most useful curve in coaster design because almost everything derives from it: g-force at each curve, time between block brakes, energy left for the final hill, heat the brakes must absorb. Engineers build it by marching along the layout, converting height to speed and subtracting the losses from rolling resistance, drag and bearings at each step.

Two words from the Coaster101 glossary show what the profile protects against. A valley is an element where a slow train runs out of momentum and rolls back to the low point, stranding riders. A neutral slope is the grade that just keeps a train at constant speed. The profile must show margin against the first on the coldest, emptiest day while still respecting the force limits on the hottest, fullest one.

Consumer tools such as NoLimits 2 and in-house solvers make the loop interactive, letting the curve guide [ride layout design](../design-process/ride-layout-design.md) long before fabrication. Accelerometer runs during [testing and commissioning](../design-process/testing-and-commissioning.md) then calibrate the model against reality, work Pendrill's group has documented with brake-run data, and that calibrated model is the seed of a [digital twin](../ai-future/digital-twins.md).

## Explore further
- `nolimits-2` — NoLimits 2 Roller Coaster Simulation
- `coaster101-terminology` — Coasters-101: Roller Coaster Terminology
- `pendrill-stopping-train-2012` — Stopping a roller coaster train
