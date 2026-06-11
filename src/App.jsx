import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './LandingPage';
import MenuPage from './menu/MenuPage';
import CheckOut from './menu/CheckOut';
import Receipt from './menu/Receipt';
import OurStory from './OurStory';

function AnimatedRoutes({ cart, setCart }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckOut cartItems={cart} />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  
  return (
    <Router>
      <AnimatedRoutes cart={cart} setCart={setCart} />
    </Router>
  );
}

export default App;