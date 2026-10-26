import {
  ArrowUpRight,
  ChartSpline,
  Compass,
  Hexagon,
  Layers,
  Leaf,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router"
import { expertiseAreas } from "../../data/content"
import { expertiseImages } from "../../data/images"
import { batchReveal, fadeUp, useGsap } from "../../lib/animation"
import { Eyebrow } from "../ui/Eyebrow"
import { ResponsiveImage } from "../ui/ResponsiveImage"

const expertiseIcons: Record<string, LucideIcon> = {
  "advanced-materials": Layers,
  electrochemistry: Zap,
  catalysis: Hexagon,
  "analytical-science": ChartSpline,
  "green-hydrogen-energy": Leaf,
  "rd-strategy": Compass,
}

export function ExpertiseCard({ slug, title, description }: { slug: string; title: string; description: string }) {
  const Icon = expertiseIcons[slug] ?? Layers
  const image = expertiseImages[slug]

  return (
    <Link
      to={`/expertise/${slug}`}
      className="expertise-card group relative flex h-full flex-col rounded-xl border border-white/10 bg-deep p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/45 hover:bg-panel focus-visible:-translate-y-1 sm:p-7"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-accent/30 text-accent">
          <Icon size={22} strokeWidth={1.3} aria-hidden="true" />
        </span>
        <h3 className="pt-1 font-serif text-[1.65rem] leading-[1.1] font-semibold text-accent">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-sm leading-6 text-mist">{description}</p>
      <div className="relative mt-auto pt-6">
        <div className="aspect-[3/1] overflow-hidden sm:aspect-[4/1] rounded-lg border border-white/10 bg-midnight">
          {image ? (
            <ResponsiveImage
              asset={image}
              sizes="(min-width: 1280px) 380px, (min-width: 768px) 46vw, 92vw"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
            />
          ) : null}
        </div>
        <span
          className="absolute -right-2 -bottom-3 flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-midnight text-accent transition duration-300 ease-out group-hover:border-accent group-hover:shadow-[0_0_22px_-4px_var(--color-accent)]"
          aria-hidden="true"
        >
          <ArrowUpRight
            size={18}
            strokeWidth={1.6}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  )
}

export function ExpertiseGrid() {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ root: scope }) => {
    fadeUp(".expertise-intro", { trigger: scope, start: "top 78%", stagger: 0.1 })
    batchReveal(Array.from(scope.querySelectorAll(".expertise-card-wrap")), { y: 22, stagger: 0.1 })
  })

  return (
    <section ref={root} className="relative overflow-hidden bg-midnight py-20 text-white sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="expertise-intro motion-safe:opacity-0">
            <Eyebrow>Core expertise</Eyebrow>
            <h2 className="mt-4 font-serif text-[2.6rem] leading-[1.05] font-medium text-balance sm:text-5xl lg:text-[3.6rem]">
              Multidisciplinary R&D Consulting
            </h2>
          </div>
          <p className="expertise-intro max-w-xl text-base leading-relaxed text-mist motion-safe:opacity-0 lg:justify-self-end">
            Our consulting approach combines hands-on experimental science with advanced analytical
            characterisation, data interpretation and commercial R&D experience.
          </p>
        </div>
        <ul className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:mt-14 xl:grid-cols-3 xl:gap-6">
          {expertiseAreas.map((area) => (
            <li key={area.slug} className="expertise-card-wrap">
              <ExpertiseCard slug={area.slug} title={area.title} description={area.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
