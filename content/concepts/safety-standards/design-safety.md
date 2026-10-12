---
id: design-safety
title: Design Safety
land: safety-standards
level: advanced
abstraction: super-concept
parent: null
children: [risk-assessment, ride-control-systems, redundancy-and-fail-safe, safety-integrity-levels, reach-envelope, emergency-stop-and-evacuation, restraint-design-rules, patron-accommodation]
relations:
  - { type: applies-to, target: design-reviews-and-gates }
  - { type: enables, target: safe-danger-paradox }
  - { type: applies-to, target: restraint-mechanisms }
  - { type: limits, target: acceleration-envelopes }
  - { type: enables, target: protective-frame }
summary: Building safety into the ride itself, through risk assessment, control logic, redundancy, clearances, restraints and evacuation.
tags: [design, safety, engineering, risk, controls]
visuals: [svg]
interactive_idea: "Remove one layer of defence at a time and watch the simulated hazard path reach the rider."
sources: [astm-f2291-design, iso-12100-risk-assessment, genorma-en-13814-1]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <rect x="10" y="20" width="300" height="140" rx="12" stroke-dasharray="4 3"/>
  <text x="20" y="40" font-size="11" fill="currentColor" stroke="none">Design-safety layers</text>
  <rect x="30" y="50" width="260" height="100" rx="10"/>
  <text x="40" y="66" font-size="10" fill="currentColor" stroke="none">1 Risk assessment removes hazards</text>
  <rect x="50" y="72" width="220" height="70" rx="8"/>
  <text x="60" y="88" font-size="10" fill="currentColor" stroke="none">2 Restraints, clearances, structure</text>
  <rect x="70" y="94" width="180" height="42" rx="6"/>
  <text x="80" y="110" font-size="10" fill="currentColor" stroke="none">3 Control system and redundancy</text>
  <rect x="90" y="116" width="140" height="16" rx="4" fill="currentColor" fill-opacity="0.15"/>
  <text x="100" y="128" font-size="10" fill="currentColor" stroke="none">4 E-stop and evacuation</text>
</svg>

Design safety is the part of ride safety that is decided before any steel is cut. The idea is layered. First, a [risk assessment](../safety-standards/risk-assessment.md) finds the hazards and removes as many as possible from the design itself. Second, the physical envelope is set: [restraint design rules](../safety-standards/restraint-design-rules.md), the [reach envelope](../safety-standards/reach-envelope.md) that keeps limbs clear of structure, and the acceleration limits that cap what the body sees. Third, the [ride control system](../safety-standards/ride-control-systems.md) watches everything with [redundant, fail-safe](../safety-standards/redundancy-and-fail-safe.md) logic rated to a [safety integrity level](../safety-standards/safety-integrity-levels.md). Last, when something still goes wrong, [emergency stop and evacuation](../safety-standards/emergency-stop-and-evacuation.md) design gets people out, and [patron accommodation](../safety-standards/patron-accommodation.md) makes sure the ride fits the bodies that use it.

Standards such as ASTM F2291, EN 13814 and the general machinery standard ISO 12100 formalise these layers. The point for a creative team is that safety is a design input, not a review at the end. A well-engineered ride is what lets a guest enjoy the [safe-danger paradox](../human-factors/safe-danger-paradox.md): real forces inside a [protective frame](../human-factors/protective-frame.md) they can trust.

## Explore further
- `astm-f2291-design` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
- `iso-12100-risk-assessment` — ISO 12100:2010 Safety of machinery, risk assessment and risk reduction
- `genorma-en-13814-1` — EN 13814-1:2019+A1:2024 Safety of amusement rides, Part 1
