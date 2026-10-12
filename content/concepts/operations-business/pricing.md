---
id: pricing
title: Pricing & Dynamic Pricing
land: operations-business
level: intermediate
abstraction: concept
parent: business-and-finance
children: []
relations:
  - { type: applies-to, target: paid-priority-access }
  - { type: enables, target: capacity-vs-demand }
  - { type: applies-to, target: economic-inclusion }
  - { type: applies-to, target: choice-architecture }
  - { type: applies-to, target: reservation-era }
summary: Date-based ticket tiers and paid line-skipping products price demand by day and by ride instead of one flat gate price.
tags: [business, pricing, dynamic-pricing, revenue]
visuals: [chart]
interactive_idea: "A calendar heat map where you set tier prices; a demand model shifts visits from peak to value days and reports revenue and average crowd level."
sources: [mouseplanet-seasonal-pricing-2016, wikipedia-lightning-lane, disney-lightning-lane-official, universal-express-pass-official]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "One-day adult Magic Kingdom ticket tiers introduced Feb 28, 2016 (MousePlanet)",
  "width": 300, "height": 130,
  "data": {"values": [
    {"tier": "Value", "price": 105}, {"tier": "Regular", "price": 110}, {"tier": "Peak", "price": 124}
  ]},
  "mark": "bar",
  "encoding": {
    "x": {"field": "tier", "type": "nominal", "title": "Date tier", "sort": null},
    "y": {"field": "price", "type": "quantitative", "title": "Price, USD"}
  }
}
```

For most of their history theme parks sold one gate price for any day. That changed on February 28, 2016, when Disneyland and Walt Disney World moved one-day tickets to Value, Regular and Peak tiers set by calendar date; a Magic Kingdom day cost $105, $110 or $124 depending on the date, and Disneyland's cheapest day actually fell from $99 to $95. The aim was to flatten demand: cheaper quiet days pull visits away from crowded ones, which is the [capacity vs demand](../operations-business/capacity-vs-demand.md) curve managed by price.

The second layer prices time inside the park. Universal's Express Pass and Disney's Lightning Lane, which replaced the free FastPass system when Genie+ launched on October 19, 2021 and was renamed Lightning Lane Multi Pass on July 24, 2024, sell shorter waits per ride. Prices for these vary by date and by attraction, true dynamic pricing. The guest-side psychology is covered under [paid priority access](../human-factors/paid-priority-access.md).

The trade-offs are real. Tiered pricing raises revenue per visit and smooths crowds, but it moves the park toward a two-speed experience and raises questions of [economic inclusion](../human-factors/economic-inclusion.md). The menu of passes, add-ons and reservations is a [choice architecture](../human-factors/choice-architecture.md) problem; the [reservation era](../history/reservation-era.md) traces how it arrived.

## Explore further
- `mouseplanet-seasonal-pricing-2016` — Disney Parks adopt seasonal pricing for one-day tickets
- `wikipedia-lightning-lane` — Lightning Lane
- `disney-lightning-lane-official` — Disney Genie and Lightning Lane (official page)
- `universal-express-pass-official` — Universal Express Pass (official page)
