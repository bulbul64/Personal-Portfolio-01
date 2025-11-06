// app/page.tsx
'use client';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/ProjectCard';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section with 3D tilt */}
      <Hero />

      {/* About Section with floating gradient blobs */}
      <About />

      {/* Skills Section with animated progress bars */}
      <Skills />

      {/* Projects Section with 3D hover & overlay buttons */}
      <Projects />

      {/* Contact Section with form + social links */}
      <Contact />
    </main>
  );
}
