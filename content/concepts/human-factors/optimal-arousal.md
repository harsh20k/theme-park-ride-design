---
id: optimal-arousal
title: Optimal Arousal
land: human-factors
level: intermediate
abstraction: sub-concept
parent: arousal-and-relief
children: []
relations:
  - { type: applies-to, target: attraction-mix }
  - { type: applies-to, target: family-coasters }
  - { type: applies-to, target: age-differences }
  - { type: applies-to, target: acceleration-envelopes }
  - { type: limits, target: sensation-seeking }
summary: Enjoyment peaks at a middle level of intensity, and the sweet spot differs for every guest.
tags: [psychology, arousal, intensity, segmentation]
visuals: [chart]
interactive_idea: "Pick a guest profile (child, teen, parent, grandparent) and see where each ride on a park map falls relative to their curve."
sources: [yerkes-dodson-1908, zuckerman-1979-sensation-seeking]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: inverted-U curves for two guests",
  "width": 300, "height": 140,
  "data": {"values": [
    {"guest": "Cautious", "intensity": 0, "fun": 1}, {"guest": "Cautious", "intensity": 2, "fun": 6},
    {"guest": "Cautious", "intensity": 4, "fun": 8}, {"guest": "Cautious", "intensity": 6, "fun": 5},
    {"guest": "Cautious", "intensity": 8, "fun": 2}, {"guest": "Cautious", "intensity": 10, "fun": 0},
    {"guest": "Thrill-seeker", "intensity": 0, "fun": 0}, {"guest": "Thrill-seeker", "intensity": 2, "fun": 2},
    {"guest": "Thrill-seeker", "intensity": 4, "fun": 4}, {"guest": "Thrill-seeker", "intensity": 6, "fun": 7},
    {"guest": "Thrill-seeker", "intensity": 8, "fun": 9}, {"guest": "Thrill-seeker", "intensity": 10, "fun": 6}
  ]},
  "mark": {"type": "line", "interpolate": "monotone", "point": true},
  "encoding": {
    "x": {"field": "intensity", "type": "quantitative", "title": "Ride intensity"},
    "y": {"field": "fun", "type": "quantitative", "title": "Enjoyment"},
    "color": {"field": "guest", "type": "nominal", "title": null}
  }
}
```

In 1908 Yerkes and Dodson found that mice learned fastest at a medium shock strength: too weak and nothing happened, too strong and they panicked. The inverted-U that bears their names has since been stretched well beyond its data, but the core idea holds for guests: enjoyment rises with intensity up to a point, then falls as arousal tips into distress.

The point moves. Marvin Zuckerman argued that people differ in their preferred level of stimulation, the trait he called [sensation seeking](../human-factors/sensation-seeking.md). Children, [older guests](../human-factors/age-differences.md) and first-timers usually sit left of the curve; coaster enthusiasts sit far right. A park cannot hit one target, so it builds an [attraction mix](../masterplanning/attraction-mix.md) that spans the range, from [family coasters](../ride-systems/family-coasters.md) to record-breakers, and uses [height requirements](../human-factors/height-and-health-requirements.md) and clear thrill ratings to help guests self-select.

Engineering sets the ceiling through [acceleration envelopes](../ride-engineering/acceleration-envelopes.md); psychology decides how much of that ceiling to use.

## Explore further
- `yerkes-dodson-1908` — The Relation of Strength of Stimulus to Rapidity of Habit-Formation
- `zuckerman-1979-sensation-seeking` — Sensation Seeking: Beyond the Optimal Level of Arousal
