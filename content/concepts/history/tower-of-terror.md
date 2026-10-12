---
id: tower-of-terror
title: Tower of Terror
land: history
level: beginner
abstraction: concept
parent: landmark-attractions
children: []
relations:
  - { type: example-of, target: anticipation-and-dread }
  - { type: example-of, target: drop-tower }
  - { type: example-of, target: airtime-and-negative-g }
  - { type: example-of, target: pre-show }
  - { type: example-of, target: retheming-and-overlays }
  - { type: example-of, target: surprise-and-delight }
summary: Tower of Terror pulls its elevator cabs down faster than gravity, after a pre-show built to make you dread it.
tags: [history, tower-of-terror, drop-tower, otis, dread, "1994"]
visuals: [image, chart]
interactive_idea: "Compose your own drop sequence from the random pool and feel the resulting g-trace plotted live."
sources: [wikipedia-tower-of-terror, wikipedia-disneys-hollywood-studios]
confidence: high
---
![The Hollywood Tower Hotel directory sign at Disney's Hollywood Studios](https://upload.wikimedia.org/wikipedia/commons/4/47/Twilight_Zone_Tower_of_Terror_%28Disney%27s_Hollywood_Studios%29_2.jpg)
*Photo: Wacky Windjammer, CC BY-SA 4.0, via Wikimedia Commons — [source](https://commons.wikimedia.org/wiki/File:Twilight_Zone_Tower_of_Terror_(Disney%27s_Hollywood_Studios)_2.jpg)*

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: tension builds through the pre-show, then drops are randomised",
  "width": 300, "height": 140,
  "data": {"values": [
    {"t": 0, "stage": "Lobby", "tension": 2}, {"t": 1, "stage": "Library", "tension": 4},
    {"t": 2, "stage": "Boiler room", "tension": 5}, {"t": 3, "stage": "Fifth Dimension", "tension": 7},
    {"t": 4, "stage": "Doors open", "tension": 9}, {"t": 5, "stage": "Drops", "tension": 10}, {"t": 6, "stage": "Unload", "tension": 3}
  ]},
  "mark": {"type": "area", "line": true, "opacity": 0.5},
  "encoding": {
    "x": {"field": "stage", "type": "nominal", "sort": null, "title": null},
    "y": {"field": "tension", "type": "quantitative", "title": "Dread, illustrative"}
  }
}
```

The Twilight Zone Tower of Terror opened at Disney-MGM Studios on July 22, 1994. Guests enter a derelict 1930s hotel, watch a library [pre-show](../story-experience/pre-show.md), walk a boiler room, and board a service elevator. Self-propelled cabs by Eaton-Kenway leave the shaft, cross a Fifth Dimension scene, and lock into a second shaft where the drop happens.

The drop is the engineering landmark. Otis built the system, and cables pull the cab down slightly faster than free fall, so riders lift out of their seats: real [negative-g airtime](../ride-engineering/airtime-and-negative-g.md) in a [drop tower](../ride-systems/drop-tower.md). Two motors take the cab to about 39 mph in roughly 1.5 seconds. From January 2003 the computer picks a random drop sequence, so repeat riders cannot predict the pattern, a deliberate source of [surprise and delight](../human-factors/surprise-and-delight.md).

The whole attraction is a study in [anticipation and dread](../human-factors/anticipation-and-dread.md): the ride itself is short, but the building, the story and the open doors at the top do most of the work. The California version (2004) was rethemed in 2017 as Guardians of the Galaxy on the same ride system, a major case of [retheming and overlays](../operations-business/retheming-and-overlays.md).

## Explore further
- `wikipedia-tower-of-terror` — The Twilight Zone Tower of Terror
- `wikipedia-disneys-hollywood-studios` — Disney's Hollywood Studios
