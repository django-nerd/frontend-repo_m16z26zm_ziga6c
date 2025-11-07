import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Smooth scroll for internal anchors – lightweight, no extra deps
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* Light, elegant, and performant layout */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-medium tracking-wide">Anggara</a>
          <nav className="hidden sm:flex gap-5 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
