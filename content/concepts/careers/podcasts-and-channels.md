---
id: podcasts-and-channels
title: Podcasts & Channels
land: careers
level: beginner
abstraction: concept
parent: learning-resources
children: []
relations:
  - { type: applies-to, target: defunct-parks }
  - { type: applies-to, target: coaster-anatomy }
  - { type: applies-to, target: industry-evolution }
  - { type: applies-to, target: legendary-imagineers }
summary: The audio and video shows that teach park history, ride mechanics and the business behind them.
tags: [careers, podcasts, youtube, media, history]
visuals: [chart]
interactive_idea: "A listening map where each show is a dot; click to see three starter episodes matched to cards in this knowledge base."
sources: [blooloop-season-pass-origin, blooloop-theme-park-academy-podcast, themedattraction-podcast-bouza, youtube-defunctland]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative placement: what each show is mostly about",
  "width": 300, "height": 170,
  "data": {"values": [
    {"show": "Defunctland", "history": 9, "industry": 3},
    {"show": "Yesterworld", "history": 8, "industry": 2},
    {"show": "Art of Engineering", "history": 3, "industry": 5},
    {"show": "Coaster Studios", "history": 4, "industry": 4},
    {"show": "Season Pass", "history": 5, "industry": 8},
    {"show": "Theme Park Academy", "history": 2, "industry": 9},
    {"show": "Themed Attraction Podcast", "history": 4, "industry": 8}
  ]},
  "layer": [
    {"mark": {"type": "point", "filled": true, "size": 80}},
    {"mark": {"type": "text", "dy": -10, "fontSize": 9}, "encoding": {"text": {"field": "show"}}}
  ],
  "encoding": {
    "x": {"field": "history", "type": "quantitative", "title": "Mechanics  <->  History", "scale": {"domain": [0, 10]}},
    "y": {"field": "industry", "type": "quantitative", "title": "Fan-facing  <->  Industry-facing", "scale": {"domain": [0, 10]}}
  }
}
```

Podcasts are the easiest way to hear how working designers talk. The Season Pass, started by Doug Barnes in 2007 as a fan show, became an industry forum where the people who create attractions explain their projects. Theme Park Academy, launched with blooloop in June 2024 and hosted by creative director Mark Lofthouse and Zamperla's Adam Sandy, interviews business leaders monthly about trends and the [evolution of the industry](../history/industry-evolution.md). The Themed Attraction Podcast, hosted by Mel McGowan and Freddy Martin, is the most design-focused; episode 59 is a career conversation with former Imagineering president Barbara Bouza.

On YouTube, Defunctland makes documentary-length histories of closed attractions and [defunct parks](../history/defunct-parks.md), and is the best free lesson in why projects fail. Yesterworld covers attraction history in shorter retrospectives. Art of Engineering explains how ride and show systems physically work, a good companion to [coaster anatomy](../ride-systems/coaster-anatomy.md). Coaster Studios tracks roller coaster news and manufacturers.

Listen with a notebook. Each episode about a project names the roles involved, the trade-offs made and the vendors used, which is the same material the [legendary Imagineers](../history/legendary-imagineers.md) cards draw on. A year of episodes is a working map of who does what in this industry.

## Explore further
- `blooloop-season-pass-origin` — The Season Pass and a passion for theme parks
- `blooloop-theme-park-academy-podcast` — Theme Park Academy podcast launch
- `themedattraction-podcast-bouza` — Themed Attraction Podcast #59
- `youtube-defunctland` — Defunctland
