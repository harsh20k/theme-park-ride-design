---
id: forbidden-journey
title: Harry Potter and the Forbidden Journey
land: history
level: beginner
abstraction: concept
parent: landmark-attractions
children: []
relations:
  - { type: example-of, target: robot-arm-ride }
  - { type: example-of, target: queue-storytelling }
  - { type: example-of, target: domes-and-wraparound-screens }
  - { type: example-of, target: ip-adaptation }
  - { type: example-of, target: roi-and-attendance-modeling }
  - { type: example-of, target: motion-sickness }
summary: Forbidden Journey mounts riders on KUKA robot arms that travel a track through Hogwarts, and helped lift its park's attendance by two-thirds.
tags: [history, harry-potter, kuka, robocoaster, universal, "2010"]
visuals: [image, mermaid]
interactive_idea: "Pose a KUKA arm with sliders for its six joints and see which film shot or set piece the bench faces."
sources: [wikipedia-forbidden-journey, wikipedia-wizarding-world-orlando, wikipedia-islands-of-adventure]
confidence: high
---
![Hogwarts Castle at Islands of Adventure, which houses the queue](https://upload.wikimedia.org/wikipedia/commons/c/c4/Wizarding_World_of_Harry_Potter_Castle.jpg)
*Photo: Carlos Cruz, CC BY-SA 3.0, via Wikimedia Commons — [source](https://commons.wikimedia.org/wiki/File:Wizarding_World_of_Harry_Potter_Castle.jpg)*

```mermaid
flowchart LR
    Q["Queue: dungeons, greenhouse,<br/>Dumbledore's office, common room"] --> L["Enchanted bench,<br/>four riders"]
    L --> A["KUKA KR500 arm<br/>on a moving busbar track"]
    A --> D["Dome screens"]
    A --> S["Physical sets,<br/>dragon, spiders"]
    D --> E["Exit to Hogsmeade"]
    S --> E
```

Harry Potter and the Forbidden Journey opened on June 18, 2010 as the heart of the Wizarding World at Islands of Adventure. Riders sit four to a bench held by a KUKA KR500 industrial robot arm. The arm rides a busbar track through the building, so it can swing, tilt and hang its passengers in front of dome screens and physical sets in turn. This RoboCoaster G2 setup is the defining [robot arm ride](../ride-systems/robot-arm-ride.md), and its [dome and wraparound screens](../show-technology/domes-and-wraparound-screens.md) hide their edges from a moving viewpoint.

The queue is the other landmark. Guests walk through Hogwarts: the dungeons, the greenhouses, Dumbledore's office, the Defence Against the Dark Arts classroom and the Gryffindor common room, with talking portraits along the way. It is [queue storytelling](../story-experience/queue-storytelling.md) on the scale of a museum and the most complete [IP adaptation](../story-experience/ip-adaptation.md) of its era.

The business result reshaped the industry. Islands of Adventure went from 4.6 million guests in 2009 to 7.7 million in 2011, up two-thirds, a case used in [attendance modelling](../operations-business/roi-and-attendance-modeling.md). One caveat: the arm's swinging motion against screens makes some riders queasy, a reminder that [motion sickness](../human-factors/motion-sickness.md) scales with ambition. Versions opened in Osaka in 2014 and Hollywood in 2016.

## Explore further
- `wikipedia-forbidden-journey` — Harry Potter and the Forbidden Journey
- `wikipedia-wizarding-world-orlando` — The Wizarding World of Harry Potter (Universal Orlando)
- `wikipedia-islands-of-adventure` — Universal Islands of Adventure
