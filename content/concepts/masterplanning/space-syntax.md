---
id: space-syntax
title: Space Syntax
land: masterplanning
level: advanced
abstraction: concept
parent: planning-theory
children: []
relations:
  - { type: enables, target: crowd-modeling }
  - { type: applies-to, target: desire-lines }
  - { type: applies-to, target: sightlines }
  - { type: enables, target: procedural-layout }
  - { type: applies-to, target: visual-attention }
summary: A method from UCL that predicts where people will walk from the shape of the path network alone.
tags: [analysis, movement, network, ucl]
visuals: [svg, formula]
interactive_idea: "Draw a path network; each segment colours by integration so you can see which routes will carry the crowd."
sources: [openlibrary-hillier-social-logic-of-space, wikipedia-space-syntax, spacesyntax-online]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="3">
  <line x1="20" y1="90" x2="300" y2="90" stroke="#e74c3c"/>
  <line x1="160" y1="20" x2="160" y2="160" stroke="#f39c12"/>
  <line x1="60" y1="30" x2="60" y2="150" stroke="#f1c40f"/>
  <line x1="260" y1="40" x2="260" y2="140" stroke="#f1c40f"/>
  <line x1="60" y1="150" x2="160" y2="160" stroke="#3498db"/>
  <line x1="200" y1="40" x2="300" y2="20" stroke="#3498db"/>
  <line x1="20" y1="30" x2="60" y2="30" stroke="#2980b9"/>
  <text x="24" y="80" font-size="11" fill="currentColor" stroke="none">most integrated axis: red</text>
  <text x="170" y="172" font-size="11" fill="currentColor" stroke="none">least integrated: blue</text>
</svg>

> **Formula** $\text{Integration}(i) \propto \frac{1}{\text{mean depth}(i)}$
- $\text{Integration}(i)$ is how central path $i$ is to the whole network, a predictor of foot traffic
- $\text{mean depth}(i)$ is the average number of turns or segment changes needed to reach every other path from $i$

Space syntax is a way to read a plan and predict movement before anyone walks it. Developed by Bill Hillier, Julienne Hanson and colleagues at The Bartlett, University College London, and set out in The Social Logic of Space (1984), it treats a layout as a network of lines of sight and movement. Each straight path, called an axial line, is scored by how few turns it takes to reach everywhere else. Paths with the fewest turns are the most integrated, and across many cities the most integrated streets carry the most people, a result Hillier called natural movement.

Two measures do most of the work. Integration predicts how busy a path will be as a destination; choice predicts how much through-traffic it will carry. Isovists, the area visible from a point, capture what a guest can see from the hub. A planner can run the analysis on a sketch using free software from the Space Syntax Online training platform and find the dead ends and over-loaded spines early.

For parks this complements [crowd modelling](../ai-future/crowd-modeling.md) and explains [desire lines](../human-factors/desire-lines.md) and why the hub always fills. It also quantifies [sightlines](../story-experience/sightlines.md) and feeds [procedural layout](../ai-future/procedural-layout.md) tools.

## Explore further
- `openlibrary-hillier-social-logic-of-space` — The Social Logic of Space, Bill Hillier and Julienne Hanson's 1984 book that founded space syntax (Cambridge University Press)
- `wikipedia-space-syntax` — Space syntax overview on Wikipedia: axial lines, isovists, integration and choice, and the method's origin at The Bartlett, UCL
- `spacesyntax-online` — Space Syntax Online Training Platform from UCL and Space Syntax Ltd, with tutorials, glossary and free software guides for running an analysis
