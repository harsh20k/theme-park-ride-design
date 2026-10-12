---
id: scale-and-intimacy
title: Scale & Intimacy
land: story-experience
level: intermediate
abstraction: concept
parent: spatial-storytelling
children: []
relations:
  - { type: applies-to, target: crowding-and-enclosure }
  - { type: applies-to, target: prospect-refuge }
  - { type: enables, target: awe }
  - { type: applies-to, target: personal-space-and-density }
  - { type: example-of, target: disneyland-1955 }
summary: Choosing how big a space feels so it can comfort, impress or overwhelm on cue.
tags: [scale, proportion, intimacy, enclosure, architecture]
visuals: [chart]
interactive_idea: "Resize a street section with a slider and read off a 'feels like' label from cosy to monumental."
sources: [touringplans-urban-designer-main-street, hench-designing-disney, wikipedia-main-street-usa, wikipedia-sleeping-beauty-castle]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: how enclosure changes the feeling of a space",
  "width": 300, "height": 140,
  "data": {"values": [
    {"space": "Narrow alley", "ratio": 0.5, "feel": "Intimate"},
    {"space": "Main Street", "ratio": 1.0, "feel": "Friendly"},
    {"space": "Hub plaza", "ratio": 2.5, "feel": "Open"},
    {"space": "Star Destroyer hangar", "ratio": 4.0, "feel": "Monumental"}
  ]},
  "mark": {"type": "point", "size": 120, "filled": true},
  "encoding": {
    "x": {"field": "ratio", "type": "quantitative", "title": "Width divided by wall height"},
    "y": {"field": "space", "type": "nominal", "sort": null, "title": null},
    "color": {"field": "feel", "type": "nominal", "title": null}
  }
}
```

Scale is not just how big something is; it is how big it feels against your own body. A narrow street with low eaves feels like a hug. A plaza with a castle at the end feels like an event. Themed designers switch between the two deliberately, because a park that is monumental everywhere exhausts people and a park that is cosy everywhere never thrills them.

Disneyland's Main Street is built smaller than life, with ground floors at about nine tenths scale, so an adult feels slightly taller and a child feels welcomed; John Hench described this as a reassuring, friendly scale. The street then opens into the hub and the castle, which is the one place the park wants you to feel small. Dark rides do the same with room sizes: a stretching room before a grand ballroom.

Intimacy relates to [crowding and enclosure](../sensory-environment/crowding-and-enclosure.md), [prospect-refuge](../sensory-environment/prospect-refuge.md) and [personal space](../human-factors/personal-space-and-density.md): a small space packed with people stops being intimate. Big scale delivers [awe](../human-factors/awe.md), but only if something small came first. The chart ratios are illustrative, not measured.

## Explore further
- `touringplans-urban-designer-main-street` — An Urban Designer Looks at Main Street
- `hench-designing-disney` — Designing Disney: Imagineering and the Art of the Show
- `wikipedia-sleeping-beauty-castle` — Sleeping Beauty Castle
