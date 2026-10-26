import { founder } from "../../data/content"

const srcSet = (format: string) =>
  [480, 819].map((width) => `/images/sam-profile-${width}.${format} ${width}w`).join(", ")

export function Portrait({
  className = "",
  sizes = "(min-width: 1280px) 420px, (min-width: 1024px) 45vw, 100vw",
}: {
  className?: string
  sizes?: string
}) {
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src="/images/sam-profile-819.jpg"
        alt={founder.portraitAlt}
        width={819}
        height={1024}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        className={`block object-cover object-[50%_22%] ${className}`}
      />
    </picture>
  )
}
