---
id: multi-system-attractions
title: Multi-System Attractions
land: ride-systems
level: intermediate
abstraction: concept
parent: dark-rides
children: []
relations:
  - { type: applies-to, target: show-control-systems }
  - { type: enables, target: three-act-ride }
  - { type: causes, target: downtime-and-availability }
  - { type: example-of, target: rise-of-the-resistance }
  - { type: example-of, target: forbidden-journey }
summary: One attraction that chains several ride technologies, using whichever system best sells each scene.
tags: [ride-systems, dark-ride, integration, simulator, trackless]
visuals: [mermaid]
interactive_idea: "Build a ride by dragging systems into a sequence and see how each hand-off adds surprise, cost and failure risk."
sources: [wikipedia-forbidden-journey, wikipedia-rise-of-the-resistance, wendover-how-to-design-a-theme-park]
confidence: high
---
```mermaid
flowchart TB
    subgraph FJ["Forbidden Journey, 2010"]
        A1["Robot arm"] --> A2["on a moving track"] --> A3["between dome screens and sets"]
    end
    subgraph RR["Rise of the Resistance, 2019"]
        B1["Pre-show"] --> B2["Simulator transport"] --> B3["Walk-through hangar"] --> B4["Trackless chase"] --> B5["Simulator on a drop shaft"]
    end
```

A multi-system attraction strings several ride technologies into one story, so each scene uses whichever system sells it best. The new thing is the combination rather than any single machine, which Wendover Productions calls "innovative amalgamation".

[Forbidden Journey](../history/forbidden-journey.md) (2010) puts a KUKA arm on a moving track and swings riders between dome screens and physical sets; see [robot-arm ride](../ride-systems/robot-arm-ride.md). [Rise of the Resistance](../history/rise-of-the-resistance.md) (2019) goes further: a pre-show, a transport that is a motion simulator, a walk through a hangar, a [trackless](../ride-systems/trackless-ride.md) chase, and an escape pod that is a simulator on a drop shaft.

The gains are pacing and surprise: riders cannot read the next scene from a visible track, and each act can change scale. The costs are integration and reliability. Every hand-off between systems is a timing problem for [show control](../show-technology/show-control-systems.md), and each added system is another way for the whole attraction to stop, which shows in [downtime and availability](../operations-business/downtime-and-availability.md).

## Explore further
- `wikipedia-forbidden-journey` — Harry Potter and the Forbidden Journey
- `wikipedia-rise-of-the-resistance` — Star Wars: Rise of the Resistance
- `wendover-how-to-design-a-theme-park` — How to Design a Theme Park (To Take Tons of Your Money)
