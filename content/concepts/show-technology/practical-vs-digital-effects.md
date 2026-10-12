---
id: practical-vs-digital-effects
title: Practical vs Digital Effects
land: show-technology
level: beginner
abstraction: concept
parent: illusions
children: []
relations:
  - { type: applies-to, target: scope-and-value-engineering }
  - { type: applies-to, target: multisensory-integration }
  - { type: contrasts-with, target: immersive-media }
  - { type: applies-to, target: maintenance-and-lifecycle }
  - { type: applies-to, target: screens-vs-sets-debate }
summary: Physical effects are felt and smelled; digital ones are safe and changeable. Each has a job.
tags: [practical-effects, digital-effects, fire, media, trade-offs]
visuals: [mermaid]
interactive_idea: "Answer four questions about an effect; a decision tree recommends practical, digital, or a hybrid with a safety note."
sources: [wikipedia-practical-effect, technifex-effects, wikipedia-hatbox-ghost]
confidence: high
---
```mermaid
flowchart TD
  A["What must the guest experience?"] --> B{"Felt, smelled or touched?"}
  B -->|"yes"| C["Practical: fire, water, wind, scent, moving set"]
  B -->|"no"| D{"Must it change often or scale big?"}
  D -->|"yes"| E["Digital: projection or screen media"]
  D -->|"no"| F{"Does a real object need a changing face?"}
  F -->|"yes"| G["Hybrid: projection mapped onto a set or figure"]
  F -->|"no"| C
```

A practical effect is produced physically in front of the guest: real flame, real water, a real wall that moves. A digital effect is created in software and delivered as light. Practical effects often borrow from magic and only work from certain angles, so vehicle path and sightlines become part of the effect.

Practical wins on the senses. Heat on the face, mist on the arms and the smell of a scene are things no projector can send, and they feed the [multisensory](../human-factors/multisensory-integration.md) impression that makes a ride feel real. Vendors such as Technifex sell real fire, simulated fire, steam and water systems built for daily operation; their FauxFIRE line shows the hybrid middle ground, a safe physical effect that imitates a dangerous one.

Digital wins on change and risk. New media costs no steel and no permits, and it cannot burn anyone. The Hatbox Ghost is the lesson in combining them: a physical figure whose face is projected, so the body is real and the vanishing is pixels. Treat the choice as a [scope and value](../design-process/scope-and-value-engineering.md) decision with a [lifecycle](../operations-business/maintenance-and-lifecycle.md) cost attached, and as the hands-on sibling of the broader [screens versus sets](../show-technology/screens-vs-sets-debate.md) debate.

## Explore further
- `wikipedia-practical-effect` — Practical effect
- `technifex-effects` — Technifex: special effects and show systems
- `wikipedia-hatbox-ghost` — Hatbox Ghost
