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

const title = "Callora — Ne laissez plus vos appels et demandes sans réponse";
const description =
  "Callora aide les entreprises à répondre aux appels et aux demandes entrantes quand leur équipe n'est pas disponible : réponse aux appels, prise de messages, rendez-vous facilités — adapté à votre secteur d'activité.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: `%s — ${siteConfig.name}` },
  description,
  applicationName: siteConfig.name,
  keywords: [
    "assistant téléphonique IA",
    "AI phone assistant",
    "réceptionniste IA entreprise",
    "AI receptionist for businesses",
    "assistant vocal pour entreprises",
    "répondeur intelligent professionnel",
    "virtual receptionist for small business",
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
