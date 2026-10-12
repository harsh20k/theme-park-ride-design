---
id: guest-research
title: Guest Research & Surveys
land: operations-business
level: intermediate
abstraction: concept
parent: data-and-technology
children: []
relations:
  - { type: applies-to, target: experiencing-vs-remembering-self }
  - { type: enables, target: post-opening-plussing }
  - { type: applies-to, target: soft-opening }
  - { type: enables, target: roi-and-attendance-modeling }
  - { type: applies-to, target: guest-recovery }
summary: Exit surveys, intercepts, panels and observation tell operators what guests felt, which the data streams cannot.
tags: [data, research, surveys, satisfaction]
visuals: [mermaid]
interactive_idea: "Design a five-question exit survey, run it on a simulated crowd with known preferences, and see which questions actually predict intent to return."
sources: [milman-2001-future-of-theme-park-industry, openlibrary-walts-revolution, popsci-touring-plans-wait-time-science-2017]
confidence: medium
---
```mermaid
flowchart LR
  A["Before a project<br/>market studies, concept tests"] --> B["During design<br/>mock-ups, focus groups,<br/>soft-opening feedback"]
  B --> C["In operation<br/>exit intercepts, app surveys,<br/>observation"]
  C --> D["Metrics<br/>satisfaction, intent to return,<br/>recommend, value for money"]
  D --> E["Decisions<br/>plussing, staffing,<br/>next capital project"]
  E -. new questions .-> A
```

Sensors can tell you where a guest went; only the guest can tell you how it felt. Guest research is the set of methods for asking. The oldest is the market study, the kind Buzz Price pioneered for Disneyland in 1953, which asks who would come and what they would pay. During design, operators test concepts with focus groups and watch real families in mock-ups and [soft openings](../design-process/soft-opening.md). In operation, the staples are the exit intercept, a short interview as guests leave, and app or email surveys the next day.

The questions converge on a few metrics: overall satisfaction, value for money, intent to return and willingness to recommend, often broken down by ride, meal and interaction. Academic work such as Ady Milman's 2001 survey of park managers shows how closely the industry ties these to business outcomes. Because people rate a day from its peaks and ending, survey timing matters, a point from [experiencing vs remembering self](../human-factors/experiencing-vs-remembering-self.md).

Results drive [post-opening plussing](../design-process/post-opening-plussing.md), staffing changes and the case for the next capital project. Third parties run their own panels: Touring Plans uses reader surveys to rate attractions. Operators' internal survey instruments are confidential, so this card describes the practice in general.

## Explore further
- `milman-2001-future-of-theme-park-industry` — The Future of the Theme Park and Attraction Industry
- `openlibrary-walts-revolution` — Walt's Revolution! By the Numbers
- `popsci-touring-plans-wait-time-science-2017` — These data scientists are disrupting Disney World's long wait times
