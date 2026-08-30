import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Publications from '../components/Publications';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0a0d14] dark:text-slate-100 bg-grid-pattern transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Education />
        <Publications />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
