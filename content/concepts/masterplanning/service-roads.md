---
id: service-roads
title: Service Roads & Deliveries
land: masterplanning
level: intermediate
abstraction: concept
parent: backstage-and-infrastructure
children: []
relations:
  - { type: applies-to, target: the-berm }
  - { type: limits, target: visual-intrusion }
  - { type: applies-to, target: opening-and-closing-procedures }
  - { type: enables, target: spare-parts-and-obsolescence }
  - { type: applies-to, target: show-install }
summary: The hidden road ring and loading docks that feed every shop and restaurant without crossing a land.
tags: [logistics, backstage, deliveries, berm]
visuals: [mermaid]
interactive_idea: "Route a delivery truck from the gate to a restaurant and see which onstage paths it would cross without a service road."
sources: [wikipedia-disney-utilidor-system, falcons-master-planning-process, wikipedia-disneyland]
confidence: medium
---
```mermaid
flowchart LR
  W["Warehouse and receiving"] --> R["Perimeter service road"]
  R --> D1["Dock behind Land A"]
  R --> D2["Dock behind Land B"]
  R --> D3["Dock behind Land C"]
  D1 -.->|"screened door"| K1["Kitchen and stockroom"]
  D2 -.->|"screened door"| K2["Kitchen and stockroom"]
  B["Berm and planting"] --- R
```

Service roads are how a park gets fed. Food, merchandise, spare parts, costumes, rubbish and show scenery all move by truck, and in most parks they move on a perimeter road that runs behind the lands, outside the guest area. Each land backs onto the road through a screened dock, so a kitchen can be restocked while the restaurant front stays in character. The road also carries staff shuttles, fire engines and, during construction, the cranes for a new ride.

Disneyland's planted [berm](../story-experience/the-berm.md) hides this ring as well as the outside world, and the first rule of a new masterplan is still to reserve a backstage road corridor before the lands are shaped. Falcon's Creative Group describes layering utilities and access under the creative plan, much as a city sequences roads before buildings. Where a site is too tight for a full ring, deliveries are timed to [opening and closing procedures](../operations-business/opening-and-closing-procedures.md), with trucks rolling onstage only before gates open.

The alternative is Magic Kingdom's [utilidors](../masterplanning/utilidors.md), a road system moved indoors and under the park. Either way the goal is the same: no [visual intrusion](../human-factors/visual-intrusion.md) from a pallet jack, and quick access for [parts](../operations-business/spare-parts-and-obsolescence.md) and [show installs](../design-process/show-install.md).

## Explore further
- `wikipedia-disney-utilidor-system` — Disney utilidor system (Wikipedia)
- `falcons-master-planning-process` — Master Planning Process (Falcon's Creative Group)
- `wikipedia-disneyland` — Disneyland (Wikipedia)
