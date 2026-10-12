---
id: vection
title: Vection & Visually Induced Motion Sickness
land: human-factors
level: intermediate
abstraction: sub-concept
parent: motion-sickness
children: []
relations:
  - { type: enables, target: flying-theatre }
  - { type: enables, target: domes-and-wraparound-screens }
  - { type: enables, target: motion-simulator-theatre }
  - { type: applies-to, target: peripheral-vision-and-speed }
  - { type: applies-to, target: projection-mapping }
summary: A moving picture alone can make you feel you are moving; that illusion sells flying theatres and can also sicken.
tags: [perception, vection, simulators, screens]
visuals: [svg]
interactive_idea: "Expand a screen's field of view from a phone to a dome; a vection meter rises steeply once the periphery fills."
sources: [palmisano-2015-vection, hettinger-riccio-1992-vims, brandt-1973-peripheral-vision-motion]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="160" cy="90" r="6" fill="currentColor" />
  <path d="M160 90 L30 20 M160 90 L160 10 M160 90 L290 20 M160 90 L300 90 M160 90 L290 160 M160 90 L160 170 M160 90 L30 160 M160 90 L20 90" stroke-opacity="0.5" />
  <circle cx="160" cy="90" r="40" stroke-dasharray="4 4" />
  <text x="130" y="140" font-size="11" fill="currentColor" stroke="none">fovea: detail</text>
  <text x="200" y="40" font-size="11" fill="currentColor" stroke="none">periphery: flow = self-motion</text>
</svg>

Sit in a stopped train and watch the one beside you pull away: for a moment you are sure you are moving. That is vection, which Palmisano and colleagues define as the conscious experience of self-motion, whether or not any real motion is present. Brandt, Dichgans and Koenig showed in 1973 that it is driven mainly by *peripheral* vision: a pattern drifting at the edge of sight produces strong self-motion, while the same pattern seen only in the centre does not.

Theme parks run on vection. A [flying theatre](../ride-systems/flying-theatre.md) tilts riders only a little; the sweep over a landscape comes from a [dome screen](../show-technology/domes-and-wraparound-screens.md) that fills the periphery. The same applies to [simulator theatres](../ride-systems/motion-simulator-theatre.md) and large-format [projection mapping](../show-technology/projection-mapping.md) in dark rides.

The cost is visually induced motion sickness, which Hettinger and Riccio tied directly to vection: the eyes say "flying", the inner ear says "sitting". The usual mitigations are matched motion cues, a visible fixed frame such as a cockpit edge, shorter sequences and gentler camera moves. [Peripheral vision](../human-factors/peripheral-vision-and-speed.md) also governs how fast a real ride feels.

## Explore further
- `palmisano-2015-vection` — Future Challenges for Vection Research
- `hettinger-riccio-1992-vims` — Visually Induced Motion Sickness in Virtual Environments
- `brandt-1973-peripheral-vision-motion` — Differential Effects of Central Versus Peripheral Vision on Egocentric and Exocentric Motion Perception
