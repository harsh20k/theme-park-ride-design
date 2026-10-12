---
id: age-differences
title: Kids vs Adults vs Seniors
land: human-factors
level: beginner
abstraction: concept
parent: behavior-and-decision
children: []
relations:
  - { type: applies-to, target: attraction-mix }
  - { type: applies-to, target: walking-fatigue }
  - { type: applies-to, target: height-and-health-requirements }
  - { type: applies-to, target: nostalgia }
  - { type: applies-to, target: rest-areas }
summary: Children, adults and older guests differ in size, stamina, fear, and what they remember.
tags: [age, families, seniors, children, planning]
visuals: [chart]
interactive_idea: "Slide a guest's age from 3 to 83 and see walking range, ride eligibility and preferred ride type update."
sources: [cdc-growth-charts, fruin-pedestrian-planning-1971, niosh-heat-stress]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: what each age group needs most from a park day",
  "width": 300, "height": 160,
  "data": {"values": [
    {"group": "Children", "need": "Play and scale", "weight": 5}, {"group": "Children", "need": "Thrill", "weight": 2}, {"group": "Children", "need": "Rest and shade", "weight": 3},
    {"group": "Teens and adults", "need": "Play and scale", "weight": 2}, {"group": "Teens and adults", "need": "Thrill", "weight": 5}, {"group": "Teens and adults", "need": "Rest and shade", "weight": 2},
    {"group": "Seniors", "need": "Play and scale", "weight": 2}, {"group": "Seniors", "need": "Thrill", "weight": 1}, {"group": "Seniors", "need": "Rest and shade", "weight": 5}
  ]},
  "mark": "rect",
  "encoding": {
    "x": {"field": "need", "type": "nominal", "title": null},
    "y": {"field": "group", "type": "nominal", "title": null},
    "color": {"field": "weight", "type": "quantitative", "title": "Priority", "scale": {"scheme": "blues"}}
  }
}
```

Age changes almost every human-factors number a designer cares about. Children are small, which is why [height rules](../human-factors/height-and-health-requirements.md) exist, and their heights follow the percentile curves in the CDC growth charts. They tire fast, see the world from a metre off the ground, and find scale and play more exciting than speed. Teenagers and younger adults chase intensity and tolerate long waits for it. Older guests walk more slowly, overheat more easily (NIOSH lists advanced age as a heat-stress risk factor), and value shade, seating and short distances.

Fruin's pedestrian data shows that walking speed spreads widely with age, so a mixed crowd on a path moves at the pace of its slowest members. That is a planning input for [walking fatigue](../human-factors/walking-fatigue.md), [rest areas](../masterplanning/rest-areas.md) and the spacing of toilets.

Memory differs too. Adults who visited as children return for [nostalgia](../human-factors/nostalgia.md) and bring their own children, which is why classic attractions survive refurbishment cycles. A balanced [attraction mix](../masterplanning/attraction-mix.md) serves three generations at once; the specific percentages a park should aim for are a business judgement, not a published rule.

## Explore further
- `cdc-growth-charts` — CDC Growth Charts
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (book)
- `niosh-heat-stress` — NIOSH: About Heat Stress
