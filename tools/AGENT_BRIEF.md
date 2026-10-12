# Research-agent brief (read fully before starting)

You are writing part of a pro-level, visual-first knowledge base on theme park and ride design, for a developer/designer/animator audience. Working directory: /Users/harsh/Artifacts/theme-park-ride-design.

Read first, in this order:
1. `tools/CARD_SPEC.md` — the exact card format, resources/glossary/timeline file formats, and rules. Follow it literally.
2. `tools/hierarchy.txt` — every slug, title, level, parent and child. Your assigned slugs are listed in your task. All 543 slugs across all lands are valid link/relation targets.
3. `content/concepts/human-factors/peak-end-rule.md` — a finished example card.

Your job: for EACH assigned slug, write `content/concepts/<land>/<slug>.md` exactly to the spec (visual first, 50–200 words, 3–6 inline links, 3–6 typed relations, 1–4 sources, Explore further). Also write your resources JSON, glossary JSON, timeline JSON (and media credits JSON only if you embed images). Cover the super-concepts too: a super-concept card is an overview that orients the reader and links down to its concepts.

Research: use WebSearch and WebFetch to confirm facts and to verify every resource URL loads and is the right page. Prefer primary/professional sources (patents on Google Patents, ASTM/CEN/ISO summaries, TEA, IAAPA, manufacturer sites such as B&M, Intamin, Mack Rides, Vekoma, RMC, Oceaneering, KUKA, Dynamic Attractions; official Imagineering/Universal Creative/Merlin talks), then conference talks (SIGGRAPH, GDC, TEA SATE, IAAPA), academic papers, books (as references only), then quality deep-dives (Blooloop, Coaster101, Theme Park Insider, Defunctland, Imagineering in a Box, Khan Academy). Wikipedia is acceptable as a secondary source but should not be the only source for a card where a better one exists. Reuse one good resource across several cards rather than padding.

Accuracy: never invent facts, figures, dates, names or patent numbers. If you cannot confirm something, leave it out or set confidence: low and say what is uncertain. Write in your own words; no copied paragraphs; quotes under 15 words with attribution. Mention real rides and parks as examples when you are sure.

Visuals: lead every card with at least one visual (Mermaid, Vega-Lite chart, inline SVG, formula card, or an openly licensed Wikimedia Commons image with credit). Vary them; do not make every card a flowchart. Charts with illustrative data must say "illustrative". Keep Mermaid labels free of unquoted parentheses/brackets.

Relations: prefer cross-land links (psychology ↔ story ↔ engineering ↔ operations ↔ history). The history land's attraction cards should use `example-of` to point at the concepts they illustrate; other lands may point `example-of` at a landmark attraction slug.

Working rules:
- Only create/edit files for YOUR assigned slugs and your own JSON files. Do not edit tools/, lands.json, mindmap files, or other lands' files.
- Write files as you go (do not hold everything until the end). Use Write for each card.
- Before finishing, run `python3 -I tools/qa.py --land <your-land>` and fix every ERROR for your slugs (ignore MISSING errors for slugs that belong to another agent, and ignore warnings about cross-land link targets). Re-run until your slugs are clean.
- Finish with a short report: number of cards written, number of verified resources, glossary and timeline counts, slugs set to confidence: low and why, and any resource URLs you had to drop.
