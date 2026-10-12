---
id: g-force-basics
title: G-Force Basics
land: ride-engineering
level: beginner
abstraction: concept
parent: forces-and-tolerance
children: [airtime-and-negative-g]
relations:
  - { type: applies-to, target: clothoid-loop }
  - { type: limits, target: track-geometry }
  - { type: causes, target: motion-sickness }
summary: A g-force is how heavy you feel compared with standing still; on a ride it comes from curved track bending your path, and it is the first number engineers check.
tags: [ride-engineering, physics, acceleration, toy, sample-content]
visuals:
  - { type: formula, title: "Vertical g in a valley", alt: "Formulas for centripetal acceleration as speed squared over radius, and felt g in a valley as one plus that acceleration divided by 9.81, with a worked example" }
  - { type: chart, title: "Vertical g along a sample track", alt: "Line chart of vertical g-force at successive track elements: station and lift at 1 g, drop near 0 g, valley at 4 g, hill at minus 1 g, second valley at 3 g, brakes back to 1 g" }
interactive_idea: "Build a track from pieces and watch live speed and g-force readouts as the car runs."
sources:
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices (acceleration limits)", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
  - { title: "Fundamentals of Physics", author: "David Halliday, Robert Resnick, Jearl Walker", year: 2013 }
confidence: high
---

```formula
%% title: Vertical g in a valley | alt: Formulas for centripetal acceleration as speed squared over radius, and felt g in a valley as one plus that acceleration divided by 9.81, with a worked example
a_c = \frac{v^2}{r}
g_{\text{felt}} = 1 + \frac{a_c}{9.81} \quad \text{(bottom of a valley)}
v = 25\ \text{m/s},\; r = 20\ \text{m} \;\Rightarrow\; a_c \approx 31\ \text{m/s}^2 \;\Rightarrow\; g_{\text{felt}} \approx 4.2
```

```chart
%% title: Vertical g along a sample track | alt: Line chart of vertical g-force at successive track elements: station and lift at 1 g, drop near 0 g, valley at 4 g, hill at minus 1 g, second valley at 3 g, brakes back to 1 g
{
  "mark": { "type": "line", "point": true },
  "data": { "values": [
    { "i": 0, "element": "Station", "g": 1.0 },
    { "i": 1, "element": "Lift", "g": 1.0 },
    { "i": 2, "element": "Drop", "g": 0.2 },
    { "i": 3, "element": "Valley", "g": 4.0 },
    { "i": 4, "element": "Hill", "g": -1.0 },
    { "i": 5, "element": "Valley 2", "g": 3.0 },
    { "i": 6, "element": "Brake", "g": 1.0 }
  ] },
  "encoding": {
    "x": { "field": "element", "type": "ordinal", "sort": { "field": "i" }, "title": "Track element" },
    "y": { "field": "g", "type": "quantitative", "title": "Vertical g" }
  }
}
```

Stand still and you feel 1 g: the floor pushes up on you exactly as hard as gravity pulls down. A g-force is simply how much harder or softer that push becomes. At 2 g you feel twice your weight; at 0 g you float.

On a coaster the extra push comes from curved track. Whenever the train bends its path, the track supplies a centripetal acceleration of v²/r, where v is speed and r is the curve radius. The formula shows a typical first valley: 25 m/s through a 20 m radius gives about 4 g, where most [roller coasters](../ride-systems/roller-coasters.md) sit.

The chart follows one train around a sample layout: a steady 1 g lift, a near-weightless drop, a hard valley, then a hill that briefly goes negative, the [airtime](../ride-engineering/airtime-and-negative-g.md) riders chase. Standards bound each of these, which is why g-force [limits track geometry](../ride-engineering/track-geometry.md) and shapes every [clothoid loop](../ride-engineering/clothoid-loop.md).

## Explore further
- [Airtime & Negative G](../ride-engineering/airtime-and-negative-g.md) — the moment the seat drops away.
- [Clothoid Loop](../ride-engineering/clothoid-loop.md) — a loop shape invented to tame the g-force.
- [Forces & Human Tolerance](../ride-engineering/forces-and-tolerance.md) — how much is too much.
