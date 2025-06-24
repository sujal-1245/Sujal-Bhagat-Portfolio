import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
  Bounds,
  Center,
  Edges,
  useTexture,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { motion } from 'framer-motion'
import * as THREE from 'three'

useGLTF.preload('/models/character.glb')

// 🔮 Swirl Portal: zoom-in + fade-in → fast anticlockwise spin → shrink + fade-out
function SwirlPortal({ onComplete }) {
  const swirlRef = useRef()
  const swirlTexture = useTexture('/swirl_portal circle.png')
  const start = useRef(0)

  useFrame(({ clock }) => {
    if (!start.current) start.current = clock.getElapsedTime()
    const elapsed = clock.getElapsedTime() - start.current

    // ⬅️ Continuous anticlockwise spin
    if (swirlRef.current?.material) {
      swirlRef.current.material.rotation -= 0.25
    }

    if (swirlRef.current) {
      let baseScale = 0
      let opacity = 0

      if (elapsed < 0.4) {
        // 🔍 Zoom In
        baseScale = (elapsed / 0.4) * 5
        opacity = elapsed / 0.4
      } else if (elapsed < 2.6) {
        // 🔁 Pulse while holding full scale
        const pulse = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.15
        baseScale = 5 * pulse
        opacity = 1
      } else if (elapsed < 3.1) {
        // 🔻 Shrink Out
        const t = (elapsed - 2.6) / 0.5
        baseScale = 5 * (1 - t)
        opacity = 1 - t
      } else {
        onComplete?.()
      }

      swirlRef.current.scale.setScalar(baseScale)
      swirlRef.current.material.opacity = opacity
    }
  })

  return (
    <sprite ref={swirlRef} position={[0, 0, -1]}>
      <spriteMaterial
        map={swirlTexture}
        transparent
        opacity={0}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  )
}

// 💠 Rotating Cube Loader with Disintegration
function RotatingCube({ animateOut, onExplode }) {
  const cubeRef = useRef()
  const fragments = useRef([])
  const [exploded, setExploded] = useState(false)

  const glowTexture = useTexture('/glow_burst.png')
  const swirlTexture = useTexture('/swirl_portal.png')
  const glowRef = useRef()
  const swirlRef = useRef()

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (cubeRef.current && !exploded) {
      cubeRef.current.rotation.x += delta * 0.4
      cubeRef.current.rotation.y += delta * 0.6
      const pulse = 0.2 + Math.abs(Math.sin(t * 2)) * 1.4
      cubeRef.current.scale.setScalar(pulse)
    }

    if (animateOut && !exploded) {
      setExploded(true)
      onExplode?.()

      for (let i = 0; i < 40; i++) {
        const frag = new THREE.Mesh(
          new THREE.BoxGeometry(0.2, 0.2, 0.2),
          new THREE.MeshStandardMaterial({
            color: '#00ffff',
            emissive: '#0ff',
            transparent: true,
            opacity: 0.6,
          })
        )
        frag.position.set(0, 0, 0)
        frag.userData.velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        )
        fragments.current.push(frag)
        cubeRef.current?.parent?.add(frag)
      }

      cubeRef.current?.scale.setScalar(0.001)
    }

    fragments.current.forEach((frag) => {
      frag.position.add(frag.userData.velocity.clone().multiplyScalar(delta))
      frag.material.opacity -= delta * 0.5
      if (frag.material.opacity <= 0) frag.parent?.remove(frag)
    })

    if (glowRef.current && animateOut) {
      const scale = 2 + Math.sin(t * 6) * 0.2
      glowRef.current.material.opacity = Math.max(0, 1.5 - t * 1.2)
      glowRef.current.scale.set(scale, scale, scale)
    }

    if (swirlRef.current && animateOut) {
      swirlRef.current.rotation.z += delta * 2.5
      swirlRef.current.material.opacity = Math.max(0, 1.4 - t * 1.2)
      swirlRef.current.scale.setScalar(5 + Math.sin(t * 2) * 1.5)
    }
  })

  return (
    <>
      <motion.group
        ref={cubeRef}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: animateOut ? 0.001 : 1.5, opacity: animateOut ? 0 : 1 }}
        transition={{
          scale: { duration: 1.4, ease: 'easeInOut' },
          opacity: { duration: 1.2, ease: 'easeOut' },
        }}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.6}
            roughness={0.1}
            emissive="#0ff"
            transparent
            opacity={0.6}
          />
          <Edges scale={1.1} color="#0ff" />
        </mesh>
      </motion.group>

      {animateOut && (
        <>
          <sprite ref={glowRef} position={[0, 0, -0.1]}>
            <spriteMaterial
              map={glowTexture}
              transparent
              opacity={1}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </sprite>
          <sprite ref={swirlRef} position={[0, 0, -1]}>
            <spriteMaterial
              map={swirlTexture}
              transparent
              opacity={1}
              depthWrite={false}
              blending={THREE.AdditiveBlending}
            />
          </sprite>
        </>
      )}
    </>
  )
}

// 🌌 Floating Particles
function HoverParticles({ active }) {
  const pointsRef = useRef()
  const count = 300

  const basePositions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = Math.cbrt(Math.random()) * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  const animatedPositions = useMemo(() => new Float32Array(count * 3), [count])

  useFrame(({ clock }) => {
    if (!pointsRef.current || !active) return
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      const x0 = basePositions[ix]
      const y0 = basePositions[ix + 1]
      const z0 = basePositions[ix + 2]
      const angle = t * 2.5 + i
      animatedPositions[ix] = x0 + Math.sin(angle) * 0.1
      animatedPositions[ix + 1] = y0 + Math.cos(angle) * 0.1
      animatedPositions[ix + 2] = z0 + Math.sin(angle * 0.5) * 0.1
    }
    const geometry = pointsRef.current.geometry
    geometry.setAttribute('position', new THREE.BufferAttribute(animatedPositions, 3))
    geometry.attributes.position.needsUpdate = true
  })

  if (!active) return null

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial color="#00ffff" size={0.2} sizeAttenuation transparent opacity={1} depthWrite={false} />
    </points>
  )
}

// 🤖 Main Character Model
function Character() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions, names } = useAnimations(animations, scene)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (names.length) {
      const action = actions[names[0]]
      action?.reset().fadeIn(0.5)
      const timeout = setTimeout(() => action?.play(), 1200)
      return () => clearTimeout(timeout)
    }
  }, [actions, names])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material?.emissive) {
        child.material.emissiveIntensity = 2
      }
    })
  }, [scene])

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (group.current) {
      group.current.position.y = Math.sin(t) * 0.6
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.5, 0.1)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.2, 0.1)
    }
  })

  return (
    <motion.group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      animate={{ scale: hovered ? 1.1 : 1 }}
      transition={{ type: 'spring', stiffness: 40, damping: 12 }}
    >
      <primitive object={scene} />
      <HoverParticles active={hovered} />
    </motion.group>
  )
}

// 🎬 Main Scene Controller
export default function HeroModel() {
  const isTablet = false
  const [swirlDone, setSwirlDone] = useState(false)
  const [transition, setTransition] = useState(false)
  const [showModel, setShowModel] = useState(false)

  useEffect(() => {
    if (swirlDone) {
      const t1 = setTimeout(() => setTransition(true), 2000)
      const t2 = setTimeout(() => setShowModel(true), 3700)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }, [swirlDone])

  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 50 }}
      gl={{ toneMappingExposure: 1.75 }}
      style={{ background: '#000000' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />

      <Environment preset="apartment" />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.3} />
      </EffectComposer>

      {!swirlDone && <SwirlPortal onComplete={() => setSwirlDone(true)} />}
      {swirlDone && !showModel && <RotatingCube animateOut={transition} />}
      {showModel && (
        <Suspense fallback={null}>
          <Center>
            <Bounds fit clip observe margin={1}>
              <motion.group
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              >
                <Character />
              </motion.group>
            </Bounds>
          </Center>
        </Suspense>
      )}
    </Canvas>
  )
}
