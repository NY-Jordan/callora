"use client"

import type * as React from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type AnimateInProps = React.ComponentProps<"div"> & {
  delay?: number
  y?: number
  once?: boolean
}

export function AnimateIn({
  className,
  delay = 0,
  y = 16,
  once = true,
  children,
  ...props
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStagger({
  className,
  children,
  staggerDelay = 0.08,
}: {
  className?: string
  children: React.ReactNode
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStaggerItem({
  className,
  children,
  y = 16,
}: {
  className?: string
  children: React.ReactNode
  y?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
