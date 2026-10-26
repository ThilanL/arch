import { ServiceCards } from "../components/about/ConsultingServices"
import { ExpertiseCard } from "../components/home/ExpertiseGrid"
import { PageHero } from "../components/layout/PageHero"
import { Button } from "../components/ui/Button"
import { Eyebrow } from "../components/ui/Eyebrow"
import { Reveal } from "../components/ui/Reveal"
import { expertiseAreas } from "../data/content"
import { usePageMeta } from "../lib/usePageMeta"

export function ExpertisePage() {
  usePageMeta(
    "Expertise — ARCH Scientific",
    "Specialist R&D consulting across advanced materials, electrochemistry, catalysis, analytical science, green hydrogen and energy, and R&D strategy.",
  )

  return (
    <>
      <PageHero eyebrow="Core expertise" title="Specialist consulting across disciplines">
        <p>
          We provide specialist R&D consulting across materials science, analytical chemistry,
          electrochemistry, catalysis and renewable energy technologies.
        </p>
      </PageHero>
      <section className="border-t border-white/10 bg-midnight pt-4 pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <h2 className="sr-only">Disciplines</h2>
          <ul className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {expertiseAreas.map((area, index) => (
              <li key={area.slug}>
                <Reveal delay={(index % 3) * 0.08} className="h-full">
                  <ExpertiseCard slug={area.slug} title={area.title} description={area.description} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow light>Consulting services</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight font-medium text-balance sm:text-5xl">
              Practical support from method to laboratory
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Alongside the core disciplines, Sam Ratnayake provides hands-on consulting across
              method development, laboratory operations, data analysis, training and WHS.
            </p>
          </Reveal>
          <div className="mt-12">
            <ServiceCards />
          </div>
          <div className="mt-12">
            <Button to="/contact">Discuss Your R&D Challenge</Button>
          </div>
        </div>
      </section>
    </>
  )
}
