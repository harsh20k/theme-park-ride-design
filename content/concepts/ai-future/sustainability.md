---
id: sustainability
title: Sustainability & Energy
land: ai-future
level: intermediate
abstraction: concept
parent: futures-and-ethics
children: []
relations:
  - { type: applies-to, target: utilities-and-central-plant }
  - { type: applies-to, target: parking-and-transit }
  - { type: applies-to, target: shade-and-microclimate }
  - { type: applies-to, target: energy-conversion }
  - { type: applies-to, target: capital-budgets }
  - { type: applies-to, target: site-construction }
summary: Published climate targets now shape how parks are powered, built and operated, from solar lots to electric bus fleets.
tags: [sustainability, energy, climate, solar, construction]
visuals: [chart]
interactive_idea: "Plan a new land's energy: add rides, chillers, a solar canopy and a battery; a bar shows the share of load covered on a hot July afternoon versus a mild March morning."
sources: [disney-impact-environmental-goals, disney-2030-environmental-goals-press-2020, comcast-epic-universe-sustainability-2025, blooloop-merlin-sustainability-2024]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Disney Scope 1 and 2 emissions cut vs 2019: 2030 target and reported progress (Disney Impact, FY2025)",
  "width": 300, "height": 110,
  "data": {"values": [
    {"item": "2030 target", "percent": 46.2},
    {"item": "Reported progress, end FY2025", "percent": 36}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "item", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "percent", "type": "quantitative", "title": "Percent reduction", "scale": {"domain": [0, 50]}}
  }
}
```

Parks are energy-hungry places: launch coasters, chillers, pumps, kitchens, lighting and a fleet of buses. Since about 2020 the big operators have put numbers on the table. Disney's 2030 goals, validated by the Science Based Targets initiative, include cutting absolute Scope 1 and 2 emissions 46.2% from a 2019 baseline, using 100% zero-carbon electricity, designing new construction to near net zero, and zero waste to landfill at owned parks; it reported 36% progress on the emissions cut at the end of fiscal 2025. Universal's Epic Universe, opened in 2025, earned LEED for Communities Platinum, runs three on-site solar installations totalling 3.7 MW, charges an electric bus fleet from a floating array and battery store, and kept 535 acres of wetland. Merlin opened LEGOLAND Windsor's Woodland Village in 2024 as its first operationally carbon-neutral accommodation and has invested in energy projects across its parks.

For designers the consequences are concrete. The [central plant](../masterplanning/utilities-and-central-plant.md) and [parking and transit](../masterplanning/parking-and-transit.md) become energy assets, not just infrastructure. [Shade and microclimate](../sensory-environment/shade-and-microclimate.md) design cuts cooling load. Ride [energy conversion](../ride-engineering/energy-conversion.md) choices, lift versus launch, regenerative braking, show up in the [capital budget](../operations-business/capital-budgets.md) and the carbon ledger at once.

## Explore further
- `disney-impact-environmental-goals` — Environmental Goals (Disney Impact)
- `disney-2030-environmental-goals-press-2020` — The Walt Disney Company Sets 2030 Environmental Goals
- `comcast-epic-universe-sustainability-2025` — Universal Epic Universe: Innovation and Sustainability Achievement
- `blooloop-merlin-sustainability-2024` — greenloop: Dare Ilori on Merlin Entertainments' sustainability strategy
