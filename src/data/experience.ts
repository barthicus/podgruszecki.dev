import type { Lang } from '@/i18n'
import { jobsPl } from '@/i18n/pl'

export type Engagement = {
  company: string
  url?: string
  /** Relationship, e.g. "Partner · B2B" */
  type: string
  role?: string
  start: string
  end?: string
  summary: string
  /** CV bullets: supports **bold** and [text](url); `case:<slug>` links to a case study */
  bullets: string[]
  tags: string[]
}

export type Job = {
  role: string
  company: string
  url?: string
  type?: string
  start: string
  end?: string
  summary: string
  /** Shorter intro used in the CV instead of `summary` */
  cvSummary?: string
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
    cvSummary:
      'Long-term clients in parallel, solo or in teams of up to 5. AI-first workflow: agents (Claude Code, Cursor) write most of the code, I plan, review and cover it with automated tests.',
    engagements: [
      {
        company: 'Voltiso',
        url: 'http://voltiso.com',
        type: 'Partner · B2B',
        start: '2018',
        summary: 'Lead developer of a telehealth platform used by ~30 doctors daily and of trade show software for a global medtech company.',
        bullets: [
          'Lead developer of a [telehealth platform](case:telehealth-platform) for a US medical practice, most of it written by me from scratch (Next.js, Firebase, Twilio): **~30 doctors** daily, **~6,000 patients**, **~6,500 consultations**.',
          'Lead developer of a [trade show demo platform](case:trade-show-platform) for a global medtech company (Next.js, Expo, Firebase): **15 shows a year**, up to **~1,000 users** per show, QR check-in and CRM sync.',
          'Develop and maintain the [Neurosurgeons of New Jersey](https://www.neurosurgeonsofnewjersey.com) website; built Expo apps and headless CMS sites (Sanity.io, Storyblok, Strapi), write estimates and onboard new developers.'
        ],
        tags: ['Next.js', 'React', 'TypeScript', 'Expo', 'Firebase', 'Twilio']
      },
      {
        company: 'Own products & direct clients',
        type: 'B2B',
        start: '2018',
        summary: 'Routes Planner (~50,000 orders, 11 companies), 3D configurators for 4 steel manufacturers and LLM features.',
        bullets: [
          'Designed and built [Routes Planner](case:routes-planner) from scratch (Vue.js, Symfony, MySQL, Mapbox): order and delivery route planning used daily by **11 companies**, **~50,000 orders** processed. Leading the SaaS rewrite.',
          'Built a [real-time 3D garage & kennel configurator](https://konfigurator-robstal.bluepear.pl) (React, Three.js) used by **4 steel manufacturers**: live pricing, PDF export with technical drawings and online ordering.',
          'Shipped LLM features: a support chatbot that knows the company and its system, AI-assisted content and image generation, and a voice assistant that places orders.'
        ],
        tags: ['TypeScript', 'React', 'TanStack Start', 'Vue.js', 'Three.js', 'AI']
      },
      {
        company: 'Usterka.pl',
        url: 'https://usterka.pl',
        type: 'B2B',
        role: 'Full-Stack Developer',
        start: '03/2025',
        end: '08/2026',
        summary: 'Home services platform: public website, client panel and booking system.',
        bullets: [
          'Full-stack work on a home services platform: public website and landing pages, client panel and booking system.'
        ],
        tags: ['TypeScript', 'Full-stack']
      }
    ]
  },
  {
    role: 'Web Developer',
    company: 'Freelance',
    type: 'Projects for agencies and companies, incl. BluePear',
    start: '2009',
    end: '2018',
    summary: 'Independent projects for agencies and companies: websites, online shops, web apps and my first 3D configurators.',
    bullets: [
      'Built web apps in Vue.js and React with Three.js, and back ends in Laravel and API Platform (REST, JWT).',
      'Wrote a case management system with a PDF document generator for a law firm and an order management system with map markers for a steel construction manufacturer (the first version of [Routes Planner](case:routes-planner)).',
      'Created custom WordPress themes and plugins and Bolt CMS websites, and optimised sites for SEO and loading speed.',
      'Designed logos and responsive layouts.'
    ],
    tags: ['Vue.js', 'React', 'Three.js', 'Laravel', 'WordPress', 'SEO']
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
          cvSummary: pl.cvSummary ?? job.cvSummary,
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
