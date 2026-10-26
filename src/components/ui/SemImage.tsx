import type { Ref } from "react"

const webp = [640, 960, 1280, 1920, 2400]
  .map((width) => `/images/sem-${width}.webp ${width}w`)
  .join(", ")

export function SemImage({
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  imageRef,
}: {
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  imageRef?: Ref<HTMLImageElement>
}) {
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        ref={imageRef}
        src="/images/sem-1920.jpg"
        alt={alt}
        width={2560}
        height={1797}
        sizes={sizes}
        className={`block ${className}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  )
}
