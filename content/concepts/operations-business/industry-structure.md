---
id: industry-structure
title: Industry Structure
land: operations-business
level: beginner
abstraction: concept
parent: business-and-finance
children: []
relations:
  - { type: applies-to, target: coaster-manufacturers }
  - { type: applies-to, target: professional-bodies }
  - { type: applies-to, target: merlin-magic-making }
  - { type: applies-to, target: conferences }
  - { type: applies-to, target: asian-expansion }
summary: Operators own parks, manufacturers build rides, consultants and designers sit between them, and trade bodies tie it together.
tags: [business, industry, operators, manufacturers]
visuals: [mermaid]
interactive_idea: "An interactive org map of the industry: click an operator to see which manufacturers, design firms and licensors its recent projects used."
sources: [blooloop-eca-global-attraction-landscape, blooloop-supplier-directory, aecom-theme-index, iaapa-research]
confidence: high
---
```mermaid
flowchart TD
  T["Trade bodies and events<br/>IAAPA, TEA, expos"] --- O
  O["Operators<br/>Disney, Universal, Merlin, Six Flags,<br/>OCT, Chimelong, Fantawild"] --> D["Design and consultancy<br/>in-house studios, independent firms,<br/>feasibility economists"]
  D --> M["Manufacturers and suppliers<br/>ride systems, show tech,<br/>rockwork, ticketing"]
  M --> O
  L["IP owners<br/>studios, publishers"] -. licences .-> O
  F["Finance<br/>public markets, private equity,<br/>state investors"] -. capital .-> O
```

The attractions industry has a recognisable shape. At the centre are operators, the companies that own and run parks: global groups such as Disney and Universal, multi-park chains such as Merlin and Six Flags, and fast-growing Chinese operators such as OCT, Chimelong and Fantawild that now fill the upper rows of the TEA/AECOM attendance tables. Blooloop's landscape report profiles fifteen leading operators and ten emerging players.

Around them sits the supply side. Ride manufacturers, from coaster makers such as Intamin, Mack Rides, Bolliger & Mabillard and Vekoma to dark-ride and motion-base specialists, build the hardware; see [coaster manufacturers](../history/coaster-manufacturers.md). Design happens either in-house, at Walt Disney Imagineering, Universal Creative and [Merlin Magic Making](../history/merlin-magic-making.md), or at independent studios and consultancies that master-plan, theme and cost projects for everyone else. Feasibility economists, descendants of Buzz Price's firm, sit at the front end.

Trade bodies knit it together. IAAPA runs the big expos and publishes benchmarking research; the Themed Entertainment Association gives the Thea Awards and co-publishes the Theme Index. Their events, covered under [conferences](../careers/conferences.md) and [professional bodies](../careers/professional-bodies.md), are where operators, makers and designers meet. The [Asian expansion](../history/asian-expansion.md) of the last two decades has reshaped every layer of this map.

## Explore further
- `blooloop-eca-global-attraction-landscape` — ECA-blooloop Global Attraction Landscape Report v1.0
- `blooloop-supplier-directory` — blooloop supplier directory
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index
- `iaapa-research` — IAAPA Research: Benchmark Reports, Outlooks and Economic Impact Studies
