import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-20" style={{
          background: 'radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.08), transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
            <p className="text-neutral-300 leading-relaxed">
              I'm Anggara, a mobile developer specializing in Kotlin, Swift, and cross-platform with Flutter/React Native. I blend thoughtful UX with pragmatic engineering to ship stable apps that feel delightful and fast.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-300 text-sm">
              <li>• 5+ years building consumer and enterprise apps</li>
              <li>• Strong CI/CD, modularization, and testing practices</li>
              <li>• Accessibility-first and performance-focused</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-black">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.08), transparent 60%)' }} />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 20%, white 2px, transparent 2px)', backgroundSize: '12px 12px' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neutral-400 text-sm">Minimal, performant by design.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
