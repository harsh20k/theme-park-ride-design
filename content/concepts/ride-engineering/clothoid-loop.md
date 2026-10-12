---
id: clothoid-loop
title: Clothoid Loop
land: ride-engineering
level: intermediate
abstraction: concept
parent: track-geometry
children: []
relations:
  - { type: example-of, target: loop-revival }
  - { type: applies-to, target: schwarzkopf-and-stengel }
  - { type: limits, target: positive-g }
  - { type: enables, target: inverted-coasters }
  - { type: applies-to, target: jerk-and-onset-rate }
summary: A teardrop loop whose radius shrinks toward the top, spreading the g-force instead of spiking it.
tags: [loops, clothoid, curvature, stengel, inversions]
visuals: [formula, svg]
interactive_idea: "Morph a loop from circle to clothoid with a slider while a g-force trace at the rider updates in real time."
sources: [pendrill-loop-shapes-2005, liseberg-stengel-coasters, wikipedia-vertical-loop, wikipedia-euler-spiral]
confidence: high
---
> **Formula** $\kappa(s) = \dfrac{s}{A^2}$
> where:
> - $\kappa$ — curvature, one over the local radius of the track
> - $s$ — distance travelled along the curve from its straight start
> - $A$ — a scale constant that sets how quickly the curve tightens

<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circular loop beside a taller teardrop clothoid loop">
  <circle cx="80" cy="100" r="55" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4"/>
  <path d="M170 160 C 150 120, 165 60, 230 40 C 295 60, 310 120, 290 160" fill="none" stroke="#4c78a8" stroke-width="4"/>
  <text x="46" y="172" font-size="11" fill="currentColor">circle: constant r</text>
  <text x="190" y="176" font-size="11" fill="#4c78a8">clothoid: r shrinks upward</text>
  <line x1="80" y1="100" x2="135" y2="100" stroke="currentColor" stroke-width="1"/>
  <text x="96" y="94" font-size="10" fill="currentColor">r</text>
</svg>

A perfectly circular loop is a bad idea. To clear the top the train must enter fast, and a fast train on a constant radius slams riders with roughly 6 g the instant it hits the curve. Coney Island's Flip Flap Railway did exactly that and became famous for neck injuries; the 1901 Loop the Loop already tried an elliptical shape to soften it.

Werner Stengel's answer, introduced in 1975 and first built on the 1976 Great American Revolution at Six Flags Magic Mountain, uses a clothoid, also called an Euler or Cornu spiral. Its curvature grows in proportion to distance along the track, so the radius is large where the train is fast at the bottom and small where it is slow at the top. The force builds smoothly, peaks lower, and the loop looks like a teardrop. Pendrill's analysis of Liseberg loops shows a measured bottom of about 4.5 g on a modern design versus the 6 g a circle would demand.

Railway engineers had used the same spiral since the 1880s. It is the ancestor of today's [spline transitions](../ride-engineering/spline-transitions.md), keeps [positive g](../ride-engineering/positive-g.md) in check, and made the [loop revival](../history/loop-revival.md) of the 1970s possible for [Schwarzkopf and Stengel](../history/schwarzkopf-and-stengel.md).

## Explore further
- `pendrill-loop-shapes-2005` — Rollercoaster loop shapes (Physics Education paper comparing circular, constant-g and clothoid loops)
- `liseberg-stengel-coasters` — Werner Stengel and the Liseberg roller coasters (clothoid introduced 1975, heartline 1976)
- `wikipedia-vertical-loop` — Vertical loop (history from centrifugal railways to Revolution)
- `wikipedia-euler-spiral` — Euler spiral (the clothoid curve and its railway origins)
