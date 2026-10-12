---
id: phase-timeline
title: Phase Timeline
land: design-process
level: beginner
abstraction: concept
parent: pipeline-overview
children: []
relations:
  - { type: part-of, target: pipeline-overview }
  - { type: limits, target: scope-and-value-engineering }
summary: A plausible four-year calendar for a major attraction, showing how long each pipeline phase runs and where they overlap.
tags: [sample-content, design-process, schedule, gantt, phases]
visuals:
  - { type: mermaid, title: "A four-year attraction timeline", alt: "Gantt chart of seven overlapping phases from blue sky in early 2027 to opening in spring 2031" }
sources:
  - { title: "Theme Park Design & The Art of Themed Entertainment", author: "David Younger", year: 2016 }
  - { title: "The Imagineering Workout", author: "The Imagineers", year: 2005 }
confidence: medium
---

```mermaid
%% title: A four-year attraction timeline | alt: Gantt chart of seven overlapping phases from blue sky in early 2027 to opening in spring 2031
gantt
  title Illustrative attraction schedule
  dateFormat YYYY-MM
  axisFormat %Y
  section Design
    Blue sky            :a1, 2027-01, 4M
    Concept             :a2, 2027-04, 6M
    Schematic           :a3, 2027-09, 7M
    Design development  :a4, 2028-03, 10M
  section Build
    Fabrication         :b1, 2028-10, 14M
    Install             :b2, 2029-09, 10M
    Test and adjust     :b3, 2030-06, 10M
  section Launch
    Opening             :milestone, 2031-04, 0d
```

Big attractions take years, and most of that time is not drawing. A typical major ride runs about four years from the first blue-sky sessions to opening day, and the chart above shows a plausible shape rather than any real project. Notice how the phases overlap: fabrication starts before design development is fully closed, and installation begins while shops are still building later scenes. That overlap is deliberate, because a strictly one-after-another schedule would add a year or more. The cost is that late design changes become expensive once steel is cut, which is why the timeline acts as a hard limit on [scope and value engineering](../design-process/scope-and-value-engineering.md): after a certain date, cutting a scene saves little and adds risk. The longest single stretch is usually test and adjust, where [ride control systems](../safety-standards/ride-control-systems.md) are commissioned and every effect is tuned. The whole sequence sits inside the broader [concept-to-opening pipeline](../design-process/pipeline-overview.md).

## Explore further
- [Concept-to-Opening Pipeline](../design-process/pipeline-overview.md) — what each phase is for.
- [Risk Assessment](../safety-standards/risk-assessment.md) — the safety work that runs alongside the schedule.
