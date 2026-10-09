// Renders the built /cv page to a PDF using a locally installed Chrome.
// Usage: bun run cv:pdf  (builds the site first)
import { createServer } from 'node:http'
import { readFile, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { chromium } from 'playwright-core'

const DIST = 'dist'
const PAGES = [
  { path: '/cv', out: 'public/cv/bartosz-podgruszecki-cv.pdf' },
  { path: '/pl/cv', out: 'public/cv/bartosz-podgruszecki-cv-pl.pdf' }
]
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' }

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const file = join(DIST, extname(url.pathname) ? url.pathname : `${url.pathname}.html`)
  try {
    const body = await readFile(file)
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(body)
  } catch {
    res.writeHead(404).end()
  }
}).listen(0)

const { port } = server.address()
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage()
for (const { path, out } of PAGES) {
  await page.goto(`http://localhost:${port}${path}`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true, outline: true })
  await writeFile(out, pdf)
  console.log(`CV written to ${out}`)
}
await browser.close()
server.close()
