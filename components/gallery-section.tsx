"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const images = [
  {
    id: 1,
    src: "https://i.postimg.cc/7YXFp3JS/IMG-20240430-174120.jpg",
    alt: "Salman Khan playing basketball",
  },
  {
    id: 2,
    src: "https://i.postimg.cc/s1CrxwmX/IMG-20250121-180623.jpg",
    alt: "Salman Khan posing with a basketball",
  },
  {
    id: 3,
    src: "https://i.postimg.cc/Y0TW9GhR/634ee5b4aedadc78ed2a6232fb967f43.jpg",
    alt: "Salman Khan in action",
  },
]

function ImageCard({ image, index }: { image: (typeof images)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group cursor-pointer"
    >
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
        <div className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </motion.div>
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-500 to-green-600 bg-clip-text text-transparent mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">A glimpse into my journey, on and off the court.</p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {images.map((image, index) => (
            <ImageCard key={image.id} image={image} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
