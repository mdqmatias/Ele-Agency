"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
  { name: "Meta Business", url: "#" },
  { name: "Google Partner", url: "#" },
  { name: "Tiendanube", url: "https://www.tiendanube.com" },
  { name: "Shopify", url: "#" },
  { name: "Perfit", url: "https://www.perfit.com.ar" },
  { name: "Cross Up", url: "https://www.crossup.com" },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0A0A0A] border-y border-[#1A1A1A] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-4 block">
            Alianzas Estratégicas
          </span>
          {/* Promoted to H2 for SEO hierarchy optimization */}
          <h2 className="text-2xl sm:text-3xl font-light text-[#D2CDBA] tracking-wider">
            Trabajamos con los <span className="font-bold text-white uppercase">mejores</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <span className="text-xl md:text-3xl font-black uppercase tracking-widest text-[#333333] group-hover:text-white transition-colors duration-500 select-none">
                {partner.name}
              </span>
              {/* Animated underline indicator */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#75FF76] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
