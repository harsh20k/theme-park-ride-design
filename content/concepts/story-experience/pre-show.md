---
id: pre-show
title: Pre-Show
land: story-experience
level: beginner
abstraction: sub-concept
parent: queue-storytelling
children: []
relations:
  - { type: applies-to, target: throughput-math }
  - { type: applies-to, target: peppers-ghost }
  - { type: enables, target: group-dynamics }
  - { type: applies-to, target: show-control-systems }
  - { type: example-of, target: haunted-mansion }
  - { type: example-of, target: tower-of-terror }
summary: A short, timed show before boarding that sets rules, stakes and mood for a whole group.
tags: [pre-show, queue, timing, show, briefing]
visuals: [mermaid]
interactive_idea: "Set pre-show length, room count and ride dispatch interval; the widget shows whether groups back up or flow."
sources: [wikipedia-the-haunted-mansion, wikipedia-tower-of-terror, wikipedia-rise-of-the-resistance, wikipedia-peppers-ghost]
confidence: high
---
```mermaid
sequenceDiagram
  participant Q as Queue
  participant P as Pre-show room
  participant L as Load
  Q->>P: group of 30 to 60 enters, doors close
  P-->>P: 2 to 4 minutes: story, rules, mood
  P->>L: doors open, group moves as a unit
  Note over P,L: batch size and length must match ride dispatch
```

A pre-show is a short performance between the queue and the ride. Doors close behind a group, something happens, and doors open on the other side. It does three things at once: delivers the story's setup in one hit, states the rules (keep hands inside, hold on), and turns a crowd of strangers into a group that will ride together.

The Haunted Mansion's stretching room (Disneyland, 1969) is the archetype. The portraits lengthen, the ceiling vanishes, and a voice points out there are no windows and no doors. At Disneyland the room is actually an elevator taking you under the railroad berm to the show building. The Tower of Terror's library has a thunderclap, a dead television and Rod Serling inviting you into a maintenance elevator. Rise of the Resistance has two in sequence: Rey's briefing and the transport shuttle that gets captured.

Pre-shows are an operations problem as much as a story one. Their batch size and length must divide neatly into the ride's [throughput](../operations-business/throughput-math.md), they run on [show control](../show-technology/show-control-systems.md), and they often use illusions such as [Pepper's ghost](../show-technology/peppers-ghost.md). They also shape [group dynamics](../human-factors/group-dynamics.md): shared fright in a closed room is bonding.

## Explore further
- `wikipedia-the-haunted-mansion` — The Haunted Mansion
- `wikipedia-tower-of-terror` — The Twilight Zone Tower of Terror
- `wikipedia-rise-of-the-resistance` — Star Wars: Rise of the Resistance
