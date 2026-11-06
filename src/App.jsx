import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTIONS = ['hero', 'experience', 'projects', 'skills', 'education', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers = []
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3, rootMargin: '-57px 0px 0px 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const revealObs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    revealEls.forEach(el => revealObs.observe(el))
    return () => revealObs.disconnect()
  }, [])

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
