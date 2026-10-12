---
id: sensation-seeking
title: Sensation Seeking
land: human-factors
level: intermediate
abstraction: concept
parent: emotion-and-thrill
children: []
relations:
  - { type: applies-to, target: attraction-mix }
  - { type: applies-to, target: guest-research }
  - { type: applies-to, target: age-differences }
  - { type: applies-to, target: strata-coasters }
  - { type: applies-to, target: pricing }
summary: A stable personality trait describing how much novelty and intensity someone needs to feel good.
tags: [psychology, personality, thrill, segmentation]
visuals: [chart]
interactive_idea: "A short self-rating quiz places the user on a sensation-seeking scale and recommends a ride tier."
sources: [zuckerman-1979-sensation-seeking]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: four facets of sensation seeking for two guests",
  "width": 300, "height": 140,
  "data": {"values": [
    {"guest": "Coaster fan", "facet": "Thrill and adventure", "score": 9},
    {"guest": "Coaster fan", "facet": "Experience seeking", "score": 6},
    {"guest": "Coaster fan", "facet": "Disinhibition", "score": 5},
    {"guest": "Coaster fan", "facet": "Boredom susceptibility", "score": 7},
    {"guest": "Garden stroller", "facet": "Thrill and adventure", "score": 2},
    {"guest": "Garden stroller", "facet": "Experience seeking", "score": 7},
    {"guest": "Garden stroller", "facet": "Disinhibition", "score": 2},
    {"guest": "Garden stroller", "facet": "Boredom susceptibility", "score": 3}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "facet", "type": "nominal", "title": null},
    "x": {"field": "score", "type": "quantitative", "title": "Score (0-10)"},
    "color": {"field": "guest", "type": "nominal", "title": null},
    "yOffset": {"field": "guest"}
  }
}
```

Marvin Zuckerman spent decades measuring why some people queue for the tallest coaster while others are happy on a bench. His Sensation Seeking Scale breaks the trait into four facets: thrill and adventure seeking (physical risk), experience seeking (new sights, ideas and cultures), disinhibition (social and party risk) and boredom susceptibility (restlessness when nothing is happening). The trait is fairly stable, tends to peak in the late teens and is somewhat heritable.

For a park this is the deepest segmentation variable there is. High scorers want record statistics, [strata coasters](../history/strata-coasters.md) and launch counts; they are also the ones who notice when a line stops moving. Low scorers on thrill may still be high on experience seeking, and will reward detailed theming and food. [Guest research](../operations-business/guest-research.md) that profiles visitors on these facets can shape the [attraction mix](../masterplanning/attraction-mix.md) and even [pricing](../operations-business/pricing.md) for premium thrill products.

Age shifts the curve, which is why [kids, adults and seniors](../human-factors/age-differences.md) need different sweet spots in the same park.

## Explore further
- `zuckerman-1979-sensation-seeking` — Sensation Seeking: Beyond the Optimal Level of Arousal
