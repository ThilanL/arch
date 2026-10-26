import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router"
import { founder } from "../../data/content"
import { ease, maskReveal, parallax, useGsap } from "../../lib/animation"
import { gsap } from "../../lib/gsap"
import { ServiceList } from "../about/ConsultingServices"
import { ProfileLinksCompact } from "../research/ResearchProfiles"
import { Button } from "../ui/Button"
import { Eyebrow } from "../ui/Eyebrow"
import { Portrait } from "../ui/Portrait"

export function AboutPreview() {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ desktop, root: scope }) => {
    gsap
      .timeline({
        defaults: { ease: ease.out },
        scrollTrigger: { trigger: scope, start: "top 72%", once: true },
      })
      .fromTo(".about-text", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 })
      .add(maskReveal(".about-frame"), 0.15)
      .fromTo(".about-portrait", { scale: 1.06 }, { scale: 1, duration: 1.3 }, 0.15)
      .fromTo(".about-caption", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.95)
      .fromTo(
        ".service-item",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07 },
        0.6,
      )

    if (desktop) parallax(".about-parallax", ".about-frame", 4)
  })

  return (
    <section ref={root} id="about-sam" className="bg-white py-20 text-ink sm:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:grid-cols-[45fr_35fr_20fr] xl:gap-12">
        <div className="self-center">
          <div className="about-text motion-safe:opacity-0">
            <Eyebrow light>About ARCH Scientific</Eyebrow>
            <h2 className="mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium text-balance sm:text-5xl lg:text-[3.4rem]">
              Scientific Expertise. Practical R&D.
            </h2>
          </div>
          <p className="about-text mt-6 text-base leading-relaxed text-muted motion-safe:opacity-0 sm:text-lg">
            {founder.bio[0]}
          </p>
          <ul className="about-text mt-7 space-y-3 motion-safe:opacity-0">
            {founder.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base">
                <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-teal-ink" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="about-text mt-9 motion-safe:opacity-0">
            <Button to="/about#sam" variant="light">
              Learn More About Sam
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div>
          <figure>
            <div className="about-frame relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-xl bg-deep lg:max-w-none">
              <div className="about-parallax absolute inset-0 lg:top-[-5%] lg:h-[110%]">
                <Portrait className="about-portrait h-full w-full" />
              </div>
              <div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent"
                aria-hidden="true"
              />
              <figcaption className="about-caption absolute inset-x-0 bottom-0 p-5 text-white motion-safe:opacity-0 sm:p-6">
                <span className="block font-serif text-[1.9rem] leading-none font-semibold">{founder.name}</span>
                <span className="mt-2 block text-[11px] font-medium tracking-[0.2em] text-accent uppercase">
                  {founder.title}
                </span>
              </figcaption>
            </div>
          </figure>
          <div className="mx-auto mt-5 max-w-md lg:max-w-none">
            <ProfileLinksCompact />
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-span-1 xl:self-center">
          <h3 className="about-text font-serif text-[1.75rem] font-semibold motion-safe:opacity-0">How I Help Clients</h3>
          <ServiceList
            animated
            className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1"
          />
          <Link
            to="/expertise#services"
            className="about-text mt-5 inline-flex text-sm font-medium text-teal-ink underline decoration-teal/40 underline-offset-4 motion-safe:opacity-0"
          >
            View consulting services
          </Link>
        </div>
      </div>
    </section>
  )
}
