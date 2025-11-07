import { motion } from 'framer-motion';
import { Code, Smartphone, Cpu, Layers } from 'lucide-react';

const skills = [
  { icon: Smartphone, name: 'Flutter', level: 90 },
  { icon: Code, name: 'Kotlin', level: 85 },
  { icon: Cpu, name: 'Performance', level: 88 },
  { icon: Layers, name: 'Animations', level: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden bg-black py-24 text-white">
      {/* Subtle particles (dots) */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
          className="mb-12 text-center text-3xl font-light tracking-tight text-white md:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 transition group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <s.icon className="h-6 w-6 text-white/80 transition group-hover:scale-105" />
                </div>
                <div className="text-lg text-white/90">{s.name}</div>
              </div>

              <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-2 rounded-full bg-gradient-to-r from-white to-white/40 shadow-[0_0_20px_4px_rgba(255,255,255,0.3)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
