---
id: night-vs-day
title: Night vs Day Design
land: sensory-environment
level: beginner
abstraction: concept
parent: light-and-color
children: []
relations:
  - { type: applies-to, target: nighttime-spectaculars }
  - { type: applies-to, target: dark-adaptation }
  - { type: enables, target: length-of-stay }
  - { type: applies-to, target: theatrical-lighting }
  - { type: applies-to, target: blacklight-and-uv-paint }
summary: "A land is designed twice: once for sunlight, once for the lighting rig that takes over after dark."
tags: [lighting, night, day, transformation, atmosphere]
visuals: [chart]
interactive_idea: "Scrub a clock from noon to midnight over a land render; sun, sky and fixture layers cross-fade and the visible palette changes."
sources: [wikipedia-pandora-world-of-avatar, d23-pandora-details, wikipedia-daniel-flannery, wikipedia-islands-of-adventure]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: who lights the land across a day",
  "width": 300, "height": 140,
  "data": {"values": [
    {"hour": 10, "source": "Sun and sky", "share": 100}, {"hour": 14, "source": "Sun and sky", "share": 100}, {"hour": 18, "source": "Sun and sky", "share": 60}, {"hour": 20, "source": "Sun and sky", "share": 10}, {"hour": 22, "source": "Sun and sky", "share": 0},
    {"hour": 10, "source": "Fixtures and effects", "share": 0}, {"hour": 14, "source": "Fixtures and effects", "share": 0}, {"hour": 18, "source": "Fixtures and effects", "share": 40}, {"hour": 20, "source": "Fixtures and effects", "share": 90}, {"hour": 22, "source": "Fixtures and effects", "share": 100}
  ]},
  "mark": {"type": "area", "interpolate": "monotone"},
  "encoding": {
    "x": {"field": "hour", "type": "quantitative", "title": "Hour of day"},
    "y": {"field": "share", "type": "quantitative", "title": "Share of light, %"},
    "color": {"field": "source", "type": "nominal", "title": null}
  }
}
```

By day the sun lights everything equally and the designer can only choose colour and form. By night the designer chooses the light itself, and that changes what the land is. Islands of Adventure, opened in May 1999, treated site lighting as a discipline of its own, crediting Daniel Flannery as principal architectural site lighting designer for the whole park. Pandora goes further: twenty invented plant species are wired to LED floods, fibre optics and blacklight, each with a concealed control box, so a landscape that reads as exotic greenery at noon becomes a glowing forest at nine.

Designing for two states means two checklists. The day look depends on paint, planting and [sightlines](../story-experience/sightlines.md); the night look depends on fixture placement, cue timing and [blacklight and UV paint](../show-technology/blacklight-and-uv-paint.md) that is invisible until dusk. Transitions need care, because guests' eyes take minutes for [dark adaptation](../human-factors/dark-adaptation.md) and a land that drops to full night in one cue feels like a power cut. All of it runs through [theatrical lighting](../show-technology/theatrical-lighting.md) control and builds toward [nighttime spectaculars](../show-technology/nighttime-spectaculars.md). The business reason is plain: a park worth staying in after dark raises [length of stay](../operations-business/length-of-stay.md) and evening spending.

## Explore further
- `wikipedia-pandora-world-of-avatar` — Pandora – The World of Avatar
- `d23-pandora-details` — Don't Miss These Amazing Disney Details in Pandora
- `wikipedia-daniel-flannery` — Daniel Flannery
- `wikipedia-islands-of-adventure` — Universal Islands of Adventure
