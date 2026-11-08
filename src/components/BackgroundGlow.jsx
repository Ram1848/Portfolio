import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundGlow() {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      {/* Background base */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[#030305]' : 'bg-[#f8fafc]'}`} />

      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 ${isDark ? 'bg-subtle-grid opacity-25' : 'opacity-15'}`}
        style={{
          backgroundImage: isDark
            ? undefined
            : 'linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Interactive mouse follower ambient light */}
      <div 
        className={`absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out ${
          isDark ? 'opacity-20' : 'opacity-25'
        }`}
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(56, 189, 248, 0.5) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
        }}
      />

      {/* Top ambient spotlight */}
      <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full blur-[130px] ${
        isDark 
          ? 'bg-gradient-to-b from-sky-500/10 via-blue-600/5 to-transparent' 
          : 'bg-gradient-to-b from-sky-300/20 via-indigo-300/10 to-transparent'
      }`} />

      {/* Bottom ambient glow */}
      <div className={`absolute -bottom-40 right-1/4 w-[800px] h-[500px] rounded-full blur-[150px] ${
        isDark 
          ? 'bg-gradient-to-t from-cyan-500/10 via-indigo-600/5 to-transparent' 
          : 'bg-gradient-to-t from-cyan-300/20 via-blue-200/15 to-transparent'
      }`} />
    </div>
  );
}
