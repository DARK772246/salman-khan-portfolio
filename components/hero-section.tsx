"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Plane, Environment } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

function Basketball3D() {
  const meshRef = useRef<Mesh>(null)

  return (
    <motion.group
      animate={{
        y: [0, -0.5, 0],
        rotateY: [0, Math.PI * 2],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff6b35" roughness={0.4} metalness={0.1} />
      </Sphere>
      {/* Basketball lines */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[0.81, 0.015, 8, 100]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.81, 0.015, 8, 100]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </motion.group>
  )
}

function BasketballCourt() {
  return (
    <group position={[0, -3, -5]}>
      {/* Court floor */}
      <Plane args={[20, 12]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Plane>
    </group>
  )
}

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
          <pointLight position={[-10, 10, -10]} intensity={0.8} color="#4f46e5" />
          <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" castShadow />

          <Basketball3D />
          <BasketballCourt />

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            SALMAN KHAN
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl text-white/90 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            IT Professional & Instructor
          </motion.div>

          <motion.div
            className="text-lg md:text-xl text-orange-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            {"Code. Teach. Innovate."}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="/resume.pdf" download="Salman_Khan_Resume.pdf">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
      }
