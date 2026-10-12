---
id: herding-and-social-proof
title: Herding & Social Proof
land: human-factors
level: intermediate
abstraction: sub-concept
parent: crowd-behavior
children: []
relations:
  - { type: causes, target: balking-and-reneging }
  - { type: applies-to, target: wait-time-data-and-apps }
  - { type: applies-to, target: attraction-mix }
  - { type: enables, target: emotional-contagion }
  - { type: applies-to, target: entertainment-scheduling }
summary: "Guests copy other guests: a visible line, a crowd looking up, or a packed restaurant all pull people in."
tags: [social-proof, crowds, psychology, queues]
visuals: [mermaid]
interactive_idea: "Set the size of a seed crowd staring at a blank wall and watch what fraction of simulated passers-by stop to look."
sources: [milgram-drawing-power-of-crowds-1969, cialdini-influence, helbing-escape-panic-2000]
confidence: high
---
```mermaid
flowchart LR
  A[A few people stop] --> B[Passers-by notice]
  B --> C[More people stop]
  C --> B
  C --> D[Crowd becomes a signal]
  D --> E[Line looks worth joining]
  D --> F[Empty ride looks suspect]
```

In 1969 Stanley Milgram and colleagues had a few people stand on a New York sidewalk and stare up at a sixth-floor window. One person drew a few glances; a group of fifteen made most passers-by stop and look up too. That is **social proof**: when we are unsure, we read other people's behaviour as information. Robert Cialdini later made it one of his core principles of influence.

In a park, the crowd is the loudest sign. A long visible line suggests a great ride and recruits more riders; an empty queue suggests something is wrong, even when the ride has just reopened. Herding also shapes dining and show choice, which is why the [attraction mix](../masterplanning/attraction-mix.md) and [entertainment schedule](../operations-business/entertainment-scheduling.md) are tuned to spread crowds rather than let one hot spot feed on itself.

Herding has a dark side. Helbing's panic simulations show how people in an emergency follow whoever is moving, which can pile a crowd against one exit while another sits unused. Designers counter this with evenly lit, clearly marked exits, and operators counter it with [posted wait times](../operations-business/wait-time-data-and-apps.md) that give people better information than the crowd itself, reducing needless [balking](../human-factors/balking-and-reneging.md).

## Explore further
- `milgram-drawing-power-of-crowds-1969` — Note on the drawing power of crowds of different size
- `cialdini-influence` — Influence: The Psychology of Persuasion (book)
- `helbing-escape-panic-2000` — Simulating dynamical features of escape panic
