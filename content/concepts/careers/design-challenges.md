---
id: design-challenges
title: Design Challenges & Practice
land: careers
level: beginner
abstraction: concept
parent: learning-resources
children: []
relations:
  - { type: applies-to, target: ride-layout-design }
  - { type: applies-to, target: ride-beat-sheet }
  - { type: applies-to, target: throughput-math }
  - { type: enables, target: portfolio-building }
  - { type: applies-to, target: design-reviews-and-gates }
summary: Self-set briefs modelled on real competitions, so you practise constraints, not just drawings.
tags: [careers, practice, briefs, exercises, portfolio]
visuals: [chart]
interactive_idea: "A brief generator that rolls a random IP-free theme, footprint, throughput target and budget band, then times a 48-hour sprint."
sources: [nd-tea-club-projects, tmu-thrill-design-competition, attractions-management-imagineering-in-a-box, nolimits-2]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: how to spend a 20-hour practice brief",
  "width": 300, "height": 150,
  "data": {"values": [
    {"step": "1 Read brief, set constraints", "hours": 1},
    {"step": "2 Story premise and beat sheet", "hours": 3},
    {"step": "3 Plan and section sketches", "hours": 5},
    {"step": "4 Layout in a simulator", "hours": 5},
    {"step": "5 Check throughput and cost", "hours": 2},
    {"step": "6 Boards and five-minute pitch", "hours": 4}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "step", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "hours", "type": "quantitative", "title": "hours"}
  }
}
```

Competitions teach by constraint; borrow their formats. The Thrill Design Competition reveals a challenge on arrival and gives teams days to design and present; the Ride Engineering Competition demands a model that meets g-force and cost limits and keeps running for eight hours; Imagineering in a Box ends with a design-your-own-experience project. Each is a template for a weekend brief.

A good self-set brief has four fixed numbers: footprint, hourly throughput, ride length and a budget band. Write a one-line premise and a [beat sheet](../story-experience/ride-beat-sheet.md), draw a plan, then build the layout in a simulator such as NoLimits 2 and check the [throughput math](../operations-business/throughput-math.md). Add the step most students skip: a [design review](../design-process/design-reviews-and-gates.md) where someone plays the cost estimator and the safety engineer and you defend every scene.

Clubs make this sustainable. The TEA chapter at Notre Dame runs an annual LEGO theme park build, a haunted house whose members write the story and build the props, and a small-scale pirate ship ride project, alongside entries to both competitions. That mix of story, fabrication and engineering is the right rehearsal for [ride layout design](../design-process/ride-layout-design.md) at full scale, and every finished brief becomes a chapter in your [portfolio](../careers/portfolio-building.md).

## Explore further
- `nd-tea-club-projects` — TEA at Notre Dame — Projects & Competitions
- `tmu-thrill-design-competition` — Thrill Design Competition
- `attractions-management-imagineering-in-a-box` — Imagineering in a Box launch coverage
- `nolimits-2` — NoLimits 2
