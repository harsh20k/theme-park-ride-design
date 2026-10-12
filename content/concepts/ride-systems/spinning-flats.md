---
id: spinning-flats
title: Spinning Flat Rides
land: ride-systems
level: beginner
abstraction: concept
parent: flat-rides
children: []
relations:
  - { type: applies-to, target: lateral-g }
  - { type: causes, target: motion-sickness }
  - { type: applies-to, target: personal-space-and-density }
  - { type: enables, target: group-dynamics }
  - { type: applies-to, target: proprioception-and-haptics }
summary: Cars that spin on arms that also spin, so riders are flung sideways by layered rotations.
tags: [flat-rides, spinning, scrambler, break-dance, epicyclic]
visuals: [svg]
interactive_idea: "Trace a rider's path on a Scrambler as two rotation rates are adjusted; the loops change shape and a lateral-g readout updates."
sources: [wikipedia-scrambler-ride, huss-rides, zamperla-flat-rides]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <circle cx="160" cy="90" r="6" fill="currentColor"/>
  <path d="M160 90 L230 50 M160 90 L95 55 M160 90 L160 165" opacity="0.7"/>
  <circle cx="230" cy="50" r="22" stroke-dasharray="3 3"/>
  <circle cx="95" cy="55" r="22" stroke-dasharray="3 3"/>
  <circle cx="160" cy="165" r="22" stroke-dasharray="3 3" transform="translate(0,-10)"/>
  <rect x="244" y="44" width="12" height="12" fill="currentColor" opacity="0.6"/>
  <rect x="216" y="30" width="12" height="12" fill="currentColor" opacity="0.6"/>
  <rect x="108" y="48" width="12" height="12" fill="currentColor" opacity="0.6"/>
  <rect x="74" y="60" width="12" height="12" fill="currentColor" opacity="0.6"/>
  <rect x="154" y="134" width="12" height="12" fill="currentColor" opacity="0.6"/>
  <path d="M30 30 C60 10 90 60 120 20 C150 0 170 70 200 30" opacity="0.4" stroke-dasharray="4 2"/>
  <text x="14" y="170" font-size="10" fill="currentColor" stroke="none">arms turn one way, clusters the other: looping rider path</text>
</svg>

A spinning flat ride stacks one rotation on another. The **Scrambler**, patented by Richard Harris in 1941 and sold by Eli Bridge from 1954, is the model: three arms turn about a centre pole while a cluster of four cars at each arm tip turns the opposite way. A rider's path becomes a series of loops that sweep close to the other cars and then whip outward, and the sudden reversals of direction throw everyone against the outside of the seat, pure [lateral g](../ride-engineering/lateral-g.md).

The family is large. HUSS's Break Dance adds a tilting platform under free-spinning cars; the Tilt-A-Whirl lets each car swing on a hilly track; teacups let riders steer their own spin; the Enterprise tilts its spinning wheel. All are compact and cheap, and all of them are the fairground's main source of [motion sickness](../human-factors/motion-sickness.md), since the layered rotations confuse the inner ear and the body's own sense of position ([proprioception and haptics](../human-factors/proprioception-and-haptics.md)).

The social side is the sell. Riders share a bench and are physically pressed together on every reversal, a rare ride where [personal space](../human-factors/personal-space-and-density.md) is part of the joke ([group dynamics](../human-factors/group-dynamics.md)).

## Explore further
- `wikipedia-scrambler-ride` — Scrambler ride (Wikipedia)
- `huss-rides` — HUSS Park Attractions
- `zamperla-flat-rides` — Zamperla flat rides
