import { Link } from "react-router"
import { usePageMeta } from "../lib/usePageMeta"

export function NotFoundPage() {
  usePageMeta("Page not found — ARCH Scientific", "The requested page could not be found.")

  return (
    <section className="bg-midnight px-5 pt-40 pb-28 text-white sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-[11px] font-medium tracking-[0.22em] text-accent uppercase">404</p>
        <h1 className="mt-4 font-serif text-5xl font-medium">This page is not available.</h1>
        <p className="mt-5 max-w-xl text-white/75">
          The address does not match a page on this site.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-sm font-medium text-accent-ink"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
