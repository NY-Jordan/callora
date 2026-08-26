import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/components/landing/language-provider";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Callora — Ne manquez plus jamais un appel patient",
  description:
    "Ora, la réceptionniste IA de Callora, est conçue pour les cabinets dentaires. Elle répond aux appels 24h/24 et 7j/7, traite les demandes courantes des patients et tient votre équipe informée — même quand votre accueil est débordé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("h-full", "antialiased", "font-sans", hankenGrotesk.variable)}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
