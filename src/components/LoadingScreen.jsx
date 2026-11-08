import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Total duration approximately 2.2 seconds with smooth natural acceleration
    const startTime = performance.now();
    const duration = 2100; // ms

    let animId;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      // Smooth cubic bezier-like ease out
      const eased = t < 0.7 ? Math.pow(t / 0.7, 1.2) * 0.85 : 0.85 + (t - 0.7) / 0.3 * 0.15;
      const currentVal = Math.max(1, Math.min(Math.round(eased * 100), 100));

      setProgress(currentVal);

      if (t < 1) {
        animId = requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Brief pause at 100% so user sees completion, then seamless liquid curtain reveal
        setTimeout(() => {
          onComplete();
        }, 180);
      }
    };

    animId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#030305] text-slate-100 flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
    >
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div 
            className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none"
            style={{ backgroundSize: '40px 40px' }}
          />

          {/* Top Header Telemetry */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="tracking-widest uppercase">RAM LOKESH // PORTFOLIO</span>
            </div>
            <span className="text-slate-500 text-[11px] font-mono">B.TECH CSE '27</span>
          </div>

          {/* Central Percentage Counter & Progress Line */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center max-w-md mx-auto w-full">
            
            {/* Percentage Display */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative mb-6"
            >
              <span className="font-editorial text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-white block">
                {progress}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 text-5xl sm:text-6xl md:text-7xl ml-1">
                  %
                </span>
              </span>
            </motion.div>

            {/* Thin Animated Progress Bar */}
            <div className="w-full max-w-xs sm:max-w-sm h-[2px] bg-white/10 rounded-full overflow-hidden relative mb-4">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 transition-all duration-75 ease-out shadow-[0_0_12px_#38bdf8]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Micro Status */}
            <div className="flex items-center justify-between w-full max-w-xs sm:max-w-sm text-[10px] font-mono text-slate-400 tracking-wider">
              <span>LOADING EXPERIENCE</span>
              <span className="text-cyan-400 font-semibold">{progress === 100 ? 'READY' : 'INITIALIZING'}</span>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>APPLE LIQUID GLASS INTERFACE</span>
            <span>SYSTEM ID: SDE_2027</span>
          </div>
        </div>
      );
    }
