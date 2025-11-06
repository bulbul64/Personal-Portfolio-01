'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    link: "https://personal-portfolio-jade-xi-66.vercel.app/",
    github: "https://github.com/bulbul64",
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce application with cart, payment integration and admin dashboard.",
    link: "#",
    github: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing tasks, deadlines, and priorities efficiently.",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  // ✅ Motion Values top-level
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
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
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Card content */}
      <div className="relative p-6 flex flex-col justify-between h-full bg-white dark:bg-gray-800 transition-transform duration-300 rounded-2xl">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Link href={project.github} target="_blank">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-teal-400 hover:text-white transition-all duration-300"
            >
              <FaGithub /> Github
            </motion.button>
          </Link>

          <Link
            href={project.link}
            target="_blank"
            className="text-teal-400 hover:text-teal-500 font-semibold flex items-center justify-center"
          >
            View Project →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
