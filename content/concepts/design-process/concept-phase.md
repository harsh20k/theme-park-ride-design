---
id: concept-phase
title: Concept Phase
land: design-process
level: beginner
abstraction: super-concept
parent: null
children: [blue-sky, concept-art, design-intent, mood-boards, feasibility-and-early-costing]
relations:
  - { type: enables, target: story-bible }
  - { type: applies-to, target: attraction-mix }
  - { type: limits, target: capital-budgets }
  - { type: enables, target: generative-concepting }
  - { type: example-of, target: walt-and-the-imagineers }
summary: The first phase, where a story idea is found, pictured, written down and tested against money.
tags: [process, concept, creative, planning]
visuals: [mermaid]
interactive_idea: "A slider moves one idea from blue sky to costed concept, showing which documents and people appear at each step."
sources: [khan-imagineering-in-a-box, imagineers-behind-the-dreams, wikipedia-walt-disney-imagineering]
confidence: high
---
```mermaid
flowchart LR
  A["Blue sky: no limits"] --> B["Mood boards and references"]
  B --> C["Concept art"]
  C --> D["Design intent document"]
  D --> E["Feasibility and early costing"]
  E -->|approved| F["Design development"]
  E -->|too big| A
```

The concept phase is where an attraction is only an idea. Nothing is drawn to scale yet. The team asks what the story is, what guests will feel, and whether anyone can afford it. Imagineering calls the first step [blue sky](../design-process/blue-sky.md): ideas are allowed to run without a budget. Then the idea is given a look through [mood boards](../design-process/mood-boards.md) and [concept art](../design-process/concept-art.md), and a voice through a [story bible](../story-experience/story-bible.md).

The phase ends when two documents exist. One is a [design intent](../design-process/design-intent.md) package that says what the thing is. The other is a rough cost and feasibility check. Together they let a studio decide whether the idea fits the park's [attraction mix](../masterplanning/attraction-mix.md) and its [capital budget](../operations-business/capital-budgets.md). Most ideas stop here, and that is the point: killing an idea on paper is cheap, killing it in concrete is not.

## Explore further
- `khan-imagineering-in-a-box` — Imagineering in a Box (Khan Academy x Walt Disney Imagineering)
- `imagineers-behind-the-dreams` — Walt Disney Imagineering: A Behind the Dreams Look at Making the Magic Real
- `wikipedia-walt-disney-imagineering` — Walt Disney Imagineering (Wikipedia)
