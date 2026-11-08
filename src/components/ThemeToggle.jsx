import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      className={`relative inline-flex items-center h-8 sm:h-9 px-1 rounded-full cursor-pointer select-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 apple-glass border ${
        isDark
          ? 'bg-black/60 border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.5)]'
          : 'bg-slate-200/80 border-slate-300/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_12px_rgba(15,23,42,0.06)]'
      }`}
      style={{ width: '84px' }}
    >
      {/* Sliding white circular thumb */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 z-10 ${
          isDark ? 'order-1' : 'order-2 ml-auto'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -70, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 70, scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-slate-900 fill-slate-900" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Label Text ("Dark" or "Light") */}
      <span
        className={`flex-1 text-center text-[11px] sm:text-xs font-mono font-semibold tracking-wider transition-colors duration-300 ${
          isDark ? 'order-2 pr-1.5 text-slate-200' : 'order-1 pl-1.5 text-slate-800'
        }`}
      >
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
