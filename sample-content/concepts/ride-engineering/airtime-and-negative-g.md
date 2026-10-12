---
id: airtime-and-negative-g
title: Airtime & Negative G
land: ride-engineering
level: beginner
abstraction: sub-concept
parent: g-force-basics
children: []
relations:
  - { type: example-of, target: g-force-basics }
  - { type: applies-to, target: track-geometry }
  - { type: applies-to, target: peak-end-rule }
summary: Airtime is the floating feeling at the crest of a hill, when the seat falls away faster than gravity pulls you; push it further and the g goes negative and the restraint takes over.
tags: [ride-engineering, physics, airtime, sample-content]
visuals:
  - { type: svg, title: "Forces at the crest of a hill", alt: "Side view of a coaster car at the top of a hill with a downward gravity arrow and a shorter upward seat-force arrow, showing the rider is lighter than normal" }
interactive_idea: null
sources:
  - { title: "Fundamentals of Physics", author: "David Halliday, Robert Resnick, Jearl Walker", year: 2013 }
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
confidence: high
---

```svg
<!-- title: Forces at the crest of a hill | alt: Side view of a coaster car at the top of a hill with a downward gravity arrow and a shorter upward seat-force arrow, showing the rider is lighter than normal -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" font-family="sans-serif" font-size="11">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="#333" />
    </marker>
  </defs>
  <!-- hill track -->
  <path d="M10,220 C120,220 150,70 200,70 C250,70 280,220 390,220" fill="none" stroke="#444" stroke-width="3" />
  <!-- ground -->
  <line x1="10" y1="228" x2="390" y2="228" stroke="#aaa" stroke-width="1" stroke-dasharray="4 3" />
  <!-- car at crest -->
  <rect x="178" y="48" width="44" height="20" rx="4" fill="#fff" stroke="#333" stroke-width="2" />
  <circle cx="188" cy="70" r="4" fill="#333" />
  <circle cx="212" cy="70" r="4" fill="#333" />
  <!-- rider head -->
  <circle cx="200" cy="40" r="7" fill="#fff" stroke="#333" stroke-width="2" />
  <!-- direction of travel -->
  <line x1="150" y1="30" x2="185" y2="30" stroke="#777" stroke-width="2" marker-end="url(#arrow)" />
  <text x="120" y="33" fill="#555">travel</text>
  <!-- gravity arrow (long, down) -->
  <line x1="290" y1="60" x2="290" y2="150" stroke="#333" stroke-width="3" marker-end="url(#arrow)" />
  <text x="298" y="110" fill="#222">gravity (1 g)</text>
  <!-- seat force arrow (short, up) -->
  <line x1="250" y1="150" x2="250" y2="110" stroke="#333" stroke-width="3" marker-end="url(#arrow)" />
  <text x="208" y="168" fill="#222">seat force (less than 1 g)</text>
  <!-- note -->
  <text x="20" y="100" fill="#444">Seat pushes up less than</text>
  <text x="20" y="114" fill="#444">gravity pulls down, so</text>
  <text x="20" y="128" fill="#444">you feel light: airtime</text>
</svg>
```

Airtime is the floating feeling riders chase at the top of a hill. It is a direct example of [g-force basics](../ride-engineering/g-force-basics.md): as the car curves over a crest, the track bends its path downward and the seat drops away under you. The seat still pushes up, but less than gravity pulls down, so you feel lighter. Speed the car up or sharpen the crest and the push reaches zero, true weightlessness.

Push the shape further and the g goes negative. Now the car is falling faster than you would in free fall, and only the restraint keeps you seated, which is why lap bars are built to carry upward loads. Standards cap negative g at around -1 to -1.5 g, and only briefly, so the hill profile is a deliberate piece of [track geometry](../ride-engineering/track-geometry.md). It is often the moment guests remember, which matters for the [peak-end rule](../human-factors/peak-end-rule.md).

## Explore further
- [G-Force Basics](../ride-engineering/g-force-basics.md) — why curved track changes how heavy you feel.
- [Peak-End Rule](../human-factors/peak-end-rule.md) — why one great hill can carry a whole ride.
