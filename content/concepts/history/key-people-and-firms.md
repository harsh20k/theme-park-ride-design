---
id: key-people-and-firms
title: Key People & Firms
land: history
level: intermediate
abstraction: super-concept
parent: null
children: [arrow-dynamics, schwarzkopf-and-stengel, coaster-manufacturers, legendary-imagineers, universal-creative, merlin-magic-making]
relations:
  - { type: applies-to, target: industry-structure }
  - { type: applies-to, target: engineering-roles }
  - { type: applies-to, target: creative-roles }
  - { type: enables, target: coaster-milestones }
  - { type: applies-to, target: professional-bodies }
summary: The builders and studios whose choices set the industry's patterns, from Arrow and Stengel to Imagineering and Universal Creative.
tags: [history, people, manufacturers, imagineering, universal-creative, merlin]
visuals: [mermaid]
interactive_idea: "A lineage graph: click a firm to see which engineers moved between Arrow, Giovanola, Intamin, B&M and RMC and when."
sources: [wikipedia-arrow-dynamics, wikipedia-werner-stengel, wikipedia-walt-disney-imagineering, wikipedia-universal-creative]
confidence: high
---
```mermaid
flowchart TD
    subgraph Builders["Ride builders"]
        A["Arrow 1946"] --> R["Arrow Dynamics 1986,<br/>bankrupt 2001"]
        S["Schwarzkopf 1950s"] --> ST["Stengel Engineering 1965"]
        G["Giovanola"] --> BM["B&M 1988"]
        I["Intamin 1967"]
        M["Mack 1780"]
        V["Vekoma 1926"]
        R --> RMC["RMC 2001, via Schilke"]
    end
    subgraph Studios["In-house design studios"]
        W["WED 1952 to<br/>Imagineering 1986"]
        U["MCA Planning 1968 to<br/>Universal Creative 1997"]
        MM["Merlin Magic Making"]
    end
```

Theme park history is often told as a list of rides. This group tells it as a list of hands. The ride builders are a small world. [Arrow Dynamics](../history/arrow-dynamics.md) built the Matterhorn, the first log flume and the first hypercoaster, then went bankrupt in 2001; its alumni seeded later firms. [Schwarzkopf and Stengel](../history/schwarzkopf-and-stengel.md) gave coasters the clothoid loop and the discipline of heartlining. The [big manufacturers](../history/coaster-manufacturers.md), B&M, Intamin, Mack, Vekoma and RMC, each own a style, and engineers have moved between them for decades.

The design studios are the other half. [Legendary Imagineers](../history/legendary-imagineers.md) like Marc Davis, Mary Blair, Claude Coats, John Hench, Tony Baxter and Joe Rohde defined what a themed environment is. [Universal Creative](../history/universal-creative.md) turned a studio tour into a rival method built on screens and licensed worlds. [Merlin Magic Making](../history/merlin-magic-making.md) shows how a multi-brand operator keeps creative work in-house.

Knowing these names helps you read the [industry structure](../operations-business/industry-structure.md), and the split between [creative roles](../careers/creative-roles.md) and [engineering roles](../careers/engineering-roles.md) still follows the studio-versus-builder line drawn here.

## Explore further
- `wikipedia-arrow-dynamics` — Arrow Dynamics
- `wikipedia-werner-stengel` — Werner Stengel
- `wikipedia-walt-disney-imagineering` — Walt Disney Imagineering
- `wikipedia-universal-creative` — Universal Creative
