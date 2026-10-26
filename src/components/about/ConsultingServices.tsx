import {
  Atom,
  ChartScatter,
  FlaskConical,
  HardHat,
  Microscope,
  Presentation,
  type LucideIcon,
} from "lucide-react"
import { consultingServices } from "../../data/content"

const icons: Record<string, LucideIcon> = {
  "Analytical Method Development": Microscope,
  "Materials & Electrochemical R&D": Atom,
  "Laboratory Setup & Management": FlaskConical,
  "Scientific Data Analysis": ChartScatter,
  "Technical Training": Presentation,
  "Industrial WHS Management": HardHat,
}

export function ServiceIcon({ title, size = 20 }: { title: string; size?: number }) {
  const Icon = icons[title] ?? Microscope
  return <Icon size={size} strokeWidth={1.4} aria-hidden="true" />
}

export function ServiceList({
  className = "",
  animated = false,
}: {
  className?: string
  animated?: boolean
}) {
  return (
    <ul className={className}>
      {consultingServices.map((service) => (
        <li
          key={service.title}
          className={`service-item group flex items-center gap-3 border-t border-line py-3.5 text-sm leading-snug text-ink ${animated ? "motion-safe:opacity-0" : ""}`}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-teal-ink transition-colors duration-300 group-hover:border-teal-ink/60 group-hover:bg-teal-ink/5">
            <ServiceIcon title={service.title} size={17} />
          </span>
          {service.title}
        </li>
      ))}
    </ul>
  )
}

export function ServiceCards() {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {consultingServices.map((service, index) => (
        <li
          key={service.title}
          className="group flex flex-col border border-line bg-white p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-teal-ink/40 hover:shadow-[0_18px_40px_-28px_rgba(2,32,49,0.45)]"
        >
          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-teal-ink transition-colors duration-300 group-hover:border-teal-ink/60">
              <ServiceIcon title={service.title} size={20} />
            </span>
            <span className="text-[11px] tracking-[0.18em] text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-6 font-serif text-2xl leading-tight">{service.title}</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {service.items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-[0.6rem] h-px w-3 shrink-0 bg-teal-ink/60" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
