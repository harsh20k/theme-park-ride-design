---
id: agency-vs-spectacle
title: Agency vs Spectacle
land: human-factors
level: intermediate
abstraction: concept
parent: flow-and-immersion
children: []
relations:
  - { type: applies-to, target: interactive-dark-ride }
  - { type: applies-to, target: interactive-narrative }
  - { type: applies-to, target: personalized-dark-rides }
  - { type: contrasts-with, target: media-dark-ride }
  - { type: applies-to, target: throughput-math }
summary: Letting guests act can deepen immersion or shatter it, and every interactive ride is a bet on which.
tags: [interactivity, agency, dark-rides, design-debate]
visuals: [chart]
interactive_idea: "A slider from pure spectacle to full agency; readouts estimate repeat ridership, throughput, and story control for a sample dark ride."
sources: [murray-hamlet-on-the-holodeck, sally-dark-rides, csikszentmihalyi-flow]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: what each approach tends to deliver",
  "width": 300, "height": 150,
  "data": {"values": [
    {"approach": "Spectacle", "quality": "Story control", "score": 5}, {"approach": "Spectacle", "quality": "Repeat ridership", "score": 2}, {"approach": "Spectacle", "quality": "Throughput", "score": 4},
    {"approach": "Agency", "quality": "Story control", "score": 2}, {"approach": "Agency", "quality": "Repeat ridership", "score": 5}, {"approach": "Agency", "quality": "Throughput", "score": 3}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "quality", "type": "nominal", "title": null},
    "y": {"field": "score", "type": "quantitative", "title": "Relative strength, 1 to 5"},
    "xOffset": {"field": "approach"},
    "color": {"field": "approach", "type": "nominal", "title": null}
  }
}
```

Janet Murray defined agency as the satisfying power to take meaningful action and see its results. Most classic attractions offer none: the guest is carried through a story that would play the same if the vehicle were empty. That is spectacle, and it has virtues: the designer controls every beat, the pacing of a [media dark ride](../ride-systems/media-dark-ride.md) is exact, and nobody has a worse ride because they aimed badly.

Agency trades that control for involvement. [Interactive dark rides](../ride-systems/interactive-dark-ride.md) with targets and scores turn passengers into players; manufacturer Sally Dark Rides argues that gaming is the strongest driver of repeat ridership. Flow theory explains why: a task with feedback holds attention as watching cannot. The costs are also real. Scores pull attention from the scenery, a bad score sours the memory, families compete instead of sharing, and interactive mechanisms slow [throughput](../operations-business/throughput-math.md) when guests linger.

The newest answers try to have both. [Interactive narrative](../story-experience/interactive-narrative.md) techniques let small choices alter a scene without handing over the plot, and [personalised dark rides](../ai-future/personalized-dark-rides.md) use identity data to make the story react to the rider rather than the rider steer the story. Which balance suits which audience is still an open question, not a settled result.

## Explore further
- `murray-hamlet-on-the-holodeck` — Hamlet on the Holodeck (book)
- `sally-dark-rides` — Sally Dark Rides
- `csikszentmihalyi-flow` — Flow: The Psychology of Optimal Experience (book)
