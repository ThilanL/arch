import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { disciplines, expertiseAreas, navLinks } from "../../data/content"
import { ProfileLinksCompact } from "../research/ResearchProfiles"
import { SiteLogo } from "./SiteLogo"

const heading = "text-[11px] font-semibold uppercase tracking-[0.22em] text-accent"
const year = new Date().getFullYear()
const link = "text-sm text-mist transition-colors duration-300 hover:text-white"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Link to="/" aria-label="ARCH Scientific home" className="inline-flex items-center gap-3">
            <SiteLogo showTagline />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
            Practical scientific expertise for complex R&D challenges.
          </p>
          <p className="mt-4 max-w-sm text-xs leading-relaxed tracking-wide text-white/50">
            {disciplines.join(" · ")}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className={heading}>Quick links</h2>
          <ul className="mt-5 space-y-2.5">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={heading}>Expertise</h2>
          <ul className="mt-5 space-y-2.5">
            {expertiseAreas.map((area) => (
              <li key={area.slug}>
                <Link to={`/expertise/${area.slug}`} className={link}>
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={heading}>Contact</h2>
          <p className="mt-5 text-sm leading-relaxed text-mist">
            Enquiries are welcome through the contact page.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink transition duration-300 hover:bg-accent-strong"
          >
            Send an Enquiry
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <h2 className={`${heading} mt-9`}>Research profiles</h2>
          <div className="mt-4">
            <ProfileLinksCompact tone="dark" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-full max-w-7xl px-5 py-5 text-xs text-white/50 sm:px-8">
          © {year} ARCH Scientific. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
