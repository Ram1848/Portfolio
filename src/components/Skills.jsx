import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Binary, 
  Layers, 
  Server,
  Database, 
  Wrench, 
  Workflow, 
  CheckCircle2
} from 'lucide-react';
import { skillCategories, allSkillsList } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const isDark = theme === 'dark';

  const categoryIcons = {
    programming: <Code2 className="w-5 h-5 text-cyan-500" />,
    frontend: <Layers className="w-5 h-5 text-blue-500" />,
    backend: <Server className="w-5 h-5 text-emerald-500" />,
    database: <Database className="w-5 h-5 text-teal-500" />,
    'core-cs': <Binary className="w-5 h-5 text-sky-500" />,
    tools: <Wrench className="w-5 h-5 text-indigo-500" />,
    practices: <Workflow className="w-5 h-5 text-purple-500" />
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-14">
        <div className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 2.0 TECHNICAL STACK</span>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Technologies I Work With
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Core technical competencies across programming, computer science foundations, full-stack development, and modern developer tooling.
        </p>
      </div>

      {/* Marquee Banner Ribbon */}
      <div className={`relative w-full overflow-hidden mb-16 py-3.5 border-y ${
        isDark ? 'border-white/5 bg-white/[0.01]' : 'border-slate-200 bg-slate-50/50'
      }`}>
        <div className={`absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-r ${
          isDark ? 'from-[#030305] to-transparent' : 'from-[#f8fafc] to-transparent'
        }`} />
        <div className={`absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none bg-gradient-to-l ${
          isDark ? 'from-[#030305] to-transparent' : 'from-[#f8fafc] to-transparent'
        }`} />

        <div className="flex gap-4 w-max animate-marquee">
          {[...allSkillsList, ...allSkillsList].map((skill, idx) => (
            <div
              key={`${skill}-${idx}`}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono flex items-center gap-2 border shadow-sm transition-all duration-300 ${
                isDark 
                  ? 'bg-[#0d0d12]/80 border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-white' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-blue-500/40 hover:text-slate-950'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
            activeCategory === 'all'
              ? isDark 
                ? 'bg-white text-dark-950 font-bold shadow-lg shadow-white/5' 
                : 'bg-slate-900 text-white font-bold shadow-lg shadow-slate-900/10'
              : isDark
                ? 'bg-[#0d0d12]/70 text-slate-400 hover:text-white border border-white/10'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
          }`}
        >
          All Categories ({skillCategories.length})
        </button>

        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
              activeCategory === cat.id
                ? isDark
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                : isDark
                  ? 'bg-[#0d0d12]/70 text-slate-400 hover:text-white border border-white/10'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Interactive Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((cat, index) => (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden apple-glass-card`}
            >
              {/* Subtle hover gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                isDark 
                  ? 'bg-gradient-to-br from-cyan-500/[0.04] to-transparent' 
                  : 'bg-gradient-to-br from-blue-500/[0.04] to-transparent'
              }`} />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl border transition-colors ${
                    isDark 
                      ? 'bg-white/5 border-white/10 group-hover:bg-cyan-500/10' 
                      : 'bg-slate-100 border-slate-200 group-hover:bg-blue-50'
                  }`}>
                    {categoryIcons[cat.id]}
                  </div>
                  <span className={`text-[11px] font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {cat.skills.length} competencies
                  </span>
                </div>

                <h3 className={`font-display text-xl sm:text-2xl font-bold mb-2 transition-colors ${
                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  {cat.category}
                </h3>

                <p className={`text-xs font-sans mb-6 leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {cat.description}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5 border ${
                        isDark 
                          ? 'bg-dark-900/60 border-white/5 text-slate-200 group-hover:border-white/10' 
                          : 'bg-slate-50 border-slate-200 text-slate-700 group-hover:border-slate-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between text-[11px] font-mono ${
                isDark ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-400'
              }`}>
                <span>VERIFIED SKILLSET</span>
                <span className={isDark ? 'text-cyan-400/80' : 'text-blue-600/80 font-semibold'}>CLASS OF 2027</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
