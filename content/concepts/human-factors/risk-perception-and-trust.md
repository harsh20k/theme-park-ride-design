---
id: risk-perception-and-trust
title: Risk Perception & Trust
land: human-factors
level: intermediate
abstraction: concept
parent: behavior-and-decision
children: []
relations:
  - { type: applies-to, target: safe-danger-paradox }
  - { type: applies-to, target: lessons-from-incidents }
  - { type: applies-to, target: safety-culture }
  - { type: applies-to, target: incident-reporting }
  - { type: enables, target: protective-frame }
summary: How risky a ride feels depends on dread and familiarity, not on the statistics.
tags: [risk, trust, safety, psychology]
visuals: [chart]
interactive_idea: "Plot park activities on Slovic's dread and unknown axes yourself, then compare with a published risk map."
sources: [slovic-perception-of-risk-1987, iaapa-safety-and-security]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: where park experiences might sit on Slovic's two risk factors",
  "width": 300, "height": 160,
  "data": {"values": [
    {"item": "Carousel", "dread": 1, "unknown": 1},
    {"item": "Family coaster", "dread": 3, "unknown": 2},
    {"item": "Giga coaster", "dread": 7, "unknown": 3},
    {"item": "New launch coaster", "dread": 7, "unknown": 6},
    {"item": "Drive to the park", "dread": 2, "unknown": 1}
  ]},
  "mark": {"type": "point", "filled": true, "size": 90},
  "encoding": {
    "x": {"field": "dread", "type": "quantitative", "title": "Dread (uncontrollable, catastrophic)"},
    "y": {"field": "unknown", "type": "quantitative", "title": "Unknown (new, unobservable)"},
    "tooltip": {"field": "item"}
  }
}
```

Paul Slovic's 1987 paper *Perception of Risk* showed that lay people judge risk on two feelings rather than on probabilities. **Dread** rises when a hazard feels uncontrollable, catastrophic and involuntary. **Unknown** rises when it is new, unobservable or poorly understood by science. Nuclear power scores high on both; driving scores low on both despite killing far more people.

A roller coaster is a dread machine by design. You are strapped in, you cannot stop it, and it looks like it could kill you. That feeling is the product, as the [safe danger paradox](../human-factors/safe-danger-paradox.md) explains, and it only works because of a second thing: trust. Guests ride because they believe the operator, the manufacturer and the inspectors have made the dread hollow. That belief is the [protective frame](../human-factors/protective-frame.md) that turns fear into fun.

Trust is slow to build and quick to lose. One widely reported incident anywhere in the industry raises perceived risk everywhere, which is why operators invest in visible inspection, clear [incident reporting](../safety-standards/incident-reporting.md) and the [lessons-learned](../safety-standards/lessons-from-incidents.md) culture promoted by bodies such as IAAPA. Designers can help: a ride that looks maintained, with clean restraints and calm, confident operators, lowers the "unknown" factor before the train leaves the station.

## Explore further
- `slovic-perception-of-risk-1987` — Perception of Risk
- `iaapa-safety-and-security` — IAAPA Safety & Security resources
