"use client"

import Image from "next/image"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  const links = [
    { label: t.nav.product, href: "#product" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
  ]

  return (
    <footer className="border-t border-border/70 py-14">
      <div className="page-container flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div className="flex max-w-xs flex-col gap-3">
            <a href="#top" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Callora"
                width={564}
                height={161}
                className="h-7 w-auto"
              />
            </a>
            <p className="text-sm leading-6 text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-foreground">{t.footer.productColumnTitle}</p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.region}</p>
        </div>
      </div>
    </footer>
  )
}
