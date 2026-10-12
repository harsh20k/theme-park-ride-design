---
id: dark-adaptation
title: Dark Adaptation
land: human-factors
level: beginner
abstraction: concept
parent: perception
children: []
relations:
  - { type: applies-to, target: thresholds-and-portals }
  - { type: applies-to, target: classic-dark-ride }
  - { type: applies-to, target: lighting-mood }
  - { type: applies-to, target: emergency-stop-and-evacuation }
  - { type: applies-to, target: blacklight-and-uv-paint }
summary: Eyes take minutes to become sensitive in the dark, so a dark ride needs a dim corridor before the show.
tags: [perception, vision, lighting, dark-rides]
visuals: [chart]
interactive_idea: "Step a guest from sunlight into a queue, then a load area, then the ride; a sensitivity curve shows what they can see at each stage."
sources: [webvision-light-dark-adaptation]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative dark-adaptation curve: cones first, rods take over after several minutes",
  "width": 300, "height": 140,
  "data": {"values": [
    {"min": 0, "threshold": 100}, {"min": 1, "threshold": 40}, {"min": 3, "threshold": 25},
    {"min": 5, "threshold": 22}, {"min": 7, "threshold": 20}, {"min": 10, "threshold": 10},
    {"min": 15, "threshold": 4}, {"min": 20, "threshold": 2}, {"min": 30, "threshold": 1.2}, {"min": 40, "threshold": 1}
  ]},
  "mark": {"type": "line", "point": true, "interpolate": "monotone"},
  "encoding": {
    "x": {"field": "min", "type": "quantitative", "title": "Minutes in the dark"},
    "y": {"field": "threshold", "type": "quantitative", "title": "Light needed to see", "scale": {"type": "log"}}
  }
}
```

Walk from a sunny plaza into a dark ride and for a minute you are nearly blind. The retina's cone cells, which handle daylight and colour, adjust within a minute or two but reach a floor. The rod cells, which see in dim light, keep improving far longer: Webvision's curve shows a second, rod-driven drop in threshold beginning roughly five to eight minutes in and continuing for about forty minutes. The kink where the rods take over is the *rod–cone break*.

Ride lighting is designed around this curve. A queue that dims progressively, a dark [threshold](../story-experience/thresholds-and-portals.md) and a dim load area give the rods a head start, so the first scene of a [classic dark ride](../ride-systems/classic-dark-ride.md) can be lit at a whisper and still read. [Blacklight paint](../show-technology/blacklight-and-uv-paint.md) glows brightly to adapted eyes and looks dull in a work-lit maintenance walk. Long-wavelength red light barely touches rod adaptation, which is why work lights and exit cues in dark rides are often red.

The hazard runs the other way too: a ride [evacuation](../safety-standards/emergency-stop-and-evacuation.md) that throws on full work lights dazzles guests, and stepping out into sunlight is the moment people stumble. [Lighting mood](../sensory-environment/lighting-mood.md) plans exits as carefully as entries.

## Explore further
- `webvision-light-dark-adaptation` — Light and Dark Adaptation
