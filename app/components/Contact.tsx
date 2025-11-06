'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 transition-colors dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-2xl text-center">

        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col gap-3 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted! (Add your backend integration here)");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors"
            required
          />
          <Button type="submit" className="bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 text-white hover:from-pink-400 hover:via-purple-500 hover:to-teal-400 transition-all duration-500 hover:bg-teal-500 ">
            Send Message
          </Button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-6 md:mt-8 text-2xl text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <FaTwitter />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
