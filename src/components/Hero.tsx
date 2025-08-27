import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CodeAnimation from './CodeAnimation';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const phrase = "Hi, I'm Jacob Santos";

  useEffect(() => {
    if (typedIndex < phrase.length) {
      const t = setTimeout(() => setTypedIndex(typedIndex + 1), 100);
      return () => clearTimeout(t);
    }
  }, [typedIndex]);

  useEffect(() => {
    const i = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(i);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-950/20 to-transparent"></div>
      </div>

      {/* Code Animation Background */}
      <CodeAnimation />

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wireframe Sphere */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
          style={{ transform: `translate(-50%, -50%) translateZ(${scrollY * 0.1}px)` }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-cyan-400/30 relative">
            <div className="absolute inset-4 rounded-full border border-cyan-400/20"></div>
            <div className="absolute inset-8 rounded-full border border-cyan-400/10"></div>
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full border border-blue-400/40 animate-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform rotate-45"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform -rotate-45"></div>
          </div>
        </div>

        {/* Floating Polygons */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-teal-400/40 transform rotate-45 animate-bounce-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 border border-cyan-400/60 transform rotate-12 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-blue-400/50 transform -rotate-45 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div 
          className="transform transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
              {phrase.slice(0, typedIndex)}
              <span className={`inline-block w-1 align-baseline ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Showcasing my projects & creative works
          </p>
          
          <button
            onClick={scrollToPortfolio}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transform-gpu"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;