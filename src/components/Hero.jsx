import { useEffect, useMemo, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const splitToChars = (text) => text.split('').map((c, i) => ({ c, i }));

export default function Hero({ onCTAClick }) {
  const controls = useAnimation();
  const lineControls = useAnimation();
  const title = useMemo(() => splitToChars("Hi, I’m Anggara — Mobile Developer"), []);
  const parallaxRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useTransform(mx, [-50, 50], [-3, 3]);
  const rotateX = useTransform(my, [-50, 50], [3, -3]);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.02, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }));

    lineControls.start({ width: '100%', transition: { delay: 1.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } });
  }, [controls, lineControls]);

  const handleMouseMove = (e) => {
    const rect = parallaxRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const damp = 0.15;
    mx.set((x * damp) / 10);
    my.set((y * damp) / 10);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient veil for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />

      {/* Foreground Content */}
      <motion.div
        ref={parallaxRef}
        onMouseMove={handleMouseMove}
        style={{ rotateY, rotateX }}
        className="relative z-10 flex h-full w-full items-center justify-center px-6"
      >
        <div className="max-w-5xl w-full">
          <h1 className="mb-4 select-none text-center font-extralight tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title.map(({ c, i }) => (
              <motion.span
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                className="inline-block"
              >
                {c === ' ' ? '\u00A0' : c}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mb-8 max-w-2xl text-center text-gray-200/80 text-sm sm:text-base md:text-lg"
          >
            Building seamless experiences in Flutter & Kotlin
          </motion.p>

          {/* Glowing separator line */}
          <div className="mx-auto mb-10 h-px w-full max-w-xl overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={lineControls}
              className="h-px bg-gradient-to-r from-white/0 via-white/70 to-white/0 shadow-[0_0_20px_2px_rgba(255,255,255,0.4)]"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={onCTAClick}
              whileHover={{ x: 6, boxShadow: '0 0 30px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm uppercase tracking-widest text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              View My Work
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: 'easeInOut' }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            className="h-10 w-6 rounded-full border border-white/30"
          >
            <motion.div
              animate={{ y: [6, 22, 6] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-white"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
