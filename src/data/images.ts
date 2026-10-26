export type ImageAsset = {
  base: string
  widths: readonly number[]
  width: number
  height: number
  alt: string
}

export const heroImage: ImageAsset = {
  base: "/images/hero/crystalline-plate-micrograph",
  widths: [768, 1280, 1672],
  width: 1672,
  height: 941,
  alt: "Micrograph of a crystalline plate resting on a layered crystal.",
}

export const expertiseImages: Record<string, ImageAsset> = {
  "advanced-materials": {
    base: "/images/expertise/nanofiber-mesh",
    widths: [640, 1080, 1600],
    width: 2159,
    height: 728,
    alt: "Blue-toned microscopy-style image of a nanofibre mesh.",
  },
  electrochemistry: {
    base: "/images/expertise/electrochemical-bubbles",
    widths: [640, 1080, 1600],
    width: 2172,
    height: 724,
    alt: "Electrochemical cells with gas bubbles forming on the electrodes.",
  },
  catalysis: {
    base: "/images/expertise/nanoparticle-spheres",
    widths: [640, 1080, 1600],
    width: 2172,
    height: 724,
    alt: "Microscopy-style image of textured nanoparticle spheres.",
  },
  "analytical-science": {
    base: "/images/expertise/chromatogram-lc-ms",
    widths: [640, 1080, 1600],
    width: 2171,
    height: 724,
    alt: "A chromatogram beside an LC-MS autosampler with sample vials.",
  },
  "green-hydrogen-energy": {
    base: "/images/expertise/molecular-lab-droplet",
    widths: [640, 1080, 1600, 2172],
    width: 2172,
    height: 724,
    alt: "A pipette releasing a droplet above glass tubes, with a molecular model behind.",
  },
  "rd-strategy": {
    base: "/images/expertise/glassboard-analysis",
    widths: [640, 1080, 1600],
    width: 2172,
    height: 724,
    alt: "A scientist annotating plots and equations on a glass board.",
  },
}

export const researchBackground: ImageAsset = {
  base: "/images/research/molecular-dawn-renewables",
  widths: [960, 1600, 2172],
  width: 2172,
  height: 724,
  alt: "",
}

export const contactBackground: ImageAsset = expertiseImages["green-hydrogen-energy"]
