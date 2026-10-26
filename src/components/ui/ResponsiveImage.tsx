import type { Ref } from "react"
import type { ImageAsset } from "../../data/images"

function srcSet(asset: ImageAsset, format: "avif" | "webp") {
  return asset.widths.map((width) => `${asset.base}-${width}.${format} ${width}w`).join(", ")
}

export function ResponsiveImage({
  asset,
  sizes = "100vw",
  className = "",
  priority = false,
  decorative = false,
  imageRef,
}: {
  asset: ImageAsset
  sizes?: string
  className?: string
  priority?: boolean
  decorative?: boolean
  imageRef?: Ref<HTMLImageElement>
}) {
  const fallbackWidth = asset.widths[Math.min(1, asset.widths.length - 1)]

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(asset, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(asset, "webp")} sizes={sizes} />
      <img
        ref={imageRef}
        src={`${asset.base}-${fallbackWidth}.webp`}
        alt={decorative ? "" : asset.alt}
        width={asset.width}
        height={asset.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`block ${className}`}
      />
    </picture>
  )
}
