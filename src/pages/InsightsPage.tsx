import {
  Atom,
  ChartScatter,
  Droplets,
  FlaskConical,
  Hexagon,
  Layers,
  Microscope,
  Sun,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { PageHero } from "../components/layout/PageHero"
import { ResearchProfiles } from "../components/research/ResearchProfiles"
import { Button } from "../components/ui/Button"
import { Eyebrow } from "../components/ui/Eyebrow"
import { Reveal } from "../components/ui/Reveal"
import { SemImage } from "../components/ui/SemImage"
import { founder, researchAreas, researchProfiles } from "../data/content"
import { usePageMeta } from "../lib/usePageMeta"

const areaIcons: Record<(typeof researchAreas)[number], LucideIcon> = {
  "Advanced materials": Layers,
  "Analytical chemistry": FlaskConical,
  Electrochemistry: Atom,
  Catalysis: Hexagon,
  "Green hydrogen": Droplets,
  "Solar fuels": Sun,
  "Laboratory instrumentation": Microscope,
  "Scientific data analysis": ChartScatter,
}

const scholar = researchProfiles.find((profile) => profile.id === "scholar")

export function InsightsPage() {
  usePageMeta(
    "Research & Insights — ARCH Scientific",
    "Research background, research areas and researcher profiles for ARCH Scientific, led by Sam Ratnayake, PhD.",
  )

  return (
    <>
      <PageHero eyebrow="Research & publications" title="Research grounded in materials, chemistry and energy">
        <p>
          More than a decade of academic research, industrial innovation and hands-on laboratory
          work across Australia, Sweden and Sri Lanka.
        </p>
      </PageHero>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow light>Research background</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium text-balance sm:text-5xl">
              From fundamental chemistry to applied R&D
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>{founder.bio[1]}</p>
              <p>{founder.bio[2]}</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Earlier work also covered polymer and ceramic composites, carbon-fibre materials,
              functional and protective coatings, and environmental and public-health-related
              research.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <figure>
              <div className="relative aspect-[5/4] overflow-hidden bg-deep">
                <SemImage
                  alt="Scanning electron micrograph of a crystal."
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs tracking-wide text-muted uppercase">
                Scanning electron micrograph
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow light>Research areas</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl">
              Areas of research
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-1 gap-4 min-[430px]:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, index) => {
              const Icon = areaIcons[area]
              return (
                <li key={area}>
                  <Reveal delay={(index % 4) * 0.06} className="h-full">
                    <div className="group flex h-full items-center gap-4 border border-line bg-white p-5 transition-colors duration-300 hover:border-teal-ink/45">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-teal-ink transition-colors duration-300 group-hover:border-teal-ink/60">
                        <Icon size={18} strokeWidth={1.4} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-snug text-ink">{area}</span>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight py-20 text-white sm:py-28">
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Selected publications</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium text-balance sm:text-5xl">
              44 peer-reviewed publications and a patent
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
              A curated selection has not been added to this site yet. The complete, current
              publication list is maintained on Google Scholar, with records also available on
              ORCID and ResearchGate.
            </p>
          </Reveal>
          <Reveal className="flex items-end lg:col-span-5 lg:justify-end">
            {scholar ? (
              <Button to={scholar.href} external>
                View publications on Google Scholar
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow light>Researcher profiles</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl">
              External research resources
            </h2>
          </Reveal>
          <div className="mt-10">
            <ResearchProfiles />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Eyebrow light>Insights</Eyebrow>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Technical articles and research notes will be published here. None have been supplied
            yet, so no titles, dates or findings are shown.
          </p>
        </div>
      </section>
    </>
  )
}
