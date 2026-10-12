---
id: three-act-ride
title: Three-Act Ride Structure
land: story-experience
level: intermediate
abstraction: sub-concept
parent: story-driven-design
children: []
relations:
  - { type: applies-to, target: ride-beat-sheet }
  - { type: applies-to, target: finale-design }
  - { type: enables, target: tension-and-release }
  - { type: applies-to, target: ride-layout-design }
  - { type: example-of, target: tower-of-terror }
summary: Setup, confrontation and resolution, mapped onto queue, ride and unload.
tags: [story, structure, pacing, screenwriting]
visuals: [chart]
interactive_idea: "Scrub through a timeline of a famous ride and watch which act each scene belongs to and how tension climbs."
sources: [wikipedia-three-act-structure, wikipedia-tower-of-terror, wikipedia-pirates-of-the-caribbean-attraction, khan-imagineering-in-a-box]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: three acts mapped onto a dark ride",
  "width": 300, "height": 140,
  "data": {"values": [
    {"t": 0, "act": "1 Setup", "tension": 1}, {"t": 1, "act": "1 Setup", "tension": 2},
    {"t": 2, "act": "1 Setup", "tension": 3}, {"t": 3, "act": "2 Confrontation", "tension": 4},
    {"t": 4, "act": "2 Confrontation", "tension": 6}, {"t": 5, "act": "2 Confrontation", "tension": 7},
    {"t": 6, "act": "2 Confrontation", "tension": 9}, {"t": 7, "act": "3 Resolution", "tension": 5},
    {"t": 8, "act": "3 Resolution", "tension": 2}
  ]},
  "mark": {"type": "area", "line": true, "opacity": 0.7},
  "encoding": {
    "x": {"field": "t", "type": "quantitative", "title": "Queue -> ride -> unload"},
    "y": {"field": "tension", "type": "quantitative", "title": "Tension"},
    "color": {"field": "act", "type": "nominal", "title": null}
  }
}
```

Screenwriters describe most films as three acts: a setup that introduces the world and a problem, a confrontation where things get worse, and a resolution. Syd Field's 1979 book Screenplay made the model standard. Ride designers use the same shape, but the acts are spread across physical space rather than screen time.

Act one is usually the queue and [pre-show](../story-experience/pre-show.md). The Twilight Zone Tower of Terror opens with a ruined hotel, then a library where Rod Serling explains the 1939 lightning strike. Act two is the ride itself: boarding the elevator, meeting the ghosts, the drops. Act three is the short, calm exit: Serling's closing warning and the unload corridor.

The structure gives a [ride beat sheet](../story-experience/ride-beat-sheet.md) its spine and tells the [finale](../story-experience/finale-design.md) where to land. It also pairs with the [peak-end rule](../human-factors/peak-end-rule.md): the climax should sit late in act two, and act three should be clean, not rushed. Not every ride needs a plot, but almost every good one has this shape.

## Explore further
- `wikipedia-three-act-structure` — Three-act structure
- `wikipedia-tower-of-terror` — The Twilight Zone Tower of Terror
- `khan-imagineering-in-a-box` — Imagineering in a Box
