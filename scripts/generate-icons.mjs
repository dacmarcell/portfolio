// Generates raster icons from src/app/icon.svg
// Outputs: src/app/icon.png (512x512), src/app/apple-icon.png (180x180), src/app/favicon.ico (16/32/48)
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import toIco from 'to-ico'

const root = path.resolve(process.cwd())
const srcSvg = path.join(root, 'src', 'app', 'icon.svg')
const outDir = path.join(root, 'src', 'app')

async function ensure() {
  try {
    await fs.access(srcSvg)
  } catch {
    throw new Error(`Missing ${srcSvg}.`)
  }
}

async function genPng(size, outName) {
  const svg = await fs.readFile(srcSvg)
  const out = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toBuffer()
  await fs.writeFile(path.join(outDir, outName), out)
  console.log(`Wrote ${outName} (${size}x${size})`)
  return out
}

async function genIco() {
  const sizes = [16, 32, 48]
  const pngs = []
  for (const s of sizes) {
    pngs.push(await genPng(s, `.__tmp-${s}.png`))
  }
  const ico = await toIco(pngs)
  await fs.writeFile(path.join(outDir, 'favicon.ico'), ico)
  // cleanup tmp files written to disk in genPng (but we wrote buffers, not files) — nothing to remove
  console.log('Wrote favicon.ico (16/32/48)')
}

async function main() {
  await ensure()
  await genPng(512, 'icon.png')
  await genPng(180, 'apple-icon.png')
  await genIco()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

