---
id: airtime-and-negative-g
title: Airtime & Negative G
land: ride-engineering
level: beginner
abstraction: sub-concept
parent: g-force-basics
children: []
relations:
  - { type: applies-to, target: airtime-hills }
  - { type: applies-to, target: restraint-mechanisms }
  - { type: applies-to, target: otolith-organs }
  - { type: example-of, target: hyper-and-giga-era }
  - { type: limits, target: restraint-fit }
summary: Airtime is the floating feeling near 0 g; negative g lifts you into the restraint.
tags: [g-force, airtime, hills, restraints, physics]
visuals: [svg]
interactive_idea: "Drag a hill's crest radius and entry speed; a rider sprite floats, and a meter shows floater, ejector or seat-pinned airtime."
sources: [pendrill-balder-motion-tracker-2005, wikipedia-roller-coaster-safety, pendrill-eager-jerk-snap-2020, coaster101-foundations]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A train cresting a hill while riders lift from their seats">
  <path d="M10 150 Q 80 150 120 70 Q 160 10 200 70 Q 240 150 310 150" fill="none" stroke="currentColor" stroke-width="4"/>
  <rect x="140" y="38" width="40" height="18" rx="4" fill="#4c78a8" transform="rotate(-8 160 47)"/>
  <circle cx="152" cy="22" r="6" fill="#f58518"/>
  <circle cx="168" cy="20" r="6" fill="#f58518"/>
  <line x1="160" y1="60" x2="160" y2="100" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="160,104 155,94 165,94" fill="currentColor"/>
  <text x="170" y="100" font-size="11" fill="currentColor">gravity</text>
  <line x1="160" y1="30" x2="160" y2="8" stroke="#f58518" stroke-width="2"/>
  <polygon points="160,4 155,12 165,12" fill="#f58518"/>
  <text x="166" y="14" font-size="11" fill="currentColor">rider lifts</text>
  <text x="14" y="172" font-size="11" fill="currentColor">near 0 g at the crest: airtime</text>
</svg>

Airtime is what happens when the track falls away faster than gravity can pull you down. At the crest of a hill the seat stops pushing, your body keeps its upward momentum, and for a moment you float: close to 0 g. Push the crest tighter and the restraint has to pull you down to follow the track; that is negative g, or ejector airtime in enthusiast language. Floater airtime is the gentler version near zero.

Motion-tracker data from Balder at Liseberg records negative g ten times in one ride, including one hill shaped as a deliberate parabolic flight. Because the lap bar, not the seat, now carries the rider, airtime moments are where [restraint mechanisms](../ride-engineering/restraint-mechanisms.md) and [restraint fit](../human-factors/restraint-fit.md) matter most, and where the track pulls upward on its footers rather than pressing down.

Design limits for negative g are much tighter than for positive g; published summaries put the usual cap on the order of one to two g pulling riders out of the seat, and the precise values vary by duration and standard, so treat specific numbers as uncertain. Your [otolith organs](../human-factors/otolith-organs.md) read the sudden unloading as falling, which is why [airtime hills](../ride-engineering/airtime-hills.md) feel so intense.

## Explore further
- `pendrill-balder-motion-tracker-2005` — A roller coaster viewed through motion tracker data (Balder)
- `pendrill-eager-jerk-snap-2020` — Velocity, acceleration, jerk, snap and vibration
- `coaster101-foundations` — Coasters-101: Foundations
