---
id: stuntronics
title: Stuntronics
land: ai-future
level: intermediate
abstraction: concept
parent: robotics-and-characters
children: []
relations:
  - { type: is-a, target: untethered-figures }
  - { type: applies-to, target: show-action-equipment }
  - { type: applies-to, target: practical-vs-digital-effects }
  - { type: applies-to, target: theatre-staging }
  - { type: applies-to, target: uncanny-valley }
summary: A robot stunt double that launches, flips and lands on its mark using onboard sensing, shown in 2018 and not yet installed.
tags: [stuntronics, acrobatics, robotics, show-action, disney-research]
visuals: [svg]
interactive_idea: "Choose launch speed and the moment to tuck; the figure's flight path and landing pose update, with a readout of rotations completed."
sources: [disney-research-stuntronics, blooloop-stuntronics-2018, wdwinfo-stickman-2018]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M30 150 Q160 -20 290 150" stroke-dasharray="4 4"/>
  <line x1="20" y1="150" x2="300" y2="150"/>
  <g transform="translate(40,140)">
    <line x1="0" y1="0" x2="0" y2="-30"/>
    <circle cx="0" cy="-36" r="6"/>
  </g>
  <g transform="translate(110,70) rotate(-60)">
    <line x1="0" y1="0" x2="0" y2="-26"/>
    <circle cx="0" cy="-32" r="6"/>
  </g>
  <g transform="translate(160,36)">
    <path d="M-10 0 q10 -16 20 0 q-10 14 -20 0"/>
    <circle cx="0" cy="-12" r="5"/>
  </g>
  <g transform="translate(212,72) rotate(60)">
    <line x1="0" y1="0" x2="0" y2="-26"/>
    <circle cx="0" cy="-32" r="6"/>
  </g>
  <g transform="translate(282,140)">
    <line x1="0" y1="0" x2="0" y2="-30"/>
    <circle cx="0" cy="-36" r="6"/>
  </g>
  <text x="40" y="170" font-size="11" fill="currentColor" stroke="none">launch</text>
  <text x="140" y="24" font-size="11" fill="currentColor" stroke="none">tuck</text>
  <text x="262" y="170" font-size="11" fill="currentColor" stroke="none">land on mark</text>
</svg>

Stuntronics is Disney Research and Imagineering's "stunt double animatronic": a human-sized figure that is thrown from a pendulum, performs flips and twists in free flight, holds a heroic pose, and lands in a net on its mark, repeatably. It carries no tether. Accelerometers, gyroscopes and laser rangefinders on board tell it where it is; it controls its spin by tucking and untucking, the same angular-momentum trick a diver uses.

The lineage is a good lesson in research. BRICK was a sensored metal block that shifted its mass to control rotation. Stickman, shown in May 2018, was a seven-foot, three-segment pole with pneumatic pistons that could do single and double backflips. Stuntronics, revealed in June 2018, added a humanoid body of roughly 90 pounds. Morgan Pope's observation is useful for any designer: a robot that merely functions tends to fall into the [uncanny valley](../human-factors/uncanny-valley.md), but mid-air motion is forgiving because physics makes it look right.

Status: no park installation has been announced; treat it as research with a clear production path. If used, it would be [show action equipment](../show-technology/show-action-equipment.md) staged like a theatre beat, a strong case for [practical over digital effects](../show-technology/practical-vs-digital-effects.md), and a new kind of [untethered figure](../show-technology/untethered-figures.md).

## Explore further
- `disney-research-stuntronics` — Stuntronics (Disney Research project page)
- `blooloop-stuntronics-2018` — Stuntronics: Disney creates robot stunt doubles for theme parks
- `wdwinfo-stickman-2018` — Disney Research Develops Backflipping Robot (Stickman)
