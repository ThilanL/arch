import { Link, useParams } from "react-router"
import { PageHero } from "../components/layout/PageHero"
import { Button } from "../components/ui/Button"
import { ResponsiveImage } from "../components/ui/ResponsiveImage"
import { expertiseAreas, findExpertise } from "../data/content"
import { expertiseImages } from "../data/images"
import { usePageMeta } from "../lib/usePageMeta"
import { NotFoundPage } from "./NotFoundPage"

export function ExpertiseDetailPage() {
  const { slug } = useParams()
  const area = findExpertise(slug)

  usePageMeta(
    area ? `${area.title} — ARCH Scientific` : "Page not found — ARCH Scientific",
    area?.description ?? "The requested page could not be found.",
  )

  if (!area) return <NotFoundPage />

  const related = expertiseAreas.filter((item) => item.slug !== area.slug).slice(0, 3)
  const image = expertiseImages[area.slug]

  return (
    <>
      <PageHero eyebrow="Core expertise" title={area.title}>
        <p>{area.description}</p>
      </PageHero>
      {image ? (
        <div className="bg-midnight pb-12 sm:pb-16">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="aspect-[3/1] overflow-hidden rounded-xl border border-white/10 sm:aspect-[4/1]">
              <ResponsiveImage
                asset={image}
                priority
                sizes="(min-width: 1152px) 1088px, 92vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl">What this covers</h2>
            <ul className="mt-6 space-y-3">
              {area.topics.map((topic) => (
                <li key={topic} className="border-t border-line pt-3 text-base">
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Descriptions on this page restate the consulting capability. They are not project
              outcomes.
            </p>
            <div className="mt-8">
              <Button to="/contact">Discuss Your R&D Challenge</Button>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <h2 className="text-[11px] font-medium tracking-[0.18em] text-teal-ink uppercase">
              Related expertise
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/expertise/${item.slug}`}
                    className="font-serif text-2xl leading-tight text-ink hover:text-teal-ink"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/expertise"
              className="mt-8 inline-flex text-sm text-teal-ink underline decoration-teal/40 underline-offset-4"
            >
              All expertise
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
