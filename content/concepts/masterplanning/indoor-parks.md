---
id: indoor-parks
title: Indoor & Climate-Controlled Parks
land: masterplanning
level: intermediate
abstraction: concept
parent: park-types
children: []
relations:
  - { type: applies-to, target: thermal-comfort }
  - { type: applies-to, target: lighting-mood }
  - { type: limits, target: sightlines }
  - { type: example-of, target: asian-expansion }
  - { type: applies-to, target: location-based-entertainment }
summary: Parks under one roof, built where heat, cold or city land make outdoor parks impractical.
tags: [indoor, climate, abu-dhabi, enclosure]
visuals: [chart]
interactive_idea: "Compare an outdoor and an indoor park's operating days across a year of real weather for a chosen city."
sources: [wikipedia-ferrari-world, wikipedia-warner-bros-world-abu-dhabi, wikipedia-europa-park]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Enclosed floor area of two Abu Dhabi indoor parks (Wikipedia figures)",
  "width": 300, "height": 120,
  "data": {"values": [
    {"park": "Ferrari World, 2010", "m2": 86000},
    {"park": "Warner Bros. World, 2018", "m2": 153000}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "park", "type": "nominal", "title": null},
    "x": {"field": "m2", "type": "quantitative", "title": "Square metres"}
  }
}
```

An indoor park puts the lands under a roof so that weather stops being the limit on operating days. The model took off in the Gulf, where summer heat makes an outdoor park unusable for months. Ferrari World on Yas Island opened in November 2010 as a mostly indoor park of about 86,000 square metres under a vast red roof; Warner Bros. World Abu Dhabi followed in July 2018, fully enclosed and air-conditioned across about 153,000 square metres with six themed areas, and was for a time recognised as the world's largest indoor theme park. Cold cities and dense urban sites use the same answer at smaller scale, often as [location-based entertainment](../ai-future/location-based-entertainment.md) in malls.

Design changes with the roof. There is no sky, so [lighting mood](../sensory-environment/lighting-mood.md) must fake dawn, noon and dusk, and long [sightlines](../story-experience/sightlines.md) stop at the structure, which pushes designers toward enclosed streets and painted skies. Big coasters are hard to fit, so the mix leans on dark rides, media and flat rides. [Thermal comfort](../human-factors/thermal-comfort.md) is near perfect, acoustics are hard, and structure and air handling make the build expensive.

In return the owner gets a year-round [design day](../masterplanning/design-day.md), no rain closures and a controllable show.

## Explore further
- `wikipedia-ferrari-world` — Ferrari World Abu Dhabi (Wikipedia)
- `wikipedia-warner-bros-world-abu-dhabi` — Warner Bros. World Abu Dhabi (Wikipedia)
- `wikipedia-europa-park` — Europa-Park (Wikipedia)
