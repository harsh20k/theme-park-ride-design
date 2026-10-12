---
id: conferences
title: Conferences
land: careers
level: beginner
abstraction: concept
parent: programs-and-community
children: []
relations:
  - { type: applies-to, target: real-time-engines }
  - { type: applies-to, target: safety-culture }
  - { type: enables, target: cross-discipline-collaboration }
  - { type: applies-to, target: industry-structure }
summary: Which industry events to attend for design, safety, technology and hiring, and when they fall.
tags: [careers, conferences, iaapa, tea, siggraph]
visuals: [chart]
interactive_idea: "A rolling twelve-month calendar of events with filters for discipline, region and student discounts."
sources: [iaapa-expo, tea-sate-north-america-2026, siggraph-2026, aims-international]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Event calendar, 2026-27 season (dates from organiser pages)",
  "width": 300, "height": 170,
  "data": {"values": [
    {"event": "SIGGRAPH, Los Angeles", "start": "2026-07-19", "end": "2026-07-23", "focus": "technology"},
    {"event": "IAAPA Expo Europe, London", "start": "2026-09-21", "end": "2026-09-25", "focus": "industry"},
    {"event": "TEA SATE NA, New Orleans", "start": "2026-10-12", "end": "2026-10-14", "focus": "design"},
    {"event": "IAAPA Expo, Orlando", "start": "2026-11-16", "end": "2026-11-20", "focus": "industry"},
    {"event": "AIMS Safety Seminar, Orlando", "start": "2027-01-09", "end": "2027-01-14", "focus": "safety"},
    {"event": "GDC, San Francisco", "start": "2027-03-01", "end": "2027-03-05", "focus": "technology"},
    {"event": "IAAPA Expo Middle East, Abu Dhabi", "start": "2027-04-12", "end": "2027-04-15", "focus": "industry"},
    {"event": "IAAPA Expo Asia, Osaka", "start": "2027-06-28", "end": "2027-07-01", "focus": "industry"}
  ]},
  "mark": {"type": "bar", "cornerRadius": 2},
  "encoding": {
    "y": {"field": "event", "type": "nominal", "title": null, "sort": {"field": "start"}},
    "x": {"field": "start", "type": "temporal", "title": null},
    "x2": {"field": "end"},
    "color": {"field": "focus", "type": "nominal", "title": null}
  }
}
```

Conferences are where this industry shows its work and quietly hires. IAAPA Expo in Orlando each November is the biggest: more than 1,100 exhibitors and over 170 education sessions, with ride manufacturers demonstrating hardware on the floor. IAAPA Expo Europe in September and the Asia and Middle East shows cover other regions and [industry structure](../operations-business/industry-structure.md).

TEA's SATE conference is the design conversation. SATE North America 2026 in New Orleans takes the theme "Cultural Authenticity as Design Material", with sessions for designers, architects, producers and operators. TEA NextGen members get reduced-price entry, and the Thea Awards gala each spring is the field's own honours list.

For technology, SIGGRAPH in July is where [real-time engines](../ai-future/real-time-engines.md), simulation and immersive media are presented; the 2026 keynotes include Disney Research. GDC in March has a Career Day with portfolio reviews that suit interactive and media roles. On the safety side, AIMS International's January seminar offers more than 400 hours of training and underpins the industry's [safety culture](../safety-standards/safety-culture.md).

Go with a plan: three people to meet, one session per lane outside your own, and business cards. Most [cross-discipline collaboration](../design-process/cross-discipline-collaboration.md) later in a career starts at a show-floor conversation.

## Explore further
- `iaapa-expo` — IAAPA Expo
- `tea-sate-north-america-2026` — TEA SATE North America 2026
- `siggraph-2026` — SIGGRAPH 2026
- `aims-international` — AIMS International
