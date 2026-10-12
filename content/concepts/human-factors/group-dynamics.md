---
id: group-dynamics
title: Group Dynamics & Families
land: human-factors
level: beginner
abstraction: concept
parent: behavior-and-decision
children: [rider-switch, lowest-common-denominator]
relations:
  - { type: applies-to, target: attraction-mix }
  - { type: applies-to, target: family-coasters }
  - { type: applies-to, target: load-unload-design }
  - { type: applies-to, target: rest-areas }
  - { type: applies-to, target: guest-research }
summary: Parks are visited by groups, not individuals, and the group decides what any one person gets to do.
tags: [families, groups, decisions, planning]
visuals: [mermaid]
interactive_idea: "Build a party of mixed ages and heights, then see which rides the whole group can do together and where it must split."
sources: [disney-rider-switch, cdc-growth-charts]
confidence: high
---
```mermaid
flowchart TD
  G[Family of five arrives] --> Q{Can everyone ride}
  Q -- yes --> T[Ride together]
  Q -- no --> S{Split or skip}
  S -- split --> R[Rider switch or parallel plans]
  S -- skip --> K[Choose something all can do]
  R --> M[Regroup point needed]
  K --> M
```

Almost nobody visits a theme park alone. Guests arrive as couples, families, school groups and friend groups, and the group, not the individual, makes the decisions. A park designed for an imagined average rider will frustrate the group that actually turns up: a grandparent, two parents, a teenager who wants the tallest coaster and a four-year-old who cannot ride it.

Groups behave in recognisable ways. They move at the pace of the slowest member. They need to regroup after any split, so [rest areas](../masterplanning/rest-areas.md) and benches near big-ride exits do real work. They negotiate, and the negotiation is tiring, which feeds [decision fatigue](../human-factors/decision-fatigue.md). They also want shared memories, which is why an [attraction mix](../masterplanning/attraction-mix.md) with plenty of all-ages rides, including [family coasters](../ride-systems/family-coasters.md), tends to outperform a pure thrill lineup.

Two tools for groups have their own cards. [Rider switch](../human-factors/rider-switch.md) lets adults take turns without queuing twice. [Lowest common denominator planning](../human-factors/lowest-common-denominator.md) is the designer's response: plan the day, and the park, around the member with the tightest limits. Operators study all of this through [guest research](../operations-business/guest-research.md), and height-by-age data such as the CDC growth charts tells them exactly how many children a given height rule splits from their family.

## Explore further
- `disney-rider-switch` — What Is Rider Switch and How Does It Work?
- `cdc-growth-charts` — CDC Growth Charts
