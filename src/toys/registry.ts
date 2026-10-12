import type { ComponentType, LazyExoticComponent } from 'react'

export interface ToyProps {
  conceptId: string
}

export interface ToyEntry {
  id: string
  title: string
  /** One or two plain sentences explaining what the toy shows. */
  blurb: string
  component: LazyExoticComponent<ComponentType<ToyProps>>
}

/**
 * Toy registry: concept id (or explicit `toy:` frontmatter id) → interactive toy.
 * Stage 5 fills this in; the card renderer already knows how to mount an entry.
 */
export const toys: Record<string, ToyEntry> = {}

export function toyFor(conceptId: string, explicit?: string | null): ToyEntry | null {
  if (explicit && toys[explicit]) return toys[explicit]
  return toys[conceptId] ?? null
}
