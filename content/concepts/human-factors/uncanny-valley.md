---
id: uncanny-valley
title: Uncanny Valley
land: human-factors
level: beginner
abstraction: concept
parent: flow-and-immersion
children: []
relations:
  - { type: applies-to, target: animatronics }
  - { type: applies-to, target: skin-hair-and-costume }
  - { type: applies-to, target: figure-programming }
  - { type: applies-to, target: free-roaming-robots }
  - { type: applies-to, target: projection-mapping }
summary: Figures that look almost human but not quite trigger unease rather than affection.
tags: [animatronics, robotics, perception, character]
visuals: [chart]
interactive_idea: "Slide a character's realism from cartoon to photoreal and separately its motion quality; a likability curve shows the dip and how motion deepens it."
sources: [mori-uncanny-valley-ieee-spectrum, mathur-reichling-uncanny-valley-2016]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative sketch of Mori's uncanny valley",
  "width": 300, "height": 160,
  "data": {"values": [
    {"human": 0, "affinity": 0}, {"human": 20, "affinity": 20}, {"human": 40, "affinity": 45}, {"human": 60, "affinity": 65},
    {"human": 72, "affinity": 55}, {"human": 80, "affinity": 10}, {"human": 86, "affinity": -20}, {"human": 92, "affinity": 20}, {"human": 100, "affinity": 90}
  ]},
  "mark": {"type": "line", "interpolate": "monotone", "point": true},
  "encoding": {
    "x": {"field": "human", "type": "quantitative", "title": "Human likeness, percent"},
    "y": {"field": "affinity", "type": "quantitative", "title": "Affinity"}
  }
}
```

In 1970 the roboticist Masahiro Mori sketched a curve. As a figure looks more human, people like it more, until it becomes almost human, at which point liking collapses into unease. Only when it becomes indistinguishable from a person does affinity recover. He called the dip the uncanny valley and noted that movement deepens it. Mathur and Reichling tested the idea in 2016 with photographs of real robot faces and found the valley both in likability and in how much people trusted the robot.

Animatronics live on this curve. Most figures stay safely on the cartoon side; a stylised pirate is loved because nobody expects it to be a person. Trouble starts with realistic human figures, where [skin, hair and costume](../show-technology/skin-hair-and-costume.md) can look right but [figure programming](../show-technology/figure-programming.md) gives away the wrong timing of an eye blink or the dead weight of a hand. The craft response is to push either way: more stylised, or far more precise motion, often from performance capture.

The valley also governs [projection-mapped](../show-technology/projection-mapping.md) faces, digital doubles on screens, and the coming generation of [free-roaming robot characters](../ai-future/free-roaming-robots.md), where motion quality rather than appearance will decide whether guests hug them or back away.

## Explore further
- `mori-uncanny-valley-ieee-spectrum` — The Uncanny Valley (Masahiro Mori, 1970; IEEE Spectrum translation)
- `mathur-reichling-uncanny-valley-2016` — Navigating a social world with robot partners: A quantitative cartography of the Uncanny Valley
