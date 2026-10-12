---
id: capacity-planning
title: Capacity Planning
land: masterplanning
level: intermediate
abstraction: concept
parent: guest-flow-and-capacity
children: [design-day]
relations:
  - { type: applies-to, target: throughput-math }
  - { type: applies-to, target: capacity-vs-demand }
  - { type: enables, target: capital-budgets }
  - { type: applies-to, target: seasonality-and-events }
  - { type: applies-to, target: littles-law }
summary: Turning an attendance forecast into how many ride seats, paths and seats a park must build.
tags: [capacity, attendance, entertainment-units, feasibility]
visuals: [formula]
interactive_idea: "Enter attendance, peak-hour share and rides-per-guest-hour; the widget outputs total hourly ride capacity needed."
sources: [themedattraction-master-planning, pgav-designing-the-day, theparkdb-peaking-theme-park, blooloop-jeff-havlik]
confidence: high
---
> **Formula** $C_{\text{rides}} = N_{\text{peak}} \times r$
- $C_{\text{rides}}$ is the total hourly ride capacity the park must provide, in guests per hour
- $N_{\text{peak}}$ is the number of guests in the park at the busiest hour of the design day
- $r$ is the target attractions per guest per hour, a benchmark planners pick for the park type

Capacity planning answers one question: how big does everything need to be? The chain runs from a yearly attendance forecast to a [design day](../masterplanning/design-day.md), then to the share of that day's guests who are inside at the peak hour, and finally to "entertainment units", the hourly capacity of rides, shows and games that the crowd needs.

Master planner Peter Alexander calls the design day the number most feasibility formulas boil down to, because it sizes walkways, parking, restaurants, shops and the count of attractions. PGAV's Jeff Havlik runs the same logic as an operational programme: split a guest's peak hour across rides, shows, exhibits, play, food, retail and walking, then multiply by a benchmark of attractions per guest per hour. A need for 2,000 riders an hour can be met by one big coaster or three smaller rides spread across lands, which is where [attraction mix](../masterplanning/attraction-mix.md) begins.

The same [throughput maths](../operations-business/throughput-math.md) later governs dispatch intervals, and [Little's law](../operations-business/littles-law.md) links capacity to queue length. Because demand swings with [seasonality](../operations-business/seasonality-and-events.md), planners accept that the busiest few days will overflow rather than build for them.

## Explore further
- `themedattraction-master-planning` — Theme Park Master Planning, Peter Alexander's walk through feasibility, design day and entertainment units (ThemedAttraction.com)
- `pgav-designing-the-day` — Designing the Day, how PGAV Destinations turns peak-hour time budgets into required ride capacity (PGAV Destinations)
- `theparkdb-peaking-theme-park` — Managing Extremes: Seasonality and Peaking of a Theme Park, Tokyo Disney Resort data (The Park Database)
- `blooloop-jeff-havlik` — Jeff Havlik, PGAV Destinations master planner whose operational programme ties the park to attendance targets (Blooloop)
