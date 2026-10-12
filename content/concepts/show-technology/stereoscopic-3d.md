---
id: stereoscopic-3d
title: Stereoscopic 3D
land: show-technology
level: intermediate
abstraction: concept
parent: projection-and-screens
children: []
relations:
  - { type: example-of, target: spider-man-and-transformers }
  - { type: applies-to, target: depth-cues }
  - { type: applies-to, target: motion-sickness }
  - { type: applies-to, target: 4d-theatres }
  - { type: enables, target: media-dark-ride }
summary: Two images, one per eye, give depth; on a moving vehicle the image must be pre-distorted to stay true.
tags: [3d, stereoscopy, polarization, spider-man, media-dark-ride]
visuals: [svg]
interactive_idea: "Move a virtual seat off-centre and watch the 3D object skew, then enable squinching to correct it."
sources: [wikipedia-polarized-3d, wikipedia-amazing-adventures-of-spider-man, wikipedia-flight-of-passage]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two polarized projectors hit a silver screen; glasses pass one image to each eye">
  <rect x="20" y="50" width="34" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="20" y="110" width="34" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="18" y="44" font-size="11" fill="currentColor">Left-eye projector</text>
  <text x="18" y="146" font-size="11" fill="currentColor">Right-eye projector</text>
  <line x1="54" y1="59" x2="250" y2="90" stroke="#7E22CE" stroke-width="2"/>
  <line x1="54" y1="119" x2="250" y2="90" stroke="#0F766E" stroke-width="2"/>
  <rect x="250" y="20" width="8" height="140" fill="currentColor" opacity="0.5"/>
  <text x="262" y="30" font-size="11" fill="currentColor">Silver screen</text>
  <line x1="250" y1="90" x2="150" y2="150" stroke="#7E22CE" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="250" y1="90" x2="170" y2="160" stroke="#0F766E" stroke-width="1.5" stroke-dasharray="4 3"/>
  <rect x="140" y="146" width="18" height="10" fill="none" stroke="#7E22CE" stroke-width="2"/>
  <rect x="162" y="156" width="18" height="10" fill="none" stroke="#0F766E" stroke-width="2"/>
  <text x="186" y="172" font-size="11" fill="currentColor">Glasses</text>
</svg>

Stereoscopic 3D shows each eye a slightly different picture, the same [depth cue](../human-factors/depth-cues.md) your eyes use in the real world. Parks mostly use polarized systems: two projectors, or one alternating projector, send light with different polarization, and cheap glasses let each eye see only its own image. Linear polarization needs the head level; circular tolerates tilting. Both need a silver screen, because a normal white screen scrambles polarization.

The Amazing Adventures of Spider-Man, opened at Islands of Adventure on 28 May 1999, is the canonical ride case: thirteen 30-foot screens, twelve in 3D, each with two polarized projectors. A moving vehicle breaks ordinary 3D, which assumes a fixed seat, so the ride pre-distorts the image for the vehicle's path, a process called squinching that Universal patented. The 2012 refit replaced film with Infitec digital projectors.

Stereo is also standard in [4D theatres](../ride-systems/4d-theatres.md) and dome rides like Flight of Passage, which renders 10K at 60 frames per second in stereo. The cost is comfort: mismatched depth cues can trigger [motion sickness](../human-factors/motion-sickness.md) for some riders, so designers keep extreme depth brief.

## Explore further
- `wikipedia-polarized-3d` — Polarized 3D system
- `wikipedia-amazing-adventures-of-spider-man` — The Amazing Adventures of Spider-Man
