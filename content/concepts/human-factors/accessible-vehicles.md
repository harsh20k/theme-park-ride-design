---
id: accessible-vehicles
title: Transfer & Accessible Vehicles
land: human-factors
level: intermediate
abstraction: sub-concept
parent: accessibility
children: []
relations:
  - { type: applies-to, target: omnimover }
  - { type: applies-to, target: load-unload-design }
  - { type: applies-to, target: seat-and-containment }
  - { type: applies-to, target: dispatch-interval }
  - { type: applies-to, target: trackless-ride }
summary: Ride vehicles that a wheelchair can roll into, or that a guest can slide across to, without stopping the whole ride.
tags: [accessibility, vehicles, load-unload, ride-systems]
visuals: [svg]
interactive_idea: "Compare three boarding methods on a timeline: roll-in vehicle, transfer seat, and transfer device, each with its effect on dispatch interval."
sources: [access-board-guide-amusement-rides, disney-accessibility-services]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="20" y="60" width="120" height="70" rx="8"/>
  <rect x="30" y="70" width="60" height="50" rx="4" stroke-dasharray="4 3"/>
  <circle cx="45" cy="135" r="8"/>
  <circle cx="115" cy="135" r="8"/>
  <path d="M140 95 H 175" stroke-width="3"/>
  <polygon points="172,88 184,95 172,102" fill="currentColor"/>
  <rect x="190" y="60" width="110" height="70" rx="8"/>
  <rect x="200" y="80" width="40" height="40" rx="4"/>
  <circle cx="215" cy="135" r="8"/>
  <circle cx="280" cy="135" r="8"/>
  <path d="M250 105 H 300" stroke-width="2"/>
  <text x="26" y="52" font-size="11" fill="currentColor" stroke="none">Roll-in vehicle</text>
  <text x="196" y="52" font-size="11" fill="currentColor" stroke="none">Transfer seat</text>
  <text x="34" y="100" font-size="11" fill="currentColor" stroke="none">chair space</text>
  <text x="246" y="166" font-size="11" fill="currentColor" stroke="none">flat edge</text>
</svg>

The ADA gives designers three ways to make a ride boardable, and the Access Board's guide spells them out. A **wheelchair space** lets the guest roll in and ride in their own chair; it needs a 30-by-48-inch clear area, a 32-inch opening and a floor within about 5/8 inch of the platform at load. A **transfer seat** is a ride seat the guest slides across to, 14 to 24 inches high. A **transfer device** is a bench or lift that bridges the gap; a plain board alone does not count.

Each costs something different. Roll-in vehicles suit slow continuous systems such as the [Omnimover](../ride-systems/omnimover.md) and boat rides, where a dedicated car or a stoppable belt lets a chair board without halting everyone. [Trackless vehicles](../ride-systems/trackless-ride.md) can carry a drop-floor ramp. Transfer seats on coasters are cheaper but slower, and the time shows up in the [dispatch interval](../operations-business/dispatch-interval.md), so parks often add a separate accessible load position.

The chair also needs its own parking space near unload that does not block egress. Operators publish which option each ride offers; [seat and containment](../ride-engineering/seat-and-containment.md) covers how the restraint must still work after the transfer.

## Explore further
- `access-board-guide-amusement-rides` — Guide to the ADA Standards, Chapter 10: Amusement Rides
- `disney-accessibility-services` — Accessibility Services for Guests with Disabilities (Walt Disney World)
