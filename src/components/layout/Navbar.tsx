import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router"
import { navLinks } from "../../data/content"
import { useLenis } from "../../lib/SmoothScroll"
import { SiteLogo } from "./SiteLogo"

export function Navbar() {
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const lenis = useLenis()
  const { pathname } = useLocation()

  useEffect(() => {
    const update = () => {
      const next = window.scrollY > 12
      setCompact((current) => (current === next ? current : next))
    }
    update()
    if (!lenis) {
      window.addEventListener("scroll", update, { passive: true })
      return () => window.removeEventListener("scroll", update)
    }
    return lenis.on("scroll", update)
  }, [lenis])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const panel = document.getElementById("mobile-navigation")
    const main = document.getElementById("main")
    const footer = document.querySelector("footer")
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        return
      }
      if (event.key !== "Tab" || !panel) return
      const items = [
        document.getElementById("menu-toggle"),
        ...panel.querySelectorAll<HTMLElement>("a"),
      ].filter((item): item is HTMLElement => item instanceof HTMLElement)
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    main?.setAttribute("inert", "")
    footer?.setAttribute("inert", "")
    lenis?.stop()
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
      lenis?.start()
      window.removeEventListener("keydown", onKey)
    }
  }, [open, lenis])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[height,background-color,border-color,backdrop-filter] duration-500 ease-out ${
        compact || open
          ? "h-16 border-b border-white/10 bg-midnight/90 backdrop-blur-lg"
          : "h-20 border-b border-transparent bg-transparent backdrop-blur-0 lg:h-24"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          to="/"
          aria-label="ARCH Scientific home"
          className="flex min-w-0 items-center gap-3 rounded-sm"
          onClick={() => setOpen(false)}
        >
          <SiteLogo compact={compact} />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `group relative block py-2 text-sm transition-colors duration-300 ${
                      isActive ? "text-white" : "text-mist hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`absolute right-0 -bottom-0.5 left-0 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink transition duration-300 hover:bg-accent-strong hover:shadow-[0_10px_30px_-12px_var(--color-accent)]"
          >
            Discuss Your R&D Challenge
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </nav>

        <button
          type="button"
          id="menu-toggle"
          className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-accent/60 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ease-out ${open ? "top-1/2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute top-1/2 left-0 block h-px w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ease-out ${open ? "top-1/2 -rotate-45" : "top-full"}`}
            />
          </span>
        </button>
      </div>
    </header>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-midnight/97 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="flex h-full flex-col overflow-y-auto px-5 pt-6 pb-10 sm:px-8" aria-label="Mobile">
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={link.to}
                className={`transition duration-500 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
              >
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `flex min-h-16 items-center justify-between border-b border-white/10 font-serif text-[2.1rem] ${
                      isActive ? "text-accent" : "text-white"
                    }`
                  }
                >
                  {link.label}
                  <ArrowRight size={18} className="text-white/40" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink"
          >
            Discuss Your R&D Challenge
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </>
  )
}
