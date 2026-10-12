---
id: color-scripts
title: Color Scripts
land: sensory-environment
level: intermediate
abstraction: concept
parent: light-and-color
children: []
relations:
  - { type: applies-to, target: ride-beat-sheet }
  - { type: applies-to, target: three-act-ride }
  - { type: part-of, target: concept-art }
  - { type: enables, target: tension-and-release }
  - { type: applies-to, target: lighting-control-protocols }
summary: A strip of small colour thumbnails that plans how light and palette change beat by beat through a ride.
tags: [color, story, animation, planning, beats]
visuals: [svg]
interactive_idea: "Paint one colour per scene on a ride timeline and see a plot of warmth and brightness; flat lines flag scenes with no emotional change."
sources: [hench-designing-disney, d23-pandora-details]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <text x="12" y="20" fill="currentColor">Illustrative colour script for a three-act dark ride</text>
  <g stroke="currentColor">
    <rect x="12" y="34" width="44" height="44" fill="#f6d28b"/>
    <rect x="60" y="34" width="44" height="44" fill="#e9b96e"/>
    <rect x="108" y="34" width="44" height="44" fill="#7a8ba6"/>
    <rect x="156" y="34" width="44" height="44" fill="#3b4a6b"/>
    <rect x="204" y="34" width="44" height="44" fill="#8b1e2d"/>
    <rect x="252" y="34" width="44" height="44" fill="#f2c14e"/>
  </g>
  <g fill="currentColor">
    <text x="14" y="94">load</text><text x="62" y="94">village</text><text x="110" y="94">forest</text><text x="158" y="94">cave</text><text x="206" y="94">threat</text><text x="254" y="94">finale</text>
    <text x="12" y="120">Act 1: warm and open</text><text x="120" y="120">Act 2: cooling, darker</text><text x="232" y="120">Act 3: hot then bright</text>
  </g>
  <polyline points="34,160 82,156 130,146 178,140 226,150 274,132" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="12" y="176" fill="currentColor">warmth over time</text>
</svg>

A colour script is a row of tiny paintings, one per scene, that shows how colour and light change across a whole story. Feature animation studios use it to check a film's emotional arc on one wall before any shot is lit: warm and open at the start, cooling as trouble arrives, hot and dark at the crisis, bright at the end. A dark ride is a short film the guest rides through, so designers borrow it.

On a ride the script sits beside the [ride beat sheet](../story-experience/ride-beat-sheet.md): each beat gets a dominant hue, a brightness and a warmth. The strip exposes problems fast: two adjacent scenes with the same palette blur together; a finale no brighter than the midpoint feels flat. It makes the [three-act ride](../story-experience/three-act-ride.md) visible and is the clearest way to plan [tension and release](../story-experience/tension-and-release.md) in light. The strip is part of the [concept art](../design-process/concept-art.md) package and later translates into cue values on [lighting control protocols](../show-technology/lighting-control-protocols.md). The idea scales to a land: Pandora's designers describe "the evolution of a night", a colour script playing out over hours. The studio-practice details here come from general animation knowledge rather than a cited source, so treat them as unverified.

## Explore further
- `hench-designing-disney` — Designing Disney: Imagineering and the Art of the Show
- `d23-pandora-details` — Don't Miss These Amazing Disney Details in Pandora
