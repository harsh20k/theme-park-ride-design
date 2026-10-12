---
id: peak-end-rule
title: Peak-End Rule
land: human-factors
level: beginner
abstraction: concept
parent: memory
children: []
relations:
  - { type: applies-to, target: finale-design }
  - { type: enables, target: lifelong-ride-memories }
  - { type: contrasts-with, target: duration-neglect }
  - { type: applies-to, target: ride-beat-sheet }
  - { type: limits, target: perceived-vs-actual-wait }
summary: We judge an experience by its most intense moment and its ending, not its average.
tags: [psychology, memory, pacing, behavioral-economics]
visuals: [chart]
interactive_idea: "Drag the intensity curve of a ride; a 'remembered rating' readout updates from the peak and the last 10 seconds only."
sources: [kahneman-peak-end-1993, kahneman-thinking-fast-and-slow]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: two rides, same average intensity, different memories",
  "width": 300, "height": 140,
  "data": {"values": [
    {"t": 0, "ride": "Strong finale", "intensity": 2}, {"t": 1, "ride": "Strong finale", "intensity": 4},
    {"t": 2, "ride": "Strong finale", "intensity": 5}, {"t": 3, "ride": "Strong finale", "intensity": 6},
    {"t": 4, "ride": "Strong finale", "intensity": 9},
    {"t": 0, "ride": "Front-loaded", "intensity": 9}, {"t": 1, "ride": "Front-loaded", "intensity": 6},
    {"t": 2, "ride": "Front-loaded", "intensity": 5}, {"t": 3, "ride": "Front-loaded", "intensity": 4},
    {"t": 4, "ride": "Front-loaded", "intensity": 2}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "t", "type": "quantitative", "title": "Ride time"},
    "y": {"field": "intensity", "type": "quantitative", "title": "Intensity"},
    "color": {"field": "ride", "type": "nominal", "title": null}
  }
}
```

The peak-end rule says our memory of an experience is built from two snapshots: the most intense moment (the peak) and how it ended. The average level, and how long it lasted, barely count. Daniel Kahneman and colleagues showed this with people who kept a hand in painfully cold water: adding a slightly warmer ending made the whole episode feel better in memory, even though it was longer.

For ride designers this is a lever. A strong [finale](../story-experience/finale-design.md) and a clean, unhurried unload can lift the memory of an entire day. It also explains why a long queue fades while the drop is remembered, a point that pairs with [duration neglect](../human-factors/duration-neglect.md) and the split between the [experiencing and remembering self](../human-factors/experiencing-vs-remembering-self.md). Imagineers plan a [ride beat sheet](../story-experience/ride-beat-sheet.md) so the biggest beat lands late, not early.

## Explore further
- `kahneman-peak-end-1993` — When More Pain Is Preferred to Less: Adding a Better End
- `kahneman-thinking-fast-and-slow` — Thinking, Fast and Slow (book)
