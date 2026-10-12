---
id: pyrotechnics
title: Pyrotechnics
land: show-technology
level: intermediate
abstraction: concept
parent: special-effects
children: []
relations:
  - { type: applies-to, target: risk-assessment }
  - { type: applies-to, target: weather-policies }
  - { type: applies-to, target: parade-and-show-crowds }
  - { type: applies-to, target: entertainment-scheduling }
  - { type: contrasts-with, target: nighttime-spectaculars }
summary: Sparks, flashes and flame fired near an audience, under licence and strict standards.
tags: [pyrotechnics, fireworks, safety, nfpa, gerb]
visuals: [mermaid]
interactive_idea: "Arm, check and fire a virtual cue list; skipping any safety step greys out the fire button."
sources: [wikipedia-pyrotechnics, nfpa-1126, pyro-spectaculars]
confidence: high
---
```mermaid
flowchart LR
  A["Cue list on firing computer"] --> B{"Armed and area clear?"}
  B -->|"no"| X["Hold"]
  B -->|"yes"| C["Firing signal"]
  C --> D["Electric match ignites"]
  D --> E["Gerb: plume of sparks"]
  D --> F["Flash pot: bright flash and bang"]
  D --> G["Aerial shell: fireworks finale"]
```

Pyrotechnics used inside a show, close to people, are called proximate pyrotechnics. The devices are small and specific. A gerb is a fountain that throws a controlled plume of sparks for a set burn time, and hung upside down in a row it becomes a waterfall. A flash pot gives a bright flash with a bang. Each is fired by an electric match on a remote signal from a firing system, either a manual console or a computer following a cue list in time with the show.

The rules are the point. In the United States NFPA 1126 is the standard for pyrotechnics before a proximate audience; most jurisdictions require special training and licensing beyond what outdoor fireworks demand. Commercial firing systems add safing circuits and keyed connectors so nothing fires while someone is near. Weather, especially wind, can cancel a cue or a whole show, which puts pyro inside the park's [weather policies](../safety-standards/weather-policies.md) and [entertainment schedule](../operations-business/entertainment-scheduling.md).

Display companies such as Pyro Spectaculars now run drone fleets as well, a sign of where [nighttime spectaculars](../show-technology/nighttime-spectaculars.md) are heading. On the ground, pyro still shapes [crowd planning](../masterplanning/parade-and-show-crowds.md): fallout zones, viewing areas and exits are set before the first shell is loaded.

## Explore further
- `wikipedia-pyrotechnics` — Pyrotechnics
- `nfpa-1126` — NFPA 1126: Pyrotechnics Before a Proximate Audience
- `pyro-spectaculars` — Pyro Spectaculars
