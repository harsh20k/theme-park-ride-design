---
id: launched-coasters
title: Launched Coasters
land: ride-systems
level: beginner
abstraction: concept
parent: roller-coasters
children: [lsm-lim-launch]
relations:
  - { type: contrasts-with, target: early-coasters }
  - { type: applies-to, target: g-force-basics }
  - { type: limits, target: dispatch-interval }
summary: A launched coaster accelerates its train along a flat section in a few seconds instead of hauling it up a lift hill, using magnets, hydraulics or compressed air.
tags: [ride-systems, coasters, launch, sample-content]
visuals:
  - { type: chart, title: "Launch vs chain lift, speed over time", alt: "Line chart of train speed against time, a launch reaching 100 km/h in 2.5 seconds versus a chain lift crawling at 8 km/h for 25 seconds before the first drop" }
interactive_idea: null
sources:
  - { title: "Roller Coaster Database (RCDB)", author: "Duane Marden", url: "https://rcdb.com" }
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
confidence: high
---

```chart
%% title: Launch vs chain lift, speed over time | alt: Line chart of train speed against time, a launch reaching 100 km/h in 2.5 seconds versus a chain lift crawling at 8 km/h for 25 seconds before the first drop
{
  "mark": { "type": "line", "point": true },
  "data": { "values": [
    { "t": 0, "speed": 0, "system": "Launch" },
    { "t": 2.5, "speed": 100, "system": "Launch" },
    { "t": 10, "speed": 100, "system": "Launch" },
    { "t": 30, "speed": 100, "system": "Launch" },
    { "t": 0, "speed": 0, "system": "Chain lift" },
    { "t": 2, "speed": 8, "system": "Chain lift" },
    { "t": 25, "speed": 8, "system": "Chain lift" },
    { "t": 30, "speed": 100, "system": "Chain lift" }
  ] },
  "encoding": {
    "x": { "field": "t", "type": "quantitative", "title": "Time (s)" },
    "y": { "field": "speed", "type": "quantitative", "title": "Speed (km/h)" },
    "color": { "field": "system", "type": "nominal", "title": "" }
  }
}
```

Most [roller coasters](../ride-systems/roller-coasters.md) earn their speed slowly, clanking up a lift hill for half a minute. A launched coaster skips the climb. The train sits on a flat straight, then a launch system shoves it to full speed in a few seconds, and gravity takes over from there.

Three launch technologies dominate. Linear electric motors, covered under [LSM and LIM launch](../ride-systems/lsm-lim-launch.md), use magnetic fields and have become the industry default. Hydraulic launches store energy in pressurised accumulators and release it through a winch and cable; they set the tallest and fastest records in the 2000s. Pneumatic launches use compressed air. All three deliver a sustained push that riders feel as a surge, which makes [g-force basics](../ride-engineering/g-force-basics.md) the first thing a designer checks.

Launches change operations too. The launch track must be empty before the next train fires, and some systems need time to recharge, which puts a floor under the [dispatch interval](../operations-business/dispatch-interval.md).

## Explore further
- [LSM & LIM Launch](../ride-systems/lsm-lim-launch.md) — how magnets push a train with nothing touching it.
- [Dispatch Interval](../operations-business/dispatch-interval.md) — why launch recharge time matters for capacity.
