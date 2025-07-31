"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function AnimatedBasketball() {
  const meshRef = useRef<Mesh>(null)

  return (
    <motion.group
      initial={{ scale: 0, y: 10 }}
      animate={{
        scale: [0, 1.2, 1],
        y: [10, -2, 0, -1, 0],
        rotateX: [0, Math.PI * 2],
      }}
      transition={{
        duration: 2,
        times: [0, 0.3, 0.6, 0.8, 1],
        ease: "easeOut",
      }}
    >
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        <meshStandardMaterial color="#ff6b35" roughness={0.3} metalness={0.1} />
      </Sphere>
      {/* Basketball lines */}
      <mesh>
        <torusGeometry args={[1.01, 0.02, 8, 100]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </motion.group>
  )
}

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-500 via-red-500 to-purple-600"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <AnimatedBasketball />
        </Canvas>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white text-center mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            SALMAN KHAN
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-white/90 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            IT Professional & Instructor
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
            }
