---
id: perceptual-thresholds
title: Perceptual Thresholds
land: human-factors
level: advanced
abstraction: concept
parent: perception
children: []
relations:
  - { type: enables, target: motion-cueing }
  - { type: applies-to, target: stewart-platform }
  - { type: applies-to, target: audio-zoning }
  - { type: applies-to, target: jerk-and-onset-rate }
  - { type: applies-to, target: lighting-mood }
summary: Below a certain size a change goes unnoticed, and the size scales with the starting level.
tags: [perception, psychophysics, thresholds, simulation]
visuals: [formula]
interactive_idea: "Slide a 'base intensity' for light, sound or tilt and see the just-noticeable step grow in proportion."
sources: [grabherr-2008-vestibular-thresholds, webvision-light-dark-adaptation, brandt-1973-peripheral-vision-motion]
confidence: high
---
> **Formula** $\dfrac{\Delta I}{I} = k$
- where $I$ is the current level of a stimulus, such as brightness, loudness or tilt rate
- $\Delta I$ is the smallest change a person can just notice
- $k$ is a constant for that sense, so a louder sound needs a bigger step to feel different; this is Weber's law

Psychophysics, the study of how physical quantities map to sensations, gives designers two facts. First, every sense has an *absolute threshold* below which nothing registers. Second, the *just-noticeable difference* grows with the level you start from: Weber's law. A candle added to a dark room is obvious; added to a floodlit stage it is invisible.

Simulators live under the absolute threshold. Grabherr and colleagues measured how small a yaw rotation people can detect and found it depends on how slowly the rotation builds, with slow, low-frequency motion being hardest to notice. A [Stewart platform](../ride-systems/stewart-platform.md) uses that window: it tilts the cabin to fake acceleration, then "washes out" back to level so slowly that nobody feels the return. The whole craft of [motion cueing](../ride-systems/motion-cueing.md) is a negotiation with these thresholds.

Weber's law shapes the quieter trades too. [Audio zones](../sensory-environment/audio-zoning.md) can fade between lands in steps that stay below notice; [lighting moods](../sensory-environment/lighting-mood.md) shift gradually along a queue; and onset limits for [jerk](../ride-engineering/jerk-and-onset-rate.md) are in part thresholds for what feels abrupt.

## Explore further
- `grabherr-2008-vestibular-thresholds` — Vestibular Thresholds for Yaw Rotation About an Earth-Vertical Axis as a Function of Frequency
- `webvision-light-dark-adaptation` — Light and Dark Adaptation (absolute thresholds for vision)
- `brandt-1973-peripheral-vision-motion` — Differential Effects of Central Versus Peripheral Vision on Egocentric and Exocentric Motion Perception
