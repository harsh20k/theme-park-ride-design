---
id: emergency-access
title: Emergency Access & Evacuation
land: masterplanning
level: intermediate
abstraction: concept
parent: backstage-and-infrastructure
children: []
relations:
  - { type: applies-to, target: emergency-stop-and-evacuation }
  - { type: applies-to, target: weather-policies }
  - { type: applies-to, target: crowd-management }
  - { type: applies-to, target: safety-culture }
  - { type: limits, target: pinch-points }
summary: Fire lanes, egress widths and muster points planned so a full park can empty or an ambulance can reach any ride.
tags: [safety, egress, fire, evacuation]
visuals: [mermaid]
interactive_idea: "Trigger a simulated park-wide evacuation and watch flow through each exit against its code-rated capacity."
sources: [wikipedia-nfpa-101-life-safety-code, wikipedia-reedy-creek, gkstill-phd-crowd-dynamics-ch3]
confidence: medium
---
```mermaid
flowchart TD
  A["Incident: fire, storm, ride stop, medical"] --> C{"Scale?"}
  C -->|"single ride"| R["Ride evacuation path to backstage"]
  C -->|"one land"| L["Clear land via marked exits to service road"]
  C -->|"whole park"| P["Park-wide egress: gates and emergency exits in berm"]
  R --> M["Muster and first aid"]
  L --> M
  P --> M
  F["Fire lane ring"] -.-> R
  F -.-> L
```

Emergency access is the backstage system nobody wants to use. A masterplan must guarantee two things: that fire engines and ambulances can reach any point in the park quickly, and that every guest can get out if the park, a land or a single ride has to be cleared. Both are drawn before the theming.

In the United States the governing rules come largely from NFPA 101, the Life Safety Code, which sets means-of-egress widths and exit counts for assembly occupancies, and from local building codes. Walt Disney World went further by writing its own EPCOT Building Codes and running its own fire department through the Reedy Creek district, now the Central Florida Tourism Oversight District. Most parks instead work with the city fire marshal, who wants a fire lane ring and gates in the berm.

Planning rules follow. Paths that double as egress are sized above their everyday [level of service](../masterplanning/level-of-service.md) so a stalled parade crowd can still move, and [pinch points](../masterplanning/pinch-points.md) are the first thing a fire review flags. Each ride needs an [evacuation route](../safety-standards/emergency-stop-and-evacuation.md) from any stop position to backstage. [Weather policies](../safety-standards/weather-policies.md) add shelter-in-place plans for lightning, and trained [crowd management](../operations-business/crowd-management.md) turns the plan into behaviour.

## Explore further
- `wikipedia-nfpa-101-life-safety-code` — Life Safety Code, NFPA 101 (Wikipedia)
- `wikipedia-reedy-creek` — Reedy Creek Improvement District (Wikipedia)
- `gkstill-phd-crowd-dynamics-ch3` — Crowd Dynamics, PhD chapter 3 (Keith Still)
