// app/components/Projects.tsx
'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  image: string;
  demo: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern responsive portfolio built with Next.js, Tailwind CSS & Shadcn/UI.',
    image: '/p.png',
    demo: 'https://personal-portfolio-wc76.vercel.app/',
    github: 'https://github.com/bulbul64/Personal-Portfolio',
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce web app with cart, checkout, and user auth.',
    image: '/project2.jpg',
    demo: '#',
    github: '#',
  },
  {
    title: 'Blog Platform',
    description: 'Dynamic blog platform with markdown support and comment system.',
    image: '/blog.png',
    demo: '#',
    github: '#',
  },
];

function ProjectCard({ title, description, image, demo, github }: Project) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      className="bg-white/70 dark:bg-gray-800/80 border border-gray-200/40 dark:border-gray-700/40 rounded-3xl shadow-md p-5 cursor-pointer backdrop-blur-sm"
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = e.clientX - rect.left - rect.width / 2;
        const py = e.clientY - rect.top - rect.height / 2;
        x.set(px);
        y.set(py);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(52,211,153,0.25)' }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
        <Image src={image} alt={title} width={400} height={250} className="object-cover w-full h-48" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex gap-3">
        <Link href={demo} target="_blank">
          <Button className="bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 text-white hover:from-pink-400 hover:via-purple-500 hover:to-teal-400 transition-all duration-500">
            Live Demo
          </Button>
        </Link>
        {github && (
          <Link href={github} target="_blank">
            <Button variant="outline" className="border border-teal-400 text-teal-400 hover:bg-linear-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-400 hover:text-white transition-all duration-500">
              GitHub
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 dark:bg-gray-900 overflow-hidden transition-colors">
      {/* Floating rainbow blobs */}
      <motion.div
        className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 opacity-20 blur-3xl animate-blob mix-blend-multiply -z-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full bg-linear-to-r from-pink-400 via-purple-500 to-teal-400 opacity-20 blur-3xl animate-blob mix-blend-multiply -z-10"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14">
          My <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 via-purple-500 to-pink-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
