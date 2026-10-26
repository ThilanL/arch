import { useRef, type ReactNode } from "react"
import { fadeUp, useGsap } from "../../lib/animation"

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGsap(ref, ({ root }) => {
    fadeUp(root, { trigger: root, delay, y: 28 })
  }, [delay])

  return (
    <div ref={ref} className={`motion-safe:opacity-0 ${className}`}>
      {children}
    </div>
  )
}
