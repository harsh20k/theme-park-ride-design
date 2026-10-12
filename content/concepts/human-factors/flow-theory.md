---
id: flow-theory
title: Flow Theory
land: human-factors
level: intermediate
abstraction: concept
parent: flow-and-immersion
children: []
relations:
  - { type: applies-to, target: interactive-dark-ride }
  - { type: applies-to, target: interactive-queues }
  - { type: applies-to, target: tension-and-release }
  - { type: applies-to, target: level-design-parallels }
  - { type: contrasts-with, target: queue-boredom }
summary: The absorbed state that appears when a challenge matches your skill and feedback is immediate.
tags: [flow, psychology, games, interactivity]
visuals: [chart]
interactive_idea: "Drag a ride's challenge and the guest's skill on a two-axis chart and see whether the moment lands in boredom, anxiety or flow."
sources: [csikszentmihalyi-flow, murray-hamlet-on-the-holodeck]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: the flow channel between anxiety and boredom",
  "width": 300, "height": 160,
  "data": {"values": [
    {"skill": 1, "challenge": 1, "zone": "Flow"}, {"skill": 3, "challenge": 3, "zone": "Flow"}, {"skill": 5, "challenge": 5, "zone": "Flow"},
    {"skill": 1, "challenge": 4, "zone": "Anxiety"}, {"skill": 2, "challenge": 5, "zone": "Anxiety"},
    {"skill": 4, "challenge": 1, "zone": "Boredom"}, {"skill": 5, "challenge": 2, "zone": "Boredom"}
  ]},
  "mark": {"type": "point", "filled": true, "size": 110},
  "encoding": {
    "x": {"field": "skill", "type": "quantitative", "title": "Skill"},
    "y": {"field": "challenge", "type": "quantitative", "title": "Challenge"},
    "color": {"field": "zone", "type": "nominal", "title": null}
  }
}
```

Mihaly Csikszentmihalyi described flow in 1990 as the state in which people become so absorbed in an activity that time and self-consciousness fall away. It appears under specific conditions: clear goals, immediate feedback, and a challenge pitched just at the edge of the person's skill. Too much challenge produces anxiety; too little, boredom.

Most rides are not flow experiences, because the rider has no task; they are spectacle, and the [tension and release](../story-experience/tension-and-release.md) curve does the work instead. Flow arrives where guests act. An [interactive dark ride](../ride-systems/interactive-dark-ride.md) with targets, a scoring system and difficulty that climbs through the ride is a flow machine, and it explains why such rides generate repeat ridership. [Interactive queues](../human-factors/interactive-queues.md) borrow the same idea on a smaller scale to fight [queue boredom](../human-factors/queue-boredom.md).

Game designers have the deepest practical knowledge here, which is why the [level design parallels](../story-experience/level-design-parallels.md) card matters. Janet Murray's account of agency shows how giving the guest meaningful choices raises the challenge side of the equation. The risk is mismatch: a shooting ride a child cannot score on leaves the child anxious and the adult bored; adaptive difficulty is the fix.

## Explore further
- `csikszentmihalyi-flow` — Flow: The Psychology of Optimal Experience (book)
- `murray-hamlet-on-the-holodeck` — Hamlet on the Holodeck (book)
