---
id: presence
title: Presence
land: human-factors
level: intermediate
abstraction: concept
parent: flow-and-immersion
children: []
relations:
  - { type: applies-to, target: vr-ar-in-parks }
  - { type: applies-to, target: flying-theatre }
  - { type: applies-to, target: multisensory-integration }
  - { type: example-of, target: flight-of-passage }
  - { type: applies-to, target: motion-cueing }
summary: The feeling of being in a place and that what happens there is really happening, even though you know it is not.
tags: [presence, immersion, vr, perception]
visuals: [mermaid]
interactive_idea: "Toggle place cues (field of view, head tracking, wind, scent) and plausibility cues (things react to you) and watch a presence score respond."
sources: [slater-place-illusion-plausibility-2009, slater-sanchez-vives-immersive-vr-2016]
confidence: high
---
```mermaid
flowchart LR
  subgraph Place illusion
    A[Wide field of view]
    B[Motion matches vision]
    C[Wind, scent, temperature]
  end
  subgraph Plausibility illusion
    D[Events respond to you]
    E[Scenes behave consistently]
  end
  A --> P[Presence]
  B --> P
  C --> P
  D --> P
  E --> P
  P --> R[Guest reacts as if real]
```

Presence is what makes a guest duck under a low branch that is only projected, or grip the lap bar on a flying theatre that is barely moving. Mel Slater's 2009 account splits it into two illusions. **Place illusion** is the feeling of being somewhere: it comes from the sensory system being fed a consistent world, especially when your own movement changes what you see. **Plausibility illusion** is the feeling that events are really happening: it comes from the world responding to you and behaving the way such a world should. 
Slater and Sanchez-Vives's 2016 review adds the crucial point: when both illusions hold, people behave as they would in the real situation. That is why guests scream and lean on rides whose physical motion is small.

Rides build place illusion with wide [domes and screens](../ride-systems/flying-theatre.md), [motion cueing](../ride-systems/motion-cueing.md) that matches the picture, and wind, mist and scent aimed at the rider, a [multisensory](../human-factors/multisensory-integration.md) stack that Pandora's [Flight of Passage](../history/flight-of-passage.md) is known for. Plausibility illusion is rarer and harder: it needs the scene to react, which is where [interactive](../story-experience/interactive-narrative.md) and [VR attractions](../ai-future/vr-ar-in-parks.md) have an edge over filmed media.

## Explore further
- `slater-place-illusion-plausibility-2009` — Place illusion and plausibility can lead to realistic behaviour in immersive virtual environments
- `slater-sanchez-vives-immersive-vr-2016` — Enhancing Our Lives with Immersive Virtual Reality
