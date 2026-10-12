---
id: spare-parts-and-obsolescence
title: Spare Parts & Obsolescence
land: operations-business
level: advanced
abstraction: concept
parent: maintenance-and-lifecycle
children: []
relations:
  - { type: limits, target: ride-lifecycle }
  - { type: applies-to, target: ride-control-systems }
  - { type: applies-to, target: arrow-dynamics }
  - { type: causes, target: downtime-and-availability }
  - { type: applies-to, target: figure-reliability }
summary: Old rides die of missing parts; discontinued controllers and vanished manufacturers force retrofits or retirement.
tags: [operations, maintenance, obsolescence, supply-chain]
visuals: [mermaid]
interactive_idea: "An inventory dashboard for a 30-year-old coaster: each part shows stock, lead time and whether the original maker still exists; watch risk climb as you age the ride."
sources: [ptc-roller-coaster-car-winter-maintenance, hersheypark-skyrush-winter-maintenance, blooloop-supplier-directory]
confidence: medium
---
```mermaid
flowchart LR
  A["Part wears out"] --> B{"Original maker<br/>still supplies it?"}
  B -- yes --> C["Order, hold stock<br/>plan lead time"]
  B -- no --> D{"Can a third party<br/>reverse-engineer it?"}
  D -- yes --> E["Custom machining<br/>or re-cast, then re-certify"]
  D -- no --> F["Redesign the subsystem<br/>new trains, new PLC"]
  F -. cost approaches .-> G["Retire or replace ride"]
```

A ride is only as alive as its supply chain. Wheels, bearings, pins and brake pads are consumed every season, so parks hold stock against manufacturer lead times. The deeper problem is obsolescence: parts nobody makes any more. Ride manufacturers merge or go out of business, a famous case being Arrow Dynamics, whose bankruptcy left many parks maintaining Arrow coasters without the original supplier; see [Arrow Dynamics](../history/arrow-dynamics.md). Control hardware ages faster still, because industrial controllers and sensors are discontinued on electronics timescales.

Operators have a ladder of responses. First, over-order while the part is available. Second, find a specialist to reverse-engineer it, as several firms now do for orphaned coaster trains, after which the part must be re-certified. Third, redesign the subsystem: replacing an entire train fleet or control system is common mid-life work, which is why [ride control systems](../safety-standards/ride-control-systems.md) get upgraded even when the track is fine. When redesign costs approach a new ride, the [ride lifecycle](../operations-business/ride-lifecycle.md) ends.

Show hardware has the same problem with projectors, media servers and animatronic actuators, see [figure reliability](../show-technology/figure-reliability.md). Designers help by specifying standard industrial components; parks' exact stocking practices are proprietary and not confirmed here.

## Explore further
- `ptc-roller-coaster-car-winter-maintenance` — Roller Coaster Car Winter Maintenance
- `hersheypark-skyrush-winter-maintenance` — Behind the Scenes of Winter Maintenance on Skyrush
- `blooloop-supplier-directory` — blooloop supplier directory
