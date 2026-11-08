import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Only show on devices with mouse/pointer
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div 
        className={`rounded-full transition-all duration-200 ${
          isPointer 
            ? isDark
              ? 'w-10 h-10 bg-cyan-400/20 border border-cyan-400/60 backdrop-blur-[2px] scale-125' 
              : 'w-10 h-10 bg-blue-500/20 border border-blue-600/60 backdrop-blur-[2px] scale-125'
            : isDark
              ? 'w-4 h-4 bg-sky-400/30 border border-sky-400/70'
              : 'w-4 h-4 bg-blue-500/30 border border-blue-500/70'
        }`}
      />
    </motion.div>
  );
}
