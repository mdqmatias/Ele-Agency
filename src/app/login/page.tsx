"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    // Simple delay for "expensive" feel
    await new Promise((r) => setTimeout(r, 800));

    if (password === "ele2026") {
      // Set cookie and redirect
      document.cookie = "ele_auth=authenticated; path=/; max-age=86400; SameSite=Lax";
      window.location.href = "/";
    } else {
      setError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#75FF76] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#75FF76] opacity-[0.03] blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <Image
              src="/images/logos/e-icon.png"
              alt="ELE"
              width={80}
              height={80}
              className="brightness-0 invert drop-shadow-[0_0_15px_rgba(117,255,118,0.4)]"
            />
          </motion.div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-white mb-3">
            Acceso <span className="text-[#75FF76]">Privado</span>
          </h1>
          <p className="text-[#B0B0B0] text-sm font-medium tracking-wide">
            Ingresá la contraseña para ver la versión demo de ELE AGENCY.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center transition-colors ${error ? 'text-red-500' : 'text-[#555] group-focus-within:text-[#75FF76]'}`}>
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className={`w-full bg-[#151515] border ${error ? 'border-red-500' : 'border-[#2A2A2A]'} py-4 pl-12 pr-12 text-white placeholder:text-[#555] focus:outline-none focus:border-[#75FF76] transition-all duration-300 font-medium`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#555] hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-red-500 text-xs font-bold uppercase tracking-widest text-center"
            >
              Contraseña incorrecta
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4.5 bg-[#75FF76] text-black font-extrabold uppercase text-sm tracking-[0.2em] transform transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_30px_rgba(117,255,118,0.4)] hover:scale-[1.02]'}`}
          >
            {isSubmitting ? "Verificando..." : "Ingresar"}
            {!isSubmitting && <ArrowRight size={16} />}
          </button>
        </form>

        <p className="mt-12 text-center text-[10px] text-[#444] uppercase tracking-[0.3em] font-bold">
          ELE AGENCY® — Demo Environment
        </p>
      </motion.div>
    </main>
  );
}
