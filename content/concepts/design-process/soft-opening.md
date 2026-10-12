---
id: soft-opening
title: Soft Opening & Previews
land: design-process
level: beginner
abstraction: concept
parent: installation-and-opening
children: []
relations:
  - { type: enables, target: operator-training }
  - { type: applies-to, target: downtime-and-availability }
  - { type: enables, target: guest-research }
  - { type: applies-to, target: explained-waits }
  - { type: example-of, target: rise-of-the-resistance }
summary: Letting real guests ride before the official date so staff can train and faults can surface quietly.
tags: [soft-opening, preview, technical-rehearsal, operations]
visuals: [chart]
interactive_idea: "Simulate a preview week: set how many hours the ride opens each day and watch fault reports and staff confidence change."
sources: [wikipedia-soft-launch, wikipedia-rise-of-the-resistance, wikipedia-hagrids-motorbike-adventure]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: hours open to guests during a preview period",
  "width": 300, "height": 140,
  "data": {"values": [
    {"day": "Day 1", "hours": 2}, {"day": "Day 2", "hours": 0}, {"day": "Day 3", "hours": 4},
    {"day": "Day 4", "hours": 3}, {"day": "Day 5", "hours": 7}, {"day": "Day 6", "hours": 6},
    {"day": "Day 7", "hours": 9}, {"day": "Opening", "hours": 11}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "day", "type": "nominal", "title": null, "axis": {"labelAngle": 0}},
    "y": {"field": "hours", "type": "quantitative", "title": "hours open"}
  }
}
```

A soft opening, called a technical rehearsal by some parks, is a preview to a limited audience before the advertised date. The business logic is the same as for a restaurant or a stadium test event: see how the thing behaves with real people, train staff under low stakes, and fix what breaks before the press arrives. For a ride it is the first time dispatch, load, evacuation drills and the show all run with strangers who do not know the script.

Previews are deliberately unpromised. The ride may open for an hour, all day, or not at all, and guests are told so, which is why queue signs and apps need honest [explained waits](../human-factors/explained-waits.md). Variants include cast and team member previews, passholder previews and invited media days; Rise of the Resistance held media rides on the days before its public opening. Operators treat the data seriously: every stop and restart feeds [downtime and availability](../operations-business/downtime-and-availability.md) records, and watching guests is the first real [guest research](../operations-business/guest-research.md). Above all, it is the period in which [operator training](../safety-standards/operator-training.md) moves from the classroom to the platform. Details of how each park runs previews are rarely published, so specifics vary.

## Explore further
- `wikipedia-soft-launch` — Soft launch (Wikipedia)
- `wikipedia-rise-of-the-resistance` — Star Wars: Rise of the Resistance (Wikipedia)
- `wikipedia-hagrids-motorbike-adventure` — Hagrid's Magical Creatures Motorbike Adventure (Wikipedia)
