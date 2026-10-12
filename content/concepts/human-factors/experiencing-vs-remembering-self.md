---
id: experiencing-vs-remembering-self
title: Experiencing vs Remembering Self
land: human-factors
level: intermediate
abstraction: concept
parent: memory
children: []
relations:
  - { type: applies-to, target: guest-research }
  - { type: applies-to, target: finale-design }
  - { type: applies-to, target: length-of-stay }
  - { type: limits, target: wait-time-estimation }
  - { type: contrasts-with, target: flow-theory }
summary: One self lives each moment; another tells the story afterwards, and only the storyteller decides to return.
tags: [psychology, memory, kahneman, evaluation]
visuals: [svg]
interactive_idea: "Two side-by-side meters: live 'moment rating' as you scrub a ride, and the 'story rating' computed at the end from peak and finish."
sources: [kahneman-ted-2010-experience-vs-memory, kahneman-thinking-fast-and-slow]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <polyline points="20,120 50,100 80,110 110,60 140,90 170,95 200,40 230,85 260,70 290,110" />
  <text x="20" y="150" font-size="11" fill="currentColor" stroke="none">experiencing self: every moment, in order</text>
  <circle cx="200" cy="40" r="6" fill="currentColor" />
  <circle cx="290" cy="110" r="6" fill="currentColor" />
  <path d="M200 40 L240 20 M290 110 L270 20" stroke-dasharray="3 3" />
  <rect x="236" y="8" width="60" height="18" rx="4" />
  <text x="241" y="21" font-size="10" fill="currentColor" stroke="none">story: 2 dots</text>
  <text x="20" y="170" font-size="11" fill="currentColor" stroke="none">remembering self: keeps the peak and the end</text>
</svg>

Kahneman's TED talk splits each of us in two. The *experiencing self* lives in roughly three-second windows and answers "does it hurt now?". The *remembering self* keeps score afterwards and answers "how was it?". The second one writes the story, and it is the story, not the moments, that drives decisions to return, recommend or pay more.

The remembering self is a poor accountant. It leans on the [peak and the end](../human-factors/peak-end-rule.md) and ignores how long things lasted. So a day with two superb rides and a fine exit beats a day of steady pleasantness, even if the experiencing self had more good minutes in the second.

For designers and operators this changes what to measure. In-the-moment [guest research](../operations-business/guest-research.md) (face-tracking in queues, live app prompts) reports on the experiencing self; post-visit surveys report on the rememberer. Both are real. A [finale](../story-experience/finale-design.md) is an investment in the rememberer; shade and seating are investments in the experiencer, and [length of stay](../operations-business/length-of-stay.md) depends on keeping both content.

## Explore further
- `kahneman-ted-2010-experience-vs-memory` — The Riddle of Experience vs. Memory
- `kahneman-thinking-fast-and-slow` — Thinking, Fast and Slow
