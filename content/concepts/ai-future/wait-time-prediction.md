---
id: wait-time-prediction
title: Wait-Time Prediction
land: ai-future
level: intermediate
abstraction: concept
parent: ai-in-operations
children: []
relations:
  - { type: applies-to, target: wait-time-data-and-apps }
  - { type: applies-to, target: perceived-vs-actual-wait }
  - { type: applies-to, target: wait-time-estimation }
  - { type: applies-to, target: queueing-theory }
  - { type: enables, target: personalization }
summary: Forecasting queue lengths from years of posted and measured waits, calendar features and daily validation.
tags: [forecasting, queues, data, apps, statistics]
visuals: [chart]
interactive_idea: "Pick a ride and a date; the widget overlays last year's same-weekday curve, the forecast, and lets you log an 'actual' wait to see the error."
sources: [touringplans-evaluate-crowd-calendar-2015, input-wait-time-trackers-2022, aims-pinn-wait-times-2026]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: posted vs actual wait across a park day",
  "width": 300, "height": 150,
  "data": {"values": [
    {"hour": 9, "series": "Posted", "min": 20}, {"hour": 11, "series": "Posted", "min": 60},
    {"hour": 13, "series": "Posted", "min": 75}, {"hour": 15, "series": "Posted", "min": 65},
    {"hour": 17, "series": "Posted", "min": 45}, {"hour": 19, "series": "Posted", "min": 30},
    {"hour": 9, "series": "Actual", "min": 15}, {"hour": 11, "series": "Actual", "min": 48},
    {"hour": 13, "series": "Actual", "min": 62}, {"hour": 15, "series": "Actual", "min": 55},
    {"hour": 17, "series": "Actual", "min": 40}, {"hour": 19, "series": "Actual", "min": 28}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "hour", "type": "quantitative", "title": "Hour of day"},
    "y": {"field": "min", "type": "quantitative", "title": "Minutes"},
    "color": {"field": "series", "type": "nominal", "title": null}
  }
}
```

Wait-time prediction is forecasting, not magic. Third-party services pull the posted waits that parks publish in their apps, store years of them, and fit models on calendar features: weekday, season, school holidays, park hours, special events. TouringPlans, which has collected millions of waits, builds its crowd calendar from posted times at a set of popular rides between 10am and 5pm, maps each ride's average to a 1 to 10 scale, then checks every day's prediction against what was observed. It reported being within one index point 78% of the time and within two points 90% of the time in 2015.

Two things complicate it. First, posted waits and real waits differ; TouringPlans' Len Testa has said posted times at some rides are overestimated about three quarters of the time, which is why apps ask users to time their own queue. That gap links to [perceived versus actual wait](../human-factors/perceived-vs-actual-wait.md). Second, breakdowns, weather and schedule changes are not forecastable the day before. Academic work now models waits as a Markov process calibrated with physics-informed neural networks, but that remains simulation-only. Parks use the same signals for [wait-time estimation](../operations-business/wait-time-estimation.md) and to feed [virtual queues](../human-factors/virtual-queues.md) and [itinerary apps](../operations-business/wait-time-data-and-apps.md).

## Explore further
- `touringplans-evaluate-crowd-calendar-2015` — How We Evaluate Our Crowd Calendar
- `input-wait-time-trackers-2022` — Disney World's system for predicting ride wait times is a joke
- `aims-pinn-wait-times-2026` — Physics-informed stochastic models for theme park ride waiting times
