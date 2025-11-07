import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white/10 selection:text-white">
      {/* Page transition overlay */}
      <AnimatePresence>
        <motion.div
          key="page-transition"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="pointer-events-none fixed inset-0 z-50 bg-black"
        />
      </AnimatePresence>

      {/* Subtle moving vignette for depth */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,black)] opacity-60" />

      <Hero onCTAClick={scrollToProjects} />
      <About />
      <Skills />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Contact />
    </div>
  );
}
