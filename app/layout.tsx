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

const title = "Callora — Assistant téléphonique pour entreprises, 24h/24";
const description =
  "Callora répond aux appels de votre entreprise quand votre équipe n'est pas disponible : demandes traitées, urgences transférées, résumé de chaque appel. 0,30 €/min.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s — ${siteConfig.name}` },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "assistant téléphonique entreprise",
    "standard téléphonique virtuel",
    "secrétariat téléphonique",
    "permanence téléphonique 24h/24",
    "réceptionniste virtuelle",
    "assistant téléphonique IA",
    "répondeur intelligent professionnel",
  ],
  // Canonical is set per page (app/page.tsx, sector and legal pages) so no
  // route silently inherits the homepage URL.
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
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
