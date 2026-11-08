import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * LiquidRevealTransition
 * 
 * Apple Liquid Glass-inspired upward flowing curtain that reveals the portfolio underneath.
 * Features:
 * - Multi-layer translucent glass sheets with backdrop blur
 * - Organic curved liquid meniscus with cyan & electric blue reflections
 * - Traveling luminous specular crest
 * - Cubic-bezier easing for fluid Apple-grade deceleration
 * - Auto-completes in ~1.55s
 */
export default function LiquidRevealTransition({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      onComplete?.();
    }, 1650);

    return () => clearTimeout(timer);
  }, [onComplete, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div 
      className="fixed inset-0 z-[95] pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Layer 1: Ambient Trailing Glass Refraction Ripple (Secondary Flow) */}
      <motion.div
        initial={{ y: '0%', opacity: 0.8 }}
        animate={{ y: '-120%', opacity: [0.8, 0.6, 0] }}
        transition={{
          duration: 1.75,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.05
        }}
        className="absolute inset-x-0 top-0 h-[115%] bg-gradient-to-b from-cyan-950/40 via-sky-900/20 to-transparent backdrop-blur-md"
      >
        {/* Soft cyan chromatic aberration glow line */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-cyan-400/20 via-sky-500/10 to-transparent blur-xl" />
      </motion.div>

      {/* Layer 2: Primary Apple Liquid Glass Curtain */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: '-112%' }}
        transition={{
          duration: 1.55,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="absolute inset-x-0 top-0 h-[108%] flex flex-col justify-end"
      >
        {/* Main Curtain Body */}
        <div className="relative w-full h-full bg-[#030305]/95 backdrop-blur-2xl flex flex-col justify-end">
          {/* Subtle Internal Caustic Light Streaks */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-sky-400/[0.06] pointer-events-none" />
          
          <div 
            className="absolute inset-0 bg-subtle-grid opacity-15 pointer-events-none"
            style={{ backgroundSize: '36px 36px' }}
          />

          {/* Luminous Specular Traveling Meniscus (Bottom Edge of the Upward-Flowing Curtain) */}
          <div className="relative w-full">
            {/* Organic Fluid Curved SVG Wave Boundary */}
            <svg
              viewBox="0 0 1440 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-12 sm:h-16 md:h-20 text-[#030305]/95 fill-current transform scale-y-[-1] translate-y-[1px]"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C240,65 480,20 720,45 C960,70 1200,25 1440,55 L1440,80 L0,80 Z" />
            </svg>

            {/* Glowing Specular Refraction Crest */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-90 shadow-[0_0_25px_#22d3ee,0_10px_35px_rgba(56,189,248,0.5)]" />
            
            {/* Ambient Cyan/Blue Light Diffusion Strip */}
            <div className="absolute -top-6 inset-x-0 h-12 bg-gradient-to-b from-cyan-400/25 via-sky-500/15 to-transparent blur-lg pointer-events-none" />

            {/* Center Specular Glint */}
            <motion.div
              initial={{ scaleX: 0.4, opacity: 0 }}
              animate={{ scaleX: [0.4, 1.2, 0.8], opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-96 h-6 bg-cyan-200/40 rounded-full blur-md"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
