---
id: thrill-and-arousal
title: Thrill & Arousal
land: human-factors
level: beginner
abstraction: concept
parent: emotion-and-thrill
children: []
relations:
  - { type: applies-to, target: g-force-basics }
  - { type: applies-to, target: launched-coasters }
  - { type: applies-to, target: peripheral-vision-and-speed }
  - { type: enables, target: excitation-transfer }
  - { type: applies-to, target: jerk-and-onset-rate }
summary: Thrill is the body's alarm system firing inside a situation the mind has decided is safe.
tags: [psychology, arousal, physiology, thrill]
visuals: [mermaid]
interactive_idea: "Stack ingredient sliders (speed cues, g-force, unpredictability, height) and watch a thrill gauge respond non-linearly."
sources: [apter-dangerous-edge-1992, zuckerman-1979-sensation-seeking]
confidence: high
---
```mermaid
flowchart LR
    A[Height and exposure] --> T((Thrill))
    B[Speed cues near the eye] --> T
    C[G-force and airtime] --> T
    D[Unpredictability] --> T
    E[Noise and wind] --> T
    T --> F[Fast heart, adrenaline]
    T --> G[Scream, laugh, grip]
    P[Protective frame] -. labels it as fun .-> T
```

Thrill is a layered sensation. The sympathetic nervous system, the fight-or-flight circuit, reads a drop or a launch as a threat and floods the body with adrenaline. Heart rate jumps, pupils widen, palms sweat. On top of that physiology the mind adds a label, and inside a [protective frame](../human-factors/protective-frame.md) the label is "wonderful".

Designers feed the alarm system through several channels. [G-forces](../ride-engineering/g-force-basics.md) and airtime press and lift the body directly. Speed is felt mostly through the eyes, which is why [near objects in the periphery](../human-factors/peripheral-vision-and-speed.md) make 60 km/h feel like 100. Height and exposure, the view down from the crest, work on the fear of falling. Unpredictability adds the rest: a [launch](../ride-systems/launched-coasters.md) that fires without a countdown, or a dark-ride turn into something unexpected.

Not everyone wants the same dose. [Sensation seeking](../human-factors/sensation-seeking.md) varies widely, so a park needs rides along the whole scale, and the body has limits that [onset rate](../ride-engineering/jerk-and-onset-rate.md) and duration rules protect.

## Explore further
- `apter-dangerous-edge-1992` — The Dangerous Edge: The Psychology of Excitement
- `zuckerman-1979-sensation-seeking` — Sensation Seeking: Beyond the Optimal Level of Arousal
