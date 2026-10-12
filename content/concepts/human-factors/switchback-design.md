---
id: switchback-design
title: Switchback Design
land: human-factors
level: intermediate
abstraction: concept
parent: waiting
children: []
relations:
  - { type: applies-to, target: level-of-service }
  - { type: applies-to, target: shade-and-microclimate }
  - { type: example-of, target: space-mountain }
  - { type: applies-to, target: capacity-planning }
  - { type: applies-to, target: accessibility }
summary: Zig-zag lines pack a long wait into a small footprint, and how much of it guests can see is a design choice.
tags: [waiting, queues, layout, capacity]
visuals: [svg]
interactive_idea: "Draw a queue footprint; the tool folds a serpentine line into it and reports capacity, visible length and shade coverage."
sources: [wikipedia-queue-area, larson-1987-queue-social-justice, mentalfloss-disney-queue-psychology]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="20" y="20" width="200" height="140" stroke-dasharray="4 4" />
  <path d="M30 150 L210 150 L210 125 L30 125 L30 100 L210 100 L210 75 L30 75 L30 50 L210 50 L210 30 L240 30" />
  <path d="M30 100 L30 75" stroke-width="4" stroke-opacity="0.4" />
  <rect x="240" y="20" width="30" height="20" />
  <text x="250" y="60" font-size="11" fill="currentColor" stroke="none">station</text>
  <text x="40" y="172" font-size="11" fill="currentColor" stroke="none">chain-off gate opens a bypass when short</text>
  <text x="230" y="110" font-size="10" fill="currentColor" stroke="none">walls hide</text>
  <text x="230" y="124" font-size="10" fill="currentColor" stroke="none">the turns</text>
</svg>

A switchback, or serpentine, queue folds a line back on itself so a wait of an hour fits in a room. It is the standard answer to [capacity planning](../masterplanning/capacity-planning.md): a ride that draws a crowd needs somewhere to store it, and the Wikipedia overview of queue areas notes the zig-zag's other virtue, sections can be chained off when the line is short so guests do not trudge through empty rails.

Two psychological decisions ride on the layout. The first is visibility. An open hall of switchbacks shows guests exactly how many people are ahead, which drives [balking](../human-factors/balking-and-reneging.md); Space Mountain's queue walls off the turns so riders cannot judge the remaining path, and the Mental Floss overview credits that with keeping people in line. The second is fairness: a single serpentine line is first come, first served by construction, which Larson showed guests prefer over parallel lanes.

The physical standard matters as much. Railing spacing and turn radius set the [level of service](../masterplanning/level-of-service.md) and whether a wheelchair or stroller can negotiate the turns, an [accessibility](../human-factors/accessibility.md) requirement, and roofs, fans or misters supply the [shade and microclimate](../sensory-environment/shade-and-microclimate.md) that stop an outdoor queue becoming a heat hazard.

## Explore further
- `wikipedia-queue-area` — Queue area
- `larson-1987-queue-social-justice` — Perspectives on Queues: Social Justice and the Psychology of Queueing
- `mentalfloss-disney-queue-psychology` — The Psychological Tricks Disney Parks Use to Make Long Wait Times More Bearable
