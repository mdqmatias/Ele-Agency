"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type Project = {
  title: string;
  category: string;
  span: string;
  image: string;
  description: string;
  results: string[];
};

const projects: Project[] = [
  {
    title: "E-Commerce Nacional",
    category: "Branding & Web",
    span: "md:col-span-2 md:row-span-2",
    image: "/images/banners/banner-1.jpg",
    description: "Desarrollo integral de e-commerce con enfoque en conversión y experiencia de usuario. Integramos pasarelas de pago locales y optimización SEO.",
    results: ["+150% Ventas online", "Optimización de checkout", "Integración ERP"]
  },
  {
    title: "Campaña Black Friday",
    category: "Performance Ads",
    span: "md:col-span-1 md:row-span-1",
    image: "/images/banners/banner-2.jpg",
    description: "Estrategia agresiva de pauta digital para el fin de semana de mayores descuentos del año, maximizando el ROAS en Meta y Google Ads.",
    results: ["ROAS 8.5x", "Reducción de CPA", "Récord histórico de facturación"]
  },
  {
    title: "Lanzamiento de App",
    category: "Social Media",
    span: "md:col-span-1 md:row-span-1",
    image: "/images/banners/banner-3.jpg",
    description: "Campaña de expectativa y lanzamiento para una nueva aplicación fintech, utilizando influencers y contenido viral en TikTok e Instagram.",
    results: ["10k descargas en 48hs", "Tendencia en App Store", "Comunidad activa"]
  },
  {
    title: "Rediseño de Marca B2B",
    category: "Identidad Visual",
    span: "md:col-span-2 md:row-span-1",
    image: "/images/banners/banner-4.jpg",
    description: "Modernización de la identidad corporativa para una empresa de software tradicional, proyectando innovación y confianza para el sector corporativo.",
    results: ["Nuevo manual de marca", "Sitio web corporativo", "Material comercial"]
  },
  {
    title: "Estrategia Email Marketing",
    category: "Automation",
    span: "md:col-span-1 md:row-span-1",
    image: "/images/banners/banner-1.jpg",
    description: "Implementación de flujos de automatización y segmentación avanzada para aumentar el LTV de los clientes recurrentes.",
    results: ["+40% Apertura", "+25% Facturación vía email", "Segmentación RFM"]
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="proyectos" ref={ref} className="py-24 md:py-36 bg-[#0a0a0a] relative border-t border-[#2A2A2A] overflow-hidden">
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: ["0%", "-5%", "0%"],
            x: ["0%", "5%", "0%"],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#D2CDBA] blur-[120px]"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/50 backdrop-blur-[50px] z-0" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10"
         >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
              Nuestro Trabajo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] text-white">
              Proyectos <span className="text-[#D2CDBA]">Destacados</span>.
            </h2>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-white hover:text-[#75FF76] transition-colors border-b border-[#75FF76]/30 hover:border-[#75FF76] pb-1 w-fit">
            Contactanos por tu proyecto <span>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className={`group relative overflow-hidden bg-[#1A1A1A] cursor-pointer ${project.span}`}
            >
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-[#75FF76] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                    {project.category}
                  </p>
                  <div className="h-0.5 w-0 bg-[#75FF76] mb-4 group-hover:w-12 transition-all duration-500 delay-100" />
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-[1.1]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#111] overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl border border-[#2A2A2A]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#75FF76] text-white hover:text-black rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[50vh]">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent block md:hidden" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#75FF76] mb-4 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white uppercase leading-[1.1] mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-[#B0B0B0] text-sm md:text-base leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <h4 className="text-white font-bold uppercase text-sm mb-4">Resultados Clave</h4>
                <ul className="space-y-3">
                  {selectedProject.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#888888]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#75FF76]" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
