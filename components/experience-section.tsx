"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"

const experienceAndEducation = [
  {
    type: "Work Experience",
    title: "Teaching in Institute",
    organization: "Ranra Institute of Science & Technology",
    period: "Oct 2022 - Oct 2023",
    description: [
      "Taught ICT, CIT, and DIT in the Institute.",
      "Recognized as the topper of the batch.",
      "Successfully completed all courses with an A+ grade."
    ],
    icon: Briefcase,
    color: "from-green-400 to-blue-500",
  },
  {
    type: "Education",
    title: "ICT AND CIT",
    organization: "RANRA Institute of Science & Technology",
    period: "2023 - 2024",
    description: [
      "Completed comprehensive studies in Information and Communication Technology."
    ],
    icon: GraduationCap,
    color: "from-purple-400 to-pink-500",
  },
  {
    type: "Education",
    title: "MATRIC",
    organization: "Iqra Rauzat-ul-Quran",
    period: "2023",
    description: [
      "Successfully completed secondary school education."
    ],
    icon: GraduationCap,
    color: "from-yellow-400 to-orange-500",
  },
]

function ExperienceCard({ item, index }: { item: (typeof experienceAndEducation)[0]; index: number }) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <Card className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform-gpu overflow-hidden">
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-full bg-gradient-to-br ${item.color} shadow-lg`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              {item.period}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">
            {item.title}
          </h3>
          <p className={`text-md font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
            {item.organization}
          </p>

          <ul className="text-white/70 text-sm mb-4 leading-relaxed list-disc list-inside space-y-1">
            {item.description.map(point => <li key={point}>{point}</li>)}
          </ul>

          <Badge
            variant="outline"
            className={`border-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent border-white/30`}
          >
            {item.type}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
            Experience & Education
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto rounded-full"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <div className="relative grid md:grid-cols-1 gap-8">
           {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 rounded-full" />
          
          {experienceAndEducation.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
            }
