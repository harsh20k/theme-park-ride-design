---
id: decision-fatigue
title: Decision Fatigue
land: human-factors
level: beginner
abstraction: concept
parent: behavior-and-decision
children: []
relations:
  - { type: applies-to, target: wait-time-data-and-apps }
  - { type: causes, target: balking-and-reneging }
  - { type: applies-to, target: reservation-era }
  - { type: limits, target: length-of-stay }
  - { type: applies-to, target: personalization }
summary: Every choice costs a little willpower, and by mid-afternoon a park guest has spent most of it.
tags: [psychology, decisions, fatigue, apps]
visuals: [chart]
interactive_idea: "A day-clock that tallies each choice a family makes from a sample itinerary and shows the running 'decision budget'."
sources: [vohs-making-choices-impairs-self-control-2008, thaler-sunstein-nudge]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: choices pile up over a park day while patience drains",
  "width": 300, "height": 150,
  "data": {"values": [
    {"hour": 9, "choices": 5, "patience": 100}, {"hour": 11, "choices": 22, "patience": 80},
    {"hour": 13, "choices": 45, "patience": 55}, {"hour": 15, "choices": 70, "patience": 35},
    {"hour": 17, "choices": 95, "patience": 20}, {"hour": 19, "choices": 115, "patience": 12}
  ]},
  "layer": [
    {"mark": {"type": "line", "point": true}, "encoding": {"x": {"field": "hour", "type": "quantitative", "title": "Hour of day"}, "y": {"field": "choices", "type": "quantitative", "title": "Cumulative choices"}}},
    {"mark": {"type": "line", "strokeDash": [4, 3]}, "encoding": {"x": {"field": "hour", "type": "quantitative"}, "y": {"field": "patience", "type": "quantitative", "title": "Patience index"}}}
  ]
}
```

Decision fatigue is the idea that making choices draws on a limited mental resource, so after a long run of decisions people get worse at the next one: they persist less, go for the default, or avoid choosing at all. Kathleen Vohs, Roy Baumeister and colleagues showed this in 2008 with people who made many small product choices and then gave up faster on hard tasks. Later research has debated how large and reliable the effect is, so treat the mechanism as useful but the numbers as uncertain.

A park day is a choice marathon: which land, which line, which snack, whether to buy the lightning pass, whether to wait or walk. By late afternoon families argue over trivia and children melt down, a pattern every operator recognises. [Perceived waits](../human-factors/perceived-vs-actual-wait.md) also feel longer when the guest is choice-depleted.

Design can lower the cost. Clear [wayfinding](../human-factors/wayfinding.md) removes navigation choices. Good defaults in [park apps](../operations-business/wait-time-data-and-apps.md) suggest the next ride instead of listing forty. The move toward [reservations](../history/reservation-era.md) and [personalised itineraries](../ai-future/personalization.md) is partly a bet that guests will pay to have decisions made for them.

## Explore further
- `vohs-making-choices-impairs-self-control-2008` — Making choices impairs subsequent self-control
- `thaler-sunstein-nudge` — Nudge (book)
