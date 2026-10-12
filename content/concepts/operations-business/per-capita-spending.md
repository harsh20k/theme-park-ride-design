---
id: per-capita-spending
title: Per-Capita Spending
land: operations-business
level: intermediate
abstraction: concept
parent: business-and-finance
children: []
relations:
  - { type: applies-to, target: food-and-retail-placement }
  - { type: enables, target: length-of-stay }
  - { type: applies-to, target: souvenirs-and-memory-cues }
  - { type: applies-to, target: paid-priority-access }
  - { type: limits, target: capital-budgets }
summary: Revenue divided by attendance; the number operators watch most closely after the attendance figure itself.
tags: [business, revenue, per-capita, retail]
visuals: [formula, chart]
interactive_idea: "A guest-day receipt: toggle ticket tier, a Lightning Lane purchase, two meals and a plush, and watch per-cap split into admissions and in-park spend."
sources: [six-flags-investor-relations, sec-edgar-disney-10k-filings, disney-investor-relations, aecom-theme-index]
confidence: high
---
> **Formula** $\text{per cap} = \dfrac{\text{park revenue}}{\text{attendance}} = \text{admissions per cap} + \text{in-park per cap}$
> where
> - park revenue is everything paid at or for the park in the period, usually a quarter or year
> - attendance is the count of guest visits in the same period
> - admissions per cap is ticket and pass revenue per visit, net of discounts
> - in-park per cap is food, merchandise, games, parking and paid add-ons per visit

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: where a guest-day's spend goes at a regional park",
  "width": 300, "height": 130,
  "data": {"values": [
    {"bucket": "Admission", "share": 55}, {"bucket": "Food and drink", "share": 20},
    {"bucket": "Merchandise", "share": 12}, {"bucket": "Parking, games, add-ons", "share": 13}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "bucket", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "share", "type": "quantitative", "title": "Share of spend, percent"}
  }
}
```

Per-capita spending, or per cap, is what the average guest pays per visit. Operators split it into admissions per cap, what the ticket earned after discounts and passes, and in-park per cap, what the guest added once inside: meals, drinks, merchandise, parking, games and paid line-skipping. Public operators such as Six Flags report both as headline metrics beside attendance, and Disney's annual filings explain changes in Experiences revenue in terms of attendance and guest spending.

The number matters because attendance is capped by capacity and calendar, while per cap is not. Every extra dollar per guest flows almost straight to margin, so parks design for it: [food and retail placement](../masterplanning/food-and-retail-placement.md) puts shops at ride exits, menus and merchandise are themed to the land, and add-ons such as [paid priority access](../human-factors/paid-priority-access.md) and photo passes sell convenience. Merchandise also works as a memory cue, see [souvenirs and memory cues](../human-factors/souvenirs-and-memory-cues.md).

Per cap and length of stay compound at resorts: a guest who stays three nights buys more meals and more tickets. The illustrative split above varies widely between regional and destination parks; use the operators' filings for real numbers.

## Explore further
- `six-flags-investor-relations` — Six Flags Entertainment Corporation Investor Relations, which reports attendance and per-capita spending as headline metrics
- `sec-edgar-disney-10k-filings` — Walt Disney Co 10-K filings on SEC EDGAR, the primary source for Experiences segment revenue drivers
- `disney-investor-relations` — The Walt Disney Company Investor Relations, quarterly results and shareholder letters
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index, the attendance denominator
