---
id: motion-base
title: Motion Base
land: ride-systems
level: intermediate
abstraction: concept
parent: simulators-and-motion-bases
children: [stewart-platform]
relations:
  - { type: applies-to, target: media-dark-ride }
  - { type: applies-to, target: enhanced-motion-vehicle }
  - { type: applies-to, target: otolith-organs }
  - { type: applies-to, target: redundancy-and-fail-safe }
  - { type: enables, target: haptics-and-next-gen-motion }
summary: The actuated platform under the seats, described by how many of the six ways to move it can fake.
tags: [simulators, motion-base, dof, actuators]
visuals: [svg]
interactive_idea: "Six toggles for surge, sway, heave, roll, pitch, yaw; flip them and see which ride types use that combination and what they cost."
sources: [wikipedia-motion-simulator, google-patents-us-6095926, brogent-i-ride]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <rect x="100" y="60" width="120" height="30" rx="4"/>
  <text x="118" y="80" font-size="10" fill="currentColor" stroke="none">seat platform</text>
  <path d="M110 90 L90 150 M130 90 L120 150 M190 90 L200 150 M210 90 L230 150 M150 90 L140 150 M170 90 L180 150" opacity="0.7"/>
  <rect x="70" y="150" width="180" height="12" rx="3" fill="currentColor" opacity="0.3"/>
  <path d="M250 75 L290 75 M285 70 L290 75 L285 80"/><text x="252" y="68" font-size="10" fill="currentColor" stroke="none">surge</text>
  <path d="M160 20 L160 50 M155 25 L160 20 L165 25"/><text x="166" y="30" font-size="10" fill="currentColor" stroke="none">heave</text>
  <path d="M40 60 C60 50 60 90 40 100" /><text x="18" y="84" font-size="10" fill="currentColor" stroke="none">roll</text>
</svg>

A motion base is the machine between the floor and the seats. It only tilts and shoves the seats a short distance; its value is how convincingly those moves read as big ones. Engineers describe bases by **degrees of freedom**, the six independent ways a rigid body can move: three slides (surge forward and back, sway side to side, heave up and down) and three turns (roll, pitch, yaw). A full six-DOF base, usually a six-legged [Stewart platform](../ride-systems/stewart-platform.md), can do all of them at once; cheaper two- and three-DOF seats manage pitch and roll with a little heave.

The body's acceleration sensors, the [otolith organs](../human-factors/otolith-organs.md), are what a base talks to. A quick tilt backward is read as a forward surge; a brief heave then a slow drift down is read as a lift that never ends. Theme parks use bases in every size: the 12-seat tracked vehicles of [screen-based dark rides](../ride-systems/media-dark-ride.md), the chassis-mounted body of an [Enhanced Motion Vehicle](../ride-systems/enhanced-motion-vehicle.md), and Brogent's six-DOF flying theatres.

Because actuators can fail at full stroke, bases carry duplicated sensors, locked-out envelopes and safe-park positions ([redundancy and fail-safe](../safety-standards/redundancy-and-fail-safe.md)). Seat-level haptics are the next layer ([haptics and next-gen motion](../ai-future/haptics-and-next-gen-motion.md)).

## Explore further
- `wikipedia-motion-simulator` — Motion simulator (Wikipedia)
- `google-patents-us-6095926` — US 6,095,926 Amusement ride vehicle
- `brogent-i-ride` — Brogent i-Ride flying theatre
