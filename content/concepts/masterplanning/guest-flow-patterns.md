---
id: guest-flow-patterns
title: Guest Flow Patterns
land: masterplanning
level: intermediate
abstraction: concept
parent: guest-flow-and-capacity
children: []
relations:
  - { type: applies-to, target: turn-bias }
  - { type: applies-to, target: desire-lines }
  - { type: applies-to, target: crowd-analytics }
  - { type: enables, target: entertainment-scheduling }
  - { type: applies-to, target: herding-and-social-proof }
summary: "The predictable tides of a park day: rope-drop rush, lunchtime surge, evening pull to the hub."
tags: [circulation, crowd, behaviour, timing]
visuals: [chart]
interactive_idea: "Scrub a clock and watch heat blobs move across a park map through a simulated day."
sources: [gkstill-crowd-density, fruin-pedestrian-planning-1971, mappedin-epic-universe]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: where the crowd is through the day",
  "width": 300, "height": 150,
  "data": {"values": [
    {"hour": 9, "zone": "Entry and hub", "share": 70}, {"hour": 11, "zone": "Entry and hub", "share": 25},
    {"hour": 13, "zone": "Entry and hub", "share": 20}, {"hour": 16, "zone": "Entry and hub", "share": 25},
    {"hour": 20, "zone": "Entry and hub", "share": 60},
    {"hour": 9, "zone": "Outer lands", "share": 30}, {"hour": 11, "zone": "Outer lands", "share": 75},
    {"hour": 13, "zone": "Outer lands", "share": 80}, {"hour": 16, "zone": "Outer lands", "share": 75},
    {"hour": 20, "zone": "Outer lands", "share": 40}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "hour", "type": "quantitative", "title": "Hour of day"},
    "y": {"field": "share", "type": "quantitative", "title": "Share of guests, percent"},
    "color": {"field": "zone", "type": "nominal", "title": null}
  }
}
```

Guest flow patterns are the daily tides of a park. Planners count on a few of them. At opening, most guests pour through the entry and race to the headline ride, a surge operators call rope drop. By late morning the crowd has spread to the outer lands. Lunch pulls people toward food, mid-afternoon brings the heat lull, and the evening parade or fireworks drags everyone back to the hub and then out through a single exit at once.

Several biases shape the drift. Many guests show a [turn bias](../human-factors/turn-bias.md), often heading right or toward the nearest visible icon, and they follow [social proof](../human-factors/herding-and-social-proof.md), joining lines that already look popular. Where the paved path disagrees with the shortest route, [desire lines](../human-factors/desire-lines.md) appear in the grass. Layouts matter too: a sealed-portal park like Epic Universe makes guests plan which world to commit to, while a hub lets them bounce.

Modern parks measure all this with [crowd analytics](../operations-business/crowd-analytics.md) and use it for [entertainment scheduling](../operations-business/entertainment-scheduling.md), timing a show to pull guests out of a jammed land. The chart above is illustrative; real shares depend on the park and season.

## Explore further
- `gkstill-crowd-density` — Crowd density: static and dynamic spaces
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (Fruin)
- `mappedin-epic-universe` — Epic Universe map and layout analysis
