'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function About() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section id="about" className="relative py-20 dark:bg-gray-900 transition-colors overflow-hidden">
      
      {/* Floating Gradient Backgrounds */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-linear-to-r  opacity-20 rounded-full animate-blob mix-blend-multiply filter blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-linear-to-r  opacity-20 rounded-full animate-blob animation-delay-2000 mix-blend-multiply filter blur-3xl -z-10"></div>

      <motion.div
        className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div className="md:w-1/2 flex justify-center md:justify-start" variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-4xl shadow-2xl overflow-hidden"
          >
            <Image
              src="/me.jpg"
              alt="About me"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div className="md:w-1/2 text-center md:text-left space-y-5" variants={containerVariants}>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
            I’m <span className="font-semibold text-teal-400">Shafiullah Bulbul</span>, a passionate Full Stack Developer building responsive, interactive web apps using <span className="font-semibold text-gray-900 dark:text-white">Next.js, Tailwind CSS</span> and <span className="font-semibold text-gray-900 dark:text-white">Shadcn/UI</span>.
          </motion.p>
          <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
            I focus on building scalable, maintainable web apps and exploring creative solutions to real-world problems.
          </motion.p>
          <motion.div className="flex justify-center md:justify-start gap-4 mt-4" variants={itemVariants}>
            <Link href="#projects">
              <Button className="bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 text-white hover:from-pink-400 hover:via-purple-500 hover:to-teal-400 transition-all duration-500">
                My Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border border-teal-400 text-teal-400 hover:bg-linear-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-400 hover:text-white transition-all duration-500">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
