import React, { useState, useEffect } from 'react';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'mission',
      number: '01',
      label: 'MISSION',
      title: 'Empowering Digital Excellence',
      content: 'At BigDistrict, our mission is to empower businesses with cutting-edge digital solutions. We are dedicated to delivering innovative strategies that drive growth, enhance online presence, and elevate brands to new heights in the digital landscape.'
    },
    {
      id: 'expertise',
      number: '02',
      label: 'OUR EXPERTISE',
      title: 'Diverse & Specialized',
      content: 'Our expertise is as diverse as the clientele we serve. With a team of seasoned professionals, we specialize in a comprehensive range of digital marketing services.'
    },
    {
      id: 'approach',
      number: '03',
      label: 'OUR APPROACH',
      title: 'Listen, Strategize, Execute, Evolve',
      content: 'Our approach is simple yet profound: Listen, Strategize, Execute, and Evolve. We begin by understanding your unique business needs, followed by strategizing tailored solutions.'
    },
    {
      id: 'story',
      number: '04',
      label: 'OUR STORY',
      title: 'Pioneering Digital Excellence',
      subtitle: 'From Dubai to the World',
      content: 'In the heart of Dubai, a city known for its transformative vision and futuristic approach, Big District emerged as a beacon in the digital marketing landscape. Founded in 2009. Our journey began with a simple yet powerful idea: to revolutionize the digital presence of brands around the globe. Today, as an international agency, we carry the spirit of Dubai\'s innovation in every strategy, campaign, and solution we deliver.'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Minimal grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Subtle gradient */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#ED2410] opacity-5 blur-3xl"
          style={{
            transform: `translate(-50%, ${scrollY * 0.3}px)`
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight tracking-tight">
            We are <span className="text-[#ED2410] font-normal">BigDistrict</span>
          </h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              A digital creative studio crafting innovative solutions that transform businesses and elevate brands in the digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative">
        {sections.map((section, index) => (
          <div 
            key={section.id}
            className="relative border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 md:py-24 lg:py-22">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
                {/* Left Side - Number & Label */}
                <div className="md:col-span-3">
                  <div className="sticky top-32">
                    <div className="space-y-6">
                      <div className="text-8xl md:text-9xl font-extralight text-white/5 leading-none">
                        {section.number}
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-px bg-[#ED2410]" />
                        <div className="text-xs tracking-[0.3em] text-gray-600 uppercase font-light">
                          {section.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:col-span-9 space-y-4 md:space-y-6 lg:space-y-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-2">
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p className="text-2xl md:text-3xl text-gray-600 font-light">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  
                  <div className="max-w-3xl">
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                      {section.content}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="pt-3 md:pt-6 lg:pt-8">
                    <div className="w-full h-px bg-gradient-to-r from-[#ED2410]/50 via-[#ED2410]/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent number */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
              <div className="text-[20vw] font-bold text-white leading-none">
                {section.number}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}