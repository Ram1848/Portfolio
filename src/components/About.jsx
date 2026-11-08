import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Code, BrainCircuit, Sparkles, Check } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const statIcons = [
    <Award className="w-5 h-5 text-amber-500" />,
    <GraduationCap className="w-5 h-5 text-cyan-500" />,
    <Code className="w-5 h-5 text-sky-500" />,
    <BrainCircuit className="w-5 h-5 text-purple-500" />
  ];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 1.0 INTRODUCTION</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Engineering with Purpose.
        </h2>
      </div>

      {/* Main About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Candidate Snapshot Liquid Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`lg:col-span-4 rounded-[32px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 apple-glass-card`}
        >
          {/* Subtle Ambient Light */}
          <div className={`absolute top-0 right-0 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-all ${
            isDark ? 'bg-cyan-500/10' : 'bg-blue-400/10'
          }`} />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border ${
                isDark 
                  ? 'bg-white/5 border-white/10 text-slate-300' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>CANDIDATE OVERVIEW</span>
              </div>

              {/* Portrait Thumbnail */}
              <div className={`w-14 h-14 rounded-2xl overflow-hidden border shadow-lg ${
                isDark 
                  ? 'border-cyan-400/30 bg-dark-950 shadow-cyan-500/10' 
                  : 'border-blue-400/30 bg-slate-100 shadow-blue-500/10'
              }`}>
                <img
                  src="/images/professional-cutout.png"
                  alt="Ram Lokesh"
                  onError={(e) => { e.currentTarget.src = "/images/professional.png"; }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <h3 className={`font-display text-2xl sm:text-3xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Malepati Ram Lokesh
            </h3>
            
            <p className={`text-sm font-mono mb-6 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              B.Tech Computer Science & Engineering
            </p>

            <div className={`space-y-3.5 text-xs font-mono ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <div className={`flex items-center justify-between py-2 border-b ${
                isDark ? 'border-white/5' : 'border-slate-200'
              }`}>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>INSTITUTION</span>
                <span className="font-semibold">KLEF, Vijayawada</span>
              </div>
              <div className={`flex items-center justify-between py-2 border-b ${
                isDark ? 'border-white/5' : 'border-slate-200'
              }`}>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>ACADEMIC STANDING</span>
                <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>9.17 / 10 CGPA</span>
              </div>
              <div className={`flex items-center justify-between py-2 border-b ${
                isDark ? 'border-white/5' : 'border-slate-200'
              }`}>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>GRADUATION CLASS</span>
                <span className="font-semibold">2027</span>
              </div>
              <div className={`flex items-center justify-between py-2 border-b ${
                isDark ? 'border-white/5' : 'border-slate-200'
              }`}>
                <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>PRIMARY FOCUS</span>
                <span className="font-semibold">Java & Full Stack</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className={`p-4 rounded-2xl border flex items-center gap-3.5 ${
              isDark 
                ? 'bg-dark-900/60 border-white/10' 
                : 'bg-white/90 border-slate-200 shadow-sm'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Targeting SDE Roles</p>
                <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Available for Summer / Fall Opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Editorial Narrative & Highlights Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col justify-between space-y-8"
        >
          {/* Main Story Container */}
          <div className={`rounded-[32px] p-7 sm:p-9 md:p-12 apple-glass-card`}>
            <h3 className={`font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-snug ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              "Building practical software, exploring emerging technologies, and solving complex problems."
            </h3>

            <p className={`text-base sm:text-lg leading-relaxed font-sans mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {personalInfo.aboutText}
            </p>

            {/* Core Pillars */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`text-xs font-mono block mb-1 font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                  01 / ARCHITECTURE
                </span>
                <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Clean & Scalable</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Robust Java and Full Stack web applications built for scale.</p>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`text-xs font-mono block mb-1 font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                  02 / PROBLEM SOLVING
                </span>
                <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Algorithmic Rigor</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>250+ solved challenges optimizing time and memory bounds.</p>
              </div>

              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`text-xs font-mono block mb-1 font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                  03 / APPLIED AI
                </span>
                <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Intelligent Systems</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Voice-guided UX, ML classifiers, and threat intelligence.</p>
              </div>
            </div>
          </div>

          {/* Highlights Bento Grid (4 Core Highlights) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-5 sm:p-6 rounded-[24px] flex flex-col justify-between group apple-glass-card`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border transition-colors ${
                    isDark 
                      ? 'bg-white/5 border-white/5 group-hover:bg-cyan-500/10' 
                      : 'bg-slate-100 border-slate-200 group-hover:bg-blue-50'
                  }`}>
                    {statIcons[index]}
                  </div>
                  <span className={`text-[10px] font-mono uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.highlight}
                  </span>
                </div>

                <div>
                  <div className={`font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {item.value}
                  </div>
                  <div className={`text-xs font-semibold mt-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {item.label}
                  </div>
                  <div className={`text-[11px] mt-0.5 line-clamp-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    {item.subtext}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
