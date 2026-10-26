import { ServiceCards } from "../components/about/ConsultingServices"
import { PageHero } from "../components/layout/PageHero"
import { ResearchRecord } from "../components/home/ResearchRecord"
import { ResearchProfiles } from "../components/research/ResearchProfiles"
import { Button } from "../components/ui/Button"
import { Eyebrow } from "../components/ui/Eyebrow"
import { Portrait } from "../components/ui/Portrait"
import { Reveal } from "../components/ui/Reveal"
import { founder, fields, instruments, principles, qualifications, roles } from "../data/content"
import { usePageMeta } from "../lib/usePageMeta"

export function AboutPage() {
  usePageMeta(
    "About — ARCH Scientific",
    "Scientific expertise built across research and industry. The consultancy provides specialist scientific expertise without necessarily requiring a permanent in-house capability.",
  )

  return (
    <>
      <PageHero
        eyebrow="About ARCH Scientific"
        title="Scientific Expertise Built Across Research and Industry"
      >
        <p>
          ARCH Scientific is a multidisciplinary scientific R&D consultancy led by Sam Ratnayake,
          PhD. It was established to provide organisations with access to specialist scientific
          expertise without necessarily requiring a permanent in-house capability.
        </p>
      </PageHero>

      <section id="sam" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <figure className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden bg-deep lg:max-w-none">
              <Portrait
                className="h-full w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="block font-serif text-2xl">{founder.name}</span>
                <span className="mt-1 block text-[11px] font-medium tracking-[0.2em] text-accent uppercase">
                  {founder.title}
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light>Meet Sam Ratnayake</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight font-medium text-balance sm:text-5xl">
                Hands-on science across research, industry and the laboratory
              </h2>
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-10">
              <p className="text-[11px] font-medium tracking-[0.2em] text-teal-ink uppercase">
                Instrumentation
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {instruments.map((item) => (
                  <li key={item} className="border border-line px-3 py-1.5 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="profiles" className="bg-paper py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow light>Research profiles</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl">
              Publications and professional profiles
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              The publication list and professional background are maintained on these external
              profiles. Each link opens in a new tab.
            </p>
          </Reveal>
          <div className="mt-10">
            <ResearchProfiles />
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow light>Consulting services</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight font-medium sm:text-5xl">
              How I help clients
            </h2>
          </Reveal>
          <div className="mt-10">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-muted">
              Our experience spans academic research, commercial R&D, scientific instrumentation,
              technology development, laboratory management and postgraduate education.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The foundation of our work is a PhD in Applied Chemistry from RMIT University,
              supported by an MSc in Environmental Chemistry from Umeå University, Sweden, and a
              BSc (Hons) in Applied Sciences from the University of Peradeniya.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Eyebrow light>Qualifications</Eyebrow>
            <ul className="mt-5 space-y-4">
              {qualifications.map((item) => (
                <li key={item} className="border-t border-line pt-4 text-base leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2 className="max-w-3xl font-serif text-4xl leading-tight font-medium sm:text-5xl">
            A broad scientific perspective
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            Our work has involved research and development across several technically demanding
            fields, including:
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {fields.map((field) => (
              <li key={field} className="border border-line bg-white px-4 py-4 text-sm leading-relaxed">
                {field}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
            This breadth enables cross-disciplinary approaches to problems that cannot be addressed
            effectively from a single scientific perspective.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl leading-tight font-medium">Research experience</h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-4">
              {roles.map((role) => (
                <li key={role} className="border-t border-line pt-4 text-base leading-relaxed">
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-relaxed text-muted">
              At SLINTEC, research was conducted for commercial clients and industrial partners
              across materials, coatings, apparel, cosmetics and catalyst development.
            </p>
          </div>
        </div>
      </section>

      <ResearchRecord showCta={false} />

      <section id="approach" className="bg-white py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2 className="font-serif text-4xl leading-tight font-medium sm:text-5xl">Our approach</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            We believe effective scientific consulting should be:
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((principle, index) => (
              <li key={principle.title} className="border-t border-line pt-5">
                <p className="text-[11px] tracking-[0.18em] text-teal-ink">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{principle.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Our work has covered projects ranging from advanced composites and functional coatings
              to catalysts, electrochemical systems, green hydrogen technologies and solar
              water-splitting materials.
            </p>
            <p>
              This experience allows us to approach R&D challenges from both the scientific and
              practical perspectives—understanding not only what needs to be measured, but why it
              matters to the technology or product being developed.
            </p>
          </div>
          <div className="mt-10">
            <Button to="/contact">Discuss Your R&D Challenge</Button>
          </div>
        </div>
      </section>
    </>
  )
}
