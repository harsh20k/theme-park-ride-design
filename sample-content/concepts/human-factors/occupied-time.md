---
id: occupied-time
title: Occupied Time
land: human-factors
level: beginner
abstraction: concept
parent: waiting
children: []
relations:
  - { type: part-of, target: perceived-vs-actual-wait }
  - { type: enables, target: misdirection }
summary: "Time with something to attend to feels shorter than empty time, which is why parks fill queues with props, story and things to do."
tags: [sample-content, psychology, queues, guest-experience]
visuals:
  - { type: chart, title: "Filling the wait", alt: "Bar chart showing how long a twenty-minute wait feels with nothing to do, with signage and props, and with an interactive queue, falling from about twenty-eight felt minutes to about sixteen" }
sources:
  - { title: "The Psychology of Waiting Lines", author: "David H. Maister", year: 1985 }
confidence: medium
---

```chart
%% title: Filling the wait | alt: Bar chart showing how long a twenty-minute wait feels with nothing to do, with signage and props, and with an interactive queue, falling from about twenty-eight felt minutes to about sixteen
{
  "mark": "bar",
  "data": { "values": [
    { "queue": "Nothing to do", "felt": 28 },
    { "queue": "Signage and props", "felt": 22 },
    { "queue": "Interactive queue", "felt": 16 }
  ] },
  "encoding": {
    "x": { "field": "queue", "type": "nominal", "sort": null, "title": "What fills the wait" },
    "y": { "field": "felt", "type": "quantitative", "title": "Felt length of a 20-minute wait" }
  }
}
```

Occupied time is time with something to attend to. Maister's first rule of waiting is that occupied time feels shorter than unoccupied time, and parks have built a craft on it. A queue can carry props to read, a story that unfolds room by room, a pre-show that explains the ride, or simply a view of the vehicles rushing past. None of this shortens the real wait, but it lifts the guest's attention off the clock. The chart is illustrative, showing how the same twenty-minute wait shrinks as the queue gives people more to do. It is the largest single part of [perceived vs actual wait](../human-factors/perceived-vs-actual-wait.md) and the one designers control most directly. There is a bonus: a guest busy looking at a prop is a guest who can be steered, which is why [misdirection](../show-technology/misdirection.md) in a show often starts in the queue. Pair it with the [peak-end rule](../human-factors/peak-end-rule.md), so the last minute before boarding is the best one.

## Explore further
- [Perceived vs actual wait](../human-factors/perceived-vs-actual-wait.md) — the other levers on the felt wait.
- [Misdirection](../show-technology/misdirection.md) — what a busy, attentive guest makes possible.
