---
id: lighting-mood
title: Lighting Mood & Color Temperature
land: sensory-environment
level: beginner
abstraction: concept
parent: light-and-color
children: []
relations:
  - { type: applies-to, target: theatrical-lighting }
  - { type: applies-to, target: dark-adaptation }
  - { type: applies-to, target: lighting-control-protocols }
  - { type: enables, target: tension-and-release }
  - { type: applies-to, target: scale-and-intimacy }
summary: Warm, dim light reads as safe and intimate; cool, bright light reads as alert and clinical.
tags: [lighting, color-temperature, kelvin, mood, warmth]
visuals: [svg]
interactive_idea: "Drag a Kelvin slider over a themed interior and watch the same set shift from tavern to laboratory."
sources: [wikipedia-color-temperature, hench-designing-disney]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <defs>
    <linearGradient id="kelvin" x1="0" x2="1">
      <stop offset="0" stop-color="#ff9a3c"/><stop offset="0.35" stop-color="#ffd27a"/><stop offset="0.6" stop-color="#fff4e0"/><stop offset="1" stop-color="#9ec5ff"/>
    </linearGradient>
  </defs>
  <rect x="20" y="60" width="280" height="36" rx="6" fill="url(#kelvin)" stroke="currentColor"/>
  <g stroke="currentColor"><line x1="34" y1="96" x2="34" y2="108"/><line x1="70" y1="96" x2="70" y2="108"/><line x1="190" y1="96" x2="190" y2="108"/><line x1="280" y1="96" x2="280" y2="108"/></g>
  <g fill="currentColor">
    <text x="20" y="122">~1850 K</text><text x="22" y="136">candle</text>
    <text x="58" y="122">~2400 K</text><text x="52" y="136">incandescent</text>
    <text x="170" y="122">~5500 K</text><text x="172" y="136">daylight</text>
    <text x="258" y="122">~6500 K</text><text x="258" y="136">overcast</text>
    <text x="20" y="40">warm, low Kelvin</text><text x="214" y="40">cool, high Kelvin</text>
    <text x="20" y="166">tavern, parlour, campfire</text><text x="190" y="166">lab, space port, clinic</text>
  </g>
</svg>

Lighting mood is set by brightness, contrast and warmth. Warmth is measured as colour temperature in kelvin, and the scale runs backwards from intuition. A candle flame sits around 1,850 K and looks orange; an ordinary incandescent bulb around 2,400 K; daylight around 5,500 K; an overcast sky near 6,500 K and bluish. Low numbers are called "warm" and high ones "cool" because of how they feel, not physics.

The feelings are reliable enough to design with. Warm, dim, pooled light makes a space feel small, safe and old: a saloon, a parlour, a pirate's grotto. Cool, even, bright light makes it feel large, modern and watched: a space station, a laboratory, a hospital corridor. A dark ride that moves from one to the other is using light to build [tension and release](../story-experience/tension-and-release.md), and the same trick controls [scale and intimacy](../story-experience/scale-and-intimacy.md) in a queue.

Two constraints shape every cue. Guests entering a dark show building need time for [dark adaptation](../human-factors/dark-adaptation.md), so the first scenes stay warm and low. And every look must repeat night after night, so mood lives in the cue lists of [theatrical lighting](../show-technology/theatrical-lighting.md) and travels over [lighting control protocols](../show-technology/lighting-control-protocols.md) rather than in anyone's memory.

## Explore further
- `wikipedia-color-temperature` — Color temperature
- `hench-designing-disney` — Designing Disney: Imagineering and the Art of the Show
