'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useState } from 'react';

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Front-end Developer ✅", "Back-end Learning ⏳"],
    loop: 0,
    delaySpeed: 1500,
    typeSpeed: 90,
    deleteSpeed: 90,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative py-24 dark:bg-gray-900 overflow-hidden transition-colors">
      {/* Rainbow blobs */}
      <motion.div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 opacity-20 blur-3xl mix-blend-multiply -z-10"
        animate={{ y: [0, 40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-linear-to-r from-pink-400 via-purple-500 to-teal-400 opacity-20 blur-3xl mix-blend-multiply -z-10"
        animate={{ y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10 px-6 relative z-10">
        {/* Left */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I’m <span className="text-teal-400">Shafiullah Bulbul</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            {text}<Cursor cursorStyle="|" />
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md md:max-w-full">
            Building interactive web apps using <span className="font-semibold text-gray-900 dark:text-white">Next.js, Tailwind CSS</span> & <span className="font-semibold text-gray-900 dark:text-white">Shadcn/UI</span>.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Link href="#projects">
              <Button className="bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 text-white hover:from-pink-400 hover:via-purple-500 hover:to-teal-400 transition-all duration-500">
                My Projects
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" download>
              <Button
                className="relative overflow-hidden px-6 py-2 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg shadow-md transition-all duration-300 hover:text-white hover:border-transparent"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className={`absolute inset-0 bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 transform -translate-x-full hover:translate-x-0 transition-transform duration-500 ease-out`}></span>
                <span className="relative z-10">{hovered ? "Download" : "Resume"}</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-4xl shadow-2xl overflow-hidden"
          >
            <Image src="/me.jpg" alt="Profile photo" width={350} height={350} className="object-cover w-[340px] h-[400px]" priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
