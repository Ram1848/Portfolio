import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDown, 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Code2, 
  Terminal, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const isDark = theme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#2563eb', '#ffffff', '#00d2ff']
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto overflow-hidden"
    >
      {/* 2-Column Full-Screen Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center my-auto py-6 sm:py-8">
        
        {/* LEFT COLUMN: Name, Animated Title, Intro & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7 z-10">
          
          {/* Availability Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wide backdrop-blur-md shadow-sm border ${
              isDark 
                ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' 
                : 'bg-emerald-50 border-emerald-300 text-emerald-700'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="uppercase font-semibold tracking-wider">{personalInfo.availability}</span>
            </div>
          </motion.div>

          {/* Name & Headline */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest uppercase ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}
            >
              <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
              <span>HI, I'M MALEPATI RAM LOKESH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`font-editorial text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.04] ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              BUILDING <br />
              <span className={`text-transparent bg-clip-text ${
                isDark
                  ? 'bg-gradient-to-r from-slate-100 via-sky-200 to-cyan-400'
                  : 'bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500'
              }`}>
                DIGITAL
              </span> <br />
              EXPERIENCES.
            </motion.h1>
          </div>

          {/* Animated Cycling Role Title */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-12 overflow-hidden flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight flex items-center gap-3 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}
              >
                <Terminal className="w-6 h-6 shrink-0" />
                <span>{personalInfo.roles[currentRoleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Short Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {personalInfo.heroIntro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className={`px-7 py-4 rounded-full text-sm font-semibold flex items-center gap-2 shadow-xl group transition-all duration-300 hover:scale-[1.02] ${
                isDark
                  ? 'bg-white text-dark-950 hover:bg-slate-200 shadow-white/5'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/15'
              }`}
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Malepati_Ram_Lokesh_Resume.pdf"
              onClick={handleDownloadResume}
              className={`px-7 py-4 rounded-full text-sm font-medium flex items-center gap-2 group backdrop-blur-md transition-all duration-300 hover:scale-[1.02] border ${
                isDark
                  ? 'bg-[#0d0d12]/80 border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                  : 'bg-white/80 border-slate-300 text-slate-800 hover:border-blue-500 hover:text-slate-950 shadow-sm'
              }`}
            >
              <FileDown className={`w-4 h-4 group-hover:-translate-y-0.5 transition-transform ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social Icons & Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-3 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all group ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-slate-300 hover:text-white'
                    : 'bg-white border-slate-200 hover:border-blue-500/50 hover:bg-slate-50 text-slate-700 hover:text-slate-950 shadow-sm'
                }`}
                title="GitHub"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all group ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-slate-300 hover:text-white'
                    : 'bg-white border-slate-200 hover:border-blue-500/50 hover:bg-slate-50 text-slate-700 hover:text-slate-950 shadow-sm'
                }`}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all group ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-slate-300 hover:text-white'
                    : 'bg-white border-slate-200 hover:border-amber-500/50 hover:bg-slate-50 text-slate-700 hover:text-slate-950 shadow-sm'
                }`}
                title="LeetCode (250+ Solved)"
              >
                <Code2 className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className={`h-6 w-[1px] hidden sm:block ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />

            {/* Quick credentials micro-bar */}
            <div className={`flex items-center gap-3 text-xs font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span className={`flex items-center gap-1.5 font-semibold ${
                isDark ? 'text-cyan-300' : 'text-blue-700'
              }`}>
                <Award className="w-3.5 h-3.5" />
                <span>9.17 CGPA</span>
              </span>
              <span>•</span>
              <span>KLEF B.TECH CSE</span>
              <span>•</span>
              <span className="opacity-75">'27</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Apple Liquid Glass Portrait Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] flex flex-col items-center group"
          >
            {/* Ambient Cyan / Blue Back-Glow */}
            <div className={`absolute -inset-6 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-sky-400/15' 
                : 'bg-gradient-to-tr from-sky-400/20 via-blue-500/15 to-indigo-400/10'
            }`} />

            {/* Concentric Subtle Orbital Rings */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border pointer-events-none ${
              isDark ? 'border-cyan-500/15' : 'border-blue-400/20'
            }`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed animate-spin-slow pointer-events-none ${
              isDark ? 'border-sky-400/20' : 'border-indigo-400/25'
            }`} />

            {/* Apple Liquid Glass Frame Container */}
            <div className={`relative w-full rounded-[32px] overflow-hidden backdrop-blur-2xl transition-all duration-300 border ${
              isDark
                ? 'bg-[#0d0d12]/75 border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_24px_48px_-12px_rgba(0,0,0,0.7)]'
                : 'bg-white/80 border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_24px_48px_-12px_rgba(15,23,42,0.12)]'
            }`}>
              
              {/* Top Glass Header Bar */}
              <div className={`flex items-center justify-between px-6 py-3.5 border-b text-xs font-mono z-20 relative backdrop-blur-md ${
                isDark 
                  ? 'border-white/10 bg-[#0d0d12]/60' 
                  : 'border-slate-200/80 bg-white/60'
              }`}>
                <span className={`flex items-center gap-2 font-semibold ${
                  isDark ? 'text-cyan-300' : 'text-blue-700'
                }`}>
                  <Cpu className="w-3.5 h-3.5" />
                  <span>MALEPATI RAM LOKESH</span>
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                  isDark 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                    : 'bg-emerald-50 border-emerald-300 text-emerald-700'
                }`}>
                  SDE READY
                </span>
              </div>

              {/* The Professional Photograph with Seamless Blend */}
              <div className="relative w-full overflow-hidden flex items-end justify-center pt-4">
                
                {/* Backdrop radial lighting */}
                <div className={`absolute inset-0 pointer-events-none ${
                  isDark 
                    ? 'bg-radial-gradient from-cyan-500/10 via-transparent to-dark-950/40' 
                    : 'bg-radial-gradient from-sky-400/15 via-transparent to-white/40'
                }`} />

                {/* Natural Aspect Ratio & Gradient Mask */}
                <img
                  src="/images/professional-cutout.png"
                  alt="Malepati Ram Lokesh - Software Engineer"
                  onError={(e) => {
                    e.currentTarget.src = "/images/professional.png";
                  }}
                  className="relative z-10 w-full max-h-[480px] sm:max-h-[540px] object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,210,255,0.18)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] select-none transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Floating Top-Right Pill Badge */}
                <div className={`absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full text-xs font-mono shadow-xl backdrop-blur-xl flex items-center gap-1.5 border ${
                  isDark 
                    ? 'bg-[#030305]/85 border-cyan-400/40 text-cyan-300' 
                    : 'bg-white/90 border-blue-400/40 text-blue-700'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CGPA: 9.17 / 10</span>
                </div>

                {/* Floating Bottom-Left Pill Badge */}
                <div className={`absolute bottom-6 left-4 z-20 px-4 py-1.5 rounded-2xl text-xs font-mono shadow-xl backdrop-blur-xl flex items-center gap-2 border ${
                  isDark 
                    ? 'bg-[#030305]/85 border-white/15 text-slate-200' 
                    : 'bg-white/90 border-slate-200 text-slate-800'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>B.Tech CSE '27</span>
                </div>
              </div>

              {/* Bottom Card Footer Bar */}
              <div className={`px-6 py-3.5 border-t flex items-center justify-between text-xs font-mono z-20 relative backdrop-blur-md ${
                isDark 
                  ? 'border-white/10 bg-[#0d0d12]/70 text-slate-400' 
                  : 'border-slate-200/80 bg-white/70 text-slate-600'
              }`}>
                <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Open to SDE Roles</span>
                </span>
                <span>KLEF, Vijayawada</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Explore Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className={`flex items-center justify-between pt-6 border-t text-xs font-mono ${
          isDark ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-500'
        }`}
      >
        <a 
          href="#about"
          className={`inline-flex items-center gap-2 transition-colors group ${
            isDark ? 'hover:text-cyan-400' : 'hover:text-blue-600'
          }`}
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
          <span className="tracking-widest uppercase">SCROLL TO EXPLORE TIMELINE</span>
        </a>

        <div className="hidden sm:flex items-center gap-4">
          <span>PORTFOLIO // MALEPATI RAM LOKESH</span>
          <span>•</span>
          <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>B.TECH CSE 2027</span>
        </div>
      </motion.div>
    </section>
  );
}
