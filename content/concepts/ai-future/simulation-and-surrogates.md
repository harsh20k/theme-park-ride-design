---
id: simulation-and-surrogates
title: Ride Simulation & ML Surrogates
land: ai-future
level: advanced
abstraction: concept
parent: ai-in-design
children: []
relations:
  - { type: applies-to, target: dynamic-loads }
  - { type: applies-to, target: fatigue }
  - { type: applies-to, target: acceleration-envelopes }
  - { type: applies-to, target: motion-cueing }
  - { type: enables, target: rl-for-figures }
summary: Slow physics models predict ride behavior; learned surrogates answer the same questions in microseconds.
tags: [simulation, multibody-dynamics, machine-learning, surrogate, engineering]
visuals: [chart]
interactive_idea: "Pick a question (peak g, bearing load, rider jerk); the widget shows which fidelity tier can answer it and how many design variants you could test in an hour."
sources: [arxiv-slide-surrogate-2024, kit-framed-curves-2026, ieee-spectrum-disney-bipedal-2023]
confidence: medium
---
```vega-lite
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Illustrative: cost per evaluation by model fidelity (not measured data)",
  "width": 300, "height": 150,
  "data": {"values": [
    {"model": "Full multibody run", "seconds": 600},
    {"model": "Reduced physics model", "seconds": 5},
    {"model": "Learned surrogate", "seconds": 0.001}
  ]},
  "mark": "bar",
  "encoding": {
    "y": {"field": "model", "type": "nominal", "title": null, "sort": null},
    "x": {"field": "seconds", "type": "quantitative", "scale": {"type": "log"}, "title": "Seconds per evaluation (log scale)"}
  }
}
```

Ride simulation predicts how vehicle, rider and structure behave before metal is cut. Multibody dynamics (MBD) solves the equations of motion for linked rigid or flexible bodies: train, bogies, restraints, track. It is accurate but slow, so engineers cannot run thousands of what-ifs. A surrogate is a cheap stand-in, often a neural network trained on simulation outputs, that answers in microseconds. The 2024 SLIDE method estimates forced dynamic responses of flexible multibody systems with speedups reported in the millions, plus a second network that estimates its own error.

Surrogates unlock sweeps over [dynamic loads](../ride-engineering/dynamic-loads.md), [fatigue](../ride-engineering/fatigue.md) and [acceleration envelopes](../ride-engineering/acceleration-envelopes.md), and they feed [motion cueing](../ride-systems/motion-cueing.md) tuning. The same idea powers robotics: Disney's walking characters are trained entirely in simulation with randomized motor strength, mass and friction, then transferred to hardware. Surrogates can be confidently wrong outside their training data, so certification still rests on full MBD runs and physical test. Confidence is medium: coaster-specific surrogate papers are scarce; the technique is proven on adjacent machines such as rail vehicles and robot arms.

## Explore further
- `arxiv-slide-surrogate-2024` — SLIDE: A machine-learning based method for forced dynamic response estimation of multibody systems
- `kit-framed-curves-2026` — Constrained, Interactive Design of Framed Curves
- `ieee-spectrum-disney-bipedal-2023` — How Disney Packed Big Emotion Into a Little Robot
