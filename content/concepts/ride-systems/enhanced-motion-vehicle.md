---
id: enhanced-motion-vehicle
title: Enhanced Motion Vehicle
land: ride-systems
level: intermediate
abstraction: concept
parent: dark-rides
children: []
relations:
  - { type: example-of, target: indiana-jones-adventure }
  - { type: applies-to, target: motion-cueing }
  - { type: enables, target: vection }
  - { type: applies-to, target: vehicle-suspension }
  - { type: contrasts-with, target: motion-base }
summary: A motion base riding on a slow steerable chassis, so a 14 mph jeep feels like a wild off-road chase.
tags: [dark-rides, emv, motion-base, disney, indiana-jones]
visuals: [svg]
interactive_idea: "Drive a chassis along a path at a fixed slow speed while a second layer scripts pitch, roll and heave; feel-o-meter shows the faked acceleration."
sources: [wikipedia-enhanced-motion-vehicle, google-patents-us-5623878, wikipedia-indiana-jones-adventure]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <path d="M20 160 L300 160"/>
  <rect x="70" y="120" width="180" height="22" rx="4"/>
  <circle cx="100" cy="150" r="9"/><circle cx="220" cy="150" r="9"/>
  <text x="120" y="136" font-size="10" fill="currentColor" stroke="none">heavy chassis, slow</text>
  <path d="M95 120 L105 82 M160 120 L160 78 M225 120 L215 82" stroke-width="4" opacity="0.6"/>
  <path d="M80 82 L250 70 L255 40 L85 52 Z" transform="rotate(-6 165 60)"/>
  <text x="110" y="62" font-size="10" fill="currentColor" stroke="none" transform="rotate(-6 165 60)">light body pitches and rolls</text>
  <text x="130" y="105" font-size="10" fill="currentColor" stroke="none">hydraulic rams</text>
</svg>

An Enhanced Motion Vehicle splits a ride vehicle in two. Underneath is a heavy chassis that drives along a slotted guideway at a walking-fast 14 mph, steering all four wheels. On top sits a lightweight passenger body connected by three hydraulic rams, which can pitch, roll and heave the body independently of what the chassis is doing. The body rears, shudders and lurches while the chassis rolls calmly: [motion cueing](../ride-systems/motion-cueing.md) on wheels.

Walt Disney Imagineering built it for Indiana Jones Adventure at Disneyland (1995), and patented it as the "Dynamic ride vehicle" (US 5,623,878, filed 1995 from a 1993 application). The ride carries twelve riders per troop transport, and an onboard computer picks among pre-programmed motion versions, so repeat rides differ. Dinosaur at Disney's Animal Kingdom uses the same system; the Tokyo DisneySea version swapped hydraulics for electric actuators.

The trick works because of [vection](../human-factors/vection.md): tilt plus a dark scene plus sound reads as acceleration the body never had. Compared with a fixed [motion base](../ride-systems/motion-base.md), the EMV adds real travel through real sets, with the moving body acting as an exaggerated [vehicle suspension](../ride-engineering/vehicle-suspension.md). Its story is told in the [Indiana Jones Adventure](../history/indiana-jones-adventure.md) card.

## Explore further
- `wikipedia-enhanced-motion-vehicle` — Enhanced motion vehicle (Wikipedia)
- `google-patents-us-5623878` — US 5,623,878 Dynamic ride vehicle
- `wikipedia-indiana-jones-adventure` — Indiana Jones Adventure (Wikipedia)
