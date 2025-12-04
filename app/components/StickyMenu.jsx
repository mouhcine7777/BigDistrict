import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function CreativeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4' 
            : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className={`relative transition-all duration-500 ${
              isScrolled 
                ? 'bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-red-500/10' 
                : 'bg-transparent'
            }`}
          >
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <div className="relative z-50 group">
                <Link href="/" onClick={() => setActiveLink('home')}>
                  <div className="relative cursor-pointer">
                    <img 
                      src="logo.png" 
                      alt="Big District Logo" 
                      className={`transition-all duration-300 ${
                        isScrolled ? 'h-12' : 'h-16'
                      } w-auto object-contain group-hover:scale-110`}
                    />
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-[#ED2410] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation - Now Burger Menu */}
              <div className="hidden lg:flex items-center gap-6">
                {/* CTA Button */}
                <Link href="/contact">
                  <button 
                    className="group relative px-5 py-2 bg-[#ED2410] text-white font-medium uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                    style={{
                      animation: 'fadeInDown 0.6s ease-out 0.4s both'
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Connect
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </Link>

                {/* Burger Menu Button for Desktop */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative z-50 p-3 text-white hover:text-[#ED2410] transition-colors border border-white/20 rounded-full hover:border-[#ED2410]/50 backdrop-blur-sm"
                  style={{
                    animation: 'fadeInDown 0.6s ease-out 0.5s both'
                  }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-50 p-2 text-white hover:text-[#ED2410] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu (Desktop & Mobile) */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name.toLowerCase());
                setIsMobileMenuOpen(false);
              }}
              className="group text-4xl lg:text-5xl font-light text-white hover:text-[#ED2410] transition-all duration-300 uppercase"
              style={{
                animation: isMobileMenuOpen 
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` 
                  : 'none',
                transform: isMobileMenuOpen ? 'none' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              <span className="relative">
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#ED2410] group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <button 
              className="mt-8 px-5 py-2 bg-[#ED2410] text-white font-medium text-xl uppercase hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
              style={{
                animation: isMobileMenuOpen 
                  ? `fadeInUp 0.5s ease-out 0.5s both` 
                  : 'none',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              Let's Connect
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}