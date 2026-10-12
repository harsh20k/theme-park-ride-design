---
id: economic-inclusion
title: Economic Inclusion
land: human-factors
level: intermediate
abstraction: concept
parent: inclusion
children: []
relations:
  - { type: applies-to, target: pricing }
  - { type: applies-to, target: paid-priority-access }
  - { type: applies-to, target: regional-vs-destination }
  - { type: applies-to, target: queue-fairness }
  - { type: applies-to, target: seasonality-and-events }
summary: Who can afford to come, and how visible paid tiers inside the park change the day for those who cannot pay more.
tags: [pricing, equity, access, business]
visuals: [chart]
interactive_idea: "Build a family's park budget from ticket, food, parking and add-ons at three price tiers, and compare it with a regional park."
sources: [disney-world-tickets, merlins-magic-wand, thaler-sunstein-nudge]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: how a family's day splits between must-pay and optional spend",
  "width": 300, "height": 150,
  "data": {"values": [
    {"item": "Tickets", "kind": "Must pay", "share": 45},
    {"item": "Parking and transit", "kind": "Must pay", "share": 8},
    {"item": "Food and drink", "kind": "Must pay", "share": 20},
    {"item": "Priority access", "kind": "Optional", "share": 15},
    {"item": "Merchandise and photos", "kind": "Optional", "share": 12}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "share", "type": "quantitative", "title": "Percent of a day's cost"},
    "y": {"field": "item", "type": "nominal", "title": null, "sort": null},
    "color": {"field": "kind", "type": "nominal", "title": null}
  }
}
```

Economic inclusion asks who is priced out and what the park does about it. Destination parks have moved to date-based tickets, where a single day's price varies with expected demand; Walt Disney World's ticket page shows the structure. Layered on top are paid tiers inside the park, from [paid priority access](../human-factors/paid-priority-access.md) to reserved viewing and premium dining. These raise revenue, a core subject of the [pricing](../operations-business/pricing.md) card, and they also change the social texture of the day: a child watching another family skip the line learns something about [queue fairness](../human-factors/queue-fairness.md).

There are counterweights. [Regional parks](../masterplanning/regional-vs-destination.md) and season passes keep a cheaper tier of the industry alive. Off-peak pricing, a nudge in Thaler and Sunstein's sense, shifts price-sensitive families to quieter days, which also helps [seasonality](../operations-business/seasonality-and-events.md). Charity programmes such as Merlin's Magic Wand give park days to children facing illness, disability or hardship, with Merlin Entertainments donating the tickets.

Design has a role beyond price. Free water, shade, benches and family facilities cost the operator little and matter most to the guests with the least slack. Whether tiered access harms the experience for non-payers is debated and not well measured, so treat the effect as plausible rather than proven.

## Explore further
- `disney-world-tickets` — Walt Disney World theme park tickets
- `merlins-magic-wand` — Merlin's Magic Wand children's charity
- `thaler-sunstein-nudge` — Nudge (book)
