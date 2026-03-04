"use client";

import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[90svh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Ambient Animated Background instead of images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Base dark bg */}
        <div className="absolute inset-0 bg-[#0A0A0A]" />

        {/* Subtle Ambient continuous orbs (Static for performance) */}
        <div className="absolute top-[10%] left-[30%] w-[800px] h-[800px] rounded-full bg-[#75FF76] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[0%] w-[1000px] h-[1000px] rounded-full bg-[#D2CDBA] opacity-[0.04] blur-[120px]" />
        
        {/* Subtle noise pattern global */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.04] mix-blend-overlay z-20" />
      </div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center py-20 w-full mt-10"
      >
        {/* Pre-title sticker */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 lg:mb-10"
        >
          <span className="sticker text-[clamp(0.6rem,1.5vw,0.875rem)] tracking-[0.15em] relative overflow-hidden group rotate-[-3deg] block">
            <span className="relative z-10">MARKETING & PUBLICIDAD</span>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-0" />
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={titleVariants}
          className="font-black uppercase leading-[0.85] tracking-tight mb-6"
          style={{ fontSize: "clamp(3.5rem, 12vw, 8.5rem)" }}
        >
          <span className="block text-white">ELE</span>
          <span className="block text-[#75FF76] neon-glow transform -translate-y-2">AGENCY</span>
          <span className="text-[clamp(1rem,3vw,2rem)] font-medium tracking-[0.3em] text-[#D2CDBA] block mt-4 lg:mt-6">®</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#D2CDBA] font-light tracking-wide max-w-xl mx-auto mb-10"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
        >
          Somos tu socio en{" "}
          <span className="font-semibold text-white">Resultados</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <MagneticButton>
            <a
              href="#contacto"
              className="group px-10 py-5 bg-[#75FF76] text-black font-bold uppercase text-sm tracking-[0.15em] hover:shadow-[0_0_30px_rgba(117,255,118,0.4)] transition-all duration-300 hover:scale-105 block"
            >
              Empezar un Proyecto
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#servicios"
              className="px-10 py-5 border border-white/20 text-white font-medium uppercase text-sm tracking-[0.15em] hover:border-[#75FF76] hover:text-[#75FF76] hover:bg-white/5 transition-all duration-300 block"
            >
              Ver Servicios
            </a>
          </MagneticButton>
        </motion.div>

        {/* Floating sticker elements - Optimized for mobile visibility */}
        <motion.div
          initial={{ opacity: 0, rotate: 3, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 3, scale: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="absolute top-[16%] right-[2%] lg:top-[25%] lg:right-[12%] z-30 scale-[0.65] sm:scale-75 lg:scale-100 origin-right"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="sticker-alt text-sm lg:text-lg px-4 lg:px-5 py-2 lg:py-2.5 relative overflow-hidden group">
              <span className="relative z-10">¡Trabajemos juntos!</span>
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-0" />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -2, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="absolute top-[28%] left-[2%] lg:top-[35%] lg:left-[10%] z-30 scale-[0.65] sm:scale-75 lg:scale-100 origin-left"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="sticker text-[10px] lg:text-xs px-3 lg:px-4 py-1.5 relative overflow-hidden group">
              <span className="relative z-10">RESULTS DRIVEN</span>
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_3.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-0 delay-500" />
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
