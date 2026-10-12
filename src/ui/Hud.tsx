import { Link } from 'react-router'
import { useApp } from '@/state/store'
import { conceptIndex, landById, provenance } from '@/content/api'
import './Hud.css'

interface Props {
  onEnterNear: () => void
}

/** Heads-up layer over the park: title, controls hint, approach prompt, toggles. */
export default function Hud({ onEnterNear }: Props) {
  const near = useApp((s) => s.nearBuilding)
  const quality = useApp((s) => s.quality)
  const setQuality = useApp((s) => s.setQuality)
  const visited = useApp((s) => s.visited)
  const nearLand = near ? landById.get(near) : null
  const total = conceptIndex.length
  const sampleLands = provenance.sampleLands.length

  return (
    <div className="hud" aria-live="polite">
      <header className="hud__top">
        <div className="hud__title paper">
          <span className="tape" aria-hidden="true" />
          <h1>The Papercraft Park Library</h1>
          <p>
            {visited.size}/{total} ideas visited
            {sampleLands > 0 && (
              <>
                {' '}
                · <span className="badge badge--sample">{sampleLands} placeholder land{sampleLands > 1 ? 's' : ''}</span>
              </>
            )}
          </p>
        </div>
        <nav className="hud__nav">
          <Link className="paper-btn paper-btn--small" to="/library">
            📚 Library mode
          </Link>
          <button className="paper-btn paper-btn--small" onClick={() => setQuality(quality === 'high' ? 'low' : 'high')} title="Toggle rendering quality">
            {quality === 'high' ? '✨ high' : '🪶 light'}
          </button>
        </nav>
      </header>

      {nearLand && (
        <div className="hud__prompt">
          <button className="paper-btn paper-btn--accent" onClick={onEnterNear}>
            Enter {nearLand.title} <kbd>E</kbd>
          </button>
        </div>
      )}

      <footer className="hud__bottom">
        <div className="hud__hint paper">
          <kbd>W</kbd>
          <kbd>A</kbd>
          <kbd>S</kbd>
          <kbd>D</kbd> drive · click ground to travel · <kbd>E</kbd> enter · <kbd>M</kbd> map · <kbd>/</kbd> search
        </div>
      </footer>
    </div>
  )
}
