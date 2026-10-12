---
id: maintenance-and-lifecycle
title: Maintenance & Lifecycle
land: operations-business
level: intermediate
abstraction: super-concept
parent: operations-business
children: [preventive-maintenance, ride-lifecycle, retheming-and-overlays, retirement-and-relocation, spare-parts-and-obsolescence]
relations:
  - { type: applies-to, target: maintenance-programs }
  - { type: applies-to, target: fatigue }
  - { type: enables, target: downtime-and-availability }
  - { type: applies-to, target: capital-budgets }
  - { type: applies-to, target: figure-reliability }
summary: A ride is a machine with a service life; keeping it running, renewing it and eventually replacing it is a business in itself.
tags: [operations, maintenance, lifecycle, reliability]
visuals: [mermaid]
interactive_idea: "Scrub a 30-year timeline of one coaster: watch annual maintenance cost rise, a mid-life retrack, a retheme, and the decision point where replacement beats repair."
sources: [hersheypark-skyrush-winter-maintenance, ptc-roller-coaster-car-winter-maintenance, wikipedia-phoenix-roller-coaster]
confidence: high
---
```mermaid
flowchart LR
  A["Commission<br/>year 0"] --> B["Daily and seasonal<br/>preventive maintenance"]
  B --> C["Mid-life refurbishment<br/>new trains, retrack, repaint"]
  C --> D{"Still earning<br/>its keep?"}
  D -- yes --> E["Retheme or overlay<br/>new story, same hardware"]
  E --> B
  D -- no --> F["Retire, sell<br/>or relocate"]
  G["Spare parts and<br/>obsolescence"] -. pressure .-> D
```

Maintenance and lifecycle is the long game of park operations. On opening day a ride is new and reliable; from then on it is a machine wearing out under millions of load cycles, weather and sun. Keeping it safe and available is the job of [preventive maintenance](../operations-business/preventive-maintenance.md), the daily checks and off-season teardowns that catch wear before it becomes a failure.

Over decades the questions change. The [ride lifecycle](../operations-business/ride-lifecycle.md) runs from commissioning through mid-life refurbishment, when trains, track sections, control systems and show scenes are renewed. A [retheme or overlay](../operations-business/retheming-and-overlays.md) can give old hardware a new story at a fraction of the cost of a new ride. Eventually [retirement and relocation](../operations-business/retirement-and-relocation.md) decide whether the ride is scrapped, sold or moved to another park. All the while [spare parts and obsolescence](../operations-business/spare-parts-and-obsolescence.md) make old rides harder to keep alive.

Designers shape every stage. Choices about materials, the [fatigue](../ride-engineering/fatigue.md) life of structures, access for inspection and the reliability of show figures set the maintenance bill for thirty years, which is why operators read drawings with the night shift in mind.

## Explore further
- `hersheypark-skyrush-winter-maintenance` — Behind the Scenes of Winter Maintenance on Skyrush
- `ptc-roller-coaster-car-winter-maintenance` — Roller Coaster Car Winter Maintenance
- `wikipedia-phoenix-roller-coaster` — Phoenix (roller coaster)
