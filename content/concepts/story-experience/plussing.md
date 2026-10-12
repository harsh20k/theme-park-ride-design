---
id: plussing
title: Plussing
land: story-experience
level: beginner
abstraction: sub-concept
parent: environmental-storytelling
children: []
relations:
  - { type: is-a, target: post-opening-plussing }
  - { type: enables, target: surprise-and-delight }
  - { type: applies-to, target: design-reviews-and-gates }
  - { type: limits, target: scope-and-value-engineering }
  - { type: example-of, target: haunted-mansion }
summary: Walt Disney's word for always adding one more improvement, even after opening.
tags: [imagineering, iteration, quality, walt-disney]
visuals: [mermaid]
interactive_idea: "A before/after slider on a themed facade showing successive 'plus' passes, with the cost of each pass ticking up."
sources: [wikipedia-walt-disney-imagineering, prosperi-imagineering-pyramid, imagineering-way-2003, wikipedia-jungle-cruise]
confidence: high
---
```mermaid
stateDiagram-v2
  [*] --> Good
  Good --> Better: add a detail
  Better --> Plussed: add another
  Plussed --> Good: guests notice, bar rises
  Plussed --> [*]: budget or schedule stops it
```

"Plussing" is Walt Disney's own verb. To plus something was to make it better than it already was, usually by adding a detail nobody had asked for. Disney said Disneyland would never be finished as long as there was imagination left in the world, and the term became an Imagineering principle: constant improvement, before and after opening.

The classic story is Jungle Cruise. The original 1955 narration played like a nature documentary. When Walt reportedly overheard a guest say they had already seen it, he asked animator Marc Davis how to improve it. Davis said it needed humour, drew the gags, and the ride became the pun-filled boat trip it is today. The attraction did not get rebuilt; it got plussed.

Plussing lives in tension with [scope and value engineering](../design-process/scope-and-value-engineering.md), which pushes the other way. It is also a formal phase in modern practice, [post-opening plussing](../design-process/post-opening-plussing.md), and the main source of the small [surprises](../human-factors/surprise-and-delight.md) repeat guests collect. Treat it as a budget line, not a hope.

## Explore further
- `wikipedia-walt-disney-imagineering` — Walt Disney Imagineering
- `imagineering-way-2003` — The Imagineering Way
- `wikipedia-jungle-cruise` — Jungle Cruise
