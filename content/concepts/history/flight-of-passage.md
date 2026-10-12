---
id: flight-of-passage
title: Flight of Passage
land: history
level: beginner
abstraction: concept
parent: landmark-attractions
children: []
relations:
  - { type: example-of, target: flying-theatre }
  - { type: example-of, target: vection }
  - { type: example-of, target: stereoscopic-3d }
  - { type: example-of, target: haptics-and-next-gen-motion }
  - { type: example-of, target: presence }
  - { type: example-of, target: real-time-engines }
summary: Flight of Passage straps riders onto a link chair in front of a 3D screen so vection does the flying.
tags: [history, avatar, pandora, flying-theatre, 3d, "2017"]
visuals: [mermaid, chart]
interactive_idea: "Adjust field of view, frame rate and seat motion amplitude and watch a presence score and a nausea risk score move."
sources: [wikipedia-flight-of-passage, wikipedia-disneys-animal-kingdom, d23-legend-joe-rohde]
confidence: high
---
```mermaid
flowchart LR
    Q["Queue: Na'vi lab,<br/>avatar tank"] --> P["Pre-show rooms,<br/>link to an avatar"]
    P --> C["Link chair,<br/>16 per row, 3 rows, 3 levels"]
    C --> S["Giant 3D screen,<br/>10K at 60 fps stereo"]
    C --> H["Seat motion, wind,<br/>scent, banshee breathing"]
```

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: cues that build the sense of flying",
  "width": 300, "height": 140,
  "data": {"values": [
    {"cue": "Wide 3D visual", "weight": 5}, {"cue": "Seat pitch and roll", "weight": 3},
    {"cue": "Wind and mist", "weight": 2}, {"cue": "Scent", "weight": 1}, {"cue": "Breathing between legs", "weight": 2}
  ]},
  "mark": "bar",
  "encoding": {"y": {"field": "cue", "type": "nominal", "sort": "-x", "title": null}, "x": {"field": "weight", "type": "quantitative", "title": "Contribution, illustrative"}}
}
```

Avatar Flight of Passage opened on May 27, 2017 with Pandora at Disney's Animal Kingdom, the land Joe Rohde led. Riders straddle a link chair, a motorcycle-like seat, in rows of sixteen on three levels, and face a vast screen showing stereo media rendered at 10K and 60 frames per second. Walt Disney Imagineering built it with Lightstorm and Weta Digital, and it won a 2018 Visual Effects Society award.

It is the most refined [flying theatre](../ride-systems/flying-theatre.md) yet because it stacks cues. The wide [stereoscopic 3D](../show-technology/stereoscopic-3d.md) image fills peripheral vision, which triggers [vection](../human-factors/vection.md), the feeling of self-motion when only the picture moves. The seat adds small pitch and roll, and wind, mist and scent follow the scene. A subtle expansion between the rider's legs mimics the creature breathing, a quiet piece of [haptics](../ai-future/haptics-and-next-gen-motion.md) that many riders remember most.

The result is high [presence](../human-factors/presence.md) from a seat that barely moves. The media pipeline, with film-quality rendering at game-engine frame rates, previews the role of [real-time engines](../ai-future/real-time-engines.md) in future attractions.

## Explore further
- `wikipedia-flight-of-passage` — Avatar Flight of Passage
- `wikipedia-disneys-animal-kingdom` — Disney's Animal Kingdom
- `d23-legend-joe-rohde` — Joe Rohde, Disney Legends
