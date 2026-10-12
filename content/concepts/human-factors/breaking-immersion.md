---
id: breaking-immersion
title: Breaking Immersion
land: human-factors
level: beginner
abstraction: concept
parent: flow-and-immersion
children: [visual-intrusion, operational-intrusion]
relations:
  - { type: applies-to, target: onstage-backstage }
  - { type: applies-to, target: sightlines }
  - { type: applies-to, target: figure-reliability }
  - { type: applies-to, target: emergency-stop-and-evacuation }
  - { type: applies-to, target: go-away-green }
summary: The moments when a guest is reminded they are in a business, sorted by what caused them.
tags: [immersion, show-quality, operations, theming]
visuals: [mermaid]
interactive_idea: "A dark-ride scene you can 'break' in six ways (work light, radio, broken figure, exit sign, phone glow, backstage door) and rate how badly each hurts."
sources: [slater-place-illusion-plausibility-2009, lynch-image-of-the-city]
confidence: high
---
```mermaid
flowchart TD
  B[Immersion breaks] --> V[Visual intrusion]
  B --> O[Operational intrusion]
  B --> T[Technical failure]
  B --> S[Social intrusion]
  V --> V1[Backstage building, crane, modern roofline]
  O --> O1[Radio call, cast out of character, queue merge argument]
  T --> T1[Frozen animatronic, work lights, projector blur]
  S --> S1[Phone screens, loud guests, line jumpers]
```

Immersion rarely fades; it snaps. Sorting the breaks by cause helps, because each has a different owner. **Visual intrusion** is the masterplanner's and architect's problem: a hotel tower over a medieval wall, a crane in the sightline, an unpainted service door. **Operational intrusion** is the operations team's: a radio squawk, a cast member chatting about their shift, a sudden stop with no story explanation. **Technical failure** belongs to show maintenance: a frozen figure in a lit scene is worse than an empty scene. **Social intrusion** comes from other guests.

Presence research explains why small breaks matter so much. Slater's plausibility illusion depends on the world behaving consistently; a single inconsistency is evidence that none of it is real, and the guest's brain updates fast. Lynch's point about edges applies too: the [berm](../story-experience/the-berm.md) and [sightline](../story-experience/sightlines.md) control exist to stop the real world appearing as an edge inside the fictional one.

The two child cards go deeper: [visual intrusion](../human-factors/visual-intrusion.md) and [operational intrusion](../human-factors/operational-intrusion.md). The cure for most of the rest is the discipline of [onstage and backstage](../masterplanning/onstage-backstage.md) planning and the paint colour known as [go-away green](../sensory-environment/go-away-green.md).

## Explore further
- `slater-place-illusion-plausibility-2009` — Place illusion and plausibility can lead to realistic behaviour in immersive virtual environments
- `lynch-image-of-the-city` — The Image of the City (book)
