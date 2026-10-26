import Lenis from "lenis"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useLocation } from "react-router"
import { gsap, prefersReducedMotion, ScrollTrigger } from "./gsap"
import "lenis/dist/lenis.css"

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (prefersReducedMotion()) return

    const instance = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      autoRaf: false,
    })

    instance.on("scroll", ScrollTrigger.update)
    const tick = (time: number) => {
      instance.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(instance)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)

    return () => {
      window.removeEventListener("load", refresh)
      gsap.ticker.remove(tick)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  useEffect(() => {
    const scroll = () => {
      const reduced = prefersReducedMotion()
      const target = hash ? document.getElementById(hash.slice(1)) : null

      if (reduced || !lenis) {
        if (target) target.scrollIntoView()
        else window.scrollTo(0, 0)
        return
      }

      if (target) lenis.scrollTo(target, { offset: -88, immediate: true })
      else lenis.scrollTo(0, { immediate: true })
      ScrollTrigger.refresh()
    }

    const frame = window.requestAnimationFrame(scroll)
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash, lenis])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
