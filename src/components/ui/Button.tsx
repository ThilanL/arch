import type { ReactNode } from "react"
import { Link } from "react-router"

type Variant = "primary" | "secondary" | "light"

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink shadow-[0_0_0_0_var(--color-accent)] hover:bg-accent-strong hover:shadow-[0_10px_30px_-12px_var(--color-accent)]",
  secondary:
    "border border-white/35 bg-transparent text-white hover:border-accent/70 hover:bg-white/5",
  light:
    "border border-ink/15 bg-transparent text-ink hover:border-teal-ink hover:text-teal-ink",
}

export function Button({
  to,
  variant = "primary",
  children,
  className = "",
  external = false,
}: {
  to: string
  variant?: Variant
  children: ReactNode
  className?: string
  external?: boolean
}) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium tracking-wide transition duration-300 ${styles[variant]} ${className}`

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
