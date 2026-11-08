import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * LoadingScreen
 * 
 * 1. Counts smoothly from 1% to 100% (~2.0s)
 * 2. Immediately upon reaching 100%, gently slides upward as a whole page (0.85s)
 * 3. Incorporates subtle Apple Liquid Glass translucent blur, delicate cyan reflection,
 *    and a luminous traveling bottom border
 * 4. Calls onComplete() when upward slide finishes, enabling immediate scrolling & interaction
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(1);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete?.();
      return;
    }

    const startTime = performance.now();
    const duration = 2000; // ms to reach 100%

    let animId;

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      
      // Smooth cubic bezier-like ease out
      const eased = t < 0.7 
        ? Math.pow(t / 0.7, 1.2) * 0.85 
        : 0.85 + (t - 0.7) / 0.3 * 0.15;
      const currentVal = Math.max(1, Math.min(Math.round(eased * 100), 100));

      setProgress(currentVal);

      if (t < 1) {
        animId = requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Brief 120ms pause so the visitor perceives 100% & READY, then smooth upward page reveal
        setTimeout(() => {
          setIsSlidingUp(true);
        }, 120);
      }
    };

    animId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animId);
  }, [onComplete, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      initial={{ y: '0%' }}
      animate={{ y: isSlidingUp ? '-102%' : '0%' }}
      transition={{
        duration: 0.85, // 0.7 - 1.0s controlled upward movement
        ease: [0.16, 1, 0.3, 1] // Apple-grade smooth cubic-bezier easing curve
      }}
      onAnimationComplete={() => {
        if (isSlidingUp) {
          onComplete?.();
        }
      }}
      className="fixed inset-0 z-[100] bg-[#030305]/95 backdrop-blur-xl text-slate-100 flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden border-b border-cyan-400/30 shadow-[0_25px_60px_rgba(34,211,238,0.2),0_15px_30px_rgba(0,0,0,0.6)]"
    >
      {/* Subtle Internal Caustic Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-sky-400/[0.04] pointer-events-none" />

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

      {/* Bottom Telemetry & Subtle Traveling Edge Glow */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>APPLE LIQUID GLASS INTERFACE</span>
        <span>SYSTEM ID: SDE_2027</span>
      </div>

      {/* Luminous Specular Reflection Strip at the bottom page edge */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-cyan-400/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none" />
    </motion.div>
  );
}
