import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Copy, 
  Check, 
  FileDown, 
  Github, 
  Linkedin, 
  Sparkles, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#38bdf8', '#ffffff']
      });
    }, 1000);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#2563eb', '#ffffff']
    });
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-cyan-400' : 'text-blue-600'
        }`}>
          <span className={`w-8 h-[1px] ${isDark ? 'bg-cyan-400/60' : 'bg-blue-600/60'}`} />
          <span>// 8.0 TRANSMISSION PROTOCOL</span>
        </div>
        <h2 className={`font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          LET'S BUILD SOMETHING GREAT.
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl font-sans ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Currently open for Software Engineer opportunities, internships, and technical collaborations. Reach out directly or dispatch a transmission.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Terminal Protocol Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`lg:col-span-5 rounded-[32px] p-7 sm:p-9 md:p-10 flex flex-col justify-between relative overflow-hidden apple-glass-card`}
        >
          <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
            isDark ? 'bg-cyan-500/10' : 'bg-blue-400/10'
          }`} />

          <div>
            {/* Terminal Window Header */}
            <div className={`flex items-center justify-between pb-4 mb-6 border-b font-mono text-xs ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className={`ml-2 ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>TERMINAL_DISPATCH // v2.7</span>
              </div>
              <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>STATUS: ONLINE</span>
            </div>

            <div className="space-y-4 font-mono text-xs mb-8">
              <div className={`p-4 rounded-2xl border space-y-1.5 ${
                isDark ? 'bg-dark-950/70 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`block font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>[+] EMAIL PROTOCOL</span>
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-semibold truncate ${isDark ? 'text-cyan-300' : 'text-blue-700'}`}>
                    {personalInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className={`p-1.5 rounded-lg border transition-colors shrink-0 ${
                      isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1.5 ${
                isDark ? 'bg-dark-950/70 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`block font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>[+] PHONE DIRECT</span>
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {personalInfo.phone}
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className={`p-1.5 rounded-lg border transition-colors shrink-0 ${
                      isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1.5 ${
                isDark ? 'bg-dark-950/70 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`block font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>[+] LOCATION NODE</span>
                <p className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Vijayawada, Andhra Pradesh, India</p>
              </div>

              <div className={`p-4 rounded-2xl border space-y-1.5 ${
                isDark ? 'bg-dark-950/70 border-white/5' : 'bg-slate-50 border-slate-200'
              }`}>
                <span className={`block font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>[+] CANDIDATE STATUS</span>
                <p className="text-emerald-500 font-semibold">Ready for Software Engineering Roles</p>
              </div>
            </div>
          </div>

          {/* Socials & Download Resume */}
          <div className={`space-y-4 pt-6 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <a
              href={personalInfo.resumePath}
              download="Malepati_Ram_Lokesh_Resume.pdf"
              onClick={handleDownloadResume}
              className={`w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                isDark 
                  ? 'bg-white text-dark-950 hover:bg-slate-200 shadow-white/5' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10'
              }`}
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>

            <div className="flex items-center justify-center gap-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-3 rounded-2xl border text-xs font-mono flex items-center justify-center gap-2 transition-colors ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white' 
                    : 'bg-slate-100 border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-slate-950 font-semibold'
                }`}
              >
                <Linkedin className="w-4 h-4 text-cyan-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-3 rounded-2xl border text-xs font-mono flex items-center justify-center gap-2 transition-colors ${
                  isDark 
                    ? 'bg-white/5 border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white' 
                    : 'bg-slate-100 border-slate-200 hover:border-blue-500/40 text-slate-700 hover:text-slate-950 font-semibold'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Glassmorphic Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`lg:col-span-7 rounded-[32px] p-7 sm:p-9 md:p-12 relative overflow-hidden apple-glass-card`}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20">
                <Check className="w-8 h-8" />
              </div>
              <h3 className={`font-editorial text-2xl sm:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}>
                Transmission Received!
              </h3>
              <p className={`text-sm max-w-md mx-auto font-sans leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Thank you for reaching out, <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{formState.firstName || 'Friend'}</span>. I'll review your message and reply via <span className="font-semibold">{formState.email || 'email'}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
                }}
                className={`mt-6 px-6 py-2.5 rounded-full text-xs font-mono border transition-colors ${
                  isDark ? 'text-cyan-400 border-cyan-400/30 hover:bg-cyan-500/10' : 'text-blue-600 border-blue-400/30 hover:bg-blue-50'
                }`}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-2">
                <span className={`font-display text-lg sm:text-xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Direct Message Transmission
                </span>
                <span className={`text-xs font-mono flex items-center gap-1.5 font-semibold ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SECURE CHANNEL</span>
                </span>
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-xs font-mono block ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.firstName}
                    onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                    placeholder="John"
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-sans focus:outline-none transition-colors ${
                      isDark 
                        ? 'bg-dark-950/80 border-white/10 text-white placeholder-slate-600 focus:border-cyan-400' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-sm'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono block ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formState.lastName}
                    onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                    placeholder="Doe"
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-sans focus:outline-none transition-colors ${
                      isDark 
                        ? 'bg-dark-950/80 border-white/10 text-white placeholder-slate-600 focus:border-cyan-400' 
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-sm'
                    }`}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className={`text-xs font-mono block ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john.doe@company.com"
                  className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-sans focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-dark-950/80 border-white/10 text-white placeholder-slate-600 focus:border-cyan-400' 
                      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-sm'
                  }`}
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className={`text-xs font-mono block ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Software Engineering Opportunity / Project Discussion"
                  className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-sans focus:outline-none transition-colors ${
                    isDark 
                      ? 'bg-dark-950/80 border-white/10 text-white placeholder-slate-600 focus:border-cyan-400' 
                      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-sm'
                  }`}
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className={`text-xs font-mono block ${isDark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message or inquiry here..."
                  className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-sans focus:outline-none transition-colors resize-none ${
                    isDark 
                      ? 'bg-dark-950/80 border-white/10 text-white placeholder-slate-600 focus:border-cyan-400' 
                      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-sm'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-xl group ${
                  isDark 
                    ? 'bg-white text-dark-950 hover:bg-slate-200 shadow-white/5' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10'
                }`}
              >
                {isSubmitting ? (
                  <span className="font-mono text-xs">TRANSMITTING...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isDark ? 'text-cyan-600' : 'text-blue-400'
                    }`} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
