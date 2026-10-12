---
id: lowest-common-denominator
title: Lowest Common Denominator Planning
land: human-factors
level: intermediate
abstraction: sub-concept
parent: group-dynamics
children: []
relations:
  - { type: applies-to, target: attraction-mix }
  - { type: applies-to, target: family-coasters }
  - { type: applies-to, target: capacity-planning }
  - { type: applies-to, target: walking-fatigue }
  - { type: contrasts-with, target: sensation-seeking }
summary: Groups plan around the member with the tightest limits, so the park must serve that person well.
tags: [families, planning, design-strategy, inclusion]
visuals: [chart]
interactive_idea: "Pick the members of a party and watch the share of a park's attractions that the whole group can enjoy together."
sources: [cdc-growth-charts, universal-orlando-rider-guide]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: share of a park a whole family can do together, by its most limited member",
  "width": 300, "height": 150,
  "data": {"values": [
    {"member": "Adults only", "share": 100},
    {"member": "Plus 48 inch child", "share": 85},
    {"member": "Plus 40 inch child", "share": 60},
    {"member": "Plus toddler", "share": 35},
    {"member": "Plus wheelchair user", "share": 70}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "member", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "share", "type": "quantitative", "title": "Percent of attractions"}
  }
}
```

Lowest common denominator planning is the habit, by both guests and designers, of letting the most constrained member set the plan. A family does not ask "what can the teenager ride?" but "what can the whole group do?" Whoever is shortest, most anxious, least mobile or most easily tired defines the day. The phrase sounds negative, but for designers it is a useful discipline.

Height rules make the effect visible. A 40-inch (102 cm) minimum splits many four-year-olds from their families; a 48-inch (122 cm) rule removes most children under about seven. The CDC growth charts give the age-by-height percentiles behind those cutoffs. Operators publish ride-by-ride limits, as in Universal Orlando's rider guide, precisely so families can plan around the denominator. The exact ages above are approximations from the charts, not a published park figure.

Design responses include an [attraction mix](../masterplanning/attraction-mix.md) rich in all-ages rides, [family coasters](../ride-systems/family-coasters.md) with low height limits, play areas near thrill rides where the non-rider can wait, and [capacity planning](../masterplanning/capacity-planning.md) that assumes families move together. The tension is with [sensation seekers](../human-factors/sensation-seeking.md), who want the park to raise its ceiling, not lower its floor; the best parks do both.

## Explore further
- `cdc-growth-charts` — CDC Growth Charts
- `universal-orlando-rider-guide` — Universal Orlando Guide for Rider Safety and Accessibility (PDF)
