---
id: turn-bias
title: Turn Bias
land: human-factors
level: intermediate
abstraction: sub-concept
parent: crowd-behavior
children: []
relations:
  - { type: applies-to, target: hub-and-spoke }
  - { type: applies-to, target: food-and-retail-placement }
  - { type: applies-to, target: entry-sequence }
  - { type: applies-to, target: guest-flow-patterns }
summary: Many guests drift in one direction on entering a space, and layouts that ignore it get lopsided crowds.
tags: [crowds, retail, layout, guest-flow]
visuals: [svg]
interactive_idea: "Toggle the turn bias on a hub plan and see simulated morning crowds pile into one land while the other sits empty."
sources: [underhill-why-we-buy, fruin-pedestrian-planning-1971]
confidence: low
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="160" cy="95" r="40" opacity="0.4"/>
  <path d="M160 170 V 135" stroke-width="4"/>
  <path d="M200 95 L 290 50" stroke-width="7" opacity="0.6"/>
  <path d="M120 95 L 30 50" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M160 55 V 15" stroke-width="4" opacity="0.5"/>
  <polygon points="282,46 296,46 290,58" fill="currentColor"/>
  <text x="130" y="100" font-size="11" fill="currentColor" stroke="none">hub</text>
  <text x="128" y="178" font-size="11" fill="currentColor" stroke="none">entry</text>
  <text x="222" y="90" font-size="11" fill="currentColor" stroke="none">heavy first turn</text>
  <text x="34" y="90" font-size="11" fill="currentColor" stroke="none">light</text>
</svg>

Turn bias is the observation that people entering an open space do not split evenly; a majority tend to drift the same way. Retail researcher Paco Underhill reported that shoppers in North American stores pull to the right after entering, and he built store layouts around it. Park operators often repeat a parallel claim: most guests turn right at the hub in the morning, so the lands on that side fill first.

Treat the specific direction with care. The size of the effect, whether it flips in countries that drive on the left, and how much of it is really the pull of a visible landmark rather than a handedness instinct are all uncertain and not well established in published research. What is solid is the consequence: whatever the cause, early crowds are lopsided, and that shows up in [guest flow patterns](../masterplanning/guest-flow-patterns.md) and lopsided waits.

Designers respond in two ways. They give the "light" side a strong [weenie](../story-experience/weenies.md) or a headline ride to balance the pull, and they place [food and retail](../masterplanning/food-and-retail-placement.md) where the bias will carry people past it. Operations can also counter-steer with a morning show or a reservation window on the quieter side of the [hub](../masterplanning/hub-and-spoke.md).

## Explore further
- `underhill-why-we-buy` — Why We Buy: The Science of Shopping (book)
- `fruin-pedestrian-planning-1971` — Pedestrian Planning and Design (book)
