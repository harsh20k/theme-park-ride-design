---
id: environmental-storytelling
title: Environmental Storytelling
land: story-experience
level: beginner
abstraction: concept
parent: themed-storytelling
children: [set-dressing-and-props, plussing]
relations:
  - { type: applies-to, target: level-design-parallels }
  - { type: enables, target: narrative-transportation }
  - { type: applies-to, target: ground-plane-storytelling }
  - { type: applies-to, target: faux-finishes-and-aging }
  - { type: example-of, target: expedition-everest }
summary: Letting the place itself tell the story, through clues guests read rather than lines they hear.
tags: [story, environment, props, games, worldbuilding]
visuals: [mermaid]
interactive_idea: "A room full of clickable objects; each click reveals the implied past event, scoring how much story a guest could reconstruct."
sources: [carson-environmental-storytelling-2000, gdc-2010-what-happened-here, jenkins-narrative-architecture, wikipedia-disneys-animal-kingdom]
confidence: high
---
```mermaid
flowchart TD
  E["Past event in the story"] --> C["Physical traces left behind"]
  C --> O["Guest observes clue"]
  O --> I["Guest infers what happened"]
  I --> M["Guest feels they discovered it"]
  M -. stronger memory than being told .-> E
```

Environmental storytelling is story told by the place, not by a narrator. The designer imagines what happened here before the guest arrived, then leaves the traces: a broken fence, a half-finished meal, scorch marks on a wall. The guest reads the clues and reconstructs the event. Because they worked it out themselves, it sticks.

Former Imagineer Don Carson gave the practice its name in a 2000 essay for game developers, arguing that theme parks had long used "cause and effect" clues to pull people into a world. Harvey Smith and Matthias Worch's GDC 2010 talk "What Happened Here?" turned it into a game design discipline, and Henry Jenkins calls the broader idea narrative architecture. At Disney's Animal Kingdom, Imagineers aged the safari roads with potholes and dented the boats so the places felt lived in.

The toolkit includes [set dressing and props](../story-experience/set-dressing-and-props.md), [faux finishes and aging](../sensory-environment/faux-finishes-and-aging.md), and [ground-plane storytelling](../sensory-environment/ground-plane-storytelling.md). The same craft now flows back from games through [level design parallels](../story-experience/level-design-parallels.md).

## Explore further
- `carson-environmental-storytelling-2000` — Environmental Storytelling (Don Carson, 2000)
- `gdc-2010-what-happened-here` — What Happened Here? Environmental Storytelling (GDC 2010)
- `jenkins-narrative-architecture` — Game Design as Narrative Architecture
