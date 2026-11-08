import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import LiquidRevealTransition from './components/LiquidRevealTransition';
import Navbar from './components/Navbar';
import BackgroundGlow from './components/BackgroundGlow';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioApp() {
  // Starts short loading counter (1-100%) on every page load or browser refresh
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return true;
  });
  const [isRevealing, setIsRevealing] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsRevealing(true);
  };

  const handleRevealComplete = () => {
    setIsRevealing(false);
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (isLoading) return; // Wait until loader finishes

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <div className="relative min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* 1. Minimal Apple-Style Loading Animation (1-100%) */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* 2. Apple Liquid Glass Upward Flowing Curtain Transition */}
      {isRevealing && (
        <LiquidRevealTransition onComplete={handleRevealComplete} />
      )}

      {/* Dynamic Background Spotlight & Ambient Lights */}
      <BackgroundGlow />

      {/* Smooth Non-Intrusive Custom Cursor Dot */}
      <CustomCursor />

      {/* Floating Apple Liquid Glass Navigation with Integrated Theme Toggle */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col space-y-12 sm:space-y-20 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
