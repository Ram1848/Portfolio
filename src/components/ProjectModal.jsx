import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  const isDark = theme === 'dark';

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop with Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`fixed inset-0 backdrop-blur-md ${
            isDark ? 'bg-black/80' : 'bg-slate-900/40'
          }`}
        />

        {/* Liquid Glass Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`relative w-full max-w-3xl rounded-[32px] border shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col apple-glass ${
            isDark
              ? 'bg-[#0d0d12]/90 border-white/15 text-slate-100 shadow-black/90'
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-900/15'
          }`}
        >
          {/* Header */}
          <div className={`p-6 sm:p-8 border-b flex items-start justify-between relative ${
            isDark ? 'border-white/10 bg-dark-900/60' : 'border-slate-200 bg-slate-50/70'
          }`}>
            <div className="space-y-1">
              <div className={`flex items-center gap-2 text-xs font-mono font-semibold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                <span>PROJECT // {project.number}</span>
                <span>•</span>
                {project.status === 'In Progress' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1 shadow-[0_0_8px_rgba(245,158,11,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>IN PROGRESS</span>
                  </span>
                )}
                <span className={`px-2 py-0.5 rounded-full border ${
                  isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-blue-50 border-blue-200 text-blue-700'
                }`}>
                  {project.badge}
                </span>
              </div>
              <h3 className={`font-editorial text-2xl sm:text-3xl font-bold ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                {project.title}
              </h3>
              <p className={`text-xs sm:text-sm font-sans ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors shrink-0 ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className={`flex border-b px-6 sm:px-8 gap-4 overflow-x-auto ${
            isDark ? 'border-white/5 bg-dark-950/40' : 'border-slate-200 bg-white'
          }`}>
            {['overview', 'architecture', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 text-xs sm:text-sm font-mono uppercase tracking-wider transition-colors relative ${
                  activeTab === tab
                    ? isDark ? 'text-cyan-400 font-bold' : 'text-blue-600 font-bold'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="modalTabUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDark ? 'bg-cyan-400' : 'bg-blue-600'
                    }`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                  }`}>
                    Executive Summary
                  </h4>
                  <p className={`text-base leading-relaxed font-sans ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {project.detailedDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                  }`}>
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono border ${
                          isDark 
                            ? 'bg-white/5 border-white/10 text-cyan-300' 
                            : 'bg-slate-100 border-slate-200 text-blue-700 font-semibold'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {Object.entries(project.stats).map(([k, v]) => (
                    <div key={k} className={`p-4 rounded-2xl border ${
                      isDark ? 'bg-dark-900/60 border-white/5' : 'bg-slate-50 border-slate-200 shadow-sm'
                    }`}>
                      <span className={`text-[10px] font-mono uppercase block ${
                        isDark ? 'text-slate-500' : 'text-slate-400'
                      }`}>{k}</span>
                      <span className={`text-xs font-semibold mt-1 block ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                  }`}>
                    System Architecture & Design Patterns
                  </h4>
                  <p className={`text-sm leading-relaxed font-sans mb-4 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {project.architecture}
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border font-mono text-xs space-y-2 ${
                  isDark ? 'bg-dark-950 border-white/10 text-slate-300' : 'bg-slate-900 border-slate-800 text-slate-100'
                }`}>
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
                    <span>ARCHITECTURE_PIPELINE.sh</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="text-cyan-400 font-semibold">// Micro-component workflow</div>
                  <div className="text-slate-300">1. Client Tier: React.js UI + Responsive State Store</div>
                  <div className="text-slate-300">2. Intermediary: Asynchronous Event Bus / REST Protocol Handlers</div>
                  <div className="text-slate-300">3. Processing Engine: Machine Learning Models & Speech Parser</div>
                  <div className="text-slate-300">4. Data Persistence: Relational Schemas & Transaction Isolation</div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                }`}>
                  Core Engineering Capabilities
                </h4>
                <div className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border flex items-start gap-3 ${
                        isDark ? 'bg-dark-900/60 border-white/5' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span className={`text-xs sm:text-sm ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className={`p-6 sm:p-8 border-t flex flex-wrap items-center justify-between gap-4 mt-auto ${
            isDark ? 'border-white/10 bg-dark-900/60' : 'border-slate-200 bg-slate-50/70'
          }`}>
            <div className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              <span>* Repository and live deployment links</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-xl text-xs font-mono border flex items-center gap-2 transition-colors ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-white/20 text-slate-200 hover:text-white' 
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 shadow-sm'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all shadow-md ${
                    isDark 
                      ? 'bg-cyan-500 text-dark-950 hover:bg-cyan-400 shadow-cyan-500/20' 
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20'
                  }`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
