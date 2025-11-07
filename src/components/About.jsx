import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <section id="about" ref={ref} className="relative w-full overflow-hidden bg-black py-24 text-white">
      {/* Morphing background */}
      <motion.div
        style={{ opacity: bgOpacity, y }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-white/10 to-white/0 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-gradient-to-tr from-white/10 to-white/0 blur-3xl" />
      </motion.div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center grayscale" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>

          {/* Text */}
          <div>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
              className="mb-6 text-3xl font-light tracking-tight text-white md:text-4xl"
            >
              About Anggara
            </motion.h2>
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-4 text-gray-300/90"
            >
              I craft mobile experiences with a focus on elegance, performance, and detail. With strong roots in Flutter and Kotlin, I build interfaces that feel effortless, refined, and alive.
            </motion.p>
            <motion.p
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="mb-6 text-gray-400"
            >
              From concept to launch, my process blends design sensitivity with engineering precision. Every motion tells a story; every pixel has a purpose.
            </motion.p>

            {/* Animated timeline */}
            <div className="relative ml-2 border-l border-white/10 pl-6">
              {[
                { year: '2021', text: 'Started building production Flutter apps' },
                { year: '2022', text: 'Shipped cross-platform apps with custom animations' },
                { year: '2023', text: 'Led mobile projects with Kotlin and Compose' },
                { year: '2024', text: 'Delivering premium, cinematic mobile UX' },
              ].map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative mb-6"
                >
                  <div className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" />
                  <div className="text-sm uppercase tracking-widest text-gray-400">{item.year}</div>
                  <div className="text-gray-200">{item.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
