---
id: duration-neglect
title: Duration Neglect
land: human-factors
level: intermediate
abstraction: concept
parent: memory
children: []
relations:
  - { type: applies-to, target: dispatch-interval }
  - { type: applies-to, target: throughput-math }
  - { type: applies-to, target: ride-beat-sheet }
  - { type: contrasts-with, target: time-perception }
  - { type: applies-to, target: scope-and-value-engineering }
summary: In memory, how long an experience lasted hardly matters; its shape matters.
tags: [psychology, memory, kahneman, pacing]
visuals: [chart]
interactive_idea: "Stretch a ride's timeline longer or shorter; the remembered rating stays flat while the operations cost rises."
sources: [fredrickson-kahneman-1993-duration-neglect, redelmeier-kahneman-1996-colonoscopy]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: doubling length barely moves the remembered score",
  "width": 300, "height": 140,
  "data": {"values": [
    {"ride": "90 s, strong finale", "remembered": 8.2, "length": 90},
    {"ride": "180 s, strong finale", "remembered": 8.4, "length": 180},
    {"ride": "90 s, weak finale", "remembered": 5.1, "length": 90},
    {"ride": "180 s, weak finale", "remembered": 5.0, "length": 180}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "ride", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "remembered", "type": "quantitative", "title": "Remembered rating", "scale": {"domain": [0, 10]}}
  }
}
```

Barbara Fredrickson and Daniel Kahneman showed people pleasant and unpleasant film clips of different lengths and asked for an overall rating afterwards. Length had almost no effect; the peak and the ending did. Redelmeier and Kahneman then found the same thing in real colonoscopies: a longer procedure with a gentler final stretch was remembered as *less* unpleasant than a shorter one. They named the effect duration neglect.

For a ride this is liberating and dangerous at once. Liberating, because a ninety-second coaster with a great shape can out-remember a four-minute one; the [beat sheet](../story-experience/ride-beat-sheet.md) matters more than the stopwatch. That matters in [throughput math](../operations-business/throughput-math.md), where ride length and [dispatch interval](../operations-business/dispatch-interval.md) trade directly against capacity, and in [value engineering](../design-process/scope-and-value-engineering.md), where a shorter show is often the cut on the table.

Dangerous, because the rule only applies in retrospect. While waiting, every minute counts, so [time perception](../human-factors/time-perception.md) in the queue follows different laws from memory of the ride.

## Explore further
- `fredrickson-kahneman-1993-duration-neglect` — Duration Neglect in Retrospective Evaluations of Affective Episodes
- `redelmeier-kahneman-1996-colonoscopy` — Patients' Memories of Painful Medical Treatments
