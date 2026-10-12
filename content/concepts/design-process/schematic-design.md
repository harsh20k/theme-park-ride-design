---
id: schematic-design
title: Schematic Design
land: design-process
level: intermediate
abstraction: concept
parent: design-development
children: []
relations:
  - { type: enables, target: capacity-planning }
  - { type: applies-to, target: onstage-backstage }
  - { type: enables, target: feasibility-and-early-costing }
  - { type: applies-to, target: load-unload-design }
  - { type: contrasts-with, target: concept-art }
summary: The first drawings to scale, fixing size, layout and guest flow so the project can be priced.
tags: [drawings, architecture, layout, phases]
visuals: [chart]
interactive_idea: "Slide between concept sketch, schematic plan and detailed plan of one show building to see detail accumulate."
sources: [paprojects-expertise-phases, wikipedia-architectural-model, blooloop-scenario-rebrand]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: what each phase decides",
  "width": 300, "height": 150,
  "data": {"values": [
    {"phase": "Concept", "q": "Story and look", "v": 1},
    {"phase": "Schematic", "q": "Story and look", "v": 1}, {"phase": "Schematic", "q": "Size and layout", "v": 1},
    {"phase": "Detailed", "q": "Story and look", "v": 1}, {"phase": "Detailed", "q": "Size and layout", "v": 1}, {"phase": "Detailed", "q": "Materials and dims", "v": 1},
    {"phase": "Shop drawings", "q": "Story and look", "v": 1}, {"phase": "Shop drawings", "q": "Size and layout", "v": 1}, {"phase": "Shop drawings", "q": "Materials and dims", "v": 1}, {"phase": "Shop drawings", "q": "How to build it", "v": 1}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "phase", "type": "nominal", "sort": ["Concept", "Schematic", "Detailed", "Shop drawings"], "title": null, "axis": {"labelAngle": 0}},
    "y": {"aggregate": "sum", "field": "v", "type": "quantitative", "title": "decisions locked"},
    "color": {"field": "q", "type": "nominal", "title": null}
  }
}
```

Schematic design is the moment the tape measure arrives. Borrowing the term from architecture, the team turns the approved concept into rough floor plans, elevations, guest flow diagrams and illustrative sketches that define each space and how it connects to the next. Nothing is detailed yet, but everything has a size. That is enough for a far better cost estimate than the [concept phase](../design-process/feasibility-and-early-costing.md) could offer.

For a ride this is where the queue, [load and unload](../operations-business/load-unload-design.md), show building, maintenance bay and exit shop get footprints, and where [onstage and backstage](../masterplanning/onstage-backstage.md) are separated. The drawings also define the "scope of theming", the guest-facing elements a theming contractor will later price, which keeps base-building and scenic trades from arguing over who owns a wall. Companies like Scenario now offer design assist at this stage so fabrication knowledge arrives before the drawings are frozen. Schematic design is the bridge between a painting that promises and a [capacity plan](../masterplanning/capacity-planning.md) that must deliver.

## Explore further
- `paprojects-expertise-phases` — P+A Projects: Architectural Design, Engineering and Modeling expertise
- `blooloop-scenario-rebrand` — Becoming Scenario: more than rockwork
- `wikipedia-architectural-model` — Architectural model (Wikipedia)
