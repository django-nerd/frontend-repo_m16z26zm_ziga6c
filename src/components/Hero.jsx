import React, { useEffect } from 'react';
import { motion, useReducedMotion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const Aura = ({ className = '', size = 600, colorFrom = 'from-purple-500/40', colorTo = 'to-fuchsia-500/20', x, y, delay = 0 }) => {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay }}
    >
      <motion.div
        className={`h-full w-full bg-gradient-to-br ${colorFrom} ${colorTo} rounded-full`} 
        style={{ x, y }}
        animate={{
          rotate: [0, 15, 0, -15, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Parallax values for aura movement
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const ax1 = useTransform(mx, [0, 1], [-20, 20]);
  const ay1 = useTransform(my, [0, 1], [-12, 12]);
  const ax2 = useTransform(mx, [0, 1], [25, -25]);
  const ay2 = useTransform(my, [0, 1], [10, -10]);
  const ax3 = useTransform(mx, [0, 1], [-10, 10]);
  const ay3 = useTransform(my, [0, 1], [18, -18]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = e.clientX / innerWidth; // 0..1
      const ny = e.clientY / innerHeight; // 0..1
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [mx, my, shouldReduceMotion]);

  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Spline Scene */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0">
          <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" />
        </div>
      )}

      {/* Animated Auras (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        {!shouldReduceMotion && (
          <>
            <Aura size={720} colorFrom="from-purple-500/40" colorTo="to-indigo-500/10" x={ax1} y={ay1} />
            <Aura size={520} colorFrom="from-fuchsia-500/30" colorTo="to-amber-500/10" x={ax2} y={ay2} delay={0.2} className="top-20 right-10" />
            <Aura size={640} colorFrom="from-sky-500/20" colorTo="to-purple-500/20" x={ax3} y={ay3} delay={0.4} className="bottom-10 left-20" />
          </>
        )}
        {shouldReduceMotion && (
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-black" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wider text-white/80 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
          Anggara — Mobile Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-semibold leading-tight md:text-6xl"
        >
          Building refined mobile experiences with performance, polish, and delight.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/70 md:text-lg"
        >
          Android • iOS • React Native • Kotlin • Swift • Flutter
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:-translate-y-0.5">
            View Projects
          </a>
          <a href="#experience" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15">
            Experience
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </div>

      {/* Gradient vignette for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
}
