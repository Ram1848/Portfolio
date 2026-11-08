import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

// Excludes Contact as requested by user
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

export default function Navbar() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map(l => l.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 240 && rect.bottom >= 240;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-5 transition-all duration-300">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between gap-4 sm:gap-6 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full apple-glass transition-all duration-300 max-w-6xl w-full ${
            isDark
              ? 'bg-[#0d0d12]/75 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_20px_40px_-15px_rgba(0,0,0,0.7)]'
              : 'bg-white/80 border border-slate-200/90 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_20px_40px_-15px_rgba(15,23,42,0.1)]'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            className={`flex items-center gap-2 group cursor-pointer font-display font-semibold tracking-tight text-sm sm:text-base ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_#22d3ee]" />
            <span>Ram Lokesh<span className="text-cyan-400">.</span></span>
          </a>

          {/* Desktop Nav Links (Without Contact) */}
          <div className="hidden lg:flex items-center gap-1 text-xs xl:text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? isDark ? 'text-white' : 'text-slate-950 font-semibold'
                      : isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute inset-0 rounded-full border ${
                        isDark 
                          ? 'bg-white/10 border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]' 
                          : 'bg-slate-200/70 border-slate-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Icons: Apple Liquid Glass Theme Toggle & Resume */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Liquid Glass Sliding Pill Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={personalInfo.resumePath}
              download="Malepati_Ram_Lokesh_Resume.pdf"
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all group ${
                isDark
                  ? 'bg-white text-dark-950 hover:bg-slate-200 shadow-lg shadow-white/5'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-950/10'
              }`}
            >
              <span>Resume</span>
              <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/10'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-x-4 top-20 z-50 p-6 rounded-3xl apple-glass border shadow-2xl lg:hidden flex flex-col gap-4 ${
              isDark
                ? 'bg-[#0d0d12]/90 border-white/10 text-white shadow-black/80'
                : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-900/10'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-base font-medium transition-colors flex items-center justify-between ${
                    isDark
                      ? 'text-slate-200 hover:text-cyan-400 hover:bg-white/5'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className={`pt-4 border-t flex flex-col gap-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <a
                href={personalInfo.resumePath}
                download="Malepati_Ram_Lokesh_Resume.pdf"
                className={`w-full py-2.5 rounded-2xl text-center text-sm font-semibold flex items-center justify-center gap-2 ${
                  isDark ? 'bg-white text-dark-950' : 'bg-slate-900 text-white'
                }`}
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
              <p className={`text-center text-xs font-mono mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {personalInfo.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
