---
id: seat-width-and-hip-breadth
title: Seat Width & Hip Breadth
land: human-factors
level: advanced
abstraction: sub-concept
parent: anthropometrics
children: []
relations:
  - { type: applies-to, target: seat-and-containment }
  - { type: applies-to, target: restraint-mechanisms }
  - { type: applies-to, target: patron-accommodation }
  - { type: applies-to, target: economic-inclusion }
  - { type: applies-to, target: personal-space-and-density }
summary: The gap between measured hip widths and real seat widths decides who is turned away at the platform.
tags: [anthropometrics, seats, restraints, inclusion]
visuals: [svg]
interactive_idea: "Overlay a seat profile on a scalable hip-breadth silhouette and find the width at which the lap bar can no longer lock."
sources: [ansur-ii-open-design-lab, caesar-final-report-vol1, astm-f2291-design-standard]
confidence: medium
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="60" y="60" width="200" height="90" rx="10" opacity="0.5"/>
  <path d="M110 150 Q 160 80 210 150" stroke-width="3"/>
  <path d="M90 150 Q 160 50 230 150" stroke-dasharray="5 4"/>
  <path d="M60 40 H 260" stroke-width="1"/>
  <path d="M60 34 V 46 M260 34 V 46" stroke-width="1"/>
  <path d="M110 165 H 210" stroke-width="1"/>
  <path d="M90 172 H 230" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="118" y="30" font-size="11" fill="currentColor" stroke="none">seat width</text>
  <text x="128" y="128" font-size="11" fill="currentColor" stroke="none">hips</text>
  <text x="14" y="172" font-size="11" fill="currentColor" stroke="none">median</text>
  <text x="240" y="176" font-size="11" fill="currentColor" stroke="none">large</text>
</svg>

Hip breadth, measured seated, is the single body dimension that most often stops a guest riding. Seat width, the restraint's closing range and the belt length form a hard limit, and a guest who exceeds it is walked back off the platform in front of a crowd. It is a humiliating moment, and it is a design choice.

The data to avoid it exists. ANSUR II records hip breadth (sitting) among its 93 measurements, and CAESAR's 3D scans capture the full seated shape, not just a width. Both show wide spread, and civilian populations have grown heavier since CAESAR was collected. A seat sized to a military 95th percentile excludes more park guests than the number suggests; the exact exclusion rate at any ride is uncertain without the park's own guest data.

Designers trade width against capacity: wider seats mean fewer per row, which hits throughput. Some manufacturers now offer a modified row with a larger seat and longer restraint so one vehicle serves a wider range, an approach that sits inside the [patron accommodation](../safety-standards/patron-accommodation.md) thinking in ASTM F2291. [Seat and containment](../ride-engineering/seat-and-containment.md) covers the mechanics; [economic inclusion](../human-factors/economic-inclusion.md) covers who a park quietly excludes.

## Explore further
- `ansur-ii-open-design-lab` — ANSUR II anthropometric dataset
- `caesar-final-report-vol1` — CAESAR Final Report, Volume I: Summary
- `astm-f2291-design-standard` — ASTM F2291 Standard Practice for Design of Amusement Rides and Devices
