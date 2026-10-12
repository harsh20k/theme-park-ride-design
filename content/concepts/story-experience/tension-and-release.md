---
id: tension-and-release
title: Tension & Release Curve
land: story-experience
level: intermediate
abstraction: concept
parent: pacing-and-structure
children: []
relations:
  - { type: is-a, target: arousal-and-relief }
  - { type: applies-to, target: anticipation-and-dread }
  - { type: applies-to, target: speed-profile }
  - { type: applies-to, target: lighting-mood }
  - { type: example-of, target: haunted-mansion }
summary: Alternating build-up and relief so each scare or thrill lands harder than the last.
tags: [tension, pacing, rhythm, emotion, dark-ride]
visuals: [chart]
interactive_idea: "Draw a tension curve freehand; the widget flags flat stretches and tells you where a joke or a pause would help."
sources: [wikipedia-the-haunted-mansion, wikipedia-pirates-of-the-caribbean-attraction, bordwell-film-art, hench-designing-disney]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: tension rises in waves, each peak higher",
  "width": 300, "height": 140,
  "data": {"values": [
    {"t": 0, "v": 1}, {"t": 1, "v": 3}, {"t": 2, "v": 2}, {"t": 3, "v": 5},
    {"t": 4, "v": 3}, {"t": 5, "v": 7}, {"t": 6, "v": 4}, {"t": 7, "v": 9}, {"t": 8, "v": 2}
  ]},
  "mark": {"type": "line", "interpolate": "monotone", "point": true},
  "encoding": {
    "x": {"field": "t", "type": "quantitative", "title": "Scene"},
    "y": {"field": "v", "type": "quantitative", "title": "Tension"}
  }
}
```

Tension is the feeling that something is about to happen; release is the moment it does, or the moment the designer lets you breathe. A ride that only builds becomes numbing, and a ride that only releases is dull. The craft is a curve of waves, each crest a little higher than the last, with a real valley between.

The Haunted Mansion's two lead designers argued about exactly this. Claude Coats wanted a frightening, moody house; Marc Davis wanted gags and comic ghosts. Writer X Atencio's solution was a sequence: dark foreboding at the start, then a swing into the ballroom and graveyard party. The scary half earns the funny half, and the funny half makes the finale's hitchhiking ghosts a release instead of a shrug. Pirates of the Caribbean does it with quiet bayou, drops, caves, then battle.

The idea is the ride-scale version of [arousal and relief](../human-factors/arousal-and-relief.md) and runs on [anticipation and dread](../human-factors/anticipation-and-dread.md). Engineers see it as the [speed profile](../ride-engineering/speed-profile.md); lighting designers see it as [mood](../sensory-environment/lighting-mood.md). Film editors call the same shape rhythm.

## Explore further
- `wikipedia-the-haunted-mansion` — The Haunted Mansion
- `wikipedia-pirates-of-the-caribbean-attraction` — Pirates of the Caribbean (attraction)
- `bordwell-film-art` — Film Art: An Introduction
