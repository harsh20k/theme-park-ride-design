---
id: ride-classification
title: Ride Classification & Thrill Ratings
land: ride-systems
level: beginner
abstraction: concept
parent: transport-and-other
children: []
relations:
  - { type: applies-to, target: height-and-health-requirements }
  - { type: applies-to, target: risk-perception-and-trust }
  - { type: applies-to, target: signage-hierarchy }
  - { type: applies-to, target: astm-f2291 }
  - { type: applies-to, target: attraction-mix }
  - { type: applies-to, target: acceleration-envelopes }
summary: How databases, manufacturers and parks sort rides into types and label how intense they are.
tags: [classification, thrill-rating, taxonomy, signage]
visuals: [chart]
interactive_idea: "Enter a ride's height, speed, inversions and seat type; the tool shows its RCDB-style type, its height class and a suggested park thrill label."
sources: [wikipedia-roller-coaster-safety, rcdb-home, wikipedia-inverted-roller-coaster]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Coaster height classes by lift or drop height (source: Wikipedia)",
  "width": 300, "height": 140,
  "data": {"values": [
    {"class": "Family or kiddie", "ft": 25},
    {"class": "Hyper", "ft": 200},
    {"class": "Giga", "ft": 300},
    {"class": "Strata", "ft": 400},
    {"class": "Exa", "ft": 600}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "class", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "ft", "type": "quantitative", "title": "Threshold height ft"}
  }
}
```

Rides get sorted three different ways, by three different people. **Enthusiast databases** such as RCDB classify coasters by material (wood, steel), type (sit-down, inverted, flying, wing, spinning), model and layout, and give records by height, speed and length. Wikipedia's height classes, hyper from 200 feet, giga from 300, strata from 400 and exa from 600, come from marketing but have stuck.

**Manufacturers** sort by product: Intamin's catalogue runs from family coaster to vertical-launch coaster, HUSS's from family to thrill rides. These labels carry real engineering content, since a model name implies a train, a restraint type and a force envelope ([acceleration envelopes](../ride-engineering/acceleration-envelopes.md)) that the standards, such as [ASTM F2291](../safety-standards/astm-f2291.md), then check.

**Parks** sort for guests. Most publish a thrill scale, from gentle to aggressive, alongside a height limit and health warnings, ([height and health requirements](../human-factors/height-and-health-requirements.md), [signage hierarchy](../human-factors/signage-hierarchy.md)). The exact wording of these scales varies by operator and is not standardised across the industry, which is the uncertain part of this card. A rating is a promise about intensity, and it shapes [risk perception and trust](../human-factors/risk-perception-and-trust.md): overstate and the park loses credibility; understate and guests feel ambushed. Planners use the same labels to balance the [attraction mix](../masterplanning/attraction-mix.md).

## Explore further
- `wikipedia-roller-coaster-safety` — Roller coaster (Wikipedia)
- `rcdb-home` — Roller Coaster DataBase
- `wikipedia-inverted-roller-coaster` — Inverted roller coaster (Wikipedia)
