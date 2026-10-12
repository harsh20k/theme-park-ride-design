---
id: digital-twins
title: Digital Twins
land: ai-future
level: intermediate
abstraction: concept
parent: ai-in-design
children: []
relations:
  - { type: enables, target: predictive-maintenance }
  - { type: applies-to, target: testing-and-commissioning }
  - { type: applies-to, target: downtime-and-availability }
  - { type: applies-to, target: sensors-and-switches }
  - { type: applies-to, target: ride-lifecycle }
summary: A living model of a specific attraction, kept in step with the real thing by data.
tags: [digital-twin, simulation, maintenance, sensors, lifecycle]
visuals: [mermaid]
interactive_idea: "Toggle a bearing's simulated wear and watch the twin's predicted vibration diverge from the live sensor trace until an alert fires."
sources: [siemens-simcenter-ferris-wheel-2025, disney-q3-fy2026-shareholder-letter, iaapa-funworld-ride-condition-monitoring-2025]
confidence: medium
---
```mermaid
flowchart LR
  subgraph Design["Design twin before build"]
    CAD["CAD and layout"] --> SIM["Physics and crowd simulation"]
    SIM --> REV["Design review"]
  end
  subgraph Ops["Operational twin after opening"]
    RIDE["Physical ride"] --> SEN["Sensors"]
    SEN --> MOD["Model estimates hidden state"]
    MOD --> ALERT["Maintenance and ops decisions"]
    ALERT --> RIDE
  end
  REV --> RIDE
```

A digital twin is a living model of a specific physical thing, kept in step with it by data. Two different twins share the name. A design twin exists before anything is built: a simulation used to test throughput, sightlines or loads. An operational twin runs after opening: sensors on the ride stream into a model that estimates the state of parts you cannot see.

The clearest small example is Siemens' 2025 Simcenter Amesim model of an Oktoberfest Ferris wheel: CAD imported for mass and inertia, an electric motor and gearbox, a state-chart controller, and a design-of-experiments to pick rotation speed and loading strategy. Scale that up and you get what Disney described to shareholders in August 2026: AI-powered digital twins used to design and stress-test new attractions.

Operational twins pair with [predictive maintenance](../ai-future/predictive-maintenance.md) and the data habits behind [downtime and availability](../operations-business/downtime-and-availability.md). They also tighten [testing and commissioning](../design-process/testing-and-commissioning.md), because a commissioned ride can be compared with its own model. Vendor case studies often blur marketing and measurement, so confidence is medium. A twin is only as good as its [sensors and switches](../ride-engineering/sensors-and-switches.md).

## Explore further
- `siemens-simcenter-ferris-wheel-2025` — Simulating fun: Exploring the Oktoberfest ferris wheel with Simcenter Amesim
- `disney-q3-fy2026-shareholder-letter` — The Walt Disney Company Q3 FY2026 Shareholder Letter
- `iaapa-funworld-ride-condition-monitoring-2025` — Safety Corner: Amusement Ride Condition Monitoring
