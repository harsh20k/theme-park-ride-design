---
id: head-and-neck-loads
title: Head & Neck Loads
land: ride-engineering
level: advanced
abstraction: concept
parent: rider-biomechanics
children: []
relations:
  - { type: applies-to, target: medical-exclusions }
  - { type: applies-to, target: lessons-from-incidents }
  - { type: applies-to, target: restraint-design-rules }
  - { type: applies-to, target: semicircular-canals }
  - { type: contrasts-with, target: positive-g }
summary: Measured head accelerations on coasters are below a pillow fight; neck loads from jolts remain the open question.
tags: [biomechanics, head-injury, hic, research, neck]
visuals: [formula, chart]
interactive_idea: "Compare the HIC and peak head acceleration of a coaster, a soccer header, a pillow fight and a low-speed crash on one scale."
sources: [pfister-head-motions-2009, kuo-brain-deformation-coasters-2017, smith-meaney-g-forces-brain-2002, ubc-fib-head-injury-coasters]
confidence: high
---
> **Formula** $HIC = \max_{t_1,t_2}\left[\left(\dfrac{1}{t_2 - t_1}\int_{t_1}^{t_2} a(t)\,dt\right)^{2.5}(t_2 - t_1)\right]$
> where:
> - $HIC$ — the Head Injury Criterion, a crash-test score built from the head's acceleration history
> - $a(t)$ — the resultant linear acceleration of the head, in g
> - $t_1, t_2$ — the start and end of the window that maximises the score, capped at 15 ms for HIC15

```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "HIC15 reported by Pfister et al. 2009 (coaster, pillow fight) and Kuo et al. 2017 (coaster)",
  "width": 300, "height": 130,
  "data": {"values": [
    {"activity": "Coaster, Kuo 2017", "hic": 2.7}, {"activity": "Coaster, Pfister 2009", "hic": 4.1}, {"activity": "Car crash 8 m/s, Pfister", "hic": 28.1}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "activity", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "hic", "type": "quantitative", "title": "HIC15"}
  }
}
```

In 2002 Douglas Smith and David Meaney answered the press panic about high-g coasters with a simple point: whole-body g is the wrong number. The brain is injured by rapid rotation of the head, so head acceleration is what matters, and their worst-case model put coaster values far below injury thresholds. Pfister, Chickola and Smith then measured it with head sensors on three coasters, in a pillow fight and in car-crash simulations. The coasters scored a HIC15 of about 4 and a peak head acceleration around 10 g; the authors judged the brain injury risk extremely low.

Stanford's Kuo and colleagues revisited the question in 2017 with two riders and a brain simulation. Linear accelerations were lower than sports impacts, but angular velocity changes were higher, and modelled brain strain was comparable to a mild soccer header. The two subjects, in identical seats, produced significantly different results.

The neck is less settled. Lateral jolts move the head against restraints, and rare case reports keep reviewers cautious, which is why [medical exclusions](../human-factors/medical-exclusions.md) mention neck conditions and [restraint design rules](../safety-standards/restraint-design-rules.md) limit head contact. The [semicircular canals](../human-factors/semicircular-canals.md) register the same rotations, and the outliers end up in [lessons from incidents](../safety-standards/lessons-from-incidents.md).

## Explore further
- `pfister-head-motions-2009` — Head Motions While Riding Roller Coasters: Implications for Brain Injury (measured head motion on three coasters)
- `kuo-brain-deformation-coasters-2017` — Pilot Findings of Brain Displacements and Deformations during Roller Coaster Rides (Stanford pilot study)
- `smith-meaney-g-forces-brain-2002` — Roller Coasters, G Forces, and Brain Trauma: On the Wrong Track? (why g alone misleads)
- `ubc-fib-head-injury-coasters` — Injury Biomechanics of the Head with Relation to Roller Coasters (comparison of the studies and their limits)
