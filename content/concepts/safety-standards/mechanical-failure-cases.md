---
id: mechanical-failure-cases
title: Mechanical Failure Cases
land: safety-standards
level: intermediate
abstraction: concept
parent: lessons-from-incidents
children: []
relations:
  - { type: applies-to, target: corrosion-and-weathering }
  - { type: applies-to, target: fatigue }
  - { type: applies-to, target: inspections }
  - { type: applies-to, target: spare-parts-and-obsolescence }
  - { type: applies-to, target: wheels-and-bogies }
summary: Hidden corrosion and loose fasteners show why ageing steel needs inspection that looks inside, not just at the surface.
tags: [corrosion, fasteners, ndt, ageing-rides, bulletins]
visuals: [svg]
interactive_idea: "Age a steel beam with a slider: the cross-section wall thins invisibly inside while the painted outside looks fine, until a stress line crosses the limit."
sources: [wosu-fire-ball-corrosion-2017, tpi-big-thunder-2003, wikipedia-disneyland-incidents, ridesdatabase-bulletins]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <text x="12" y="20" font-size="11" fill="currentColor" stroke="none">Hollow beam cross-section: outside painted, inside thinning</text>
  <rect x="30" y="40" width="110" height="110" rx="10"/>
  <rect x="44" y="54" width="82" height="82" rx="6" stroke-dasharray="3 3"/>
  <text x="50" y="100" font-size="10" fill="currentColor" stroke="none">new: thick wall</text>
  <rect x="180" y="40" width="110" height="110" rx="10"/>
  <path d="M190 50 Q230 70 280 48 Q270 100 282 140 Q230 120 188 142 Q200 100 190 50 Z" fill="currentColor" fill-opacity="0.2"/>
  <text x="196" y="100" font-size="10" fill="currentColor" stroke="none">aged: wall eaten</text>
  <text x="196" y="112" font-size="10" fill="currentColor" stroke="none">from inside</text>
  <text x="30" y="170" font-size="10" fill="currentColor" stroke="none">same paint, same look from the midway</text>
</svg>

On 26 July 2017 the Fire Ball, a KMG pendulum ride travelling with the Ohio State Fair, lost a gondola arm in motion; one rider died and others were seriously hurt. After metallurgical tests the manufacturer said excessive corrosion inside the gondola support beam had dangerously thinned the wall over the ride's eighteen years, leading to a catastrophic failure. KMG ordered similar rides closed worldwide and issued a revised inspection protocol before they could reopen. Water gets inside hollow sections, and only NDT such as ultrasonic thickness testing can see the loss, so the manual must say where and how often to look.

Big Thunder Mountain Railroad in 2003 was a fastener problem. An upstop guide wheel came off after its retaining hardware was not properly secured during maintenance; the floating axle then dropped and struck a brake, lifting the locomotive onto the first car.

Both cases feed directly into [inspections and NDT](../safety-standards/inspections.md) practice, into how parks treat [corrosion and weathering](../ride-engineering/corrosion-and-weathering.md) and [fatigue](../ride-engineering/fatigue.md), and into the bulletin system that warns every owner of the same [wheels and bogies](../ride-engineering/wheels-and-bogies.md) or arm design. Ageing fleets also raise [spare parts and obsolescence](../operations-business/spare-parts-and-obsolescence.md) questions.

## Explore further
- `wosu-fire-ball-corrosion-2017` — WOSU: Fire Ball manufacturer blames Ohio State Fair accident on excessive corrosion
- `tpi-big-thunder-2003` — Theme Park Insider: Disney takes blame for Thunder Mountain death
- `wikipedia-disneyland-incidents` — Wikipedia: List of incidents at Disneyland Resort
- `ridesdatabase-bulletins` — RidesDatabase: Amusement ride safety bulletins
