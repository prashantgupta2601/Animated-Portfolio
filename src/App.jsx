import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  return (
    <div className="relative min-h-screen selection:bg-neonBlue/30 selection:text-white bg-[#050505] text-white transition-colors duration-300">
      <Helmet>
        <title>Prashant Gupta | Developer Portfolio</title>
        <meta name="description" content="Portfolio of Prashant Gupta, Full Stack Developer specializing in MERN stack." />
      </Helmet>
      
      <ParticlesBackground />
      <CustomCursor />
      <ScrollProgress />
      <Toaster position="bottom-right" toastOptions={{
        className: 'dark:bg-[#1a1a1a] dark:text-white border dark:border-white/10 glass',
      }} />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <div id="whyhireme"><WhyHireMe /></div>
        <div id="certifications"><Certifications /></div>
        <Contact />
      </main>
    </div>
  )
}

export default App
