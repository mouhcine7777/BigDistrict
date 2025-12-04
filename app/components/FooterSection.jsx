import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const social = [
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Facebook, label: 'Facebook' }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED2410] rounded-full blur-3xl" />
      </div>

      {/* CTA Section with Light Background */}
      <div className="relative py-16 md:py-20 bg-gradient-to-r from-white via-gray-200 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#ED2410]" />
              <span className="text-sm font-medium text-gray-800">Let's build something amazing</span>
            </div>
            
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center mb-6 relative px-4">
              <span className="relative inline-block">
                Ready to
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-[#ED2410]/20 -z-10" />
              </span>{' '}
              <span className="text-[#ED2410]">Transform</span> Your Digital Presence?
            </h2>
            
            <p className="text-gray-700 text-lg md:text-xl mb-12 text-center max-w-xl px-4">
              Get in touch to discuss your next web, mobile, or digital marketing project
            </p>

            <a
              href="mailto:contact@bigdistrict.agency"
              className="group relative z-10 inline-flex items-center gap-3 mb-8"
            >
              <div className="relative z-10 inline-flex items-center gap-4 px-8 py-4 bg-[#ED2410] text-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#ED2410]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ED2410] via-red-600 to-[#ED2410] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="font-medium text-lg relative z-10">
                  Start Your Project
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Logo & Description */}
          <div>
            <img src="logo.png" alt="Big District" className="h-12 w-auto mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming visions into digital masterpieces with innovation and excellence.
            </p>
            <div className="flex gap-3">
              {social.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#ED2410] rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:text-right lg:ml-auto">
            <h3 className="font-bold text-white mb-6 text-sm tracking-wide">CONTACT</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@bigdistrict.com" className="text-gray-400 hover:text-[#ED2410] transition-colors duration-300 text-sm inline-flex items-start gap-3 group">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 lg:order-2" />
                  <span>contact@bigdistrict.agency</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-[#ED2410] transition-colors duration-300 text-sm inline-flex items-start gap-3 group">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 lg:order-2" />
                  <span>+123 456 7890</span>
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm inline-flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 lg:order-2" />
                  <span>Dubai, UAE</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Big District. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ED2410] to-transparent" />
    </footer>
  );
}