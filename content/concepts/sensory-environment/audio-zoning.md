---
id: audio-zoning
title: Audio Zoning & Bleed
land: sensory-environment
level: intermediate
abstraction: concept
parent: sound-design
children: []
relations:
  - { type: limits, target: breaking-immersion }
  - { type: applies-to, target: audio-triggers-and-masking }
  - { type: part-of, target: sound-design-pipeline }
  - { type: contrasts-with, target: onboard-and-spatial-audio }
  - { type: applies-to, target: the-berm }
summary: Dividing a park into sound zones with many small, close loudspeakers so one land's audio does not leak into the next.
tags: [audio, loudspeakers, zoning, bleed, acoustics]
visuals: [svg]
interactive_idea: "Drag loudspeakers onto a plan and set their level; a heat map shows coverage and flags where two lands' loops overlap."
sources: [lsi-liseberg-rabbit-land-meyer-sound, dbaudio-happy-valley-lake-of-illusions]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="11">
  <rect x="8" y="20" width="150" height="140" fill="#dbeafe" stroke="currentColor"/>
  <rect x="162" y="20" width="150" height="140" fill="#fde68a" stroke="currentColor"/>
  <text x="14" y="36" fill="currentColor">Land A loop</text>
  <text x="168" y="36" fill="currentColor">Land B loop</text>
  <g fill="#3b82f6" fill-opacity="0.25" stroke="#3b82f6">
    <circle cx="40" cy="70" r="26"/><circle cx="90" cy="110" r="26"/><circle cx="50" cy="140" r="22"/><circle cx="120" cy="60" r="24"/>
  </g>
  <g fill="#f59e0b" fill-opacity="0.25" stroke="#f59e0b">
    <circle cx="200" cy="70" r="26"/><circle cx="250" cy="110" r="26"/><circle cx="290" cy="60" r="22"/><circle cx="220" cy="140" r="22"/>
  </g>
  <line x1="160" y1="20" x2="160" y2="160" stroke="currentColor" stroke-dasharray="4 3"/>
  <text x="124" y="172" fill="currentColor">buffer / transition</text>
  <g fill="currentColor"><circle cx="40" cy="70" r="3"/><circle cx="90" cy="110" r="3"/><circle cx="50" cy="140" r="3"/><circle cx="120" cy="60" r="3"/><circle cx="200" cy="70" r="3"/><circle cx="250" cy="110" r="3"/><circle cx="290" cy="60" r="3"/><circle cx="220" cy="140" r="3"/></g>
  <text x="14" y="14" fill="currentColor">Many small sources, short throw, no overlap at the seam</text>
</svg>

Audio zoning is the discipline of deciding where each sound is allowed to be heard. A pirate harbour next to a space port only works if the sea shanty stops where the synthesiser starts. The rule of thumb is many small loudspeakers, low and close, rather than a few loud ones high up: a short throw falls off quickly, so placement shapes coverage instead of volume. Liseberg's Rabbit Land used thirteen compact self-powered boxes spread through a 10,000 square metre area, some tucked under a monorail track, all fed from one networked show-control platform so each zone could run its own mix.

Bleed is the failure mode. Sound leaking across a seam is a form of [breaking immersion](../human-factors/breaking-immersion.md) as real as a visible backstage roof. Designers fight it with planting and earth, which is one more job for [the berm](../story-experience/the-berm.md), with buffer zones where neither loop plays, and with [audio triggers and masking](../show-technology/audio-triggers-and-masking.md) that cover unwanted noise with wanted noise. Outdoor show systems add weather-proof enclosures and separate near, mid and far zones, as at Shanghai Happy Valley's lake show. Zoning is a stage of the [sound design pipeline](../show-technology/sound-design-pipeline.md), not an install afterthought.

## Explore further
- `lsi-liseberg-rabbit-land-meyer-sound` — Rabbit Land Comes Alive with Meyer Sound (Liseberg)
- `dbaudio-happy-valley-lake-of-illusions` — Storytelling Whatever the Weather at Shanghai's Happy Valley
