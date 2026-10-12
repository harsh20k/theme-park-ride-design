---
id: height-and-health-requirements
title: Height & Health Requirements
land: human-factors
level: beginner
abstraction: concept
parent: comfort-and-body
children: []
relations:
  - { type: applies-to, target: patron-accommodation }
  - { type: applies-to, target: family-coasters }
  - { type: applies-to, target: queue-storytelling }
  - { type: applies-to, target: signage-and-graphics }
  - { type: applies-to, target: g-tolerance-and-duration }
summary: Minimum heights and health warnings translate restraint geometry and ride forces into a rule a family can check.
tags: [height-requirements, safety, families, signage]
visuals: [chart]
interactive_idea: "Enter a child's age and sex; the CDC percentile chart shows the chance they clear 40, 44 and 48 inch rules."
sources: [cdc-growth-charts, universal-orlando-rider-guide, astm-f2291-design-standard]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: common minimum-height thresholds versus typical child stature by age",
  "width": 300, "height": 150,
  "data": {"values": [
    {"age": 3, "height": 37}, {"age": 4, "height": 40}, {"age": 5, "height": 43},
    {"age": 6, "height": 45}, {"age": 7, "height": 48}, {"age": 8, "height": 50}
  ]},
  "layer": [
    {"mark": {"type": "line", "point": true}, "encoding": {"x": {"field": "age", "type": "quantitative", "title": "Age, years"}, "y": {"field": "height", "type": "quantitative", "title": "Stature, inches", "scale": {"domain": [34, 52]}}}},
    {"mark": {"type": "rule", "strokeDash": [4, 3]}, "data": {"values": [{"h": 40}, {"h": 44}, {"h": 48}]}, "encoding": {"y": {"field": "h", "type": "quantitative"}}}
  ]
}
```

A height requirement is a restraint decision expressed as a stick at the queue entrance. Designers fix the smallest body the restraint will reliably hold, and because operators cannot measure hip breadth at the gate, stature stands in for the whole body. ASTM F2291 even carries an appendix for riders under 48 inches. Common thresholds such as 40, 44 and 48 inches (about 102, 112 and 122 cm) roughly map to ages four, five and seven on CDC growth-chart medians, which is why they feel like age gates to parents.

Maximum heights exist too, for over-the-shoulder restraints and [clearance envelopes](../safety-standards/patron-accommodation.md). Health warnings cover the other side: pregnancy, heart conditions, recent surgery, back and neck problems, and motion sickness are listed against ride forces that the [g-tolerance](../ride-engineering/g-tolerance-and-duration.md) card explains. Universal Orlando publishes all of this ride by ride in a single rider guide.

The human-factors craft is in delivery. A measuring post at the land entrance, before the queue, spares a child the heartbreak at the platform. [Family coasters](../ride-systems/family-coasters.md) are often designed to a specific low threshold so a younger sibling qualifies. And a well-themed height sign, part of the [signage](../design-process/signage-and-graphics.md) package, turns a rejection into "come back when you've grown".

## Explore further
- `cdc-growth-charts` — CDC Growth Charts
- `universal-orlando-rider-guide` — Universal Orlando Guide for Rider Safety and Accessibility (PDF)
- `astm-f2291-design-standard` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
