"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Hero = dynamic(() => import("@/components/sections/Hero"), { ssr: false });
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import ClientLogos from "@/components/sections/ClientLogos";
import Projects from "@/components/sections/Projects";
import Reviews from "@/components/sections/Reviews";
import Partners from "@/components/sections/Partners";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <ClientLogos />
        <Projects />
        <Reviews />
        <Partners />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
