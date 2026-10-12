#!/usr/bin/env python3
"""HTTP-check every URL in content/resources/*.json and media credits. Prints failures. Usage: check_links.py [--fix-report out.json]"""
import json, pathlib, subprocess, sys, concurrent.futures as cf
ROOT = pathlib.Path(__file__).resolve().parent.parent
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
def status(url):
    for method in (["-I"], []):
        try:
            r = subprocess.run(["curl", "-sL", *method, "-o", "/dev/null", "-w", "%{http_code} %{url_effective}", "-A", UA, "--max-time", "25", url],
                               capture_output=True, text=True, timeout=40)
            code, _, eff = r.stdout.partition(" ")
            if code and code.isdigit() and int(code) < 400: return int(code), eff
            last = (int(code) if code.isdigit() else 0, eff)
        except Exception as e:
            last = (0, str(e))
    return last
def main():
    items = []
    for f in sorted((ROOT / "content" / "resources").glob("*.json")):
        for r in json.loads(f.read_text()): items.append((f.stem, r["id"], r["url"]))
    for f in sorted((ROOT / "content" / "media" / "credits").glob("*.json")):
        for c in json.loads(f.read_text()): items.append((f"credits/{f.stem}", c.get("commons_page", "?"), c["url"]))
    seen, uniq = set(), []
    for it in items:
        if it[2] not in seen: seen.add(it[2]); uniq.append(it)
    print(f"checking {len(uniq)} unique URLs ...", file=sys.stderr)
    bad = []
    with cf.ThreadPoolExecutor(12) as ex:
        for (src, rid, url), (code, eff) in zip(uniq, ex.map(lambda it: status(it[2]), uniq)):
            soft = code in (403, 429, 405, 999) or "doi.org" in url
            if code >= 400 or code == 0:
                bad.append(dict(source=src, id=rid, url=url, status=code, soft=soft))
                print(f"{'SOFT' if soft else 'FAIL'} {code:3d} {src:22s} {rid}  {url}")
    print(f"{len(uniq)} checked, {sum(not b['soft'] for b in bad)} hard failures, {sum(b['soft'] for b in bad)} soft (bot-wall/doi)")
    if "--fix-report" in sys.argv:
        pathlib.Path(sys.argv[sys.argv.index("--fix-report")+1]).write_text(json.dumps(bad, indent=1))
if __name__ == "__main__": main()
