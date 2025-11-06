'use client';

import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';

const skills = [
  { name: 'Next.js', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'Shadcn/UI', level: 85 },
];

// 3D Tilt Hook
function useCardTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

// Individual Skill Card
function SkillCard({ name, level }: { name: string; level: number }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <motion.div
      className="space-y-2 p-5 rounded-3xl shadow-lg cursor-pointer bg-gray-100 dark:bg-gray-800"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,128,128,0.25)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-900 dark:text-white font-semibold">{name}</span>
        <span className="text-gray-500 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
        <motion.div
          className="h-4 bg-teal-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section
      id="skills"
      className="relative py-20 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
