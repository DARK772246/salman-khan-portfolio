"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
      { skill: "CIT", level: 86 },
      { skill: "Information Technology", level: 71 },
      { skill: "Cyber Security", level: 43 },
      { skill: "E-commerce", level: 43 },
  ]
  
  const languages = ["English", "Urdu", "Pashto"];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-1">
                     <img
                      src="https://i.postimg.cc/mD3Wqt4x/34234.jpg"
                      alt="Salman Khan Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white text-center mb-4">Salman Khan</h3>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    IT Instructor
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    DIT & IT Student
                  </Badge>
                </div>

                <p className="text-white/80 text-lg leading-relaxed text-center">
                  I am a student of DIT & IT. I teach students for the year in the Institute. I complete all the basic courses of IT and related subjects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white text-center lg:text-left mb-8">Skills</h3>
                <div className="space-y-4">
                  {skills.map((item, index) => (
                    <motion.div
                      key={item.skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-lg font-semibold text-white">{item.skill}</h4>
                        <span className="text-white/70">{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.level}%` } : {}}
                          transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                 <h3 className="text-3xl font-bold text-white text-center lg:text-left mb-8">Languages</h3>
                 <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {languages.map((lang, index) => (
                         <motion.div
                            key={lang}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                        >
                            <Badge variant="secondary" className="text-lg px-4 py-2 bg-slate-700 text-slate-200 border-slate-600">
                                {lang}
                            </Badge>
                        </motion.div>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}```

... and so on for all the other component files. The rest of the component files (`experience-section.tsx`, `projects-section.tsx`, `gallery-section.tsx`, `certificates-section.tsx`, `contact-section.tsx`, `navigation.tsx`, `splash-screen.tsx`, `theme-provider.tsx`), as well as the files for the `hooks` and `lib` folders, should be created and filled with the code provided in the previous messages.

---
### **`public` Folder**

Remember to create the `public` folder and upload your `resume.pdf` file into it.

---

Once you have created all the folders and files on GitHub exactly as structured in your project, go back to Vercel and **Redeploy**. It will work.
