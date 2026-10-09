import { ui } from './ui'

export type Lang = 'en' | 'pl'
export const langs: Lang[] = ['en', 'pl']

/** Prefix an internal path with the locale ("/" stays English, Polish lives under /pl) */
export const localePath = (lang: Lang, path: string) => {
  if (lang === 'en') return path
  if (path === '/') return '/pl'
  if (path.startsWith('/#')) return `/pl${path.slice(1)}`
  return `/pl${path}`
}

/** Clean URL path: build output uses "file" format, so strip ".html" and "/index" */
export const cleanPath = (pathname: string) => pathname.replace(/\.html$/, '').replace(/\/(index)?$/, '') || '/'

/** Path of the same page in the other language */
export const alternatePath = (pathname: string, to: Lang) => {
  const base = cleanPath(pathname).replace(/^\/pl(?=\/|$)/, '') || '/'
  return localePath(to, base)
}

export const useTranslations = (lang: Lang) => ui[lang]
