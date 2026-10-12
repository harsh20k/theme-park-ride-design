#!/usr/bin/env python3
"""Final report: counts per land, most-connected concepts, weakest areas, top resources. Run after qa.py --build."""
import json, re, pathlib, collections, importlib.util
ROOT = pathlib.Path(__file__).resolve().parent.parent
C = ROOT / "content"
spec = importlib.util.spec_from_file_location("qa", ROOT / "tools" / "qa.py")
qa = importlib.util.module_from_spec(spec); spec.loader.exec_module(qa)
errors, warns, cards = qa.check(None, False)
graph = json.loads((C / "graph.json").read_text())
res = {r["id"]: r for r in json.loads((C / "resources.json").read_text())}
deg = collections.Counter()
for e in graph["edges"]: deg[e["source"]] += 1; deg[e["target"]] += 1
lands = {l["id"]: l["title"] for l in json.loads((C / "lands.json").read_text())}
per = collections.defaultdict(lambda: collections.Counter())
cites = collections.Counter(); low = []; words = []
for slug, c in cards.items():
    n = qa.BY[slug]; L = n["land"]
    per[L]["cards"] += 1; per[L]["relations"] += len(c["fm"].get("relations") or []); per[L]["words"] += c["words"]
    per[L]["low"] += c["fm"].get("confidence") == "low"; per[L]["medium"] += c["fm"].get("confidence") == "medium"
    for k in c["kinds"]: per[L]["vis:" + k] += 1
    for s in c["fm"].get("sources") or []: cites[s] += 1; per[L]["srcs"] += 1
    if c["fm"].get("confidence") == "low": low.append(slug)
    words.append(c["words"])
res_land = collections.Counter(r["land"] for r in res.values())
out = ["# Corpus report", "", f"Cards: {len(cards)} / {len(qa.CONCEPTS)} planned. Graph: {len(graph['nodes'])} nodes, {len(graph['edges'])} edges. Resources: {len(res)}. QA errors: {len(errors)}, warnings: {len(warns)}.", "",
       "## Per land", "", "| Land | Cards | Avg relations | Avg words | Resources | Low conf | Visual mix |", "|---|---|---|---|---|---|---|"]
for L, title in lands.items():
    p = per[L]; n = p["cards"] or 1
    vis = ", ".join(f"{k[4:]} {v}" for k, v in sorted(p.items()) if k.startswith("vis:"))
    out.append(f"| {title} | {p['cards']} | {p['relations']/n:.1f} | {p['words']/n:.0f} | {res_land[L]} | {p['low']} | {vis} |")
out += ["", "## Most connected concepts (graph degree)", ""]
for s, d in deg.most_common(20): out.append(f"- `{s}` ({qa.BY[s]['land']}) — {d} edges")
out += ["", "## Weakest areas", ""]
least = sorted(((deg[n['slug']], n['slug']) for n in qa.CONCEPTS if n['slug'] in cards))[:15]
out.append("Least connected: " + ", ".join(f"`{s}` ({d})" for d, s in least))
out.append(f"\nLow-confidence cards ({len(low)}): " + ", ".join(f"`{s}`" for s in low))
thin = sorted(res_land.items(), key=lambda x: x[1])[:4]
out.append("\nFewest resources: " + ", ".join(f"{lands[l]} ({c})" for l, c in thin))
out += ["", "## Most-cited resources (top 10)", ""]
for rid, c in cites.most_common(10):
    r = res.get(rid, {}); out.append(f"- **{r.get('title', rid)}** ({r.get('type')}) — cited by {c} cards — {r.get('url')}")
(ROOT / "content" / "REPORT.md").write_text("\n".join(out) + "\n")
print("\n".join(out))
