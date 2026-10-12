#!/usr/bin/env python3
"""Build content/mindmap.md (Mermaid mindmap + slug outline + counts) from tools/hierarchy.txt.
Also exposes parse() for later tooling (graph.json, per-land mindmaps)."""
import re, sys, json, collections, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "tools" / "hierarchy.txt"
OUT = ROOT / "content" / "mindmap.md"
ABSTRACTION = {0: "land", 1: "super-concept", 2: "concept", 3: "sub-concept"}

def parse():
    nodes, stack = [], []
    for ln, raw in enumerate(SRC.read_text().splitlines(), 1):
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        if indent % 2:
            sys.exit(f"line {ln}: odd indent")
        depth = indent // 2
        parts = [p.strip() for p in raw.strip().split("|")]
        slug, title = parts[0], parts[1]
        level = parts[2] if len(parts) > 2 else None
        if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", slug):
            sys.exit(f"line {ln}: bad slug {slug}")
        if depth > 3:
            sys.exit(f"line {ln}: too deep")
        stack = stack[:depth]
        parent = stack[-1] if stack else None
        land = stack[0] if stack else slug
        node = dict(slug=slug, title=title, level=level, depth=depth,
                    abstraction=ABSTRACTION[depth], parent=parent, land=land, children=[])
        nodes.append(node)
        stack.append(slug)
    by = {}
    for n in nodes:
        if n["slug"] in by:
            sys.exit(f"duplicate slug {n['slug']}")
        by[n["slug"]] = n
    for n in nodes:
        if n["parent"]:
            by[n["parent"]]["children"].append(n["slug"])
    return nodes, by

def mermaid(nodes, land=None):
    out = ["```mermaid", "mindmap"]
    if land is None:
        out.append("  root((Theme Park & Ride Design))")
        base = 2
    else:
        base = 1
    for n in nodes:
        if land and n["land"] != land:
            continue
        label = n["title"].replace("(", "").replace(")", "")
        d = n["depth"] if land is None else n["depth"]
        pad = "  " * (base + d)
        nid = n["slug"].replace("-", "_")
        if n["depth"] == 0:
            out.append(f"{pad}{nid}(({label}))" if land is None else f"{pad}root(({label}))")
        elif n["depth"] == 1:
            out.append(f"{pad}{nid}[{label}]")
        else:
            out.append(f"{pad}{label}")
    out.append("```")
    return "\n".join(out)

def main():
    nodes, by = parse()
    lands = [n for n in nodes if n["depth"] == 0]
    counts = collections.OrderedDict()
    for L in lands:
        c = collections.Counter(n["abstraction"] for n in nodes if n["land"] == L["slug"] and n["depth"] > 0)
        counts[L["slug"]] = c
    total = sum(sum(c.values()) for c in counts.values())
    lines = ["# Knowledge Mindmap — Theme Park & Ride Design", "",
             "Draft hierarchy (step 1 of the process). Source of truth: `tools/hierarchy.txt`; regenerate with `python3 tools/build_mindmap.py`.", "",
             "Depth = abstraction: **Land → Super-concept → Concept → Sub-concept**. Each non-land node becomes one concept card at `content/concepts/<land>/<slug>.md`.", "",
             "## Counts", "", "| Land | Super | Concept | Sub | Total |", "|---|---|---|---|---|"]
    for L in lands:
        c = counts[L["slug"]]
        lines.append(f"| {L['title']} (`{L['slug']}`) | {c['super-concept']} | {c['concept']} | {c['sub-concept']} | {sum(c.values())} |")
    lines.append(f"| **All lands** | {sum(c['super-concept'] for c in counts.values())} | {sum(c['concept'] for c in counts.values())} | {sum(c['sub-concept'] for c in counts.values())} | **{total}** |")
    lines += ["", "## Full mindmap", "", mermaid(nodes), "", "## Outline with slugs and levels", "",
              "Format: `slug` — Title *(level)*. Indent shows hierarchy."]
    for L in lands:
        lines += ["", f"### {L['title']} — `{L['slug']}`", ""]
        for n in nodes:
            if n["land"] != L["slug"] or n["depth"] == 0:
                continue
            lines.append(f"{'  ' * (n['depth'] - 1)}- `{n['slug']}` — {n['title']} *({n['level']})*")
    parked = [l.strip("# ").strip() for l in SRC.read_text().splitlines() if l.startswith("#   ")]
    if parked:
        lines += ["", "## Parked concepts (cut to fit the 300–450 target)", "",
                  "Tell me which to restore. Format: `slug | Title | level (parent)`.", ""]
        lines += [f"- {x}" for x in parked]
    OUT.write_text("\n".join(lines) + "\n")
    mm = ROOT / "content" / "mindmaps"; mm.mkdir(exist_ok=True)
    for L in lands:
        (mm / f"{L['slug']}.md").write_text(f"# {L['title']} — mindmap\n\n" + mermaid(nodes, L["slug"]) + "\n")
    print(f"wrote {OUT} — {total} concept nodes across {len(lands)} lands")
    for k, c in counts.items():
        print(f"  {k:22s} super={c['super-concept']:2d} concept={c['concept']:3d} sub={c['sub-concept']:2d} total={sum(c.values())}")
    lv = collections.Counter(n["level"] for n in nodes if n["depth"] > 0)
    print("  levels:", dict(lv))

if __name__ == "__main__":
    main()
