import { ImageResponse } from "next/og"

import { industriesByLocale, industrySlugs, type IndustrySlug } from "@/lib/industries"
import { industrySeoByLocale } from "@/lib/industry-seo"
import { siteConfig } from "@/lib/site-config"

export const alt = "Callora — assistant téléphonique adapté à votre secteur"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return industrySlugs.map((secteur) => ({ secteur }))
}

export default async function Image({ params }: { params: Promise<{ secteur: string }> }) {
  const { secteur } = await params
  const slug = (industrySlugs as readonly string[]).includes(secteur) ? (secteur as IndustrySlug) : industrySlugs[0]
  const industry = industriesByLocale[siteConfig.defaultLocale][slug]
  const seo = industrySeoByLocale[siteConfig.defaultLocale][slug]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          backgroundColor: "#161421",
          backgroundImage: "radial-gradient(circle at 82% 18%, rgba(130,84,238,0.35), rgba(22,20,33,0) 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              backgroundColor: "#8254ee",
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 600, color: "#fafafa" }}>Callora</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(250,250,250,0.2)",
              fontSize: "26px",
              color: "#c9b8ff",
            }}
          >
            {industry.name}
          </div>
          <div style={{ display: "flex", fontSize: "62px", fontWeight: 600, lineHeight: 1.12, color: "#fafafa", maxWidth: "1000px" }}>
            {seo.ogHeadline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "26px", color: "rgba(250,250,250,0.6)" }}>
          {`${new URL(siteConfig.url).host} · Réponse aux appels 24h/24`}
        </div>
      </div>
    ),
    { ...size }
  )
}
