import { useLayoutEffect, type DependencyList, type RefObject } from "react"
import { gsap, ScrollTrigger } from "./gsap"

export const ease = {
  out: "power2.out",
  reveal: "power3.out",
} as const

export const duration = {
  text: 0.8,
  image: 1.2,
} as const

type Targets = gsap.TweenTarget

/**
 * Runs GSAP setup inside a matchMedia context scoped to `scope`. Setup is skipped entirely
 * when the user prefers reduced motion, and everything is reverted on unmount.
 */
export function useGsap(
  scope: RefObject<HTMLElement | null>,
  setup: (env: { desktop: boolean; root: HTMLElement }) => void,
  deps: DependencyList = [],
) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return
    const mm = gsap.matchMedia(root)
    mm.add(
      { motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1024px)" },
      (context) => {
        const { motion, desktop } = context.conditions as { motion: boolean; desktop: boolean }
        if (motion) setup({ desktop, root })
      },
    )
    return () => mm.revert()
    // Callers pass their own dependency list, like useEffect.
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export function fadeUp(
  targets: Targets,
  {
    trigger,
    start = "top 86%",
    y = 24,
    delay = 0,
    stagger = 0,
  }: { trigger?: Element | string; start?: string; y?: number; delay?: number; stagger?: number } = {},
) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration: duration.text,
      delay,
      stagger,
      ease: ease.out,
      scrollTrigger: trigger ? { trigger, start, once: true } : undefined,
    },
  )
}

export function batchReveal(targets: string | Element[], { y = 20, stagger = 0.1 } = {}) {
  gsap.set(targets, { autoAlpha: 0, y })
  return ScrollTrigger.batch(targets, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.75, stagger, ease: ease.out, overwrite: true }),
  })
}

export function parallax(target: Targets, trigger: Element | string, amount = 5) {
  return gsap.fromTo(
    target,
    { yPercent: -amount },
    {
      yPercent: amount,
      ease: "none",
      scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 0.8 },
    },
  )
}

export function maskReveal(target: Targets, { from = "inset(100% 0% 0% 0%)", ...rest } = {}) {
  return gsap.fromTo(
    target,
    { clipPath: from },
    { clipPath: "inset(0% 0% 0% 0%)", duration: duration.image, ease: ease.reveal, ...rest },
  )
}
