import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar({ onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#12111A]/80 backdrop-blur-md text-white px-6 md:px-12 py-4 flex items-center justify-between border-b border-white/5">
        {/* Logo */}
        <Link to="/" className="cursor-pointer z-[101]">
          <div className="font-secondary text-2xl tracking-widest text-[#D4AF37]">
            Vesper
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-primary items-center space-x-12 text-[12px] uppercase tracking-[0.25em]">
          <Link to="/menu" className="hover:text-[#D4AF37] transition-colors">MENU</Link>
          <Link to="/our-story" className="hover:text-[#D4AF37] transition-colors">OUR STORY</Link>
          <button 
            onClick={onCartClick}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden z-[101] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className="text-[#D4AF37]" /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Placed outside nav to prevent content bleeding */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-[99] bg-[#0B0B0D] flex flex-col items-center justify-center space-y-12 font-primary text-[11px] uppercase tracking-[0.3em] pointer-events-auto"
          >
            {/* Nav Links */}
            <div className="flex flex-col items-center space-y-8">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-colors">Menu</Link>
              <Link to="/our-story" onClick={() => setIsOpen(false)} className="hover:text-[#D4AF37] transition-colors">Our Story</Link>
            </div>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-[#D4AF37]/20"></div>

            {/* Cart Link */}
            <button 
              onClick={() => { onCartClick(); setIsOpen(false); }}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"
            >
              <ShoppingBag size={14} /> Cart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}