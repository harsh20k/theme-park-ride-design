---
id: perception
title: Perception
land: human-factors
level: intermediate
abstraction: super-concept
parent: null
children: [motion-sickness]
relations:
  - { type: applies-to, target: illusions }
  - { type: applies-to, target: light-and-color }
summary: "The brain's working model of what is happening, built by blending the eyes, inner ear, body and skin into one confident feeling."
tags: [sample-content, psychology, senses, perception]
visuals:
  - { type: mermaid, title: "From senses to experience", alt: "Flowchart showing the eyes, inner ear, muscles and skin feeding into the brain, which combines the signals into what the guest feels, or into a conflict when the signals disagree" }
sources:
  - { title: "Sensation and Perception", author: "E. Bruce Goldstein", year: 2016 }
confidence: high
---

```mermaid
%% title: From senses to experience | alt: Flowchart showing the eyes, inner ear, muscles and skin feeding into the brain, which combines the signals into what the guest feels, or into a conflict when the signals disagree
flowchart LR
  E[Eyes] --> I[Brain combines the signals]
  V[Inner ear] --> I
  B[Muscles and joints] --> I
  S[Skin and sound] --> I
  I --> X[What the guest feels]
  I --> C[Conflict when signals disagree]
```

Perception is the brain's working model of what is happening, built from several senses at once. The eyes report motion and scale, the inner ear reports acceleration and tilt, the muscles report posture, and the skin and ears add wind and sound. The brain blends these into one confident feeling of where I am and what is going on. Ride designers work on this model, not on physics alone. A gentle motion base paired with a large screen can feel like a steep dive, because the eyes outvote the body. [Illusions](../show-technology/illusions.md) such as Pepper's ghost exploit the same willingness to trust a tidy picture, and careful [light and colour](../sensory-environment/light-and-color.md) can make a room feel warm, cold, safe or sinister. But when the senses disagree too strongly, the blend fails, and the result is [motion sickness](../human-factors/motion-sickness.md), explained in detail by [sensory conflict theory](../human-factors/sensory-conflict-theory.md).

## Explore further
- [Motion sickness](../human-factors/motion-sickness.md) — what happens when the senses argue.
- [Pepper's ghost](../show-technology/peppers-ghost.md) — a classic trick played on the eyes.
