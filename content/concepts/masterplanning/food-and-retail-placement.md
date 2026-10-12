---
id: food-and-retail-placement
title: Food & Retail Placement
land: masterplanning
level: intermediate
abstraction: concept
parent: guest-flow-and-capacity
children: []
relations:
  - { type: enables, target: per-capita-spending }
  - { type: applies-to, target: hunger-and-hydration }
  - { type: applies-to, target: souvenirs-and-memory-cues }
  - { type: applies-to, target: servicescape }
  - { type: applies-to, target: choice-architecture }
summary: Putting restaurants and shops where the crowd already is, when it is hungry or elated.
tags: [retail, food, revenue, circulation]
visuals: [mermaid]
interactive_idea: "Drop a shop on a park map and a heat overlay scores it by foot traffic, ride-exit adjacency and lunch proximity."
sources: [pgav-designing-the-day, themedattraction-master-planning, hench-designing-disney]
confidence: medium
---
```mermaid
flowchart LR
  E["Entry street"] --> S1["Big retail, caught on exit"]
  H["Hub"] --> S2["Snacks and quick service"]
  R["Headline ride"] --> X["Exit through the gift shop"]
  P["Parade route"] --> S3["Carts and kiosks"]
  L["Lunch peak"] --> T["Table service with seats sized to design day"]
```

Food and retail placement is where masterplanning meets the till. Shops and restaurants are sized from the [design day](../masterplanning/design-day.md), since PGAV's time-budget method reserves part of every guest hour for eating and buying, and seats, counters and kitchens must match that demand at the lunch peak. Then they are positioned on the flow.

A few placements recur across the industry. The entry street is lined with the largest shops because every guest walks it twice, and the exit walk is when wallets open. Rides exit through a themed store while the thrill is fresh, a move that converts [souvenirs](../human-factors/souvenirs-and-memory-cues.md) into memory cues. Quick service clusters near the hub and at land boundaries so nobody is more than a short walk from food, which blunts [hunger](../human-factors/hunger-and-hydration.md) complaints. Carts and kiosks line parade routes where crowds stand for an hour.

The craft is to do this without hurting the story. A themed counter can be [choice architecture](../human-factors/choice-architecture.md) and set dressing at once, and a restaurant interior is a [servicescape](../sensory-environment/servicescape.md) that extends the land. Done well it raises [per-capita spending](../operations-business/per-capita-spending.md); done badly, guests feel sold to.

## Explore further
- `pgav-designing-the-day` — Designing the Day (PGAV Destinations)
- `themedattraction-master-planning` — Theme Park Master Planning (Peter Alexander)
- `hench-designing-disney` — Designing Disney (John Hench)
