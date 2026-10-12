import { Suspense, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { ContactShadows, Sky } from '@react-three/drei'
import { EffectComposer, TiltShift2, Vignette } from '@react-three/postprocessing'
import type { Land } from '@content/schema'
import { tickPaper } from './paper/PaperMaterial'
import { useApp } from '@/state/store'
import Vehicle from './Vehicle'
import Building from './Building'
import { Ground, LandDisc, PaperTree, Knockable, Bench, Lamp } from './Props'
import { themeFor, paperTone, type LandTheme } from './landTheme'
import { hash } from './paper/stepped'

export interface PlacedLand {
  land: Land
  theme: LandTheme
  index: number
  position: [number, number, number]
  radius: number
  rotation: number
}

interface Props {
  lands: Land[]
  onEnterLand: (landId: string) => void
  /** Stage 2: render only these land ids (undefined = all). */
  only?: string[]
}

/** Ticks shared paper uniforms once per frame. */
function PaperClock() {
  const reduced = useApp((s) => s.reducedMotion)
  useFrame(({ clock }) => tickPaper(clock.getElapsedTime(), !reduced))
  return null
}

/** Warm miniature-set lighting: one key light with soft shadows, a sky-ish hemisphere fill. */
function Lighting({ quality }: { quality: 'high' | 'low' }) {
  return (
    <>
      <hemisphereLight args={['#f6ecd9', '#c9a66b', 0.55]} />
      <directionalLight
        castShadow={quality === 'high'}
        position={[18, 26, 12]}
        intensity={2.2}
        color="#fff0d6"
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.03}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={40}
        shadow-camera-bottom={-40}
        shadow-camera-near={1}
        shadow-camera-far={80}
      />
      <directionalLight position={[-12, 10, -8]} intensity={0.35} color="#cfe6ef" />
    </>
  )
}

/** Lays lands out around the hub on a ring (works for any count). */
export function layoutLands(lands: Land[], ringRadius?: number): PlacedLand[] {
  const n = Math.max(lands.length, 1)
  const radiusEach = 11
  const R = ringRadius ?? Math.max(24, (n * (radiusEach * 2 + 6)) / (2 * Math.PI))
  return lands.map((land, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2
    const x = Math.cos(a) * R
    const z = Math.sin(a) * R
    return { land, theme: themeFor(land, i), index: i, position: [x, 0, z], radius: radiusEach, rotation: Math.atan2(-x, -z) }
  })
}

function LandZone({ placed, onEnter }: { placed: PlacedLand; onEnter: () => void }) {
  const { land, theme, position, radius, rotation } = placed
  const tone = paperTone(theme.color)
  const trees = useMemo(() => {
    const out: { p: [number, number, number]; s: number; seed: number }[] = []
    for (let i = 0; i < 7; i++) {
      const a = hash(i * 3 + placed.index) * Math.PI * 2
      const r = radius * (0.62 + hash(i * 7 + placed.index) * 0.3)
      out.push({ p: [position[0] + Math.cos(a) * r, 0, position[2] + Math.sin(a) * r], s: 0.8 + hash(i * 11 + placed.index) * 0.6, seed: i + placed.index * 10 })
    }
    return out
  }, [placed.index, position, radius])

  // Building sits at the back of the zone, facing the hub.
  const bx = position[0] - Math.sin(rotation) * -radius * 0.3
  const bz = position[2] - Math.cos(rotation) * -radius * 0.3
  const fx = position[0] + Math.sin(rotation) * radius * 0.45
  const fz = position[2] + Math.cos(rotation) * radius * 0.45

  return (
    <group>
      <LandDisc color={tone} radius={radius} position={position} />
      <Building land={land} theme={theme} position={[bx, 0.14, bz]} rotation={rotation} onEnter={onEnter} />
      {trees.map((t, i) => (
        <PaperTree key={i} position={t.p} scale={t.s} seed={t.seed} color={i % 3 === 0 ? '#a7c98a' : '#8fbf7a'} />
      ))}
      <Lamp position={[fx + 2.2, 0.14, fz]} />
      <Lamp position={[fx - 2.2, 0.14, fz]} />
      <Bench position={[fx + 3.5, 0.14, fz + 2]} rotation={rotation + Math.PI / 2} />
      <Knockable position={[fx - 3.5, 0.8, fz + 2.5]} color={theme.color} label="sign" />
      <Knockable position={[fx - 4.1, 0.8, fz + 3.1]} color="#fbf5e9" label="sign" />
      <Knockable position={[fx + 1.2, 0.6, fz + 4]} size={[0.5, 0.5, 0.5]} color={theme.accent} />
    </group>
  )
}

export default function ParkScene({ lands, onEnterLand, only }: Props) {
  const quality = useApp((s) => s.quality)
  const reduced = useApp((s) => s.reducedMotion)
  const visibleLands = only ? lands.filter((l) => only.includes(l.id)) : lands
  const placed = useMemo(() => layoutLands(visibleLands, only ? 0.0001 : undefined), [visibleLands, only])
  const start: [number, number, number] = only ? [0, 0.8, 15] : [0, 0.8, 8]

  return (
    <Canvas
      shadows={quality === 'high'}
      dpr={quality === 'high' ? [1, 2] : [0.75, 1]}
      camera={{ fov: 38, near: 0.5, far: 220, position: [0, 7, 24] }}
      gl={{ antialias: quality === 'high', powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.25 }}
      style={{ background: 'linear-gradient(#cfe6ef, #f6ecd9 70%)' }}
      tabIndex={0}
      aria-label="3D papercraft park. Use WASD or arrow keys to drive, or click the ground to travel."
    >
      <PaperClock />
      <Lighting quality={quality} />
      <Sky distance={400} sunPosition={[18, 26, 12]} turbidity={6} rayleigh={1.2} mieCoefficient={0.004} mieDirectionalG={0.9} />
      <fog attach="fog" args={['#e8dcc6', 40, 120]} />
      <Suspense fallback={null}>
        <Physics gravity={[0, -14, 0]} timeStep={1 / 60} interpolate>
          <Ground />
          {placed.map((p) => (
            <LandZone key={p.land.id} placed={p} onEnter={() => onEnterLand(p.land.id)} />
          ))}
          <Vehicle start={start} />
        </Physics>
        {quality === 'high' && <ContactShadows position={[0, 0.02, 0]} opacity={0.35} scale={80} blur={2.4} far={6} resolution={512} frames={reduced ? 1 : Infinity} />}
        {quality === 'high' && (
          <EffectComposer multisampling={0}>
            <TiltShift2 blur={0.12} taper={0.6} />
            <Vignette eskil={false} offset={0.25} darkness={0.5} />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  )
}
