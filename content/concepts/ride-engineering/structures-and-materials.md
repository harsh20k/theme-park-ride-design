---
id: structures-and-materials
title: Structures & Materials
land: ride-engineering
level: advanced
abstraction: super-concept
parent: null
children: [supports-and-foundations, fatigue, dynamic-loads, wood-vs-steel, corrosion-and-weathering, thermal-expansion]
relations:
  - { type: applies-to, target: site-construction }
  - { type: applies-to, target: ride-lifecycle }
  - { type: applies-to, target: inspections }
  - { type: applies-to, target: astm-f1193 }
  - { type: enables, target: predictive-maintenance }
summary: The steel, wood and concrete that carry millions of cycles without complaint.
tags: [structures, materials, steel, wood, lifecycle]
visuals: [mermaid]
interactive_idea: "Follow a load from the wheel down to the soil, with each member lighting up as it carries compression, tension or shear."
sources: [coaster101-foundations, stengel-engineering-about, wikipedia-fatigue-material, wikipedia-wooden-roller-coaster]
confidence: high
---
```mermaid
flowchart TD
  W["Wheel loads: static weight plus dynamic g"] --> T["Track rails and spine"]
  T --> S["Supports, columns, bents"]
  S --> B["Base plates, anchor bolts, grout"]
  B --> F["Footers, pile caps, piles"]
  F --> G["Soil or rock"]
  T -. "millions of cycles" .-> Fa["Fatigue"]
  T -. "sun and frost" .-> Th["Thermal expansion"]
  S -. "rain, salt, spray" .-> C["Corrosion"]
  T -. "resonance" .-> D["Dynamic loads"]
```

A ride is a bridge that is hit by a train every ninety seconds, all day, for decades. The structural branch asks what carries those loads and what slowly gives way. [Supports and foundations](../ride-engineering/supports-and-foundations.md) trace the path from wheel to soil. [Fatigue](../ride-engineering/fatigue.md) is the quiet enemy: stresses far below yield that, repeated millions of times, grow cracks from welds and bolt holes, which is why Stengel's firm lists fatigue analysis as a core service. [Dynamic loads](../ride-engineering/dynamic-loads.md) cover vibration and resonance, the reason a structure must be stiffer, or better damped, than static sums suggest.

Material choices run through all of it. [Wood versus steel](../ride-engineering/wood-vs-steel.md) compares a flexing laminate that needs yearly replacement with a rigid section that must be protected from rust, and [corrosion and weathering](../ride-engineering/corrosion-and-weathering.md) and [thermal expansion](../ride-engineering/thermal-expansion.md) describe how sun, salt and seasons work on both. These cards connect outward to [site construction](../design-process/site-construction.md), to the manufacturing quality rules of [ASTM F1193](../safety-standards/astm-f1193.md), and to the [ride lifecycle](../operations-business/ride-lifecycle.md) that ends in retracking, rebuilding or removal.

## Explore further
- `coaster101-foundations` — Coasters-101: Foundations
- `stengel-engineering-about` — IB Stengel GmbH: About us
- `wikipedia-fatigue-material` — Fatigue (material)
