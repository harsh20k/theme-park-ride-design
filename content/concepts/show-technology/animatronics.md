---
id: animatronics
title: Animatronics
land: show-technology
level: beginner
abstraction: super-concept
parent: null
children: [audio-animatronics-history, figure-actuation, figure-programming, skin-hair-and-costume, untethered-figures, figure-reliability]
relations:
  - { type: applies-to, target: dark-rides }
  - { type: example-of, target: pirates-of-the-caribbean }
  - { type: enables, target: kinetics-in-scenes }
  - { type: causes, target: uncanny-valley }
  - { type: applies-to, target: figure-fabrication }
summary: Mechanical characters that move and speak on cue, from singing birds to free-walking droids.
tags: [animatronics, robotics, figures, characters]
visuals: [mermaid]
interactive_idea: "Click each stage of the figure pipeline to see which teams, tools and failure modes belong to it."
sources: [wikipedia-audio-animatronics, wikipedia-animatronics, imagineers-behind-the-dreams]
confidence: high
---
```mermaid
flowchart LR
  A["Character design"] --> B["Sculpt and scan"]
  B --> C["Mechanism and actuators"]
  C --> D["Skin, hair, costume"]
  D --> E["Programming"]
  E --> F["Install and sync to show"]
  F --> G["Daily cycles and upkeep"]
  G -.->|"wear data"| C
```

An animatronic is a character built as a machine. A frame of steel or aluminium is the skeleton, actuators are the muscles, wiring is the nervous system, and a sculpted skin and costume are the face the guest sees. Disney coined the trademark Audio-Animatronics in 1961 because sound and motion were played back together from one recording.

This section follows a figure through its life. The [history card](../show-technology/audio-animatronics-history.md) traces the lineage from the Tiki Room birds to today's all-electric heads. [Actuation](../show-technology/figure-actuation.md) explains why small limbs are pneumatic and big ones hydraulic. [Programming](../show-technology/figure-programming.md) is where animators turn keyframes into valve commands, and where the [uncanny valley](../human-factors/uncanny-valley.md) is won or lost. [Skin and costume](../show-technology/skin-hair-and-costume.md) covers silicone, foam latex and the five-year skin cycle. [Untethered figures](../show-technology/untethered-figures.md) cut the hoses, and [reliability](../show-technology/figure-reliability.md) asks how a figure survives a thousand shows a week.

Figures live inside [dark rides](../ride-systems/dark-rides.md); Pirates of the Caribbean at Disneyland remains the classic showcase.

## Explore further
- `wikipedia-audio-animatronics` — Audio-Animatronics
- `wikipedia-animatronics` — Animatronics
- `imagineers-behind-the-dreams` — Walt Disney Imagineering: A Behind the Dreams Look
