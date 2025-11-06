'use client';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-300 dark:border-gray-700 text-center dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Shafiullah Bulbul. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex gap-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-teal-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-teal-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-teal-400 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
