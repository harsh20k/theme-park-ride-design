---
id: onboard-and-spatial-audio
title: Onboard & Spatial Audio
land: show-technology
level: intermediate
abstraction: concept
parent: lighting-and-audio
children: []
relations:
  - { type: applies-to, target: launched-coasters }
  - { type: applies-to, target: audio-zoning }
  - { type: enables, target: multisensory-integration }
  - { type: applies-to, target: vehicle-and-restraint-engineering }
  - { type: applies-to, target: dark-rides }
summary: Speakers in the seat put the soundtrack on the rider; spatial tools place sounds around the room.
tags: [audio, onboard, spatial, speakers, soundtrack]
visuals: [svg]
interactive_idea: "Ride a virtual seat through scenes; toggle onboard versus room speakers to hear how the mix changes."
sources: [wikipedia-rock-n-roller-coaster, meyer-spacemap-go, qlab-docs]
confidence: high
---
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A coaster seat with speakers beside the head and a subwoofer below">
  <rect x="110" y="40" width="80" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="120" y="140" width="60" height="22" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="150" cy="70" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
  <rect x="96" y="56" width="12" height="28" rx="3" fill="#7E22CE"/>
  <rect x="192" y="56" width="12" height="28" rx="3" fill="#7E22CE"/>
  <rect x="135" y="146" width="30" height="12" rx="3" fill="#7E22CE" opacity="0.6"/>
  <path d="M92 60 Q80 70 92 80" fill="none" stroke="#7E22CE" stroke-width="1.5"/>
  <path d="M208 60 Q220 70 208 80" fill="none" stroke="#7E22CE" stroke-width="1.5"/>
  <text x="18" y="46" font-size="11" fill="currentColor">Mid and tweeter</text>
  <text x="214" y="46" font-size="11" fill="currentColor">per ear</text>
  <text x="186" y="170" font-size="11" fill="currentColor">Subwoofer under seat</text>
</svg>

On a fast ride the vehicle leaves room speakers behind. Onboard audio solves it by mounting speakers in the vehicle so the soundtrack travels with the rider and can be timed to the track. Rock 'n' Roller Coaster at Disney's Hollywood Studios, opened 29 July 1999, surrounds each rider with five speakers, two mid-range, two tweeters and a subwoofer under the seat, and plays a song tied to the specific train. Power, amplifier and player ride on the train too, making onboard audio a [vehicle engineering](../ride-engineering/vehicle-and-restraint-engineering.md) problem as much as a sound one.

In a theatre or dark-ride room, spatial audio does the opposite job: it keeps the listener still and moves the sound. Object-based tools such as Meyer Sound's Spacemap Go let a designer drag a sound across a map of speakers and drive the moves over OSC from cue software like QLab, so a creature can circle the room before it appears.

Both approaches feed the [multisensory](../human-factors/multisensory-integration.md) impression of motion and threat, and both must respect [audio zoning](../sensory-environment/audio-zoning.md) so one scene's roar does not leak into the next.

## Explore further
- `wikipedia-rock-n-roller-coaster` — Rock 'n' Roller Coaster
- `meyer-spacemap-go` — Meyer Sound Spacemap Go
- `qlab-docs` — QLab 5 documentation
