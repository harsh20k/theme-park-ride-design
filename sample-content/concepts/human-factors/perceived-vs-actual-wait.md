---
id: perceived-vs-actual-wait
title: Perceived vs Actual Wait
land: human-factors
level: beginner
abstraction: concept
parent: waiting
children: []
relations:
  - { type: applies-to, target: throughput-math }
  - { type: limits, target: dispatch-interval }
summary: "Two queues can take exactly the same number of minutes and feel nothing alike, because the felt length of a wait depends on what surrounds the guest, not just the clock."
tags: [sample-content, psychology, queues, guest-experience, toy]
visuals:
  - { type: chart, title: "Same wait, four queue designs", alt: "Bar chart of how long an identical twenty-minute wait feels under four queue designs, from about thirty felt minutes for empty switchbacks down to about fifteen for an interactive pre-show, with a horizontal rule at the true twenty minutes" }
interactive_idea: "Same 20-minute wait, four queue designs — see how long each one feels."
sources:
  - { title: "The Psychology of Waiting Lines", author: "David H. Maister", year: 1985 }
confidence: medium
---

```chart
%% title: Same wait, four queue designs | alt: Bar chart of how long an identical twenty-minute wait feels under four queue designs, from about thirty felt minutes for empty switchbacks down to about fifteen for an interactive pre-show, with a horizontal rule at the true twenty minutes
{
  "data": { "values": [
    { "design": "Empty switchbacks", "felt": 29 },
    { "design": "Posted wait time", "felt": 24 },
    { "design": "Themed scenery", "felt": 20 },
    { "design": "Interactive pre-show", "felt": 15 }
  ] },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": { "field": "design", "type": "nominal", "sort": null, "title": "Queue design" },
        "y": { "field": "felt", "type": "quantitative", "title": "How long it feels (minutes)" }
      }
    },
    {
      "data": { "values": [ { "actual": 20 } ] },
      "mark": { "type": "rule", "strokeDash": [6, 4] },
      "encoding": { "y": { "field": "actual", "type": "quantitative" } }
    }
  ]
}
```

Two queues can both take exactly twenty minutes and feel nothing alike. A bare switchback in the sun seems endless; a shaded, story-filled corridor with a pre-show can feel like a quarter of an hour. The numbers in the chart are illustrative rather than measured, but the direction is well established. Maister's 1985 essay listed the reasons: unoccupied time drags, unexplained waits drag, anxious waits drag, and waiting alone drags more than waiting in a group. The actual number comes from [throughput math](../operations-business/throughput-math.md); the felt number comes from everything around the guest while that arithmetic plays out. The two interact. If guests can see the station, a sloppy [dispatch interval](../operations-business/dispatch-interval.md) becomes visible, and the wait feels unfair as well as long. [Occupied time](../human-factors/occupied-time.md) is the main lever for closing the gap, and honest posted times are the second: a queue that finishes sooner than promised feels like a gift.

## Explore further
- [Occupied time](../human-factors/occupied-time.md) — the biggest lever on the felt wait.
- [Waiting](../human-factors/waiting.md) — the wider picture of queues as a design problem.
- [Peak-end rule](../human-factors/peak-end-rule.md) — why the memory of a wait differs from the wait itself.
