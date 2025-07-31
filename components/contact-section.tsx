"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

const contactLinks = [
  {
    id: 1,
    platform: "Email",
    handle: "KHAN772246@gmail.com",
    url: "mailto:KHAN772246@gmail.com",
    icon: Mail,
    color: "from-pink-500 to-red-500",
    cta: "Send Email",
  },
  {
    id: 2,
    platform: "Phone / WhatsApp",
    handle: "+92 327-5176283",
    url: "https://wa.me/923275176283",
    icon: Phone,
    color: "from-green-500 to-emerald-500",
    cta: "Message Me",
  },
  {
    id: 3,
    platform: "Location",
    handle: "Peshawar, PK",
    url: "https://www.google.com/maps/place/Peshawar,+Khyber+Pakhtunkhwa,+Pakistan",
    icon: MapPin,
    color: "from-blue-500 to-sky-500",
    cta: "View on Map",
  },
]

function ContactCard({ contact, index }: { contact: (typeof contactLinks)[0]; index: number }) {
  const Icon = contact.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group"
    >
      <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
        <CardContent className="p-8 relative z-10 h-full flex flex-col text-center">
          <div className="flex-1">
            <motion.div
              className={`p-4 rounded-2xl bg-gradient-to-br ${contact.color} shadow-lg w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="h-8 w-8 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
              {contact.platform}
            </h3>

            <p className={`text-lg font-semibold bg-gradient-to-r ${contact.color} bg-clip-text text-transparent mb-6 break-all`}>
              {contact.handle}
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <Button
                className={`w-full bg-gradient-to-r ${contact.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-all duration-300 group-hover:shadow-2xl`}
              >
                {contact.cta}
              </Button>
            </a>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-600 mx-auto rounded-full mb-6"
            animate={{ scaleX: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have a question or a project in mind? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
