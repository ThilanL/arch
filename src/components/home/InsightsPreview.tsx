import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router"
import { researchProfiles, type ResearchProfile } from "../../data/content"
import { expertiseImages, type ImageAsset } from "../../data/images"
import { batchReveal, fadeUp, useGsap } from "../../lib/animation"
import { ProfileIcon } from "../research/ResearchProfiles"
import { Eyebrow } from "../ui/Eyebrow"
import { ResponsiveImage } from "../ui/ResponsiveImage"

const featured: { id: ResearchProfile["id"]; title: string; text: string; image: ImageAsset }[] = [
  {
    id: "scholar",
    title: "Publication list",
    text: "Peer-reviewed publications and the patent, maintained on Google Scholar.",
    image: expertiseImages["rd-strategy"],
  },
  {
    id: "orcid",
    title: "Researcher record",
    text: "A persistent researcher identifier with linked research outputs.",
    image: expertiseImages["analytical-science"],
  },
  {
    id: "researchgate",
    title: "Research network",
    text: "Research outputs and academic profile on ResearchGate.",
    image: expertiseImages.catalysis,
  },
]

export function InsightsPreview() {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ root: scope }) => {
    fadeUp(".insights-intro", { trigger: scope, start: "top 80%", stagger: 0.1 })
    batchReveal(Array.from(scope.querySelectorAll(".insight-card")), { y: 20, stagger: 0.1 })
  })

  const linkedin = researchProfiles.find((profile) => profile.id === "linkedin")

  return (
    <section ref={root} className="bg-white py-20 text-ink sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="insights-intro motion-safe:opacity-0">
            <Eyebrow light>Research & insights</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-[2.6rem] leading-[1.05] font-medium text-balance sm:text-5xl">
              Research, ideas and technical perspectives.
            </h2>
          </div>
          <Link
            to="/insights"
            className="insights-intro group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-teal-ink motion-safe:opacity-0"
          >
            View research & insights
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-3">
          {featured.map((item) => {
            const profile = researchProfiles.find((entry) => entry.id === item.id)
            if (!profile) return null
            return (
              <li key={item.id} className="insight-card">
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(16,32,46,0.04)] transition duration-300 ease-out hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_22px_44px_-30px_rgba(16,32,46,0.45)]"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-deep">
                    <ResponsiveImage
                      asset={item.image}
                      decorative
                      sizes="(min-width: 768px) 32vw, 92vw"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-teal-ink uppercase">
                      <span className="h-4 w-4">
                        <ProfileIcon id={profile.id} />
                      </span>
                      {profile.short}
                    </p>
                    <h3 className="mt-4 font-serif text-[1.7rem] leading-tight font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-teal-ink">
                      Open profile
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">on {profile.label} (opens in a new tab)</span>
                    </span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>

        {linkedin ? (
          <p className="mt-8 text-sm text-muted">
            Professional background is also available on{" "}
            <a
              href={linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-ink underline decoration-teal/40 underline-offset-4 hover:decoration-teal"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . Technical articles will be published here once available.
          </p>
        ) : null}
      </div>
    </section>
  )
}
