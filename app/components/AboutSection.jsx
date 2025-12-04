import React, { useState } from 'react';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    { 
      icon: Award, 
      value: '150+', 
      label: 'Projects Delivered', 
      color: 'from-red-500 to-red-700',
      alwaysColored: true
    },
    { 
      icon: Users, 
      value: '50+', 
      label: 'Happy Clients', 
      color: 'from-gray-800 to-black',
      alwaysColored: false
    },
    { 
      icon: Lightbulb, 
      value: '8+', 
      label: 'Years Experience', 
      color: 'from-gray-800 to-black',
      alwaysColored: false
    },
    { 
      icon: TrendingUp, 
      value: '95%', 
      label: 'Client Retention', 
      color: 'from-red-500 to-red-700',
      alwaysColored: true
    }
  ];

  return (
    <section className="relative bg-[#F4F5F6] overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 min-h-[calc(100vh-80px)] md:h-[80vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-[#ED2410] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-10 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-black rounded-full blur-3xl opacity-5" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-4 md:space-y-5 lg:space-y-6">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full shadow-lg">
                <div className="w-2 h-2 bg-[#ED2410] rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-semibold text-gray-800">ABOUT BIG DISTRICT</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight">
              <span className="text-black">Transforming Ideas Into Digital </span>
              <span className="bg-gradient-to-r from-[#ED2410] to-red-700 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
              Based in the heart of Dubai, Big District is a forward-thinking digital agency 
              that combines creative innovation with technical expertise. We craft bespoke 
              digital solutions that drive measurable results for ambitious brands.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <button className="w-full sm:w-auto px-5 md:px-6 lg:px-7 py-2.5 md:py-3 bg-[#ED2410] text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/20 text-sm">
                Discover More
              </button>
              <button className="w-full sm:w-auto px-5 md:px-6 lg:px-7 py-2.5 md:py-3 bg-white text-gray-800 font-semibold rounded-lg border-2 border-gray-200 hover:border-[#ED2410] hover:text-[#ED2410] transition-all duration-300 text-sm">
                Our Story
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4 lg:gap-5 mt-8 lg:mt-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const isAlwaysColored = stat.alwaysColored;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 transition-all duration-500 cursor-pointer ${
                    hoveredCard === index
                      ? 'shadow-2xl scale-105 -translate-y-2'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl transition-opacity duration-500 ${
                      isAlwaysColored 
                        ? 'opacity-100' 
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  {/* White background for non-colored cards when not hovered */}
                  {!isAlwaysColored && (
                    <div
                      className={`absolute inset-0 bg-white rounded-xl md:rounded-2xl transition-opacity duration-500 ${
                        hoveredCard === index ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl mb-3 md:mb-4 transition-all duration-300 ${
                      isAlwaysColored
                        ? hoveredCard === index
                          ? 'bg-white/20'
                          : 'bg-white/20'
                        : hoveredCard === index
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                    }`}>
                      <Icon
                        className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                          isAlwaysColored 
                            ? 'text-white' 
                            : hoveredCard === index 
                              ? 'text-white' 
                              : 'text-[#ED2410]'
                        }`}
                      />
                    </div>

                    <div
                      className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 md:mb-2 transition-colors duration-300 ${
                        isAlwaysColored 
                          ? 'text-white' 
                          : hoveredCard === index 
                            ? 'text-white' 
                            : 'text-black'
                      }`}
                    >
                      {stat.value}
                    </div>

                    <div
                      className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                        isAlwaysColored 
                          ? 'text-white/90' 
                          : hoveredCard === index 
                            ? 'text-white/90' 
                            : 'text-gray-600'
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-[#ED2410] rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ED2410] to-transparent opacity-20" />
    </section>
  );
}