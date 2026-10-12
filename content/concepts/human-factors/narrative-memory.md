---
id: narrative-memory
title: Narrative Memory
land: human-factors
level: intermediate
abstraction: concept
parent: memory
children: []
relations:
  - { type: applies-to, target: three-act-ride }
  - { type: applies-to, target: thresholds-and-portals }
  - { type: enables, target: narrative-transportation }
  - { type: applies-to, target: story-rooms-and-walkthroughs }
  - { type: applies-to, target: queue-storytelling }
summary: We store experience as a chain of events with boundaries, so rides shaped like stories are remembered better.
tags: [memory, story, event-segmentation, structure]
visuals: [mermaid]
interactive_idea: "Drop 'boundary' markers onto a ride timeline (door, lift, reveal) and see the ride re-chunked into rememberable scenes."
sources: [zacks-2007-event-perception]
confidence: high
---
```mermaid
flowchart LR
    Q[Queue] -->|door| P[Pre-show]
    P -->|load| A[Act 1: setup]
    A -->|lift or launch| B[Act 2: trouble]
    B -->|reveal| C[Act 3: escape]
    C -->|unload| X[Exit]
    classDef b fill:none,stroke-dasharray:4 3
    class Q,P,A,B,C,X b
```

Jeffrey Zacks and colleagues describe perception as continuous segmentation. The brain carves the stream of experience into events whenever its predictions break: a door opens, the lighting changes, a character appears, the vehicle stops. Those boundaries become the joints of memory. Later, we recall the events as a sequence and reconstruct the detail between them, which is why a well-cut experience is both easier to remember and easier to retell.

Rides can be cut like films. A [three-act structure](../story-experience/three-act-ride.md) gives the brain three clean chunks; [thresholds and portals](../story-experience/thresholds-and-portals.md) mark the boundaries physically; a [queue story](../story-experience/queue-storytelling.md) extends the chain backwards so the wait becomes act zero rather than dead time. A ride that is one undifferentiated rush can be thrilling yet oddly hard to describe afterwards, because there are no joints to hang the description on.

The same structure feeds [narrative transportation](../human-factors/narrative-transportation.md), the feeling of being inside the story, and shapes how [walkthrough rooms](../story-experience/story-rooms-and-walkthroughs.md) are sequenced.

## Explore further
- `zacks-2007-event-perception` — Event Perception: A Mind-Brain Perspective
