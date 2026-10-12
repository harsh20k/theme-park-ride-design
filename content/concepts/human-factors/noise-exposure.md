---
id: noise-exposure
title: Noise Exposure
land: human-factors
level: intermediate
abstraction: concept
parent: comfort-and-body
children: []
relations:
  - { type: applies-to, target: audio-zoning }
  - { type: applies-to, target: ride-operations-staffing }
  - { type: applies-to, target: sensory-guides-and-quiet-rooms }
  - { type: applies-to, target: onboard-and-spatial-audio }
  - { type: applies-to, target: pyrotechnics }
summary: Parks are loud all day, and the people most at risk are the operators who stand in it for a whole shift.
tags: [noise, hearing, operations, sound-design]
visuals: [chart]
interactive_idea: "A dose meter: set the sound level at an operator's booth and the shift length, and watch the daily noise dose climb past 100 percent."
sources: [osha-1910-95-noise, niosh-noise-hearing-loss]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "OSHA Table G-16: permitted daily exposure falls fast as sound level rises",
  "width": 300, "height": 150,
  "data": {"values": [
    {"dba": 90, "hours": 8}, {"dba": 92, "hours": 6}, {"dba": 95, "hours": 4}, {"dba": 97, "hours": 3},
    {"dba": 100, "hours": 2}, {"dba": 102, "hours": 1.5}, {"dba": 105, "hours": 1}, {"dba": 110, "hours": 0.5}, {"dba": 115, "hours": 0.25}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "dba", "type": "quantitative", "title": "Sound level, dBA (slow response)"},
    "y": {"field": "hours", "type": "quantitative", "title": "Permitted hours per day"}
  }
}
```

Noise is a slow injury. Hearing damage from loud sound builds up over months of exposure and does not heal, which is why NIOSH describes occupational hearing loss as permanent but preventable. The US rule, OSHA 29 CFR 1910.95, sets an action level of 85 dBA averaged over eight hours, above which hearing protection and monitoring are required, and a permissible limit of 90 dBA. NIOSH recommends 85 dBA as the ceiling.

A park easily reaches those numbers. Coaster trains, screaming riders, [pyrotechnics](../show-technology/pyrotechnics.md), fountain shows and area music stack up. The guest is exposed for a day; the ride operator, the parade performer and the stage technician for a career. Noise exposure is therefore mostly a [staffing](../operations-business/ride-operations-staffing.md) and booth-design problem: an enclosed operator cabin, rotation between loud and quiet posts, and measured sound levels at every position.

For guests the issue is comfort and inclusion rather than injury. [Audio zoning](../sensory-environment/audio-zoning.md) keeps show sound from bleeding into dining areas. [Onboard audio](../show-technology/onboard-and-spatial-audio.md) can be loud exactly where it matters and quiet elsewhere. And for guests with sensory sensitivities, the sound map of a park is what [sensory guides and quiet rooms](../human-factors/sensory-guides-and-quiet-rooms.md) are built around.

## Explore further
- `osha-1910-95-noise` — OSHA 29 CFR 1910.95 Occupational noise exposure
- `niosh-noise-hearing-loss` — NIOSH: About Occupational Hearing Loss
