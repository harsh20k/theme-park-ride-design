---
id: weather-policies
title: Weather & Lightning Policies
land: safety-standards
level: beginner
abstraction: concept
parent: operations-safety
children: []
relations:
  - { type: applies-to, target: train-mass-and-weather }
  - { type: applies-to, target: rain-and-weather-design }
  - { type: applies-to, target: downtime-and-availability }
  - { type: applies-to, target: gondolas-and-skyrides }
  - { type: applies-to, target: observation-wheel }
summary: Written rules for when wind, lightning, rain, heat or cold close a ride, and who decides.
tags: [weather, lightning, wind, closures, procedures]
visuals: [mermaid]
interactive_idea: "Feed the widget a live-style weather feed and see which rides on a sample park map close, pause or keep running under their written limits."
sources: [nws-lightning-safety, hse-hsg175, astm-f770-operations, wikipedia-the-smiler]
confidence: high
---
```mermaid
flowchart TD
  W["Weather input: radar, lightning detection, anemometer, temperature"] --> L{"Lightning within the park's radius?"}
  L -- yes --> C1["Close outdoor and tall rides, clear queues, wait after last strike"]
  L -- no --> V{"Wind above the manufacturer's limit?"}
  V -- yes --> C2["Close high and exposed rides first"]
  V -- no --> R{"Rain, ice or heat beyond limits?"}
  R -- yes --> C3["Pause or adjust: wet brakes, slick platforms, hot restraints"]
  R -- no --> G["Run, keep monitoring"]
```

Lightning is the clearest. The US National Weather Service advice is blunt: if you can hear thunder you are close enough to be struck, and outdoor activity should stop until roughly thirty minutes after the last thunder. Parks translate this into detection systems and a closure radius that empties tall steel rides, lifts, towers and open queues, and a timed all-clear.

Wind comes from the manufacturer. Every ride manual states operating wind limits, and the UK's HSG175 reminds controllers to follow them and to anchor rides accordingly. Tall and exposed attractions such as [observation wheels](../ride-systems/observation-wheel.md) and [gondolas and skyrides](../ride-systems/gondolas-and-skyrides.md) close first, and a coaster train that runs light can stall in a headwind, a theme explored under [train mass and weather](../ride-engineering/train-mass-and-weather.md); reports on the 2015 Smiler incident describe the empty test train stalling after a gust before the fatal override. Rain, ice and heat add limits of their own.

The rules name who calls it, usually a duty manager with a weather feed, and how reopening is verified. Good policies are visible to guests and are part of the trade-off with [downtime and availability](../operations-business/downtime-and-availability.md), while [rain and weather design](../sensory-environment/rain-and-weather-design.md) decides how pleasant waiting out a storm can be.

## Explore further
- `nws-lightning-safety` — National Weather Service: Lightning safety tips and resources
- `hse-hsg175` — HSE HSG175: Fairgrounds and amusement parks, guidance on safe practice
- `astm-f770-operations` — ASTM F770 Ownership, Operation, Maintenance, and Inspection of Amusement Rides
