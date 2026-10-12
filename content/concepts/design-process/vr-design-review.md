---
id: vr-design-review
title: VR Design Review
land: design-process
level: intermediate
abstraction: concept
parent: design-development
children: []
relations:
  - { type: applies-to, target: sightlines }
  - { type: applies-to, target: scale-and-intimacy }
  - { type: enables, target: vr-ar-in-parks }
  - { type: limits, target: motion-sickness }
  - { type: contrasts-with, target: models-and-maquettes }
summary: Walking a design at full scale in a projection cave or headset to catch problems before construction.
tags: [vr, review, dish, immersive]
visuals: [svg]
interactive_idea: "Stand a virtual guest of chosen height in a scene and highlight every surface they can see that should be hidden."
sources: [mouseplanet-dish-visit, attractions-management-disney-vr-cave, abc7-cars-land-virtual]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plan view of a projection cave with three walls, a floor, projectors and a tracked viewer">
  <path d="M60 30 L260 30 L290 150 L30 150 Z" fill="#1f4e79" opacity="0.25" stroke="currentColor" stroke-width="2"/>
  <path d="M60 30 L260 30" stroke="#d9822b" stroke-width="4"/>
  <path d="M60 30 L30 150 M260 30 L290 150" stroke="#d9822b" stroke-width="4"/>
  <circle cx="160" cy="10" r="6" fill="currentColor"/>
  <circle cx="20" cy="95" r="6" fill="currentColor"/>
  <circle cx="300" cy="95" r="6" fill="currentColor"/>
  <path d="M160 16 L160 30 M26 95 L45 92 M294 95 L275 92" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/>
  <circle cx="160" cy="105" r="9" fill="#f2d16b" stroke="currentColor" stroke-width="2"/>
  <path d="M160 114 L160 135 M148 125 L172 125" stroke="currentColor" stroke-width="2"/>
  <path d="M160 100 L120 40 M160 100 L200 40" stroke="#f2d16b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="160" y="170" font-size="11" text-anchor="middle" fill="currentColor">tracked viewer, image locked to their eyes</text>
</svg>

Models are small and screens are flat. A VR design review puts a person inside the design at one-to-one scale, so questions of [scale and intimacy](../story-experience/scale-and-intimacy.md) and [sightlines](../story-experience/sightlines.md) can be felt rather than argued. Imagineering's best-known tool is the DISH, the Digital Immersive Showroom in Glendale: a room with projected walls and floor, stereo glasses, and head tracking that locks the image to one viewer's eyes. In 2012 Imagineers described using it to place tables in Carthay Circle Restaurant, plan kitchen services, and check scale and timing on Radiator Springs Racers before concrete was poured. Mark Mine's reasoning was simple: changes are easy in the virtual world and very hard once built.

Disney's Bei Yang later argued that a tracked cave beats headsets for design work because several people can share it and it causes less [motion sickness](../human-factors/motion-sickness.md). Headsets are cheaper and now common in smaller studios, and the same pipelines feed [VR in the parks](../ai-future/vr-ar-in-parks.md) themselves. The limit is that a review only finds what the model contains; an unmodelled air duct still shows up on site.

## Explore further
- `mouseplanet-dish-visit` — Step into the DISH: a visit to Imagineering's Digital Immersive Showroom
- `attractions-management-disney-vr-cave` — Disney says virtual reality 'cave' is the future of immersion technology
- `abc7-cars-land-virtual` — Cars Land attraction created with virtual technology
