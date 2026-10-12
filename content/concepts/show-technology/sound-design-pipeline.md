---
id: sound-design-pipeline
title: Sound Design Pipeline
land: show-technology
level: intermediate
abstraction: concept
parent: lighting-and-audio
children: []
relations:
  - { type: applies-to, target: software-toolkit }
  - { type: applies-to, target: show-scripts }
  - { type: applies-to, target: area-music }
  - { type: enables, target: ride-show-synchronization }
  - { type: applies-to, target: show-install }
summary: Record, edit, mix per zone, build cues, then tune everything in the real building.
tags: [sound-design, pipeline, mixing, cues, qlab]
visuals: [mermaid]
interactive_idea: "A kanban of pipeline stages; drag a sound cue through them and see which files, tools and approvals it collects."
sources: [qlab-docs, huntington-show-networks-book, wikipedia-smpte-timecode]
confidence: high
---
```mermaid
flowchart LR
  A["Script and beat sheet"] --> B["Record dialogue, score, effects"]
  B --> C["Edit and sound-design in a DAW"]
  C --> D["Mix per zone and per speaker"]
  D --> E["Build cues: triggers, timecode, loops"]
  E --> F["Load into playback and show controller"]
  F --> G["Tune in the building with the ride running"]
  G -.->|"notes"| C
```

Ride audio is built in stages that mirror film post-production until the last two. It starts with the [show script](../story-experience/show-scripts.md) and beat sheet, which say what the guest should hear in each scene and for how long. Dialogue, score and effects are recorded or licensed, then edited and layered in a digital audio workstation. The mix is unusual: one mix per zone, often per speaker, because a dark ride is a chain of small rooms with their own loops and voices.

Next the audio becomes cues. Linear shows, such as a theatre pre-show, run against SMPTE timecode so every device follows one clock. Rides run on triggers from vehicle position, with background loops that never stop. Cue software like QLab handles audio, video and lighting cues with timecode, OSC and MIDI Show Control; attractions usually load final cues into dedicated controllers and players.

The last stage only happens on site. Speakers are equalised in the real room, levels are set with the ride and its fans running, and the composer hears how the score survives a moving vehicle. That is why sound is part of [show install](../design-process/show-install.md), and why [area music](../sensory-environment/area-music.md) outside the ride is mixed with the same discipline.

## Explore further
- `qlab-docs` — QLab 5 documentation
- `huntington-show-networks-book` — Show Networks and Control Systems
- `wikipedia-smpte-timecode` — SMPTE timecode
