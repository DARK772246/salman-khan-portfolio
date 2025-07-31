"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const certificates = [
  {
    id: 1,
    src: "https://i.postimg.cc/8zz7SmKG/file-000000000824620a8e7985521d0c16f1.png",
    alt: "Certificate of Achievement",
    title: "National Level Participation",
  },
]

function CertificateCard({ certificate, index }: { certificate: (typeof certificates)[0]; index: number }) {
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
            src={certificate.src}
            alt={certificate.alt}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={certificate.src} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </motion.div>
            </a>
          </div>
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
            {certificate.title}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function CertificatesSection() {
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
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-6">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Recognition of my dedication and achievements.</p>
        </motion.div>

        <motion.div className="flex justify-center" layout>
          <div className="max-w-2xl w-full">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.id} certificate={certificate} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
