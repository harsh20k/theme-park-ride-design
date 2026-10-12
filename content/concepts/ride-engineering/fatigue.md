---
id: fatigue
title: Fatigue & Cyclic Loading
land: ride-engineering
level: advanced
abstraction: concept
parent: structures-and-materials
children: []
relations:
  - { type: applies-to, target: inspections }
  - { type: causes, target: mechanical-failure-cases }
  - { type: applies-to, target: astm-f1193 }
  - { type: enables, target: predictive-maintenance }
  - { type: limits, target: ride-lifecycle }
summary: Loads far below breaking strength, repeated millions of times, grow cracks until a part fails.
tags: [fatigue, cracks, steel, cycles, lifecycle]
visuals: [formula, chart]
interactive_idea: "Set a stress range and cycles per day; the widget walks up an S-N curve and shows the year the damage sum reaches one."
sources: [wikipedia-fatigue-material, stengel-engineering-about, wikipedia-xcelerator, coaster101-terminology]
confidence: high
---
> **Formula** $\sum_i \dfrac{n_i}{N_i} = 1$
> where:
> - $n_i$ — the number of load cycles the part actually sees at stress level i
> - $N_i$ — the number of cycles to failure at that stress level, read from the S-N curve
> - the sum reaching 1 — the Palmgren-Miner estimate of when fatigue failure is expected

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative S-N curve for a steel detail",
  "width": 300, "height": 140,
  "data": {"values": [
    {"N": 10000, "S": 300}, {"N": 100000, "S": 220}, {"N": 1000000, "S": 160}, {"N": 2000000, "S": 140}, {"N": 10000000, "S": 140}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "N", "type": "quantitative", "scale": {"type": "log"}, "title": "Cycles to failure (log)"},
    "y": {"field": "S", "type": "quantitative", "title": "Stress range (MPa)"}
  }
}
```

Bend a paperclip once and nothing happens; bend it fifty times and it snaps. That is fatigue, and a coaster is a paperclip bent every dispatch. A passing train loads a weld and unloads it; a million passes later, a crack that began at a bolt hole, weld toe or scratch has grown until the remaining metal tears in one go. The stress never approached the material's strength.

August Woehler worked this out on railway axles in the 1870s and gave engineers the S-N curve: stress range against cycles to failure, on log scales. Steels often show a flattening, an endurance limit below which cracks seem not to grow, though very-high-cycle research questions it. Miner's rule turns a ride's mix of light and heavy cycles into one damage fraction.

Stengel Engineering lists fatigue analysis beside ride design as a core service, and manufacturers run it for every track section and wheel carrier under [ASTM F1193](../safety-standards/astm-f1193.md). Operators hunt cracks with non-destructive testing during [inspections](../safety-standards/inspections.md); the 2009 Xcelerator cable failure, which investigators tied to inspection intervals, shows why. Fatigue sets the [ride lifecycle](../operations-business/ride-lifecycle.md), is the obvious target for [predictive maintenance](../ai-future/predictive-maintenance.md), and when missed it fills the file of [mechanical failure cases](../safety-standards/mechanical-failure-cases.md).

## Explore further
- `wikipedia-fatigue-material` — Fatigue (material): S-N curves, endurance limit, crack growth stages and Miner's rule
- `stengel-engineering-about` — IB Stengel GmbH: About us (fatigue analysis listed as a core service)
- `wikipedia-xcelerator` — Xcelerator (the 2009 launch cable failure and inspection findings)
- `coaster101-terminology` — Coasters-101: Roller Coaster Terminology (NDT, FEA, strain gauge and related terms)
