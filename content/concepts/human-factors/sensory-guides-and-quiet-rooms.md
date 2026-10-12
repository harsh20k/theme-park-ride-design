---
id: sensory-guides-and-quiet-rooms
title: Sensory Guides & Quiet Rooms
land: human-factors
level: beginner
abstraction: sub-concept
parent: neurodiversity
children: []
relations:
  - { type: applies-to, target: rest-areas }
  - { type: applies-to, target: noise-exposure }
  - { type: applies-to, target: signage-and-graphics }
  - { type: applies-to, target: wait-time-data-and-apps }
  - { type: applies-to, target: prospect-refuge }
summary: A published sensory rating for every attraction, plus calm rooms where an overloaded guest can recover.
tags: [sensory, autism, inclusion, wayfinding]
visuals: [chart]
interactive_idea: "A sensory-guide builder: rate a ride on five senses and generate the guide card parks would print."
sources: [ibcces-certified-autism-center, phillymag-sesame-place-autism-2018, kulturecity-sensory-inclusive]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative sensory guide entries for three attraction types",
  "width": 300, "height": 150,
  "data": {"values": [
    {"ride": "Carousel", "sense": "Sound", "level": 2}, {"ride": "Carousel", "sense": "Light", "level": 2}, {"ride": "Carousel", "sense": "Motion", "level": 2}, {"ride": "Carousel", "sense": "Surprise", "level": 1},
    {"ride": "Dark ride", "sense": "Sound", "level": 4}, {"ride": "Dark ride", "sense": "Light", "level": 4}, {"ride": "Dark ride", "sense": "Motion", "level": 2}, {"ride": "Dark ride", "sense": "Surprise", "level": 5},
    {"ride": "Launch coaster", "sense": "Sound", "level": 5}, {"ride": "Launch coaster", "sense": "Light", "level": 3}, {"ride": "Launch coaster", "sense": "Motion", "level": 5}, {"ride": "Launch coaster", "sense": "Surprise", "level": 3}
  ]},
  "mark": "rect",
  "encoding": {
    "x": {"field": "sense", "type": "nominal", "title": null},
    "y": {"field": "ride", "type": "nominal", "title": null},
    "color": {"field": "level", "type": "quantitative", "title": "1 low to 5 high", "scale": {"scheme": "oranges"}}
  }
}
```

A sensory guide is a rating sheet. For each attraction it scores touch, taste, sound, smell and sight, often on a one-to-ten scale, so a family can decide in advance what to try, what to skip and when to bring the headphones. IBCCES produces these guides as part of Certified Autism Center certification, and Sesame Place introduced one with its 2018 certification.

A quiet room is the physical half of the pair. It is a low-stimulation space with dimmable lighting, soft seating, no music and no screens, where a guest in sensory overload can recover without leaving the park. Sesame Place opened two in 2018; KultureCity-certified venues provide sensory bags with noise-reducing headphones and fidget tools alongside. Good quiet rooms sit near the centre of the park, not behind the first-aid station at the back, and are marked in the [app](../operations-business/wait-time-data-and-apps.md) and on [signage](../design-process/signage-and-graphics.md).

Both tools borrow from existing design. A quiet room is a [refuge](../sensory-environment/prospect-refuge.md) in the environmental-psychology sense, and ordinary shaded [rest areas](../masterplanning/rest-areas.md) do part of the job for guests who just need less. The sound ratings come from the same measurements that [noise exposure](../human-factors/noise-exposure.md) work already requires.

## Explore further
- `ibcces-certified-autism-center` — Certified Autism Center program (IBCCES)
- `phillymag-sesame-place-autism-2018` — Sesame Place Makes History With Autism Designation
- `kulturecity-sensory-inclusive` — KultureCity Sensory Inclusive certification
