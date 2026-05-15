import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import GitHubOverview from './components/GitHubOverview'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = ['hero', 'projects', 'skills', 'education', 'github', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <GitHubOverview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
