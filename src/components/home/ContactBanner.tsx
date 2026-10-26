import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { contactBackground } from "../../data/images"
import { ease, parallax, useGsap } from "../../lib/animation"
import { gsap } from "../../lib/gsap"
import { Button } from "../ui/Button"
import { Eyebrow } from "../ui/Eyebrow"
import { ResponsiveImage } from "../ui/ResponsiveImage"

export function ContactBanner() {
  const root = useRef<HTMLElement>(null)

  useGsap(root, ({ desktop, root: scope }) => {
    gsap
      .timeline({
        defaults: { ease: ease.out },
        scrollTrigger: { trigger: scope, start: "top 75%", once: true },
      })
      .fromTo(".contact-bg", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2 })
      .fromTo(
        ".contact-copy",
        { autoAlpha: 0, y: 22 },
        { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0.25,
      )
      .fromTo(".contact-cta", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.75)

    if (desktop) parallax(".contact-parallax", scope, 5)
  })

  return (
    <section ref={root} className="relative isolate overflow-hidden bg-midnight text-white">
      <div className="contact-parallax absolute inset-0 -z-10 lg:-top-[8%] lg:-bottom-[8%]">
        <ResponsiveImage
          asset={contactBackground}
          decorative
          sizes="100vw"
          className="contact-bg h-full w-full object-cover object-[78%_center]"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight from-25% via-midnight/85 via-50% to-midnight/10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-midnight/40 md:hidden" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <div className="max-w-xl">
          <div className="contact-copy motion-safe:opacity-0">
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h2 className="contact-copy mt-4 font-serif text-[2.8rem] leading-[1.02] font-medium motion-safe:opacity-0 sm:text-6xl">
            Discuss Your
            <br />
            <span className="text-accent">R&D Challenge</span>
          </h2>
          <p className="contact-copy mt-6 text-base leading-relaxed text-mist motion-safe:opacity-0 sm:text-lg">
            Whether you have a specific technical problem, a new research idea or need support with
            laboratory capability, I'd be happy to discuss how ARCH Scientific can help.
          </p>
          <div className="contact-cta mt-9 motion-safe:opacity-0">
            <Button to="/contact">
              Send an Enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
