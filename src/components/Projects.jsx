import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Finance Tracker',
    desc: 'Cross-platform app for budgets and insights.',
  },
  {
    title: 'Delivery Client',
    desc: 'Swift + Kotlin native with offline sync.',
  },
  {
    title: 'Wellness Coach',
    desc: 'Flutter app with animations and charts.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
