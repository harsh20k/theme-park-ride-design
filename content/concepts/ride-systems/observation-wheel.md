---
id: observation-wheel
title: Ferris & Observation Wheels
land: ride-systems
level: beginner
abstraction: concept
parent: flat-rides
children: []
relations:
  - { type: enables, target: weenies }
  - { type: applies-to, target: load-unload-design }
  - { type: example-of, target: pleasure-gardens-and-worlds-fairs }
  - { type: enables, target: prospect-refuge }
  - { type: applies-to, target: dynamic-loads }
summary: A slow wheel that sells the view; from Ferris's 1893 Chicago wheel to 250-metre city landmarks.
tags: [flat-rides, wheel, observation, landmark, view]
visuals: [chart]
interactive_idea: "Scrub a timeline of record wheels and watch a to-scale silhouette grow from 1893 Chicago to Ain Dubai."
sources: [wikipedia-ferris-wheel, intamin-giant-wheel, chance-rides]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Record-holding wheels and their heights (source: Wikipedia)",
  "width": 300, "height": 150,
  "data": {"values": [
    {"wheel": "Ferris Wheel, Chicago 1893", "m": 80},
    {"wheel": "London Eye 2000", "m": 135},
    {"wheel": "High Roller, Las Vegas 2014", "m": 168},
    {"wheel": "Ain Dubai 2021", "m": 250}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "wheel", "type": "nominal", "title": null, "sort": null, "axis": {"labelAngle": -20}},
    "y": {"field": "m", "type": "quantitative", "title": "Height m"}
  }
}
```

An observation wheel is a ride whose payload is the view. Gondolas hang from the rim of a huge vertical wheel that turns slowly, often without ever stopping; riders step on as a cabin creeps past the platform. The first, George Ferris's 80-metre wheel at the 1893 World's Columbian Exposition in Chicago, was built to answer the Eiffel Tower ([pleasure gardens and world's fairs](../history/pleasure-gardens-and-worlds-fairs.md)).

Modern giants are civic landmarks more than park rides. The London Eye (2000) at 135 metres, Las Vegas's High Roller (2014) at 168 metres and Ain Dubai (2021) at 250 metres each held the height record; Intamin's and Chance's catalogue wheels at 50 to 120 metres sit in parks and waterfronts with 8 to 15-seat climate-controlled gondolas, glass floors and LED skins. Seen from miles away, a lit wheel is the textbook [weenie](../story-experience/weenies.md), pulling people across a site.

Engineering is about the slow churn of [dynamic loads](../ride-engineering/dynamic-loads.md): wind on a 250-metre disc, and a rim carrying thousands of tonnes through bearings that turn a few times an hour. Continuous loading sets [load and unload design](../operations-business/load-unload-design.md). The experience itself is calm height and safe vantage, a built example of [prospect-refuge](../sensory-environment/prospect-refuge.md).

## Explore further
- `wikipedia-ferris-wheel` — Ferris wheel (Wikipedia)
- `intamin-giant-wheel` — Intamin Giant Wheel
- `chance-rides` — Chance Rides
