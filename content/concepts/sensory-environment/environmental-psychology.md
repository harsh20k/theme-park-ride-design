---
id: environmental-psychology
title: Environmental Psychology
land: sensory-environment
level: intermediate
abstraction: super-concept
parent: sensory-environment
children: [prospect-refuge, biophilia, servicescape, atmospherics, crowding-and-enclosure, visual-complexity]
relations:
  - { type: applies-to, target: land-design }
  - { type: applies-to, target: personal-space-and-density }
  - { type: enables, target: presence }
  - { type: applies-to, target: service-culture }
  - { type: applies-to, target: guest-research }
summary: The research on how built and natural settings change what people feel and do, applied to park spaces.
tags: [psychology, environment, behaviour, research, space]
visuals: [mermaid]
interactive_idea: "Pick a plaza and toggle enclosure, planting, scent and crowd density; a panel shows which theory predicts the change in mood."
sources: [bitner-1992-servicescapes, kotler-1973-atmospherics]
confidence: high
---
```mermaid
flowchart LR
  E["Setting: space, light, sound, scent, people, plants"] --> P["Perception and appraisal"]
  P --> R["Responses: mood, stress, attention, comfort"]
  R --> B["Behaviour: approach or avoid, linger, spend, return"]
  B -.->|designers adjust| E
```

Environmental psychology asks a plain question: what does a place do to the people in it? Theme parks are a pure test case: every surface, sound and sightline was chosen, and the business depends on the answer. This group collects the theories park designers borrow most.

[Prospect-refuge](../sensory-environment/prospect-refuge.md) explains why guests gravitate to a sheltered seat with a view. [Biophilia](../sensory-environment/biophilia.md) explains why planting and water calm a crowd. [Servicescape](../sensory-environment/servicescape.md) and [atmospherics](../sensory-environment/atmospherics.md) come from marketing: Philip Kotler argued in 1973 that the designed atmosphere of a space is a selling tool, and Mary Jo Bitner's 1992 framework traced how ambient conditions, layout and signs shape both customers and staff. [Crowding and enclosure](../sensory-environment/crowding-and-enclosure.md) separates the number of people from the feeling of too many. [Visual complexity](../sensory-environment/visual-complexity.md) asks how much detail a scene can carry before it turns to noise.

The common thread is the loop in the diagram: a setting is perceived, it produces a response, the response becomes behaviour, and designers tune the setting again. It feeds [land design](../masterplanning/land-design.md), governs how [personal space and density](../human-factors/personal-space-and-density.md) feel in queues, underpins [presence](../human-factors/presence.md), shapes the working environment behind [service culture](../operations-business/service-culture.md), and gives [guest research](../operations-business/guest-research.md) its hypotheses.

## Explore further
- `bitner-1992-servicescapes` — Servicescapes: The Impact of Physical Surroundings on Customers and Employees
- `kotler-1973-atmospherics` — Atmospherics as a Marketing Tool
