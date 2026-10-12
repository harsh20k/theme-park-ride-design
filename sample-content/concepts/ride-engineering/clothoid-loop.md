---
id: clothoid-loop
title: Clothoid Loop
land: ride-engineering
level: intermediate
abstraction: concept
parent: track-geometry
children: []
relations:
  - { type: contrasts-with, target: early-coasters }
  - { type: applies-to, target: g-force-basics }
  - { type: example-of, target: track-geometry }
summary: A clothoid loop is a teardrop-shaped vertical loop whose radius tightens toward the top; it keeps the g-force reasonable at the bottom while still holding riders in at the top.
tags: [ride-engineering, geometry, inversions, toy, sample-content]
visuals:
  - { type: svg, title: "Circular loop vs clothoid loop", alt: "Side-by-side diagram of a circular loop and a teardrop-shaped clothoid loop of the same height, with the clothoid showing a wide bottom radius and a tight top radius" }
  - { type: formula, title: "G at the bottom and top of a loop", alt: "Formulas for felt g at the bottom and top of a loop, showing that a circular loop with 1 g at the top gives about 7 g at the bottom, while a clothoid with a larger bottom radius gives far less" }
interactive_idea: "Compare a circular loop and a clothoid loop: same height, very different g-forces."
sources:
  - { title: "Werner Stengel, Ingenieurbüro Stengel", author: "Werner Stengel", note: "Designed the clothoid loop for Schwarzkopf's Revolution at Six Flags Magic Mountain, 1976" }
  - { title: "Fundamentals of Physics", author: "David Halliday, Robert Resnick, Jearl Walker", year: 2013 }
confidence: high
---

```svg
<!-- title: Circular loop vs clothoid loop | alt: Side-by-side diagram of a circular loop and a teardrop-shaped clothoid loop of the same height, with the clothoid showing a wide bottom radius and a tight top radius -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" font-family="sans-serif" font-size="11">
  <!-- ground -->
  <line x1="10" y1="215" x2="390" y2="215" stroke="#aaa" stroke-width="1" stroke-dasharray="4 3" />
  <!-- circular loop -->
  <circle cx="100" cy="130" r="80" fill="none" stroke="#444" stroke-width="3" />
  <line x1="100" y1="130" x2="180" y2="130" stroke="#999" stroke-width="1" stroke-dasharray="3 3" />
  <text x="112" y="126" fill="#555">r = 80</text>
  <text x="100" y="232" text-anchor="middle" fill="#222">Circular: one radius everywhere</text>
  <!-- clothoid loop (teardrop): wide bottom, tight top -->
  <path d="M300,210 C380,210 410,120 380,80 C360,52 340,50 300,50 C260,50 240,52 220,80 C190,120 220,210 300,210 Z" fill="none" stroke="#444" stroke-width="3" />
  <line x1="300" y1="160" x2="372" y2="160" stroke="#999" stroke-width="1" stroke-dasharray="3 3" />
  <text x="308" y="156" fill="#555">wide r</text>
  <line x1="300" y1="78" x2="330" y2="78" stroke="#999" stroke-width="1" stroke-dasharray="3 3" />
  <text x="334" y="82" fill="#555">tight r</text>
  <text x="300" y="232" text-anchor="middle" fill="#222">Clothoid: radius tightens toward the top</text>
  <!-- same height marker -->
  <line x1="10" y1="50" x2="390" y2="50" stroke="#bbb" stroke-width="1" stroke-dasharray="2 3" />
  <text x="12" y="46" fill="#777">same height</text>
</svg>
```

```formula
%% title: G at the bottom and top of a loop | alt: Formulas for felt g at the bottom and top of a loop, showing that a circular loop with 1 g at the top gives about 7 g at the bottom, while a clothoid with a larger bottom radius gives far less
g_{\text{bottom}} = 1 + \frac{v_b^2}{r_b\, g}, \qquad g_{\text{top}} = \frac{v_t^2}{r_t\, g} - 1
\text{Circular } (r_b = r_t = r):\; g_{\text{top}} = 1 \Rightarrow v_t^2 = 2 g r \Rightarrow v_b^2 = 6 g r \Rightarrow g_{\text{bottom}} = 7
\text{Clothoid } (r_b \gg r_t):\; g_{\text{top}} \approx 1 \text{ while } g_{\text{bottom}} \approx 3.5\text{–}4.5
```

The first looping coasters, described under [early coasters](../history/early-coasters.md), used perfectly circular loops, and they hurt. The maths explains why. A loop needs enough speed at the top for the track to still press the rider into the seat, but with one fixed radius the much higher speed at the bottom produces a crushing load, around 6 to 7 g by the energy sum in the formula.

Werner Stengel's answer for Schwarzkopf's Revolution (1976) was the clothoid loop. A clothoid is a curve whose radius changes smoothly along its length. Give the loop a wide radius at the bottom, where the train is fastest, and a tight radius at the top, where it is slowest, and the g stays moderate all the way round. The result is the teardrop every modern inversion shares.

It is the cleanest case of [track geometry](../ride-engineering/track-geometry.md) serving [g-force basics](../ride-engineering/g-force-basics.md): the shape is chosen for the rider's body, not the drawing.

## Explore further
- [Track Geometry](../ride-engineering/track-geometry.md) — clothoids as transitions everywhere, not just in loops.
- [Early Coasters](../history/early-coasters.md) — the circular loops that came first.
