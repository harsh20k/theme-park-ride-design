# Concept Card Authoring Spec

Every node in `tools/hierarchy.txt` (except the 13 lands) becomes exactly one file:
`content/concepts/<land-id>/<slug>.md`. Slugs, titles, levels, parents and children are FIXED by the hierarchy; copy them, do not invent new slugs.

## Frontmatter (YAML, all keys required)

```yaml
---
id: peak-end-rule                 # = slug from hierarchy
title: Peak-End Rule              # = title from hierarchy
land: human-factors               # = land id
level: beginner                   # from hierarchy: beginner | intermediate | advanced
abstraction: concept              # super-concept | concept | sub-concept (from hierarchy depth)
parent: memory                    # from hierarchy; super-concepts use the land id (e.g. parent: human-factors)
children: []                      # from hierarchy; [] if none
relations:                        # 3–6 typed cross-links, targets MUST be slugs in hierarchy.txt
  - { type: applies-to, target: finale-design }
  - { type: enables, target: lifelong-ride-memories }
  - { type: contrasts-with, target: duration-neglect }
summary: One sentence, under 20 words, plain language.
tags: [psychology, memory, pacing]      # 3–6 lowercase tags
visuals: [mermaid, chart]               # subset of: mermaid | chart | svg | image | formula
interactive_idea: "One sentence describing a possible interactive widget."
sources: [kahneman-peak-end-1993, wikipedia-peak-end-rule]   # 1–4 ids from your resources file
confidence: high                        # high | medium | low (low => add a one-line note in the body)
---
```

Relation types (use only these): `is-a`, `part-of`, `causes`, `enables`, `limits`, `contrasts-with`, `applies-to`, `example-of`.
Do NOT repeat the parent/children hierarchy as relations; hierarchy edges are generated automatically.
Prefer relations that cross lands (e.g. a psychology concept → a ride-design or engineering concept).
`example-of` points FROM a real attraction/ride card (history land) TO the concept it illustrates, or from a concept to a landmark attraction when you cite it.

## Body (in this order)

1. **Visual(s) first.** At least one. Choose from:
   - Mermaid: a fenced ```mermaid block (flowchart, sequence, timeline, quadrantChart, xychart-beta, mindmap, stateDiagram). Keep under ~20 lines. No parentheses or brackets inside node labels (use quotes: `A["Label (ok)"]`).
   - Chart: a fenced ```vega-lite block containing a complete, small Vega-Lite JSON spec with inline `"data": {"values": [...]}`. Illustrative data MUST be labelled as illustrative in the title or description unless it comes from a cited source.
   - SVG: an inline `<svg viewBox="0 0 320 180" ...>` written directly in the markdown (≤ 40 lines, flat shapes, `stroke="currentColor"` / a few fills, no external refs, no text smaller than 10px). Original, papercraft-friendly.
   - Formula card: a blockquote starting with `> **Formula**` containing one equation in `$...$` LaTeX, followed by a bullet list "where" each symbol is explained in words.
   - Image: ONLY openly licensed (Wikimedia Commons public domain / CC0 / CC BY / CC BY-SA). Use the markdown form `![alt](https://upload.wikimedia.org/...)` followed by an italic credit line `*Photo: Author, CC BY-SA 4.0, via Wikimedia Commons — [source](commons page url)*`. Record it in `content/media/credits/<land>.json`. If you cannot verify the licence on the Commons file page, link out instead of embedding.
2. **Text: 50–200 words.** Plain language, short sentences, your own words. Name the precise technical term alongside the plain explanation. No copied paragraphs. Quotes under 15 words with attribution. Include **3–6 inline links** to other cards as relative Markdown links: `[peak-end rule](../human-factors/peak-end-rule.md)`. Link targets must be hierarchy slugs in the correct land folder. Real ride examples are welcome (name the park and ride) when you are sure of the fact.
3. **`## Explore further`** — a bullet list of your resource ids, one per line: `` - `resource-id` — Title ``. 1–4 items, each must exist in your resources file.

Word count = the text in step 2 only (visual blocks, frontmatter and Explore further are excluded). Never under 50, never over 200.

Facts: never invent numbers, dates, names, or patent numbers. If uncertain, set `confidence: low` and say what is uncertain in one sentence. Prefer primary/professional sources (patents, standards bodies, TEA, IAAPA, manufacturers, official Imagineering/Universal talks), then talks (SIGGRAPH, GDC, TEA SATE, IAAPA), then academic papers, then books (as references), then quality deep-dives (Blooloop, Coaster101, Theme Park Insider, Defunctland, Imagineering in a Box).

## Resources file: `content/resources/<land>.json`

A JSON array. Every URL must be fetched and confirmed to be the right page (use WebFetch; if it fails, drop it or find the canonical URL). Exception: academic papers behind a publisher bot-wall (403) may be recorded with their `https://doi.org/...` URL once you have confirmed the DOI resolves to the right paper via a search result, Crossref (`https://api.crossref.org/works/<doi>`), or an abstract page. Deduplicate within your land. Ids are global, so make them specific: `<source-short>-<topic>` e.g. `coaster101-block-brakes`, `astm-f2291-overview`, `google-patents-us-5272984`, `wikipedia-omnimover`, `tea-sate-2019-queue-design`.

```json
{
  "id": "kahneman-peak-end-1993",
  "title": "When More Pain Is Preferred to Less: Adding a Better End",
  "url": "https://...",
  "type": "paper",              // article | paper | patent | video | talk | book | standard | tool
  "land": "human-factors",
  "level": "intermediate",
  "why_it_matters": "The original cold-water experiment behind the peak-end rule.",
  "verified_on": "2026-10-12"
}
```

Aim for at least 22 verified resources per land (Human Factors halves: 16 each). Books go in as `type: book` with a publisher, WorldCat, or Open Library URL; do not copy text from them.

## Glossary file: `content/glossary/<land>.json`

JSON array of 15–25 terms: `{"term": "Block brake", "definition": "One plain-language sentence.", "land": "ride-engineering", "concept": "block-system"}` (`concept` = slug the term belongs to, or null).

## Timeline file: `content/timeline/<land>.json`

JSON array of dated milestones relevant to your land (history land: 40+; every other land: 3–8): `{"date": "1959-06-14", "precision": "day", "title": "Matterhorn Bobsleds opens", "description": "First tubular-steel roller coaster.", "land": "history", "concept": "tubular-steel-breakthrough", "source": "resource-id"}`. `precision` is `day | month | year | decade`. Only dates you have verified from a source.

## Media credits file: `content/media/credits/<land>.json` (only if you embedded images)

`{"url": "https://upload.wikimedia.org/...", "commons_page": "https://commons.wikimedia.org/wiki/File:...", "author": "...", "license": "CC BY-SA 4.0", "used_in": ["slug"]}`.

## Self-check

Run `python3 -I tools/qa.py --land <land-id>` before finishing and fix every error it reports. Warnings for cross-land link targets that do not exist yet as files are fine (the slug just has to exist in the hierarchy).
