---
id: wheels-and-bogies
title: Wheels & Bogies
land: ride-engineering
level: beginner
abstraction: concept
parent: braking-and-control-hardware
children: []
relations:
  - { type: enables, target: inverted-coasters }
  - { type: applies-to, target: friction-and-drag }
  - { type: example-of, target: early-coasters }
  - { type: applies-to, target: spare-parts-and-obsolescence }
  - { type: applies-to, target: inspections }
summary: Three sets of wheels grip the rail from above, beside and below so the train can never leave it.
tags: [wheels, upstop, polyurethane, bogie, hardware]
visuals: [svg]
interactive_idea: "Rotate a rail cross-section and tap each wheel to see which load it carries during a loop, a turn and an airtime hill."
sources: [coaster101-wheel-design, wikipedia-roller-coaster-wheel-assembly, google-patents-us-1319888, wikipedia-great-coasters-international]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cross-section of a tubular rail gripped by road, guide and upstop wheels">
  <circle cx="160" cy="95" r="22" fill="none" stroke="currentColor" stroke-width="4"/>
  <circle cx="160" cy="52" r="18" fill="#4c78a8"/>
  <circle cx="116" cy="95" r="14" fill="#f58518"/>
  <circle cx="160" cy="134" r="12" fill="#54a24b"/>
  <line x1="160" y1="34" x2="160" y2="14" stroke="currentColor" stroke-width="2"/>
  <line x1="100" y1="95" x2="60" y2="95" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="146" x2="160" y2="166" stroke="currentColor" stroke-width="2"/>
  <text x="168" y="20" font-size="11" fill="currentColor">road wheel: carries weight</text>
  <text x="10" y="80" font-size="11" fill="currentColor">guide wheel:</text>
  <text x="10" y="118" font-size="11" fill="currentColor">steers</text>
  <text x="168" y="170" font-size="11" fill="currentColor">upstop wheel: resists lift-off</text>
</svg>

A coaster train is not sitting on its track; it is clamped to it. Road wheels run on top of the rail and carry the weight, so they are the largest. Guide wheels press against the side of the rail, often spring-loaded, and steer the car through curves. Upstop wheels run underneath and take over at a hill crest or in a loop, when the track is trying to leave the train behind. John Miller's 1919 patent for under-rail rollers that keep wheels "from jumping off" is the ancestor of every inversion since.

Wheels are typically an aluminium hub with a bonded polyurethane or nylon-blend tyre. Coaster101 lays out the trade: nylon is fast and rough; polyurethane is smooth and slower. Parks mix compounds to tune a ride's speed, which links wheel choice to [friction and drag](../ride-engineering/friction-and-drag.md).

The bogie, the frame holding a wheel set, is where ride quality is decided. Old wooden coasters used fixed axles that let cars shuffle through turns; Great Coasters International's articulated Millennium Flyer trains reduce that. Wheel wear is a daily item in [inspections](../safety-standards/inspections.md), bespoke compounds are a classic [spare parts](../operations-business/spare-parts-and-obsolescence.md) problem, and hanging the bogie above the car gave us the [inverted coaster](../ride-systems/inverted-coasters.md).

## Explore further
- `coaster101-wheel-design` — Coasters-101: Roller Coaster Wheel Design
- `wikipedia-roller-coaster-wheel-assembly` — Roller coaster wheel assembly
- `google-patents-us-1319888` — US 1,319,888 Pleasure-Railway Structure (John A. Miller, 1919)
