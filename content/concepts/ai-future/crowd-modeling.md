---
id: crowd-modeling
title: Crowd Modeling & Agent-Based Simulation
land: ai-future
level: intermediate
abstraction: concept
parent: ai-in-operations
children: []
relations:
  - { type: applies-to, target: guest-flow-patterns }
  - { type: applies-to, target: pinch-points }
  - { type: applies-to, target: level-of-service }
  - { type: applies-to, target: crowd-behavior }
  - { type: applies-to, target: emergency-access }
  - { type: enables, target: capacity-planning }
summary: Simulating thousands of individual walkers to find pinch points before a land is built or reopened.
tags: [crowd-simulation, agent-based, pedestrian-dynamics, masterplanning, safety]
visuals: [formula]
interactive_idea: "Drop a parade route or a closed walkway onto a mini park map and watch agent density heat up in real time."
sources: [helbing-social-force-1995, oasys-massmotion-event-centre, bentley-legion, blooloop-massmotion-covid-2020]
confidence: high
---
> **Formula** $m_i\,\frac{d\mathbf{v}_i}{dt} = m_i\,\frac{v_i^0\,\mathbf{e}_i - \mathbf{v}_i}{\tau_i} + \sum_{j\neq i}\mathbf{f}_{ij} + \sum_{W}\mathbf{f}_{iW}$
> where
> - $m_i$ and $\mathbf{v}_i$ are the mass and current velocity of walker $i$
> - $v_i^0\,\mathbf{e}_i$ is the speed and direction the walker wants, and $\tau_i$ how quickly they adjust toward it
> - $\mathbf{f}_{ij}$ is the social repulsion from each other walker $j$ (people keep distance)
> - $\mathbf{f}_{iW}$ is the repulsion from walls and obstacles $W$

Agent-based crowd simulation treats every guest as a small program with a goal, a preferred speed and a dislike of bumping into others. Run thousands at once and group behavior emerges without being scripted: lanes form in corridors, flows oscillate at doorways, and exits clog when everyone pushes. The classic model is Helbing and Molnár's 1995 social force model, which writes each walker's motion as physics: a pull toward where they want to go plus pushes away from people and walls.

Commercial tools such as Oasys MassMotion (from Arup) and Bentley LEGION wrap this kind of model in a 3-D editor that imports BIM geometry and outputs density heat maps, journey times and [level of service](../masterplanning/level-of-service.md) grades. A Canadian arena used MassMotion to size entry vestibules around the throughput of its security screening and to compare concourse layouts for intermission. In 2020 the same tool was pitched to attractions for reopening plans, measuring how long visitors spend within two metres of each other.

For park designers this is the numeric side of [guest flow patterns](../masterplanning/guest-flow-patterns.md), [pinch points](../masterplanning/pinch-points.md) and [parade crowds](../masterplanning/parade-and-show-crowds.md). The limit is behavior the model does not know, such as [herding](../human-factors/herding-and-social-proof.md) toward a character.

## Explore further
- `helbing-social-force-1995` — Social force model for pedestrian dynamics (Helbing and Molnar, Physical Review E, 1995)
- `oasys-massmotion-event-centre` — Oasys MassMotion case study: sizing vestibules and concourses for a 20,000-seat event centre in Canada
- `bentley-legion` — LEGION pedestrian simulation software from Bentley Systems (product page)
- `blooloop-massmotion-covid-2020` — COVID-19 and social distancing: crowd analysis for attractions with MassMotion
