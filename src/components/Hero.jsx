import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Subtle background vignette and grain */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-black to-black" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
           style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px)', backgroundSize: '6px 6px' }}
           aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="tracking-widest text-xs md:text-sm text-neutral-400 uppercase mb-4"
        >
          Anggara — Mobile Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight"
        >
          Building elegant, performant mobile experiences.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="mt-5 max-w-2xl text-neutral-300 text-sm sm:text-base leading-relaxed"
        >
          I craft robust iOS/Android apps with a focus on smooth interactions, clean architecture, and long-term maintainability.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white hover:bg-white/10 transition-colors"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:border-white/40 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
