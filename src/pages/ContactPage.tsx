import { ContactForm } from "../components/contact/ContactForm"
import { PageHero } from "../components/layout/PageHero"
import { usePageMeta } from "../lib/usePageMeta"

export function ContactPage() {
  usePageMeta(
    "Contact — ARCH Scientific",
    "Discuss an R&D challenge with ARCH Scientific. Send an enquiry and ARCH Scientific will reply by email.",
  )

  return (
    <>
      <PageHero eyebrow="Contact" title="Discuss your R&D challenge">
        <p>Practical scientific expertise for complex R&D challenges.</p>
      </PageHero>
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
