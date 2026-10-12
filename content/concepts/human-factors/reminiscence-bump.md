---
id: reminiscence-bump
title: Reminiscence Bump
land: human-factors
level: intermediate
abstraction: concept
parent: memory
children: []
relations:
  - { type: enables, target: nostalgia }
  - { type: applies-to, target: age-differences }
  - { type: applies-to, target: guest-research }
  - { type: applies-to, target: ip-adaptation }
  - { type: applies-to, target: ride-lifecycle }
summary: Adults remember disproportionately more from roughly ages ten to thirty, so early park visits echo for life.
tags: [memory, lifespan, nostalgia, youth]
visuals: [chart]
interactive_idea: "Enter a birth year; the chart shades the ages 10 to 30 window and lists attractions that opened during it."
sources: [munawar-2018-reminiscence-bump]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: memories recalled by a 60-year-old, by age of event",
  "width": 300, "height": 140,
  "data": {"values": [
    {"age": 5, "memories": 2}, {"age": 10, "memories": 6}, {"age": 15, "memories": 11},
    {"age": 20, "memories": 14}, {"age": 25, "memories": 12}, {"age": 30, "memories": 8},
    {"age": 35, "memories": 5}, {"age": 40, "memories": 4}, {"age": 45, "memories": 4},
    {"age": 50, "memories": 5}, {"age": 55, "memories": 8}, {"age": 60, "memories": 13}
  ]},
  "mark": {"type": "area", "line": true, "interpolate": "monotone", "opacity": 0.4},
  "encoding": {
    "x": {"field": "age", "type": "quantitative", "title": "Age when the event happened"},
    "y": {"field": "memories", "type": "quantitative", "title": "Memories recalled"}
  }
}
```

Ask older adults to recall life events and the answers cluster. There is a recency peak, as expected, but also a second hump covering adolescence and early adulthood. A 2018 systematic review by Munawar, Kuhn and Haque places this *reminiscence bump* at roughly ages 10 to 30, with the exact edges shifting by method. The usual explanations: those years hold many firsts, identity forms then, and the brain's encoding is at its sharpest.

For a park operator the bump is the long game. A ride a guest loved at twelve becomes part of who they are, and the pull to revisit it with their own children thirty years later is one of the most dependable patterns in the business. It explains why closing a dated attraction draws such grief, which belongs in any [ride lifecycle](../operations-business/ride-lifecycle.md) decision, and why [IP choices](../story-experience/ip-adaptation.md) aimed at today's teens are bets on 2050's parents.

It also shapes [guest research](../operations-business/guest-research.md): the attractions guests name as favourites skew toward whatever opened during their bump, not toward what is objectively best.

## Explore further
- `munawar-2018-reminiscence-bump` — Understanding the Reminiscence Bump: A Systematic Review
