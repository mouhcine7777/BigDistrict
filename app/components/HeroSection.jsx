import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const words = ['experiences', 'solutions', 'innovations'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image with Lighter Overlay */}
      <div className="absolute inset-0">
        <img 
          src="bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      </div>

      {/* Animated gradient orbs for creativity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ED2410] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Minimal Badge */}
            <div 
              className="inline-block"
              style={{
                animation: 'fadeInUp 0.8s ease-out'
              }}
            >
              <span className="text-sm tracking-[0.3em] text-gray-300 uppercase font-light">
                
              </span>
            </div>

            {/* Hero Title with Rotating Text */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}
            >
              <span className="text-white">We craft digital</span>
              <br />
              <span className="relative inline-block">
                <span 
                  className="text-[#ED2410] font-normal inline-block"
                  style={{
                    transform: isAnimating ? 'scale(0.95) rotateX(90deg)' : 'scale(1) rotateX(0deg)',
                    opacity: isAnimating ? 0 : 1,
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformStyle: 'preserve-3d',
                    display: 'inline-block'
                  }}
                >
                  {words[currentWordIndex]}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}
            >
              Transforming ideas into exceptional digital products
            </p>

            {/* CTA */}
            <div 
              className="pt-8"
              style={{
                animation: 'fadeInUp 1s ease-out 0.6s both'
              }}
            >
<button className="group relative inline-flex items-center gap-3 px-6 py-2 bg-white text-black font-medium text-xl uppercase hover:bg-gray-100 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Let's talk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                {/* Button shine effect */}
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{
                    animation: 'shine 1.5s ease-in-out infinite'
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{
          animation: 'fadeIn 1s ease-out 1s both, floatScroll 3s ease-in-out infinite'
        }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes floatScroll {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </div>
  );
}