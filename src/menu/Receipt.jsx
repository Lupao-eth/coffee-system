import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Printer, Download } from 'lucide-react';
import Navbar from '../navbar';

export default function Receipt() {
  const location = useLocation();
  const { formData, cartItems, total, subtotal, tax, tip } = location.state || {
    formData: { 'Full Name': 'Guest', 'Email Address': '' },
    cartItems: [],
    total: 0,
    subtotal: 0,
    tax: 0,
    tip: 0
  };

  const orderId = "VES-284739";
  const date = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const handleFeatureWarning = () => {
    alert("This feature is not yet working.");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#0B0B0D] text-[#FFFFFF] font-primary pt-24 pb-8 flex flex-col items-center"
    >
      <Navbar />

      {/* Check Icon Animation */}
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6 mt-8"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0B0B0D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </motion.div>

      <h2 className="font-secondary italic text-4xl text-[#F7EDDA] mb-2">Thank you, {formData['Full Name'].split(' ')[0]}</h2>
      <p className="font-secondary text-[#F7EDDA]/60 text-sm mb-12">Your order has been received and is being prepared.</p>

      {/* Receipt Box */}
      <div className="bg-[#0D0D14] p-8 border border-[#1a1a1a] w-full max-w-md">
        <div className="text-center mb-8">
          <h3 className="font-secondary text-2xl tracking-widest text-[#D4AF37]">Vesper</h3>
          <p className="font-secondary text-[10px] uppercase tracking-widest text-[#F7EDDA]/60 mt-1">Evening Coffee Service</p>
          <div className="mt-6 border-b border-[#1a1a1a] pb-4">
            <p className="text-[12px] text-[#F7EDDA]">{orderId}</p>
            <p className="text-[10px] text-[#F7EDDA]/60">{date}</p>
          </div>
        </div>

        <div className="mb-6 bg-[#16161C] p-4 text-[12px] text-[#F7EDDA]">
          <p>{formData['Full Name']}</p>
          <p>{formData['Email Address']}</p>
        </div>

        <div className="space-y-4 mb-8">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between font-secondary text-sm text-[#F7EDDA]">
              <span>{item.title} x {item.quantity}</span>
              <span>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1a1a1a] pt-4 space-y-2 text-sm font-secondary">
          <div className="flex justify-between text-[#F7EDDA]/70"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-[#F7EDDA]/70"><span>Tax (10%)</span><span>${tax.toFixed(2)}</span></div>
          <div className="flex justify-between text-[#F7EDDA]/70"><span>Tip</span><span>${tip.toFixed(2)}</span></div>
          <div className="flex justify-between text-xl font-secondary italic pt-4 text-[#F7EDDA]">
            <span>TOTAL PAID</span>
            <span className="text-[#D4AF37]">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/">
            <button className="w-full py-4 bg-[#D4AF37] text-black font-primary uppercase tracking-widest text-[12px] hover:bg-white transition-colors cursor-pointer mb-4">
              Return to Menu
            </button>
          </Link>
          <div className="flex gap-4">
            <button 
              onClick={handleFeatureWarning}
              className="flex-1 py-2 border border-[#1a1a1a] text-[10px] uppercase tracking-widest hover:border-[#D4AF37] transition-colors flex items-center justify-center gap-2"
            >
              <Printer size={14} /> Print
            </button>
            <button 
              onClick={handleFeatureWarning}
              className="flex-1 py-2 border border-[#1a1a1a] text-[10px] uppercase tracking-widest hover:border-[#D4AF37] transition-colors flex items-center justify-center gap-2"
            >
              <Download size={14} /> Save PDF
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}