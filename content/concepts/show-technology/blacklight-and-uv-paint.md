---
id: blacklight-and-uv-paint
title: Blacklight & UV Paint
land: show-technology
level: beginner
abstraction: concept
parent: illusions
children: []
relations:
  - { type: applies-to, target: classic-dark-ride }
  - { type: applies-to, target: dark-adaptation }
  - { type: applies-to, target: scenic-painting }
  - { type: enables, target: reveal-and-concealment }
summary: Ultraviolet lamps make fluorescent paint glow while the room around it stays invisible.
tags: [blacklight, ultraviolet, fluorescent-paint, dark-rides, scenic]
visuals: [svg]
interactive_idea: "Paint a prop with normal and fluorescent colours, then switch the room from white light to blacklight."
sources: [wikipedia-blacklight, wikipedia-dark-ride, wikipedia-stage-lighting]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spectrum bar from ultraviolet to red with a blacklight peak near 365 nanometres and a glowing prop">
  <defs>
    <linearGradient id="spec" x1="0" x2="1">
      <stop offset="0" stop-color="#4C1D95"/>
      <stop offset="0.25" stop-color="#2563EB"/>
      <stop offset="0.5" stop-color="#16A34A"/>
      <stop offset="0.75" stop-color="#FACC15"/>
      <stop offset="1" stop-color="#DC2626"/>
    </linearGradient>
  </defs>
  <rect x="20" y="40" width="280" height="24" fill="url(#spec)"/>
  <rect x="20" y="40" width="40" height="24" fill="#1E1B4B"/>
  <text x="22" y="34" font-size="11" fill="currentColor">UV-A</text>
  <text x="200" y="34" font-size="11" fill="currentColor">Visible light</text>
  <line x1="42" y1="30" x2="42" y2="70" stroke="currentColor" stroke-width="2"/>
  <text x="46" y="80" font-size="11" fill="currentColor">365 nm blacklight</text>
  <path d="M42 70 Q120 110 190 120" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="210" cy="130" r="22" fill="#A3E635" opacity="0.85"/>
  <text x="236" y="134" font-size="11" fill="currentColor">Paint re-emits visible glow</text>
  <rect x="20" y="110" width="150" height="50" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="26" y="150" font-size="11" fill="currentColor">Black room, unseen</text>
</svg>

A blacklight is a lamp that emits mostly long-wave ultraviolet light, UV-A, with a peak around 365 nanometres for the common "BLB" tube, and very little visible light. Fluorescent pigments absorb that invisible energy and re-emit it as visible colour. The result is the signature look of the [classic dark ride](../ride-systems/classic-dark-ride.md): props and painted flats that appear to float and glow while the walls, the track and the mechanics, all painted flat black, disappear.

The technique is cheap and forgiving. The room does not need to be finished, only hidden, so a 1960s-style dark ride could be built as a black box full of glowing cut-outs. It also solves a lighting problem: ordinary spotlights would reveal the ceiling and the next scene, while UV reveals only what the scenic painter chose to make fluorescent.

For the guest it depends on [dark adaptation](../human-factors/dark-adaptation.md); a bright pre-show or an open door washes out the glow. For the [scenic painter](../design-process/scenic-painting.md) it is a palette discipline: which surfaces fluoresce, which absorb, and how a glow-in-the-dark prop reads under both work light and show light. Used with timing, it is also a [reveal](../story-experience/reveal-and-concealment.md) tool, since a UV fixture can be switched like any other cue.

## Explore further
- `wikipedia-blacklight` — Blacklight
- `wikipedia-dark-ride` — Dark ride
