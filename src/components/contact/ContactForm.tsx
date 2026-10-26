import { useId, useState, type FormEvent, type ReactNode } from "react"
import { researchAreaOptions } from "../../data/content"

type Fields = {
  name: string
  email: string
  organisation: string
  researchArea: string
  project: string
}

type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = {
  name: "",
  email: "",
  organisation: "",
  researchArea: "",
  project: "",
}

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 2) errors.name = "Enter your name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address."
  }
  if (fields.organisation.trim().length > 160) {
    errors.organisation = "Organisation should be 160 characters or fewer."
  }
  if (!(researchAreaOptions as readonly string[]).includes(fields.researchArea)) {
    errors.researchArea = "Select a research area."
  }
  if (fields.project.trim().length < 20) {
    errors.project = "Describe the project in at least a short paragraph."
  }
  return errors
}

function enquiryText(fields: Fields) {
  return [
    `Name: ${fields.name.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Organisation: ${fields.organisation.trim() || "—"}`,
    `Research area: ${fields.researchArea}`,
    "",
    fields.project.trim(),
  ].join("\n")
}

const enquiryEndpoint = "https://formsubmit.co/ajax/prabathmagic@gmail.com"

type SendState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "failed"; message: string }

async function sendEnquiry(fields: Fields, honeypot: string) {
  const response = await fetch(enquiryEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New ARCH Scientific enquiry from ${fields.name.trim()}`,
      _template: "table",
      _captcha: "false",
      _honey: honeypot,
      name: fields.name.trim(),
      email: fields.email.trim(),
      organisation: fields.organisation.trim() || "—",
      research_area: fields.researchArea,
      project: fields.project.trim(),
    }),
  })
  const result = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null
  if (!response.ok || String(result?.success) !== "true") {
    throw new Error(result?.message || "The enquiry could not be sent.")
  }
}

const inputClass =
  "mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink outline-none transition duration-300 placeholder:text-muted/70 focus:border-teal-ink"

export function ContactForm() {
  const baseId = useId()
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [honeypot, setHoneypot] = useState("")
  const [send, setSend] = useState<SendState>({ status: "idle" })
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle")

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => {
      if (!current[key]) return current
      const next = { ...current }
      delete next[key]
      return next
    })
    if (send.status !== "sending") setSend({ status: "idle" })
    setCopyState("idle")
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (send.status === "sending") return
    const next = validate(fields)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setSend({ status: "idle" })
      const first = Object.keys(next)[0]
      document.getElementById(`${baseId}-${first}`)?.focus()
      return
    }
    setSend({ status: "sending" })
    try {
      await sendEnquiry(fields, honeypot)
      setFields(empty)
      setSend({ status: "sent" })
    } catch (error) {
      setSend({
        status: "failed",
        message: error instanceof Error ? error.message : "The enquiry could not be sent.",
      })
    }
  }

  async function copyEnquiry() {
    const text = enquiryText(fields)
    try {
      await navigator.clipboard.writeText(text)
      setCopyState("copied")
    } catch {
      setCopyState("failed")
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={`${baseId}-note`}>
      <p id={`${baseId}-note`} className="text-sm leading-relaxed text-muted">
        Your enquiry is sent by email to ARCH Scientific. Fields marked as required must be
        completed.
      </p>

      {Object.keys(errors).length > 0 ? (
        <div role="alert" className="mt-5 border border-danger/30 bg-danger-soft px-4 py-3 text-sm text-danger">
          Please correct the highlighted fields.
        </div>
      ) : null}

      <div aria-live="polite">
        {send.status === "sent" ? (
          <div role="status" className="mt-5 border border-teal/30 bg-success-soft px-4 py-3 text-sm leading-relaxed text-ink">
            Thank you. Your enquiry has been sent, and ARCH Scientific will reply to the email
            address you provided.
          </div>
        ) : null}
        {send.status === "failed" ? (
          <div role="alert" className="mt-5 border border-danger/30 bg-danger-soft px-4 py-3 text-sm leading-relaxed text-danger">
            {send.message} Please try again, or copy your enquiry so it isn&apos;t lost.
          </div>
        ) : null}
      </div>

      <input
        type="text"
        name="_honey"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          label="Name"
          error={errors.name}
          required
        >
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
          />
        </Field>
        <Field id={`${baseId}-email`} label="Email" error={errors.email} required>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
          />
        </Field>
        <Field id={`${baseId}-organisation`} label="Organisation" error={errors.organisation}>
          <input
            id={`${baseId}-organisation`}
            name="organization"
            autoComplete="organization"
            value={fields.organisation}
            onChange={(event) => update("organisation", event.target.value)}
            className={inputClass}
            aria-invalid={Boolean(errors.organisation)}
            aria-describedby={errors.organisation ? `${baseId}-organisation-error` : undefined}
          />
        </Field>
        <Field id={`${baseId}-researchArea`} label="Research area" error={errors.researchArea} required>
          <select
            id={`${baseId}-researchArea`}
            name="researchArea"
            value={fields.researchArea}
            onChange={(event) => update("researchArea", event.target.value)}
            className={`${inputClass} appearance-none`}
            aria-invalid={Boolean(errors.researchArea)}
            aria-describedby={errors.researchArea ? `${baseId}-researchArea-error` : undefined}
          >
            <option value="">Select a research area</option>
            {researchAreaOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field id={`${baseId}-project`} label="Project description" error={errors.project} required>
          <textarea
            id={`${baseId}-project`}
            name="project"
            rows={6}
            value={fields.project}
            onChange={(event) => update("project", event.target.value)}
            className={`${inputClass} resize-y`}
            aria-invalid={Boolean(errors.project)}
            aria-describedby={errors.project ? `${baseId}-project-error` : undefined}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={send.status === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-ink transition duration-300 hover:bg-accent-strong disabled:cursor-wait disabled:opacity-70"
        >
          {send.status === "sending" ? "Sending…" : "Submit enquiry"}
        </button>
        {send.status === "failed" ? (
          <button
            type="button"
            onClick={() => void copyEnquiry()}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-medium text-ink"
          >
            {copyState === "copied" ? "Copied" : "Copy enquiry text"}
          </button>
        ) : null}
      </div>

      {copyState === "failed" ? (
        <textarea
          readOnly
          className="mt-4 w-full border border-line bg-paper p-3 text-sm"
          rows={8}
          value={enquiryText(fields)}
          aria-label="Enquiry text to copy manually"
        />
      ) : null}
    </form>
  )
}

function Field({
  id,
  label,
  error,
  required = false,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] font-medium tracking-[0.16em] text-teal-ink uppercase">
        {label}
        {required ? <span className="sr-only"> required</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  )
}
