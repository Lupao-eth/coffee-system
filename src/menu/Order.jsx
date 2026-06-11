import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Order({ isOpen, onClose, cartItems, updateCart, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Sidebar */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#1a1a1a] z-50 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-secondary text-2xl text-[#D4AF37]">Your Order</h2>
              <button onClick={onClose} className="text-white hover:text-[#D4AF37] text-2xl cursor-pointer">×</button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 font-primary text-sm">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-[#121212] p-4 rounded-lg border border-[#1a1a1a]">
                    <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-secondary text-lg">{item.title}</h3>
                        <button onClick={() => removeFromCart(item.title)} className="text-gray-600 hover:text-red-500 cursor-pointer">×</button>
                      </div>
                      <p className="text-[#D4AF37] text-sm">{item.price}</p>
                      <div className="flex items-center space-x-3 mt-2">
                        <button 
                          onClick={() => updateCart(item.title, -1)} 
                          className="text-gray-400 hover:text-white border border-gray-800 px-3 py-1 cursor-pointer"
                        >-</button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateCart(item.title, 1)} 
                          className="text-gray-400 hover:text-white border border-gray-800 px-3 py-1 cursor-pointer"
                        >+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            <div className="mt-8 border-t border-[#1a1a1a] pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-secondary text-xl pt-2">
                <span>Total</span>
                <span className="text-[#D4AF37]">${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-[#D4AF37] text-black font-primary uppercase tracking-widest text-[12px] hover:bg-white transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
              <button onClick={onClose} className="w-full text-center text-[10px] text-gray-500 uppercase tracking-widest hover:text-white cursor-pointer">
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}