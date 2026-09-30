"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { Menu as MenuPrimitive, MenuItem, MenuTrigger, Popover } from "react-aria-components"

import { getIndustryPath, industriesByLocale, industryIcons, industrySlugs } from "@/lib/industries"

import { Button, LinkButton } from "@/components/ui/button"

import { useBrowserCall } from "./browser-call-provider"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "./language-provider"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const { t, locale } = useLanguage()
  const { openCall, callEnabled } = useBrowserCall()
  const industryContent = industriesByLocale[locale]

  const primaryLinks = [
    { label: t.nav.product, href: "#product" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
  ]
  const secondaryLinks = [
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="page-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Callora"
            width={564}
            height={161}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <MenuTrigger>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 px-0 font-medium text-muted-foreground hover:bg-transparent hover:text-foreground aria-expanded:bg-transparent aria-expanded:text-foreground"
            >
              {t.nav.industries}
              <ChevronDown className="size-3.5" />
            </Button>
            <Popover
              placement="bottom start"
              className="w-80 overflow-hidden rounded-xl border border-border bg-card p-1.5 shadow-lg outline-none data-[entering]:animate-in data-[entering]:fade-in data-[entering]:zoom-in-95 data-[exiting]:animate-out data-[exiting]:fade-out data-[exiting]:zoom-out-95"
            >
              <MenuPrimitive className="grid grid-cols-1 gap-0.5 outline-none">
                {industrySlugs.map((slug) => {
                  const Icon = industryIcons[slug]
                  return (
                    <MenuItem
                      key={slug}
                      id={slug}
                      href={getIndustryPath(slug)}
                      className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-foreground outline-none data-[focused]:bg-secondary data-[hovered]:bg-secondary"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-teal-soft text-teal-foreground">
                        <Icon className="size-3.5" />
                      </span>
                      {industryContent[slug].name}
                    </MenuItem>
                  )
                })}
              </MenuPrimitive>
            </Popover>
          </MenuTrigger>

          {secondaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm" onPress={openCall} isDisabled={!callEnabled}>
            {t.nav.tryOra}
          </Button>
          <LinkButton href="#book-demo" variant="default" size="sm">
            {t.nav.bookDemo}
          </LinkButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/70 md:hidden"
          >
            <div className="page-container flex flex-col gap-1 py-4">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}

              <button
                type="button"
                onClick={() => setIndustriesOpen((v) => !v)}
                aria-expanded={industriesOpen}
                className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {t.nav.industries}
                <ChevronDown className={`size-3.5 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {industriesOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden pl-2"
                  >
                    <div className="flex flex-col gap-1 py-1">
                      {industrySlugs.map((slug) => (
                        <a
                          key={slug}
                          href={getIndustryPath(slug)}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {industryContent[slug].name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {secondaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  isDisabled={!callEnabled}
                  onPress={() => {
                    setOpen(false)
                    openCall()
                  }}
                >
                  {t.nav.tryOra}
                </Button>
                <LinkButton href="#book-demo" variant="default" size="sm" onPress={() => setOpen(false)}>
                  {t.nav.bookDemo}
                </LinkButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
