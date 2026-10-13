/**
 * Hand-made cover art. A few books have an AI-generated cloth-and-foil cover
 * (fal.ai, Nano Banana Pro, prompted in the press house style) instead of the
 * procedural one; everything else keeps the generated marble / cloth art.
 *
 * Files live in /public/covers. The spine stays procedural so titles remain legible.
 */
export const COVER_IMAGES: Record<string, string> = {
  'peak-end-rule': '/covers/peak-end-rule.jpg',
  'clothoid-loop': '/covers/clothoid-loop.jpg',
  'peppers-ghost': '/covers/peppers-ghost.jpg',
}

/** Cloth colour of the books above, fixed by their photographed cover. */
export const COVER_CLOTH: Record<string, string> = {
  'peak-end-rule': '#bb1b5d',
  'clothoid-loop': '#2d23b4',
  'peppers-ghost': '#711bbb',
}

/** The press mark, generated with fal.ai (see DECISIONS.md). */
export const LOGO_URL = '/brand/logo.png'
