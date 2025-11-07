import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.0, ease: [0.4, 0.0, 0.2, 1] }}
          className="mb-10 text-center text-3xl font-light tracking-tight md:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="mx-auto max-w-2xl">
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {[{ name: 'name', placeholder: 'Your Name' }, { name: 'email', placeholder: 'Your Email' }].map((f) => (
              <motion.div
                key={f.name}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <input
                  type="text"
                  name={f.name}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                />
              </motion.div>
            ))}

            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }}>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }}>
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3 uppercase tracking-widest text-white/90 backdrop-blur-sm"
              >
                <span className="relative z-10">Send Message</span>
                <span className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            </motion.div>
          </motion.form>

          <div className="mt-10 flex items-center justify-center gap-6 text-white/70">
            {[{ Icon: Mail, href: '#' }, { Icon: Github, href: '#' }, { Icon: Linkedin, href: '#' }].map(({ Icon, href }) => (
              <motion.a key={href} href={href} whileHover={{ y: -3, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="mt-12 text-center text-sm text-gray-500"
          >
            Designed & Animated by Anggara
          </motion.p>
        </div>
      </div>
    </section>
  );
}
