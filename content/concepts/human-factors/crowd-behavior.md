---
id: crowd-behavior
title: Crowd Behavior
land: human-factors
level: intermediate
abstraction: concept
parent: behavior-and-decision
children: [herding-and-social-proof, turn-bias, personal-space-and-density]
relations:
  - { type: enables, target: crowd-modeling }
  - { type: applies-to, target: crowd-management }
  - { type: applies-to, target: parade-and-show-crowds }
  - { type: applies-to, target: emergency-access }
  - { type: applies-to, target: level-of-service }
summary: "Crowds behave like a fluid with feelings: density, speed and panic follow predictable rules."
tags: [crowds, pedestrian-dynamics, safety, simulation]
visuals: [chart]
interactive_idea: "A corridor simulator: raise the arrival rate and watch flow rise, then collapse as density passes the critical point."
sources: [helbing-social-force-1995, helbing-escape-panic-2000, fruin-pedestrian-planning-1971, gkstill-crowd-density]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: pedestrian flow peaks then collapses as density rises",
  "width": 300, "height": 150,
  "data": {"values": [
    {"density": 0.5, "flow": 0.6}, {"density": 1.0, "flow": 1.1}, {"density": 1.5, "flow": 1.3},
    {"density": 2.0, "flow": 1.3}, {"density": 2.5, "flow": 1.1}, {"density": 3.0, "flow": 0.8},
    {"density": 3.5, "flow": 0.5}, {"density": 4.0, "flow": 0.3}, {"density": 5.0, "flow": 0.1}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "density", "type": "quantitative", "title": "Density, people per square metre"},
    "y": {"field": "flow", "type": "quantitative", "title": "Flow, people per metre per second"}
  }
}
```

Crowds are not random. At low density people walk at their own pace and route around each other. As density climbs, speed falls, and past roughly two to three people per square metre the crowd stops behaving like individuals and starts behaving like a slow fluid. Push further and flow collapses: everyone is packed, nobody moves. Crowd scientists call this the **fundamental diagram** of pedestrian traffic, and John Fruin turned it into the [level of service](../masterplanning/level-of-service.md) grades planners still use.

Dirk Helbing's **social force model** explains the mechanism. Each walker is pulled toward a goal and pushed away from walls and other bodies, and that simple rule reproduces lanes forming in corridors, arching at doorways, and the ugly "faster is slower" effect where a rush to an exit jams it. Keith Still's density photos show what each number looks like, with about five per square metre as the ceiling for safe standing crowds.

Parks meet all of this at [parade dispersal](../masterplanning/parade-and-show-crowds.md), at fireworks exits and in queue merges. Modern [crowd modeling](../ai-future/crowd-modeling.md) runs these same equations on a park plan before concrete is poured.

## Explore further
- `helbing-social-force-1995` — Social force model for pedestrian dynamics
- `helbing-escape-panic-2000` — Simulating dynamical features of escape panic
- `gkstill-crowd-density` — Crowd density: what 1 to 5 people per square metre look like
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (book)
