---
id: disability-access-services
title: Disability Access Services
land: human-factors
level: beginner
abstraction: sub-concept
parent: accessibility
children: []
relations:
  - { type: applies-to, target: virtual-queues }
  - { type: applies-to, target: queue-fairness }
  - { type: applies-to, target: service-culture }
  - { type: applies-to, target: wearables-and-identity }
  - { type: contrasts-with, target: paid-priority-access }
summary: Return-time schemes that let guests who cannot wait in a standard queue wait somewhere else instead.
tags: [accessibility, queues, operations, policy]
visuals: [mermaid]
interactive_idea: "Simulate a day with a return-time pass: see how the guest's waits are spent outside the line while the ride's queue position is held."
sources: [disney-disability-access-service, disney-accessibility-services, universal-orlando-rider-guide]
confidence: medium
---
```mermaid
sequenceDiagram
  participant G as Guest
  participant S as Guest services
  participant R as Ride entrance
  G->>S: Register before or at the visit
  S->>G: Pass linked to ticket
  G->>R: Request a return time
  R->>G: Return time equal to current wait
  G->>G: Wait elsewhere - shade, quiet room, snack
  G->>R: Return and enter the shorter line
```

A disability access service is a queue alternative for guests whose condition makes a long, enclosed, standing wait impossible, even though they can ride. Instead of standing in line, the guest gets a return time roughly equal to the current posted wait and comes back then, entering through a shorter line. Walt Disney World's version is Disability Access Service (DAS), registered through guest services and linked to the party's tickets; Universal Orlando offers a comparable attraction assistance pass described in its rider guide.

The design logic is fairness. The guest does not wait less; they wait differently, in the [rest area](../masterplanning/rest-areas.md) or quiet room where the wait is bearable. That keeps the scheme distinct from [paid priority access](../human-factors/paid-priority-access.md) and protects [queue fairness](../human-factors/queue-fairness.md) for everyone else. The mechanics increasingly run on the same app and [wearable](../operations-business/wearables-and-identity.md) systems as [virtual queues](../human-factors/virtual-queues.md).

The hard part is eligibility. Operators have tightened registration in recent years in response to misuse, and the rules change often, so the exact criteria at any park are uncertain without checking its current page. What does not change is that the cast member at the entrance is the service, and [service culture](../operations-business/service-culture.md) decides whether the guest feels accommodated or interrogated.

## Explore further
- `disney-disability-access-service` — Disability Access Service (Walt Disney World)
- `disney-accessibility-services` — Accessibility Services for Guests with Disabilities (Walt Disney World)
- `universal-orlando-rider-guide` — Universal Orlando Guide for Rider Safety and Accessibility (PDF)
