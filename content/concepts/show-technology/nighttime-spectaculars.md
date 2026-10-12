---
id: nighttime-spectaculars
title: Nighttime Spectaculars & Drones
land: show-technology
level: beginner
abstraction: concept
parent: special-effects
children: []
relations:
  - { type: applies-to, target: parade-and-show-crowds }
  - { type: applies-to, target: length-of-stay }
  - { type: applies-to, target: night-vs-day }
  - { type: applies-to, target: finale-design }
  - { type: applies-to, target: weather-policies }
summary: Fireworks, castle projection, fountains and drone swarms give the park day a finale.
tags: [spectaculars, drones, fireworks, castle-projection, night]
visuals: [chart]
interactive_idea: "Design a drone formation on a grid; the widget shows drone count, flight time and the wind limit that would ground it."
sources: [wikipedia-drone-show, sky-elements-drones, nova-sky-stories, wikipedia-projection-mapping]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Record-scale drone shows by year (source: Wikipedia, Drone show)",
  "width": 300, "height": 150,
  "data": {"values": [
    {"year": 2015, "drones": 100, "show": "Drone100, Linz"},
    {"year": 2018, "drones": 1218, "show": "Pyeongchang Olympics"},
    {"year": 2020, "drones": 3051, "show": "Zhuhai"},
    {"year": 2023, "drones": 3500, "show": "New Delhi"},
    {"year": 2024, "drones": 10197, "show": "Shenzhen"}
  ]},
  "mark": {"type": "bar"},
  "encoding": {
    "x": {"field": "year", "type": "ordinal", "title": "Year"},
    "y": {"field": "drones", "type": "quantitative", "title": "Drones in the air"},
    "tooltip": [{"field": "show"}, {"field": "drones"}]
  }
}
```

The nighttime spectacular is the park's [finale](../story-experience/finale-design.md). It gathers the crowd, ends the day, and keeps guests on site for dinner, which is why operators track its effect on [length of stay](../operations-business/length-of-stay.md). The toolkit stacks fireworks, castle projection, fountains, lasers and, increasingly, drones.

Drone shows grew quickly. The first drone display was staged in Cannes in June 2012; Intel's Drone100 flew 100 lit drones in 2015; 1,218 Shooting Star drones set a record at the Pyeongchang Olympics in 2018; and by 2024 Shenzhen had flown more than 10,000 from one system. Each drone follows a preprogrammed path, positioned by real-time kinematic GPS to centimetre accuracy. Providers such as Sky Elements and Nova Sky Stories now fly shows of thousands of drones, some carrying pyrotechnics. Drones cannot fly in rain or strong wind, and a December 2024 show in Orlando where a missing flight file caused collisions and injured a child shows the stakes.

Some cities now swap fireworks for drones to cut fire risk and noise. For designers the trade is clear: fireworks give sound and scale, drones give drawing and precision, and the best shows now use both, under firm [weather policies](../safety-standards/weather-policies.md) and [crowd plans](../masterplanning/parade-and-show-crowds.md).

## Explore further
- `wikipedia-drone-show` — Drone show
- `sky-elements-drones` — Sky Elements Drone Shows
- `nova-sky-stories` — Nova Sky Stories
