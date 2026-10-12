import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useApp } from '@/state/store'

export const STEP_FPS = 12

/**
 * Stop-motion helper: runs `fn` only when the 12 fps step changes, so props
 * animate "on twos" while the camera and input stay at full frame rate.
 * Under prefers-reduced-motion the callback still fires (so state stays
 * correct) but with `stepped=false`, letting callers skip boil/jitter.
 */
export function useSteppedFrame(fn: (stepTime: number, stepIndex: number, stepped: boolean) => void, priority?: number) {
  const last = useRef(-1)
  const reduced = useApp((s) => s.reducedMotion)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const idx = Math.floor(t * STEP_FPS)
    if (idx === last.current) return
    last.current = idx
    fn(idx / STEP_FPS, idx, !reduced)
  }, priority)
}

/** Deterministic pseudo-random in [0,1) from a seed, for per-prop wobble. */
export function hash(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}
