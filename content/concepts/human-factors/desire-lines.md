---
id: desire-lines
title: Desire Lines
land: human-factors
level: beginner
abstraction: sub-concept
parent: wayfinding
children: []
relations:
  - { type: causes, target: pinch-points }
  - { type: applies-to, target: planting-design }
  - { type: applies-to, target: post-opening-plussing }
  - { type: applies-to, target: guest-flow-patterns }
  - { type: enables, target: crowd-analytics }
summary: The worn shortcuts guests make when the planned path is longer than the obvious one.
tags: [wayfinding, landscape, guest-flow, observation]
visuals: [svg]
interactive_idea: "Place an entrance and an attraction on a lawn; sliders for path detour length show when a simulated desire line appears."
sources: [wikipedia-desire-path, fruin-pedestrian-planning-1971]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="10" y="10" width="300" height="160" rx="8" opacity="0.3"/>
  <path d="M30 150 H 150 V 30 H 290" stroke-width="10" opacity="0.35"/>
  <path d="M30 150 Q 160 120 290 30" stroke-dasharray="7 5" stroke-width="3"/>
  <circle cx="30" cy="150" r="7" fill="currentColor"/>
  <circle cx="290" cy="30" r="7" fill="currentColor"/>
  <text x="40" y="168" font-size="11" fill="currentColor" stroke="none">Gate</text>
  <text x="236" y="22" font-size="11" fill="currentColor" stroke="none">Ride entrance</text>
  <text x="156" y="100" font-size="11" fill="currentColor" stroke="none">desire line</text>
  <text x="60" y="140" font-size="11" fill="currentColor" stroke="none">paved path</text>
</svg>

A desire line (or desire path) is the track worn into grass or gravel where people repeatedly leave the official route for a shorter one. It is a free, honest survey of how a space is actually used. Universities have famously waited to see where students walked before paving, and some planners look at fresh snow to read the footprints.

In a park the same thing happens at scale. If the paved route between a gate and a popular ride bends around a flowerbed, thousands of feet a day will test the bed. The planting dies, a mud strip appears, and the shortcut becomes a [pinch point](../masterplanning/pinch-points.md) that was never designed for crowds. Fruin's work on pedestrian flow shows why: people choose routes by effort and time, not by what the drawing intended.

Designers use desire lines two ways. Before opening, they draw the straight-line routes between every pair of major destinations and check the plan against them. After opening, [post-opening plussing](../design-process/post-opening-plussing.md) often means paving or fencing what the guests have already voted for, and [crowd analytics](../operations-business/crowd-analytics.md) now reveal the same lines in data before the grass does.

## Explore further
- `wikipedia-desire-path` — Desire path
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (book)
