---
id: inverted-coasters
title: Inverted Coasters
land: ride-systems
level: beginner
abstraction: concept
parent: roller-coasters
children: []
relations:
  - { type: applies-to, target: rider-position }
  - { type: applies-to, target: reach-envelope }
  - { type: example-of, target: coaster-manufacturers }
  - { type: enables, target: peripheral-vision-and-speed }
  - { type: contrasts-with, target: flying-coasters }
summary: Trains hang rigidly below the track with riders' feet dangling, a B&M idea first built in 1992.
tags: [coasters, inverted, b-and-m, suspended]
visuals: [svg]
interactive_idea: "Toggle between sit-down, suspended and inverted cross-sections to see where the wheel carriage, seat and rider's feet sit relative to the rail."
sources: [wikipedia-inverted-roller-coaster, vekoma-suspended-family-coasters, rcdb-home]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <text x="30" y="20" font-size="10" fill="currentColor" stroke="none">sit-down</text>
  <circle cx="60" cy="110" r="8"/><circle cx="60" cy="110" r="3" fill="currentColor"/>
  <rect x="40" y="70" width="40" height="30" rx="4"/><circle cx="60" cy="58" r="7"/>
  <text x="130" y="20" font-size="10" fill="currentColor" stroke="none">suspended</text>
  <circle cx="160" cy="50" r="8"/><path d="M160 58 L160 80"/><path d="M150 80 L170 80 L172 115 L148 115 Z"/><circle cx="160" cy="95" r="6"/>
  <text x="240" y="20" font-size="10" fill="currentColor" stroke="none">inverted</text>
  <circle cx="265" cy="50" r="8"/><rect x="250" y="60" width="30" height="34" rx="4"/><circle cx="265" cy="104" r="7"/><path d="M258 112 L256 135 M272 112 L274 135"/>
  <text x="236" y="160" font-size="10" fill="currentColor" stroke="none">feet dangle</text>
</svg>

On an inverted coaster the wheel carriage runs on top of the track and the seats hang directly below it, bolted rigidly in place. Riders sit in open seats with nothing under their feet. Because the seat cannot swing, the train can take loops, zero-g rolls and corkscrews exactly as a sit-down train would, just upside-down relative to the rail. That is the key difference from the older **suspended** coaster, whose enclosed cars pivot from a bar and therefore cannot invert.

Bolliger & Mabillard built the first one, Batman: The Ride at Six Flags Great America, in 1992, and the format became a signature of the [coaster manufacturers](../history/coaster-manufacturers.md) boom that followed: Nemesis at Alton Towers (1994) and Raptor at Cedar Point (1994) remain fan favourites. Vekoma made a cheaper family-scale version, and still sells suspended family coasters today.

Hanging changes how the ride feels. With no car body in view, speed registers through [peripheral vision](../human-factors/peripheral-vision-and-speed.md) and the dangling legs give near-misses with terrain and supports more bite, which is why layouts hug the ground. Designers must police the [reach envelope](../safety-standards/reach-envelope.md) around those legs, and [rider position](../ride-engineering/rider-position.md) governs how the g-forces load the body.

## Explore further
- `wikipedia-inverted-roller-coaster` — Inverted roller coaster (Wikipedia)
- `vekoma-suspended-family-coasters` — Vekoma suspended family coasters
- `rcdb-home` — Roller Coaster DataBase
