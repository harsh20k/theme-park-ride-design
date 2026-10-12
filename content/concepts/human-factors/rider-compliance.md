---
id: rider-compliance
title: Rule-Following & Rider Compliance
land: human-factors
level: intermediate
abstraction: concept
parent: behavior-and-decision
children: []
relations:
  - { type: applies-to, target: human-factors-incidents }
  - { type: applies-to, target: operator-training }
  - { type: applies-to, target: restraint-design-rules }
  - { type: applies-to, target: reach-envelope }
  - { type: applies-to, target: dispatch-procedures }
summary: Most riders follow the rules when rules are few, clear, and physically easy to obey.
tags: [safety, compliance, operations, human-error]
visuals: [mermaid]
interactive_idea: "A station simulator where you choose how rules are delivered (sign, voice, spiel, design) and see simulated compliance rates change."
sources: [astm-f770-operation-maintenance, iaapa-safety-and-security, thaler-sunstein-nudge]
confidence: medium
---
```mermaid
flowchart LR
  A[Rule exists] --> B{Did the rider notice it}
  B -- no --> X[Non-compliance]
  B -- yes --> C{Did they understand it}
  C -- no --> X
  C -- yes --> D{Is it easy to obey}
  D -- no --> X
  D -- yes --> E{Does it feel reasonable}
  E -- no --> X
  E -- yes --> Y[Compliance]
```

Rider compliance is the share of guests who actually keep hands inside, stay seated, stow loose items and respect height limits. Many ride injuries involve a rider doing something the ride was not designed for, so compliance is a safety topic, and it reaches operations standards such as ASTM F770 through operator training and procedures.

People break rules for predictable reasons. They did not see the sign in a crowded station, they did not understand it, obeying was awkward, or the rule seemed pointless. Each failure has a design answer. A spoken spiel reaches people who ignore signs. A pictogram crosses languages. A bin for loose articles at the load point makes stowing easy. A short, honest reason makes the rule feel sensible. Good [choice architecture](../human-factors/choice-architecture.md) makes the compliant option the default rather than a request.

The deepest fix is engineering out the chance to fail. [Reach envelopes](../safety-standards/reach-envelope.md) place anything a rider could grab out of range. [Restraint design rules](../safety-standards/restraint-design-rules.md) assume the rider will try to wriggle. Operators are trained to check, not just ask, before [dispatch](../safety-standards/dispatch-procedures.md). The [human-factors incidents](../safety-standards/human-factors-incidents.md) record shows what happens when any of those layers is skipped.

## Explore further
- `astm-f770-operation-maintenance` — ASTM F770-22 Standard Practice for Ownership, Operation, Maintenance, and Inspection
- `iaapa-safety-and-security` — IAAPA Safety & Security resources
- `thaler-sunstein-nudge` — Nudge (book)
