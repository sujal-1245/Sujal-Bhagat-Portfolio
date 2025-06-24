import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Decal } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { useSpring, useMotionValue } from 'framer-motion'
import * as THREE from 'three'

const Cube = ({ animatedScale }) => {
  const cubeRef = useRef()

  // Decal textures (place SVG/PNG in `public/images/logos/`)
  const textures = {
    react: new THREE.TextureLoader().load('/images/logos/react.svg'),
    tailwind: new THREE.TextureLoader().load('/images/logos/tailwind.png'),
    python: new THREE.TextureLoader().load('/images/logos/python.svg'),
    github: new THREE.TextureLoader().load('/images/logos/git.svg'),
    personal: new THREE.TextureLoader().load('/images/logos/personal.png'),
    figma: new THREE.TextureLoader().load('/images/logos/figma.png'),
  }

  useFrame((_, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.4
      cubeRef.current.rotation.y += delta * 0.6
      const s = animatedScale.get()
      cubeRef.current.scale.set(s, s, s)
    }
  })

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.4} />

      {/* 6 Faces with Decals */}
      <Decal map={textures.react} position={[0, 0, 0.501]} rotation={[0, 0, 0]} scale={0.4} />
      <Decal map={textures.tailwind} position={[0.501, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.4} />
      <Decal map={textures.python} position={[0, 0.501, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.4} />
      <Decal map={textures.github} position={[-0.501, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.4} />
      <Decal map={textures.personal} position={[0, -0.501, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.4} />
      <Decal map={textures.figma} position={[0, 0, -0.501]} rotation={[0, Math.PI, 0]} scale={0.4} />
    </mesh>
  )
}

const RotatingCube = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  })

  const motionScale = useMotionValue(0)
  const animatedScale = useSpring(motionScale, {
    stiffness: 160,
    damping: 18,
    mass: 0.8,
  })

  useEffect(() => {
    motionScale.set(inView ? 4 : 0)
  }, [inView])

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden">
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Cube animatedScale={animatedScale} />
        <Environment preset="city" />
      </Canvas>

      {/* Caption */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white/80">
        <h2 className="text-2xl font-semibold">I'm more than just a Web Developer</h2>
        <p className="mt-2 text-base">React · Tailwind · Python · GitHub · Figma</p>
      </div>
    </div>
  )
}

export default RotatingCube
