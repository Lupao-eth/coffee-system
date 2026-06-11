import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; 
import bgImage from './assets/bg-coffee1.jpg';

export default function LandingPage() {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "EVENING HOURS",
      desc: "Open from dusk until midnight. We believe the best conversations happen after dark."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      ),
      title: "SINGLE ORIGIN",
      desc: "Every bean traceable to its farm. We rotate our selection with the seasons."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: "PREPARED TO ORDER",
      desc: "No batch brewing. Each cup is timed and measured for your arrival."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      style={{ backgroundColor: 'black' }}
      className="min-h-screen text-white"
    >
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Evening Coffee" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Restored Linear Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        </div>

        <div className="relative z-10 flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 flex flex-col justify-center px-8 md:px-16">
            <div className="max-w-2xl">
              <span className="font-primary text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4 block">
                Est. 2026 · Evening Service
              </span>
              <h1 className="font-secondary text-7xl md:text-9xl font-normal text-white mb-6">
                Vesper
              </h1>
              <p className="font-secondary text-xl italic text-gray-300 mb-10">
                Coffee for the evening hours.
              </p>
              {/* Buttons */}
              <div className="flex items-center space-x-8 font-primary text-[11px] uppercase tracking-[0.2em]">
                <Link to="/menu">
                  <button className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-pointer">
                    EXPLORE MENU
                  </button>
                </Link>
                <Link to="/our-story">
                  <button className="text-[#D4AF37] hover:text-white transition-colors cursor-pointer">
                    OUR STORY
                  </button>
                </Link>
              </div>
            </div>
          </main>
          
          {/* Scroll Indicator */}
          <div className="pb-12 text-center font-primary text-[9px] uppercase tracking-[0.3em] text-gray-500">
            <div className="mb-2">Scroll</div>
            <div className="w-[1px] h-8 bg-gray-700 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-[#0a050d] px-8 md:px-16 py-24 border-t border-[#1a1a1a]">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 border border-[#333] flex items-center justify-center mb-6 text-[#D4AF37]">
                {item.icon}
              </div>
              <h3 className="font-primary text-[10px] tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
                {item.title}
              </h3>
              <p className="font-primary text-[11px] leading-relaxed text-gray-500 max-w-[240px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}