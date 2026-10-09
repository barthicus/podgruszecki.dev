import type { Lang } from '@/i18n'
import { highlightLabelsPl, profilePl, servicesPl, skillsPl } from '@/i18n/pl'

export const profile = {
  name: 'Bartosz Podgruszecki',
  role: 'Senior Full-Stack Engineer',
  tagline: 'React · TypeScript · Node.js',
  location: 'Krotoszyn, Poland',
  workMode: 'Remote only · B2B',
  email: 'bartosz.podgruszecki@gmail.com',
  site: 'https://podgruszecki.dev',
  github: 'https://github.com/barthicus',
  linkedin: 'https://www.linkedin.com/in/bartosz-podgruszecki',
  // Set to false to hide the "available" badge in the hero
  isAvailable: true,
  availability: 'Available now for new projects',
  yearsOfExperience: new Date().getFullYear() - 2009,
  headline: 'I build web products that businesses run on every day.',
  pitch:
    "My work includes a telehealth platform used by ~30 doctors every day, trade show software for a global medtech company and a route planning system that has handled ~50,000 orders. I take products from idea to production, use AI daily and I'm comfortable working with legacy code.",
  cvPdf: '/cv/bartosz-podgruszecki-cv.pdf',
  languages: [
    { name: 'Polish', level: 'Native' },
    { name: 'English', level: 'B2+/C1 (professional working proficiency)' }
  ],
  education: [
    { school: 'Wroclaw University of Economics', degree: "Master's degree (MSc), Informatics and Econometrics", years: '2010-2012' },
    { school: 'Wroclaw University of Economics', degree: "Bachelor's degree (BSc), Informatics and Econometrics", years: '2007-2010' }
  ]
}

export const highlights = [
  { value: `${profile.yearsOfExperience}+`, label: 'years building for the web' },
  { value: '~50k', label: 'orders processed by my route planner' },
  { value: '~6k', label: 'patients on the telehealth platform I develop' }
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Frontend & mobile',
    items: ['TypeScript', 'React', 'TanStack Start', 'Next.js', 'Vue.js', 'Tailwind CSS', 'React Native / Expo', 'Three.js']
  },
  {
    group: 'Backend & platforms',
    items: ['Node.js', 'Firebase', 'PostgreSQL', 'MySQL', 'Symfony', 'Laravel', 'Vercel', 'AWS', 'Twilio', 'Stripe', 'Mapbox']
  },
  {
    group: 'AI & workflow',
    items: ['Claude Code', 'Cursor', 'LLM chatbots & automations', 'Voice assistants', 'Automated testing', 'Legacy modernisation']
  }
]

export const services = [
  {
    title: 'New product, from idea to production',
    text: 'From MVP to a stable product: architecture, UI, backend, deployment and maintenance. One person for the whole project.'
  },
  {
    title: '3D product configurators',
    text: 'Real-time 3D configurators with live pricing, PDF export and online ordering, already used by 4 steel manufacturers.'
  },
  {
    title: 'Taking over legacy apps',
    text: 'I take over existing codebases, stabilise them and add features without a risky rewrite.'
  },
  {
    title: 'AI features & automation',
    text: 'Chatbots for your product, AI-generated content, voice assistants and workflow automation.'
  }
]

// --- Localised getters -----------------------------------------------------


export const getProfile = (lang: Lang) => (lang === 'pl' ? { ...profile, ...profilePl } : profile)

export const getHighlights = (lang: Lang) =>
  lang === 'pl' ? highlights.map((h, i) => ({ ...h, label: highlightLabelsPl[i] ?? h.label })) : highlights

export const getSkills = (lang: Lang) =>
  lang === 'pl' ? skills.map((s, i) => ({ ...s, ...skillsPl[i] })) : skills

export const getServices = (lang: Lang) => (lang === 'pl' ? servicesPl : services)
