"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proyectos", label: "Trabajos" },
  { href: "#contacto", label: "Contacto" },
];

const socialLinks = [
  { href: "https://www.instagram.com/eleagency.mkt/", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/eleagency/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hola@ele-agency.com", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      {/* Newsletter */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 border-b border-[#2A2A2A]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-3 text-white">
              Suscribite al <span className="text-[#75FF76]">newsletter</span>
            </h3>
            <p className="text-[#B0B0B0] text-sm">
              Recibí novedades, tips y estrategias directo en tu mail.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-0">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 md:w-72 px-5 py-3.5 bg-[#151515] border border-[#2A2A2A] text-white text-sm placeholder:text-[#555] focus:outline-none focus:border-[#75FF76] transition-colors"
            />
            <button className="px-7 py-3.5 bg-[#75FF76] text-black text-sm font-bold uppercase tracking-wider hover:bg-[#5acc5b] transition-colors cursor-pointer">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-16 md:gap-12">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-7">
            <Link href="/" className="inline-block">
              <Image src="/images/logos/ele-agency-full.png" alt="ELE AGENCY" width={400} height={100} className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto brightness-0 invert" />
            </Link>
            <p className="text-[#B0B0B0] text-sm leading-[1.8] max-w-xs mt-2">
              Somos tu socio en resultados. Agencia de marketing integral y estratégica.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-[#2A2A2A] text-[#B0B0B0] hover:border-[#75FF76] hover:text-[#75FF76] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:contents gap-10">
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#888888] mb-8">Navegación</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#B0B0B0] hover:text-[#75FF76] transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#888888] mb-8">Contacto</h4>
              <ul className="flex flex-col gap-4 text-sm text-[#B0B0B0]">
                <li><a href="mailto:hola@ele-agency.com" className="hover:text-[#75FF76] transition-colors">hola@ele-agency.com</a></li>
                <li><a href="https://wa.me/5491100000000" className="hover:text-[#75FF76] transition-colors">WhatsApp</a></li>
                <li className="text-xs sm:text-sm">Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 border-t border-[#2A2A2A]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <p>© {new Date().getFullYear()} ELE AGENCY® — Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">Marketing <span className="text-[#75FF76]">&</span> Publicidad</p>
        </div>
      </div>
    </footer>
  );
}
