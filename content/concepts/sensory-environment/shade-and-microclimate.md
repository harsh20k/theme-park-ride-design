---
id: shade-and-microclimate
title: Shade, Microclimate & Cooling
land: sensory-environment
level: intermediate
abstraction: concept
parent: landscape-and-climate
children: []
relations:
  - { type: applies-to, target: thermal-comfort }
  - { type: applies-to, target: rest-areas }
  - { type: applies-to, target: walking-fatigue }
  - { type: applies-to, target: site-selection }
  - { type: enables, target: level-of-service }
summary: Canopy, awnings, breeze, water and light-coloured surfaces shape a local climate that keeps guests outdoors longer.
tags: [shade, microclimate, heat, comfort, cooling]
visuals: [chart]
interactive_idea: "Move the sun across a plaza model; shaded area, radiant load and an estimated 'comfortable minutes' counter update as you add trees and awnings."
sources: [chen-ng-2012-outdoor-thermal-comfort, d23-bill-evans]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: what shade changes on a hot afternoon",
  "width": 300, "height": 140,
  "data": {"values": [
    {"spot": "Open paving", "measure": "Air temperature", "value": 33},
    {"spot": "Open paving", "measure": "Felt temperature", "value": 41},
    {"spot": "Under tree canopy", "measure": "Air temperature", "value": 32},
    {"spot": "Under tree canopy", "measure": "Felt temperature", "value": 33},
    {"spot": "Awning by water", "measure": "Air temperature", "value": 31},
    {"spot": "Awning by water", "measure": "Felt temperature", "value": 30}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "spot", "type": "nominal", "title": null},
    "y": {"field": "value", "type": "quantitative", "title": "Degrees C, illustrative"},
    "xOffset": {"field": "measure"},
    "color": {"field": "measure", "type": "nominal", "title": null}
  }
}
```

The weather report describes the region; the microclimate is what a guest actually feels on one square metre of paving. The biggest term is not air temperature but radiant heat: sun on skin and heat thrown back by pavement, which engineers call mean radiant temperature. Shade removes most of it without changing the thermometer. Chen and Ng's review of outdoor comfort research finds the same pattern everywhere: people decide where to sit, stay or leave by local sun, shade and wind.

Designers have five levers. Tree canopy, which also carries story, as Bill Evans's jungle did. Built shade: awnings, arcades, covered queues. Breeze, by orienting paths for air to move. Water, from fountains to misting fans. And surfaces: pale paving reflects, dark asphalt stores heat and releases it all evening.

The payoff shows up in [thermal comfort](../human-factors/thermal-comfort.md), in slower onset of [walking fatigue](../human-factors/walking-fatigue.md), and in whether [rest areas](../masterplanning/rest-areas.md) are used at all. It is also a [site selection](../masterplanning/site-selection.md) question, since a hot-climate park needs far more cover per guest, and a lever on [level of service](../masterplanning/level-of-service.md): a shaded queue of forty minutes is tolerated where an exposed one empties.

## Explore further
- `chen-ng-2012-outdoor-thermal-comfort` — Outdoor Thermal Comfort and Outdoor Activities: A Review of Research in the Past Decade
- `d23-bill-evans` — Bill Evans — Disney Legend
