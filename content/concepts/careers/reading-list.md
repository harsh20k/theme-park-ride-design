---
id: reading-list
title: Reading List
land: careers
level: beginner
abstraction: concept
parent: learning-resources
children: []
relations:
  - { type: applies-to, target: legendary-imagineers }
  - { type: applies-to, target: walt-and-the-imagineers }
  - { type: example-of, target: expedition-everest }
  - { type: applies-to, target: themed-storytelling }
summary: Eight books that cover the philosophy, history, engineering and critique of theme park design.
tags: [careers, books, reading, history, design]
visuals: [chart]
interactive_idea: "Sort the shelf by purpose (philosophy, history, engineering, critique) and reading time, with library links."
sources: [hench-designing-disney, younger-theme-park-design, kurtti-legends-of-imagineering, alcorn-theme-park-design-engineer]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "The shelf by first publication year (Open Library records)",
  "width": 300, "height": 160,
  "data": {"values": [
    {"year": 1996, "book": "WDI: Behind the Dreams", "kind": "history"},
    {"year": 1997, "book": "Marling: Architecture of Reassurance", "kind": "critique"},
    {"year": 2003, "book": "Hench: Designing Disney", "kind": "philosophy"},
    {"year": 2006, "book": "Kurtti: Legends of Imagineering", "kind": "history"},
    {"year": 2007, "book": "Surrell: The Disney Mountains", "kind": "case studies"},
    {"year": 2010, "book": "Alcorn: Theme Park Design", "kind": "engineering"},
    {"year": 2013, "book": "Sklar: Dream It! Do It!", "kind": "history"},
    {"year": 2016, "book": "Younger: Theme Park Design", "kind": "design craft"}
  ]},
  "mark": {"type": "point", "filled": true, "size": 90},
  "encoding": {
    "x": {"field": "year", "type": "quantitative", "scale": {"domain": [1994, 2018]}, "axis": {"format": "d"}, "title": null},
    "y": {"field": "book", "type": "nominal", "title": null, "sort": {"field": "year"}},
    "color": {"field": "kind", "type": "nominal", "title": null}
  }
}
```

Read in this order. For philosophy, John Hench's Designing Disney: Imagineering and the Art of the Show is the text Imagineers still cite; it explains colour, scale and comfort as parts of a single show. For history and people, Jeff Kurtti's Legends of Imagineering profiles the first generation behind [Walt and the Imagineers](../history/walt-and-the-imagineers.md), Marty Sklar's memoir Dream It! Do It! covers the next half century, and the 1996 in-house book Walt Disney Imagineering: A Behind the Dreams Look surveys every discipline. Together they explain the [legendary Imagineers](../history/legendary-imagineers.md) cards.

For craft, David Younger's Theme Park Design and the Art of Themed Entertainment (2016) distils hundreds of interviews with designers from Disney, Universal and Merlin into a reference on how [themed storytelling](../story-experience/themed-storytelling.md) decisions get made. Steve Alcorn's Theme Park Design: Behind the Scenes with an Engineer explains how control systems and shows actually get built. Jason Surrell's The Disney Mountains traces the mountain attractions, including [Expedition Everest](../history/expedition-everest.md), from concept to construction.

For critique, Karal Ann Marling's Designing Disney's Theme Parks: The Architecture of Reassurance, from a 1997 exhibition, is the scholarly outside view. A title sometimes recommended under the author name Barbara Ray could not be identified and is left out.

## Explore further
- `hench-designing-disney` — Designing Disney: Imagineering and the Art of the Show
- `younger-theme-park-design` — Theme Park Design and the Art of Themed Entertainment
- `kurtti-legends-of-imagineering` — Walt Disney's Legends of Imagineering
- `alcorn-theme-park-design-engineer` — Theme Park Design: Behind the Scenes with an Engineer
