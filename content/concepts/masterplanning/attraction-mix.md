---
id: attraction-mix
title: Attraction Mix & Balance
land: masterplanning
level: intermediate
abstraction: concept
parent: guest-flow-and-capacity
children: []
relations:
  - { type: applies-to, target: ride-classification }
  - { type: applies-to, target: lowest-common-denominator }
  - { type: limits, target: height-and-health-requirements }
  - { type: applies-to, target: length-of-stay }
  - { type: enables, target: group-dynamics }
summary: Choosing the blend of thrill, family, show and play content so every guest type stays busy all day.
tags: [portfolio, rides, family, thrill, balance]
visuals: [chart]
interactive_idea: "Drag sliders for family, thrill and show share; a stacked bar shows hours of content per guest segment."
sources: [pgav-designing-the-day, themedattraction-master-planning]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative peak-hour time budget per guest, by category",
  "width": 300, "height": 150,
  "data": {"values": [
    {"category": "Rides", "minutes": 20}, {"category": "Shows", "minutes": 8},
    {"category": "Exhibits and play", "minutes": 7}, {"category": "Food", "minutes": 10},
    {"category": "Retail", "minutes": 5}, {"category": "Walking", "minutes": 10}
  ]},
  "mark": "arc",
  "encoding": {
    "theta": {"field": "minutes", "type": "quantitative"},
    "color": {"field": "category", "type": "nominal", "title": null}
  }
}
```

Attraction mix is the portfolio decision: which rides, shows, play areas and exhibits a park offers, in what proportions and at what quality. Planners sort rides into major, medium and kiddie classes plus transport, then set how much hourly capacity each class must supply. PGAV's method splits a guest's peak hour across seven categories, including eating, shopping and walking, so the mix is sized to time budgets rather than guesswork. Each candidate ride is then checked for penetration rate, height restriction and manufacturer-rated capacity.

Balance is the hard part. Too many thrill coasters and families with small children run out of things to do; too few and teenagers leave early. The [lowest common denominator](../human-factors/lowest-common-denominator.md) rule, that a group does what its least able member can do, pushes planners toward shared family rides. [Height requirements](../human-factors/height-and-health-requirements.md) cut a ride's effective capacity, and [group dynamics](../human-factors/group-dynamics.md) mean a park needs things neighbours can do while others ride.

The mix also sets [length of stay](../operations-business/length-of-stay.md) and therefore spending. A standard [ride classification](../ride-systems/ride-classification.md) helps teams compare options before falling in love with one headline attraction.

## Explore further
- `pgav-designing-the-day` — Designing the Day (PGAV Destinations)
- `themedattraction-master-planning` — Theme Park Master Planning (Peter Alexander)
