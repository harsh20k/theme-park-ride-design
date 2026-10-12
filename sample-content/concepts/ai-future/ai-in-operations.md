---
id: ai-in-operations
title: AI in Operations
land: ai-future
level: intermediate
abstraction: super-concept
parent: null
children: [wait-time-prediction]
relations:
  - { type: applies-to, target: throughput-and-queueing }
summary: How parks turn ticket scans, sensor counts and weather into models that help decide staffing, virtual queue allocations and maintenance.
tags: [sample-content, ai-future, operations, forecasting, data]
visuals:
  - { type: mermaid, title: "Data sources to decisions", alt: "Flowchart from data sources such as scans, sensors and weather, through forecasting and anomaly models, to decisions about staffing, virtual queues and maintenance" }
sources:
  - { title: "Forecasting: Principles and Practice", author: "Rob J. Hyndman and George Athanasopoulos", year: 2021, url: "https://otexts.com/fpp3/" }
  - { title: "Theme Park Design & The Art of Themed Entertainment", author: "David Younger", year: 2016 }
confidence: medium
---

```mermaid
%% title: Data sources to decisions | alt: Flowchart from data sources such as scans, sensors and weather, through forecasting and anomaly models, to decisions about staffing, virtual queues and maintenance
flowchart LR
  S1[Ticket and app scans] --> M1[Demand forecast]
  S2[Queue sensors] --> M1
  S3[Weather and calendar] --> M1
  S4[Ride telemetry] --> M2[Anomaly detection]
  M1 --> D1[Staffing plan]
  M1 --> D2[Virtual queue allocation]
  M2 --> D3[Maintenance scheduling]
```

Running a park generates a huge amount of data: every ticket scan, app check-in, queue sensor and sensor on a ride vehicle. AI in operations is the practice of turning that stream into decisions. The first use is forecasting. Attendance depends on school holidays, weather, hotel bookings and what was popular last week, and a model that predicts it well lets the park schedule the right number of operators and food staff. The second use is allocation: virtual queue systems decide how many return slots to release each hour by predicting [throughput and queueing](../operations-business/throughput-and-queueing.md) for each attraction. The third is maintenance, where models watch vibration, temperature and cycle counts and flag parts before they fail. None of this replaces the ride control system or the operator; it sits above them, suggesting. The best-known guest-facing piece is [wait-time prediction](../ai-future/wait-time-prediction.md), and the honest limit is that a forecast is only as good as the [dispatch interval](../operations-business/dispatch-interval.md) the crew actually hits.

## Explore further
- [Wait-Time Prediction](../ai-future/wait-time-prediction.md) — the forecast guests see on the board.
- [Ride Control Systems](../safety-standards/ride-control-systems.md) — the layer AI advises but does not control.
