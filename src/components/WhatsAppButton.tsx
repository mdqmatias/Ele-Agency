"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <MagneticButton>
        <motion.a
          href="https://wa.me/5491100000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow duration-300 relative group cursor-pointer"
        >
          <Image 
            src="/images/logos/whatsapp-logo.svg" 
            alt="WhatsApp" 
            width={32} 
            height={32} 
            className="relative z-10 brightness-0 invert" 
          />
          
          {/* Ping animation expanded */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
          
          <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            ¿Hablamos?
          </div>
        </motion.a>
      </MagneticButton>
    </div>
  );
}
