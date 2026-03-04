"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Palette, Globe, BarChart3, Mail, Search, Megaphone, Target, TrendingUp, MessageSquare } from "lucide-react";

const pillars = [
  {
    id: "construir",
    label: "Construí tu negocio",
    services: [
      { icon: Palette, title: "Branding & Rebranding", description: "Creamos o renovamos la identidad visual de tu marca. Logo, paleta, tipografía, manual de marca y todo lo que necesitás para diferenciarte." },
      { icon: Globe, title: "Diseño Web", description: "Sitios web modernos, rápidos y estratégicos que convierten. Diseño UX/UI premium, responsive y optimizado para resultados." },
      { icon: MessageSquare, title: "Asesoría Personalizada", description: "¿No sabés por dónde empezar? Te ofrecemos una asesoría gratuita de 15-30min para analizar tu situación y diseñar un plan de acción." },
    ],
  },
  {
    id: "vender",
    label: "Aumentá tus ventas",
    services: [
      { icon: Target, title: "Meta Ads", description: "Campañas en Instagram y Facebook optimizadas para conversión. Segmentación precisa, creativos que venden y reportes claros." },
      { icon: Mail, title: "Email Marketing", description: "Automatizaciones, newsletters y campañas que generan ventas recurrentes. Diseño, copywriting y métricas en un solo lugar." },
    ],
  },
  {
    id: "posicionar",
    label: "Posicionamiento",
    services: [
      { icon: Search, title: "Google Ads", description: "Aparecé cuando te buscan. Campañas de Search, Shopping y Display con seguimiento de conversiones y optimización constante." },
      { icon: Megaphone, title: "LinkedIn Ads", description: "Llegá a tomadores de decisiones. Campañas B2B estratégicas para posicionar tu marca en el mundo corporativo." },
      { icon: TrendingUp, title: "Pinterest Ads", description: "Sé de las primeras marcas de tu rubro en Pinterest. Campañas visuales que inspiran y convierten." },
      { icon: BarChart3, title: "TikTok Ads", description: "Contenido nativo que conecta con audiencias jóvenes. Campañas creativas para generar awareness y ventas." },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activePillar, setActivePillar] = useState("construir");
  const currentPillar = pillars.find((p) => p.id === activePillar)!;

  return (
    <section id="servicios" ref={sectionRef} className="py-36 md:py-48 bg-[#0A0A0A] relative overflow-hidden">
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: ["0%", "5%", "0%"],
            x: ["0%", "-3%", "0%"],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#75FF76] blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
            Nuestros servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] max-w-3xl text-white">
            Las <span className="text-[#75FF76]">métricas</span> no mienten.{" "}
            <span className="text-[#D2CDBA]">Nuestros servicios</span>, tampoco.
          </h2>
        </motion.div>

        {/* Pillar tabs - Responsive horizontal scroll on mobile with refined spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-nowrap overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap gap-4 mb-14 mt-14 pb-6"
        >
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`whitespace-nowrap shrink-0 px-6 py-3.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] border transition-all duration-500 cursor-pointer ${
                activePillar === pillar.id
                  ? "bg-[#75FF76] text-black border-[#75FF76] shadow-[0_5_20px_rgba(117,255,118,0.2)]"
                  : "border-[#2A2A2A] text-[#888888] hover:border-[#75FF76]/40 hover:text-white"
              }`}
            >
              {pillar.label}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPillar.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative p-10 bg-[#151515] border border-[#2A2A2A] hover:border-[#75FF76]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#75FF76]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#75FF76] group-hover:bg-[#75FF76]/10 transition-all duration-300 mb-8">
                    <service.icon size={24} className="text-[#75FF76] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white group-hover:text-[#75FF76] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#888888] leading-[1.8] group-hover:text-[#B0B0B0] transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ delay: 0.8, duration: 0.6 }}
           className="mt-24 p-12 bg-gradient-to-r from-[#151515] to-[#111111] border border-[#2A2A2A] text-center relative overflow-hidden group"
         >
          {/* Background glow on hover */}
          <div className="absolute inset-0 bg-[#75FF76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">¿No sabés qué servicio empezaría mejor con tu marca?</h3>
            <p className="text-[#B0B0B0] mb-8 max-w-2xl mx-auto">Te ofrecemos una asesoría de 15 minutos sin cargo para diagnosticar tu situación y armar un plan de acción a medida.</p>
            
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#75FF76] text-black font-bold uppercase text-sm tracking-[0.15em] hover:shadow-[0_0_30px_rgba(117,255,118,0.4)] transition-all duration-300 hover:scale-105"
            >
              Agendá tu asesoría gratuita
              <span className="text-xl">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
