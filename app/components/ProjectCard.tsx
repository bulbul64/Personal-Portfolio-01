'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    link: "https://personal-portfolio-jade-xi-66.vercel.app/",
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce application with cart, payment integration and admin dashboard.",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing tasks, deadlines, and priorities efficiently.",
    link: "#",
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
            <motion.div
              key={index}
              className="rounded-2xl shadow-md p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
              <Link
                href={project.link}
                className="mt-4 inline-block text-teal-400 hover:text-teal-500 font-semibold transition-colors"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
