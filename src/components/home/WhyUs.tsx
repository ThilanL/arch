import { BriefcaseBusiness, Building2, ChartColumn, Microscope, Network } from "lucide-react"
import { useRef } from "react"
import { whyUs } from "../../data/content"
import { fadeUp, useGsap } from "../../lib/animation"
import { gsap } from "../../lib/gsap"
import { Eyebrow } from "../ui/Eyebrow"

const icons = [Network, Building2, Microscope, ChartColumn, BriefcaseBusiness]

export function WhyUs() {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ root: scope }) => {
    fadeUp(".why-intro", { trigger: scope, start: "top 78%", stagger: 0.1 })
    gsap
      .timeline({ scrollTrigger: { trigger: ".why-list", start: "top 85%", once: true } })
      .fromTo(
        ".why-icon",
        { autoAlpha: 0, scale: 0.85 },
        { autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.09, ease: "power2.out" },
      )
      .fromTo(
        ".why-copy",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "power2.out" },
        0.15,
      )
  })

  return (
    <section ref={root} className="relative overflow-hidden bg-paper py-20 text-ink sm:py-28">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.045]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="molecule-field" width="180" height="156" patternUnits="userSpaceOnUse">
            <g fill="currentColor">
              <circle cx="30" cy="30" r="2.4" />
              <circle cx="96" cy="30" r="2.4" />
              <circle cx="63" cy="86" r="2.4" />
              <circle cx="142" cy="86" r="2.4" />
              <circle cx="110" cy="140" r="1.6" />
            </g>
            <path
              d="M30 30 H96 M30 30 L63 86 M96 30 L63 86 M96 30 L142 86 M142 86 L110 140"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#molecule-field)" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:gap-16">
        <div>
          <div className="why-intro motion-safe:opacity-0">
            <Eyebrow light>Why work with us</Eyebrow>
          </div>
          <h2 className="why-intro mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium text-balance motion-safe:opacity-0 sm:text-5xl">
            Evidence-driven science
            <br className="hidden sm:block" /> for real-world solutions.
          </h2>
          <span className="why-intro mt-7 block h-px w-20 bg-teal motion-safe:opacity-0" aria-hidden="true" />
        </div>

        <ul className="why-list grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {whyUs.map((item, index) => {
            const Icon = icons[index]
            return (
              <li key={item.title} className="flex flex-col lg:border-l lg:border-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
                <span className="why-icon flex h-12 w-12 items-center justify-center rounded-full border border-teal/40 bg-white text-teal-ink motion-safe:opacity-0">
                  <Icon size={22} strokeWidth={1.3} aria-hidden="true" />
                </span>
                <div className="why-copy motion-safe:opacity-0">
                  <h3 className="mt-5 font-serif text-[1.45rem] leading-tight font-semibold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
