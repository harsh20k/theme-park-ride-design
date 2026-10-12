---
id: surprise-and-delight
title: Surprise & Delight
land: human-factors
level: beginner
abstraction: concept
parent: emotion-and-thrill
children: []
relations:
  - { type: applies-to, target: misdirection }
  - { type: applies-to, target: plussing }
  - { type: example-of, target: expedition-everest }
  - { type: applies-to, target: service-culture }
  - { type: enables, target: peak-end-rule }
summary: "Delight is satisfaction plus surprise: a good thing you did not see coming."
tags: [psychology, emotion, surprise, service]
visuals: [mermaid]
interactive_idea: "Set an expectation slider and an outcome slider; the gap is labelled disappointment, satisfaction or delight."
sources: [oliver-1997-customer-delight]
confidence: high
---
```mermaid
flowchart LR
    E[Expectation] --> C{Compare}
    O[Outcome] --> C
    C -- below --> D1[Disappointment]
    C -- about equal --> D2[Satisfaction]
    C -- well above and unexpected --> D3((Delight))
    D3 --> A[Arousal plus joy]
    A --> R[Repeat visits, word of mouth]
```

Richard Oliver and colleagues separated delight from mere satisfaction. Satisfaction is getting what you expected. Delight is a positive surprise large enough to raise arousal, and in their studies, one of them run in a theme park, it predicted loyalty more strongly than satisfaction did. The practical reading: meeting expectations keeps guests; exceeding them unexpectedly makes fans.

Rides manufacture surprise with structure. Expedition Everest at Disney's Animal Kingdom sends its train up to broken track, then rolls it backwards into darkness, a reversal most first-time riders do not predict. Dark rides hide a gag behind a turn using [misdirection](../show-technology/misdirection.md). Small, unadvertised details, the hidden sculptures and in-jokes that come from [plussing](../story-experience/plussing.md), reward guests who look closely.

Surprise is spent quickly. Once the trick is known, delight fades toward satisfaction, which is why parks keep adding and why [service culture](../operations-business/service-culture.md) matters: a cast member's unexpected kindness cannot be spoiled online. Delight also tends to become the remembered [peak](../human-factors/peak-end-rule.md) of a day.

## Explore further
- `oliver-1997-customer-delight` — Customer Delight: Foundations, Findings, and Managerial Insight
