"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowUpRight, Instagram, Linkedin, Send } from "lucide-react";

const services = [
  "Branding & Rebranding", "Diseño Web", "Meta Ads", "Google Ads",
  "LinkedIn Ads", "Pinterest Ads", "TikTok Ads", "Email Marketing",
  "Asesoría Personalizada", "Otro",
];

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contacto" ref={ref} className="py-36 md:py-48 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#75FF76]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2CDBA]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] mb-10 text-white">
              ¿<span className="text-[#75FF76]">Hablamos</span>?
            </h2>
            <p className="text-lg text-[#B0B0B0] leading-[1.8] mb-14 max-w-md">
              Contanos tu proyecto y armamos una estrategia a medida. 
              Primera asesoría de 15 minutos <span className="text-[#75FF76] font-semibold">100% gratuita</span>.
            </p>

            <div className="space-y-5">
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 border border-[#2A2A2A] hover:border-[#75FF76]/40 transition-all duration-300 bg-[#151515]"
              >
                <div className="w-12 h-12 bg-[#75FF76]/10 border border-[#75FF76]/20 flex items-center justify-center text-[#75FF76] shrink-0 transition-colors group-hover:bg-[#75FF76]/20">
                   <div 
                     className="w-6 h-6 bg-[#75FF76]" 
                     style={{ 
                       maskImage: 'url(/images/logos/whatsapp-logo.svg)', 
                       maskRepeat: 'no-repeat', 
                       maskPosition: 'center', 
                       maskSize: 'contain',
                       WebkitMaskImage: 'url(/images/logos/whatsapp-logo.svg)', 
                       WebkitMaskRepeat: 'no-repeat', 
                       WebkitMaskPosition: 'center', 
                       WebkitMaskSize: 'contain'
                     }} 
                   />
                </div>
                <div className="flex-1 min-w-0">
                   <p className="text-sm font-bold text-white uppercase tracking-wider">WhatsApp</p>
                   <p className="text-xs text-[#888888] mt-1">Respuesta inmediata</p>
                </div>
                <ArrowUpRight size={16} className="text-[#888888] group-hover:text-[#75FF76] transition-colors shrink-0" />
              </a>

              <a
                href="mailto:hola@ele-agency.com"
                className="group flex items-center gap-5 p-5 border border-[#2A2A2A] hover:border-[#75FF76]/40 transition-all duration-300 bg-[#151515]"
              >
                <div className="w-12 h-12 bg-[#75FF76]/10 border border-[#75FF76]/20 flex items-center justify-center text-[#75FF76] shrink-0">
                  <Mail size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white uppercase tracking-wider">hola@ele-agency.com</p>
                  <p className="text-xs text-[#888888] mt-1">Te respondemos en 24hs</p>
                </div>
                <ArrowUpRight size={16} className="text-[#888888] group-hover:text-[#75FF76] transition-colors shrink-0" />
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-10">
              <a href="https://www.instagram.com/eleagency.mkt/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#888888] hover:text-[#75FF76] transition-all">
                <Instagram size={18} className="text-[#888888] group-hover:text-[#75FF76] transition-colors" />
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/eleagency/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#888888] hover:text-[#75FF76] transition-all">
                <Linkedin size={18} className="text-[#888888] group-hover:text-[#75FF76] transition-colors" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#888888] mb-3">Nombre *</label>
                <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[#151515] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-[#75FF76] transition-colors placeholder:text-[#555]"
                  placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#888888] mb-3">Email *</label>
                <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[#151515] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-[#75FF76] transition-colors placeholder:text-[#555]"
                  placeholder="tu@email.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#888888] mb-3">Empresa / Marca</label>
              <input type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full px-5 py-4 bg-[#151515] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-[#75FF76] transition-colors placeholder:text-[#555]"
                placeholder="Nombre de tu marca" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#888888] mb-3">¿Qué servicio te interesa? *</label>
              <select required value={formState.service} onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                className="w-full px-5 py-4 bg-[#151515] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-[#75FF76] transition-colors appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 5L6 8L9 5' stroke='%23888' stroke-width='1.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }}
              >
                <option value="" disabled className="bg-[#151515]">Seleccionar servicio</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-[#151515]">{service}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-[#888888] mb-3">Mensaje</label>
              <textarea rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-5 py-4 bg-[#151515] border border-[#2A2A2A] text-white text-sm focus:outline-none focus:border-[#75FF76] transition-colors resize-none placeholder:text-[#555]"
                placeholder="Contanos sobre tu proyecto..." />
            </div>

            <button type="submit"
              className="w-full sm:w-auto px-12 py-4.5 bg-[#75FF76] text-black font-bold uppercase text-sm tracking-[0.15em] hover:shadow-[0_0_30px_rgba(117,255,118,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer mt-4"
            >
              Enviar Mensaje
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
