// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';


export const metadata: Metadata = {
  title: "Shafiullah Bulbul | Portfolio",
  description: "Personal portfolio of Shafiullah Bulbul - Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-roboto antialiased transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
