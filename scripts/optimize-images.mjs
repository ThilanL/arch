// Builds responsive AVIF/WebP variants from the original PNGs in assets/source-images.
// Run with: npm run images
import { mkdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const root = path.resolve(import.meta.dirname, "..")
const source = path.join(root, "assets/source-images")
const out = path.join(root, "public/images")

const jobs = [
  { file: "crystalline-plate-micrograph.png", dir: "hero", widths: [768, 1280, 1672] },
  { file: "nanofiber-mesh.png", dir: "expertise", widths: [640, 1080, 1600] },
  { file: "electrochemical-bubbles.png", dir: "expertise", widths: [640, 1080, 1600] },
  { file: "nanoparticle-spheres.png", dir: "expertise", widths: [640, 1080, 1600] },
  { file: "chromatogram-lc-ms.png", dir: "expertise", widths: [640, 1080, 1600] },
  { file: "molecular-lab-droplet.png", dir: "expertise", widths: [640, 1080, 1600, 2172] },
  { file: "glassboard-analysis.png", dir: "expertise", widths: [640, 1080, 1600] },
  { file: "molecular-dawn-renewables.png", dir: "research", widths: [960, 1600, 2172] },
]

for (const job of jobs) {
  const name = job.file.replace(/\.png$/, "")
  const dest = path.join(out, job.dir)
  await mkdir(dest, { recursive: true })
  const input = path.join(source, job.file)
  for (const width of job.widths) {
    const base = sharp(input).resize({ width, withoutEnlargement: true })
    await base.clone().avif({ quality: 52, effort: 5 }).toFile(path.join(dest, `${name}-${width}.avif`))
    await base.clone().webp({ quality: 78 }).toFile(path.join(dest, `${name}-${width}.webp`))
  }
  console.log(`${job.dir}/${name}: ${job.widths.join(", ")}`)
}
