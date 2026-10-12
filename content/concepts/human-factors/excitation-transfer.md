---
id: excitation-transfer
title: Excitation Transfer
land: human-factors
level: intermediate
abstraction: sub-concept
parent: arousal-and-relief
children: []
relations:
  - { type: enables, target: photo-moments }
  - { type: applies-to, target: finale-design }
  - { type: applies-to, target: load-unload-design }
  - { type: applies-to, target: food-and-retail-placement }
  - { type: enables, target: emotional-contagion }
summary: Leftover arousal from one event gets mislabelled as feeling about the next one.
tags: [psychology, arousal, memory, retail]
visuals: [mermaid]
interactive_idea: "Chain two events; the second's felt intensity is computed from its own value plus decaying residue from the first."
sources: [zillmann-1971-excitation-transfer]
confidence: high
---
```mermaid
sequenceDiagram
    participant R as Ride
    participant B as Body
    participant M as Mind
    R->>B: big drop
    B->>M: arousal spikes
    Note over B: arousal decays slowly
    R->>B: silly on-ride photo
    B->>M: residue plus new spark
    M->>M: "that photo was hilarious"
```

Dolf Zillmann showed that people who had just exercised, and whose bodies were still buzzing, reacted more strongly to a later provocation than people who had rested. They did not feel "still worked up from the bike"; they felt *more annoyed*. The body's arousal outlasts the mind's label for it, so the next thing that happens inherits the charge. He called this excitation transfer.

Rides leak arousal everywhere, and good designers catch it. The [on-ride photo](../human-factors/photo-moments.md) screen at unload is funnier than it would be cold. A [finale](../story-experience/finale-design.md) joke or a cast member's quip lands harder. A gift shop placed right at the exit, the classic [exit-through-retail](../masterplanning/food-and-retail-placement.md) move, meets guests at their most excitable. Even the [unload](../operations-business/load-unload-design.md) sequence matters: a calm, friendly station lets residual arousal settle into warmth rather than irritation.

The same mechanism cuts the other way. Residual stress from a hot, confusing queue can be transferred onto the ride and read as "the ride was annoying".

## Explore further
- `zillmann-1971-excitation-transfer` — Excitation Transfer in Communication-Mediated Aggressive Behavior
