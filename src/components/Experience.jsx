import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Mobile Developer',
    company: 'NovaTech Labs',
    period: '2022 — Present',
    points: [
      'Led development of a React Native super app with 500k+ MAU',
      'Architected modular feature packs with over-the-air updates',
      'Improved startup time by 38% via bundle splitting and lazy init',
    ],
  },
  {
    role: 'Mobile Engineer',
    company: 'Orbit Studio',
    period: '2020 — 2022',
    points: [
      'Shipped Kotlin Multiplatform modules shared across 3 apps',
      'Implemented offline-first sync with conflict resolution',
      'Built CI pipelines for E2E tests on device farms',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-white/10 p-2 backdrop-blur">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <p className="text-white/70">{exp.company}</p>
                </div>
                <span className="text-sm text-white/60">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-white/80">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
