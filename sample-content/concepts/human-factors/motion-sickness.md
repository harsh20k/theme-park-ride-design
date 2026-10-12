---
id: motion-sickness
title: Motion Sickness
land: human-factors
level: intermediate
abstraction: concept
parent: perception
children: [sensory-conflict-theory]
relations:
  - { type: limits, target: launched-coasters }
  - { type: applies-to, target: g-force-basics }
summary: "Nausea, sweating and dizziness triggered when the eyes and the inner ear send the brain different reports about how the body is moving."
tags: [sample-content, psychology, physiology, comfort, toy]
visuals:
  - { type: mermaid, title: "How motion sickness starts", alt: "Flowchart in which the eyes and the inner ear send different motion signals, the brain checks whether they match, and a mismatch leads to a warning signal, cold sweat, dizziness and nausea" }
interactive_idea: "Slide the mismatch between what the eyes see and what the inner ear feels and watch the queasiness meter."
sources:
  - { title: "Motion Sickness", author: "James T. Reason and Joseph J. Brand", year: 1975 }
  - { title: "Motion Sickness: An Evolutionary Hypothesis", author: "Michel Treisman", year: 1977, type: "paper", note: "Science, vol. 197" }
confidence: high
---

```mermaid
%% title: How motion sickness starts | alt: Flowchart in which the eyes and the inner ear send different motion signals, the brain checks whether they match, and a mismatch leads to a warning signal, cold sweat, dizziness and nausea
flowchart LR
  E[Eyes say moving] --> M{Do the signals match?}
  V[Inner ear says still] --> M
  M -- yes --> OK[Comfortable]
  M -- no --> W[Warning signal]
  W --> S[Cold sweat and dizziness]
  S --> N[Nausea]
```

Motion sickness is what happens when the senses argue. On a simulator the eyes insist you are diving while the inner ear insists you are sitting still; on a spinning ride the inner ear reports turning that the eyes cannot confirm. The brain treats the mismatch as a sign something is wrong, and the body responds with cold sweat, dizziness and nausea. The leading explanation is [sensory conflict theory](../human-factors/sensory-conflict-theory.md). Susceptibility varies hugely between people and drops with repeated exposure, which is one reason test crews ride new attractions many times. For designers it sets real limits. Long sustained spinning, low screen frame rates and lag between motion and picture are the usual culprits, more so than high [g-forces](../ride-engineering/g-force-basics.md) on their own. Even [launched coasters](../ride-systems/launched-coasters.md) keep their most disorienting elements short, because the brain copes with brief, clearly signalled motion far better than with lingering confusion.

## Explore further
- [Sensory conflict theory](../human-factors/sensory-conflict-theory.md) — the standard account of why the mismatch makes us ill.
- [Forces and tolerance](../ride-engineering/forces-and-tolerance.md) — the physical limits that sit alongside the perceptual ones.
