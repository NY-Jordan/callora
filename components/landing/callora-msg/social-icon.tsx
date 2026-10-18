import { Briefcase, Mail, MessageSquare, Sparkles } from "lucide-react"
import {
  siFacebook,
  siGoogle,
  siInstagram,
  siMessenger,
  siTiktok,
  siWhatsapp,
  siX,
} from "simple-icons"

import { cn } from "@/lib/utils"

export type SocialSlug =
  | "instagram"
  | "facebook"
  | "messenger"
  | "whatsapp"
  | "linkedin"
  | "tiktok"
  | "x"
  | "google"
  | "sms"
  | "email"
  | "other"

// LinkedIn's mark isn't in this version of simple-icons' dataset, so it falls
// back to a tinted generic icon below instead of the official glyph.
const brandIcons: Partial<Record<SocialSlug, { path: string; hex: string }>> = {
  instagram: siInstagram,
  facebook: siFacebook,
  messenger: siMessenger,
  whatsapp: siWhatsapp,
  tiktok: siTiktok,
  x: siX,
  google: siGoogle,
}

export function SocialIcon({ slug, className }: { slug: SocialSlug; className?: string }) {
  const brand = brandIcons[slug]

  if (brand) {
    return (
      <svg viewBox="0 0 24 24" fill={`#${brand.hex}`} className={cn("size-4", className)} aria-hidden="true">
        <path d={brand.path} />
      </svg>
    )
  }

  if (slug === "linkedin") {
    return <Briefcase className={cn("size-4", className)} style={{ color: "#0A66C2" }} />
  }
  if (slug === "sms") {
    return <MessageSquare className={cn("size-4", className)} />
  }
  if (slug === "other") {
    return <Sparkles className={cn("size-4", className)} />
  }
  return <Mail className={cn("size-4", className)} />
}
