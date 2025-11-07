'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <section
      id="contact"
      className="relative py-24 transition-colors bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Optional Floating Blobs for consistency */}
      <motion.div
        className="absolute -top-32 left-1/4 w-[400px] h-[400px] rounded-full bg-linear-to-r from-teal-300 via-purple-400 to-pink-400 opacity-20 blur-3xl animate-blob mix-blend-multiply -z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Contact Information */}
          <motion.div
            className="flex flex-col justify-center gap-5 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400 text-xl" />
              <span>bulbulwebdev@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-teal-400 text-xl" />
              <span>+880 01727527349</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-400 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-6 text-2xl">
              <Link href="https://github.com/bulbul64" target="_blank" className="hover:text-teal-400 transition-colors">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/shafiulla-bulbul/" target="_blank" className="hover:text-teal-400 transition-colors">
                <FaLinkedin />
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" className="hover:text-teal-400 transition-colors">
                <FaTwitter />
              </Link>
            </div>
          </motion.div>

          {/* Right: Contact Form with 3D Tilt */}
          <motion.div
            className="perspective-[1000px]"
            onMouseMove={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              const px = e.clientX - rect.left - rect.width / 2;
              const py = e.clientY - rect.top - rect.height / 2;
              x.set(px);
              y.set(py);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
          >
            <motion.form
              className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-8"
              style={{ rotateX, rotateY }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted! (Backend integration coming soon)');
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
                required
              />
              <Button
                type="submit"
                className="w-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 text-white hover:from-pink-400 hover:via-purple-500 hover:to-teal-400 transition-all duration-500"
              >
                Send Message
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
