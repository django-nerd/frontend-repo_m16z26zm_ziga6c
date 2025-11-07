import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  const schools = [
    {
      school: 'Institut Teknologi Bandung',
      degree: 'B.Sc. in Computer Science',
      period: '2016 — 2020',
      details: 'Focus on mobile engineering, algorithms, and HCI. Built capstone Android app with modular architecture.'
    },
    {
      school: 'Online Certifications',
      degree: 'Kotlin, SwiftUI, Flutter',
      period: '2020 — 2024',
      details: 'Deep dives into modern mobile stacks, performance profiling, and animations.'
    }
  ];

  return (
    <section id="education" className="relative py-20 md:py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          Education
        </motion.h2>

        <div className="grid gap-6">
          {schools.map((s, i) => (
            <motion.div
              key={s.school + i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-medium">{s.school}</h3>
                  <p className="text-sm text-neutral-300 mt-1">{s.degree}</p>
                </div>
                <span className="text-xs md:text-sm text-neutral-400 whitespace-nowrap">{s.period}</span>
              </div>
              <p className="text-sm md:text-base text-neutral-300 mt-3 leading-relaxed">{s.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
