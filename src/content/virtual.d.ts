declare module 'virtual:content-index' {
  import type { ContentBundle, Concept } from '@content/schema'
  import type { ConceptIndexEntry } from '../../vite-plugins/content'
  export type { ConceptIndexEntry }
  export interface LandModule {
    concepts: Concept[]
  }
  export interface ContentIndex extends Omit<ContentBundle, 'concepts'> {
    conceptIndex: ConceptIndexEntry[]
    landLoaders: Record<string, () => Promise<LandModule>>
  }
  export const landLoaders: ContentIndex['landLoaders']
  const index: ContentIndex
  export default index
}

declare module 'virtual:content-land:*' {
  import type { Concept } from '@content/schema'
  export const concepts: Concept[]
  const mod: { concepts: Concept[] }
  export default mod
}
