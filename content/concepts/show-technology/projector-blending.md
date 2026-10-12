---
id: projector-blending
title: Projector Blending & Alignment
land: show-technology
level: advanced
abstraction: concept
parent: projection-and-screens
children: []
relations:
  - { type: applies-to, target: testing-and-commissioning }
  - { type: applies-to, target: preventive-maintenance }
  - { type: enables, target: flying-theatre }
  - { type: causes, target: breaking-immersion }
  - { type: applies-to, target: domes-and-wraparound-screens }
summary: Overlapping projectors are faded into each other and warped to the surface so the seams vanish.
tags: [projection, blending, warping, alignment, calibration]
visuals: [chart]
interactive_idea: "Slide the overlap width and gamma of two projectors and watch the seam brighten, darken or disappear."
sources: [wikipedia-fulldome, christie-digital, wikipedia-projection-mapping]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: two projector brightness ramps crossing in the overlap zone",
  "width": 300, "height": 140,
  "data": {"values": [
    {"x": 0, "p": "Left", "b": 1}, {"x": 40, "p": "Left", "b": 1}, {"x": 50, "p": "Left", "b": 0.75}, {"x": 60, "p": "Left", "b": 0.25}, {"x": 70, "p": "Left", "b": 0}, {"x": 100, "p": "Left", "b": 0},
    {"x": 0, "p": "Right", "b": 0}, {"x": 40, "p": "Right", "b": 0}, {"x": 50, "p": "Right", "b": 0.25}, {"x": 60, "p": "Right", "b": 0.75}, {"x": 70, "p": "Right", "b": 1}, {"x": 100, "p": "Right", "b": 1}
  ]},
  "mark": {"type": "line", "interpolate": "monotone"},
  "encoding": {
    "x": {"field": "x", "type": "quantitative", "title": "Screen position, percent"},
    "y": {"field": "b", "type": "quantitative", "title": "Relative brightness"},
    "color": {"field": "p", "type": "nominal", "title": null}
  }
}
```

One projector is never enough for a dome or a 380-foot mist screen, so several are tiled. Where two images overlap, each is faded out with a soft ramp so the sum stays at the brightness of a single projector. The ramp has to be gamma-corrected, because a projector's output is not linear with its input, and the two units must match in colour and black level or the overlap shows as a bright or tinted bar.

Alignment is the second half. Warping bends each projector's image to the dome or sculpted surface, and geometry is checked against the model. Modern systems point cameras at the screen and compute the warp and blend automatically; Christie lists warping and blending tools as a product category. Even so, projectors drift with heat, lamp ageing and building movement. Fulldome operators report frequent realignment, brightness and colour mismatches and double images in blend zones as the standing drawbacks of multi-projector rigs.

That makes blending a [commissioning](../design-process/testing-and-commissioning.md) task and then a [preventive maintenance](../operations-business/preventive-maintenance.md) routine. A visible seam on a [flying theatre](../ride-systems/flying-theatre.md) dome is the kind of flaw that [breaks immersion](../human-factors/breaking-immersion.md) for the whole audience.

## Explore further
- `wikipedia-fulldome` — Fulldome
- `christie-digital` — Christie: projectors, dome solutions, warping and blending tools
