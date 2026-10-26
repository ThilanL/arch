import { ArrowUpRight, GraduationCap } from "lucide-react"
import { useRef } from "react"
import { researchProfiles, type ResearchProfile } from "../../data/content"
import { fadeUp, useGsap } from "../../lib/animation"

function Monogram({ text, round = false }: { text: string; round?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
      {round ? (
        <circle cx="12" cy="12" r="10.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <rect
          x="1.75"
          y="1.75"
          width="20.5"
          height="20.5"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      <text
        x="12"
        y="12.5"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        fontFamily="Outfit, system-ui, sans-serif"
        fontSize={text.length > 2 ? 8 : 9.5}
        fontWeight="600"
      >
        {text}
      </text>
    </svg>
  )
}

export function ProfileIcon({ id }: { id: ResearchProfile["id"] }) {
  if (id === "scholar") return <GraduationCap className="h-full w-full" strokeWidth={1.5} aria-hidden="true" />
  if (id === "orcid") return <Monogram text="iD" round />
  if (id === "researchgate") return <Monogram text="RG" />
  return <Monogram text="in" />
}

function useStaggerIn(selector: string) {
  const root = useRef<HTMLUListElement>(null)

  useGsap(root, ({ root: el }) => {
    fadeUp(selector, { trigger: el, start: "top 92%", y: 10, stagger: 0.08 })
  }, [selector])

  return root
}

export function ProfileLinksCompact({ tone = "light" }: { tone?: "light" | "dark" }) {
  const root = useStaggerIn(".profile-chip")
  const base =
    tone === "light"
      ? "border-line text-ink hover:border-teal-ink hover:text-teal-ink"
      : "border-white/15 text-white/80 hover:border-accent hover:text-accent"

  return (
    <ul ref={root} className="grid grid-cols-2 gap-2" aria-label="Research profiles">
      {researchProfiles.map((profile) => (
        <li key={profile.id} className="profile-chip motion-safe:opacity-0">
          <a
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex min-h-11 w-full items-center justify-center gap-2 rounded-full border px-3 text-xs font-medium tracking-wide transition-colors duration-300 ${base}`}
          >
            <span className="h-4 w-4 shrink-0">
              <ProfileIcon id={profile.id} />
            </span>
            {profile.short}
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function ResearchProfiles({ tone = "light" }: { tone?: "light" | "dark" }) {
  const root = useStaggerIn(".profile-card")
  const dark = tone === "dark"

  return (
    <ul ref={root} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Research profiles">
      {researchProfiles.map((profile) => (
        <li key={profile.id} className="profile-card motion-safe:opacity-0">
          <a
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex h-full flex-col justify-between gap-10 border p-6 transition-colors duration-300 ${
              dark
                ? "border-white/12 bg-white/[0.03] text-white hover:border-accent/60"
                : "border-line bg-white text-ink hover:border-teal-ink/50"
            }`}
          >
            <span className="flex items-start justify-between">
              <span
                className={`h-9 w-9 transition-colors duration-300 ${dark ? "text-white/70 group-hover:text-accent" : "text-ink/70 group-hover:text-teal-ink"}`}
              >
                <ProfileIcon id={profile.id} />
              </span>
              <ArrowUpRight
                size={18}
                className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${dark ? "text-accent" : "text-teal-ink"}`}
                aria-hidden="true"
              />
            </span>
            <span>
              <span className="relative inline-block font-serif text-xl">
                {profile.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 ${dark ? "bg-accent" : "bg-teal-ink"}`}
                  aria-hidden="true"
                />
              </span>
              <span className={`mt-2 block text-xs ${dark ? "text-white/55" : "text-muted"}`}>
                {new URL(profile.href).hostname.replace(/^www\./, "")}
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
