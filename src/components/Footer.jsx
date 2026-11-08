import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative pt-24 pb-12 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto overflow-hidden border-t ${
      isDark ? 'border-white/5' : 'border-slate-200'
    }`}>
      
      {/* Giant Background Watermark */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center overflow-hidden -z-10 ${
        isDark ? 'opacity-[0.035] text-white' : 'opacity-[0.04] text-slate-900'
      }`}>
        <span className="font-editorial text-[14vw] font-black uppercase tracking-tighter whitespace-nowrap">
          RAM LOKESH
        </span>
      </div>

      <div className={`flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b ${
        isDark ? 'border-white/5' : 'border-slate-200'
      }`}>
        {/* Monogram and tagline */}
        <div className="space-y-2 text-center md:text-left">
          <div className={`flex items-center justify-center md:justify-start gap-2 font-display text-lg font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span>MALEPATI RAM LOKESH</span>
          </div>
          <p className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            B.Tech Computer Science & Engineering • Class of 2027
          </p>
        </div>

        {/* Live IST Clock */}
        <div className={`flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs font-mono ${
          isDark 
            ? 'bg-white/5 border-white/10 text-slate-300' 
            : 'bg-slate-100 border-slate-200 text-slate-700 shadow-sm'
        }`}>
          <Clock className="w-3.5 h-3.5 text-cyan-500" />
          <span>VIJAYAWADA (IST):</span>
          <span className={`font-semibold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
            {currentTime || '19:15:00 PM'}
          </span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`px-4 py-2 rounded-full border text-xs font-mono transition-all flex items-center gap-2 group ${
            isDark 
              ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-white/10' 
              : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-blue-500/50 shadow-sm'
          }`}
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-500 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Bottom Sub-footer */}
      <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
        isDark ? 'text-slate-500' : 'text-slate-500'
      }`}>
        <div>
          <span>© {new Date().getFullYear()} Malepati Ram Lokesh. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-blue-600'}`}
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-blue-600'}`}
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            className={`transition-colors ${isDark ? 'hover:text-cyan-400' : 'hover:text-blue-600'}`}
          >
            LeetCode
          </a>
          <a
            href={personalInfo.resumePath}
            download="Malepati_Ram_Lokesh_Resume.pdf"
            className={`transition-colors font-medium ${isDark ? 'hover:text-white text-slate-400' : 'hover:text-slate-950 text-slate-600'}`}
          >
            Resume (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
}
