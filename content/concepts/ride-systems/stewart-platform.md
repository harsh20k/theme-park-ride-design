---
id: stewart-platform
title: Stewart Platform
land: ride-systems
level: advanced
abstraction: sub-concept
parent: motion-base
children: []
relations:
  - { type: enables, target: motion-simulator-theatre }
  - { type: applies-to, target: motion-cueing }
  - { type: applies-to, target: figure-actuation }
  - { type: applies-to, target: software-toolkit }
  - { type: example-of, target: borrowed-crafts }
summary: Six jacks between a base and a platform give six degrees of freedom; the hexapod under most big simulators.
tags: [simulators, hexapod, stewart, kinematics, six-dof]
visuals: [formula]
interactive_idea: "Drag the platform in 3D and watch six leg lengths update live, with a warning when a leg hits its stroke limit."
sources: [wikipedia-stewart-platform, stewart-1965-six-dof-platform, wikipedia-motion-simulator]
confidence: high
---
> **Formula** $\ell_i = \left\| R\,p_i + t - b_i \right\|, \quad i = 1 \ldots 6$
> where
> - $\ell_i$ is the required length of leg $i$
> - $R$ is the platform's rotation (roll, pitch, yaw) as a matrix
> - $t$ is the platform's translation (surge, sway, heave)
> - $p_i$ is where leg $i$ attaches to the platform, in platform coordinates
> - $b_i$ is where leg $i$ attaches to the base

A Stewart platform, or hexapod, is the simplest machine that can move a rigid body in all six degrees of freedom. Six extendable legs, usually hydraulic or electric jacks, connect a fixed base to a moving top plate through ball or universal joints. Lengthen all six and the plate rises; lengthen one side and it rolls. Any pose is just a set of six leg lengths, and the formula above, the inverse kinematics, is all a controller needs to turn a desired pose into commands.

The design is older than its name. Eric Gough built one at Dunlop in 1954 to test tyres; D. Stewart's 1965 paper proposed it for flight simulation. Aviation adopted it, and theme parks borrowed it back ([borrowed crafts](../story-experience/borrowed-crafts.md)): the hydraulic cabins of Star Tours are hexapods, as are most [motion simulator theatres](../ride-systems/motion-simulator-theatre.md).

The hexapod's strengths are stiffness and precision, since every leg carries load in pure tension or compression. Its weakness is a small workspace, which is why [motion cueing](../ride-systems/motion-cueing.md) exists. The same geometry appears under animatronic figures ([figure actuation](../show-technology/figure-actuation.md)) and in the kinematics tools of a designer's [software toolkit](../careers/software-toolkit.md).

## Explore further
- `wikipedia-stewart-platform` — Stewart platform (Wikipedia)
- `stewart-1965-six-dof-platform` — A Platform with Six Degrees of Freedom (Stewart, 1965)
- `wikipedia-motion-simulator` — Motion simulator (Wikipedia)
