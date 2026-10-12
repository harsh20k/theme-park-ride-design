---
id: defunct-parks
title: Defunct Parks & Failures
land: history
level: beginner
abstraction: concept
parent: industry-evolution
children: []
relations:
  - { type: example-of, target: seasonality-and-events }
  - { type: example-of, target: capital-budgets }
  - { type: example-of, target: site-selection }
  - { type: example-of, target: ride-lifecycle }
  - { type: example-of, target: feasibility-and-early-costing }
  - { type: applies-to, target: podcasts-and-channels }
summary: Freedomland, Six Flags New Orleans and Hard Rock Park show the usual killers of seasons, debt, bad ground and weather.
tags: [history, defunct, failures, freedomland, six-flags-new-orleans, hard-rock-park, defunctland]
visuals: [mermaid, chart]
interactive_idea: "A failure-mode matrix: tick the causes (seasonal, over-budget, flood, weak draw) and see which closed parks match."
sources: [wikipedia-freedomland, wikipedia-six-flags-new-orleans, wikipedia-hard-rock-park, youtube-defunctland, wikipedia-defunctland]
confidence: high
---
```mermaid
flowchart LR
    F["Freedomland 1960-1964<br/>Bronx, seasonal, marshland,<br/>$65M over estimate"] --> X["Bankrupt"]
    N["Six Flags New Orleans 2000-2005<br/>Katrina floods it 4-7 ft<br/>for over a month"] --> Y["Total loss, demolished 2024-2026"]
    H["Hard Rock Park 2008<br/>opens April, bankrupt September"] --> Z["Freestyle Music Park 2009,<br/>closed for good"]
```

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Years open before closure (Wikipedia)",
  "width": 300, "height": 110,
  "data": {"values": [{"park": "Freedomland U.S.A.", "y": 5}, {"park": "Six Flags New Orleans", "y": 6}, {"park": "Hard Rock Park", "y": 2}]},
  "mark": "bar",
  "encoding": {"y": {"field": "park", "type": "nominal", "title": null}, "x": {"field": "y", "type": "quantitative", "title": "Seasons operated"}}
}
```

Parks fail in predictable ways; three cases cover most of them. Freedomland U.S.A. opened in the Bronx on June 19, 1960, designed by Disneyland planner C. V. Wood as a map of the United States. It opened only three or four months a year, cost about $65 million against a far lower estimate, sat on marshland that damaged its buildings, and lacked a clear draw. It went bankrupt days after closing in September 1964: a lesson in [seasonality](../operations-business/seasonality-and-events.md), [site selection](../masterplanning/site-selection.md) and [feasibility and early costing](../design-process/feasibility-and-early-costing.md) all at once.

Six Flags New Orleans opened as Jazzland in 2000. Its last day was August 21, 2005; Hurricane Katrina then left it under four to seven feet of brackish water for over a month. Six Flags declared it a total loss, and the ruin was cleared by 2026, an extreme end to a [ride lifecycle](../operations-business/ride-lifecycle.md).

Hard Rock Park in Myrtle Beach opened in April 2008 and was bankrupt by September; a relaunch as Freestyle Music Park lasted one season. Over-ambitious [capital budgets](../operations-business/capital-budgets.md) in a recession did the rest. Defunctland, running since 2017, is the best-known chronicle of such stories and a staple of [podcasts and channels](../careers/podcasts-and-channels.md).

## Explore further
- `wikipedia-freedomland` — Freedomland U.S.A.
- `wikipedia-six-flags-new-orleans` — Six Flags New Orleans
- `wikipedia-hard-rock-park` — Hard Rock Park
- `youtube-defunctland` — Defunctland (YouTube)
