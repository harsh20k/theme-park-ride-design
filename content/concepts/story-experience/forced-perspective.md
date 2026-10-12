---
id: forced-perspective
title: Forced Perspective
land: story-experience
level: beginner
abstraction: concept
parent: spatial-storytelling
children: []
relations:
  - { type: is-a, target: optical-illusions }
  - { type: applies-to, target: size-constancy }
  - { type: applies-to, target: depth-cues }
  - { type: applies-to, target: themed-facades }
  - { type: example-of, target: disneyland-1955 }
summary: Shrinking upper floors and far ends so buildings look taller and streets look longer.
tags: [illusion, perspective, scale, architecture, perception]
visuals: [chart]
interactive_idea: "Drag a slider from 100 percent to 60 percent upper-floor scale on a street elevation and watch the apparent height change."
sources: [touringplans-urban-designer-main-street, wikipedia-forced-perspective, wikipedia-sleeping-beauty-castle, hench-designing-disney]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Main Street, U.S.A. floor scale (Gennawey, TouringPlans)",
  "width": 260, "height": 140,
  "data": {"values": [
    {"floor": "Ground floor", "scale": 90},
    {"floor": "Second floor", "scale": 80},
    {"floor": "Third floor", "scale": 70}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "floor", "type": "nominal", "sort": null, "title": null},
    "x": {"field": "scale", "type": "quantitative", "title": "Percent of full size", "scale": {"domain": [0, 100]}}
  }
}
```

Forced perspective is a cheap way to buy height and distance. Because our eyes judge size partly from how objects shrink with distance, a designer can build the top of a facade at a smaller scale than the bottom and the brain reads it as taller and farther away. John Hench described it as one-point perspective with the vanishing point pulled unnaturally close.

On Disneyland's Main Street the ground floors are built at roughly nine tenths of full size, second floors at about eight tenths, and third floors smaller still, according to urban planner Sam Gennawey. Sleeping Beauty Castle is only 77 feet tall, yet its shrinking turrets make it feel like a proper castle. The trick is also reversed on the way out: walking back toward the exit, the compressed street feels shorter, which is kind to tired legs.

It is a built [optical illusion](../human-factors/optical-illusions.md) that exploits [size constancy](../human-factors/size-constancy.md) and [depth cues](../human-factors/depth-cues.md). It constrains [themed facade](../design-process/themed-facades.md) detailing: doors, bricks and windows on upper floors must all shrink together, or the illusion collapses. The third-floor figure above is illustrative; sources give it only as "smaller still".

## Explore further
- `touringplans-urban-designer-main-street` — An Urban Designer Looks at Main Street
- `wikipedia-forced-perspective` — Forced perspective
- `wikipedia-sleeping-beauty-castle` — Sleeping Beauty Castle
