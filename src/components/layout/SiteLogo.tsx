import { tagline } from "../../data/content"

export function SiteLogo({
  compact = false,
  showTagline = false,
}: {
  compact?: boolean
  showTagline?: boolean
}) {
  return (
    <>
      <img
        src="/images/logo-mark-64.webp"
        srcSet="/images/logo-mark-64.webp 1x, /images/logo-mark-128.webp 2x"
        alt=""
        width={64}
        height={64}
        className={`shrink-0 transition-[width,height] duration-300 ${compact ? "h-10 w-10" : "h-11 w-11 lg:h-14 lg:w-14"}`}
        decoding="async"
      />
      <span className="min-w-0 leading-none" aria-hidden="true">
        <span className="block font-sans text-[1.05rem] font-semibold tracking-[0.16em] text-white lg:text-[1.15rem]">
          ARCH
        </span>
        <span className="mt-0.5 block font-sans text-[0.9rem] font-semibold tracking-[0.18em] text-accent lg:text-[0.95rem]">
          SCIENTIFIC
        </span>
        {showTagline ? (
          <span className="mt-2 block font-serif text-sm text-mist italic">{tagline}</span>
        ) : null}
      </span>
    </>
  )
}
