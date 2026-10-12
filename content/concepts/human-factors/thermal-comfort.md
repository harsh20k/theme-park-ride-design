---
id: thermal-comfort
title: Heat & Thermal Comfort
land: human-factors
level: beginner
abstraction: concept
parent: comfort-and-body
children: []
relations:
  - { type: applies-to, target: shade-and-microclimate }
  - { type: applies-to, target: switchback-design }
  - { type: applies-to, target: indoor-parks }
  - { type: applies-to, target: water-features }
  - { type: applies-to, target: weather-policies }
summary: Heat, humidity and sun drain guests faster than any walk, and shade is the cheapest attraction a park can build.
tags: [heat, comfort, climate, shade]
visuals: [chart]
interactive_idea: "Set air temperature, humidity and sun exposure; a body-heat gauge shows how long a simulated guest lasts in a queue with and without shade."
sources: [niosh-heat-stress]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: the same air temperature feels very different with humidity and sun",
  "width": 300, "height": 150,
  "data": {"values": [
    {"condition": "Shade, dry", "felt": 30}, {"condition": "Shade, humid", "felt": 34},
    {"condition": "Sun, dry", "felt": 36}, {"condition": "Sun, humid", "felt": 41}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "condition", "type": "nominal", "title": "32 C air temperature under four conditions"},
    "y": {"field": "felt", "type": "quantitative", "title": "Felt temperature, C"}
  }
}
```

The body makes heat constantly and must shed it. In a park that is hard: direct sun adds heat, humidity blocks sweat from evaporating, and standing in a packed queue removes the breeze. NIOSH lists exactly these as heat-stress risk factors, along with exertion, lack of acclimatisation, some medications, pregnancy and older age. Heat exhaustion is one of the most common first-aid calls in summer parks, and it strikes guests who are also tired, dehydrated and sunburnt.

Designers fight heat in layers. [Shade and microclimate](../sensory-environment/shade-and-microclimate.md) design puts canopies, trees and misters where people stand still, especially along [switchback queues](../human-factors/switchback-design.md). Water features cool the air and give children something to play in. Dark-coloured paving stores heat; lighter or textured surfaces help. Fully [indoor parks](../masterplanning/indoor-parks.md) in the Gulf and East Asia exist largely because outdoor thermal comfort cannot be guaranteed there.

Operations closes the gap with [weather policies](../safety-standards/weather-policies.md), free water at counters, and indoor shows scheduled through the hottest hours. The surest sign a park has got this wrong is guests sitting on the floor of air-conditioned shops.

## Explore further
- `niosh-heat-stress` — NIOSH: About Heat Stress
