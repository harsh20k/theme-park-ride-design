---
id: sensory-conflict-theory
title: Sensory Conflict Theory
land: human-factors
level: intermediate
abstraction: sub-concept
parent: motion-sickness
children: []
relations:
  - { type: example-of, target: perception }
  - { type: causes, target: motion-sickness }
summary: "The standard explanation of motion sickness, which says sickness comes not from motion itself but from a mismatch between what the senses report and what the brain expected."
tags: [sample-content, psychology, physiology, theory]
visuals:
  - { type: mermaid, title: "Sensory conflict, step by step", alt: "Sequence diagram in which the eyes and inner ear send differing motion reports to the brain, the brain compares them with its stored expectation, finds a mismatch and triggers sweat, dizziness and nausea in the body" }
sources:
  - { title: "Motion Sickness", author: "James T. Reason and Joseph J. Brand", year: 1975, type: "book", note: "Academic Press" }
confidence: high
---

```mermaid
%% title: Sensory conflict, step by step | alt: Sequence diagram in which the eyes and inner ear send differing motion reports to the brain, the brain compares them with its stored expectation, finds a mismatch and triggers sweat, dizziness and nausea in the body
sequenceDiagram
  participant Eyes
  participant Ear as Inner ear
  participant Brain
  participant Body
  Eyes->>Brain: The scene is rushing past
  Ear->>Brain: Almost no acceleration felt
  Brain->>Brain: Compare with stored expectation
  Brain-->>Eyes: Mismatch found
  Brain->>Body: Trigger sweat, dizziness, nausea
```

Sensory conflict theory, set out by James Reason and Joseph Brand in 1975, says that motion sickness is not caused by motion itself but by disagreement. The brain keeps a stored expectation of how the eyes, inner ear and body should report any given movement, learned from a lifetime of walking and turning. When the live signals fail to match each other, or fail to match that expectation, a conflict signal builds and sickness follows. The theory explains the puzzles: why a reader in a car feels ill, because the ear says motion while the eyes say page; why sailors adapt after a few days, because the expectation updates; and why screens with poor frame rates can be worse than real roller coasters. It is a clear example of [perception](../human-factors/perception.md) as prediction rather than passive sensing, and it is the account of [motion sickness](../human-factors/motion-sickness.md) that ride and simulator designers lean on when tuning a [g-force profile](../ride-engineering/g-force-basics.md).

## Explore further
- [Motion sickness](../human-factors/motion-sickness.md) — the symptoms and the design limits they impose.
- [Perception](../human-factors/perception.md) — how the brain blends the senses in the first place.
