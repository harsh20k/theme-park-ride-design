#!/usr/bin/env python3
"""Lint visuals: Vega-Lite JSON parses, SVG is well-formed XML, Mermaid blocks start with a known diagram type and
flowchart labels have no unquoted parentheses; images have credits with an open licence; near-duplicate titles."""
import re, json, pathlib, sys, difflib, collections
import xml.etree.ElementTree as ET
ROOT = pathlib.Path(__file__).resolve().parent.parent
C = ROOT / "content"
MERMAID_TYPES = ("flowchart", "graph", "sequenceDiagram", "classDiagram", "stateDiagram", "stateDiagram-v2", "erDiagram", "journey",
                 "gantt", "pie", "quadrantChart", "requirementDiagram", "gitGraph", "mindmap", "timeline", "xychart-beta", "sankey-beta", "block-beta", "C4Context")
OPEN = re.compile(r"^(CC0|CC BY|CC BY-SA|Public domain|PD)", re.I)
problems = []
credits = {}
for f in (C / "media" / "credits").glob("*.json"):
    for c in json.loads(f.read_text()):
        if c["url"] in credits:
            credits[c["url"]]["used_in"] = sorted(set(credits[c["url"]].get("used_in", [])) | set(c.get("used_in", [])))
        else:
            credits[c["url"]] = dict(c)
        if not OPEN.match(c["license"].replace("Creative Commons ", "CC ")):
            problems.append(f"credits/{f.name}: licence '{c['license']}' not open: {c['url']}")
titles = {}
for f in sorted((C / "concepts").rglob("*.md")):
    t = f.read_text(); p = f"{f.parent.name}/{f.stem}"
    m = re.search(r"^title:\s*(.+)$", t, re.M)
    if m: titles[p] = m.group(1).strip().strip('"')
    for lang, body in re.findall(r"```([^\n]*)\n(.*?)```", t, re.S):
        lang = lang.strip().lower()
        if lang == "vega-lite":
            try:
                spec = json.loads(body)
                if "data" not in spec and "layer" not in spec and "concat" not in spec: problems.append(f"{p}: vega-lite without data")
            except Exception as e: problems.append(f"{p}: vega-lite JSON error: {e}")
        elif lang == "mermaid":
            first = next((l.strip() for l in body.splitlines() if l.strip() and not l.strip().startswith("%%")), "")
            if not first.startswith(MERMAID_TYPES): problems.append(f"{p}: mermaid unknown diagram type '{first[:30]}'")
            if first.startswith(("flowchart", "graph")):
                for line in body.splitlines():
                    # unquoted parens inside [...] labels
                    for lab in re.findall(r"\[([^\]\"]*)\]", line):
                        if "(" in lab or ")" in lab: problems.append(f"{p}: mermaid unquoted paren in label [{lab}]")
    for svg in re.findall(r"<svg.*?</svg>", t, re.S | re.I):
        try: ET.fromstring(svg)
        except Exception as e: problems.append(f"{p}: SVG not well-formed: {e}")
    for url in re.findall(r"!\[[^\]]*\]\((https?://[^)]+)\)", t):
        if url not in credits: problems.append(f"{p}: image without credits entry: {url}")
        elif p.split("/")[1] not in credits[url].get("used_in", []): problems.append(f"{p}: credits used_in missing this card for {url}")
# near-duplicate titles across different slugs
keys = list(titles)
norm = {k: re.sub(r"[^a-z0-9 ]", "", titles[k].lower()) for k in keys}
seen = set()
for i, a in enumerate(keys):
    for b in keys[i+1:]:
        if norm[a] == norm[b] or difflib.SequenceMatcher(None, norm[a], norm[b]).ratio() > 0.92:
            seen.add((a, b))
for a, b in sorted(seen): problems.append(f"near-duplicate titles: {a} '{titles[a]}' ~ {b} '{titles[b]}'")
for x in problems: print(x)
print(f"{len(problems)} visual/licence/duplicate issues")
