"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const metrics = [
  { value: 5, suffix: "+", label: "Años de experiencia" },
  { value: 90, suffix: "+", label: "Clientes activos" },
  { value: 300, suffix: "M+", prefix: "$", label: "Invertidos en ads" },
  { value: 0, suffix: "", label: "Creatividad", isInfinity: true },
];

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const startAnimation = () => {
    if (hasAnimated.current || !ref.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const start = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.floor(eased * target).toString();
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return <span ref={(el) => { ref.current = el; if (el) startAnimation(); }}>0</span>;
}

function AnimatedCounter({ value, suffix, prefix, isInfinity }: { value: number; suffix: string; prefix?: string; isInfinity?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (isInfinity) {
    return (
      <span ref={ref} className="font-black text-[#75FF76] neon-glow leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
        ∞
      </span>
    );
  }

  return (
    <span ref={ref} className="font-black text-[#75FF76] tracking-tighter sm:tracking-tight leading-none" style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}>
      {prefix}
      {isInView ? <CountUp target={value} /> : <span>0</span>}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={sectionRef} className="py-36 md:py-48 bg-[#111111] relative overflow-hidden">
      {/* Ambient Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#75FF76] opacity-[0.03] blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#D2CDBA] opacity-[0.02] blur-[100px]" />
      </div>

      {/* Decorative bg element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
        <Image src="/images/logos/e-icon.png" alt="Logotipo decorativo ELE AGENCY" fill className="object-cover object-right" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#75FF76] mb-5 block">
            Nosotros
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1] max-w-2xl text-white">
            Una agencia con una mirada{" "}
            <span className="inline-block">
              <span className="text-[#75FF76] inline-block">integral</span>
            </span>{" "}
            &{" "}
            <span className="text-[#D2CDBA]">estratégica</span>.
          </h2>
        </motion.div>

        {/* Description + Method */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-[#B0B0B0] leading-[1.8] mb-8">
              En ELE AGENCY no creemos en fórmulas genéricas. Cada marca tiene su ADN, 
              su historia y sus objetivos. Nuestro trabajo es descubrirlos y potenciarlos 
              a través de estrategias de marketing, publicidad y comunicación diseñadas a medida.
            </p>
            <p className="text-lg text-[#B0B0B0] leading-[1.8]">
              Desde branding hasta performance, desde la estrategia hasta la ejecución,
              somos el equipo que necesitás para llevar tu negocio al siguiente nivel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {[
              { step: "01", title: "Diagnóstico", desc: "Analizamos tu marca, mercado y competencia." },
              { step: "02", title: "Estrategia", desc: "Diseñamos un plan personalizado para tus objetivos." },
              { step: "03", title: "Ejecución", desc: "Implementamos con precisión y creatividad." },
              { step: "04", title: "Optimización", desc: "Medimos, ajustamos y escalamos resultados." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 group">
                <span className="text-[#75FF76] font-black text-lg shrink-0 w-8 group-hover:scale-110 transition-transform">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-sm text-[#888888] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center py-12 md:py-16 px-6 border border-[#2A2A2A] hover:border-[#75FF76]/30 transition-colors duration-300 bg-[#0A0A0A]/50"
            >
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                prefix={metric.prefix}
                isInfinity={metric.isInfinity}
              />
              <p className="text-xs uppercase tracking-[0.15em] text-[#888888] mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
