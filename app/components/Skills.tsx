'use client';

import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import { JSX } from 'react';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiGit,
  SiVercel,
  SiVscodium,
  SiFigma,
  SiPostman,
} from 'react-icons/si';

// =======================
// Types
// =======================
type Skill = { name: string; level: number; icon: JSX.Element; };
type CategorizedSkills = { frontend: Skill[]; backend: Skill[]; tools: Skill[]; };

// =======================
// Skill Data
// =======================
const categorizedSkills: CategorizedSkills = {
  frontend: [
    { name: 'Next.js', level: 90, icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'React.js', level: 85, icon: <SiReact className="text-sky-400" /> },
    { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'JavaScript', level: 90, icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'Shadcn/UI', level: 85, icon: <SiShadcnui className="text-emerald-400" /> },
  ],
  backend: [
    { name: 'Node.js', level: 80, icon: <SiNodedotjs className="text-green-500" /> },
    { name: 'Express.js', level: 75, icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb className="text-green-600" /> },
  ],
  tools: [
    { name: 'VS Code', level: 95, icon: <SiVscodium className="text-blue-500" /> },
    { name: 'Git & GitHub', level: 90, icon: <SiGit className="text-orange-500" /> },
    { name: 'Figma', level: 85, icon: <SiFigma className="text-pink-500" /> },
    { name: 'Postman', level: 80, icon: <SiPostman className="text-orange-400" /> },
    { name: 'Vercel', level: 85, icon: <SiVercel className="text-black dark:text-white" /> },
  ],
};

// =======================
// 3D Tilt Hook
// =======================
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

// =======================
// Skill Card
// =======================
function SkillCard({ name, level, icon }: Skill) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useCardTilt();

  return (
    <motion.div
      className="space-y-3 p-5 rounded-3xl shadow-md cursor-pointer
                 bg-white/70 dark:bg-gray-800/80 border border-gray-200/40 dark:border-gray-700/40
                 backdrop-blur-sm"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.07, boxShadow: '0 25px 50px rgba(0,128,128,0.35)' }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <span className="text-gray-900 dark:text-white font-semibold">{name}</span>
        </div>
        <span className="text-gray-500 dark:text-gray-300">{level}%</span>
      </div>

      <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden relative">
        <motion.div
          className="h-3 rounded-full bg-linear-to-r from-teal-400 via-purple-500 to-pink-400 shadow-lg"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          animate={{
            boxShadow: [
              '0 0 8px rgba(52,211,153,0.4)',
              '0 0 20px rgba(139,92,246,0.6)',
              '0 0 8px rgba(255,105,180,0.4)',
            ],
          }}
          transition={{
            width: { duration: 1.2, ease: 'easeInOut' },
            boxShadow: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' },
          }}
        />
      </div>
    </motion.div>
  );
}

// =======================
// Skills Section
// =======================
export default function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section
      id="skills"
      className="relative py-24 dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Floating Multi-color Background Blobs */}
      <motion.div
        className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl bg-linear-to-r from-teal-300 via-purple-400 to-pink-400 opacity-20"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl bg-linear-to-r from-cyan-400 via-purple-500 to-pink-300 opacity-15"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Technical{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 via-purple-500 to-pink-400">
            Skills
          </span>
        </motion.h2>

        {(Object.entries(categorizedSkills) as [keyof CategorizedSkills, Skill[]][]).map(
          ([category, skills]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-linear-to-r from-teal-400 via-purple-400 to-pink-400 rounded-full"></div>
                <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 capitalize">
                  {category} Development
                </h3>
                <div className="flex-1 bg-gray-300 dark:bg-gray-700"></div>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
