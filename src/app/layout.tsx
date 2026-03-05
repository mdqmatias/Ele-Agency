import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELE AGENCY® | Marketing & Publicidad",
  description:
    "Somos tu socio en resultados. Agencia de marketing integral y estratégica especializada en Branding, Meta Ads, Google Ads, Email Marketing, Diseño Web y Asesorías Personalizadas.",
  keywords: [
    "marketing digital",
    "publicidad",
    "branding",
    "meta ads",
    "google ads",
    "diseño web",
    "agencia de marketing",
    "ele agency",
  ],
  openGraph: {
    title: "ELE AGENCY® | Marketing & Publicidad",
    description: "Somos tu socio en resultados.",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
