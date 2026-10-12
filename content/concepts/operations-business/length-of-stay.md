---
id: length-of-stay
title: Hotels, Resorts & Length of Stay
land: operations-business
level: intermediate
abstraction: concept
parent: business-and-finance
children: []
relations:
  - { type: applies-to, target: resort-integration }
  - { type: enables, target: per-capita-spending }
  - { type: applies-to, target: regional-vs-destination }
  - { type: applies-to, target: paid-priority-access }
  - { type: applies-to, target: parking-and-transit }
summary: Every extra night on property multiplies tickets, meals and merchandise, so resorts are built to keep guests from leaving.
tags: [business, hotels, resort, length-of-stay]
visuals: [chart]
interactive_idea: "Slide a family's trip from one day to five and watch park days, hotel nights, meals and total spend stack up, with an off-property comparison."
sources: [touringplans-lightning-lane-multi-pass-2024, sec-edgar-disney-10k-filings, disney-investor-relations]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: resort revenue per party grows with nights stayed",
  "width": 300, "height": 140,
  "data": {"values": [
    {"nights": 0, "cat": "tickets", "v": 500}, {"nights": 0, "cat": "food and retail", "v": 200}, {"nights": 0, "cat": "hotel", "v": 0},
    {"nights": 2, "cat": "tickets", "v": 1200}, {"nights": 2, "cat": "food and retail", "v": 700}, {"nights": 2, "cat": "hotel", "v": 800},
    {"nights": 4, "cat": "tickets", "v": 1800}, {"nights": 4, "cat": "food and retail", "v": 1400}, {"nights": 4, "cat": "hotel", "v": 1600}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "nights", "type": "ordinal", "title": "Nights on property"},
    "y": {"field": "v", "type": "quantitative", "title": "Spend per party, USD"},
    "color": {"field": "cat", "type": "nominal", "title": null}
  }
}
```

A day guest buys one ticket and a lunch. A resort guest buys four tickets, three hotel nights, a dozen meals and a bag of merchandise, and never visits a competitor. Length of stay is therefore the metric that turns a theme park into a resort business, and it is why Walt Disney World surrounded its parks with hotels and why Universal Orlando added its own hotel estate and a third park.

Operators pull guests on property with perks that are cheap to give and valuable to receive. At Walt Disney World, resort guests can book Lightning Lane Multi Pass selections seven days ahead, while other guests get three; early-entry windows and transport that makes a car unnecessary do the same job. Multi-day tickets are priced so the fourth and fifth days cost little, which stretches the trip. See [paid priority access](../human-factors/paid-priority-access.md) for the guest's side of these perks.

The design consequence is [resort integration](../masterplanning/resort-integration.md): hotels, transport and a dining district planned as one system, with [parking and transit](../masterplanning/parking-and-transit.md) that favours staying over driving. The same logic separates a [regional from a destination](../masterplanning/regional-vs-destination.md) park. Disney's filings discuss hotel occupancy and per-room spending as revenue drivers; the chart is illustrative.

## Explore further
- `touringplans-lightning-lane-multi-pass-2024` — Goodbye Genie+, Hello Lightning Lane Multi Pass
- `sec-edgar-disney-10k-filings` — Walt Disney Co 10-K filings (SEC EDGAR)
- `disney-investor-relations` — The Walt Disney Company Investor Relations
