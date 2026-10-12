---
id: anti-rollback
title: Anti-Rollback
land: ride-engineering
level: beginner
abstraction: concept
parent: braking-and-control-hardware
children: []
relations:
  - { type: applies-to, target: lift-systems }
  - { type: example-of, target: early-coasters }
  - { type: applies-to, target: redundancy-and-fail-safe }
  - { type: applies-to, target: audio-triggers-and-masking }
  - { type: applies-to, target: launched-coasters }
summary: A ratchet under the train lets it climb but never slide back, and it makes the famous clatter.
tags: [anti-rollback, ratchet, lift-hill, safety, sound]
visuals: [svg]
interactive_idea: "Drag a train up a lift hill and release it; the dog drops into the nearest tooth and the train holds, with the click sound played back."
sources: [wikipedia-lift-hill, coaster101-lift-hills, wikipedia-mauch-chunk-switchback, wikipedia-john-a-miller]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A sawtooth rack with a pivoting dog that allows upward travel only">
  <g transform="rotate(-20 160 120)">
    <path d="M20 130 L40 118 L40 130 L60 118 L60 130 L80 118 L80 130 L100 118 L100 130 L120 118 L120 130 L140 118 L140 130 L160 118 L160 130 L180 118 L180 130 L200 118 L200 130 L220 118 L220 130 L240 118 L240 130 L260 118 L260 130 L280 118 L280 130 L300 118 L300 140 L20 140 Z" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>
    <rect x="150" y="70" width="70" height="30" rx="5" fill="#4c78a8"/>
    <line x1="160" y1="100" x2="146" y2="124" stroke="#f58518" stroke-width="5" stroke-linecap="round"/>
    <circle cx="160" cy="100" r="4" fill="currentColor"/>
    <line x1="230" y1="85" x2="270" y2="85" stroke="currentColor" stroke-width="2"/>
    <polygon points="276,85 266,79 266,91" fill="currentColor"/>
  </g>
  <text x="18" y="24" font-size="11" fill="currentColor">dog pivots freely going up</text>
  <text x="18" y="40" font-size="11" fill="currentColor">drops into a tooth if the train slips back</text>
</svg>

The clack-clack of a lift hill is not the chain. It is the anti-rollback device: a row of saw-toothed steel beside the track and heavy pivoting pawls, called dogs, under each car. Climbing, the dogs ride over each tooth and drop with a click into the next. If the chain breaks or the power fails, the first backward inch jams a dog against a tooth and the train stops where it is. The device is purely mechanical and needs no power, which is the point.

The idea predates coasters. The Mauch Chunk Switchback Railway in Pennsylvania added a ratchet to its cable-hauled uphill track in 1846, and John Miller patented a chain dog for pleasure railways in 1910. Modern builders cap the dogs in urethane to quieten them, or lift them clear until needed; theme designers sometimes fold the sound into [audio triggers](../show-technology/audio-triggers-and-masking.md). Hong Kong Disneyland's Big Grizzly Mountain deliberately lets its train roll backward to stage a broken lift.

Launched rides use the principle in reverse: anti-rollback brakes on the launch track retract before firing and catch a train that fails to crest. Anti-rollback is a textbook case of [redundancy and fail-safe](../safety-standards/redundancy-and-fail-safe.md) thinking applied to [lift systems](../ride-engineering/lift-systems.md).

## Explore further
- `wikipedia-lift-hill` — Lift hill
- `coaster101-lift-hills` — Coasters-101: Roller Coaster Lift Hills
- `wikipedia-mauch-chunk-switchback` — Mauch Chunk Switchback Railway
