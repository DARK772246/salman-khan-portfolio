"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Instructional Web Portal",
    category: "Web Development",
    thumbnail: "/placeholder.svg?height=300&width=400",
    description: "A full-stack web application built to provide resources and materials for ICT, CIT, and DIT students.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Cyber Security Analyser",
    category: "Cyber Security",
    thumbnail: "/placeholder.svg?height=300&width=400",
    description: "A Python-based tool for basic network vulnerability scanning and educational reporting.",
    techStack: ["Python", "Flask"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Site Builder",
    category: "E-commerce",
    thumbnail: "/placeholder.svg?height=300&width=400",
    description: "A platform to help users build their own e-commerce storefronts with integrated payment solutions.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group cursor-pointer"
    >
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
          
          <div className="mb-4">
            {project.techStack.map(tech => (
               <Badge key={tech} variant="secondary" className="mr-2 mb-2 bg-slate-700 text-slate-200 border-slate-600">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-end space-x-4 mt-auto">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A selection of my work, showcasing my skills in development and technology.
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
    }
