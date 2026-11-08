import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 4.0 CAREER TIMELINE</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Industry Experience
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Practical application of machine learning, data engineering, and predictive modeling in industry virtual internship programs.
        </p>
      </div>

      {/* Experience Timeline Card */}
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-[32px] p-7 sm:p-9 md:p-12 relative overflow-hidden group apple-glass-card`}
          >
            {/* Ambient Corner Accent */}
            <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all ${
              isDark ? 'bg-cyan-500/10' : 'bg-blue-400/10'
            }`} />

            <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className={`px-3 py-1 rounded-full border font-semibold ${
                    isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-blue-50 border-blue-200 text-blue-700'
                  }`}>
                    {exp.type}
                  </span>
                  <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>•</span>
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{exp.organization}</span>
                </div>

                <h3 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold transition-colors ${
                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {exp.role}
                </h3>
              </div>

              <div className={`flex flex-wrap items-center gap-4 text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <div className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border ${
                  isDark ? 'bg-dark-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{exp.period}</span>
                </div>
                <div className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border ${
                  isDark ? 'bg-dark-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Highlights Breakdown */}
            <div className="py-6 space-y-4">
              <h4 className={`text-xs font-mono uppercase tracking-wider flex items-center gap-2 ${
                isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
              }`}>
                <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                <span>KEY CONTRIBUTIONS & DELIVERABLES</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exp.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className={`p-5 rounded-2xl border transition-colors flex flex-col justify-between ${
                      isDark ? 'bg-white/[0.02] border-white/5 hover:border-white/10' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                      </div>
                      <p className={`text-xs sm:text-sm leading-relaxed font-sans ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges */}
            <div className={`pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
              isDark ? 'border-white/5' : 'border-slate-200'
            }`}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-mono mr-2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>TECH DOMAINS:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-xl text-xs font-mono border ${
                      isDark ? 'bg-dark-900/60 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-xs font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Successfully Completed</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
