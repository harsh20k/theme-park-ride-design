---
id: wait-time-estimation
title: Wait Time Estimation
land: operations-business
level: intermediate
abstraction: concept
parent: throughput-and-queueing
children: []
relations:
  - { type: applies-to, target: explained-waits }
  - { type: enables, target: wait-time-prediction }
  - { type: applies-to, target: perceived-vs-actual-wait }
  - { type: enables, target: wait-time-data-and-apps }
  - { type: limits, target: balking-and-reneging }
summary: Parks measure waits with timed cards and sensors, then post numbers that are often rounded up on purpose.
tags: [operations, wait-time, measurement, posted-wait]
visuals: [mermaid]
interactive_idea: "Compare three estimators on the same simulated queue: head-count divided by throughput, a timed card, and a posted wait with a safety margin; see which drifts when the ride stops."
sources: [popsci-touring-plans-wait-time-science-2017, input-wait-time-trackers-2022, wikipedia-littles-law]
confidence: high
---
```mermaid
flowchart TD
  A["Head count or sensor count<br/>people in queue"] --> C["Little's law<br/>count divided by throughput"]
  B["Timed card<br/>handed to a guest at the entrance"] --> D["Actual elapsed wait"]
  C --> E["Operator judgement<br/>plus margin"]
  D --> E
  E --> F["Posted wait<br/>app and sign"]
  F --> G["Guest decision<br/>join, skip, or come back"]
  G -. changes arrivals .-> A
```

A posted wait is an estimate, not a measurement. The classic method is the timed card: a cast member hands a laminated card to a guest entering the line, and the time it takes to reach the merge point becomes the posted number. A faster method uses [Little's law](../operations-business/littles-law.md): count the people in the switchbacks and divide by the ride's throughput. Modern parks add sensors, app pings and wearable scans to automate the count.

Parks then round. Independent trackers have found that posted times at Disney tend to run higher than actual waits most of the time. Len Testa of Touring Plans has said that for some rides Disney's posted times are overestimated about three-quarters of the time and underestimated about a quarter. A high posting steers guests elsewhere, which is useful for crowd balancing, and it makes the real wait feel like a pleasant surprise, a point that pairs with [perceived vs actual wait](../human-factors/perceived-vs-actual-wait.md).

Third-party services such as Touring Plans and Thrill Data collect posted numbers every few minutes and compare them with crowd-sourced timings. Their forecasts feed [wait-time apps](../operations-business/wait-time-data-and-apps.md) and the machine-learning methods described under [wait time prediction](../ai-future/wait-time-prediction.md).

## Explore further
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
- `input-wait-time-trackers-2022` — The amateur data scientists tracking Disney World's lines
- `wikipedia-littles-law` — Little's law
