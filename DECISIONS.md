# DECISIONS — The Papercraft Park Library

Key choices, trade-offs and cuts. Newest at the bottom of each section.

## Stage 1 — content contract, sample content, loader, check

- **Contract lives in `content-contract/` as plain TypeScript + Zod**, shared by the
  Node loader, the `content:check` CLI, the Vite plugin and the browser (types only).
  The site never reads `/content` directly — only through this contract.
- **Permissive where the research spec is silent, strict where it's explicit.**
  Ids/abstraction/relation types/graph shape are enums; everything else has
  defaults. `lands.json`, `resources.json`, `glossary.json`, `timeline.json` and
  `learning-path.json` accept either a bare array or a `{ lands: [...] }`-style
  wrapper, so either style from the research process validates.
- **Visuals are parsed from the card body, not trusted from frontmatter.** Fences
  ```` ```mermaid ````, ```` ```chart|vega-lite ````, ```` ```svg ````,
  ```` ```formula|latex|math ````, `$$…$$` and `![alt](media/…)` all count.
  An optional first line (`%% title: … | alt: …`) carries title/alt for a11y.
  Frontmatter `visuals` is cross-checked and mismatches are warnings.
- **Inline links resolve by last path segment** (`../human-factors/motion-sickness.md`
  → `motion-sickness`), so authors can write relative Markdown links that also
  work on GitHub. Broken ones are errors in `content:check` and render as dotted
  "no card yet" spans in the site rather than dead links.
- **Graph is always derived from the merged concepts** (nodes) ∪ `graph.json`
  edges ∪ frontmatter relations ∪ parent/child edges. This keeps the graph
  consistent when real and sample lands are mixed. `graph.json` is still
  validated and reported on its own.
- **Per-land merge rule:** a land uses real cards if its folder has ≥1 valid real
  card; otherwise sample cards. Other files merge per file. `CONTENT_SOURCE`
  forces `sample` or `real`; `CONTENT_DIR` points at a different real folder
  (used in the worktree, where `/content` is untracked).
- **`content:check` reports each source separately** (real, sample, merged) so
  research-side problems are visible even while the site falls back to sample.
- **Sources may be plain strings.** Real cards use resource ids
  (`sources: [kahneman-peak-end-1993]`); the card UI resolves those against
  `resources.json` when it can.
- **Learning-path `level` accepts any string** (real tracks use values outside
  beginner/intermediate/advanced); steps accept extra `land`/`level` fields.
- **Sample slugs reuse `tools/hierarchy.txt` slugs** so a real land replaces a
  sample land cleanly and cross-land links keep resolving.
- Cut: no `media/index.json` requirement — media is indexed from disk; an index
  only adds alt text / credits if present.

## Stage 2 — art direction test

- **Procedural buildings, no glTF yet.** One `Building` component with 13
  silhouettes keyed by `BuildingKind`; lands.json may omit `building`/`landmark`
  and `landTheme.ts` supplies a bespoke look for known land ids and a generic
  rotation for unknown ones (so any number of lands works). glTF models can
  replace a kind later without touching the scene.
- **Paper look is a shader, not textures**: `PaperMaterial` extends
  `MeshStandardMaterial` with procedural grain, fibre streaks, crease normal
  noise, silhouette edge-darkening (fakes card thickness) and a vertex "boil"
  stepped at 12 fps. Zero texture downloads; respects `prefers-reduced-motion`
  (boil off, no camera lag).
- **Stop-motion = 12 fps for props, 60 fps for camera/input**: `useSteppedFrame`
  fires only when the 1/12 s step changes. Vehicle wheels, flags, trees and sign
  bob use it; the chase camera and physics do not.
- **Arcade physics on Rapier**: vehicle is a dynamic body whose velocity is set
  directly (snappy, predictable) but can still shove dynamic paper props.
  Click-to-travel steers the same body toward a ground point.
- **Concept cards are HTML overlays** (`role=dialog`, Esc closes, focus moves to
  close button), never text in the 3D scene. Reading rooms are also HTML — the
  3D room is dressing; shelves are the real UI.
- **Mermaid/Vega-Lite re-themed** via `theme: base` variables and a Vega config
  (cream background, ink strokes, hand-cut palette) instead of post-processing SVG.
- **Rapier's inlined WASM (~850 kB gz) is the biggest first-load cost.** Kept for
  now; polish stage will try `@dimforge/rapier3d` (non-compat) or lazy-init
  physics after the loading scene.
- **Stage 2 shows one land only** (`STAGE2_LAND` in `App.tsx`); the layout code
  already rings all lands around a hub.
- Cut: drei `Text` (troika) for signs — it fetches a font from a CDN. Signs are
  `Html` paper cards instead; no network fonts anywhere.
