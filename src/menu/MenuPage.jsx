import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../navbar';
import Order from './Order';

// Importing images from assets
import espresso1 from '../assets/espresso1.jpg';
import espresso2 from '../assets/espresso2.jpg';
import espresso3 from '../assets/espresso3.jpg';
import filter1 from '../assets/filter1.jpg';
import filter2 from '../assets/filter2.jpg';
import filter3 from '../assets/filter3.jpg';
import bakery1 from '../assets/bakery1.jpg';
import bakery2 from '../assets/bakery2.jpg';
import bakery3 from '../assets/bakery3.jpg';

export default function MenuPage({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  
  const categories = ['ALL', 'ESPRESSO', 'FILTER', 'BAKERY'];

  const menuItems = [
    { title: "Ethiopian Yirgacheffe", price: "$8", desc: "Pour-over · Bergamot, jasmine, bright citrus finish", cat: "FILTER", img: filter1 },
    { title: "Doppio Nero", price: "$6", desc: "Double espresso · Dark chocolate, hazelnut, crema", cat: "ESPRESSO", img: espresso1 },
    { title: "AOP Beurre Croissant", price: "$7", desc: "Baked in-house · 72-hour lamination, cultured butter", cat: "BAKERY", img: bakery1 },
    { title: "Cold Brew Tonic", price: "$9", desc: "Steeped 24 hours · Fever Tree tonic, orange peel", cat: "FILTER", img: filter2 },
    { title: "Flat White", price: "$5", desc: "Velvety microfoam · Single origin espresso", cat: "ESPRESSO", img: espresso2 },
    { title: "Almond Pain au Choc", price: "$8", desc: "Double baked · Dark chocolate, toasted almond", cat: "BAKERY", img: bakery2 },
    { title: "Cascara Fizz", price: "$7", desc: "Coffee cherry infusion · Sparkling water, lime", cat: "ESPRESSO", img: espresso3 },
    { title: "Single Origin Batch", price: "$4", desc: "Rotating seasonal beans · Clean and bright", cat: "FILTER", img: filter3 },
    { title: "Lemon Tart", price: "$9", desc: "Zesty curd · Buttery crust, Italian meringue", cat: "BAKERY", img: bakery3 }
  ];

  const filteredItems = activeTab === 'ALL' 
    ? menuItems 
    : menuItems.filter(item => item.cat === activeTab);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.title === item.title);
      if (existing) {
        return prev.map((i) => i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setSelectedItem(null);
    setIsOrderOpen(true);
  };

  const updateCart = (title, delta) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.title === title) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="min-h-screen bg-[#0a0a0a] text-white relative"
    >
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-transparent pointer-events-none" />

      <Navbar onCartClick={() => setIsOrderOpen(true)} />

      <main className="relative z-10 px-8 md:px-16 pt-32 pb-24">
        <div className="text-center mb-16">
          <h2 className="font-secondary text-5xl mb-6 text-[#D4AF37]">The Menu</h2>
          <p className="font-primary text-[11px] uppercase tracking-[0.2em] text-gray-500">
            Curated selections for the evening hours. Each preparation is timed to order.
          </p>
        </div>

        <div className="flex justify-center space-x-12 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-primary text-[12px] uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer ${
                activeTab === cat ? 'text-[#D4AF37] border-b border-[#D4AF37]' : 'text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/5] bg-[#121212] mb-6 overflow-hidden border border-[#D4AF37] relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-secondary text-xl">{item.title}</h3>
                  <span className="font-secondary text-xl text-[#D4AF37]">{item.price}</span>
                </div>
                <p className="font-primary text-[11px] text-gray-500 tracking-wide">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#121212] border border-[#1a1a1a] w-full max-w-lg flex flex-col md:flex-row overflow-hidden shadow-2xl relative rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 text-white hover:text-[#D4AF37] text-2xl cursor-pointer"
              >
                &times;
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-2 block">{selectedItem.cat}</span>
                <h3 className="font-secondary text-3xl mb-2">{selectedItem.title}</h3>
                <p className="text-xl text-[#D4AF37] mb-6">{selectedItem.price}</p>
                <p className="font-primary text-[11px] text-gray-400 mb-8">{selectedItem.desc}</p>
                <button 
                  className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-primary text-[11px] uppercase tracking-[0.2em] cursor-pointer"
                  onClick={() => handleAddToCart(selectedItem)}
                >
                  + Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Order 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
        cartItems={cart}
        updateCart={updateCart}
        removeFromCart={removeFromCart}
      />
    </motion.div>
  );
}