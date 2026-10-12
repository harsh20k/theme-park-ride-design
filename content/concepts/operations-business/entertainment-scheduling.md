---
id: entertainment-scheduling
title: Entertainment Scheduling
land: operations-business
level: intermediate
abstraction: concept
parent: park-operations
children: []
relations:
  - { type: applies-to, target: nighttime-spectaculars }
  - { type: enables, target: capacity-vs-demand }
  - { type: applies-to, target: parade-and-show-crowds }
  - { type: enables, target: length-of-stay }
  - { type: applies-to, target: attraction-mix }
summary: Shows, parades and character sets are scheduled to soak up crowds, flatten ride demand and keep guests in the park until closing.
tags: [operations, entertainment, scheduling, demand]
visuals: [chart]
interactive_idea: "Drag a parade start time across a ride-demand chart and watch the modelled queue at the nearest headline ride dip during the show."
sources: [maister-psychology-of-waiting-lines, popsci-touring-plans-wait-time-science-2017, disney-investor-relations]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: a parade at 15:00 pulls guests out of ride queues",
  "width": 300, "height": 140,
  "data": {"values": [
    {"hour": 12, "wait": 55}, {"hour": 13, "wait": 60}, {"hour": 14, "wait": 65},
    {"hour": 15, "wait": 35}, {"hour": 16, "wait": 50}, {"hour": 17, "wait": 45},
    {"hour": 18, "wait": 40}, {"hour": 19, "wait": 30}, {"hour": 20, "wait": 20}
  ]},
  "mark": {"type": "area", "line": true, "opacity": 0.4},
  "encoding": {
    "x": {"field": "hour", "type": "quantitative", "title": "Hour of day"},
    "y": {"field": "wait", "type": "quantitative", "title": "Posted wait at a headline ride, minutes"}
  }
}
```

Entertainment in a theme park is not only there to be enjoyed; it is a capacity tool. A parade is a show that holds ten thousand people still on the street for half an hour, which is ten thousand people not standing in a ride queue. Operations teams schedule parades, stage shows and character meet-and-greets at the times of day when ride demand is highest, so that the [capacity vs demand](../operations-business/capacity-vs-demand.md) curve flattens.

The schedule also shapes length of stay. A fireworks show at park close is the reason families stay for dinner and a last ride instead of leaving at five, which feeds [per-capita spending](../operations-business/per-capita-spending.md) and multi-day visits. Shows are cheap capacity, too: a 1,500-seat theatre running every 30 minutes handles 3,000 guests an hour at a fraction of a coaster's cost, which matters for the [attraction mix](../masterplanning/attraction-mix.md).

Scheduling has costs. Performers need rest cycles and weather calls, parade routes close paths for an hour, and the crowd released after a show arrives at nearby rides all at once, a bump planners call the parade dump. Forecasters such as Touring Plans model these effects; measured effects are not published, so the chart is illustrative.

## Explore further
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
- `disney-investor-relations` — The Walt Disney Company Investor Relations
