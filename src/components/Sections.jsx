import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export function Navbar() {
  // smooth scroll for internal anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash && hash.length > 1) {
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur">
          <a href="#home" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/90">
            <Rocket className="h-4 w-4 text-purple-400" /> Anggara
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {[
              { href: '#projects', label: 'Projects' },
              { href: '#experience', label: 'Experience' },
              { href: '#education', label: 'Education' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <a href="https://github.com/" aria-label="GitHub" className="rounded-xl p-2 text-white/80 hover:bg-white/10"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="rounded-xl p-2 text-white/80 hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
            <a href="#contact" aria-label="Contact" className="rounded-xl p-2 text-white/80 hover:bg-white/10"><Mail className="h-4 w-4" /></a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function Projects() {
  const items = [
    { title: 'Pulse', desc: 'Health & fitness tracker with motion gestures', tags: ['React Native', 'Reanimated', 'Expo'] },
    { title: 'Voyage', desc: 'Travel planner with offline maps & AR', tags: ['Kotlin', 'Jetpack', 'Room'] },
    { title: 'Ledger', desc: 'Personal finance with on-device ML insights', tags: ['Swift', 'SwiftUI', 'CoreML'] },
  ];
  return (
    <section id="projects" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-2xl font-semibold md:text-3xl">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="mb-4 h-32 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/0" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <motion.div aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Let’s build something</h2>
        <p className="text-white/70">Open to freelance, full-time, and collaboration. I respond within 24 hours.</p>
        <a href="mailto:anggara@example.com" className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:-translate-y-0.5 transition-transform">Email Me</a>
      </div>
    </section>
  );
}
