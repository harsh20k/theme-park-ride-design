---
id: astm-f24
title: ASTM F24 Committee
land: safety-standards
level: intermediate
abstraction: concept
parent: standards-and-regulation
children: [astm-f2291, astm-f770, astm-f1193, astm-f2974]
relations:
  - { type: applies-to, target: engineering-handoff }
  - { type: limits, target: acceleration-envelopes }
  - { type: applies-to, target: coaster-manufacturers }
  - { type: applies-to, target: preventive-maintenance }
  - { type: enables, target: conferences }
summary: The ASTM committee, formed in 1978, that writes the main North American ride standards from design to audit.
tags: [astm, standards, committee, north-america]
visuals: [mermaid]
interactive_idea: "Click a phase of a ride's life and see which F24 standard governs it and who must hold the documents."
sources: [astm-f24-committee, astm-f2137-dynamics]
confidence: high
---
```mermaid
flowchart LR
  D["Design - F2291"] --> M["Manufacture and QA - F1193"]
  M --> O["Own, operate, maintain, inspect - F770"]
  O --> A["Audit conformance - F2974"]
  A -.-> D
  T["Measure accelerations - F2137"] --> D
  T --> O
```

ASTM International's Committee F24 on Amusement Rides and Devices was formed in 1978. It now has around a thousand members and jurisdiction over roughly 29 standards, published in the Annual Book of ASTM Standards, Volume 15.07. Members meet twice a year, usually February and October, and ballot every change; manufacturers, parks, inspectors, regulators and consultants all vote.

The standards are organised around a ride's life. [F2291](../safety-standards/astm-f2291.md) sets design criteria. [F1193](../safety-standards/astm-f1193.md) covers quality and manufacturing. [F770](../safety-standards/astm-f770.md) tells the owner how to operate, maintain and inspect. [F2974](../safety-standards/astm-f2974.md) explains how to audit all of the above. Supporting practices such as F2137 define how to measure the accelerations that feed the [acceleration envelopes](../ride-engineering/acceleration-envelopes.md).

F24 standards are voluntary until a state or country adopts them, which many do by reference. For a designer, the [engineering handoff](../design-process/engineering-handoff.md) package to a manufacturer is effectively an F2291 compliance file, and the park's [preventive maintenance](../operations-business/preventive-maintenance.md) plan should trace back to F770.

## Explore further
- `astm-f24-committee` — ASTM Committee F24 on Amusement Rides and Devices
- `astm-f2137-dynamics` — ASTM F2137 Measuring the Dynamic Characteristics of Amusement Rides
