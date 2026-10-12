---
id: littles-law
title: Little's Law
land: operations-business
level: intermediate
abstraction: sub-concept
parent: queueing-theory
children: []
relations:
  - { type: enables, target: wait-time-estimation }
  - { type: applies-to, target: capacity-planning }
  - { type: applies-to, target: virtual-queues }
  - { type: enables, target: wait-time-prediction }
  - { type: applies-to, target: level-of-service }
summary: People in a line equal arrival rate times average wait, which lets you compute any one from the other two.
tags: [operations, queueing, math, wait-time]
visuals: [formula, svg]
interactive_idea: "Three linked dials for L, λ and W: turn any two and the third solves itself, with a cartoon queue that stretches or shrinks."
sources: [little-1961-queuing-formula, wikipedia-littles-law]
confidence: high
---
> **Formula** $L = \lambda W$
> where
> - $L$ is the average number of people in the system, waiting plus riding
> - $\lambda$ is the average arrival rate, people per minute
> - $W$ is the average time each person spends in the system, in minutes

<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="20" y="60" width="200" height="50" rx="8"/>
  <text x="30" y="52" font-size="11" fill="currentColor" stroke="none">L = 240 people in line</text>
  <circle cx="40" cy="85" r="6"/><circle cx="60" cy="85" r="6"/><circle cx="80" cy="85" r="6"/><circle cx="100" cy="85" r="6"/>
  <circle cx="120" cy="85" r="6"/><circle cx="140" cy="85" r="6"/><circle cx="160" cy="85" r="6"/><circle cx="180" cy="85" r="6"/><circle cx="200" cy="85" r="6"/>
  <path d="M232 85 L270 85" marker-end="url(#a)"/>
  <rect x="270" y="65" width="40" height="40" rx="6" fill="#5aa0d8" stroke="none"/>
  <text x="275" y="90" font-size="10" fill="#000" stroke="none">ride</text>
  <text x="20" y="135" font-size="11" fill="currentColor" stroke="none">λ = 1,200 riders per hour = 20 per minute</text>
  <text x="20" y="155" font-size="11" fill="currentColor" stroke="none">W = L / λ = 240 / 20 = 12 minutes</text>
</svg>

Little's law is the single most useful equation in park operations. It says that, over any steady stretch of time, the number of people in a line equals how fast people join it multiplied by how long each stays. John Little proved it in 1961 in a short paper in *Operations Research*; the result holds for almost any queue, no matter how random the arrivals or how the line is organised.

The practical trick is to rearrange it. Count the people in the switchbacks, divide by the ride's hourly throughput, and you have the wait. If a ride takes 1,200 riders an hour and 240 people are waiting, the wait is about twelve minutes. This is the back-of-envelope method behind posted waits and third-party estimates; see [wait time estimation](../operations-business/wait-time-estimation.md).

It also runs backwards for planning. If the [design day](../masterplanning/design-day.md) target is a 20-minute wait and the ride serves 1,800 an hour, the queue needs room for about 600 people, which sets the [switchback](../human-factors/switchback-design.md) footprint. Machine-learning [wait time prediction](../ai-future/wait-time-prediction.md) is largely Little's law with better inputs.

## Explore further
- `little-1961-queuing-formula` — A Proof for the Queuing Formula: L = λW, John Little, Operations Research, 1961
- `wikipedia-littles-law` — Little's law, plain statement of the result, its history and the conditions under which it holds
- `wikipedia-queueing-theory` — Queueing theory, the broader mathematics of arrivals meeting limited service
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
