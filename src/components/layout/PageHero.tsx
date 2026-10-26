import type { ReactNode } from "react"
import { Eyebrow } from "../ui/Eyebrow"

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <section className="bg-midnight pt-32 pb-16 text-white sm:pt-36 lg:pt-40">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl font-serif text-[2.8rem] leading-[1.04] font-medium text-balance sm:text-6xl lg:text-[4.4rem]">
          {title}
        </h1>
        {children ? (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
