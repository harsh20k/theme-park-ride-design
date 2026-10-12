---
id: semicircular-canals
title: Semicircular Canals
land: human-factors
level: advanced
abstraction: sub-concept
parent: vestibular-system
children: []
relations:
  - { type: applies-to, target: spinning-flats }
  - { type: applies-to, target: inverting-flats }
  - { type: applies-to, target: heartline }
  - { type: limits, target: motion-cueing }
  - { type: causes, target: motion-sickness }
summary: Three fluid rings per ear sense how fast the head starts and stops turning, then fade on steady spin.
tags: [vestibular, rotation, physiology, spinning-rides]
visuals: [svg]
interactive_idea: "Spin a chair icon; a cupula deflection trace rises, decays over ~20 s, then swings the other way when the spin stops."
sources: [khan-chang-2013-vestibular-anatomy, wikipedia-vestibular-system]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="80" cy="90" r="50" />
  <circle cx="80" cy="90" r="36" />
  <path d="M80 40 L80 54" stroke-width="4" />
  <path d="M60 60 Q80 30 100 60" stroke-dasharray="3 3" />
  <text x="40" y="165" font-size="11" fill="currentColor" stroke="none">fluid lags, bends the cupula</text>
  <polyline points="170,120 190,60 215,80 240,95 265,105 290,110" />
  <polyline points="170,120 300,120" stroke-dasharray="2 3" />
  <text x="170" y="40" font-size="11" fill="currentColor" stroke="none">signal on a steady spin</text>
  <text x="200" y="140" font-size="11" fill="currentColor" stroke="none">fades in ~20 s</text>
</svg>

Each canal is a ring of fluid with a flexible flap, the cupula, blocking the ring at one point. Turn the head and the fluid lags behind, pushing the flap and bending the hair cells inside it. Three canals at roughly right angles cover yaw, pitch and roll, and the canals on the two sides work in push-pull pairs: one side excited, its partner inhibited.

The quirk designers care about is that canals measure the *start* of a rotation, not the rotation itself. On a steady spin the fluid catches up and the signal decays within tens of seconds. Stop suddenly and the fluid overshoots, so the rider feels a spin the opposite way. That is the dizziness after a [spinning flat ride](../ride-systems/spinning-flats.md), and it is why tilting the head during a spin on an [inverting flat](../ride-systems/inverting-flats.md) produces an unpleasant tumbling cross-coupling.

A coaster designed around the [heartline](../ride-engineering/heartline.md) keeps the canals near the roll axis, lowering the signal. Simulators go the other way: below the canals' detection threshold they can tilt a cabin without the brain registering a rotation at all, a limit that shapes [motion cueing](../ride-systems/motion-cueing.md). Mismatched canal signals are a classic trigger for [motion sickness](../human-factors/motion-sickness.md).

## Explore further
- `khan-chang-2013-vestibular-anatomy` — Anatomy of the Vestibular System: A Review
- `wikipedia-vestibular-system` — Vestibular system
