import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BrowserCallProvider } from "@/components/landing/browser-call-provider";
import { LanguageProvider } from "@/components/landing/language-provider";
import { siteConfig } from "@/lib/site-config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const title = "Callora — Ne manquez plus jamais un appel patient";
const description =
  "Ora, la réceptionniste IA de Callora, est conçue pour les cabinets dentaires. Elle répond aux appels 24h/24 et 7j/7, traite les demandes courantes des patients et tient votre équipe informée — même quand votre accueil est débordé.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s — ${siteConfig.name}` },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "réceptionniste IA",
    "AI receptionist",
    "réceptionniste IA cabinet dentaire",
    "AI receptionist for dentists",
    "secrétaire IA cabinet dentaire",
    "répondeur intelligent cabinet médical",
    "virtual receptionist for dental practices",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: siteConfig.social.twitter,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("h-full", "antialiased", "font-sans", hankenGrotesk.variable)}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <LanguageProvider>
          <BrowserCallProvider>{children}</BrowserCallProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
