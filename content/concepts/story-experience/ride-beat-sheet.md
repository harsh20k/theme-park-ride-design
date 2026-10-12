---
id: ride-beat-sheet
title: Ride Beat Sheet
land: story-experience
level: intermediate
abstraction: concept
parent: pacing-and-structure
children: []
relations:
  - { type: applies-to, target: ride-layout-design }
  - { type: applies-to, target: ride-show-synchronization }
  - { type: applies-to, target: previs }
  - { type: enables, target: peak-end-rule }
  - { type: applies-to, target: color-scripts }
  - { type: example-of, target: pirates-of-the-caribbean }
summary: A scene-by-scene list of what guests see, feel and learn at each moment of a ride.
tags: [beats, script, pacing, planning, documentation]
visuals: [chart]
interactive_idea: "An editable beat table that plots emotion and speed per scene and flags two flat beats in a row."
sources: [wikipedia-pirates-of-the-caribbean-attraction, khan-imagineering-in-a-box, level-design-book-storytelling, bordwell-film-art]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative beat sheet: Pirates of the Caribbean, Disneyland",
  "width": 300, "height": 150,
  "data": {"values": [
    {"n": 1, "beat": "Bayou", "intensity": 1},
    {"n": 2, "beat": "Two drops", "intensity": 5},
    {"n": 3, "beat": "Dead Man's Cove", "intensity": 4},
    {"n": 4, "beat": "Captain's quarters", "intensity": 3},
    {"n": 5, "beat": "Fort battle", "intensity": 7},
    {"n": 6, "beat": "Auction and chase", "intensity": 5},
    {"n": 7, "beat": "Town on fire", "intensity": 8},
    {"n": 8, "beat": "Jail and powder room", "intensity": 6},
    {"n": 9, "beat": "Lift hill home", "intensity": 2}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "n", "type": "ordinal", "title": "Beat"},
    "y": {"field": "intensity", "type": "quantitative", "title": "Intensity"},
    "tooltip": [{"field": "beat"}]
  }
}
```

A beat sheet is a screenwriter's tool: a numbered list of the moments in a story, each described in a line. A ride beat sheet does the same for an attraction, but every row also records what the guest sees, which direction they face, how fast they are moving, what they hear and what they now know. It is the single document that the show writer, ride engineer, lighting designer and media team all work from.

Pirates of the Caribbean at Disneyland reads cleanly as beats: a quiet bayou, two drops into caves, skeleton pirates, a fort under cannon fire, the auction, the town on fire, the jail, and a lift hill home. Each beat has its own intensity, and no two quiet beats sit together. The chart above is an illustrative reading of that sequence, not measured data.

The beat sheet feeds [ride layout design](../design-process/ride-layout-design.md), [previs](../design-process/previs.md) and [ride-show synchronisation](../show-technology/ride-show-synchronization.md), and it is where the [colour script](../sensory-environment/color-scripts.md) gets its cues. Placing the strongest beat late is how designers put the [peak-end rule](../human-factors/peak-end-rule.md) to work.

## Explore further
- `wikipedia-pirates-of-the-caribbean-attraction` — Pirates of the Caribbean (attraction)
- `khan-imagineering-in-a-box` — Imagineering in a Box
- `level-design-book-storytelling` — The Level Design Book: Storytelling
