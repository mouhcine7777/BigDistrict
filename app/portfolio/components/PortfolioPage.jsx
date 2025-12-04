import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Al Habtoor City',
      category: 'Luxury & Hospitality',
      description: 'Elevating Luxury A Comprehensive Digital Makeover',
      services: ['Web Design', 'Brand Strategy', 'Digital Marketing'],
      image: '/habtoor.webp',
      year: '2023',
      color: 'from-red-600 to-red-900'
    },
    {
      id: 2,
      title: 'Adidas Football Club',
      category: 'Sports & Lifestyle',
      description: 'Sporting Innovation Crafting a Digital Arena',
      services: ['UI/UX Design', 'Mobile App', 'Content Strategy'],
      image: '/adidas.webp',
      year: '2023',
      color: 'from-gray-800 to-black'
    },
    {
      id: 3,
      title: 'Lavazza',
      category: 'B2B & E-commerce',
      description: 'Brewing Digital Success – A Unique B2B Loyalty Experience',
      services: ['Platform Development', 'UX Design', 'Loyalty System'],
      image: '/lavazza.webp',
      year: '2022',
      color: 'from-red-700 to-red-950'
    },
    {
      id: 4,
      title: 'Pathé',
      category: 'Entertainment',
      description: 'Redefining Entertainment through Seamless Digital Experiences',
      services: ['Web Development', 'Booking System', 'Mobile Optimization'],
      image: '/pathe.webp',
      year: '2022',
      color: 'from-gray-700 to-gray-950'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#ED2410 1px, transparent 1px), linear-gradient(90deg, #ED2410 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: `translateY(${scrollY * 0.2}px)`
          }} />
        </div>

        {/* Gradient accent */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-[#ED2410] opacity-10 blur-3xl"
          style={{
            transform: `translate(-50%, ${scrollY * 0.3}px)`
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#ED2410] rounded-full animate-pulse" />
            <span className="text-sm text-gray-300 font-medium tracking-wider">OUR WORK</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Featured <span className="text-[#ED2410]">Projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of digital excellence where creativity meets strategy
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <div className="w-1 h-3 bg-[#ED2410] rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative">
        <div className="w-full space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative border-t border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Project Row */}
              <div className="grid md:grid-cols-2 md:min-h-[600px] lg:min-h-[700px]">
                {/* Image Side - Alternates left/right */}
                <div className={`relative overflow-hidden h-[400px] md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="absolute inset-0 bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Project number overlay */}
                  <div className="absolute top-8 left-8 text-[120px] md:text-[180px] font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 leading-none">
                    0{index + 1}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`relative flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20 bg-black ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-6">
                    {/* Category & Year */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500 uppercase tracking-wider">{project.category}</span>
                      <span className="w-1 h-1 bg-[#ED2410] rounded-full" />
                      <span className="text-gray-500">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight group-hover:text-[#ED2410] transition-colors duration-500">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-[#ED2410] hover:text-[#ED2410] transition-all duration-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ED2410] opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
                </div>
              </div>

              {/* Hover indicator line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-[#ED2410] transition-all duration-500 ${hoveredProject === project.id ? 'w-full' : 'w-0'}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}