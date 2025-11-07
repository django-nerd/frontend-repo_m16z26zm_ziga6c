import { motion } from 'framer-motion';
import { Smartphone, Code, Cpu, Layers } from 'lucide-react';

const items = [
  { icon: Smartphone, label: 'iOS / Android', level: 90 },
  { icon: Code, label: 'Kotlin / Swift', level: 85 },
  { icon: Layers, label: 'Flutter / RN', level: 80 },
  { icon: Cpu, label: 'Architecture', level: 88 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 p-5 bg-white/5"
            >
              <div className="flex items-center gap-3">
                <it.icon className="w-5 h-5 text-white" />
                <span className="font-medium">{it.label}</span>
                <span className="ml-auto text-xs text-neutral-400">{it.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-white" style={{ width: `${it.level}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
