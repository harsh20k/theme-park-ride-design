---
id: personalization
title: Personalization & Dynamic Itineraries
land: ai-future
level: intermediate
abstraction: concept
parent: ai-in-operations
children: []
relations:
  - { type: applies-to, target: virtual-queues }
  - { type: applies-to, target: paid-priority-access }
  - { type: applies-to, target: wearables-and-identity }
  - { type: applies-to, target: choice-architecture }
  - { type: applies-to, target: decision-fatigue }
  - { type: limits, target: queue-fairness }
summary: Apps that build and re-plan a guest's day from stated preferences, live waits and paid access.
tags: [personalization, apps, itinerary, genie, wearables]
visuals: [mermaid]
interactive_idea: "Tell the widget your three must-dos and a lunch time; it re-plans the day each time you tap 'ride broke down' or 'kid is tired'."
sources: [d23-disney-genie-2021, nerdwallet-lightning-lane-multi-pass, attractions-magazine-power-up-bands-2023]
confidence: high
---
```mermaid
sequenceDiagram
  participant G as Guest
  participant A as Park app
  participant E as Planning engine
  G->>A: Preferences and must-dos
  A->>E: Preferences plus live waits and bookings
  E-->>A: Suggested itinerary
  A-->>G: Next best step
  G->>A: Rides, buys, skips
  A->>E: Updated state
  E-->>A: Re-planned itinerary
```

Personalization in a park means the system knows something about you and changes what it offers. The simplest version is a planner. Disney Genie, announced in August 2021, asks what kind of day a guest wants, builds an itinerary from those preferences and live conditions, and keeps rewriting it through the day. The paid layer, Genie+, was renamed Lightning Lane Multi Pass on July 24, 2024, when Walt Disney World also let guests pre-book up to seven days ahead (three for off-site guests).

A different flavor lives in the land itself. Super Nintendo World's Power-Up Band is a wristband linked to the app; tapping it on blocks and on the Mario Kart steering wheel logs coins and stamps, feeds team leaderboards, and unlocks a final boss challenge. Here personalization is a game state, not a schedule.

Both rely on [wearables and identity](../operations-business/wearables-and-identity.md) and sit on top of [virtual queues](../human-factors/virtual-queues.md) and [paid priority access](../human-factors/paid-priority-access.md). Designers should treat the app as [choice architecture](../human-factors/choice-architecture.md): a default itinerary steers crowds, and a confusing one adds [decision fatigue](../human-factors/decision-fatigue.md) to a day that was supposed to be simple.

## Explore further
- `d23-disney-genie-2021` — Wish Granted! Disney Genie Service Will Plan Your Perfect Day
- `nerdwallet-lightning-lane-multi-pass` — Disney Genie+ Is Now Called 'Lightning Lane Multi Pass'
- `attractions-magazine-power-up-bands-2023` — How do Power-Up Bands work in Super Nintendo World?
