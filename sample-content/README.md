# ⚠️ SAMPLE CONTENT — PLACEHOLDER

Everything in this folder is a **placeholder fixture** that follows the content
contract (`content-contract/schema.ts`) exactly. It exists so the site can be
built and tested before the real research corpus in `/content` is complete.

- The site uses `/content` when it exists and validates; it falls back to this
  folder per file and per land (`CONTENT_SOURCE=sample|real|auto`).
- Facts here are written to be accurate but have not been through the research
  process. Treat them as illustrative.
- Never copy from this folder into `/content`.

## Concept card format (what the research process also follows)

Path: `concepts/<land-id>/<concept-id>.md`

```md
---
id: peak-end-rule
title: Peak-End Rule
land: human-factors
level: intermediate            # beginner | intermediate | advanced
abstraction: concept           # super-concept | concept | sub-concept
parent: memory                 # omit / null for super-concepts
children: []                   # ids of direct children
relations:                     # typed links to OTHER concepts (ids must exist)
  - { type: applies-to, target: finale-design }   # is-a | part-of | causes | enables | limits | contrasts-with | applies-to | example-of
summary: One or two sentences, plain language.
tags: [memory, psychology]
visuals:                       # what the body contains, in order
  - { type: chart, title: "Remembered vs actual", alt: "Line chart comparing..." }
interactive_idea: "Rearrange a ride's moments and watch the remembered score change."   # or omit
sources:
  - { title: "When More Pain Is Preferred to Less", author: "Kahneman et al.", year: 1993, url: "https://..." }
confidence: high               # high | medium | low (or 0–1)
---

```chart
%% title: Remembered vs actual | alt: Line chart comparing remembered and actual pleasure
{ "mark": "line", "data": { "values": [ ... ] }, "encoding": { ... } }   ← Vega-Lite spec (JSON)
```

Prose: 50–200 words in plain language, with 2–4 inline Markdown links to other
concepts written as relative links, e.g. [motion sickness](../human-factors/motion-sickness.md).

## Explore further
- [Occupied time](../human-factors/occupied-time.md) — why a busy wait feels short.
```

### Visual blocks (always BEFORE the prose)

| Kind    | Fence            | First line (optional title/alt)                 |
|---------|------------------|-------------------------------------------------|
| mermaid | ```mermaid       | `%% title: … \| alt: …`                          |
| chart   | ```chart         | `%% title: … \| alt: …` then a Vega-Lite JSON spec |
| svg     | ```svg           | `<!-- title: … \| alt: … -->` then `<svg …>…</svg>` |
| formula | ```formula       | `%% title: … \| alt: …` then LaTeX (no `$$`)     |
| image   | `![alt](../../media/file.svg "title")` — files live in `media/` |

Alt text is required for accessibility. Mermaid/SVG/charts are re-themed by the
site to look like paper, so keep colours simple.
