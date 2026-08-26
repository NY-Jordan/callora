import { CallDemo } from "@/components/landing/call-demo"
import { DashboardShowcase } from "@/components/landing/dashboard-showcase"
import { Faq } from "@/components/landing/faq"
import { Features } from "@/components/landing/features"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Navbar } from "@/components/landing/navbar"
import { Pricing } from "@/components/landing/pricing"
import { ProblemSection } from "@/components/landing/problem-section"
import { RoiSection } from "@/components/landing/roi-section"
import { TrustSection } from "@/components/landing/trust-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <ProblemSection />
        <CallDemo />
        <HowItWorks />
        <Features />
        <DashboardShowcase />
        <RoiSection />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
