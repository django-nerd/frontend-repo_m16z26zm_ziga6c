import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import { Navbar, Projects, Contact } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Hero />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </AnimatePresence>
      </main>
    </div>
  );
}
