---
id: otolith-organs
title: Otolith Organs
land: human-factors
level: advanced
abstraction: sub-concept
parent: vestibular-system
children: []
relations:
  - { type: enables, target: motion-cueing }
  - { type: applies-to, target: airtime-and-negative-g }
  - { type: applies-to, target: stewart-platform }
  - { type: applies-to, target: drop-tower }
  - { type: applies-to, target: flying-theatre }
summary: Tiny stone-weighted sensors that feel linear acceleration and gravity, and cannot tell the two apart.
tags: [vestibular, gravity, acceleration, simulation]
visuals: [formula]
interactive_idea: "Tilt a cabin or accelerate it forward; a vector arrow shows the identical force on the otoliths in both cases."
sources: [khan-chang-2013-vestibular-anatomy, wikipedia-vestibular-system, grabherr-2008-vestibular-thresholds, riccio-stoffregen-1991-postural-instability]
confidence: high
---
> **Formula** $\vec{f} = \vec{g} - \vec{a}$
- where $\vec{f}$ is the gravito-inertial force the otolith organs actually sense
- $\vec{g}$ is gravity, pointing down
- $\vec{a}$ is the head's linear acceleration
- a backward tilt of the head and a forward acceleration produce the same $\vec{f}$, so the organ cannot separate them

The utricle and saccule are patches of hair cells under a jelly membrane loaded with calcium-carbonate crystals, the otoconia. Accelerate the head and the heavy membrane lags, bending the hairs. The utricle lies roughly horizontal and reads forward, backward and sideways acceleration; the saccule is roughly vertical and reads up and down.

Because gravity is just another acceleration, the otoliths register a steady tilt and a steady push the same way. Physicists call this the equivalence principle; simulator engineers call it tilt coordination. A [Stewart platform](../ride-systems/stewart-platform.md) can pitch a cabin back a few degrees, slowly enough to stay under the canals' threshold, and the rider feels sustained forward thrust. That single trick underlies most of [motion cueing](../ride-systems/motion-cueing.md) and the lift of a [flying theatre](../ride-systems/flying-theatre.md).

The otoliths are also the organ of [airtime](../ride-engineering/airtime-and-negative-g.md). On a [drop tower](../ride-systems/drop-tower.md) the otoconia briefly unload, and that momentary "no gravity" is the sensation riders describe as their stomach lifting.

## Explore further
- `khan-chang-2013-vestibular-anatomy` — Anatomy of the Vestibular System: A Review (see the utricle and saccule section)
- `wikipedia-vestibular-system` — Vestibular system (otolith organs and the tilt-translation ambiguity)
- `grabherr-2008-vestibular-thresholds` — Vestibular Thresholds for Yaw Rotation About an Earth-Vertical Axis as a Function of Frequency
- `riccio-stoffregen-1991-postural-instability` — An Ecological Theory of Motion Sickness and Postural Instability
