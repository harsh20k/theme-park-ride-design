---
id: lighting-control-protocols
title: Lighting Control Protocols
land: show-technology
level: advanced
abstraction: concept
parent: lighting-and-audio
children: []
relations:
  - { type: applies-to, target: software-toolkit }
  - { type: enables, target: ride-show-synchronization }
  - { type: contrasts-with, target: ride-control-systems }
  - { type: applies-to, target: lighting-mood }
  - { type: part-of, target: show-control-systems }
summary: DMX512 sends 512 channel values per universe; Art-Net and sACN carry thousands of universes over Ethernet.
tags: [dmx512, art-net, sacn, rdm, protocols, networking]
visuals: [mermaid]
interactive_idea: "Patch fixtures into universes on a drag-and-drop grid and watch the channel count and network load update."
sources: [wikipedia-dmx512, art-net-spec, esta-published-standards, wikipedia-midi-show-control]
confidence: high
---
```mermaid
flowchart LR
  C["Lighting console or show controller"] -->|"sACN E1.31 or Art-Net over Ethernet"| SW["Network switch"]
  SW --> N1["Node"]
  SW --> N2["Node"]
  N1 -->|"DMX512 universe 1"| F1["Fixtures"]
  N2 -->|"DMX512 universe 2"| F2["Fixtures and dimmers"]
  F1 -.->|"RDM status back"| N1
```

DMX512 is the lingua franca of entertainment lighting. Created in 1986 by the USITT Engineering Commission to replace proprietary dimmer links, it sends one universe of 512 channels, each a value from 0 to 255, as an asynchronous serial stream at 250 kbit/s over EIA-485 differential wiring. A dimmer uses one channel; a moving head may use twenty. ESTA took over the standard, ANSI approved DMX512-A in November 2004, and the current edition is ANSI E1.11-2024. RDM, ANSI E1.20, adds a return path so fixtures can report status and be addressed remotely.

A ride can need hundreds of universes, which is where Ethernet carriers come in. Art-Net, written by Wayne Howell of Artistic Licence and published royalty-free, wraps DMX and RDM in network packets and supports tens of thousands of universes. sACN, ANSI E1.31, is the open ESTA alternative. Nodes convert back to DMX for the last run.

These networks are show networks, deliberately separate from the [ride control system](../safety-standards/ride-control-systems.md) that protects life safety; a lighting fault must never stop a brake. They are part of the broader [show control](../show-technology/show-control-systems.md) stack, standard entries in a designer's [software toolkit](../careers/software-toolkit.md), and the plumbing behind every [lighting mood](../sensory-environment/lighting-mood.md) cue.

## Explore further
- `wikipedia-dmx512` — DMX512
- `art-net-spec` — Art-Net: DMX512 and RDM over Ethernet
- `esta-published-standards` — ESTA published standards (E1.11, E1.20, E1.31)
