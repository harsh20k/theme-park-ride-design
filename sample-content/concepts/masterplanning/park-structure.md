---
id: park-structure
title: Park Structure
land: masterplanning
level: beginner
abstraction: super-concept
parent: null
children: [hub-and-spoke]
relations:
  - { type: enables, target: weenies }
  - { type: applies-to, target: throughput-and-queueing }
summary: The overall layout pattern of a park decides how guests find their way, how crowds spread out, and where the big landmarks go.
tags: [masterplanning, layout, wayfinding, sample-content]
visuals:
  - { type: mermaid, title: "Three park layout patterns", alt: "Flowchart comparing hub-and-spoke, loop and linear park layouts, each with an entry and a set of lands" }
interactive_idea: null
sources:
  - { title: "The Imagineering Field Guide to Disneyland", author: "Alex Wright and The Imagineers", year: 2008 }
  - { title: "Theme Park Design & The Art of Themed Entertainment", author: "David Younger", year: 2016 }
confidence: medium
---

```mermaid
%% title: Three park layout patterns | alt: Flowchart comparing hub-and-spoke, loop and linear park layouts, each with an entry and a set of lands
flowchart LR
  subgraph HS[Hub-and-spoke]
    E1[Entry] --> H((Hub))
    H --> A1[Land A]
    H --> B1[Land B]
    H --> C1[Land C]
  end
  subgraph LP[Loop]
    E2[Entry] --> A2[Land A] --> B2[Land B] --> E2
  end
  subgraph LN[Linear]
    E3[Entry] --> A3[Land A] --> B3[Land B]
  end
```

Park structure is the big-picture shape of a park: the way its entrance, paths and themed lands fit together on the ground. It is decided long before any single ride is designed, and it quietly shapes everything that follows.

Three patterns cover most parks. A [hub-and-spoke](../masterplanning/hub-and-spoke.md) layout sends every guest down one entry street to a central plaza, with lands radiating out from it. A loop layout strings the lands along a circuit so guests walk a ring. A linear layout runs them along a single corridor, common in narrow sites and older parks.

The structure matters for people as much as for maps. It decides where tall [weenies](../story-experience/weenies.md) are placed so guests always have a landmark to walk toward, and it controls how evenly crowds spread, which feeds directly into [throughput and queueing](../operations-business/throughput-and-queueing.md). A clear structure also helps the [spatial storytelling](../story-experience/spatial-storytelling.md) feel deliberate rather than accidental.

## Explore further
- [Hub-and-Spoke](../masterplanning/hub-and-spoke.md) — the most copied layout in the industry and why it works.
- [Weenies](../story-experience/weenies.md) — the landmarks that pull guests through a structure.
