---
id: waiting
title: Waiting
land: human-factors
level: beginner
abstraction: super-concept
parent: null
children: [perceived-vs-actual-wait, occupied-time]
relations:
  - { type: applies-to, target: throughput-and-queueing }
  - { type: applies-to, target: wait-time-prediction }
summary: "Guests spend more of a park day in queues than on rides, so a wait has two sides worth designing, the actual minutes and the felt minutes."
tags: [sample-content, psychology, queues, guest-experience]
visuals:
  - { type: mermaid, title: "The two sides of a queue", alt: "Flowchart splitting waiting into the actual minutes, governed by throughput and dispatch, and the felt minutes, governed by occupied time, uncertainty and fairness, with both sides feeding guest satisfaction" }
sources:
  - { title: "The Psychology of Waiting Lines", author: "David H. Maister", year: 1985 }
  - { title: "Perspectives on Queues: Social Justice and the Psychology of Queueing", author: "Richard C. Larson", year: 1987, type: "paper", note: "Operations Research, vol. 35, no. 6" }
confidence: high
---

```mermaid
%% title: The two sides of a queue | alt: Flowchart splitting waiting into the actual minutes, governed by throughput and dispatch, and the felt minutes, governed by occupied time, uncertainty and fairness, with both sides feeding guest satisfaction
flowchart TD
  Q[Waiting] --> A[Actual minutes]
  Q --> F[Felt minutes]
  A --> T[Throughput and dispatch]
  F --> O[Occupied time]
  F --> U[Uncertainty and fairness]
  T --> S[Guest satisfaction]
  O --> S
  U --> S
```

Guests spend more of a park day in queues than on rides, so waiting is a design problem in its own right. It has two sides. The actual wait is arithmetic: how many people are in line divided by how many the ride swallows per hour, which is the territory of [throughput and queueing](../operations-business/throughput-and-queueing.md). The felt wait is psychology, and it is usually the one that decides whether people complain. David Maister's classic rules say that unoccupied time feels longer than occupied time, uncertain waits feel longer than known ones, and unfair waits feel longest of all. Good queue design attacks the felt side with story, shade, things to do and honest signage, as covered under [perceived vs actual wait](../human-factors/perceived-vs-actual-wait.md) and [occupied time](../human-factors/occupied-time.md). Modern parks add [wait-time prediction](../ai-future/wait-time-prediction.md) so guests can choose their queues with open eyes.

## Explore further
- [Perceived vs actual wait](../human-factors/perceived-vs-actual-wait.md) — why the same twenty minutes can feel like fifteen or thirty.
- [Throughput math](../operations-business/throughput-math.md) — the arithmetic behind the actual number.
