"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const clientNames = [
  "WOKI", "MERCADO LIBRE", "SANTANDER", "GLOBANT", "QUILMES", 
  "KAVAK", "RAPPI", "PEDIDOSYA", "LATAM", "DESPEGAR", 
  "COCA-COLA", "SAMSUNG", "L'ORÉAL", "NIKE", "ADIDAS"
];

export default function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Create a continuous array for seamless looping (8 copies to ensure it never cuts off on ultrawide)
  const doubled = Array(8).fill(clientNames).flat();

  return (
    <section id="clientes" ref={ref} className="py-36 md:py-48 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
            Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] text-white">
            Nos <span className="text-[#75FF76]">eligieron</span>.
          </h2>
        </motion.div>
      </div>

      {/* Infinite text marquee Container */}
      <div className="max-w-[1440px] mx-auto relative overflow-hidden py-10">
        {/* Gradients anchored to the 1440px container edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

        <div className="relative flex flex-col gap-6 md:gap-10 -rotate-2 scale-105">
          {/* Row 1 - Front ribbon (Green) */}
          <div className="flex animate-[marquee_20s_linear_infinite] items-center">
            {doubled.map((name, index) => (
              <div key={`r1-${index}`} className="shrink-0 mx-6 md:mx-10 whitespace-nowrap">
                <span className="text-5xl md:text-8xl lg:text-9xl font-black uppercase text-[#75FF76]/80 hover:text-[#75FF76] drop-shadow-[0_0_15px_rgba(117,255,118,0.2)] hover:drop-shadow-[0_0_25px_rgba(117,255,118,0.6)] transition-all duration-300 cursor-default select-none">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 - Back ribbon — reversed (Solid White - Faster) */}
          <div className="flex animate-[marquee_15s_linear_infinite_reverse] items-center -mt-6 md:-mt-10">
            {[...doubled].reverse().map((name, index) => (
              <div key={`r2-${index}`} className="shrink-0 mx-6 md:mx-10 whitespace-nowrap">
                <span 
                  className="text-5xl md:text-8xl lg:text-9xl font-black uppercase text-white hover:text-white transition-all duration-500 cursor-default select-none hover:drop-shadow-[0_0_20px_white]" 
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
