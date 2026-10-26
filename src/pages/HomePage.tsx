import { AboutPreview } from "../components/home/AboutPreview"
import { ContactBanner } from "../components/home/ContactBanner"
import { ExpertiseGrid } from "../components/home/ExpertiseGrid"
import { Hero } from "../components/home/Hero"
import { InsightsPreview } from "../components/home/InsightsPreview"
import { ResearchRecord } from "../components/home/ResearchRecord"
import { WhyUs } from "../components/home/WhyUs"
import { usePageMeta } from "../lib/usePageMeta"

export function HomePage() {
  usePageMeta(
    "ARCH Scientific — Scientific R&D Consulting",
    "Practical scientific expertise for challenging R&D problems. Specialist consulting across materials science, analytical chemistry, electrochemistry, catalysis and renewable energy technologies.",
  )

  return (
    <>
      <Hero />
      <AboutPreview />
      <ExpertiseGrid />
      <WhyUs />
      <ResearchRecord />
      <InsightsPreview />
      <ContactBanner />
    </>
  )
}
