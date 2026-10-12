---
id: vehicle-suspension
title: Vehicle Suspension & Ride Comfort
land: ride-engineering
level: advanced
abstraction: concept
parent: vehicle-and-restraint-engineering
children: []
relations:
  - { type: limits, target: rough-rides }
  - { type: applies-to, target: wheels-and-bogies }
  - { type: applies-to, target: dynamic-loads }
  - { type: applies-to, target: wooden-coasters }
  - { type: applies-to, target: accessible-vehicles }
summary: Wheel compliance and pivoting bogies are a coaster's suspension; they decide smooth from rough.
tags: [suspension, comfort, bogies, vibration, wheels]
visuals: [mermaid]
interactive_idea: "Roll a car over a bumpy rail with stiff or soft wheels and fixed or pivoting bogies; a seat accelerometer trace shows the difference."
sources: [coaster101-wheel-design, pendrill-eager-jerk-snap-2020, wikipedia-great-coasters-international, wikipedia-wooden-roller-coaster]
confidence: medium
---
```mermaid
flowchart LR
  T["Track imperfection: joint, wear, flex"] --> W["Wheel tyre compresses"]
  W --> B["Bogie pivots and springs"]
  B --> F["Car frame"]
  F --> S["Seat and restraint padding"]
  S --> R["Rider's spine and head"]
  R --> P["Perceived smoothness"]
```

A coaster has no shock absorbers in the car sense, yet it has a suspension: a chain of compliances between rail and rider. The first link is the wheel tyre. Polyurethane squashes a little on every bump and gives it back, which is why Coaster101 calls it the smoother, slower compound and nylon the faster, harsher one. Guide wheels are spring-loaded against the rail, so small track errors are absorbed rather than passed on. Next come the bogies: wheel carriers that pivot so each set follows the rail independently, and articulated trains such as Great Coasters International's Millennium Flyers that steer through curves instead of shuffling on fixed axles. 

The target is not zero vibration but vibration at harmless frequencies. Pendrill and Eager note that body parts resonate at different frequencies, and those matching head and spine are the ones to avoid. Manufacturers publish little on how they tune stiffness and damping, so specifics are medium confidence.

On a [wooden coaster](../ride-systems/wooden-coasters.md) the flexing structure is part of the suspension too. The chain separates a [rough ride](../ride-engineering/rough-rides.md) from a glassy one, interacts with structural [dynamic loads](../ride-engineering/dynamic-loads.md), and sets how an [accessible vehicle](../human-factors/accessible-vehicles.md) is padded for riders who tolerate jolts poorly.

## Explore further
- `coaster101-wheel-design` — Coasters-101: Roller Coaster Wheel Design
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration
- `wikipedia-great-coasters-international` — Great Coasters International
