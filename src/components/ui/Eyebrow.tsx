export function Eyebrow({
  children,
  light = false,
}: {
  children: string
  light?: boolean
}) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.26em] ${light ? "text-teal-ink" : "text-accent"}`}
    >
      {children}
    </p>
  )
}
