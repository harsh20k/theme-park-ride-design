---
id: real-time-engines
title: Real-Time Engines in Attractions
land: ai-future
level: intermediate
abstraction: concept
parent: immersive-media
children: []
relations:
  - { type: applies-to, target: media-servers-and-real-time-engines }
  - { type: applies-to, target: motion-simulator-theatre }
  - { type: applies-to, target: interactive-dark-ride }
  - { type: applies-to, target: ride-show-synchronization }
  - { type: enables, target: personalized-dark-rides }
  - { type: applies-to, target: show-control-systems }
summary: Game engines render ride media live so it can react to riders and stretch to fit the ride cycle.
tags: [unreal-engine, real-time, game-engine, interactivity, media]
visuals: [mermaid]
interactive_idea: "A ride-cycle clock runs; you delay the previous vehicle and watch the engine lengthen the asteroid scene so the cockpit still arrives on time."
sources: [mobilesyrup-smugglers-run-unreal-2025, fortune-carowinds-pvz-unreal-2016]
confidence: high
---
```mermaid
flowchart LR
  IN["Rider inputs: wheel, buttons, triggers"] --> ENG["Game engine renders each frame live"]
  SC["Show control and ride position"] --> ENG
  ENG --> SCR["Screens or visor"]
  ENG --> MB["Motion base cues"]
  ENG --> FX["Lights, wind, audio triggers"]
  LS["Load-station timing"] -. "stretch or cut scenes" .-> ENG
```

A pre-rendered ride film is finished before the first guest boards. A real-time engine, the same software that runs video games, draws every frame while the ride runs, so the picture can respond to what riders do and to what the ride system needs. Two consequences follow. Media can be interactive: steering, shooting, scoring. And media can be elastic: scenes can be lengthened or cut to fit the moment the vehicle must return.

Millennium Falcon: Smugglers Run is the reference case. Imagineering built it on a custom fork of Unreal Engine 4 with Epic and ILM; the system keeps recalculating when the cockpit will reach the load station and stretches or trims moments such as the hyperdrive repair so riders never sit through dead frames. A new Mandalorian mission uses Unreal Engine 5. An earlier example is Carowinds' Plants vs. Zombies 3Z Arena (2016), an Alterface and Pure Imagination theater where two audiences compete on synchronized screens.

In practice the engine sits on the [media server](../show-technology/media-servers-and-real-time-engines.md) layer, takes position from [show control](../show-technology/show-control-systems.md), and must stay frame-locked to the [motion base](../ride-systems/motion-base.md) for [ride-show synchronization](../show-technology/ride-show-synchronization.md). It is the enabling technology for any [interactive dark ride](../ride-systems/interactive-dark-ride.md) that wants more than a scoreboard.

## Explore further
- `mobilesyrup-smugglers-run-unreal-2025` — How Epic's Unreal Engine powers a major Star Wars theme park ride
- `fortune-carowinds-pvz-unreal-2016` — Electronic Arts Grows 'Plants vs. Zombies' Theme Park Game
