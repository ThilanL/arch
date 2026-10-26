import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { disciplines } from "../../data/content"
import { heroImage } from "../../data/images"
import { ease, parallax, useGsap } from "../../lib/animation"
import { gsap } from "../../lib/gsap"
import { Button } from "../ui/Button"
import { ResponsiveImage } from "../ui/ResponsiveImage"

const headline = [
  { text: "Turning Scientific", accent: false },
  { text: "Challenges into", accent: false },
  { text: "R&D Solutions", accent: true },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ desktop, root: scope }) => {
    const lines = scope.querySelectorAll<SVGGeometryElement>(".hero-annotation")
    lines.forEach((line) => {
      const length = line.getTotalLength()
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })
    })

    gsap
      .timeline({ defaults: { ease: ease.out } })
      .fromTo(".hero-media", { scale: 1.06 }, { scale: 1, duration: 1.4 })
      .to(".hero-veil", { autoAlpha: 0, duration: 1.1 }, 0)
      .fromTo(".hero-kicker", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.4)
      .fromTo(
        ".hero-line",
        { autoAlpha: 0, yPercent: 105 },
        { autoAlpha: 1, yPercent: 0, duration: 0.8, stagger: 0.1, ease: ease.reveal },
        0.55,
      )
      .fromTo(".hero-rule", { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: ease.reveal }, 1.0)
      .fromTo(".hero-support", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 1.05)
      .fromTo(
        ".hero-cta",
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
        1.3,
      )
      .to(lines, { strokeDashoffset: 0, duration: 1.2, stagger: 0.06, ease: "power1.inOut" }, 1.35)
      .fromTo(".hero-scroll", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 1.8)

    if (desktop) parallax(".hero-parallax", scope, 4)
  })

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-[max(640px,100svh)] flex-col overflow-hidden bg-midnight text-white lg:min-h-[max(720px,94svh)]"
    >
      <div className="hero-parallax absolute inset-0 -z-10 lg:-top-[4%] lg:-bottom-[4%]">
        <ResponsiveImage
          asset={heroImage}
          priority
          className="hero-media h-full w-full object-cover object-[70%_center] motion-safe:scale-[1.06] lg:object-[62%_center]"
        />
        <div className="hero-veil absolute inset-0 bg-midnight motion-reduce:hidden" />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight from-10% via-midnight/80 via-45% to-midnight/0 to-80%"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/10 via-30% to-midnight/60"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-midnight/45 lg:hidden" aria-hidden="true" />

      {/* Decorative framing lines only. They do not mark or measure features in the micrograph. */}
      <svg
        className="pointer-events-none absolute top-0 right-0 -z-10 hidden h-full w-[55%] lg:block"
        viewBox="0 0 800 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="var(--color-accent)" strokeOpacity="0.5" strokeWidth="1">
          <path className="hero-annotation" d="M200 200 H160 V240" />
          <path className="hero-annotation" d="M660 200 H700 V240" />
          <path className="hero-annotation" d="M200 790 H160 V750" />
          <path className="hero-annotation" d="M660 790 H700 V750" />
          <path className="hero-annotation" d="M700 495 H770" strokeOpacity="0.35" />
          <circle className="hero-annotation" cx="774" cy="495" r="3.5" />
          <path className="hero-annotation" d="M430 200 V130 H560" strokeOpacity="0.35" />
        </g>
      </svg>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-10 sm:px-8 lg:pt-32">
        <div className="max-w-2xl">
          <p className="hero-kicker text-[11px] font-semibold tracking-[0.28em] text-accent uppercase motion-safe:opacity-0">
            Scientific R&D Consulting
          </p>
          <h1 className="mt-6 font-serif text-[3.15rem] leading-[0.98] font-medium tracking-[-0.01em] sm:text-7xl lg:text-[5.6rem]">
            {headline.map((line) => (
              <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                <span
                  className={`hero-line block motion-safe:opacity-0 ${line.accent ? "text-accent" : ""}`}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>
          <span
            className="hero-rule mt-7 block h-px w-28 origin-left bg-accent motion-safe:scale-x-0"
            aria-hidden="true"
          />
          <div className="hero-support mt-7 max-w-xl motion-safe:opacity-0">
            <p className="text-[11px] font-medium tracking-[0.2em] text-mist uppercase">
              {disciplines.join("  ·  ")}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white sm:text-xl">
              Practical scientific expertise for challenging R&D problems.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-mist sm:text-base">
              We help technology companies, research organisations and science-driven businesses
              investigate complex technical problems, develop new materials and technologies,
              characterise performance, and turn experimental results into actionable R&D decisions.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <div className="hero-cta motion-safe:opacity-0">
              <Button to="/contact" className="w-full sm:w-auto">
                Discuss Your R&D Challenge
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
            <div className="hero-cta motion-safe:opacity-0">
              <Button to="/expertise" variant="secondary" className="w-full sm:w-auto">
                Explore Our Expertise
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll flex flex-col items-center gap-3 pb-7 text-[10px] tracking-[0.3em] text-mist uppercase motion-safe:opacity-0">
        <span>Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-accent" />
        </span>
      </div>
    </section>
  )
}
