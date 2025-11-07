import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Spline animation background (vector, elegant) */}
      {!prefersReducedMotion ? (
        <div className="absolute inset-0" aria-hidden="true">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : (
        // Static fallback for reduced motion users
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 50%, rgba(140, 120, 255, 0.35) 0%, rgba(255, 120, 80, 0.25) 35%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.9) 100%)',
            filter: 'saturate(120%)',
          }}
        />
      )}

      {/* Colorful, keunguan animated auras (subtle, layered) */}
      {!prefersReducedMotion && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0.25, scale: 0.95 }}
            animate={{ opacity: [0.25, 0.45, 0.25], scale: [0.95, 1.03, 0.95] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.35), rgba(59, 130, 246, 0.2) 45%, rgba(0,0,0,0) 65%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0.2, scale: 1.05 }}
            animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.05, 0.98, 1.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full blur-[72px]"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.18), rgba(251, 146, 60, 0.14) 40%, rgba(0,0,0,0) 65%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0.18, rotate: 0 }}
            animate={{ opacity: [0.18, 0.3, 0.18], rotate: [0, 8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vmin] h-[65vmin] rounded-full border border-fuchsia-400/20"
            style={{ boxShadow: '0 0 120px 40px rgba(168,85,247,0.08) inset' }}
          />
        </div>
      )}

      {/* Subtle overlays with no interaction blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)',
          backgroundSize: '6px 6px, 6px 6px',
        }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="tracking-widest text-xs md:text-sm text-neutral-300/80 uppercase mb-4"
        >
          Anggara — Mobile Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]"
        >
          Building elegant, performant mobile experiences.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="mt-5 max-w-2xl text-neutral-200/90 text-sm sm:text-base leading-relaxed"
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
