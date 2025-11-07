import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-neutral-300"
        >
          Open to freelance and full-time opportunities.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="mailto:hello@anggara.dev" aria-label="Email" className="p-2 rounded-full border border-white/15 hover:border-white/40 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-white/15 hover:border-white/40 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-white/15 hover:border-white/40 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} Anggara</p>
      </div>
    </section>
  );
}
