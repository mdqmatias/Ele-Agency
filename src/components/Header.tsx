"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const leftNav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
];

const rightNav = [
  { href: "#proyectos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];

const allNav = [...leftNav, ...rightNav];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-2xl py-4 shadow-lg shadow-black/50"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Left nav — 3 items */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {leftNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 hover:text-neon hover:drop-shadow-[0_0_8px_rgba(117,255,118,0.5)] transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <Link href="/" className="relative group shrink-0 flex items-center justify-center">
            <div className={`transition-all duration-500 flex items-center justify-center ${
              isScrolled ? "scale-105" : "scale-100"
            }`}>
              <Image
                src="/images/logos/e-icon.png"
                alt="ELE AGENCY"
                width={70}
                height={70}
                className={`object-contain brightness-0 invert transition-all duration-500 drop-shadow-[0_0_12px_rgba(117,255,118,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(117,255,118,0.8)] ${
                  isScrolled ? "w-11 h-11 lg:w-[56px] lg:h-[56px]" : "w-12 h-12 lg:w-[60px] lg:h-[60px]"
                }`}
              />
            </div>
          </Link>

          {/* Right nav — 2 items + CTA */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {rightNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 hover:text-neon hover:drop-shadow-[0_0_8px_rgba(117,255,118,0.5)] transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            <MagneticButton>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-7 py-3 bg-neon text-black text-[13px] font-extrabold uppercase tracking-[0.12em] hover:shadow-[0_0_25px_rgba(117,255,118,0.5)] transition-all duration-300 hover:scale-105 block"
              >
                Agendar Reunión
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden relative z-50 p-2 text-white hover:text-[#75FF76] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu (Off-canvas slide) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            
            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 1 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] z-[70] bg-[#0A0A0A] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-8 border-b border-white/5">
                <span className="text-[#75FF76] font-black tracking-[0.4em] text-xs">MENÚ</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-neon transition-all bg-white/5 hover:bg-neon/10 rounded-full border border-white/10"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col justify-center px-10 py-12 gap-10 overflow-y-auto">
                {allNav.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="group flex items-center gap-4"
                    >
                      <span className="text-4xl font-black uppercase tracking-tight text-white/90 group-hover:text-neon group-hover:translate-x-3 transition-all duration-500">
                        {link.label}
                      </span>
                      <span className="w-0 h-1 bg-neon group-hover:w-8 transition-all duration-500" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="p-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-4 bg-neon text-black text-sm font-extrabold uppercase tracking-[0.12em] hover:shadow-[0_0_20px_rgba(117,255,118,0.4)] transition-all"
                >
                  Agendar Reunión
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
