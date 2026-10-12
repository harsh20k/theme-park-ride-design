---
id: spinning-and-4d-coasters
title: Spinning & 4D Coasters
land: ride-systems
level: intermediate
abstraction: concept
parent: roller-coasters
children: []
relations:
  - { type: applies-to, target: vestibular-system }
  - { type: causes, target: motion-sickness }
  - { type: example-of, target: arrow-dynamics }
  - { type: enables, target: surprise-and-delight }
  - { type: applies-to, target: semicircular-canals }
summary: Cars that rotate on the track, freely or under control, so the same layout rides differently every time.
tags: [coasters, spinning, 4d, rotation, variability]
visuals: [mermaid]
interactive_idea: "Ride a short layout with free spin on or off and with different seat weights; a compass shows the car's heading at each element."
sources: [wikipedia-spinning-roller-coaster, wikipedia-4th-dimension-roller-coaster, s-s-4d-free-spin-coaster]
confidence: high
---
```mermaid
flowchart TD
  A[Car rotates relative to track] --> B{Which axis?}
  B -->|vertical axis, yaw| C[Spinning coaster]
  B -->|lateral axis, pitch| D[4D coaster]
  C --> C1[Free spin from weight and track forces]
  C --> C2[Controlled spin locked in sections]
  D --> D1[Arrow X rails with rack and pinion]
  D --> D2[S and S Free Spin, magnets steer flips]
```

A spinning coaster adds a rotation the track did not ask for. In the classic form the car sits on a turntable and **yaws**, turning left and right as the layout's curves and the riders' weight shove it around. The result is a ride that is different every time: a heavy pair on one side, a sharp turn, and the car whips backward into the next drop. The idea dates to the 1908 Virginia Reel at Coney Island; Maurer, Gerstlauer and Mack's Xtreme Spinning Coaster (Time Traveler, 2018) are modern versions, usually with brakes that lock the spin in some sections.

**4D coasters** rotate on the other axis: seats pitch head-over-heels while the track stays flat. Arrow's X at Six Flags Magic Mountain (2002) used two extra rails and a rack-and-pinion to script every flip, a last feat from [Arrow Dynamics](../history/arrow-dynamics.md). S&S's Free Spin and Intamin's ZacSpin let seats tumble freely, with magnets nudging flips in chosen places.

Both styles trade on [surprise](../human-factors/surprise-and-delight.md) and on the [vestibular system](../human-factors/vestibular-system.md): unexpected rotation stirs the [semicircular canals](../human-factors/semicircular-canals.md), which is thrilling for some riders and a straight route to [motion sickness](../human-factors/motion-sickness.md) for others.

## Explore further
- `wikipedia-spinning-roller-coaster` — Spinning roller coaster (Wikipedia)
- `wikipedia-4th-dimension-roller-coaster` — Fourth-dimension roller coaster (Wikipedia)
- `s-s-4d-free-spin-coaster` — S&S 4D Free Spin Coaster
