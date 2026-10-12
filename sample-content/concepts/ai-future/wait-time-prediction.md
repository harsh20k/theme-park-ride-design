---
id: wait-time-prediction
title: Wait-Time Prediction
land: ai-future
level: intermediate
abstraction: concept
parent: ai-in-operations
children: []
relations:
  - { type: applies-to, target: perceived-vs-actual-wait }
  - { type: part-of, target: ai-in-operations }
  - { type: applies-to, target: dispatch-interval }
summary: Models that estimate how long a guest joining the line now will actually wait, and why the posted number is often deliberately different.
tags: [sample-content, ai-future, forecasting, queue, wait-time]
visuals:
  - { type: chart, title: "Posted, predicted and actual wait over a day", alt: "Line chart with three series across a park day: posted wait, model-predicted wait and actual measured wait, with posted usually above actual" }
sources:
  - { title: "Forecasting: Principles and Practice", author: "Rob J. Hyndman and George Athanasopoulos", year: 2021, url: "https://otexts.com/fpp3/" }
  - { title: "The Psychology of Waiting Lines", author: "David Maister", year: 1985 }
confidence: medium
---

```chart
%% title: Posted, predicted and actual wait over a day | alt: Line chart with three series across a park day: posted wait, model-predicted wait and actual measured wait, with posted usually above actual
{
  "mark": "line",
  "data": { "values": [
    { "hour": 9, "series": "posted", "minutes": 10 }, { "hour": 9, "series": "predicted", "minutes": 8 }, { "hour": 9, "series": "actual", "minutes": 7 },
    { "hour": 10, "series": "posted", "minutes": 25 }, { "hour": 10, "series": "predicted", "minutes": 22 }, { "hour": 10, "series": "actual", "minutes": 20 },
    { "hour": 11, "series": "posted", "minutes": 45 }, { "hour": 11, "series": "predicted", "minutes": 38 }, { "hour": 11, "series": "actual", "minutes": 36 },
    { "hour": 12, "series": "posted", "minutes": 60 }, { "hour": 12, "series": "predicted", "minutes": 52 }, { "hour": 12, "series": "actual", "minutes": 55 },
    { "hour": 13, "series": "posted", "minutes": 70 }, { "hour": 13, "series": "predicted", "minutes": 61 }, { "hour": 13, "series": "actual", "minutes": 58 },
    { "hour": 14, "series": "posted", "minutes": 65 }, { "hour": 14, "series": "predicted", "minutes": 58 }, { "hour": 14, "series": "actual", "minutes": 54 },
    { "hour": 15, "series": "posted", "minutes": 55 }, { "hour": 15, "series": "predicted", "minutes": 50 }, { "hour": 15, "series": "actual", "minutes": 49 },
    { "hour": 16, "series": "posted", "minutes": 50 }, { "hour": 16, "series": "predicted", "minutes": 44 }, { "hour": 16, "series": "actual", "minutes": 47 },
    { "hour": 17, "series": "posted", "minutes": 40 }, { "hour": 17, "series": "predicted", "minutes": 33 }, { "hour": 17, "series": "actual", "minutes": 31 },
    { "hour": 18, "series": "posted", "minutes": 25 }, { "hour": 18, "series": "predicted", "minutes": 19 }, { "hour": 18, "series": "actual", "minutes": 17 }
  ] },
  "encoding": {
    "x": { "field": "hour", "type": "quantitative", "title": "Hour of day" },
    "y": { "field": "minutes", "type": "quantitative", "title": "Wait (minutes)" },
    "color": { "field": "series", "type": "nominal", "title": "" }
  }
}
```

The number on the sign at the queue entrance is a prediction, and three different numbers are in play. The actual wait is only known after a guest reaches the station; parks measure it with timed cards or app scans at entry and load. The predicted wait is what a model expects given the current line length, the attraction's [dispatch interval](../operations-business/dispatch-interval.md), time of day and recent history. The posted wait is what the park chooses to display, and it is often rounded up, because arriving early feels like a gift while arriving late feels like a broken promise. That gap is a direct use of [perceived versus actual wait](../human-factors/perceived-vs-actual-wait.md) psychology. Models range from queue length divided by capacity to learned forecasts that account for breakdowns and crowd flow across the park. They are one piece of the wider [AI in operations](../ai-future/ai-in-operations.md) toolkit, and a slow crew at the station turns a good forecast into a bad one within minutes.

## Explore further
- [Throughput Math](../operations-business/throughput-math.md) — the arithmetic every wait estimate starts from.
- [Waiting](../human-factors/waiting.md) — the guest experience the number is trying to manage.
