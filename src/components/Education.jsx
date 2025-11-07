import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const items = [
  {
    title: 'B.Sc. in Computer Science',
    org: 'Bandung Institute of Technology',
    period: '2016 — 2020',
    details: 'Focused on mobile systems, HCI, and distributed computing.'
  },
  {
    title: 'Android NanoDegree',
    org: 'Udacity',
    period: '2018',
    details: 'Advanced Kotlin, architecture components, and performance optimization.'
  }
];

export default function Education() {
  return (
    <section id="education" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-white/10 p-2 backdrop-blur">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">Education</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium">{it.title}</h3>
                  <p className="text-white/70">{it.org}</p>
                </div>
                <span className="text-sm text-white/60">{it.period}</span>
              </div>
              <p className="mt-4 text-sm text-white/80">{it.details}</p>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-purple-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
