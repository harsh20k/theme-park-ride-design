# DECISIONS — Theme Park Press

Key choices, trade-offs and cuts. Newest at the bottom of each section.

## Content contract, sample content, loader, check (kept from the first build)

- **Contract lives in `content-contract/` as plain TypeScript + Zod**, shared by the
  Node loader, the `content:check` CLI, the Vite plugin and the browser (types only).
  The site never reads `/content` directly — only through this contract.
- **Permissive where the research spec is silent, strict where it's explicit.**
  Ids/abstraction/relation types/graph shape are enums; everything else has
  defaults. JSON files accept either a bare array or a `{ lands: [...] }`-style wrapper.
- **Visuals are parsed from the card body, not trusted from frontmatter.** Fences
  ```` ```mermaid ````, ```` ```chart|vega-lite ````, ```` ```svg ````,
  ```` ```formula|latex|math ````, `$$…$$` and `![alt](media/…)` all count.
  An optional first line (`%% title: … | alt: …`) carries title/alt for a11y.
- **Inline links resolve by last path segment** (`../human-factors/motion-sickness.md`
  → `motion-sickness`). Broken ones are errors in `content:check` and render as
  dotted "no card yet" spans rather than dead links.
- **Graph is always derived from the merged concepts** ∪ `graph.json` edges ∪
  frontmatter relations ∪ parent/child edges, so mixed real/sample lands stay consistent.
- **Per-land merge rule:** a land uses real cards if its folder has ≥1 valid real
  card; otherwise sample cards. Other files merge per file. `CONTENT_SOURCE`
  forces `sample` or `real`; `CONTENT_DIR` points at a different real folder.
- **`content:check` reports each source separately** (real, sample, merged).
- **Sources may be plain strings** (resource ids); the page resolves them against
  `resources.json`.
- **Learning-path `level` accepts any string**; steps accept extra `land`/`level`.
- **Sample slugs reuse `tools/hierarchy.txt` slugs** so real lands replace sample
  lands cleanly.

## Pivot: from papercraft park to a Stripe Press–style shelf (proof of concept)

- **The 3D papercraft park was scrapped after review.** The user asked for a 1:1
  study of press.stripe.com instead: a shelf of 3D books, click a book to open it.
  Everything under `src/three`, the reading room, HUD, toys and library-mode
  stubs were removed; the content pipeline was kept untouched.
- **Reference measured, not guessed.** Screenshots and the site's component
  stylesheets were pulled (`scripts/grab-ref.ts`, `scripts/fetch-ref-css.ts`):
  background `#201819`, Ivar serif family, header padding `calc(42.5px + 1.75vw)`,
  fixed 70vw three.js canvas, one book row per `26.45vh`, 58/42 detail split,
  60px rules, bordered link rows, italic section labels, 3-column praise grid.
  `press.css` ports those values with our own class names.
- **Font: Newsreader (Google Fonts) stands in for Ivar**, which is proprietary.
  Same optical-size serif feel; swap in a licensed Ivar later by changing three
  CSS variables.
- **Books are three.js boxes with canvas textures**, like the original (which
  uses three.js r151). No image downloads: covers are drawn procedurally per
  concept in three looks picked by seed — combed marble, book cloth with a foil
  rosette, book cloth with foil lines — tinted from the land colour. Spines reuse
  the same art without the motif so titles stay legible.
- **DOM rows drive the 3D layout.** One invisible `<a>` per book (real links →
  keyboard + screen-reader friendly, and the hover hit-area) and the canvas reads
  their bounding boxes each frame, so scroll sync is exact and free. Canvas has
  `pointer-events: none`.
- **Detail page = body tint + fixed canvas above the page.** Stripe sets
  `--backgroundColor`/`--color` on the body per book; the canvas (z-index 1) sits
  above the transparent page so the standing book overlaps the left column and
  the text column keeps its own stacking context above the canvas.
- **Content mapping:** book = concept card; author line = land; prose = card
  text with inline links; "Explore further" = the bordered link rows (Stripe's
  "Preorder" group); "Sources" = the "Author" section; "Related ideas" = the praise
  grid (parent, children, typed relations).
- Cut for the POC: drag-to-rotate the standing book (Stripe's `cursor: grab`) —
  replaced by a small mouse-parallax tilt; mobile layout only roughly handled;
  podcast/film rows in the rail; cookie banner.
- **Rapier, drei and post-processing are no longer used** (still in package.json
  until the direction is confirmed; removing them cuts ~1 MB gz from installs,
  not from the bundle, since they're not imported).

## Draft 2 — built book, continuous reading, pinned-then-release

- **Procedural hardcover instead of a downloaded model.** `BookModel.tsx` builds
  two cover boards with overhang, an inset page block with page-edge texture, and
  a shallow half-cylinder spine. Reasons over a glTF: our textures are generated
  per concept, so UV layout must be ours; no licence review; no extra bytes.
- **Materials are `MeshPhysicalMaterial`** with a clearcoat (laminate sheen), a
  roughness map from the cloth grain, and a **metalness mask for foil** (gold
  motifs and titles are metallic and smooth, cloth is not). Lighting is a
  `RoomEnvironment` PMREM (no HDR download) plus one warm key light; ACES at 0.9.
- **Art generates lazily, one book per frame**, only once a book is within
  ~1.5 screens; a plain cloth material in the book's colour stands in. Generating
  42 books × 3 maps up front stalled the first paint for seconds.
- **All books share one size.** Spine and cover canvases are drawn at the true
  L:T and W:L aspect of the mesh, so type is never stretched.
- **Continuous reading flow.** The book page renders every book from the clicked
  one to the end of the shelf as sections. A scroll probe at 45vh picks the
  current section → `history.replaceState` to `/book/<id>`, the rail dash and the
  body tint (`--backgroundColor`/`--color`, CSS-transitioned) follow. Following a
  link inside the page restarts the flow from that book.
- **Pinned-then-release** is pure CSS + tracking: a `position: sticky` anchor in
  the left column; the 3D book tracks the anchor's rect each frame. When the next
  section pushes the anchor above its sticky top, the book rises and shrinks by
  the displacement. Section bodies (visuals included) mount via an
  IntersectionObserver so far-off sections cost nothing.
- **Pose**: yaw 26°, pitch 7°, roll −3.5° (spine toward the viewer on the left,
  page block visible at the head), a 0.02 rad idle sway, drag-to-turn with
  spring-back, no mouse-parallax.
- **Hover badge** on the shelf shows "N topics" = the concept plus everything
  under it in the hierarchy.
