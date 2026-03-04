"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Cliente 1",
    company: "Gastronomía",
    text: "Desde que empezamos a trabajar con ELE AGENCY, nuestras ventas se triplicaron. Son un equipo increíble que realmente entiende lo que necesitás.",
    rating: 5,
  },
  {
    name: "Cliente 2",
    company: "Moda",
    text: "El rebranding que nos hicieron fue espectacular. Cambió completamente cómo nos perciben los clientes. Muy profesionales y creativos.",
    rating: 5,
  },
  {
    name: "Cliente 3",
    company: "Tech Startup",
    text: "Las campañas de Meta Ads que armaron nos dieron un retorno increíble. Las métricas hablan por sí solas. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Martina S.",
    company: "Productora Audiovisual",
    text: "El nivel de creatividad y compromiso que tienen es de otro planeta. Nos resolvieron en semanas lo que nosotros no pudimos en meses.",
    rating: 5,
  },
  {
    name: "Juan Ignacio",
    company: "E-Commerce de Muebles",
    text: "Rediseñaron nuestra web completa y ahora la tasa de conversión subió un 40%. La inversión más rentable del año para nuestro negocio.",
    rating: 5,
  },
  {
    name: "Camila R.",
    company: "Centro de Estética",
    text: "Manejan nuestras campañas con un nivel de detalle increíble. Nuestra agenda está llena todos los días. ¡Gracias equipo!",
    rating: 5,
  }
];

// Duplicate for infinite scroll effect
const doubledReviews = [...reviews, ...reviews];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient glowing orb centered for Reviews */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-[#75FF76]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] text-white">
            Lo que dicen nuestros{" "}
            <span className="text-[#75FF76]">clientes</span>.
          </h2>
        </motion.div>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative max-w-[1440px] mx-auto overflow-hidden pb-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] w-max items-stretch gap-6 px-6">
          {doubledReviews.map((review, index) => (
            <div
              key={`review-${index}`}
              className="group relative p-8 md:p-10 w-[320px] md:w-[400px] shrink-0 bg-[#111111] border border-[#2A2A2A] hover:border-[#75FF76]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#75FF76]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-[#75FF76] fill-[#75FF76]" />
                    ))}
                  </div>
                  <Quote size={32} className="text-[#75FF76]/20 group-hover:text-[#75FF76]/40 transition-colors duration-300" />
                </div>
                
                <p className="text-[#B0B0B0] text-sm md:text-base leading-[1.8] mb-10 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#1A1A1A] border-2 border-[#2A2A2A] group-hover:border-[#75FF76] flex items-center justify-center text-[#75FF76] font-bold text-lg transition-colors duration-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-wide">{review.name}</p>
                  <p className="text-xs text-[#888888] mt-1 uppercase tracking-wider">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
