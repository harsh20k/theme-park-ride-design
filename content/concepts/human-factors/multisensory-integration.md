---
id: multisensory-integration
title: Multisensory Integration
land: human-factors
level: intermediate
abstraction: concept
parent: perception
children: [cross-modal-effects, scent-and-memory]
relations:
  - { type: applies-to, target: ride-show-synchronization }
  - { type: enables, target: presence }
  - { type: applies-to, target: 4d-theatres }
  - { type: applies-to, target: wind-heat-and-scent-effects }
  - { type: applies-to, target: show-control-systems }
summary: Senses that fire together, at the same place and moment, reinforce each other far beyond their sum.
tags: [perception, multisensory, synchronisation, show]
visuals: [chart]
interactive_idea: "Offset a sound effect from its visual by 0 to 500 ms; a 'believability' gauge collapses as the offset grows."
sources: [stein-stanford-2008-multisensory-integration]
confidence: high
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: weak cues add up to more than their sum when synchronised",
  "width": 300, "height": 140,
  "data": {"values": [
    {"condition": "Picture only", "response": 3},
    {"condition": "Sound only", "response": 2},
    {"condition": "Picture + sound, 400 ms apart", "response": 4},
    {"condition": "Picture + sound, together", "response": 9}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "condition", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "response", "type": "quantitative", "title": "Felt intensity"}
  }
}
```

Barry Stein and Terrence Stanford's review of multisensory neurons gives designers three rules with a biological basis. *Spatial rule*: cues from different senses combine when they come from the same place. *Temporal rule*: they combine when they arrive within a short window of each other. *Inverse effectiveness*: the weaker each cue is on its own, the bigger the gain from combining them; strong cues gain little.

Rides are multisensory by nature, but the rules say *how* to combine. A dragon's roar must come from the dragon, not a speaker behind the rider. A splash must hit the face within the same fraction of a second as the water on screen; a late gust reads as a draught, an on-time gust reads as the thing flying past. [Ride–show synchronisation](../show-technology/ride-show-synchronization.md) and the timing precision of [show control](../show-technology/show-control-systems.md) are, in this light, perception engineering. Inverse effectiveness is the budget argument for [4D effects](../ride-systems/4d-theatres.md) and [wind, heat and scent](../show-technology/wind-heat-and-scent-effects.md): a small, cheap effect placed exactly on cue can transform a modest visual.

Well-integrated senses are also what produces [presence](../human-factors/presence.md), the feeling of being there rather than watching.

## Explore further
- `stein-stanford-2008-multisensory-integration` — Multisensory Integration: Current Issues from the Perspective of the Single Neuron
