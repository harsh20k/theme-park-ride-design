---
id: track-geometry
title: Track Geometry
land: ride-engineering
level: intermediate
abstraction: super-concept
parent: null
children: [clothoid-loop]
relations:
  - { type: applies-to, target: g-force-basics }
  - { type: causes, target: airtime-and-negative-g }
  - { type: applies-to, target: roller-coasters }
summary: Track geometry is the craft of shaping a ride's path in three dimensions so that every hill, loop, bank and transition produces the forces the designer wants and nothing the rider cannot take.
tags: [ride-engineering, geometry, design, sample-content]
visuals:
  - { type: mermaid, title: "Track elements and what they do", alt: "Flowchart of track geometry branching into vertical elements such as hills, drops and loops, horizontal elements such as turns and banking, and transitions that blend them smoothly" }
interactive_idea: null
sources:
  - { title: "ASTM F2291 Standard Practice for Design of Amusement Rides and Devices", author: "ASTM International", url: "https://www.astm.org/f2291-23.html" }
  - { title: "Werner Stengel, Ingenieurbüro Stengel", author: "Werner Stengel", note: "Pioneering work on heartline and clothoid track design" }
confidence: medium
---

```mermaid
%% title: Track elements and what they do | alt: Flowchart of track geometry branching into vertical elements such as hills, drops and loops, horizontal elements such as turns and banking, and transitions that blend them smoothly
flowchart TD
  TG[Track geometry]
  TG --> V[Vertical elements]
  TG --> H[Horizontal elements]
  TG --> T[Transitions]
  V --> HL[Hills: airtime]
  V --> DR[Drops and valleys: positive g]
  V --> LP[Loops and inversions]
  H --> TU[Turns]
  H --> BK[Banking: cancels lateral g]
  T --> CL[Clothoid: radius changes smoothly]
  T --> HE[Heartline: track rolls about the rider]
```

Track geometry is the shape of the ride, drawn as a path through space. Early designers sketched that path by hand and the forces were whatever came out. Today it works the other way round: the designer decides what the rider should feel at each moment, and software bends the track to produce it. That makes geometry the practical side of [g-force basics](../ride-engineering/g-force-basics.md).

The vocabulary is small. Vertical elements, such as hills, drops and loops, control how heavy or light you feel; the crest of a hill is what [causes airtime](../ride-engineering/airtime-and-negative-g.md). Horizontal elements are turns, and banking tilts the track so a sideways push becomes a downward one. The art is in the transitions. If the radius jumps, the g jumps, and riders feel a jolt; so modern track blends radii gradually with curves like the [clothoid loop](../ride-engineering/clothoid-loop.md) and rolls around the rider's heart rather than the rails. All [roller coasters](../ride-systems/roller-coasters.md) are built from these same pieces.

## Explore further
- [Clothoid Loop](../ride-engineering/clothoid-loop.md) — the teardrop shape that made loops survivable.
- [Forces & Human Tolerance](../ride-engineering/forces-and-tolerance.md) — the limits that every element must respect.
