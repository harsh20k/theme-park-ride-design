#!/usr/bin/env python3
"""Write content/learning-path.json: curated cross-land tracks + one per-land path (beginner -> advanced)."""
import json, pathlib, importlib.util
ROOT = pathlib.Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("bm", ROOT / "tools" / "build_mindmap.py")
bm = importlib.util.module_from_spec(spec); spec.loader.exec_module(bm)
NODES, BY = bm.parse()
ORDER = {"beginner": 0, "intermediate": 1, "advanced": 2}

TRACKS = [
 ("how-rides-work", "How do rides actually work?", "Curious beginner", "beginner", [
   "coaster-anatomy", "energy-conversion", "lift-systems", "g-force-basics", "airtime-and-negative-g",
   "block-system", "brake-types", "anti-rollback", "restraint-mechanisms", "launched-coasters", "lsm-lim-launch",
   "classic-dark-ride", "omnimover", "trackless-ride", "motion-base", "ride-control-systems"]),
 ("why-it-feels-that-way", "Why rides feel the way they do", "Designer / animator", "beginner", [
   "fear-vs-fun", "safe-danger-paradox", "anticipation-and-dread", "arousal-and-relief", "vestibular-system",
   "motion-sickness", "sensory-conflict-theory", "peak-end-rule", "finale-design", "lifelong-ride-memories",
   "photo-moments", "awe", "nostalgia"]),
 ("story-you-walk-through", "Story you walk through", "Designer", "beginner", [
   "themed-storytelling", "story-bible", "environmental-storytelling", "weenies", "forced-perspective",
   "sightlines", "the-berm", "thresholds-and-portals", "queue-storytelling", "pre-show", "ride-beat-sheet",
   "tension-and-release", "finale-design", "level-design-parallels", "cinematic-grammar", "breaking-immersion"]),
 ("psychology-of-waiting", "The psychology of waiting", "Developer / ops", "beginner", [
   "waiting", "perceived-vs-actual-wait", "occupied-time", "explained-waits", "queue-fairness", "balking-and-reneging",
   "interactive-queues", "virtual-queues", "paid-priority-access", "throughput-math", "dispatch-interval",
   "queueing-theory", "littles-law", "wait-time-estimation", "wait-time-prediction"]),
 ("plan-a-park", "Plan a park from the ground up", "Planner", "intermediate", [
   "site-selection", "regional-vs-destination", "capacity-planning", "design-day", "attraction-mix", "hub-and-spoke",
   "entry-sequence", "central-icon", "land-design", "land-transitions", "guest-flow-patterns", "pinch-points",
   "level-of-service", "onstage-backstage", "utilidors", "rest-areas", "food-and-retail-placement", "expansion-and-phasing"]),
 ("engineer-a-coaster", "Engineer a coaster", "Engineer / technical", "advanced", [
   "g-force-basics", "positive-g", "lateral-g", "g-tolerance-and-duration", "jerk-and-onset-rate", "acceleration-envelopes",
   "heartline", "clothoid-loop", "banking", "spline-transitions", "airtime-hills", "friction-and-drag", "speed-profile",
   "block-system", "sensors-and-switches", "wheels-and-bogies", "fatigue", "dynamic-loads", "restraint-locking",
   "astm-f2291", "risk-assessment", "safety-integrity-levels", "testing-and-commissioning"]),
 ("make-it-safe", "Make it safe", "Engineer / operator", "intermediate", [
   "standards-and-regulation", "astm-f24", "astm-f2291", "en-13814", "iso-17842", "regulatory-landscape",
   "risk-assessment", "ride-control-systems", "redundancy-and-fail-safe", "reach-envelope", "patron-accommodation",
   "restraint-design-rules", "inspections", "operator-training", "dispatch-procedures", "incident-overview",
   "human-factors-incidents", "safety-culture"]),
 ("show-and-illusion", "Show tech and illusion", "Animator / technical artist", "intermediate", [
   "animatronics", "audio-animatronics-history", "figure-actuation", "figure-programming", "peppers-ghost",
   "scrims-and-transparency", "projection-mapping", "domes-and-wraparound-screens", "screens-vs-sets-debate",
   "theatrical-lighting", "onboard-and-spatial-audio", "show-control-systems", "ride-show-synchronization",
   "media-servers-and-real-time-engines", "real-time-engines", "untethered-figures", "free-roaming-robots"]),
 ("blue-sky-to-opening", "From blue sky to opening day", "Designer / producer", "intermediate", [
   "blue-sky", "concept-art", "design-intent", "feasibility-and-early-costing", "schematic-design", "models-and-maquettes",
   "previs", "ride-layout-design", "engineering-handoff", "mockups-and-prototypes", "rockwork", "scenic-painting",
   "show-install", "testing-and-commissioning", "soft-opening", "post-opening-plussing", "capital-budgets", "roi-and-attendance-modeling"]),
 ("design-for-everyone", "Design for every body and mind", "Designer / ops", "beginner", [
   "inclusion", "accessibility", "accessible-vehicles", "disability-access-services", "neurodiversity",
   "sensory-guides-and-quiet-rooms", "anthropometrics", "percentile-design", "restraint-fit", "height-and-health-requirements",
   "age-differences", "group-dynamics", "rider-switch", "cultural-differences", "localisation", "multilingual-design"]),
 ("places-that-feel-right", "Places that feel right", "Designer / architect", "intermediate", [
   "environmental-psychology", "prospect-refuge", "biophilia", "servicescape", "atmospherics", "area-music", "audio-zoning",
   "smellitzers", "scent-and-memory", "lighting-mood", "color-psychology", "color-scripts", "go-away-green",
   "materials-and-texture", "faux-finishes-and-aging", "shade-and-microclimate", "night-vs-day"]),
 ("history-in-20-stops", "History in 20 stops", "Everyone", "beginner", [
   "pleasure-gardens-and-worlds-fairs", "coney-island", "early-coasters", "trolley-parks", "tivoli-and-european-roots",
   "disneyland-1955", "walt-and-the-imagineers", "tubular-steel-breakthrough", "worlds-fair-1964", "pirates-of-the-caribbean",
   "haunted-mansion", "walt-disney-world-and-epcot", "space-mountain", "loop-revival", "hyper-and-giga-era",
   "indiana-jones-adventure", "spider-man-and-transformers", "forbidden-journey", "rise-of-the-resistance", "reservation-era"]),
 ("ai-and-whats-next", "AI and what comes next", "Developer", "intermediate", [
   "crowd-modeling", "wait-time-prediction", "digital-twins", "simulation-and-surrogates", "generative-concepting",
   "procedural-layout", "predictive-maintenance", "personalization", "free-roaming-robots", "rl-for-figures", "stuntronics",
   "real-time-engines", "personalized-dark-rides", "data-privacy", "craft-vs-automation"]),
 ("get-into-the-industry", "Get into the industry", "Student / career changer", "beginner", [
   "roles", "creative-roles", "engineering-roles", "show-tech-roles", "planning-and-ops-roles", "portfolio-building",
   "software-toolkit", "storytelling-for-designers", "university-programs", "competitions", "conferences",
   "professional-bodies", "entry-paths", "imagineering-in-a-box", "reading-list"]),
]

def main():
    out = []
    for tid, title, audience, level, steps in TRACKS:
        bad = [s for s in steps if s not in BY or BY[s]["depth"] == 0]
        if bad: raise SystemExit(f"{tid}: unknown slugs {bad}")
        out.append(dict(id=tid, title=title, kind="track", audience=audience, level=level,
                        steps=[dict(concept=s, land=BY[s]["land"], level=BY[s]["level"]) for s in steps]))
    for L in [n for n in NODES if n["depth"] == 0]:
        land_nodes = [n for n in NODES if n["land"] == L["slug"] and n["depth"] > 0]
        # supers first (hierarchy order), then concepts by level then hierarchy order
        idx = {n["slug"]: i for i, n in enumerate(land_nodes)}
        ordered = sorted(land_nodes, key=lambda n: (0 if n["depth"] == 1 else 1, ORDER[n["level"]], idx[n["slug"]]))
        out.append(dict(id=f"land-{L['slug']}", title=f"{L['title']}: beginner to advanced", kind="land", audience="Anyone",
                        level="mixed", steps=[dict(concept=n["slug"], land=L["slug"], level=n["level"]) for n in ordered]))
    (ROOT / "content" / "learning-path.json").write_text(json.dumps(out, indent=1))
    print(f"wrote learning-path.json: {len(TRACKS)} tracks + {len(out)-len(TRACKS)} land paths")

if __name__ == "__main__":
    main()
