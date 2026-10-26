export const tagline = "Supporting Ideas Become Discoveries…"

export const disciplines = [
  "Advanced Materials",
  "Electrochemistry",
  "Catalysis",
  "Analytical Science",
  "Energy Technologies",
] as const

export const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/expertise", label: "Expertise", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/insights", label: "Research & Insights", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const

export type ExpertiseArea = {
  slug: string
  title: string
  description: string
  topics: readonly string[]
}

export const expertiseAreas: readonly ExpertiseArea[] = [
  {
    slug: "advanced-materials",
    title: "Advanced Materials",
    description:
      "Development and characterisation of polymer composites, ceramic composites, carbon-fibre materials, functional coatings and surface-modified materials.",
    topics: [
      "Polymer composites",
      "Ceramic composites",
      "Carbon-fibre materials",
      "Functional coatings",
      "Surface-modified materials",
    ],
  },
  {
    slug: "electrochemistry",
    title: "Electrochemistry",
    description:
      "Electrochemical characterisation, electrode development, electrolyser research, battery-related studies and electrochemical performance evaluation.",
    topics: [
      "Electrochemical characterisation",
      "Electrode development",
      "Electrolyser research",
      "Battery-related studies",
      "Electrochemical performance evaluation",
    ],
  },
  {
    slug: "catalysis",
    title: "Catalysis",
    description:
      "Development and evaluation of photocatalysts, electrocatalysts and thermocatalysts for energy and environmental applications.",
    topics: [
      "Photocatalysts",
      "Electrocatalysts",
      "Thermocatalysts",
      "Energy applications",
      "Environmental applications",
    ],
  },
  {
    slug: "analytical-science",
    title: "Analytical Science",
    description:
      "Advanced materials and chemical characterisation using spectroscopy, microscopy, diffraction, chromatography and electrochemical techniques.",
    topics: [
      "Spectroscopy",
      "Microscopy",
      "Diffraction",
      "Chromatography",
      "Electrochemical techniques",
    ],
  },
  {
    slug: "green-hydrogen-energy",
    title: "Green Hydrogen & Energy",
    description:
      "R&D support for water splitting, photoelectrodes, membrane electrolysers, catalyst development and related energy technologies.",
    topics: [
      "Water splitting",
      "Photoelectrodes",
      "Membrane electrolysers",
      "Catalyst development",
      "Related energy technologies",
    ],
  },
  {
    slug: "rd-strategy",
    title: "R&D Strategy, Method Development & Problem Solving",
    description:
      "Experimental design, technical investigation, data analysis, optimisation and scientific reporting for challenging R&D projects.",
    topics: [
      "Experimental design",
      "Technical investigation",
      "Data analysis",
      "Optimisation",
      "Scientific reporting",
    ],
  },
]

export const whyUs = [
  {
    title: "Multidisciplinary",
    text: "Our expertise spans analytical chemistry, materials science, electrochemistry, catalysis and energy technologies.",
  },
  {
    title: "Research + Industry",
    text: "Experience across universities, research institutes and commercial R&D environments.",
  },
  {
    title: "Instrumentation Expertise",
    text: "Extensive practical experience with advanced scientific instrumentation and analytical techniques.",
  },
  {
    title: "Evidence Driven",
    text: "Experimental decisions are supported by quantitative analysis, appropriate characterisation and scientific interpretation.",
  },
  {
    title: "Commercially Aware",
    text: "Experience delivering client-funded research under practical timelines and technical requirements.",
  },
] as const

export const researchStats = [
  { value: 44, label: "Peer-reviewed publications" },
  { value: 1, label: "Patent" },
  { value: 10, suffix: "+", label: "Years of research and industry experience" },
  { value: 3, label: "Countries: Australia, Sweden, Sri Lanka" },
] as const

export const founder = {
  name: "Sam Ratnayake",
  title: "PhD | Scientific R&D Consultant",
  portraitAlt: "Sam Ratnayake in a laboratory, wearing a white lab coat and safety glasses.",
  bio: [
    "I'm Sam Ratnayake, a PhD-qualified scientist with more than a decade of experience across university research, industrial R&D and technical facility management in Australia, Sweden and Sri Lanka.",
    "My background is in analytical chemistry, electrochemistry and materials science. I've developed catalysts and electrode materials for green hydrogen and solar fuels, led client-funded R&D projects, and set up and managed research laboratories, including their analytical instruments, gas systems and safety compliance.",
    "I'm the author of 44 peer-reviewed publications and a patent, and I review for Springer Nature and Elsevier.",
    "I work hands-on with research-grade instrumentation, including GC-MS, ICP-MS, XRD, XPS, electron microscopy and potentiostats, and I analyse complex datasets using multivariate statistics and Python.",
    "I'm also a qualified WHS professional (Cert IV) with ISO 9001 and ISO 14001 experience.",
  ],
  highlights: [
    "University research, industrial R&D and technical facility management",
    "Catalysts and electrode materials for green hydrogen and solar fuels",
    "Client-funded R&D projects and research laboratory setup",
    "Reviewer for Springer Nature and Elsevier",
  ],
} as const

export type ConsultingService = {
  title: string
  items: readonly string[]
}

export const consultingServices: readonly ConsultingService[] = [
  {
    title: "Analytical Method Development",
    items: ["Analytical method development", "Instrument evaluation and selection"],
  },
  {
    title: "Materials & Electrochemical R&D",
    items: ["Catalyst development", "Advanced materials", "Electrochemical research"],
  },
  {
    title: "Laboratory Setup & Management",
    items: [
      "Research laboratory setup",
      "Analytical instrument management",
      "Laboratory compliance",
    ],
  },
  {
    title: "Scientific Data Analysis",
    items: [
      "Complex dataset interpretation",
      "Multivariate statistics",
      "Python-based scientific analysis",
      "Technical reporting",
    ],
  },
  {
    title: "Technical Training",
    items: ["Staff training", "Technical documentation", "Laboratory procedures"],
  },
  {
    title: "Industrial WHS Management",
    items: ["Workplace health and safety", "Laboratory risk management", "Safety compliance"],
  },
]

export type ResearchProfile = {
  id: "scholar" | "orcid" | "researchgate" | "linkedin"
  label: string
  short: string
  href: string
}

export const researchProfiles: readonly ResearchProfile[] = [
  {
    id: "scholar",
    label: "Google Scholar",
    short: "Google Scholar",
    href: "https://scholar.google.com.au/citations?user=TeUrGFkAAAAJ&hl=en&oi=ao",
  },
  {
    id: "orcid",
    label: "ORCID Researcher Profile",
    short: "ORCID",
    href: "https://orcid.org/0000-0001-8682-0437",
  },
  {
    id: "researchgate",
    label: "ResearchGate",
    short: "ResearchGate",
    href: "https://www.researchgate.net/profile/Samantha-Ratnayake",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    short: "LinkedIn",
    href: "https://www.linkedin.com/in/samantha-ratnayake-ph-d-3977bb3a/",
  },
]

export const researchAreas = [
  "Advanced materials",
  "Analytical chemistry",
  "Electrochemistry",
  "Catalysis",
  "Green hydrogen",
  "Solar fuels",
  "Laboratory instrumentation",
  "Scientific data analysis",
] as const

export const instruments = [
  "GC-MS",
  "ICP-MS",
  "XRD",
  "XPS",
  "Electron microscopy",
  "Potentiostats",
] as const

export const qualifications = [
  "PhD in Applied Chemistry, RMIT University",
  "MSc in Environmental Chemistry, Umeå University, Sweden",
  "BSc (Hons) in Applied Sciences, University of Peradeniya",
] as const

export const roles = [
  "Senior Scientist and WHS Site Manager in renewable energy technology",
  "Research and Teaching Associate at RMIT University",
  "Science Group Leader and Research Scientist at the Sri Lanka Institute of Nanotechnology",
  "Research and academic roles at the University of Peradeniya",
] as const

export const fields = [
  "Solar water splitting",
  "Photoelectrodes and catalysts",
  "Polymer and ceramic composites",
  "Carbon-fibre materials",
  "Functional and protective coatings",
  "Analytical chemistry",
  "Surface and materials characterisation",
  "Environmental and public-health-related research",
] as const

export const principles = [
  { title: "Rigorous", text: "Based on sound scientific methodology." },
  { title: "Practical", text: "Focused on the actual R&D objective." },
  { title: "Transparent", text: "With clear interpretation of experimental results." },
  {
    title: "Collaborative",
    text: "Working alongside internal technical teams rather than operating in isolation.",
  },
  { title: "Outcome-focused", text: "Designed to help move the project forward." },
] as const

export const researchAreaOptions = [
  ...expertiseAreas.map((area) => area.title),
  "Not sure yet",
] as const

export function findExpertise(slug: string | undefined) {
  return expertiseAreas.find((area) => area.slug === slug)
}
