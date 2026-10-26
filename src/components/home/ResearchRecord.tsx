import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { researchStats } from "../../data/content"
import { researchBackground } from "../../data/images"
import { ease, parallax, useGsap } from "../../lib/animation"
import { gsap } from "../../lib/gsap"
import { Button } from "../ui/Button"
import { Eyebrow } from "../ui/Eyebrow"
import { ResponsiveImage } from "../ui/ResponsiveImage"

function formatStat(value: number, target: number) {
  const rounded = Math.round(value)
  return target < 10 ? String(rounded).padStart(2, "0") : String(rounded)
}

export function ResearchRecord({ showCta = true }: { showCta?: boolean }) {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ desktop, root: scope }) => {
    const counters = Array.from(scope.querySelectorAll<HTMLElement>("[data-count]"))
    const timeline = gsap.timeline({
      defaults: { ease: ease.out },
      scrollTrigger: { trigger: scope, start: "top 72%", once: true },
    })
    timeline
      .fromTo(".record-bg", { autoAlpha: 0, scale: 1.04 }, { autoAlpha: 1, scale: 1, duration: 1.3 })
      .fromTo(
        ".record-intro",
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0.2,
      )
      .fromTo(
        ".record-divider",
        { autoAlpha: 0, scaleY: 0 },
        { autoAlpha: 1, scaleY: 1, duration: 0.7, stagger: 0.08 },
        0.5,
      )
      .fromTo(
        ".record-stat",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 },
        0.5,
      )
    counters.forEach((el, index) => {
      const target = Number(el.dataset.count)
      const proxy = { n: 0 }
      el.textContent = formatStat(0, target)
      timeline.to(
        proxy,
        {
          n: target,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = formatStat(proxy.n, target)
          },
        },
        0.6 + index * 0.08,
      )
    })
    if (showCta) {
      timeline.fromTo(".record-cta", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.5)
    }

    if (desktop) parallax(".record-parallax", scope, 6)
  }, [showCta])

  return (
    <section
      ref={root}
      id="research-record"
      className="relative isolate overflow-hidden bg-midnight py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="record-parallax absolute inset-0 -z-10 lg:-top-[8%] lg:-bottom-[8%]">
        <ResponsiveImage
          asset={researchBackground}
          decorative
          sizes="100vw"
          className="record-bg h-full w-full object-cover object-[70%_center]"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight from-5% via-midnight/80 via-38% to-midnight/10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight/70 via-transparent to-midnight/30" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:items-center lg:gap-16">
        <div>
          <div className="record-intro motion-safe:opacity-0">
            <Eyebrow>Research credentials</Eyebrow>
          </div>
          <h2 className="record-intro mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium text-balance motion-safe:opacity-0 sm:text-5xl">
            A Foundation in Research and Discovery
          </h2>
          <p className="record-intro mt-5 max-w-md text-base leading-relaxed text-mist motion-safe:opacity-0">
            Scientific expertise built through more than a decade of academic research, industrial
            innovation and hands-on laboratory experience.
          </p>
          {showCta ? (
            <div className="record-cta mt-9 motion-safe:opacity-0">
              <Button to="/insights">
                View Research & Publications
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          ) : null}
        </div>

        <div>
          <ul className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {researchStats.map((stat, index) => (
              <li key={stat.label} className="relative px-5 first:pl-0 sm:px-6 [&:nth-child(3)]:pl-0 sm:[&:nth-child(3)]:pl-6">
                {index > 0 ? (
                  <span
                    className={`record-divider absolute top-1 bottom-1 left-0 w-px origin-top bg-white/20 motion-safe:opacity-0 ${index === 2 ? "hidden sm:block" : ""}`}
                    aria-hidden="true"
                  />
                ) : null}
                <div className="record-stat flex flex-col-reverse motion-safe:opacity-0">
                  <p className="mt-3 max-w-[11rem] text-sm leading-snug text-mist">{stat.label}</p>
                  <p className="font-serif text-[3.4rem] leading-none font-medium lining-nums tabular-nums lg:text-[4.2rem]">
                    <span className="sr-only">
                      {stat.value}
                      {"suffix" in stat ? stat.suffix : ""}
                    </span>
                    <span aria-hidden="true">
                      <span data-count={stat.value}>{formatStat(stat.value, stat.value)}</span>
                      {"suffix" in stat ? <span className="text-accent">{stat.suffix}</span> : null}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="record-intro mt-10 text-xs leading-relaxed text-white/55 motion-safe:opacity-0">
            These figures describe the individual research record of Sam Ratnayake, PhD.
          </p>
        </div>
      </div>
    </section>
  )
}
