---
id: figure-actuation
title: Figure Actuation
land: show-technology
level: intermediate
abstraction: concept
parent: animatronics
children: []
relations:
  - { type: applies-to, target: figure-fabrication }
  - { type: contrasts-with, target: free-roaming-robots }
  - { type: enables, target: kinetics-in-scenes }
  - { type: applies-to, target: reach-envelope }
  - { type: limits, target: figure-reliability }
summary: Pneumatic, hydraulic and electric actuators trade power, smoothness, cleanliness and cost.
tags: [animatronics, actuators, hydraulics, pneumatics, servo]
visuals: [chart]
interactive_idea: "Pick a limb and a required force; the widget recommends an actuator type and shows the hose or cable it needs."
sources: [wikipedia-audio-animatronics, wikipedia-animatronics, wikipedia-great-moments-with-mr-lincoln]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: relative strengths of the three actuator families",
  "width": 300, "height": 150,
  "data": {"values": [
    {"type": "Pneumatic", "trait": "Force", "score": 2}, {"type": "Pneumatic", "trait": "Smoothness", "score": 2}, {"type": "Pneumatic", "trait": "Cleanliness", "score": 4},
    {"type": "Hydraulic", "trait": "Force", "score": 5}, {"type": "Hydraulic", "trait": "Smoothness", "score": 4}, {"type": "Hydraulic", "trait": "Cleanliness", "score": 1},
    {"type": "Electric", "trait": "Force", "score": 3}, {"type": "Electric", "trait": "Smoothness", "score": 5}, {"type": "Electric", "trait": "Cleanliness", "score": 5}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "trait", "type": "nominal", "title": null},
    "y": {"field": "score", "type": "quantitative", "title": "Score, 1 to 5"},
    "color": {"field": "type", "type": "nominal", "title": null},
    "xOffset": {"field": "type"}
  }
}
```

An actuator is the part that turns a signal into motion. Figures use three families. Pneumatic cylinders run on compressed air: cheap, clean and fast, but springy and weak, so they suit light limbs, eyelids and bird wings. Hydraulic cylinders push oil at high pressure, giving the force and the smooth, continuous motion needed for a full-size body, at the cost of pumps, hoses and the risk of leaks on a costume. Electric servos and motors give precise, repeatable positioning with no fluid at all, which is why Lincoln's 2009 rebuild moved to all-electric head actuators.

Most real figures mix them: hydraulics in the torso, electric in the face, air in the fingers. The choice shapes [fabrication](../design-process/figure-fabrication.md), the hidden plant room, the [reach envelope](../safety-standards/reach-envelope.md) a moving arm needs, and how much [scene kinetics](../story-experience/kinetics-in-scenes.md) a budget can afford. The scores in the chart are illustrative; exact figures depend on the specific hardware.

## Explore further
- `wikipedia-audio-animatronics` — Audio-Animatronics
- `wikipedia-animatronics` — Animatronics
- `wikipedia-great-moments-with-mr-lincoln` — Great Moments with Mr. Lincoln
