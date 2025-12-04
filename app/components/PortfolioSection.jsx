import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const projects = [
    {
      title: 'Al Habtoor City',
      description: 'Elevating Luxury A Comprehensive Digital Makeover',
      color: 'from-red-600 to-red-800',
      accent: 'bg-red-500',
      image: '/habtoor.webp'
    },
    {
      title: 'Adidas Football Club',
      description: 'Sporting Innovation Crafting a Digital Arena',
      color: 'from-gray-800 to-black',
      accent: 'bg-gray-700',
      image: '/adidas.webp'
    },
    {
      title: 'Lavazza',
      description: 'Brewing Digital Success – A Unique B2B Loyalty Experience',
      color: 'from-red-700 to-red-900',
      accent: 'bg-red-600',
      image: '/lavazza.webp'
    },
    {
      title: 'Pathé',
      description: 'Redefining Entertainment through Seamless Digital Experiences',
      color: 'from-gray-700 to-gray-900',
      accent: 'bg-gray-600',
      image: '/pathe.webp'
    }
  ];

  const totalSlides = Math.ceil((projects.length + 1) / slidesPerView);

  useEffect(() => {
    // Reset to first slide when slidesPerView changes
    setCurrentSlide(0);
  }, [slidesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-black py-12 md:py-20 lg:py-32 overflow-hidden">

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#ED2410 1px, transparent 1px), linear-gradient(90deg, #ED2410 1px, transparent 1px)',
          backgroundSize: '30px 30px, 50px 50px'
        }} />
      </div>

      <div className="relative mb-12 lg:mb-16">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#ED2410]" />
            <span className="text-sm text-gray-300 font-medium">PORTFOLIO</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Our Signature <span className="text-[#ED2410]">Projects</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Discover how we've transformed visions into digital masterpieces for leading brands
          </p>
        </div>
      </div>

      {/* Slider Container - Full Width */}
      <div className="relative w-full">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Project Cards */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
                >
                  <div 
                    className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-[#ED2410]/50 transition-all duration-500 cursor-pointer h-[400px] md:h-[450px] lg:h-[500px]"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                      />
                    </div>

                    {/* Black Shadow Gradient from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Number */}
                    <div className="absolute top-4 md:top-8 left-4 md:left-8 text-6xl md:text-8xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                      0{index + 1}
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#ED2410] opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
                  </div>
                </div>
              ))}

              {/* View More Card */}
              <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
                <a 
                  href="/portfolio"
                  className="group relative block bg-gradient-to-br from-[#ED2410] to-red-900 border border-red-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 cursor-pointer h-[400px] md:h-[450px] lg:h-[500px]"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center text-center">
                    <div className="mb-6 md:mb-8">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                        View All Projects
                      </h3>
                      
                      <p className="text-white/80 text-sm md:text-base">
                        Explore our complete portfolio of {projects.length}+ successful projects
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white text-[#ED2410] font-bold rounded-lg group-hover:scale-105 transition-transform duration-300 text-sm md:text-base">
                      Discover More
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ED2410] hover:border-[#ED2410] transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ED2410] hover:border-[#ED2410] transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12 max-w-7xl mx-auto px-6 lg:px-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-12 h-3 bg-[#ED2410]'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
    </section>
  );
}