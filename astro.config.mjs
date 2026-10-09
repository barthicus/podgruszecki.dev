// @ts-check
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://podgruszecki.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', pl: 'pl' } },
      filter: page => !page.includes('/404'),
      serialize: item => ({ ...item, lastmod: new Date().toISOString() })
    })
  ],
  vite: { plugins: [tailwindcss()] }
})
