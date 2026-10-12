---
id: rider-biomechanics
title: Rider Biomechanics
land: ride-engineering
level: advanced
abstraction: super-concept
parent: null
children: [head-and-neck-loads, rider-position, rough-rides]
relations:
  - { type: applies-to, target: medical-exclusions }
  - { type: applies-to, target: vestibular-system }
  - { type: contrasts-with, target: g-tolerance-and-duration }
  - { type: applies-to, target: astm-f2291 }
  - { type: applies-to, target: age-differences }
summary: "What the ride does to the body, not just to the seat: head motion, neck loads and seat position."
tags: [biomechanics, head, neck, injury, research]
visuals: [mermaid]
interactive_idea: "Attach a virtual head sensor to a rider in any row; the widget replays the ride and plots head linear and angular acceleration."
sources: [smith-meaney-g-forces-brain-2002, pfister-head-motions-2009, kuo-brain-deformation-coasters-2017, ubc-fib-head-injury-coasters]
confidence: high
---
```mermaid
flowchart LR
  S["Seat acceleration: the ride's g"] --> B["Body: torso restrained, neck free"]
  B --> H["Head: linear and angular acceleration"]
  H --> M["Metrics: HIC, angular velocity, brain strain"]
  M --> C["Compare: pillow fight, soccer header, car crash"]
  P["Rider position and row"] --> S
  R["Rough track and restraints"] --> H
```

The g-force meter on the seat tells only half the story. A restrained torso stops with the car; the head, on the end of a flexible neck, does not. Rider biomechanics is the study of that difference: how seat accelerations become head motion, which metrics predict harm, and how position and track quality change the answer. It matters because the public debate about coaster safety, from congressional hearings in 2002 onward, was argued in g-force terms that researchers at Penn and Stanford have shown are the wrong units.

[Head and neck loads](../ride-engineering/head-and-neck-loads.md) covers the measurements and what they found, which is reassuring for the brain and more nuanced for the neck. [Rider position](../ride-engineering/rider-position.md) explains why the back row floats and the front row sees, and why two people in the same seat can record different head motion. [Rough rides](../ride-engineering/rough-rides.md) looks at the everyday case: lateral jolts and hard restraints that bruise rather than injure.

This branch complements [g-tolerance and duration](../ride-engineering/g-tolerance-and-duration.md), feeds the biomechanical judgement behind [ASTM F2291](../safety-standards/astm-f2291.md), and explains the wording of [medical exclusions](../human-factors/medical-exclusions.md) and the [age differences](../human-factors/age-differences.md) in who should ride.

## Explore further
- `smith-meaney-g-forces-brain-2002` — Roller Coasters, G Forces, and Brain Trauma: On the Wrong Track?
- `pfister-head-motions-2009` — Head Motions While Riding Roller Coasters: Implications for Brain Injury
- `ubc-fib-head-injury-coasters` — Injury Biomechanics of the Head with Relation to Roller Coasters
