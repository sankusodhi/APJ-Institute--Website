import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cinematicData } from '../data/cinematicData';
import Navbar from '../components/home/Navbar';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    // CSS snap-y handles the scroll pinning smoothly without blackouts.
    // The continuous zoom is handled by animate-cinematic-zoom.
  }, []);

  return (
    <div ref={containerRef} className="bg-[#111111] h-screen w-full text-white overflow-x-hidden overflow-y-scroll snap-y snap-mandatory font-sans hide-scrollbar">
      
      <div className="fixed top-0 left-0 w-full z-[60]">
        <Navbar />
      </div>

      {/* Main Pinned Scrollable Sections */}
      <div className="gallery-wrapper w-full bg-[#111111]">
        {cinematicData.map((slide) => (
          <div key={slide.id} className="slide-section w-full h-screen snap-start relative flex items-center justify-center overflow-hidden bg-[#111111]">
            
            {/* Background Image Wrapper */}
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="slide-image w-full h-full object-cover opacity-70 origin-center animate-cinematic-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/40 via-transparent to-[#111111]/80 mix-blend-multiply" />
            </div>

            {/* Central Typography */}
            <div className="slide-content relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-7xl mx-auto mt-10 md:mt-20">
              
              <div className="relative w-full flex justify-center">
                
                {/* Title Container */}
                <div className="text-center">
                  <p className="text-[#e67e22] text-[10px] md:text-xs tracking-[0.4em] font-semibold mb-6 uppercase">
                    CREATIVE VISION.
                  </p>
                  <h1 className="text-6xl md:text-[110px] lg:text-[130px] font-serif leading-[0.95] tracking-tight whitespace-pre-line drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {slide.title}
                  </h1>
                </div>



              </div>
            </div>

          </div>
        ))}
      </div>

      <footer className="fixed bottom-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-end items-end pointer-events-none">
        


        {/* Floating Scroll Indicator */}
        <div className="w-14 h-14 bg-[#e67e22] rounded-full flex items-center justify-center text-[#111111] pointer-events-auto cursor-pointer hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl">
          <ArrowDown className="w-5 h-5 stroke-[2.5]" />
        </div>
        
      </footer>
      
    </div>
  );
}
