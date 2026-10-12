#!/usr/bin/env python3
"""QA + graph builder for the knowledge corpus.
Usage: qa.py [--land LAND] [--build]   (--build writes content/graph.json and merged resources/glossary/timeline)"""
import sys, re, json, pathlib, collections, argparse, importlib.util
import yaml

ROOT = pathlib.Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("bm", ROOT / "tools" / "build_mindmap.py")
bm = importlib.util.module_from_spec(spec); spec.loader.exec_module(bm)
NODES, BY = bm.parse()
CONCEPTS = [n for n in NODES if n["depth"] > 0]
LANDS = {n["slug"] for n in NODES if n["depth"] == 0}
REL_TYPES = {"is-a", "part-of", "causes", "enables", "limits", "contrasts-with", "applies-to", "example-of"}
VISUALS = {"mermaid", "chart", "svg", "image", "formula"}
LEVELS = {"beginner", "intermediate", "advanced"}
FM_RE = re.compile(r"\A---\n(.*?)\n---\n(.*)\Z", re.S)

def load_json_dir(sub, land=None):
    out = []
    for f in sorted((ROOT / "content" / sub).glob("*.json")):
        if land and not (f.stem == land or f.stem.startswith(land + "-")):
            continue
        try:
            data = json.loads(f.read_text())
        except Exception as e:
            out.append(("__error__", f"{f}: invalid JSON: {e}")); continue
        if not isinstance(data, list):
            out.append(("__error__", f"{f}: must be a JSON array")); continue
        out += [(f.stem, d) for d in data]
    return out

def body_parts(body):
    """Return (visual_kinds_found, prose_text, explore_ids)."""
    kinds = set()
    text = body
    # strip fenced blocks, noting their kind
    def fence(m):
        lang = (m.group(1) or "").strip().lower()
        if lang == "mermaid": kinds.add("mermaid")
        elif lang in ("vega-lite", "vegalite", "json vega-lite"): kinds.add("chart")
        return "\n"
    text = re.sub(r"```([^\n]*)\n.*?```", fence, text, flags=re.S)
    if re.search(r"<svg[\s>]", text, re.I):
        kinds.add("svg"); text = re.sub(r"<svg.*?</svg>", "\n", text, flags=re.S | re.I)
    if re.search(r"!\[[^\]]*\]\(https?://upload\.wikimedia\.org/", text):
        kinds.add("image")
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "\n", text)
    text = re.sub(r"^\*(Photo|Image|Diagram|Illustration)[^\n]*$", "", text, flags=re.M)
    if re.search(r"^>\s*\*\*Formula", text, re.M):
        kinds.add("formula")
        text = re.sub(r"^>.*$", "", text, flags=re.M)
        # drop the 'where' bullets right after the formula
        text = re.sub(r"(?:^\s*[-*]\s+\$?[^\n]*\$?[^\n]*$\n?)+", lambda m: "" if "$" in m.group(0) or "where" in m.group(0).lower() or len(m.group(0)) < 400 else m.group(0), text, flags=re.M)
    explore = []
    m = re.search(r"^##\s*Explore further\s*$(.*)\Z", text, re.M | re.S)
    if m:
        explore = re.findall(r"^\s*[-*]\s*`([^`]+)`", m.group(1), re.M)
        text = text[:m.start()]
    if "image" in kinds and len(explore) == 0 and "## Explore further" not in body:
        pass
    prose = re.sub(r"<[^>]+>", " ", text)
    prose = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", prose)
    prose = re.sub(r"^#+.*$", "", prose, flags=re.M)
    words = [w for w in re.split(r"\s+", prose) if re.search(r"[A-Za-z0-9]", w)]
    return kinds, len(words), explore, text

def check(land=None, build=False):
    errors, warns = [], []
    cards = {}
    resources = load_json_dir("resources", land)
    res_ids = collections.defaultdict(list)
    for src, r in resources:
        if src == "__error__": errors.append(r); continue
        for k in ("id", "title", "url", "type", "land", "level", "why_it_matters", "verified_on"):
            if k not in r: errors.append(f"resources/{src}.json: {r.get('id','?')} missing {k}")
        if r.get("type") not in {"article","paper","patent","video","talk","book","standard","tool"}:
            errors.append(f"resources/{src}.json: {r.get('id')} bad type {r.get('type')}")
        res_ids[r.get("id")].append(r)
    all_res_ids = set(res_ids)
    if not land:  # global dedupe by URL
        by_url = collections.defaultdict(list)
        for src, r in resources:
            if src != "__error__": by_url[r["url"].rstrip("/")].append(r["id"])
        dup_urls = {u: ids for u, ids in by_url.items() if len(set(ids)) > 1}
        for u, ids in dup_urls.items(): warns.append(f"same URL under several ids {sorted(set(ids))}: {u}")
    for n in CONCEPTS:
        if land and n["land"] != land: continue
        f = ROOT / "content" / "concepts" / n["land"] / f"{n['slug']}.md"
        if not f.exists():
            errors.append(f"MISSING card {n['land']}/{n['slug']}.md"); continue
        m = FM_RE.match(f.read_text())
        if not m: errors.append(f"{f.name}: no frontmatter"); continue
        try: fm = yaml.safe_load(m.group(1))
        except Exception as e: errors.append(f"{f.name}: bad YAML {e}"); continue
        body = m.group(2)
        p = f"{n['land']}/{n['slug']}"
        if fm.get("id") != n["slug"]: errors.append(f"{p}: id {fm.get('id')} != slug")
        if fm.get("title") != n["title"]: warns.append(f"{p}: title '{fm.get('title')}' != hierarchy '{n['title']}'")
        if fm.get("land") != n["land"]: errors.append(f"{p}: land mismatch")
        if fm.get("level") not in LEVELS: errors.append(f"{p}: bad level")
        if fm.get("abstraction") != n["abstraction"]: errors.append(f"{p}: abstraction {fm.get('abstraction')} != {n['abstraction']}")
        if (fm.get("parent") or None) != n["parent"]: errors.append(f"{p}: parent {fm.get('parent')} != {n['parent']}")
        if sorted(fm.get("children") or []) != sorted(n["children"]): errors.append(f"{p}: children {fm.get('children')} != {n['children']}")
        rels = fm.get("relations") or []
        if len(rels) < 3: errors.append(f"{p}: only {len(rels)} relations (need >= 3)")
        seen = set()
        for r in rels:
            if not isinstance(r, dict) or r.get("type") not in REL_TYPES or r.get("target") not in BY or r["target"] in LANDS:
                errors.append(f"{p}: bad relation {r}"); continue
            if r["target"] in (n["parent"], *n["children"], n["slug"]): errors.append(f"{p}: relation duplicates hierarchy/self: {r}")
            key = (r["type"], r["target"])
            if key in seen: errors.append(f"{p}: duplicate relation {r}")
            seen.add(key)
        if not fm.get("summary") or len(str(fm["summary"]).split()) > 24: errors.append(f"{p}: summary missing or > 24 words")
        tags = fm.get("tags") or []
        if not (3 <= len(tags) <= 8): warns.append(f"{p}: {len(tags)} tags")
        vis = set(fm.get("visuals") or [])
        if not vis or not vis <= VISUALS: errors.append(f"{p}: visuals {fm.get('visuals')} invalid")
        if not fm.get("interactive_idea"): warns.append(f"{p}: no interactive_idea")
        if fm.get("confidence") not in {"high","medium","low"}: errors.append(f"{p}: bad confidence")
        srcs = fm.get("sources") or []
        if not srcs: errors.append(f"{p}: no sources")
        for s in srcs:
            if s not in all_res_ids: errors.append(f"{p}: source id '{s}' not in resources")
        kinds, wc, explore, text = body_parts(body)
        if not kinds: errors.append(f"{p}: no visual found in body")
        elif not vis <= kinds: warns.append(f"{p}: frontmatter visuals {sorted(vis)} but body has {sorted(kinds)}")
        if not (50 <= wc <= 200): errors.append(f"{p}: {wc} words (need 50–200)")
        # the first non-empty body line should be a visual
        first = next((l for l in body.splitlines() if l.strip()), "")
        if not (first.startswith("```") or first.lstrip().startswith("<svg") or first.startswith("![") or first.startswith("> **Formula")):
            warns.append(f"{p}: body does not lead with a visual")
        links = re.findall(r"\]\((\.\./([a-z0-9-]+)/([a-z0-9-]+)\.md)\)", body)
        if len(links) < 3: errors.append(f"{p}: only {len(links)} inline concept links (need 3–6)")
        for full, lland, lslug in links:
            if lslug not in BY or BY[lslug]["land"] != lland or lslug in LANDS:
                errors.append(f"{p}: broken inline link {full}")
        if lslug_self := any(l[2] == n["slug"] for l in links): warns.append(f"{p}: links to itself")
        if not explore: errors.append(f"{p}: no 'Explore further' resource ids")
        for e in explore:
            if e not in all_res_ids: errors.append(f"{p}: explore id '{e}' not in resources")
        if fm.get("confidence") == "low" and "uncertain" not in body.lower() and "unverified" not in body.lower() and "not confirmed" not in body.lower():
            warns.append(f"{p}: confidence low but body does not say what is uncertain")
        cards[n["slug"]] = dict(fm=fm, words=wc, links=[l[2] for l in links], kinds=kinds)
    # glossary / timeline / credits sanity
    for src, g in load_json_dir("glossary", land):
        if src == "__error__": errors.append(g); continue
        for k in ("term","definition","land"):
            if k not in g: errors.append(f"glossary/{src}.json: entry missing {k}: {g}")
        if g.get("concept") and g["concept"] not in BY: errors.append(f"glossary/{src}.json: '{g.get('term')}' concept {g['concept']} unknown")
    for src, t in load_json_dir("timeline", land):
        if src == "__error__": errors.append(t); continue
        for k in ("date","precision","title","description","land"):
            if k not in t: errors.append(f"timeline/{src}.json: entry missing {k}: {t}")
        if not re.fullmatch(r"\d{4}(-\d{2}(-\d{2})?)?", str(t.get("date",""))): errors.append(f"timeline/{src}.json: bad date {t.get('date')}")
        if t.get("concept") and t["concept"] not in BY: errors.append(f"timeline/{src}.json: '{t.get('title')}' concept {t['concept']} unknown")
        if t.get("source") and t["source"] not in all_res_ids: errors.append(f"timeline/{src}.json: '{t.get('title')}' source {t['source']} unknown")
    for src, c in load_json_dir("media/credits", land):
        if src == "__error__": errors.append(c); continue
        for k in ("url","commons_page","author","license","used_in"):
            if k not in c: errors.append(f"media/credits/{src}.json: entry missing {k}")
    if build and not land:
        build_outputs(cards, resources)
    return errors, warns, cards

def build_outputs(cards, resources):
    nodes = [dict(id=n["slug"], title=n["title"], land=n["land"], abstraction=n["abstraction"], level=n["level"]) for n in CONCEPTS]
    edges, seen = [], set()
    def add(s, t, ty):
        if (s, t, ty) not in seen: seen.add((s, t, ty)); edges.append(dict(source=s, target=t, type=ty))
    for n in CONCEPTS:
        if n["parent"] and n["parent"] not in LANDS: add(n["slug"], n["parent"], "part-of")
    for slug, c in cards.items():
        for r in c["fm"].get("relations") or []: add(slug, r["target"], r["type"])
    deg = collections.Counter()
    for e in edges: deg[e["source"]] += 1; deg[e["target"]] += 1
    orphans = [n["id"] for n in nodes if deg[n["id"]] == 0]
    (ROOT / "content" / "graph.json").write_text(json.dumps(dict(nodes=nodes, edges=edges), indent=1))
    # merged resources (dedupe by URL, first id wins; remap in cards is reported)
    merged, by_url, remap = [], {}, {}
    for src, r in resources:
        if src == "__error__": continue
        u = r["url"].rstrip("/")
        if u in by_url:
            if r["id"] != by_url[u]: remap[r["id"]] = by_url[u]
            continue
        by_url[u] = r["id"]; merged.append(r)
    (ROOT / "content" / "resources.json").write_text(json.dumps(merged, indent=1))
    gl = [g for _, g in load_json_dir("glossary") if _ != "__error__"]
    seen_t = set(); gl2 = []
    for g in sorted(gl, key=lambda g: g["term"].lower()):
        if g["term"].lower() in seen_t: continue
        seen_t.add(g["term"].lower()); gl2.append(g)
    (ROOT / "content" / "glossary.json").write_text(json.dumps(gl2, indent=1))
    tl = sorted((t for _, t in load_json_dir("timeline") if _ != "__error__"), key=lambda t: t["date"])
    (ROOT / "content" / "timeline.json").write_text(json.dumps(tl, indent=1))
    cr = [c for _, c in load_json_dir("media/credits") if _ != "__error__"]
    (ROOT / "content" / "media" / "credits.json").write_text(json.dumps(cr, indent=1))
    print(f"graph: {len(nodes)} nodes, {len(edges)} edges, orphans={orphans}")
    print(f"resources: {len(merged)} unique ({len(resources)} raw); glossary {len(gl2)}; timeline {len(tl)}; credits {len(cr)}")
    if remap: print("resource id remaps needed in cards:", remap)
    top = deg.most_common(15)
    print("most connected:", top)

if __name__ == "__main__":
    ap = argparse.ArgumentParser(); ap.add_argument("--land"); ap.add_argument("--build", action="store_true"); ap.add_argument("--quiet", action="store_true")
    a = ap.parse_args()
    errors, warns, cards = check(a.land, a.build)
    if not a.quiet:
        for w in warns: print("WARN ", w)
    for e in errors: print("ERROR", e)
    print(f"{len(cards)} cards checked, {len(errors)} errors, {len(warns)} warnings")
    sys.exit(1 if errors else 0)
