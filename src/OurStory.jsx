import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import firstImage from './assets/first.jpg';
import secondImage from './assets/second.jpg';
import thirdImage from './assets/third.jpg';

export default function OurStory() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0B0B0D] text-[#FFFFFF] font-secondary pt-24"
    >
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 mt-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-8 font-secondary">Our Story</p>
        
        <h1 className="font-secondary italic text-5xl md:text-6xl text-[#F7EDDA] mb-16 leading-tight">
          We believe the best<br />hours are the last ones.
        </h1>

        <div className="font-secondary text-[#F7EDDA]/80 text-lg leading-relaxed space-y-8 text-left">
          <p>
            <span className="text-4xl text-[#D4AF37] font-secondary float-left mr-3">V</span>
            esper was born from a simple observation: the world moves too quickly, and the evening hours—those quiet, unhurried moments after dusk—are increasingly rare. We opened our doors at sunset and closed them at midnight, not as a constraint, but as a promise. Every cup we serve is timed to order, every bean traceable to its origin, every preparation treated as a small ritual.
          </p>
          
          <p>
            Our name comes from the Latin <em>vesper</em>, meaning evening. The evening star, the evening prayer, the evening pause before rest. We chose it deliberately, to mark a space apart from the morning rush and the afternoon slog. Vesper is for the night owls, the slow conversationalists, the readers who linger over a single cup for an hour.
          </p>
          
          <p>
            We do not batch brew. We do not hurry. We do not serve to-go cups after 8 PM. These are not affectations—they are the architecture of the experience we want to offer. A place where time moves differently, where the coffee is worth waiting for, and where the evening hours are reclaimed as something precious.
          </p>
        </div>
      </div>

      {/* Image and Quote Section */}
      <div className="relative w-full h-[60vh] mt-24">
        <img 
          src={firstImage} 
          alt="Our Manifesto" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D] via-transparent to-[#0B0B0D]" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-sm border border-white/5">
            <p className="font-secondary italic text-2xl md:text-3xl text-[#F7EDDA] max-w-lg">
              "The evening is not an ending. It is a different kind of beginning."
            </p>
            <p className="font-secondary text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mt-8">
              — Our Manifesto
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[500px]">
          <img 
            src={secondImage} 
            alt="Philosophy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-secondary">Philosophy</p>
          <h2 className="font-secondary italic text-4xl text-[#F7EDDA]">Time, not efficiency</h2>
          <div className="font-secondary text-[#F7EDDA]/80 text-lg leading-relaxed space-y-6">
            <p>
              We reject the cult of speed. Our pour-overs take four minutes. Our cold brew steeps for eighteen hours. Our croissants require seventy-two hours of lamination. These timeframes are not obstacles to overcome—they are the very reason the results taste as they do.
            </p>
            <p>
              Every decision at Vesper asks: does this create more slowness, or less? If less, we reconsider. The evening hours are finite. We refuse to waste them on mediocrity.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 md:order-1 order-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-secondary">Sourcing</p>
          <h2 className="font-secondary italic text-4xl text-[#F7EDDA]">Every bean has a name</h2>
          <div className="font-secondary text-[#F7EDDA]/80 text-lg leading-relaxed space-y-6">
            <p>
              We work directly with four farms: two in Ethiopia's Yirgacheffe region, one in Sumatra's Lake Toba highlands, and a micro-lot in Colombia's Nariño department. We know the names of the farmers. We know the elevation of each plot. We visit, when we can, during harvest season.
            </p>
            <p>
              Our menu rotates with the seasons because coffee is an agricultural product, not a commodity. What we serve in January will differ from July, and we believe this variability is a feature, not a flaw. It marks time. It creates memory.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[500px] md:order-2 order-1">
          <img 
            src={thirdImage} 
            alt="Sourcing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* Craft Section */}
      <section className="max-w-4xl mx-auto px-8 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-8 font-secondary">Craft</p>
        <h2 className="font-secondary italic text-4xl text-[#F7EDDA] mb-16">The preparation is the pleasure</h2>
        <p className="font-secondary text-[#F7EDDA]/80 text-lg mb-24 max-w-2xl mx-auto">
          We do not hide our process. The bar counter is designed so you can watch every step: the weighing, the grinding, the bloom, the pour. We believe transparency builds trust, and trust builds slowness.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {[
            { step: "01", title: "Weigh", desc: "Every dose is measured to 0.1g. Consistency is the foundation of quality." },
            { step: "02", title: "Bloom", desc: "The first pour wakes the grounds. We wait forty seconds, watching the CO2 escape." },
            { step: "03", title: "Pour", desc: "A steady spiral, from center to edge and back. Four minutes of focused attention." },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <span className="font-secondary text-2xl text-[#D4AF37]/50">{item.step}</span>
              <h3 className="font-secondary uppercase tracking-[0.2em] text-[#F7EDDA]">{item.title}</h3>
              <p className="font-secondary text-[#F7EDDA]/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#D4AF37]/20 pt-24">
          <p className="font-secondary italic text-xl text-[#F7EDDA] mb-12">
            We are open from dusk until midnight. No earlier, no later. The hours are the point.
          </p>
          <Link 
            to="/menu"
            className="inline-block border border-[#D4AF37] text-[#D4AF37] px-8 py-3 font-secondary text-[10px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0B0B0D] transition-all cursor-pointer"
          >
            Explore the Menu
          </Link>
        </div>
      </section>
    </motion.div>
  );
}