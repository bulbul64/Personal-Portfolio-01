'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 transition-colors bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-5xl px-8">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} 
        >
          Get In Touch
        </motion.h2>

        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Contact Information */}
          <motion.div
            className="flex flex-col justify-center gap-5 text-gray-800 dark:text-gray-200 mb-15"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
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
              <Link
                href="https://github.com/bulbul64"
                target="_blank"
                className="hover:text-teal-400 transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shafiulla-bulbul/"
                target="_blank"
                className="hover:text-teal-400 transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                className="hover:text-teal-400 transition-colors"
              >
                <FaTwitter />
              </Link>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
        </div>
      </div>
    </section>
  );
}
