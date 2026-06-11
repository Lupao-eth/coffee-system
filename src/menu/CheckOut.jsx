import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';

export default function CheckOut({ cartItems }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    'Full Name': '',
    'Email Address': '',
    'Phone Number': '',
    'Order Notes': ''
  });
  const [showErrors, setShowErrors] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + (price * item.quantity);
  }, 0);
  
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteOrder = () => {
    if (!formData['Full Name'] || !formData['Email Address'] || !formData['Phone Number']) {
      setShowErrors(true);
    } else {
      setShowErrors(false);
      // Navigate to receipt and pass data
      navigate('/receipt', { 
        state: { 
          formData, 
          cartItems, 
          total, 
          subtotal, 
          tax, 
          tip: 0 // Default tip 0, can be updated based on your tip logic
        } 
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="h-screen bg-[#0B0B0D] text-[#FFFFFF] font-primary relative overflow-hidden flex flex-col"
    >
      <Navbar />

      <div className="relative z-10 flex-grow overflow-y-auto pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          
          {/* Left Column: Guest Information */}
          <div className="h-full overflow-y-auto pb-8">
            <h2 className="font-secondary italic text-5xl mb-2 text-[#F7EDDA]">Checkout</h2>
            <p className="font-secondary text-[#F7EDDA]/60 text-sm mb-12">Complete your order to proceed.</p>
            
            <h3 className="font-secondary italic text-2xl mb-6 text-[#F7EDDA]">Guest Information</h3>
            <p className="font-secondary text-[#F7EDDA]/60 text-xs mb-8">We'll use this to send your receipt and updates on your order.</p>
            
            <div className="space-y-6">
              {['Full Name', 'Email Address', 'Phone Number', 'Order Notes'].map((field) => {
                const isRequired = field !== 'Order Notes';
                const hasError = showErrors && isRequired && !formData[field];

                return (
                  <div key={field}>
                    <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">{field}</label>
                    <input 
                      type="text" 
                      placeholder={field === 'Order Notes' ? 'Any special requests or allergies...' : ''}
                      value={formData[field]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className={`w-full bg-transparent border-b ${hasError ? 'border-red-500' : 'border-[#1a1a1a]'} py-2 focus:border-[#D4AF37] outline-none transition-colors font-secondary placeholder:font-secondary`}
                    />
                    {hasError && (
                      <p className="text-[9px] text-red-500 mt-1 font-secondary uppercase tracking-wider">
                        {field} is required
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4">Payment Method</label>
              <div className="bg-[#0D0D14] p-6 rounded border border-[#1a1a1a]">
                <div className="flex items-center mb-6">
                  <input type="radio" checked readOnly className="accent-[#D4AF37] mr-3" />
                  <span className="font-secondary text-sm text-[#FFFFFF]">Credit Card <span className="text-[#FFFFFF]/50 ml-2">Visa, Mastercard, Amex</span></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" placeholder="Card number" className="md:col-span-1 bg-transparent border-b border-[#1a1a1a] py-2 text-sm font-secondary placeholder:font-secondary" />
                  <input type="text" placeholder="MM/YY" className="bg-transparent border-b border-[#1a1a1a] py-2 text-sm font-secondary placeholder:font-secondary" />
                  <input type="text" placeholder="CVC" className="bg-transparent border-b border-[#1a1a1a] py-2 text-sm font-secondary placeholder:font-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-[#0D0D14] p-8 h-fit border border-[#1a1a1a]">
            <h3 className="font-secondary italic text-3xl mb-8 text-[#F7EDDA]">Order Summary</h3>
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
              <div className="flex justify-between text-xl font-secondary italic pt-4 text-[#F7EDDA]">
                <span>TOTAL</span>
                <span className="text-[#D4AF37]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37]/60 mb-4 font-secondary">Add a Tip</label>
              <div className="grid grid-cols-4 gap-2 mb-8">
                {['15%', '18%', '20%', 'Custom'].map((tip) => (
                  <button key={tip} className="border border-[#1a1a1a] py-2 text-[10px] hover:border-[#D4AF37] transition-colors cursor-pointer font-secondary text-[#FFFFFF]">
                    {tip}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleCompleteOrder}
                className="w-full py-4 bg-[#D4AF37] text-black font-primary uppercase tracking-widest text-[12px] hover:bg-white transition-colors cursor-pointer"
              >
                Complete Order
              </button>
              <p className="text-center text-[10px] text-[#FFFFFF]/50 mt-4 font-secondary">Your payment is secured with SSL encryption</p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}