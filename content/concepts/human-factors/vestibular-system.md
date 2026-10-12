---
id: vestibular-system
title: Vestibular System
land: human-factors
level: intermediate
abstraction: concept
parent: perception
children: [semicircular-canals, otolith-organs]
relations:
  - { type: enables, target: motion-cueing }
  - { type: applies-to, target: motion-base }
  - { type: applies-to, target: heartline }
  - { type: applies-to, target: g-force-basics }
  - { type: causes, target: motion-sickness }
summary: The inner ear's motion sensors tell the brain how the head is turning, accelerating and tilting.
tags: [perception, vestibular, physiology, motion]
visuals: [svg]
interactive_idea: "Rotate or slide a 3D head with the mouse; the three canals and two otolith organs light up according to which motion they sense."
sources: [khan-chang-2013-vestibular-anatomy, wikipedia-vestibular-system]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <ellipse cx="120" cy="80" rx="40" ry="40" />
  <ellipse cx="150" cy="60" rx="40" ry="18" />
  <ellipse cx="100" cy="100" rx="18" ry="40" />
  <rect x="150" y="105" width="34" height="22" rx="6" fill="currentColor" fill-opacity="0.2" />
  <rect x="190" y="95" width="22" height="30" rx="6" fill="currentColor" fill-opacity="0.2" />
  <path d="M212 110 L300 110" stroke-width="3" />
  <text x="20" y="30" font-size="11" fill="currentColor" stroke="none">3 semicircular canals: rotation</text>
  <text x="150" y="150" font-size="11" fill="currentColor" stroke="none">utricle and saccule: linear g, tilt</text>
  <text x="236" y="102" font-size="11" fill="currentColor" stroke="none">to brainstem</text>
</svg>

Deep in each inner ear sits a small set of fluid-filled organs that do nothing for hearing and everything for balance. Three [semicircular canals](../human-factors/semicircular-canals.md), set roughly at right angles, detect rotation of the head. Two [otolith organs](../human-factors/otolith-organs.md), the utricle and the saccule, detect linear acceleration and, because gravity is an acceleration, head tilt. Their signals feed the brainstem, which uses them to steady the eyes (the vestibulo-ocular reflex), hold posture and build the sense of "which way is up".

This is the organ a ride talks to most directly. Every [g-force](../ride-engineering/g-force-basics.md) is read here, and a coaster's [heartline](../ride-engineering/heartline.md) roll is pleasant precisely because it keeps the head near the axis of rotation. The system also has blind spots: it cannot tell a steady tilt from a steady acceleration, and it stops reporting a constant rotation after a few seconds. Those blind spots are what [motion cueing](../ride-systems/motion-cueing.md) on a [motion base](../ride-systems/motion-base.md) exploits to sell a flight with a few degrees of tilt.

When the ear and the eyes disagree, the result is [motion sickness](../human-factors/motion-sickness.md).

## Explore further
- `khan-chang-2013-vestibular-anatomy` — Anatomy of the Vestibular System: A Review
- `wikipedia-vestibular-system` — Vestibular system
