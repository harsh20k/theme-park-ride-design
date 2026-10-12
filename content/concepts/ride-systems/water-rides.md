---
id: water-rides
title: Water Rides
land: ride-systems
level: beginner
abstraction: super-concept
parent: null
children: [log-flume, river-rapids, shoot-the-chutes, water-coaster, slow-boat-ride]
relations:
  - { type: applies-to, target: water-ride-hydraulics }
  - { type: applies-to, target: thermal-comfort }
  - { type: enables, target: shade-and-microclimate }
  - { type: applies-to, target: corrosion-and-weathering }
  - { type: contrasts-with, target: water-parks }
  - { type: applies-to, target: seasonality-and-events }
summary: Rides where water carries, slows or soaks the rider, from gentle boats to launched splash coasters.
tags: [water-rides, overview, splash, flume]
visuals: [chart]
interactive_idea: "A wetness-versus-thrill scatter where each dot is a water ride type; click a dot to see the hardware that produces that mix."
sources: [wikipedia-log-flume, wikipedia-river-rapids-ride, wikipedia-water-coaster]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: how wet and how intense each water ride type is",
  "width": 300, "height": 160,
  "data": {"values": [
    {"type": "Slow boat ride", "wet": 1, "thrill": 1},
    {"type": "Log flume", "wet": 4, "thrill": 5},
    {"type": "River rapids", "wet": 8, "thrill": 4},
    {"type": "Shoot-the-chutes", "wet": 9, "thrill": 6},
    {"type": "Water coaster", "wet": 5, "thrill": 8}
  ]},
  "mark": {"type": "point", "filled": true, "size": 140},
  "encoding": {
    "x": {"field": "thrill", "type": "quantitative", "title": "Thrill (illustrative)", "scale": {"domain": [0, 10]}},
    "y": {"field": "wet", "type": "quantitative", "title": "How wet you get (illustrative)", "scale": {"domain": [0, 10]}},
    "color": {"field": "type", "type": "nominal", "title": null}
  }
}
```

Water rides use water as the track, the brake and the show all at once. A pump lifts water to the top of a channel and gravity brings it, and the boat, back down. The moving water spaces boats, cushions landings and, at the bottom of a drop, throws up the wall of spray that is the whole point for riders in July. That makes them the park's climate control: on a hot afternoon a splash ride's queue is longest and the wet zone around it is the most crowded patch of [shade and microclimate](../sensory-environment/shade-and-microclimate.md) design.

The family runs from quiet to fierce. **Slow boat rides** drift through scenes. **Log flumes** add lifts and drops to a trough. **River rapids** put free-spinning rafts in a turbulent channel. **Shoot-the-chutes** stage one enormous drop and splash. **Water coasters** put a boat on roller coaster track and finish in the water.

All of them share [water-ride hydraulics](../ride-engineering/water-ride-hydraulics.md), the design of pumps, troughs and splash pools, and all fight [corrosion and weathering](../ride-engineering/corrosion-and-weathering.md). Their appeal is seasonal, which shows in [seasonality and events](../operations-business/seasonality-and-events.md) planning and in [thermal comfort](../human-factors/thermal-comfort.md) thinking. Water parks are a separate business built on slides rather than vehicles.

## Explore further
- `wikipedia-log-flume` — Log flume ride (Wikipedia)
- `wikipedia-river-rapids-ride` — River rapids ride (Wikipedia)
- `wikipedia-water-coaster` — Water coaster (Wikipedia)
