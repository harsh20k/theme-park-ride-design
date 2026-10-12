---
id: cross-modal-effects
title: Cross-Modal Effects
land: human-factors
level: advanced
abstraction: sub-concept
parent: multisensory-integration
children: []
relations:
  - { type: applies-to, target: onboard-and-spatial-audio }
  - { type: applies-to, target: figure-programming }
  - { type: applies-to, target: color-psychology }
  - { type: applies-to, target: sound-design-pipeline }
  - { type: applies-to, target: lighting-mood }
summary: One sense quietly rewrites another, so sound can relocate, enlarge or sweeten what the eyes and body report.
tags: [perception, multisensory, audio, crossmodal]
visuals: [mermaid]
interactive_idea: "Play the same drop animation with a low rumble, a high whistle or silence; users rate how big the drop felt."
sources: [spence-2011-crossmodal-correspondences]
confidence: high
---
```mermaid
flowchart LR
    subgraph Sound
      S1[Low pitch]
      S2[High pitch]
      S3[Voice from a speaker]
    end
    S1 --> V1[Feels bigger, lower, darker]
    S2 --> V2[Feels smaller, higher, brighter]
    S3 --> V3[Heard from the moving mouth]
    V3 -. ventriloquism effect .-> F[Animatronic seems to speak]
```

Charles Spence's tutorial review catalogues *crossmodal correspondences*: reliable, mostly unconscious pairings between features of different senses. High pitch goes with small, bright, sharp and high-up; low pitch with large, dark, round and low-down. Sweet tastes pair with round shapes and pink, bitter with angular shapes and black. These links hold across cultures and appear early in childhood.

Alongside correspondences sit *crossmodal illusions*, where one sense captures another. In the ventriloquism effect, a sound is heard at the place where a plausible moving source is seen; this is why an animatronic's voice, played from a hidden speaker, seems to come from its lips as long as [figure programming](../show-technology/figure-programming.md) keeps the jaw in sync. In the reverse direction, a well-timed low-frequency rumble makes a modest drop feel bigger, and a rising whine makes a launch feel faster.

For designers the catalogue is a toolkit. [Spatial audio](../show-technology/onboard-and-spatial-audio.md) places sources where the eye expects them; the [sound design pipeline](../show-technology/sound-design-pipeline.md) tunes pitch to scale; [colour](../sensory-environment/color-psychology.md) and [lighting](../sensory-environment/lighting-mood.md) can make a room feel warmer, heavier or sweeter before anything happens in it.

## Explore further
- `spence-2011-crossmodal-correspondences` — Crossmodal Correspondences: A Tutorial Review
