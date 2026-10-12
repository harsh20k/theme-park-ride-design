---
id: visual-attention
title: Visual Attention & Gaze
land: human-factors
level: intermediate
abstraction: concept
parent: perception
children: []
relations:
  - { type: enables, target: weenies }
  - { type: enables, target: misdirection }
  - { type: applies-to, target: sightlines }
  - { type: applies-to, target: theatrical-lighting }
  - { type: applies-to, target: signage-hierarchy }
summary: The eye jumps to what is bright, moving, faces or meaningful; designers steer those jumps.
tags: [perception, attention, gaze, lighting]
visuals: [svg]
interactive_idea: "A dark-ride scene where the user clicks where they would look first; a heat map compares their fixations with a saliency prediction."
sources: [henderson-2003-gaze-control]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="10" y="10" width="300" height="160" rx="6" />
  <circle cx="230" cy="70" r="26" fill="currentColor" fill-opacity="0.25" />
  <circle cx="230" cy="70" r="12" fill="currentColor" fill-opacity="0.5" />
  <circle cx="90" cy="120" r="12" fill="currentColor" fill-opacity="0.2" />
  <path d="M40 150 C 70 140, 80 130, 90 120 S 180 90, 230 70" stroke-dasharray="4 3" />
  <text x="150" y="40" font-size="11" fill="currentColor" stroke="none">lit, moving, a face: first fixation</text>
  <text x="18" y="165" font-size="10" fill="currentColor" stroke="none">gaze path</text>
  <text x="105" y="124" font-size="10" fill="currentColor" stroke="none">then here</text>
</svg>

John Henderson's review of gaze in real scenes describes two forces fighting for the eye. Bottom-up *saliency* is pulled by contrast, colour, brightness and above all motion. Top-down control is driven by meaning and task: what you are looking for, what the scene implies, where a face is looking. Fixations last a few hundred milliseconds each, so in a ninety-second ride a guest makes a few hundred glances, and the designer's job is to spend them well.

The park toolkit is largely gaze control. A [weenie](../story-experience/weenies.md) is a saliency magnet at the end of a street. [Theatrical lighting](../show-technology/theatrical-lighting.md) decides what is visible at all, which in a dark ride is total control. Movement and faces in a scene pull gaze from the mechanism that is about to change the set, the basis of [misdirection](../show-technology/misdirection.md). [Sightline](../story-experience/sightlines.md) planning is attention planning: an intrusion is only a problem if the eye is likely to land there. Even a [signage hierarchy](../human-factors/signage-hierarchy.md) is a ranking of what should win the first fixation.

The constraint is that attention is single-threaded. Two simultaneous gags cancel; one gag at a time, each where the eye already is, reads as rich.

## Explore further
- `henderson-2003-gaze-control` — Human Gaze Control During Real-World Scene Perception
