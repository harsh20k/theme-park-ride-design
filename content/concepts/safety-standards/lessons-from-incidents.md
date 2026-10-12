---
id: lessons-from-incidents
title: Lessons from Incidents
land: safety-standards
level: intermediate
abstraction: super-concept
parent: null
children: [incident-overview, human-factors-incidents, mechanical-failure-cases, design-oversight-cases, safety-culture]
relations:
  - { type: applies-to, target: risk-perception-and-trust }
  - { type: enables, target: design-reviews-and-gates }
  - { type: applies-to, target: guest-recovery }
  - { type: applies-to, target: risk-assessment }
  - { type: contrasts-with, target: fear-vs-fun }
summary: Serious ride accidents are rare and almost always have several causes; studying them respectfully is how the industry improves.
tags: [incidents, lessons, swiss-cheese, investigation, culture]
visuals: [svg]
interactive_idea: "Slide the holes in four Swiss-cheese layers for a real case and see how many had to line up before harm got through."
sources: [reason-bmj-2000-human-error, wikipedia-swiss-cheese-model, qld-coroner-dreamworld-2020]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2">
  <text x="12" y="20" font-size="11" fill="currentColor" stroke="none">Swiss cheese: harm needs holes in every layer to line up</text>
  <g transform="skewX(-12)">
    <rect x="60" y="40" width="34" height="120" rx="4" fill="currentColor" fill-opacity="0.12"/>
    <rect x="120" y="40" width="34" height="120" rx="4" fill="currentColor" fill-opacity="0.12"/>
    <rect x="180" y="40" width="34" height="120" rx="4" fill="currentColor" fill-opacity="0.12"/>
    <rect x="240" y="40" width="34" height="120" rx="4" fill="currentColor" fill-opacity="0.12"/>
    <circle cx="77" cy="100" r="7"/><circle cx="137" cy="100" r="7"/><circle cx="197" cy="100" r="7"/><circle cx="257" cy="100" r="7"/>
    <circle cx="80" cy="60" r="5"/><circle cx="135" cy="140" r="6"/><circle cx="200" cy="70" r="5"/><circle cx="252" cy="135" r="5"/>
  </g>
  <path d="M20 100 L300 100" stroke-dasharray="6 4"/>
  <text x="40" y="172" font-size="10" fill="currentColor" stroke="none">design</text>
  <text x="100" y="172" font-size="10" fill="currentColor" stroke="none">maintenance</text>
  <text x="172" y="172" font-size="10" fill="currentColor" stroke="none">procedure</text>
  <text x="236" y="172" font-size="10" fill="currentColor" stroke="none">operator</text>
</svg>

Rides are among the safest things people do for fun, which is exactly why the rare serious accident deserves careful study. James Reason's Swiss cheese model is the right lens: each defence, design, maintenance, procedure, operator, is a slice with holes, and harm only passes when the holes line up.

This section looks at a small number of well-documented cases, drawing only on official findings and reputable reporting, and keeps the focus on what changed afterwards. The [incident overview](../safety-standards/incident-overview.md) sets the context and introduces the cases. [Human-factors incidents](../safety-standards/human-factors-incidents.md) cover overrides, skipped tasks and training gaps. [Mechanical failure cases](../safety-standards/mechanical-failure-cases.md) look at corrosion and fasteners. [Design oversight cases](../safety-standards/design-oversight-cases.md) show how a ride can be modified for decades without anyone re-asking the basic questions. [Safety culture](../safety-standards/safety-culture.md) ties them together.

The people in these cases were real, so the tone is factual and the point is prevention, not blame. And the lessons are design inputs: they belong in [risk assessments](../safety-standards/risk-assessment.md) and [design review gates](../design-process/design-reviews-and-gates.md), not just in training slides. They also shape how parks handle guests afterwards through [guest recovery](../operations-business/guest-recovery.md), and they remind us that the thrill of [fear versus fun](../human-factors/fear-vs-fun.md) rests on trust that must be earned every day.

## Explore further
- `reason-bmj-2000-human-error` — James Reason, Human error: models and management (BMJ, 2000)
- `wikipedia-swiss-cheese-model` — Wikipedia: Swiss cheese model
- `qld-coroner-dreamworld-2020` — Coroners Court of Queensland: Findings of the Dreamworld inquest
