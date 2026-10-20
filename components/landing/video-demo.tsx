"use client"

import { motion } from "framer-motion"

import { useLanguage } from "./language-provider"

export function VideoDemo() {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative w-full max-w-[480px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal/25 via-transparent to-brand/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
        <video
          src="/callora-demo-45s-voix.mp4"
          controls
          playsInline
          preload="metadata"
          aria-label={t.videoDemo.caption}
          className="block w-full"
        />
        <p className="px-6 py-4 text-center text-sm text-muted-foreground">{t.videoDemo.caption}</p>
      </div>
    </motion.div>
  )
}
