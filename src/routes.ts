import { conceptById } from './content/api'

/** Each concept has its own URL: /land/<land>/<concept>. */
export function conceptPath(id: string, mode: 'park' | 'library' = 'park'): string {
  const c = conceptById.get(id)
  const base = mode === 'library' ? '/library' : ''
  if (!c) return `${base}/land/unknown/${id}`
  return `${base}/land/${c.land}/${c.id}`
}

export function landPath(landId: string, mode: 'park' | 'library' = 'park'): string {
  return `${mode === 'library' ? '/library' : ''}/land/${landId}`
}

export function hubPath(section?: string, mode: 'park' | 'library' = 'park'): string {
  return `${mode === 'library' ? '/library' : ''}/hub${section ? `/${section}` : ''}`
}
