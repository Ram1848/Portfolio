import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 6.0 INDUSTRY CREDENTIALS</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Cloud & Platform Certifications
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Officially validated knowledge in distributed cloud architecture, security principles, and enterprise cloud infrastructure.
        </p>
      </div>

      {/* Certifications Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`rounded-[32px] p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden apple-glass-card`}
          >
            {/* Ambient Lighting */}
            <div className={`absolute top-0 right-0 w-52 h-52 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform ${
              isDark ? 'bg-cyan-500/10' : 'bg-blue-400/10'
            }`} />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-cyan-400 group-hover:bg-cyan-500/10' 
                      : 'bg-slate-100 border-slate-200 text-blue-600 group-hover:bg-blue-50'
                  }`}>
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <span className={`text-xs font-mono font-bold block uppercase tracking-wider ${
                      isDark ? 'text-cyan-400' : 'text-blue-700'
                    }`}>
                      {cert.issuer}
                    </span>
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      ID: {cert.id}
                    </span>
                  </div>
                </div>

                <div className={`px-3.5 py-1 rounded-full text-xs font-mono border font-semibold ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  {cert.year}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className={`font-display text-xl sm:text-2xl font-bold mb-3 transition-colors ${
                isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
              }`}>
                {cert.title}
              </h3>

              <p className={`text-xs sm:text-sm font-sans leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {cert.description}
              </p>

              {/* Skills covered chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-xl text-xs font-mono flex items-center gap-1.5 border ${
                      isDark ? 'bg-dark-900/60 border-white/5 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700 font-medium'
                    }`}
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-500" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Footer verification */}
            <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
              isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Credential</span>
              </span>
              <span>Cloud Competency</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
