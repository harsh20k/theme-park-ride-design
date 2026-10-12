---
id: queue-fairness
title: Queue Fairness
land: human-factors
level: beginner
abstraction: concept
parent: waiting
children: []
relations:
  - { type: applies-to, target: crowd-management }
  - { type: limits, target: paid-priority-access }
  - { type: applies-to, target: rider-compliance }
  - { type: applies-to, target: pricing }
  - { type: applies-to, target: load-unload-design }
summary: A queue is a social contract; seeing it broken hurts more than the minutes lost.
tags: [waiting, fairness, social, queues]
visuals: [svg]
interactive_idea: "Two layouts, one serpentine line and several parallel lines, with random service times; a fairness score counts how often a later arrival is served first."
sources: [larson-1987-queue-social-justice, maister-psychology-of-waiting-lines]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M20 40 L120 40 L120 70 L20 70 L20 100 L120 100 L120 130 L140 130" />
  <rect x="140" y="120" width="16" height="20" />
  <text x="20" y="160" font-size="11" fill="currentColor" stroke="none">one serpentine line: first come, first served</text>
  <path d="M190 40 L300 40 M190 70 L300 70 M190 100 L300 100" />
  <rect x="300" y="33" width="12" height="14" /><rect x="300" y="63" width="12" height="14" /><rect x="300" y="93" width="12" height="14" />
  <circle cx="230" cy="40" r="5" fill="currentColor" /><circle cx="270" cy="70" r="5" fill="currentColor" fill-opacity="0.4" />
  <text x="190" y="130" font-size="11" fill="currentColor" stroke="none">parallel lines: the later</text>
  <text x="190" y="145" font-size="11" fill="currentColor" stroke="none">arrival may be served first</text>
</svg>

Richard Larson's 1987 paper argued that queueing theory had ignored the thing waiting people care about most: justice. A line is a social system with one rule, first come, first served. Violations come in two flavours he named *slips* (someone who arrived later is served earlier through no fault of yours, as happens with parallel lines) and *skips* (someone jumps ahead). Both produce anger out of proportion to the time lost, and the serpentine single line is popular partly because it makes slips impossible.

Theme parks are a hard case because they sell violations. [Paid priority access](../human-factors/paid-priority-access.md) is a sanctioned skip, and the standby guest who watches the express lane flow past at the merge point feels Larson's injustice in real time. [Pricing](../operations-business/pricing.md) has to weigh that resentment against revenue, and [load design](../operations-business/load-unload-design.md) often hides the merge so the comparison is not made face to face.

Fairness also governs behaviour. Guests who feel the rules are enforced comply with them, which is the basis of [rider compliance](../human-factors/rider-compliance.md) and of calm [crowd management](../operations-business/crowd-management.md); guests who see cutting go unpunished start cutting.

## Explore further
- `larson-1987-queue-social-justice` — Perspectives on Queues: Social Justice and the Psychology of Queueing
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines
