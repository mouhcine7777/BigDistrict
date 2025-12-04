"use client";

import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="relative min-h-[70vh] py-12 bg-gradient-to-r from-white via-gray-200 to-white overflow-hidden">
      {/* Content */}
      <div className="relative min-h-[70vh] max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full py-8"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#d71b1b]" />
            <span className="text-sm font-montserrat text-gray-800">Let's build something amazing</span>
          </motion.div>
          
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center mb-6 relative px-4">
            <span className="relative inline-block">
              Ready to
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-2 left-0 h-3 bg-[#d71b1b]/20 -z-10"
              />
            </span>{' '}
            <span className="text-[#d71b1b]">Transform</span> Your Digital Presence?
          </h2>
          
          <p className="font-montserrat text-gray-700 text-lg md:text-xl mb-12 text-center max-w-xl px-4">
            Get in touch to discuss your next web, mobile, or digital marketing project
          </p>

          <motion.a
            href="mailto:contact@bigdistrict.agency"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative z-10 inline-flex items-center gap-3 mb-8"
          >
            <div className="relative z-10 inline-flex items-center gap-4 px-8 py-4 bg-[#d71b1b] text-white rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d71b1b] via-[#ff4b4b] to-[#d71b1b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail className="w-5 h-5 relative z-10" />
              <span className="font-montserrat font-medium text-lg relative z-10">
                Start Your Project
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;