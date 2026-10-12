---
id: anticipation-and-dread
title: Anticipation & Dread
land: human-factors
level: beginner
abstraction: concept
parent: emotion-and-thrill
children: []
relations:
  - { type: applies-to, target: lift-systems }
  - { type: applies-to, target: pre-show }
  - { type: applies-to, target: tension-and-release }
  - { type: causes, target: balking-and-reneging }
  - { type: contrasts-with, target: surprise-and-delight }
summary: Waiting for something frightening is itself an experience, and designers tune it like a dial.
tags: [psychology, emotion, pacing, dread]
visuals: [chart]
interactive_idea: "Scrub a timeline of a coaster from station to first drop; a dread meter climbs with the lift hill and crashes at the crest."
sources: [berns-2006-dread, apter-dangerous-edge-1992]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: dread climbs on the lift hill and collapses at the crest",
  "width": 300, "height": 140,
  "data": {"values": [
    {"stage": "Queue", "t": 0, "dread": 2}, {"stage": "Load", "t": 1, "dread": 4},
    {"stage": "Lift start", "t": 2, "dread": 5}, {"stage": "Lift mid", "t": 3, "dread": 7},
    {"stage": "Crest", "t": 4, "dread": 9}, {"stage": "Drop", "t": 5, "dread": 3},
    {"stage": "Brake run", "t": 6, "dread": 1}
  ]},
  "mark": {"type": "area", "line": true, "point": true, "opacity": 0.4},
  "encoding": {
    "x": {"field": "t", "type": "quantitative", "title": "Ride stage", "axis": {"labelExpr": "['Queue','Load','Lift','Lift','Crest','Drop','Brakes'][datum.value]"}},
    "y": {"field": "dread", "type": "quantitative", "title": "Dread"}
  }
}
```

Gregory Berns and colleagues scanned people who knew an electric shock was coming. The wait activated pain-related brain regions before any shock arrived, and many volunteers chose a *bigger* shock sooner rather than a smaller one later. Dread, in other words, has a real cost that people will pay to shorten.

Ride designers use this on purpose. The slow clank of a chain [lift](../ride-engineering/lift-systems.md) is a dread generator; so is a [pre-show](../story-experience/pre-show.md) that explains exactly what is about to go wrong. Launched coasters that remove the lift trade dread for surprise, a different flavour of thrill. The trick is to keep dread inside the [protective frame](../human-factors/protective-frame.md), where it reads as delicious anticipation, rather than letting it tip into the fear that makes guests leave the line, the [balking](../human-factors/balking-and-reneging.md) operators see at the station door.

Think of dread as the slow upslope in [tension and release](../story-experience/tension-and-release.md). The longer and more legible the climb, the bigger the payoff when it ends.

## Explore further
- `berns-2006-dread` — Neurobiological Substrates of Dread
- `apter-dangerous-edge-1992` — The Dangerous Edge: The Psychology of Excitement
