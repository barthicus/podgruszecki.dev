import type { Lang } from '@/i18n'
import { jobsPl } from '@/i18n/pl'

export type Engagement = {
  company: string
  /** Relationship, e.g. "Partner · B2B" */
  type: string
  role?: string
  start: string
  end?: string
  summary: string
  bullets: string[]
  tags: string[]
}

export type Job = {
  role: string
  company: string
  type?: string
  start: string
  end?: string
  summary: string
  /** Parallel client engagements shown under one position */
  engagements?: Engagement[]
  bullets?: string[]
  tags?: string[]
}

export const jobs: Job[] = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Independent',
    type: 'Own business since 2019 · B2B',
    start: '2018',
    summary:
      'I work for several long-term clients in parallel, usually solo or in teams of up to 5, and own projects from research and estimate to production and maintenance. I use Claude Code and Cursor every day: agents write most of the code, while I plan, review it and cover changes with automated tests. That lets me deliver about 3x faster.',
    engagements: [
      {
        company: 'Voltiso',
        type: 'Partner · B2B',
        start: '2018',
        summary: 'IT services for US clients in healthcare and trade.',
        bullets: [
          'Led the development of a telehealth platform for a US medical practice and wrote most of it from scratch, with support from the team on selected parts (Next.js, Firebase, Twilio Video & Chat). Used daily by ~30 doctors, ~6,000 patients and ~6,500 consultations so far.',
          'Lead developer of a trade show demo platform for a global medtech company. I built most of it from scratch, with the team helping on selected parts (Next.js, Expo, Firebase). 15 shows a year, up to ~1,000 users per 3-day show, QR check-in and CRM integration.',
          'Develop and maintain the Neurosurgeons of New Jersey website.',
          'Built mobile apps in Expo / React Native and fast websites on headless CMSs (Sanity.io, Storyblok, Strapi); prepare estimates and documentation and help onboard new developers.'
        ],
        tags: ['Next.js', 'React', 'TypeScript', 'Expo', 'Firebase', 'Twilio']
      },
      {
        company: 'Own products & direct clients',
        type: 'B2B',
        start: '2018',
        summary: 'Products for manufacturers and AI features for businesses.',
        bullets: [
          'Designed and built Routes Planner from scratch (Vue.js, Symfony, MySQL, Mapbox), an order and delivery route planning system used daily by 11 companies, ~50,000 orders processed. Leading a multi-tenant SaaS rewrite.',
          'Built and evolved a real-time 3D garage & kennel configurator (React, Three.js) used by Robstal, At-Stal, Blach-Trans and Taurustal. It grew from a form-based price calculator into a 3D tool with PDF export and online ordering.',
          'Delivered LLM features: a support chatbot answering questions about a company and its system, AI-assisted content (titles, descriptions, suggestions), article image generation and a voice-assistant integration that automates order placement.'
        ],
        tags: ['TypeScript', 'React', 'TanStack Start', 'Vue.js', 'Three.js', 'AI']
      },
      {
        company: 'Usterka.pl',
        type: 'B2B',
        role: 'Full-Stack Developer',
        start: '03/2025',
        end: '08/2026',
        summary: 'Services platform: website, client panel and booking system.',
        bullets: [
          'Worked across front end and back end of the platform built on modern, popular frameworks.',
          'Maintained and developed the public website and landing pages.',
          'Co-developed the client panel and the booking system.'
        ],
        tags: ['TypeScript', 'Full-stack']
      }
    ]
  },
  {
    role: 'Web Developer',
    company: 'BluePear',
    type: 'Interactive agency',
    start: '2009',
    end: '2017',
    summary: 'Grew from junior to independent web developer at an interactive agency.',
    bullets: [
      'Built custom WordPress themes (Timber) and plugins, Laravel applications and interactive frontends (jQuery, AngularJS).',
      'Created internal SEO tools automating optimisation tasks to improve site speed and search rankings.',
      'Designed layouts and branding assets for client websites.'
    ],
    tags: ['WordPress', 'PHP', 'Laravel', 'JavaScript', 'SEO']
  }
]

export const formatPeriod = (item: { start: string; end?: string }) => (item.end ? `${item.start}-${item.end}` : `since ${item.start}`)

// --- Localised getters -----------------------------------------------------


export const getJobs = (lang: Lang): Job[] =>
  lang === 'pl'
    ? jobs.map((job, i) => {
        const pl = jobsPl[i]
        if (!pl) return job
        return {
          ...job,
          company: pl.company ?? job.company,
          type: pl.type ?? job.type,
          summary: pl.summary,
          bullets: pl.bullets ?? job.bullets,
          engagements: job.engagements?.map((e, j) => {
            const epl = pl.engagements?.[j]
            return epl
              ? { ...e, company: epl.company ?? e.company, type: epl.type ?? e.type, summary: epl.summary, bullets: epl.bullets }
              : e
          })
        }
      })
    : jobs

export const formatPeriodFor = (lang: Lang) => (item: { start: string; end?: string }) =>
  item.end ? `${item.start}-${item.end}` : `${lang === 'pl' ? 'od' : 'since'} ${item.start}`
