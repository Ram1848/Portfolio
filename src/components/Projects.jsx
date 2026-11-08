import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Mic, 
  Navigation, 
  ShieldAlert, 
  Users,
  ArrowUpRight, 
  Maximize2
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const isDark = theme === 'dark';

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const renderProjectVisual = (project) => {
    if (project.id === 'stocksathi-ai') {
      return (
        <div className={`relative w-full h-56 sm:h-64 rounded-2xl border p-5 flex flex-col justify-between overflow-hidden transition-colors ${
          isDark 
            ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 border-white/10 group-hover:border-cyan-500/40' 
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200 group-hover:border-blue-400'
        }`}>
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono z-10">
            <span className={`flex items-center gap-2 font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              VOICE PIPELINE // TELUGU + ENGLISH
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
              isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              AI ASSISTANT ACTIVE
            </span>
          </div>

          {/* Voice Waveform Mockup */}
          <div className="my-auto space-y-3 z-10">
            <div className={`p-3 rounded-xl border flex items-center justify-between ${
              isDark ? 'bg-dark-950/80 border-cyan-500/20' : 'bg-white/90 border-blue-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
                  <Mic className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-medium ${isDark ? 'text-cyan-300' : 'text-slate-900'}`}>
                    "10 basmati rice bags stock lo add cheyyi"
                  </p>
                  <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Telugu voice query processed in 280ms
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-semibold">
                VERIFIED
              </span>
            </div>

            {/* Audio Waveform */}
            <div className="flex items-center justify-center gap-1.5 h-8">
              {[40, 65, 30, 85, 100, 75, 45, 90, 60, 35, 70, 95, 50, 80, 40].map((h, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-blue-500 to-cyan-400 group-hover:scale-y-125 transition-transform duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom telemetry */}
          <div className={`flex items-center justify-between text-[11px] font-mono z-10 pt-2 border-t ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Confirmation: Smart Voice Barrier</span>
            <span className={isDark ? 'text-cyan-400' : 'text-blue-600 font-semibold'}>MySQL Persisted</span>
          </div>
        </div>
      );
    }

    if (project.id === 'jurniq') {
      return (
        <div className={`relative w-full h-56 sm:h-64 rounded-2xl border p-5 flex flex-col justify-between overflow-hidden transition-colors ${
          isDark 
            ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 border-white/10 group-hover:border-sky-500/40' 
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200 group-hover:border-sky-400'
        }`}>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono z-10">
            <span className={`flex items-center gap-2 font-semibold ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
              <Navigation className="w-3.5 h-3.5" />
              SOCKET.IO DISPATCH ENGINE
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-semibold">
              LIVE RADAR
            </span>
          </div>

          {/* Map Vector Graphic Simulation */}
          <div className={`my-auto relative p-4 rounded-xl border overflow-hidden z-10 ${
            isDark ? 'bg-dark-950/70 border-white/5' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
                <div className={`text-[11px] font-mono font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  <span>Vijayawada Central</span>
                </div>
              </div>

              <div className="flex-1 mx-4 h-[2px] bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 relative">
                <div className="absolute -top-1.5 left-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_#38bdf8] animate-pulse" />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20" />
                <div className={`text-[11px] font-mono font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  <span>KLEF Campus</span>
                </div>
              </div>
            </div>

            <div className={`mt-3 flex items-center justify-between text-[10px] font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <span>ETA: 8 mins • 4.2 km</span>
              <span className={isDark ? 'text-sky-300 font-semibold' : 'text-sky-600 font-semibold'}>Driver Matching: 98.6%</span>
            </div>
          </div>

          <div className={`flex items-center justify-between text-[11px] font-mono z-10 pt-2 border-t ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Google Maps API Matrix</span>
            <span className={isDark ? 'text-sky-400 font-semibold' : 'text-sky-600 font-semibold'}>Real-time WebSockets</span>
          </div>
        </div>
      );
    }

    // Malware Lab
    return (
      <div className={`relative w-full h-56 sm:h-64 rounded-2xl border p-5 flex flex-col justify-between overflow-hidden transition-colors ${
        isDark 
          ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 border-white/10 group-hover:border-blue-500/40' 
          : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200 group-hover:border-blue-400'
      }`}>
        <div className="absolute top-0 right-1/4 w-44 h-44 bg-blue-600/10 rounded-full blur-2xl" />

        <div className="flex items-center justify-between text-xs font-mono z-10">
          <span className={`flex items-center gap-2 font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
            <ShieldAlert className="w-3.5 h-3.5" />
            ML HEURISTIC SCANNER
          </span>
          <span className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-mono font-semibold">
            SUSPICIOUS BINARY
          </span>
        </div>

        <div className={`my-auto p-3.5 rounded-xl border space-y-2 z-10 ${
          isDark ? 'bg-dark-950/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Sample_Trojan_32.bin</span>
            <span className="text-amber-500 font-bold">Threat Score: 89 / 100</span>
          </div>

          <div className={`font-mono text-[10px] p-2 rounded border overflow-hidden ${
            isDark ? 'bg-dark-900/90 border-white/5 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}>
            <span className={isDark ? 'text-cyan-400' : 'text-blue-600'}>4D 5A 90 00 03 00 00 00</span> | MZ Header Match <br />
            <span className="text-red-500">E8 00 00 00 00 58 83 C0</span> | Injected Shellcode Hook
          </div>

          <div className={`flex items-center justify-between text-[10px] font-mono ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <span>Classifier: Random Forest + PE</span>
            <span className={isDark ? 'text-cyan-400 font-semibold' : 'text-blue-600 font-semibold'}>IOCs Extracted: 14</span>
          </div>
        </div>

        <div className={`flex items-center justify-between text-[11px] font-mono z-10 pt-2 border-t ${
          isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
        }`}>
          <span>Sigma Rules Auto-Generated</span>
          <span className={isDark ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold'}>Python Flask Core</span>
        </div>
      </div>
    );

    if (project.id === 'employee-management') {
      return (
        <div className={`relative w-full h-56 sm:h-64 rounded-2xl border p-5 flex flex-col justify-between overflow-hidden transition-colors ${
          isDark 
            ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-850 border-white/10 group-hover:border-amber-500/40' 
            : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 border-slate-200 group-hover:border-amber-400'
        }`}>
          <div className="absolute top-0 right-1/4 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl" />

          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono z-10">
            <span className={`flex items-center gap-2 font-semibold ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
              <Users className="w-3.5 h-3.5" />
              EMS DIRECTORY MATRIX
            </span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[10px] font-mono font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>IN PROGRESS</span>
            </span>
          </div>

          {/* Table Preview */}
          <div className={`my-auto p-3.5 rounded-xl border space-y-2 z-10 ${
            isDark ? 'bg-dark-950/80 border-white/10' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className={`grid grid-cols-12 gap-1 text-[10px] font-mono pb-1 border-b ${
              isDark ? 'border-white/10 text-slate-500' : 'border-slate-200 text-slate-400 font-semibold'
            }`}>
              <span className="col-span-2">ID</span>
              <span className="col-span-4">EMPLOYEE</span>
              <span className="col-span-4">EMAIL</span>
              <span className="col-span-2 text-right">ACTION</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="grid grid-cols-12 gap-1 items-center">
                <span className={`col-span-2 text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>#101</span>
                <span className={`col-span-4 font-medium truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Ram Lokesh</span>
                <span className={`col-span-4 text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ram@corp.io</span>
                <span className="col-span-2 text-right">
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">EDIT</span>
                </span>
              </div>
              <div className="grid grid-cols-12 gap-1 items-center">
                <span className={`col-span-2 text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>#102</span>
                <span className={`col-span-4 font-medium truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>S. Sharma</span>
                <span className={`col-span-4 text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>sharma@corp.io</span>
                <span className="col-span-2 text-right">
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20">EDIT</span>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`flex items-center justify-between text-[11px] font-mono z-10 pt-2 border-t ${
            isDark ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>REST API: /api/emp</span>
            <span className={isDark ? 'text-amber-400 font-semibold' : 'text-amber-600 font-semibold'}>Axios • React Router</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 3.0 SELECTED WORKS</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Featured Engineering Projects
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Production-grade applications and systems demonstrating end-to-end full stack architecture, applied artificial intelligence, and robust software engineering practices.
        </p>
      </div>

      {/* Projects Grid: 4 Responsive Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden apple-glass-card`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-b ${project.accentColor} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform`} />

            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4 text-xs font-mono">
                <span className={`font-bold tracking-wider ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                  // PROJECT {project.number}
                </span>
                <div className="flex items-center gap-2">
                  {project.status === 'In Progress' && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-1.5 shadow-[0_0_8px_rgba(245,158,11,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>IN PROGRESS</span>
                    </span>
                  )}
                  <span className={`px-2.5 py-1 rounded-full text-[11px] border ${
                    isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Bespoke UI Mockup Visual */}
              <div className="mb-6 cursor-pointer" onClick={() => handleOpenModal(project)}>
                {renderProjectVisual(project)}
              </div>

              {/* Title & Tagline */}
              <h3 
                onClick={() => handleOpenModal(project)}
                className={`font-editorial text-2xl font-bold mb-2 transition-colors cursor-pointer flex items-center justify-between ${
                  isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'
                }`}
              >
                <span>{project.title}</span>
                <ArrowUpRight className={`w-5 h-5 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isDark ? 'text-slate-500 group-hover:text-cyan-400' : 'text-slate-400 group-hover:text-blue-600'
                }`} />
              </h3>

              <p className={`text-xs sm:text-sm font-sans leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {project.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-xl text-[11px] font-mono border ${
                      isDark 
                        ? 'bg-dark-900/70 border-white/5 text-cyan-300' 
                        : 'bg-slate-100 border-slate-200 text-blue-700 font-medium'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-2.5 ${
              isDark ? 'border-white/5' : 'border-slate-200'
            }`}>
              <button
                onClick={() => handleOpenModal(project)}
                className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors py-1.5 ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900 font-semibold'
                }`}
              >
                <Maximize2 className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                <span>Case Study</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border flex items-center gap-1.5 transition-all duration-200 ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-white/10 text-slate-300 hover:text-white' 
                      : 'bg-white border-slate-200 hover:border-blue-500/50 hover:bg-slate-50 text-slate-700 hover:text-slate-950 shadow-sm'
                  }`}
                  title={`${project.title} GitHub Repository`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3.5 py-1.5 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all duration-200 shadow-md ${
                      isDark 
                        ? 'bg-white text-dark-950 hover:bg-slate-200 shadow-white/5' 
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10'
                    }`}
                    title={`${project.title} Live Demo`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
