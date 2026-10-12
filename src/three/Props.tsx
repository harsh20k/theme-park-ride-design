import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { PaperMaterial } from './paper/PaperMaterial'
import { useSteppedFrame, hash } from './paper/stepped'
import { useApp } from '@/state/store'
import { useThree } from '@react-three/fiber'

/** Big paper ground with a click-to-travel handler. */
export function Ground({ size = 160 }: { size?: number }) {
  const mat = useMemo(() => new PaperMaterial({ color: '#e9dcc0', grain: 0.9 }), [])
  const setTarget = useApp((s) => s.setTravelTarget)
  const { gl } = useThree()
  const downAt = useRef<[number, number] | null>(null)
  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      <CuboidCollider args={[size / 2, 0.1, size / 2]} position={[0, -0.1, 0]} />
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        material={mat}
        onPointerDown={(e) => (downAt.current = [e.clientX, e.clientY])}
        onPointerUp={(e) => {
          // Only treat as a click if the pointer barely moved (not a drag).
          const d = downAt.current
          if (!d || Math.hypot(e.clientX - d[0], e.clientY - d[1]) > 6) return
          if (useApp.getState().controlScheme === 'click' || e.pointerType === 'touch' || e.shiftKey || true) {
            setTarget([e.point.x, 0, e.point.z])
            gl.domElement.focus()
          }
        }}
      >
        <planeGeometry args={[size, size, 1, 1]} />
      </mesh>
    </RigidBody>
  )
}

/** Coloured paper disc marking a land's zone, with a hand-cut edge (slightly irregular polygon). */
export function LandDisc({ color, radius, position }: { color: string; radius: number; position: [number, number, number] }) {
  const geo = useMemo(() => {
    const shape = new THREE.Shape()
    const n = 28
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2
      const r = radius * (0.96 + hash(i + radius) * 0.07)
      const x = Math.cos(a) * r
      const y = Math.sin(a) * r
      if (i === 0) shape.moveTo(x, y)
      else shape.lineTo(x, y)
    }
    shape.closePath()
    const g = new THREE.ExtrudeGeometry(shape, { depth: 0.14, bevelEnabled: false })
    g.rotateX(-Math.PI / 2)
    return g
  }, [radius])
  const mat = useMemo(() => new PaperMaterial({ color, grain: 0.8 }), [color])
  return <mesh geometry={geo} material={mat} position={[position[0], position[1] + 0.14, position[2]]} receiveShadow castShadow />
}

/** Paper tree: a few stacked cones on a stick. Sways on twos. */
export function PaperTree({ position, scale = 1, seed = 0, color = '#8fbf7a' }: { position: [number, number, number]; scale?: number; seed?: number; color?: string }) {
  const g = useRef<THREE.Group>(null)
  const mats = useMemo(() => ({ leaf: new PaperMaterial({ color, grain: 0.6, boil: 0.5 }), trunk: new PaperMaterial({ color: '#8a5a3a', grain: 0.5 }) }), [color])
  useSteppedFrame((_, idx, stepped) => {
    if (g.current && stepped) g.current.rotation.z = Math.sin(idx * 0.5 + seed) * 0.03
  })
  return (
    <group position={position} scale={scale} ref={g}>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[0.25, 1, 0.25]} position={[0, 1, 0]} />
      </RigidBody>
      <mesh castShadow position={[0, 0.5, 0]} material={mats.trunk}>
        <cylinderGeometry args={[0.12, 0.16, 1, 5]} />
      </mesh>
      <mesh castShadow position={[0, 1.3, 0]} material={mats.leaf}>
        <coneGeometry args={[0.9, 1.3, 6]} />
      </mesh>
      <mesh castShadow position={[0, 2.1, 0]} material={mats.leaf}>
        <coneGeometry args={[0.65, 1.1, 6]} />
      </mesh>
      <mesh castShadow position={[0, 2.75, 0]} material={mats.leaf}>
        <coneGeometry args={[0.4, 0.8, 6]} />
      </mesh>
    </group>
  )
}

/** Knockable prop: a dynamic paper box / sign that wobbles and falls when bumped. */
export function Knockable({ position, size = [0.6, 0.9, 0.1], color = '#fbf5e9', label }: { position: [number, number, number]; size?: [number, number, number]; color?: string; label?: string }) {
  const mat = useMemo(() => new PaperMaterial({ color, grain: 0.7, boil: 0.4 }), [color])
  const dark = useMemo(() => new PaperMaterial({ color: '#3b2f2a', grain: 0.3 }), [])
  return (
    <RigidBody position={position} colliders="cuboid" mass={0.4} friction={0.9} angularDamping={0.8} linearDamping={0.5}>
      <mesh castShadow receiveShadow material={mat}>
        <boxGeometry args={size} />
      </mesh>
      {label && (
        <mesh position={[0, 0, size[2] / 2 + 0.01]} material={dark}>
          <boxGeometry args={[size[0] * 0.7, size[1] * 0.12, 0.01]} />
        </mesh>
      )}
    </RigidBody>
  )
}

/** Simple paper bench. */
export function Bench({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) {
  const mat = useMemo(() => new PaperMaterial({ color: '#c9a66b', grain: 0.7 }), [])
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh castShadow receiveShadow position={[0, 0.3, 0]} material={mat}>
          <boxGeometry args={[1.6, 0.12, 0.5]} />
        </mesh>
      </RigidBody>
      <mesh castShadow position={[-0.6, 0.12, 0]} material={mat}>
        <boxGeometry args={[0.12, 0.24, 0.45]} />
      </mesh>
      <mesh castShadow position={[0.6, 0.12, 0]} material={mat}>
        <boxGeometry args={[0.12, 0.24, 0.45]} />
      </mesh>
    </group>
  )
}

/** Paper lamp post with a warm glowing head. */
export function Lamp({ position }: { position: [number, number, number] }) {
  const mats = useMemo(() => ({ post: new PaperMaterial({ color: '#3b2f2a', grain: 0.3 }), glow: new PaperMaterial({ color: '#fff1c2', emissive: new THREE.Color('#ffd27a'), emissiveIntensity: 0.9, grain: 0.2 }) }), [])
  return (
    <group position={position}>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[0.1, 1.5, 0.1]} position={[0, 1.5, 0]} />
      </RigidBody>
      <mesh castShadow position={[0, 1.4, 0]} material={mats.post}>
        <cylinderGeometry args={[0.05, 0.07, 2.8, 5]} />
      </mesh>
      <mesh position={[0, 2.95, 0]} material={mats.glow}>
        <boxGeometry args={[0.36, 0.36, 0.36]} />
      </mesh>
      <pointLight position={[0, 2.9, 0]} intensity={2.5} distance={7} color="#ffd27a" decay={2} />
    </group>
  )
}
