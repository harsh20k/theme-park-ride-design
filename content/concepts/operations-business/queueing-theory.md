---
id: queueing-theory
title: Queueing Theory
land: operations-business
level: intermediate
abstraction: concept
parent: throughput-and-queueing
children: [littles-law]
relations:
  - { type: applies-to, target: capacity-planning }
  - { type: enables, target: crowd-modeling }
  - { type: applies-to, target: balking-and-reneging }
  - { type: contrasts-with, target: perceived-vs-actual-wait }
  - { type: applies-to, target: pinch-points }
summary: The mathematics of random arrivals meeting limited service, and why lines explode as a ride nears full use.
tags: [operations, queueing, math, utilisation]
visuals: [chart, formula]
interactive_idea: "Slide utilisation from 50% to 99% on an M/M/1 queue and watch the average wait curve bend upward; a second toggle makes arrivals smoother and flattens it."
sources: [wikipedia-queueing-theory, little-1961-queuing-formula, sas-theme-park-wait-time-simulation-2024]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: average queue length in a simple M/M/1 model as utilisation rises",
  "width": 300, "height": 140,
  "data": {"values": [
    {"rho": 0.5, "L": 1.0}, {"rho": 0.6, "L": 1.5}, {"rho": 0.7, "L": 2.3}, {"rho": 0.8, "L": 4.0},
    {"rho": 0.85, "L": 5.7}, {"rho": 0.9, "L": 9.0}, {"rho": 0.95, "L": 19.0}, {"rho": 0.98, "L": 49.0}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "rho", "type": "quantitative", "title": "Utilisation, arrivals / capacity"},
    "y": {"field": "L", "type": "quantitative", "title": "Average number waiting"}
  }
}
```

> **Formula** $\rho = \dfrac{\lambda}{\mu}$
> where
> - $\rho$ is utilisation, the share of the ride's capacity that demand is using
> - $\lambda$ is the arrival rate, guests joining the line per hour
> - $\mu$ is the service rate, riders the ride can take per hour

Queueing theory began with a Danish telephone engineer, Agner Erlang, who in 1909 modelled calls arriving at random at an exchange. The same model fits a ride: guests arrive in bursts, the ride serves them at a steady rate, and the line is the buffer in between.

Its most useful lesson is counter-intuitive. When arrivals are random, you cannot run a ride at 100% of capacity and keep the wait short. As utilisation (demand divided by capacity) climbs past about 80%, the average line grows faster and faster, because random bunches of arrivals can no longer be absorbed. Kendall's shorthand for these models, such as M/M/1, names the arrival pattern, the service pattern and the number of servers.

For parks this explains why a few spare percent of capacity, or a smoother arrival pattern, buys a dramatically shorter wait. It also explains [balking and reneging](../human-factors/balking-and-reneging.md): guests are the system's safety valve. Simulation, as in [crowd modeling](../ai-future/crowd-modeling.md), extends the theory when parks and [pinch points](../masterplanning/pinch-points.md) get too messy for formulas.

## Explore further
- `wikipedia-queueing-theory` — Queueing theory, from Erlang's 1909 telephone work to Kendall notation and heavy-traffic limits
- `little-1961-queuing-formula` — A Proof for the Queuing Formula: L = λW, John Little, Operations Research, 1961
- `sas-theme-park-wait-time-simulation-2024` — Simulating theme park wait times within SAS Viya, a worked synthetic-park example
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines, David Maister, 1985
