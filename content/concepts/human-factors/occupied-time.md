---
id: occupied-time
title: Occupied Time
land: human-factors
level: beginner
abstraction: concept
parent: waiting
children: []
relations:
  - { type: applies-to, target: queue-storytelling }
  - { type: applies-to, target: pre-show }
  - { type: example-of, target: tower-of-terror }
  - { type: enables, target: narrative-transportation }
  - { type: applies-to, target: set-dressing-and-props }
summary: A wait with something to look at or do feels shorter than the same wait with nothing.
tags: [waiting, attention, theming, queues]
visuals: [chart]
interactive_idea: "Fill a 30-minute queue with blocks of theming, pre-show and plain railings; a felt-wait estimate updates per block."
sources: [maister-psychology-of-waiting-lines, mentalfloss-disney-queue-psychology]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: same 30-minute wait, different felt length",
  "width": 300, "height": 120,
  "data": {"values": [
    {"queue": "Bare switchbacks in sun", "felt": 42},
    {"queue": "Shaded, music, screens", "felt": 31},
    {"queue": "Themed sets and pre-show", "felt": 24},
    {"queue": "Interactive queue", "felt": 21}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "queue", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "felt", "type": "quantitative", "title": "Felt minutes"}
  }
}
```

Maister's first proposition is the one every themed queue is built on: occupied time feels shorter than unoccupied time. The mechanism is attention. When the mind is busy it stops counting the internal clock's ticks, so the [felt duration](../human-factors/time-perception.md) shrinks. Psychologists call the lab version the dual-task effect, and the Mental Floss piece on Disney queues uses exactly that term to describe why story-rich lines seem to move.

The classic example is the Tower of Terror, whose queue is a ruined 1930s hotel lobby complete with a library pre-show; by the time guests reach the boiler room they have been inside the story for a quarter of an hour and barely registered it as waiting. [Queue storytelling](../story-experience/queue-storytelling.md) and a [pre-show](../story-experience/pre-show.md) are occupied time with a narrative purpose, and [set dressing](../story-experience/set-dressing-and-props.md) gives the eye something new at every switchback turn.

There is a design order to it. Occupation works best when it is relevant to what is coming: it is then both a distraction and the first act of the ride, feeding [narrative transportation](../human-factors/narrative-transportation.md) rather than merely killing minutes. Random screens kill minutes; a story spends them.

## Explore further
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines
- `mentalfloss-disney-queue-psychology` — The Psychological Tricks Disney Parks Use to Make Long Wait Times More Bearable
