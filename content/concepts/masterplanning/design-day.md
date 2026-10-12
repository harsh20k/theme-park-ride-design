---
id: design-day
title: Design Day
land: masterplanning
level: intermediate
abstraction: sub-concept
parent: capacity-planning
children: []
relations:
  - { type: applies-to, target: seasonality-and-events }
  - { type: limits, target: capacity-vs-demand }
  - { type: enables, target: capital-budgets }
  - { type: applies-to, target: wait-time-estimation }
  - { type: contrasts-with, target: downtime-and-availability }
summary: The typical busy day a park is sized for, deliberately below the single busiest day.
tags: [capacity, attendance, peak-day, sizing]
visuals: [chart]
interactive_idea: "Drag a daily attendance curve and see the design day move as the average of the top 15 to 25 days."
sources: [theparkdb-peaking-theme-park, themedattraction-master-planning, pgav-designing-the-day]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: ranked daily attendance, design day sits below the peak",
  "width": 300, "height": 150,
  "layer": [
    {
      "data": {"values": [
        {"rank": 1, "guests": 62000}, {"rank": 5, "guests": 54000}, {"rank": 10, "guests": 50000},
        {"rank": 20, "guests": 45000}, {"rank": 40, "guests": 38000}, {"rank": 80, "guests": 30000},
        {"rank": 150, "guests": 24000}, {"rank": 250, "guests": 18000}, {"rank": 365, "guests": 9000}
      ]},
      "mark": {"type": "area", "line": true, "opacity": 0.4},
      "encoding": {
        "x": {"field": "rank", "type": "quantitative", "title": "Day rank, busiest first"},
        "y": {"field": "guests", "type": "quantitative", "title": "Guests"}
      }
    },
    {
      "data": {"values": [{"y": 48000, "label": "design day"}]},
      "mark": {"type": "rule", "strokeDash": [4, 4]},
      "encoding": {"y": {"field": "y", "type": "quantitative"}}
    }
  ]
}
```

The design day is the attendance figure a park is physically built for. It is not the record day. Planners usually take the average of the busiest 15 to 25 days of the year, which lands well below the peak, because sizing for the single biggest day would leave rides, paths and car parks half empty for most of the season. On days above it the park accepts long queues and may close its gates.

From the design day, planners estimate how many guests are inside at the peak hour. Analyses of Tokyo Disney Resort put that at roughly three quarters to four fifths of the day's total, with the design day itself near half a percent of annual attendance. That peak hour population is what drives [capacity planning](../masterplanning/capacity-planning.md): the number of ride seats per hour, restaurant seats, toilets and the width of walkways.

The concept is a bet on [seasonality](../operations-business/seasonality-and-events.md). A park with a flat calendar can design close to its peak; one with a 700 percent swing between winter and autumn, like Tokyo's, cannot. It also frames [wait time estimates](../operations-business/wait-time-estimation.md) and for the [capital budget](../operations-business/capital-budgets.md), since every extra guest per hour of capacity has a price.

## Explore further
- `theparkdb-peaking-theme-park` — Managing Extremes: Seasonality and Peaking
- `themedattraction-master-planning` — Theme Park Master Planning (Peter Alexander)
- `pgav-designing-the-day` — Designing the Day (PGAV Destinations)
