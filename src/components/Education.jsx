import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const edu = education[0];

  return (
    <section id="education" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 5.0 ACADEMIC BACKGROUND</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Education & Foundations
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Rigorous academic training in core computer science, software engineering principles, algorithms, and computing systems.
        </p>
      </div>

      {/* Main Education Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`rounded-[32px] p-7 sm:p-9 md:p-12 relative overflow-hidden apple-glass-card`}
      >
        <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-blue-600/10' : 'bg-blue-400/10'
        }`} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-semibold border ${
                isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}>
                {edu.status}
              </span>
              <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
              <div className={`flex items-center gap-1.5 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                <span>{edu.period}</span>
              </div>
              <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
              <div className={`flex items-center gap-1.5 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>{edu.location}</span>
              </div>
            </div>

            <div>
              <h3 className={`font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {edu.institution}
              </h3>
              <p className={`font-display text-lg sm:text-xl font-semibold ${
                isDark ? 'text-cyan-300' : 'text-blue-700'
              }`}>
                {edu.degree}
              </p>
            </div>

            <p className={`text-sm sm:text-base font-sans leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {edu.description}
            </p>

            {/* Highlights List */}
            <div className={`space-y-3 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
              <span className={`text-xs font-mono uppercase tracking-wider block mb-2 font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                ACADEMIC HIGHLIGHTS
              </span>
              {edu.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span className={`text-xs sm:text-sm font-sans ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlight Box (CGPA) */}
          <div className={`lg:col-span-4 flex flex-col justify-center items-center p-8 sm:p-10 rounded-[28px] border text-center relative ${
            isDark 
              ? 'bg-dark-900/60 border-white/10' 
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-500">
              <Award className="w-7 h-7" />
            </div>

            <span className={`text-xs font-mono uppercase tracking-widest mb-1 font-semibold ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              CUMULATIVE GPA
            </span>

            <div className={`font-editorial text-4xl sm:text-5xl font-bold mb-2 ${
              isDark ? 'text-white text-glow' : 'text-slate-950'
            }`}>
              {edu.cgpa}
            </div>

            <span className={`text-xs font-mono px-3.5 py-1 rounded-full border mb-4 font-semibold ${
              isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              Academic Excellence
            </span>

            <p className={`text-xs leading-relaxed max-w-xs font-sans ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Maintained top tier academic consistency across all computer science semesters.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
