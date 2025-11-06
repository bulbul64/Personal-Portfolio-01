'use client';

import { motion, Variants } from 'framer-motion';

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Shadcn/UI', level: 85 },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section id="skills" className="relative py-20 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-2 p-4 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-900 dark:text-white font-semibold">{skill.name}</span>
                <span className="text-gray-700 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-4 bg-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
