---
id: regional-vs-destination
title: Regional vs Destination Parks
land: masterplanning
level: beginner
abstraction: concept
parent: park-types
children: []
relations:
  - { type: applies-to, target: length-of-stay }
  - { type: applies-to, target: pricing }
  - { type: applies-to, target: seasonality-and-events }
  - { type: contrasts-with, target: ip-licensing-economics }
  - { type: example-of, target: european-parks }
summary: Drive-in parks sell repeat day trips; fly-in resorts sell multi-day stays and hotel nights.
tags: [market, business-model, attendance, resort]
visuals: [chart]
interactive_idea: "Slide the share of visitors from beyond 150 miles and watch recommended hotel rooms and park days per visit change."
sources: [tea-global-experience-index-2024, wikipedia-europa-park, wikipedia-walt-disney-world, openlibrary-walts-revolution]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative profile: regional park vs destination resort",
  "width": 300, "height": 150,
  "data": {"values": [
    {"type": "Regional", "metric": "Visits per guest per year", "value": 3},
    {"type": "Destination", "metric": "Visits per guest per year", "value": 1},
    {"type": "Regional", "metric": "Days per visit", "value": 1},
    {"type": "Destination", "metric": "Days per visit", "value": 4},
    {"type": "Regional", "metric": "Hotel nights sold", "value": 0.2},
    {"type": "Destination", "metric": "Hotel nights sold", "value": 3}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "metric", "type": "nominal", "title": null},
    "y": {"field": "value", "type": "quantitative", "title": "Illustrative units"},
    "xOffset": {"field": "type"},
    "color": {"field": "type", "type": "nominal", "title": null}
  }
}
```

A regional park draws most of its guests from within a few hours' drive. It lives on repeat visits, season passes and local events, so it needs a steady stream of new rides to give locals a reason to come back, and it closes or shrinks in the off season. A destination park draws from across a country or the world, sells multi-day tickets, and makes much of its money on hotels, food and merchandise around the gate. Harrison Price's feasibility studies for Disney were built on this distinction: counting the population in each drive-time ring tells you which model the market can support.

Walt Disney World is the destination archetype, roughly 27,000 acres with four parks, two water parks and dozens of hotels so guests never need to leave. Europa-Park shows the regional model growing up: it opened in 1975 on 16 hectares, became Germany's biggest park on country-themed areas and family ownership, and now has six hotels, blurring the line.

The choice drives everything downstream: [length of stay](../operations-business/length-of-stay.md), [pricing](../operations-business/pricing.md) tiers, how hard [seasonality](../operations-business/seasonality-and-events.md) bites, and whether the park can afford licensed [IP](../operations-business/ip-licensing-economics.md) or builds original characters. It also decides whether [resort integration](../masterplanning/resort-integration.md) belongs in the first masterplan.

## Explore further
- `tea-global-experience-index-2024` — Official Release of the 2024 TEA Global Experience Index
- `wikipedia-europa-park` — Europa-Park (Wikipedia)
- `wikipedia-walt-disney-world` — Walt Disney World (Wikipedia)
- `openlibrary-walts-revolution` — Walt's Revolution! By the Numbers
