---
id: medical-exclusions
title: Pregnancy & Medical Exclusions
land: human-factors
level: intermediate
abstraction: concept
parent: comfort-and-body
children: []
relations:
  - { type: applies-to, target: patron-accommodation }
  - { type: applies-to, target: g-tolerance-and-duration }
  - { type: applies-to, target: motion-sickness }
  - { type: applies-to, target: signage-and-graphics }
  - { type: applies-to, target: risk-assessment }
summary: Rides warn off guests whose conditions make normal forces risky, using standard wording guests must judge for themselves.
tags: [safety, health, warnings, signage]
visuals: [mermaid]
interactive_idea: "Toggle a ride's force profile (launch, inversions, spinning, strobe) and see which warning icons the standard practice would expect on its sign."
sources: [universal-orlando-rider-guide, astm-f2291-design-standard, niosh-heat-stress]
confidence: medium
---
```mermaid
flowchart TD
  F[Ride force profile] --> W{Which warnings apply}
  W --> P[Pregnancy]
  W --> H[Heart and blood pressure]
  W --> B[Back, neck, recent surgery]
  W --> M[Motion sickness and dizziness]
  W --> S[Strobe and flashing lights]
  P --> G[Guest decides before queuing]
  H --> G
  B --> G
  M --> G
  S --> G
```

Every thrill ride entrance carries a list of conditions that should keep someone off it: pregnancy, heart conditions, high blood pressure, back or neck problems, recent surgery, motion sickness, and sensitivity to strobe lighting. Operators publish the same lists ride by ride; Universal Orlando's rider guide is a clear example. The warnings are not diagnoses; they state what the ride does to a body so a guest can judge for themselves.

The logic comes from the ride's forces. Sustained positive g and sudden onset, covered in [g-tolerance and duration](../ride-engineering/g-tolerance-and-duration.md), are the concern for heart and blood-pressure conditions. Jerk and lateral loads matter for backs and necks. Spinning and screen-based rides trigger [motion sickness](../human-factors/motion-sickness.md). Design standards such as ASTM F2291 treat rider-facing warnings as part of the containment and accommodation thinking, and the ride's [risk assessment](../safety-standards/risk-assessment.md) records why each warning is there.

Pregnancy is listed on almost everything with meaningful forces because the evidence is thin and the consequence serious. Heat adds to all of this: NIOSH names pregnancy and some medications as heat-stress risk factors, so exclusions and [thermal comfort](../human-factors/thermal-comfort.md) overlap in summer. Wording differs between parks; this card describes common practice, not a mandated text.

## Explore further
- `universal-orlando-rider-guide` — Universal Orlando Guide for Rider Safety and Accessibility (PDF)
- `astm-f2291-design-standard` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `niosh-heat-stress` — NIOSH: About Heat Stress
