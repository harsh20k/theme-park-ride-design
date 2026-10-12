import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { RigidBody, CuboidCollider, CylinderCollider } from '@react-three/rapier'
import type { BuildingKind, Land } from '@content/schema'
import { PaperMaterial } from './paper/PaperMaterial'
import { useSteppedFrame, hash } from './paper/stepped'
import { useApp } from '@/state/store'
import type { LandTheme } from './landTheme'
import { lighten, paperTone } from './landTheme'

interface Props {
  land: Land
  theme: LandTheme
  position: [number, number, number]
  rotation?: number
  /** Called when the visitor "enters" (approach + E / click). */
  onEnter?: () => void
}

/**
 * Procedural papercraft library building. One component, many silhouettes:
 * the `kind` decides roof, tower, and trim. All geometry is primitives so the
 * first load stays tiny; glTF models can replace any kind later.
 */
export default function Building({ land, theme, position, rotation = 0, onEnter }: Props) {
  const near = useApp((s) => s.nearBuilding === land.id)
  const setNear = useApp((s) => s.setNearBuilding)
  const group = useRef<THREE.Group>(null)
  const sign = useRef<THREE.Group>(null)

  const mats = useMemo(
    () => ({
      wall: new PaperMaterial({ color: paperTone(theme.color), grain: 0.7 }),
      wall2: new PaperMaterial({ color: lighten(paperTone(theme.color), 0.06), grain: 0.7 }),
      roof: new PaperMaterial({ color: theme.accent, grain: 0.6, boil: 0.35 }),
      trim: new PaperMaterial({ color: '#fbf5e9', grain: 0.5 }),
      dark: new PaperMaterial({ color: '#3b2f2a', grain: 0.3 }),
      glass: new PaperMaterial({ color: '#f7e3a1', grain: 0.2, emissive: new THREE.Color('#f7c76b'), emissiveIntensity: 0.35 }),
      flag: new PaperMaterial({ color: theme.accent, grain: 0.5, boil: 1.4, side: THREE.DoubleSide }),
    }),
    [theme.color, theme.accent],
  )

  // Flags + sign bob on twos.
  useSteppedFrame((_, idx) => {
    if (sign.current) sign.current.rotation.z = Math.sin(idx * 0.6 + hash(position[0]) * 6) * 0.04
  })

  const parts = useMemo(() => silhouette(theme.building), [theme.building])

  return (
    <group position={position} rotation={[0, rotation, 0]} ref={group}>
      {/* solid body */}
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[parts.w / 2, parts.h / 2, parts.d / 2]} position={[0, parts.h / 2, 0]} />
        {parts.tower && <CylinderCollider args={[parts.tower.h / 2, parts.tower.r]} position={[parts.tower.x, parts.tower.h / 2, parts.tower.z]} />}
      </RigidBody>
      {/* approach sensor */}
      <RigidBody type="fixed" colliders={false} sensor onIntersectionEnter={() => setNear(land.id)} onIntersectionExit={() => setNear(null)}>
        <CuboidCollider args={[parts.w / 2 + 3.2, 2, parts.d / 2 + 3.2]} position={[0, 1, 0]} sensor />
      </RigidBody>

      {/* plinth */}
      <mesh receiveShadow position={[0, 0.08, 0]} material={mats.trim}>
        <boxGeometry args={[parts.w + 1.2, 0.16, parts.d + 1.2]} />
      </mesh>
      {/* main block */}
      <mesh castShadow receiveShadow position={[0, parts.h / 2 + 0.16, 0]} material={mats.wall}>
        <boxGeometry args={[parts.w, parts.h, parts.d]} />
      </mesh>
      {/* roof */}
      {parts.roof === 'pitched' && (
        <mesh castShadow position={[0, parts.h + 0.16 + parts.roofH / 2, 0]} rotation={[0, Math.PI / 4, 0]} material={mats.roof}>
          <coneGeometry args={[Math.max(parts.w, parts.d) * 0.78, parts.roofH, 4]} />
        </mesh>
      )}
      {parts.roof === 'dome' && (
        <mesh castShadow position={[0, parts.h + 0.16, 0]} material={mats.roof}>
          <sphereGeometry args={[Math.min(parts.w, parts.d) * 0.5, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
      )}
      {parts.roof === 'flat' && (
        <mesh castShadow position={[0, parts.h + 0.16 + 0.12, 0]} material={mats.roof}>
          <boxGeometry args={[parts.w + 0.5, 0.24, parts.d + 0.5]} />
        </mesh>
      )}
      {parts.roof === 'barrel' && (
        <mesh castShadow position={[0, parts.h + 0.16, 0]} rotation={[0, 0, Math.PI / 2]} material={mats.roof}>
          <cylinderGeometry args={[parts.d * 0.5, parts.d * 0.5, parts.w, 10, 1, false, 0, Math.PI]} />
        </mesh>
      )}
      {/* tower */}
      {parts.tower && (
        <group position={[parts.tower.x, 0.16, parts.tower.z]}>
          <mesh castShadow position={[0, parts.tower.h / 2, 0]} material={mats.wall2}>
            <cylinderGeometry args={[parts.tower.r, parts.tower.r, parts.tower.h, parts.tower.sides]} />
          </mesh>
          <mesh castShadow position={[0, parts.tower.h + parts.tower.r * 0.9, 0]} material={mats.roof}>
            <coneGeometry args={[parts.tower.r * 1.25, parts.tower.r * 1.8, parts.tower.sides]} />
          </mesh>
          {/* flag */}
          <mesh position={[0, parts.tower.h + parts.tower.r * 1.8 + 0.5, 0]} material={mats.dark}>
            <cylinderGeometry args={[0.03, 0.03, 1.0, 5]} />
          </mesh>
          <mesh position={[0.25, parts.tower.h + parts.tower.r * 1.8 + 0.8, 0]} rotation={[0, 0, -Math.PI / 2]} material={mats.flag}>
            <coneGeometry args={[0.22, 0.55, 3]} />
          </mesh>
        </group>
      )}
      {/* door + windows on the front (+z) */}
      <mesh position={[0, 0.16 + 0.9, parts.d / 2 + 0.02]} material={mats.dark}>
        <boxGeometry args={[1.2, 1.8, 0.08]} />
      </mesh>
      <mesh position={[0, 0.16 + 0.9, parts.d / 2 + 0.06]} material={mats.glass}>
        <boxGeometry args={[0.9, 1.5, 0.02]} />
      </mesh>
      {Array.from({ length: parts.windows }).map((_, i) => {
        const x = ((i + 0.5) / parts.windows - 0.5) * (parts.w - 1.2)
        return (
          <mesh key={i} position={[x, 0.16 + parts.h * 0.62, parts.d / 2 + 0.03]} material={mats.glass}>
            <boxGeometry args={[0.7, 0.9, 0.05]} />
          </mesh>
        )
      })}
      {/* hanging sign: a paper card on two strings */}
      <group ref={sign} position={[0, 0.16 + parts.h - 0.25, parts.d / 2 + 0.5]}>
        <mesh material={mats.dark} position={[-0.9, 0.4, -0.2]}>
          <boxGeometry args={[0.04, 0.8, 0.04]} />
        </mesh>
        <mesh material={mats.dark} position={[0.9, 0.4, -0.2]}>
          <boxGeometry args={[0.04, 0.8, 0.04]} />
        </mesh>
        <Html transform occlude={false} position={[0, -0.1, 0]} distanceFactor={5} style={{ pointerEvents: 'none' }} center>
          <div className="sign-label" style={{ color: theme.accent, borderColor: theme.accent }}>
            {theme.icon} {land.title}
          </div>
        </Html>
      </group>
      {/* glow when the visitor is near */}
      {near && <pointLight position={[0, 2.5, parts.d / 2 + 2]} intensity={6} distance={9} color={theme.accent} decay={2} />}
      <group onClick={onEnter} />
    </group>
  )
}

interface Silhouette {
  w: number
  h: number
  d: number
  roof: 'pitched' | 'dome' | 'flat' | 'barrel'
  roofH: number
  windows: number
  tower?: { x: number; z: number; r: number; h: number; sides: number }
}

function silhouette(kind: BuildingKind): Silhouette {
  switch (kind) {
    case 'castle':
      return { w: 6, h: 4.2, d: 5, roof: 'flat', roofH: 0, windows: 3, tower: { x: 2.6, z: 2.2, r: 0.9, h: 6.5, sides: 8 } }
    case 'lighthouse':
      return { w: 4.5, h: 2.6, d: 4, roof: 'pitched', roofH: 1.4, windows: 2, tower: { x: 1.6, z: -1.2, r: 0.8, h: 7.5, sides: 8 } }
    case 'station':
      return { w: 8, h: 2.8, d: 4, roof: 'barrel', roofH: 0, windows: 4 }
    case 'lab':
      return { w: 5.5, h: 3.2, d: 5, roof: 'dome', roofH: 0, windows: 3 }
    case 'observatory':
      return { w: 5, h: 3.6, d: 5, roof: 'dome', roofH: 0, windows: 2, tower: { x: -2.2, z: 1.8, r: 0.7, h: 4.5, sides: 6 } }
    case 'control-room':
      return { w: 6, h: 3, d: 4.5, roof: 'flat', roofH: 0, windows: 4, tower: { x: 2.2, z: -1.4, r: 0.6, h: 5.5, sides: 4 } }
    case 'theatre':
      return { w: 7, h: 4, d: 5.5, roof: 'barrel', roofH: 0, windows: 3 }
    case 'greenhouse':
      return { w: 6.5, h: 2.6, d: 4.5, roof: 'pitched', roofH: 1.6, windows: 5 }
    case 'workshop':
      return { w: 6.5, h: 3, d: 5, roof: 'pitched', roofH: 2.2, windows: 2 }
    case 'tower':
      return { w: 4, h: 3, d: 4, roof: 'pitched', roofH: 1.2, windows: 2, tower: { x: 0, z: -0.6, r: 1.1, h: 8, sides: 4 } }
    case 'museum':
      return { w: 7.5, h: 3.4, d: 5, roof: 'dome', roofH: 0, windows: 4 }
    case 'schoolhouse':
      return { w: 5, h: 3, d: 4.5, roof: 'pitched', roofH: 2, windows: 2, tower: { x: 0, z: -1.4, r: 0.45, h: 4.6, sides: 4 } }
    case 'pavilion':
    default:
      return { w: 6, h: 3.2, d: 5, roof: 'pitched', roofH: 2.4, windows: 3 }
  }
}
