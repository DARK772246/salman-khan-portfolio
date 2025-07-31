"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import GallerySection from "@/components/gallery-section"
import CertificatesSection from "@/components/certificates-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import SplashScreen from "@/components/splash-screen"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentSection, setCurrentSection] = useState("hero")

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "gallery", "certificates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black">
        <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>

        {!showSplash && (
          <>
            <Navigation currentSection={currentSection} />
            <main className="relative">
              <section id="hero">
                <HeroSection />
              </section>
              <section id="about">
                <AboutSection />
              </section>
              <section id="experience">
                <ExperienceSection />
              </section>
              <section id="projects">
                <ProjectsSection />
              </section>
              <section id="gallery">
                <GallerySection />
              </section>
              <section id="certificates">
                <CertificatesSection />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
            </main>
          </>
        )}
      </div>
    </ThemeProvider>
  )
            }
