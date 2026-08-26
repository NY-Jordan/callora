import { cn } from "@/lib/utils"

import { AnimateIn } from "./animate-in"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
  tone?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <AnimateIn
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
            tone === "light"
              ? "border-border bg-secondary text-muted-foreground"
              : "border-white/15 bg-white/5 text-white/70"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-foreground" : "text-white",
          align === "center" ? "max-w-2xl" : "max-w-xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-7 text-pretty sm:text-lg",
            tone === "light" ? "text-muted-foreground" : "text-white/65",
            align === "center" ? "max-w-xl" : "max-w-lg"
          )}
        >
          {description}
        </p>
      ) : null}
    </AnimateIn>
  )
}
