---
id: wayfinding
title: Wayfinding
land: human-factors
level: beginner
abstraction: concept
parent: behavior-and-decision
children: [landmarks-and-nodes, signage-hierarchy, desire-lines]
relations:
  - { type: applies-to, target: hub-and-spoke }
  - { type: enables, target: weenies }
  - { type: applies-to, target: entry-sequence }
  - { type: limits, target: decision-fatigue }
  - { type: applies-to, target: signage-and-graphics }
summary: Helping guests know where they are, where they can go, and how to get there without reading a map.
tags: [wayfinding, navigation, legibility, spatial-design]
visuals: [mermaid]
interactive_idea: "Walk a first-person path through a simple park; a 'mental map' panel fills in only the landmarks you have actually seen."
sources: [lynch-image-of-the-city, wikipedia-desire-path]
confidence: high
---
```mermaid
flowchart LR
  A[Where am I] --> B[Where can I go]
  B --> C[How do I get there]
  C --> D[Did I arrive]
  D -. feedback .-> A
  L[Landmarks] --> A
  P[Paths and edges] --> C
  S[Signs] --> B
  N[Nodes] --> D
```

Wayfinding is the quiet skill of knowing where you are and how to reach where you want to be. Kevin Lynch called the quality that makes this easy **imageability**: a place is legible when its paths, edges, districts, nodes and landmarks are distinct enough to build a mental map from.

Theme parks are wayfinding machines. Disneyland's castle is a [weenie](../story-experience/weenies.md), a tall visual magnet that pulls guests down Main Street and gives them a fixed reference from anywhere in the park. A [hub-and-spoke](../masterplanning/hub-and-spoke.md) layout turns the hub into a node where every decision resets. Distinct themed lands act as districts, so a guest in Frontierland never confuses it with Tomorrowland.

Good wayfinding reduces the number of choices a tired guest must make, which helps with [decision fatigue](../human-factors/decision-fatigue.md). When it fails, guests stop, cluster at junctions, and cut [desire lines](../human-factors/desire-lines.md) through planting. Signs are the last resort, not the first: a well-shaped space should explain itself before [signage](../design-process/signage-and-graphics.md) has to.

## Explore further
- `lynch-image-of-the-city` — The Image of the City (book)
- `wikipedia-desire-path` — Desire path
