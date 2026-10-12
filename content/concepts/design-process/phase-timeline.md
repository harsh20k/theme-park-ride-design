---
id: phase-timeline
title: Phase Timeline
land: design-process
level: beginner
abstraction: concept
parent: pipeline-overview
children: []
relations:
  - { type: applies-to, target: expansion-and-phasing }
  - { type: applies-to, target: capital-budgets }
  - { type: enables, target: design-reviews-and-gates }
  - { type: limits, target: ip-wars }
  - { type: example-of, target: expedition-everest }
summary: How long each stage really takes, from a single coaster in about eighteen months to a park in six years.
tags: [schedule, timeline, phases, planning]
visuals: [chart]
interactive_idea: "Pick a project type and size and get an estimated calendar with the typical overlap between phases."
sources: [wikipedia-hagrids-motorbike-adventure, wikipedia-expedition-everest, wikipedia-pandora-world-of-avatar, wikipedia-epic-universe]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Years from construction start to opening, from public records",
  "width": 300, "height": 140,
  "data": {"values": [
    {"project": "Hagrid's coaster", "years": 1.4},
    {"project": "Expedition Everest", "years": 3.1},
    {"project": "Pandora land", "years": 3.4},
    {"project": "Epic Universe park", "years": 5.8}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "project", "type": "nominal", "title": null, "sort": "-x"},
    "x": {"field": "years", "type": "quantitative", "title": "years"}
  }
}
```

Nobody publishes a full schedule, but opening dates and construction milestones are public, and they tell a consistent story. A single large coaster can go from cleared land to guests in about eighteen months: Hagrid's site was cleared in January 2018 and the ride opened in June 2019. A themed mountain with a coaster inside took about three years to build after six years of planning for Expedition Everest. A whole land, Pandora, broke ground in January 2014 and opened in May 2017. A whole park, Epic Universe, ran from announcement in August 2019 to opening in May 2025, including an eight-month pandemic pause.

The invisible part is everything before the first excavator. Concept and design work commonly runs for years, and Imagineering's own account says an idea can take up to five years to become an attraction. Phases overlap: fabrication starts while drawings finish, show install begins while the roof is going on. Timelines matter beyond the site. They set how [expansion is phased](../masterplanning/expansion-and-phasing.md), when [capital](../operations-business/capital-budgets.md) is drawn, where [gate reviews](../design-process/design-reviews-and-gates.md) fall, and whether a park can answer a rival's announcement in the [IP wars](../history/ip-wars.md) before the film is forgotten.

## Explore further
- `wikipedia-hagrids-motorbike-adventure` — Hagrid's Magical Creatures Motorbike Adventure (Wikipedia)
- `wikipedia-expedition-everest` — Expedition Everest (Wikipedia)
- `wikipedia-pandora-world-of-avatar` — Pandora: The World of Avatar (Wikipedia)
- `wikipedia-epic-universe` — Universal Epic Universe (Wikipedia)
