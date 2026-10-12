---
id: business-and-finance
title: Business & Finance
land: operations-business
level: intermediate
abstraction: super-concept
parent: operations-business
children: [capital-budgets, roi-and-attendance-modeling, pricing, per-capita-spending, seasonality-and-events, length-of-stay, ip-licensing-economics, industry-structure]
relations:
  - { type: applies-to, target: feasibility-and-early-costing }
  - { type: limits, target: scope-and-value-engineering }
  - { type: applies-to, target: regional-vs-destination }
  - { type: enables, target: ip-wars }
  - { type: applies-to, target: economic-inclusion }
summary: Parks are capital-heavy businesses; attendance, spend per guest and length of stay decide what gets built.
tags: [business, finance, attendance, revenue]
visuals: [mermaid]
interactive_idea: "A park P&L builder: set attendance, ticket price, in-park spend and hotel nights, then see revenue, margin and how many years a $500M land takes to pay back."
sources: [aecom-theme-index, sec-edgar-disney-10k-filings, six-flags-investor-relations, openlibrary-walts-revolution]
confidence: high
---
```mermaid
flowchart LR
  A["Attendance<br/>visits per year"] --> R["Revenue"]
  P["Per-capita spending<br/>ticket, food, retail"] --> R
  H["Hotels and<br/>length of stay"] --> R
  R --> M["Operating margin"]
  M --> C["Capital budget<br/>new rides, lands, refurbs"]
  C -. attendance lift .-> A
  S["Seasonality<br/>and events"] -. shapes .-> A
  I["IP licensing"] -. cost and draw .-> C
  X["Industry structure<br/>operators, makers, consultants"] -. context .-> C
```

A theme park is a machine for turning capital into visits and visits into cash. The revenue side has three dials. Attendance, counted in the TEA/AECOM Theme Index each year, says how many people came. [Per-capita spending](../operations-business/per-capita-spending.md) says what each one paid for tickets, food and merchandise. [Length of stay](../operations-business/length-of-stay.md), driven by hotels and multi-day tickets, multiplies both at destination resorts.

The cost side is dominated by two things: labour, discussed under park operations, and capital. [Capital budgets](../operations-business/capital-budgets.md) decide which new rides and lands get built, and [ROI and attendance modeling](../operations-business/roi-and-attendance-modeling.md) tries to predict what each one will earn. [Pricing](../operations-business/pricing.md) and [seasonality and events](../operations-business/seasonality-and-events.md) shape the demand curve across the year. [IP licensing economics](../operations-business/ip-licensing-economics.md) governs the cost of borrowing a famous story, and [industry structure](../operations-business/industry-structure.md) maps who the players are.

Designers live inside these numbers. A ride's scope is set in [feasibility and early costing](../design-process/feasibility-and-early-costing.md), trimmed by value engineering, and judged years later by whether attendance moved.

## Explore further
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index
- `sec-edgar-disney-10k-filings` — Walt Disney Co 10-K filings (SEC EDGAR)
- `six-flags-investor-relations` — Six Flags Entertainment Corporation Investor Relations
- `openlibrary-walts-revolution` — Walt's Revolution! By the Numbers
