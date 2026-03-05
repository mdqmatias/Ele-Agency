"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  { name: "Manu", role: "Founder & Chief", image: "/images/team/manu.jpg" },
  { name: "Clari", role: "Project Manager", image: "/images/team/clari.jpg" },
  { name: "Lupe", role: "Graphic Designer", image: "/images/team/lupe.jpg" },
  { name: "Luke", role: "Paid Media Specialist", image: "/images/team/luke.jpg" },
  { name: "Ari", role: "Paid Media Specialist", image: "/images/team/ari.jpg" },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 380;
      const gap = 32; // md:gap-8
      const scrollAmount = direction === 'left' ? -cardWidth - gap : cardWidth + gap;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (direction === 'right' && scrollLeft >= maxScroll - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === 'left' && scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#75FF76]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
              El equipo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] text-white">
              Las <span className="text-[#D2CDBA]">personas</span> detrás
              <br />de los <span className="text-[#75FF76]">resultados</span>.
            </h2>
          </motion.div>
          
          {/* Carousel Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => scrollBy('left')}
              className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center transition-all duration-300 text-white hover:border-[#75FF76] hover:text-[#75FF76] bg-[#151515] cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollBy('right')}
              className="w-12 h-12 rounded-full border border-[#2A2A2A] flex items-center justify-center transition-all duration-300 text-white hover:border-[#75FF76] hover:text-[#75FF76] bg-[#151515] cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-5 md:gap-8 pb-12 pt-4 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              /* Adjusted width to leave an offset for the next card to peek */
              className="group relative overflow-hidden bg-[#1A1A1A] shrink-0 w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[340px] snap-center shadow-xl shadow-black/50"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 340px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#75FF76]/50 transition-colors duration-500 pointer-events-none" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-8 h-1 bg-[#75FF76] mb-4 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#75FF76] transition-colors">{member.name}</h3>
                <p className="text-sm font-medium tracking-wide uppercase text-[#B0B0B0] mt-2 block">{member.role}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Extra empty div to ensure padding at the end of scroll makes the last card fully visible without being completely squished to edge */}
          <div className="shrink-0 w-[10vw] lg:w-[100px]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
