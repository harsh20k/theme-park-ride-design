---
id: transport-and-other
title: Transport & Other Systems
land: ride-systems
level: beginner
abstraction: super-concept
parent: null
children: [monorail-and-people-movers, park-trains, gondolas-and-skyrides, 4d-theatres, ride-classification]
relations:
  - { type: applies-to, target: guest-flow-patterns }
  - { type: applies-to, target: parking-and-transit }
  - { type: enables, target: resort-integration }
  - { type: applies-to, target: land-transitions }
  - { type: applies-to, target: capacity-planning }
summary: Rides that move people around a park or sit them in front of a show, plus how all rides get rated.
tags: [transport, overview, people-movers, theatres]
visuals: [mermaid]
interactive_idea: "Overlay a park map with its transport loops and show how a guest's walking distance changes when the train, monorail or gondola is on or off."
sources: [wikipedia-monorail, wikipedia-disneyland-railroad, wikipedia-skyway-disney]
confidence: high
---
```mermaid
flowchart LR
  E[Entrance and parking] -->|monorail or tram| G[Park gate]
  G -->|railroad loop| L1[Land A]
  L1 -->|gondola| L2[Land B]
  L2 -->|walk| T[4D theatre as a rest stop]
  T --> L1
  classDef hub fill:#8884,stroke:#888
  class G hub
```

Not every ride exists to thrill. A large park is a small city, and some of its vehicles are there to move people from the car park to the gate, from one land to the next, or simply to give tired feet a loop around the site ([guest flow patterns](../masterplanning/guest-flow-patterns.md), [parking and transit](../masterplanning/parking-and-transit.md)). Walt Disney's railroad and monorail were transport first and attraction second, and the habit of theming transit so well that guests queue for it is now a Disney and Universal signature ([resort integration](../masterplanning/resort-integration.md)).

This group collects those systems: **monorails and people movers**, **park trains**, and **gondolas and skyrides**. Each doubles as a scenic ride and as a planning tool, since a transport loop sets where guests enter a land and how a [land transition](../masterplanning/land-transitions.md) is experienced from above or from a window.

Two other cards live here because they fit nowhere else. **4D theatres and walkthroughs** are seated or walking shows with physical effects, the cheapest high-capacity attraction a park can build. **Ride classification** explains how parks, manufacturers and databases sort everything in this land into types and thrill levels, which drives [capacity planning](../masterplanning/capacity-planning.md), signage and guest expectations.

## Explore further
- `wikipedia-monorail` — Monorail (Wikipedia)
- `wikipedia-disneyland-railroad` — Disneyland Railroad (Wikipedia)
- `wikipedia-skyway-disney` — Skyway (Disney) (Wikipedia)
