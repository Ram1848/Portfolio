import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Flame, 
  Terminal, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Trophy
} from 'lucide-react';
import { codingProfiles } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function CodingProfiles() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const profileIcons = {
    LeetCode: <Code2 className="w-5 h-5 text-amber-500" />,
    CodeChef: <Flame className="w-5 h-5 text-orange-500" />,
    HackerRank: <Terminal className="w-5 h-5 text-emerald-500" />,
    GitHub: <Github className="w-5 h-5 text-slate-400" />,
    LinkedIn: <Linkedin className="w-5 h-5 text-blue-500" />
  };

  return (
    <section id="profiles" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 7.0 COMPETITIVE PROGRAMMING & REPOSITORIES</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Coding Profiles & Achievements
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Algorithmic problem-solving tracks across major competitive platforms and open-source contributions.
        </p>
      </div>

      {/* Main Achievement Feature Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`rounded-[32px] p-7 sm:p-9 md:p-12 mb-10 relative overflow-hidden group shadow-2xl apple-glass-card`}
      >
        <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all ${
          isDark ? 'bg-cyan-500/10 group-hover:bg-cyan-500/20' : 'bg-blue-400/10 group-hover:bg-blue-400/20'
        }`} />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border ${
              isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <Trophy className="w-3.5 h-3.5" />
              <span>KEY ALGORITHMIC MILESTONE</span>
            </div>

            <h3 className={`font-editorial text-2xl sm:text-4xl md:text-5xl font-bold ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Solved <span className={isDark ? 'text-cyan-400' : 'text-blue-600'}>250+ Coding Problems</span>
            </h3>

            <p className={`text-sm sm:text-base max-w-2xl font-sans leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Demonstrated strong algorithmic foundations, time and space complexity optimizations, data structure mastery, and logical thinking across LeetCode and CodeChef challenges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className={`p-5 rounded-2xl border text-center w-full sm:w-auto ${
              isDark ? 'bg-dark-950/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`text-[10px] font-mono uppercase block ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>PLATFORMS</span>
              <span className={`font-display text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>LeetCode & CodeChef</span>
            </div>

            <div className={`p-5 rounded-2xl border text-center w-full sm:w-auto ${
              isDark ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-blue-50 border-blue-300'
            }`}>
              <span className={`text-[10px] font-mono uppercase block font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>DSA RECORD</span>
              <span className={`font-display text-lg font-bold ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>250+ Solved</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid of 5 Coding Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`rounded-[32px] p-7 flex flex-col justify-between group relative overflow-hidden apple-glass-card`}
          >
            <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl transition-all ${
              isDark ? 'bg-cyan-500/5 group-hover:bg-cyan-500/15' : 'bg-blue-400/5 group-hover:bg-blue-400/15'
            }`} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl border transition-colors ${
                  isDark ? 'bg-white/5 border-white/10 group-hover:bg-cyan-500/10' : 'bg-slate-100 border-slate-200 group-hover:bg-blue-50'
                }`}>
                  {profileIcons[profile.name]}
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono border font-semibold ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}>
                  {profile.badge}
                </span>
              </div>

              <h3 className={`font-display text-xl sm:text-2xl font-bold mb-1 transition-colors flex items-center justify-between ${
                isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
              }`}>
                <span>{profile.name}</span>
                <ExternalLink className={`w-4 h-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isDark ? 'text-slate-500 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-600'
                }`} />
              </h3>

              <p className={`text-xs font-mono mb-3 font-semibold ${
                isDark ? 'text-cyan-400/80' : 'text-blue-600/80'
              }`}>
                {profile.category}
              </p>

              <p className={`text-xs font-sans leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {profile.highlight}
              </p>
            </div>

            <div className={`pt-4 mt-6 border-t flex items-center justify-between text-xs font-mono ${
              isDark ? 'border-white/5 text-slate-500' : 'border-slate-200 text-slate-400'
            }`}>
              <span>PROFILE LINK</span>
              <span className={`font-semibold transition-colors ${
                isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
              }`}>
                View Profile &rarr;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
