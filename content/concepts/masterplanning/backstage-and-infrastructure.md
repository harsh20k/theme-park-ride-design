---
id: backstage-and-infrastructure
title: Backstage & Infrastructure
land: masterplanning
level: intermediate
abstraction: super-concept
parent: null
children: [onstage-backstage, utilidors, service-roads, utilities-and-central-plant, parking-and-transit, emergency-access]
relations:
  - { type: enables, target: suspension-of-disbelief }
  - { type: limits, target: operational-intrusion }
  - { type: applies-to, target: the-berm }
  - { type: applies-to, target: park-operations }
  - { type: applies-to, target: site-construction }
summary: Everything guests never see, from tunnels and power plants to car parks, that keeps the show running.
tags: [backstage, infrastructure, operations, logistics]
visuals: [mermaid]
interactive_idea: "Toggle an x-ray layer on a park map to reveal service roads, tunnels, plant rooms and fire lanes under the theming."
sources: [wikipedia-disney-utilidor-system, wikipedia-reedy-creek, wikipedia-transportation-and-ticket-center]
confidence: high
---
```mermaid
flowchart TB
  subgraph Onstage
    L["Lands, rides, shops"]
  end
  subgraph Backstage
    U["Utilidors or service corridors"]
    R["Service roads and loading docks"]
    C["Central plant: power, chilled water, waste"]
    P["Parking, transit, cast facilities"]
    E["Fire lanes and evacuation routes"]
  end
  U --> L
  R --> U
  C --> L
  P --> L
  E --> L
```

Backstage and infrastructure is the half of the masterplan guests are not meant to notice. A theme park is a small city: it needs power, chilled water, sewage, waste removal, deliveries, staff changing rooms, fire lanes and a way to get tens of thousands of cars in and out. The planning trick is to provide all of it while keeping it invisible, so the fiction onstage survives.

The organising idea is [onstage and backstage](../masterplanning/onstage-backstage.md), a theatre metaphor Disney made literal. Magic Kingdom's [utilidors](../masterplanning/utilidors.md) run beneath the park so costumes and deliveries never cross a land. [Service roads](../masterplanning/service-roads.md) ring the site behind [the berm](../story-experience/the-berm.md). A [central plant](../masterplanning/utilities-and-central-plant.md) feeds the whole resort, and [parking and transit](../masterplanning/parking-and-transit.md) is sized to the design day. [Emergency access](../masterplanning/emergency-access.md) must thread through all of it.

Every one of these systems protects [suspension of disbelief](../human-factors/suspension-of-disbelief.md) by removing [operational intrusion](../human-factors/operational-intrusion.md): no forklifts on Main Street, no bins by the castle.

## Explore further
- `wikipedia-disney-utilidor-system` — Disney utilidor system (Wikipedia)
- `wikipedia-reedy-creek` — Reedy Creek Improvement District (Wikipedia)
- `wikipedia-transportation-and-ticket-center` — Transportation and Ticket Center (Wikipedia)
