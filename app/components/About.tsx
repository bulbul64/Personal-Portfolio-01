// app/components/About.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const overlayVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative py-24 dark:bg-gray-900 overflow-hidden transition-colors">
      
      {/* Floating Rainbow Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 opacity-20 blur-3xl animate-blob mix-blend-multiply -z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-linear-to-r from-pink-400 via-purple-500 to-teal-400 opacity-20 blur-3xl animate-blob mix-blend-multiply -z-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10 px-6 relative z-10">
        
        {/* Image with 3D Tilt */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start cursor-pointer relative group"
          style={{ rotateX, rotateY }}
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
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <motion.div
            className="rounded-4xl shadow-2xl overflow-hidden relative"
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/me.jpg"
              alt="About me"
              width={300}
              height={300}
              className="object-cover"
              priority
            />

            {/* Overlay for text & buttons */}
            <motion.div
              className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center gap-4 text-center p-4 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              variants={overlayVariants}
              initial="hidden"
              whileHover="visible"
            >
              <h3 className="text-white text-xl font-bold">Shafiullah Bulbul</h3>
              <p className="text-gray-200 max-w-xs">
                Full Stack Developer — Next.js, Tailwind CSS, Shadcn/UI
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full justify-center">
                <Link href="#projects">
                  <Button className="bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 text-white w-full sm:w-auto">
                    My Projects
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="border border-white hover:bg-linear-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-400 hover:text-white w-full sm:w-auto">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div className="md:w-1/2 text-center md:text-left space-y-5">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </motion.h2>
          <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-gradient bg-clip-text text-transparent bg-linear-to-r from-teal-400 via-purple-500 to-pink-400">Shafiullah Bulbul</span>, a passionate Full Stack Developer building responsive, interactive web apps using <span className="font-semibold text-gray-900 dark:text-white">Next.js, Tailwind CSS</span> and <span className="font-semibold text-gray-900 dark:text-white">Shadcn/UI</span>.
          </motion.p>
          <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I focus on building scalable, maintainable web apps and exploring creative solutions to real-world problems.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
