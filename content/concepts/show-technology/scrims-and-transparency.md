---
id: scrims-and-transparency
title: Scrims & Transparency
land: show-technology
level: intermediate
abstraction: concept
parent: illusions
children: []
relations:
  - { type: applies-to, target: reveal-and-concealment }
  - { type: applies-to, target: theatre-staging }
  - { type: enables, target: thresholds-and-portals }
  - { type: applies-to, target: dark-adaptation }
  - { type: contrasts-with, target: peppers-ghost }
summary: A woven cloth is a wall when lit from the front and a window when the scene behind it lights up.
tags: [scrim, transparency, lighting, reveal, stagecraft]
visuals: [mermaid]
interactive_idea: "Two lighting faders, front and back; drag them to make a scrim wall vanish and reveal the scene behind."
sources: [wikipedia-scrim, wikipedia-stage-lighting, wikipedia-dark-ride]
confidence: high
---
```mermaid
stateDiagram-v2
  [*] --> Opaque
  Opaque: Front lit, scene behind dark
  Ghostly: Both sides lit
  Transparent: Scene behind lit, front dark
  Opaque --> Ghostly: raise back light
  Ghostly --> Transparent: kill front light
  Transparent --> Opaque: swap lighting
```

A scrim is a loosely woven fabric, often the "sharkstooth" weave named for its triangular holes. Its trick is entirely about light. Lit from the front with the space behind it dark, the threads catch the light and the cloth reads as a solid painted wall. Light the scene behind it instead and the threads disappear, leaving a soft window into the next space. Light both sides and you get a misty, dreamlike bleed-through.

Dark rides use scrims to make walls dissolve on cue: a bedroom wall becomes a forest, a portrait becomes a corridor. The change costs nothing mechanical, only a lighting cue on the show controller, which is why it is loved by [theatre staging](../story-experience/theatre-staging.md) and ride designers alike. It also depends on the guest's eyes being [dark-adapted](../human-factors/dark-adaptation.md); stray light on the front of the scrim ruins the transparency, the same enemy that defeated the original Hatbox Ghost.

Layered scrims can produce moiré patterns, so designers keep them apart or offset the weaves. Used well, a scrim is the cheapest [portal](../story-experience/thresholds-and-portals.md) in the toolkit and a core technique of [reveal and concealment](../story-experience/reveal-and-concealment.md).

## Explore further
- `wikipedia-scrim` — Scrim (material)
- `wikipedia-stage-lighting` — Stage lighting
