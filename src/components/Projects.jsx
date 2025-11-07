import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Nova Commerce',
    role: 'Flutter Lead',
    description: 'A premium e-commerce app with cinematic transitions and buttery scrolling.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Orbit Fitness',
    role: 'Kotlin Engineer',
    description: 'Native Android app with real-time charts, sensors, and delightful motion.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Pulse Finance',
    role: 'Mobile Developer',
    description: 'Financial dashboard mobile app with secure auth and 3D touch effects.',
    image: 'https://images.unsplash.com/photo-1710685269055-730c61518c84?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZSUyMEZpbmFuY2V8ZW58MHwwfHx8MTc2MjQ3NzgwNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_0,transparent_96%,rgba(255,255,255,0.06)_96%,rgba(255,255,255,0.06)_100%),linear-gradient(90deg,transparent_0,transparent_96%,rgba(255,255,255,0.06)_96%,rgba(255,255,255,0.06)_100%)] bg-[size:44px_44px]" />

      <div className="container mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 text-center text-3xl font-light tracking-tight md:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-1 text-sm uppercase tracking-widest text-gray-400">{p.role}</div>
                <div className="text-lg text-white/90">{p.title}</div>
                <div className="mt-2 text-sm text-gray-400">{p.description}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0"
            >
              <div className="relative aspect-video">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover grayscale" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-sm uppercase tracking-widest text-gray-400">{active.role}</div>
                <div className="mb-2 text-2xl text-white/90">{active.title}</div>
                <div className="text-gray-300">{active.description}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
