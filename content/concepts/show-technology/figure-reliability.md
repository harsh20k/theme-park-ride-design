---
id: figure-reliability
title: Figure Reliability & Duty Cycle
land: show-technology
level: advanced
abstraction: concept
parent: animatronics
children: []
relations:
  - { type: applies-to, target: preventive-maintenance }
  - { type: causes, target: downtime-and-availability }
  - { type: applies-to, target: spare-parts-and-obsolescence }
  - { type: applies-to, target: maintenance-programs }
  - { type: limits, target: figure-programming }
summary: A figure is judged over millions of cycles, so wear, inspection and spares shape its design.
tags: [reliability, maintenance, duty-cycle, operations, animatronics]
visuals: [chart]
interactive_idea: "Enter shows per hour, hours per day and days per year; the widget projects cycles to the next skin change and valve rebuild."
sources: [wikipedia-audio-animatronics, wikipedia-enchanted-tiki-room, huntington-show-networks-book]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: movement cycles per year for one figure function",
  "width": 300, "height": 150,
  "data": {"values": [
    {"dispatch_s": 20, "moves_per_show": 10, "cycles_m": 7.9},
    {"dispatch_s": 30, "moves_per_show": 10, "cycles_m": 5.3},
    {"dispatch_s": 45, "moves_per_show": 10, "cycles_m": 3.5},
    {"dispatch_s": 60, "moves_per_show": 10, "cycles_m": 2.6},
    {"dispatch_s": 90, "moves_per_show": 10, "cycles_m": 1.8},
    {"dispatch_s": 120, "moves_per_show": 10, "cycles_m": 1.3}
  ]},
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "dispatch_s", "type": "quantitative", "title": "Seconds between vehicles"},
    "y": {"field": "cycles_m", "type": "quantitative", "title": "Millions of cycles per year"}
  }
}
```

The arithmetic is brutal: cycles per year equal shows per hour, times hours per day, times days per year, times moves per show. A dark-ride figure that nods ten times per cycle, on a ride that dispatches a boat every thirty seconds for twelve hours, makes over four million nods a year. Nothing in a film studio is tested like that, which is why figure engineering is as much about wear as about expression.

Duty cycle drives every choice. Hydraulic seals, air valves and cable looms are consumables with inspection intervals; skins are replaced on a schedule, at least every five years on Disney's A-100 line. Designers add service access, quick-release costumes and spare "hot" figures so a failure does not close the scene. The show controller logs faults and can mask a dead function by parking the figure in a safe pose, a trick covered in Huntington's show-networks text.

Reliability is an [operations](../operations-business/downtime-and-availability.md) metric before it is an engineering one. Each figure sits in a [preventive maintenance](../operations-business/preventive-maintenance.md) program with [spare parts](../operations-business/spare-parts-and-obsolescence.md) that may outlive their suppliers, and it is subject to the park's [maintenance program](../safety-standards/maintenance-programs.md) rules. The cycle figures above are illustrative; parks do not publish them.

## Explore further
- `wikipedia-audio-animatronics` — Audio-Animatronics
- `huntington-show-networks-book` — Show Networks and Control Systems
