import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { RigidBody, type RapierRigidBody, CuboidCollider } from '@react-three/rapier'
import { PaperMaterial } from './paper/PaperMaterial'
import { useSteppedFrame } from './paper/stepped'
import { useApp } from '@/state/store'
import { useInput } from './input'

const MAX_SPEED = 7
const ACCEL = 18
const TURN = 2.6

interface Props {
  start?: [number, number, number]
}

/**
 * The visitor's papercraft tram. Arcade physics on a Rapier body: we set
 * velocity directly (so it feels snappy) but keep it a dynamic body so bumps
 * into props push them over. Wheels and pennant animate on twos.
 */
export default function Vehicle({ start = [0, 0.6, 6] }: Props) {
  const body = useRef<RapierRigidBody>(null)
  const visual = useRef<THREE.Group>(null)
  const wheels = useRef<THREE.Mesh[]>([])
  const flag = useRef<THREE.Mesh>(null)
  const heading = useRef(Math.PI)
  const speed = useRef(0)
  const { camera } = useThree()
  const input = useInput()
  const camTarget = useMemo(() => new THREE.Vector3(), [])
  const camPos = useMemo(() => new THREE.Vector3(), [])
  const reduced = useApp((s) => s.reducedMotion)

  const mats = useMemo(
    () => ({
      body: new PaperMaterial({ color: '#e45b6c', boil: 1, grain: 0.6 }),
      roof: new PaperMaterial({ color: '#fbf5e9', boil: 1, grain: 0.6 }),
      trim: new PaperMaterial({ color: '#3b2f2a', boil: 0.6, grain: 0.3 }),
      wheel: new PaperMaterial({ color: '#4a3b33', boil: 0, grain: 0.4 }),
      flag: new PaperMaterial({ color: '#d9962b', boil: 1.5, grain: 0.5, side: THREE.DoubleSide }),
      window: new PaperMaterial({ color: '#cfe6ef', boil: 0.5, grain: 0.2 }),
    }),
    [],
  )

  useFrame((_, dt) => {
    const rb = body.current
    if (!rb) return
    const d = Math.min(dt, 1 / 30)
    const { forward, turn, target } = input.read()

    // Click-to-travel: steer toward the target until we're close.
    let f = forward
    let t = turn
    const p = rb.translation()
    if (target) {
      const dx = target[0] - p.x
      const dz = target[2] - p.z
      const dist = Math.hypot(dx, dz)
      if (dist < 1.2) input.clearTarget()
      else {
        const want = Math.atan2(dx, dz)
        let diff = want - heading.current
        diff = Math.atan2(Math.sin(diff), Math.cos(diff))
        t = THREE.MathUtils.clamp(diff * 2, -1, 1)
        f = Math.abs(diff) < 1.2 ? Math.min(1, dist / 3) : 0.2
      }
    }

    // Arcade motion
    const targetSpeed = f * MAX_SPEED
    speed.current = THREE.MathUtils.damp(speed.current, targetSpeed, ACCEL / MAX_SPEED, d)
    if (Math.abs(speed.current) > 0.2) heading.current += t * TURN * d * Math.sign(speed.current)
    const vx = Math.sin(heading.current) * speed.current
    const vz = Math.cos(heading.current) * speed.current
    const vel = rb.linvel()
    // Clamp upward velocity so a bump or a slow frame can't launch the tram.
    rb.setLinvel({ x: vx, y: Math.min(vel.y, 1.5), z: vz }, true)
    rb.setRotation(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), heading.current), true)
    rb.setAngvel({ x: 0, y: 0, z: 0 }, true)

    useApp.getState().setVehiclePos([p.x, p.y, p.z])

    // Chase camera — full frame rate, gentle lag; no sway if reduced motion.
    const back = 9
    const up = 4.6
    const ahead = 3.5
    camPos.set(p.x - Math.sin(heading.current) * back, p.y + up, p.z - Math.cos(heading.current) * back)
    camTarget.set(p.x + Math.sin(heading.current) * ahead, p.y + 1.2, p.z + Math.cos(heading.current) * ahead)
    const lag = reduced ? 1 : 1 - Math.exp(-d * 3.2)
    camera.position.lerp(camPos, lag)
    camera.lookAt(camTarget)
  })

  // Wheels + flag on twos.
  useSteppedFrame((st, idx) => {
    const s = speed.current
    for (const w of wheels.current) if (w) w.rotation.x += s * 0.35
    if (flag.current) flag.current.rotation.y = Math.sin(idx * 0.9) * 0.35 + Math.PI / 2
    if (visual.current) visual.current.position.y = Math.abs(s) > 0.5 ? (idx % 2) * 0.015 : 0
    void st
  })

  return (
    <RigidBody
      ref={body}
      position={start}
      colliders={false}
      mass={6}
      linearDamping={1.2}
      angularDamping={4}
      enabledRotations={[false, true, false]}
      friction={0.6}
      name="vehicle"
    >
      <CuboidCollider args={[0.55, 0.45, 0.9]} position={[0, 0.1, 0]} />
      <group ref={visual}>
        {/* chassis */}
        <mesh castShadow receiveShadow position={[0, 0.05, 0]} material={mats.body}>
          <boxGeometry args={[1.1, 0.5, 1.8]} />
        </mesh>
        {/* cabin */}
        <mesh castShadow position={[0, 0.55, -0.1]} material={mats.window}>
          <boxGeometry args={[0.95, 0.5, 1.2]} />
        </mesh>
        {/* roof: little pitched card */}
        <mesh castShadow position={[0, 0.98, -0.1]} rotation={[0, Math.PI / 4, 0]} material={mats.roof}>
          <coneGeometry args={[0.95, 0.36, 4]} />
        </mesh>
        {/* bumper */}
        <mesh castShadow position={[0, -0.05, 0.95]} material={mats.trim}>
          <boxGeometry args={[1.0, 0.16, 0.12]} />
        </mesh>
        {/* wheels */}
        {([
          [-0.55, -0.2, 0.55],
          [0.55, -0.2, 0.55],
          [-0.55, -0.2, -0.55],
          [0.55, -0.2, -0.55],
        ] as [number, number, number][]).map((pos, i) => (
          <mesh
            key={i}
            ref={(m) => {
              if (m) wheels.current[i] = m
            }}
            castShadow
            position={pos}
            rotation={[0, 0, Math.PI / 2]}
            material={mats.wheel}
          >
            <cylinderGeometry args={[0.24, 0.24, 0.14, 8]} />
          </mesh>
        ))}
        {/* pennant */}
        <mesh position={[0, 1.45, -0.6]} material={mats.trim}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 5]} />
        </mesh>
        <mesh ref={flag} position={[0, 1.62, -0.6]} material={mats.flag}>
          <coneGeometry args={[0.18, 0.4, 3]} />
        </mesh>
      </group>
    </RigidBody>
  )
}
