---
id: anthropometrics
title: Anthropometrics
land: human-factors
level: intermediate
abstraction: concept
parent: comfort-and-body
children: [percentile-design, seat-width-and-hip-breadth]
relations:
  - { type: enables, target: patron-accommodation }
  - { type: applies-to, target: restraint-mechanisms }
  - { type: applies-to, target: reach-envelope }
  - { type: applies-to, target: seat-and-containment }
  - { type: applies-to, target: cultural-differences }
summary: Measured body sizes from large surveys, used to decide who a seat and restraint will fit.
tags: [anthropometrics, data, body-size, restraints]
visuals: [chart]
interactive_idea: "Pick a measurement (stature, hip breadth, sitting height) and a percentile range; a seat outline redraws to show who fits."
sources: [ansur-ii-open-design-lab, caesar-final-report-vol1, astm-f2291-design-standard]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: a bell-shaped spread of body size and the 5th to 95th percentile band",
  "width": 300, "height": 150,
  "data": {"values": [
    {"x": 145, "y": 1}, {"x": 150, "y": 3}, {"x": 155, "y": 8}, {"x": 160, "y": 16}, {"x": 165, "y": 24},
    {"x": 170, "y": 28}, {"x": 175, "y": 24}, {"x": 180, "y": 16}, {"x": 185, "y": 8}, {"x": 190, "y": 3}, {"x": 195, "y": 1}
  ]},
  "layer": [
    {"mark": {"type": "area", "opacity": 0.35, "line": true}, "encoding": {"x": {"field": "x", "type": "quantitative", "title": "Stature, cm"}, "y": {"field": "y", "type": "quantitative", "title": "Share of people"}}},
    {"mark": {"type": "rule", "strokeDash": [4, 3]}, "data": {"values": [{"x": 153}, {"x": 187}]}, "encoding": {"x": {"field": "x", "type": "quantitative"}}}
  ]
}
```

Anthropometrics is the measurement of human bodies, collected into datasets that designers can query: stature, sitting height, hip breadth, thigh clearance, reach. The two surveys most often cited are **ANSUR II**, a 2012 US Army survey of 6,068 soldiers with 93 measurements each, freely downloadable from Penn State's OPEN Design Lab, and **CAESAR**, the first large 3D body-scan survey, run by the US Air Force with partners in the Netherlands and Italy and published in 2002.

Each has a bias. Soldiers are fitter and younger than park guests; CAESAR is civilian but now two decades old. Designers correct for this, and for regional differences, because the guest population at a park in Shanghai is not the one in Orlando, a point that feeds [cultural differences](../human-factors/cultural-differences.md) in design.

The data drives hard decisions. [Patron accommodation](../safety-standards/patron-accommodation.md) clauses in ASTM F2291 require designers to define the range of riders a [restraint](../ride-engineering/restraint-mechanisms.md) must hold. [Reach envelopes](../safety-standards/reach-envelope.md) use arm length percentiles to keep hands away from structure. The two child cards, [percentile design](../human-factors/percentile-design.md) and [seat width](../human-factors/seat-width-and-hip-breadth.md), show how a single number from these tables becomes a seat.

## Explore further
- `ansur-ii-open-design-lab` — ANSUR II anthropometric dataset
- `caesar-final-report-vol1` — CAESAR Final Report, Volume I: Summary
- `astm-f2291-design-standard` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
