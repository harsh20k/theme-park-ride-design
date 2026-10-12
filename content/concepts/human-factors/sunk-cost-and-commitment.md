---
id: sunk-cost-and-commitment
title: Sunk Cost & Commitment
land: human-factors
level: intermediate
abstraction: concept
parent: behavior-and-decision
children: []
relations:
  - { type: limits, target: balking-and-reneging }
  - { type: applies-to, target: switchback-design }
  - { type: applies-to, target: queue-storytelling }
  - { type: applies-to, target: pricing }
  - { type: contrasts-with, target: peak-end-rule }
summary: Time or money already spent keeps guests in a line or a park long after a fresh choice would leave.
tags: [behavioral-economics, queues, commitment, psychology]
visuals: [chart]
interactive_idea: "A queue where you can leave at any time; a readout shows the 'rational' leave point versus where most simulated guests actually leave."
sources: [arkes-blumer-sunk-cost-1985, cialdini-influence]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: willingness to quit a queue falls as time already invested grows",
  "width": 300, "height": 150,
  "data": {"values": [
    {"minutes": 0, "quit": 60}, {"minutes": 10, "quit": 40}, {"minutes": 20, "quit": 25},
    {"minutes": 30, "quit": 15}, {"minutes": 45, "quit": 8}, {"minutes": 60, "quit": 4}
  ]},
  "mark": {"type": "area", "line": true, "opacity": 0.4},
  "encoding": {
    "x": {"field": "minutes", "type": "quantitative", "title": "Minutes already waited"},
    "y": {"field": "quit", "type": "quantitative", "title": "Percent who would leave if told 30 more minutes"}
  }
}
```

The **sunk cost effect** is the pull to keep going because of what you have already put in, even though that cost is gone whatever you do next. Hal Arkes and Catherine Blumer showed it in 1985 with people who stuck with a worse option simply because they had paid for it.

Queues run on sunk cost. Twenty minutes in, leaving feels like throwing those minutes away, so people stay for a wait they would never have joined from fresh. Operators lean on this: a [switchback](../human-factors/switchback-design.md) that hides the length ahead makes the first commitment easy, and [queue storytelling](../story-experience/queue-storytelling.md) adds small rewards that make each extra minute feel earned rather than lost. 
Commitment has a gentler cousin, described by Robert Cialdini: once people take a small public step, such as booking a return time, they tend to follow through. Reservations and virtual queues use it to spread crowds. The caution: a guest who stays out of stubbornness and then has a bad ride remembers the day badly, as the [peak-end rule](../human-factors/peak-end-rule.md) predicts, so reducing [reneging](../human-factors/balking-and-reneging.md) should mean shorter real waits, not just stickier lines.

## Explore further
- `arkes-blumer-sunk-cost-1985` — The psychology of sunk cost
- `cialdini-influence` — Influence: The Psychology of Persuasion (book)
