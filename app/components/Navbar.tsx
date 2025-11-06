// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const links = [
  { href: '#/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    queueMicrotask(() => setIsDark(storedTheme ? storedTheme === 'dark' : prefersDark));
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  if (isDark === null) return null;

  const toggleTheme = () => setIsDark(prev => prev !== null ? !prev : true);

  const menuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: 'none' },
    open: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed w-full z-50 backdrop-blur-md transition-colors duration-500">
      <div className={`container mx-auto flex justify-between items-center py-4 px-6 rounded-b-lg shadow-lg ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Logo */}
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: [0, -5, 0], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <Link href="/"><h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer hover:text-teal-400 transition-colors duration-300">My Portfolio</h1></Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
          {links.map(link => (
            <motion.div key={link.href} whileHover={{ y: -2, scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link href={link.href} className="relative group transition-colors duration-300">{link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 rounded transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

          {/* Animated Circular Slider Toggle */}
          <div
            onClick={toggleTheme}
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-500 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
          >
            <motion.div
              className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center text-sm"
              animate={{ x: isDark ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              {isDark ? '🌙' : '☀️'}
            </motion.div>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div
            onClick={toggleTheme}
            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-500 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}
          >
            <motion.div
              className="bg-white w-5 h-5 rounded-full shadow-md flex items-center justify-center text-xs"
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              {isDark ? '🌙' : '☀️'}
            </motion.div>
          </div>

          <Button onClick={() => setMenuOpen(!menuOpen)} className="relative w-8 h-8 flex flex-col justify-center items-center gap-1">
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-full h-0.5 bg-current rounded-full" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-full h-0.5 bg-current rounded-full" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-full h-0.5 bg-current rounded-full" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={`md:hidden fixed top-16 left-0 w-full ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} backdrop-blur-md shadow-lg rounded-b-lg`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
              {links.map(link => (
                <motion.li key={link.href} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href={link.href} className="transition-colors duration-300" onClick={() => setMenuOpen(false)}>{link.label}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
