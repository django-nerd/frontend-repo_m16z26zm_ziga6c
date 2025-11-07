import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const jobs = [
    {
      company: 'TechNova Mobile',
      role: 'Senior Mobile Engineer',
      period: '2022 — Present',
      details:
        'Led development of cross-platform features with Kotlin Multiplatform and Swift. Scaled CI/CD, improved startup by 35%.'
    },
    {
      company: 'AlphaApps',
      role: 'Mobile Developer',
      period: '2020 — 2022',
      details:
        'Shipped 6+ production apps, implemented offline-first data layer, and refined motion design for engagement.'
    }
  ];

  return (
    <section id="experience" className="relative py-20 md:py-28 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          Experience
        </motion.h2>

        <div className="grid gap-6">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company + i}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-medium">{j.company}</h3>
                  <p className="text-sm text-neutral-300 mt-1">{j.role}</p>
                </div>
                <span className="text-xs md:text-sm text-neutral-400 whitespace-nowrap">{j.period}</span>
              </div>
              <p className="text-sm md:text-base text-neutral-300 mt-3 leading-relaxed">{j.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
