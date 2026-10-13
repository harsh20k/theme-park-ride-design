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

## Draft 3 — library of topic shelves, universal search, press mark and photo covers

- **Three views instead of one list.** `/` is the library: one horizontal shelf
  per topic (land) in `lands.json` order, with the topic's *section* books
  (super-concepts) standing on a CSS plank (lit top face + dark front edge; the
  canvas draws the books above it). `/topic/<land>` is the old lying-flat shelf
  scoped to one topic, with italic section labels between groups.
  `/book/<id>` is the reading flow, now scoped to the topic's shelf (it ends
  with "That is the whole <topic> shelf"). 543 books in one list was unusable.
- **Books on the library shelf stand at yaw 58°** (spine toward the viewer, a
  slice of cover showing) and scale down on crowded shelves so every section
  fits on the plank. Hovering a shelf lifts its books and reveals the section names.
- **Book order within a topic is tree order** (section, then its concepts and
  sub-concepts), from `shelvesForLand()`.
- **Standing pose tilts back now** (pitch −7°, roll −2°): the cover faces
  slightly upward to the right instead of downward, as requested.
- **Universal search** (`⌘K`, `Ctrl+K`, `/`): Fuse.js over every book (title,
  summary, land), every topic and glossary terms that point at a concept; Enter
  jumps to the book or topic from anywhere.
- **Press mark and three covers generated with fal.ai** through its MCP server
  (`google/nano-banana-pro` via `submit_jobs`), prompted in the house style
  (cloth, gold foil, serif capitals). The logo was keyed to a transparent
  cream PNG locally. Covers are cropped to the front board and used as the
  cover texture for `peak-end-rule`, `clothoid-loop` and `peppers-ghost`
  (`src/press/covers.ts`); spines stay procedural. This is a taste test —
  generating 543 covers is a separate decision (cost ≈ $0.15 each).
- **Contract loosened for the real corpus**: inline `<svg>` and
  `> **Formula**` blockquote cards count as visuals; `type: patent` resources;
  corpus timeline shape (`date`/`concept`) maps to `year`/`concepts`;
  super-concepts may name their land as `parent`.

## Draft 4 — a real shelf, a real hardcover

- **Planks are three.js meshes now, not CSS.** Each topic's plank follows its
  DOM hit-area rect every frame: a wooden box with a dark front edge, two wall
  brackets (plate, arm, diagonal strut) and a shadow-only wall behind
  (`ShadowMaterial`, so page text stays visible). Planks and books pitch 9°
  toward the viewer so the top face always shows, whatever their height on
  screen. Shadows: one 2048² PCF-soft map covering the visible slab; the wall is
  only drawn in library mode (on topic pages the offset shadows of lying books
  read as black blocks).
- **No smoothing on scroll-driven positions.** Planks and books snap to their
  DOM rects; only hover lifts and the reading-flow pose are eased. Before, the
  books lagged the plank while scrolling and never looked seated. Library hover
  no longer lifts or zooms the books.
- **Topic shelf hover tilts toward the pointer.** A book counts as "near" when
  the pointer is over its row or within ~60% of its height above/below; the
  side nearest the pointer rises (max 7°), on top of the lift.
- **The hardcover model gained a joint and rounded edges.** Boards are
  `RoundedBoxGeometry` (radius ≈ 0.6% of the length, capped by board
  thickness); a recessed hinge strip (4.5% of the width, 42% of a board
  thickness deep) runs beside the spine on both boards; the cover UVs are
  remapped from vertex positions so the art is cropped to the board, not
  stretched. Geometry is cached per size (every book is the same size).
- **Photo covers never show blank.** The board starts with the procedural
  art; the photo replaces the map on load, and a failed load logs a warning and
  keeps the procedural cover. (Reported "white covers" could not be reproduced
  in Chrome or WebKit against the dev server; the fallback removes the failure
  mode regardless.) The topic shelf's hover badge now says "illustrated cover".

## Draft 5 — branded covers, the real mark everywhere, honest spines

- **The three photo covers were regenerated in each book's own cloth colour**
  (the site's `palette[0]` for the land: #bb1b5d, #2d23b4, #711bbb) through
  `fal-ai/nano-banana-pro/edit` with the press mark uploaded as a reference
  image, so the emblem on the cover is the real one. Nano Banana follows the
  mark closely on two of three; Pepper's Ghost got a looser interpretation.
- **The procedural art now draws the real emblem** (preloaded PNG, tinted on a
  scratch canvas) in place of the old circle-and-chevron: gold at the top right
  of every cover and at the tail of every spine, both in the foil mask.
- **Spine text is never squeezed any more.** `fillText(maxWidth)` condensed
  glyphs; now the topic name is the short imprint ("Human Factors", "Ride
  Engineering" …), titles go to two stacked lines before the font shrinks, and
  only then ellipsise. The spine canvas is drawn for the unrolled width of the
  squashed half-cylinder (≈1.14 T) rather than T, which was stretching the mark.
- **Cost of covering the whole press** (fal list prices on 2026-10-12, 1K
  portrait, one image per book, no retries): Nano Banana Pro $0.15 → ≈$81;
  Nano Banana 2 $0.08 → ≈$43; Nano Banana $0.04 → ≈$22; FLUX Pro 1.1 ≈$0.04 →
  ≈$20 (no reference image for the mark). Budget ~20% for rerolls.
- **Font options** are laid out at `/fonts.html` (nine free faces on the site's
  background with header, title, body and spine samples). Switching is three
  CSS variables, the Google Fonts link and `FONT` in `theme.ts`.


## Draft 6 — seated shelves, lighter library, section rail, mixed bindings (2026-10-12)

**Books now sit on the shelf.** The old plank was sized for the books' footprint *along* the shelf, but a book turned spine-out is much deeper than it is wide, so every book overhung the plank front and back and read as floating. Now:

- The plank depth comes from the book's real footprint out from the wall, with a margin behind and in front.
- A shelf is one group: plank, brackets, books and a soft contact shadow under each book are children of it. The group is placed where the DOM plank is; nothing inside it moves on scroll, so a book cannot drift from its plank.
- The wall leans back 14° (it was a per-shelf 9° tilt against a vertical wall). Shelves are positioned *on* that leaning wall by casting a ray through the DOM point, and scaled back by the small perspective factor so the plank is exactly as wide as its DOM box. Shadows on the wall are now consistent with the planks and brackets.
- Every shelf is laid out for the fullest one (8 sections), so books are the same size on all shelves.

**Why the library scroll was choppy, and the fix.** Measured with `scripts/perf-library.ts` (scroll top→bottom→top, 1440×900 @2x): first pass averaged 28 ms a frame with spikes to 150 ms, second pass was a clean 16.7 ms. So the GPU was fine; the hitches were the cover art being painted while new shelves scrolled in. Three changes:

- Paper grain was applied by reading and rewriting every pixel of every canvas. It is now one shared 256 px noise tile laid on as a pattern. Twelve full-size covers and spines paint in about 30 ms in total.
- Library books are stand-ins (`LibraryShelves.tsx`): boards, page block and spine merged into one mesh, textured from one 640 px sheet holding the cover, spine and page edges; plain standard material, no foil or clearcoat maps. One draw call a book instead of six.
- Only the open topic's books are mounted in the scene (it was all 543, hidden). Their textures are disposed when the topic closes.

After: first pass 16.7 ms average, 16.8 ms worst, no frame over 25 ms, on both the library and the longest topic shelf.

**Section rail.** The topic rail lists one tick per book, with a longer tick where a section starts and the current section's name written up its side. The ticks now compress to fit (the 106-book shelf used to be cut off at 60vh). Hovering the rail, or pressing the section name, opens the list of all sections with book counts; the current one is marked and any of them can be jumped to. Esc or moving away closes it.

**Mixed bindings.** A shelf no longer shares one colour. Each book takes one of 28 binder's cloths (four of them pale, with ink type instead of foil), one of four foils (gold, pale gold, silver, copper) and one of twelve cover designs, all from its id: combed marble, rosette, diagonal foil lines, gilt border, pinstripe ticking, quarter binding, contour rings, leaves, scallops, terrazzo, broad vertical bands, and stars. Spines get one of four binder's decorations (plain, rules at head and tail, a title label, raised bands). Neighbouring books are never bound in look-alike cloths. The three books with photographed covers keep the cloth colour of their photo.

**Pointer-follow everywhere.** The topic shelf already tilted a book toward the pointer. The standing book on the reading page now turns up to 9° (and pitches up to 5°) toward a pointer that is on or just beside it, and a library book under or next to the pointer turns up to 6° and eases 0.14 units off the wall. Neither grows; both ease back when the pointer leaves.

**Publishing.** Live at https://theme-park-design.byharshpandey.com as the Cloudflare Pages project `theme-park-design` (production branch `main`). To republish: `npm run build`, then `npx wrangler pages deploy dist --project-name theme-park-design --branch main`. The `--branch main` matters: the site lives on a git branch with another name, and without it the upload lands as a preview. Do not use `wrangler pages project create` for a new site: in wrangler 4.149 it set the repo up for Workers instead (edited `vite.config.ts` and `package.json`, added `wrangler.jsonc`) and uploaded a Worker. Those edits were reverted and the Worker deleted; the Pages project was created through the Cloudflare API.
