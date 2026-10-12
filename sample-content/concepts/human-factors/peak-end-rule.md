---
id: peak-end-rule
title: Peak-End Rule
land: human-factors
level: intermediate
abstraction: concept
parent: memory
children: []
relations:
  - { type: applies-to, target: spatial-storytelling }
  - { type: contrasts-with, target: perceived-vs-actual-wait }
summary: "People remember an experience by its most intense moment and by how it ends, while its length barely counts."
tags: [sample-content, psychology, memory, ride-pacing, toy]
visuals:
  - { type: chart, title: "Peak and end of a ride", alt: "Area chart of felt intensity across eight moments of a coaster, from loading to unload, with the first drop marked as the peak and the final moment marked as the end" }
interactive_idea: "Rearrange a ride's moments and see the remembered score change."
sources:
  - { title: "When More Pain Is Preferred to Less: Adding a Better End", author: "Daniel Kahneman, Barbara L. Fredrickson, Charles A. Schreiber and Donald A. Redelmeier", year: 1993, type: "paper", note: "Psychological Science, vol. 4, no. 6" }
  - { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011 }
confidence: high
---

```chart
%% title: Peak and end of a ride | alt: Area chart of felt intensity across eight moments of a coaster, from loading to unload, with the first drop marked as the peak and the final moment marked as the end
{
  "data": { "values": [
    { "moment": "Load", "intensity": 2, "label": "" },
    { "moment": "Lift hill", "intensity": 4, "label": "" },
    { "moment": "First drop", "intensity": 9, "label": "Peak" },
    { "moment": "Loop", "intensity": 7, "label": "" },
    { "moment": "Helix", "intensity": 5, "label": "" },
    { "moment": "Brake run", "intensity": 2, "label": "" },
    { "moment": "Final dip", "intensity": 6, "label": "" },
    { "moment": "Unload", "intensity": 7, "label": "End" }
  ] },
  "encoding": {
    "x": { "field": "moment", "type": "ordinal", "sort": null, "title": "Moment in the ride" },
    "y": { "field": "intensity", "type": "quantitative", "title": "Felt intensity (0 to 10)" }
  },
  "layer": [
    { "mark": { "type": "area", "opacity": 0.3 } },
    { "mark": "line" },
    { "transform": [ { "filter": "datum.label != ''" } ], "mark": { "type": "point", "size": 120, "filled": true } },
    { "transform": [ { "filter": "datum.label != ''" } ], "mark": { "type": "text", "dy": -14 }, "encoding": { "text": { "field": "label" } } }
  ]
}
```

In a 1993 experiment, people held a hand in painfully cold water for sixty seconds, then again for ninety seconds with the last thirty slightly warmer. Most chose to repeat the longer trial. The extra time barely registered; the gentler ending did. This is the peak-end rule: a remembered experience is judged mostly by its most intense moment and by how it finishes, while its length hardly counts. It is the sharpest tool in the [memory](../human-factors/memory.md) toolbox. For a ride, it says build one unmistakable peak and protect the ending. A dull brake run after a great drop quietly lowers the score, which is why designers add a final dip or a show moment before unload. The rule also shapes [spatial storytelling](../story-experience/spatial-storytelling.md), where the exit of a land is treated as a finale rather than an afterthought. Note that it measures memory, not the live feeling that [perceived wait](../human-factors/perceived-vs-actual-wait.md) tracks.

## Explore further
- [Memory](../human-factors/memory.md) — the two selves behind the rule.
- [Occupied time](../human-factors/occupied-time.md) — making the last minute before boarding count.
