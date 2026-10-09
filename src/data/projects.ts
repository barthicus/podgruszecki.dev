import type { ImageMetadata } from 'astro'

import cfgConstruction from '@/assets/projects/cfg/configurator-garage-construction.png'
import cfgGates from '@/assets/projects/cfg/configurator-garage-gates.png'
import cfgPdf from '@/assets/projects/cfg/configurator-garage-PDF.png'
import cfgGarage from '@/assets/projects/cfg/configurator-garage.png'
import cfgKennel from '@/assets/projects/cfg/configurator-kennel.png'
import cfgMobile from '@/assets/projects/cfg/configurator-mobile.png'
import covidpass from '@/assets/projects/covidpass.png'
import nsonj from '@/assets/projects/nsonj.png'
import painTracker from '@/assets/projects/painTracker.png'
import reconstructionViewer from '@/assets/projects/reconstructionViewerImg.png'
import rpMap from '@/assets/projects/rp/routes-planner-map.png'
import rpRoute from '@/assets/projects/rp/routes-planner-route.png'
import taurustal from '@/assets/projects/taurustal.png'
import tradeshowDashboard from '@/assets/projects/tradeshow/tradeshow-dashboard.png'
import tradeshowHome from '@/assets/projects/tradeshow/tradeshow-home.png'
import tradeshowMobile from '@/assets/projects/tradeshow/tradeshow-mobile.png'
import telePatient from '@/assets/projects/tele/telehealth-patient.png'
import teleDashboard from '@/assets/projects/tele/telehealth-dashboard.png'
import vmi from '@/assets/projects/vmi.png'
import ytWithoutSpoilers from '@/assets/projects/yt.png'
import type { Lang } from '@/i18n'
import { projectsPl } from '@/i18n/pl'

export type Shot = { src: ImageMetadata; alt: string }

export type Project = {
  slug: string
  title: string
  /** YYYY-MM, used for sorting */
  date: string
  /** Shown instead of the year, e.g. "since 2019" */
  period?: string
  industry: string
  summary: string
  /** Short, measurable outcome shown on featured cards */
  impact?: string
  description: string[]
  link?: string
  tags: string[]
  image?: ImageMetadata
  gallery?: Shot[]
  /** Looping muted video shown instead of the main image (files in /public) */
  video?: { mp4: string; webm: string; poster: string }
  /** Screens are re-created with fictional data and branding */
  anonymised?: boolean
  featured?: boolean
}

const allProjects: Project[] = [
  {
    slug: 'routes-planner',
    title: 'Routes Planner',
    date: '2026-09',
    period: 'since 2012',
    industry: 'Manufacturing · own product',
    summary:
      'Order management and delivery route planning system for manufacturers. I designed and built it from scratch, from the database to the UI.',
    impact: '~50,000 orders processed · used daily by 11 companies',
    description: [
      'Dispatchers see every order as a marker on the map, group orders into routes for drivers and notify customers automatically by email and SMS. Orders are imported from external sales platforms (Base.com API).',
      'Version 2 was a full rewrite: route planning and optimisation, user roles and intermediaries, extended order statuses, archive and trash, PDF/DOC documents for routes and production, and fast handling of large data sets.',
      'Used every day by 11 companies, with around 50,000 orders processed so far. A multi-tenant SaaS version is in development.'
    ],
    tags: ['Vue.js', 'Symfony', 'MySQL', 'Mapbox', 'Full-stack'],
    image: rpMap,
    gallery: [
      { src: rpMap, alt: 'Routes Planner: orders list next to a map with order markers' },
      { src: rpRoute, alt: 'Routes Planner: route details with stops, payments and customer notifications' }
    ],
    anonymised: true,
    featured: true
  },
  {
    slug: '3d-configurator',
    title: '3D Garage & Kennel Configurator',
    date: '2026-06',
    period: 'since 2017',
    industry: 'Steel industry · e-commerce',
    summary:
      'Real-time 3D configurator where customers design a steel garage or dog kennel, see the price instantly and send an order.',
    impact: 'Used by Robstal, At-Stal, Blach-Trans and Taurustal · a large share of their orders starts here',
    description: [
      'It started as a form-based price calculator and grew into a full 3D configurator, first in Vue.js and now in React with Three.js.',
      'Customers choose dimensions, roof, gates, construction profiles and colours while the 3D model and price update live. Every configuration can be exported to a PDF with technical drawings and sent as an order.'
    ],
    link: 'https://konfigurator-robstal.bluepear.pl',
    tags: ['React', 'Three.js'],
    image: cfgGarage,
    video: {
      mp4: '/media/configurator-3d.mp4',
      webm: '/media/configurator-3d.webm',
      poster: '/media/configurator-3d-poster.jpg'
    },
    gallery: [
      { src: cfgGarage, alt: '3D garage configurator: options panel and live 3D preview' },
      { src: cfgGates, alt: 'Configurator: garage gate type, size and position' },
      { src: cfgConstruction, alt: 'Configurator: construction profile selection' },
      { src: cfgPdf, alt: 'Configurator: generated PDF with technical drawings' },
      { src: cfgKennel, alt: '3D dog kennel configurator with price' },
      { src: cfgMobile, alt: 'Configurator on a mobile phone' }
    ],
    featured: true
  },
  {
    slug: 'telehealth-platform',
    title: 'Telehealth Platform',
    date: '2026-03',
    period: 'since 2018',
    industry: 'Healthcare · US medical practice',
    summary:
      'Video consultation platform for a US medical practice: scheduling, video calls and chat with patients, documents and payments.',
    impact: '~30 doctors daily · ~6,000 patients · ~6,500 consultations',
    description: [
      'Patients book a slot, pay and join a video consultation with chat from the browser. Doctors manage their calendars, patients and shared medical documents; admins get reporting and CSV exports.',
      'Launched just before the COVID-19 pandemic and used every day by around 30 doctors. So far it has handled nearly 6,000 patients and 6,500 consultations.'
    ],
    tags: ['Next.js', 'Firebase', 'Twilio Video & Chat', 'Stripe', 'TypeScript'],
    image: teleDashboard,
    gallery: [
      { src: teleDashboard, alt: 'Telehealth platform: admin dashboard with consultations and patients' },
      { src: telePatient, alt: 'Telehealth platform: patient profile with consultations, imaging studies, payments and documents' }
    ],
    anonymised: true,
    featured: true
  },
  {
    slug: 'trade-show-platform',
    title: 'Trade Show Demo Platform',
    date: '2022-03',
    period: 'since 2022',
    industry: 'Healthcare · global medtech company',
    summary:
      'Web and mobile platform for planning and running product demos at US trade shows. As the lead developer I built most of it from scratch.',
    impact: '15 shows a year · up to ~1,000 users during a 3-day show',
    description: [
      'Attendees book product demos, presenters manage their schedules and capture leads, and staff check visitors in by scanning QR codes in the mobile app. Reports and captured conversations sync to the CRM.',
      'Runs about 15 trade shows a year, including 3 large ones with around 1,000 users over three days. I lead development, and two other developers help with selected parts.'
    ],
    tags: ['Next.js', 'Expo', 'Firebase', 'Salesforce', 'SendGrid', 'Sentry'],
    image: tradeshowHome,
    gallery: [
      { src: tradeshowHome, alt: 'Trade show platform: active and upcoming trade shows with featured product demos' },
      { src: tradeshowDashboard, alt: 'Trade show platform: back-office dashboard with demos, meetings, leads and reports' },
      { src: tradeshowMobile, alt: 'Trade show platform: mobile QR check-in' }
    ],
    anonymised: true,
    featured: true
  },
  {
    slug: 'nsonj',
    title: 'Neurosurgeons of New Jersey',
    date: '2025-01',
    period: 'ongoing',
    industry: 'Healthcare · website',
    summary: 'Ongoing development and maintenance of the website of a New Jersey neurosurgery practice.',
    description: ['I develop new features and maintain the website code; content is managed by a separate agency.'],
    link: 'https://www.neurosurgeonsofnewjersey.com',
    tags: ['Web development', 'Maintenance'],
    image: nsonj
  },
  {
    slug: 'vmi',
    title: 'Visual Motion Interactive',
    date: '2024-01',
    industry: 'Interactive agency',
    summary: 'Fast, animated marketing website for an interactive agency, managed through Sanity.io.',
    description: [
      'Built with Next.js, TypeScript and Tailwind CSS, with content managed in Sanity.io and animations in Framer Motion.',
      'Contact form messages are delivered to the agency via the SendGrid API.'
    ],
    link: 'https://visualmotioninteractive.com',
    tags: ['Next.js', 'Sanity.io', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: vmi
  },
  {
    slug: 'portfolio',
    title: 'This portfolio',
    date: '2026-10',
    industry: 'Personal',
    summary: 'Static Astro site with zero client-side framework, generated CV and full SEO setup.',
    description: [
      'Rebuilt from Next.js to Astro: static HTML, no client-side framework and an optimised image pipeline.',
      'The CV is rendered from the same data as the website and exported to PDF at build time.'
    ],
    link: 'https://podgruszecki.dev',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: 'yt-without-spoilers',
    title: 'YT without spoilers',
    date: '2023-05',
    industry: 'Side project',
    summary: 'Watch YouTube videos without the progress bar and other spoiler-prone controls.',
    description: [
      'A small web app that plays YouTube videos without player controls. Handy for sports or esports replays, where the progress bar gives away the ending.'
    ],
    link: 'https://yt-without-spoilers.vercel.app',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: ytWithoutSpoilers
  },
  {
    slug: 'covid-entrance-ticket',
    title: 'Covid Entrance Ticket',
    date: '2021-06',
    industry: 'Healthcare',
    summary: 'Entrance ticket generator for a healthcare facility during the COVID-19 pandemic.',
    description: ['Next.js and TypeScript web app with Firebase authentication and database.'],
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Material UI'],
    image: covidpass
  },
  {
    slug: 'pain-tracker',
    title: 'Pain Tracker',
    date: '2020-04',
    industry: 'Healthcare',
    summary: 'Patient symptom tracking: mobile app for patients and web dashboard for doctors.',
    description: [
      'Doctors manage patients, symptoms and medications in a web dashboard; patients track symptoms in a mobile app and send reports to their doctors.',
      'Expo mobile app with AWS Cognito, React + Material UI dashboard, AWS S3 for images and AWS Lambda for emailed reports.'
    ],
    tags: ['Expo', 'React', 'AWS', 'Material UI'],
    image: painTracker
  },
  {
    slug: '3d-reconstruction-viewer',
    title: '3D Reconstruction Viewer',
    date: '2019-07',
    industry: 'Construction',
    summary: 'Browser viewer for navigating a 3D reconstruction of a building.',
    description: [
      'React and Three.js app for exploring a 3D building model with virtual markers, hosted on AWS S3 + CloudFront with a Material UI interface.'
    ],
    tags: ['React', 'Three.js', 'AWS', 'Material UI'],
    image: reconstructionViewer
  },
  {
    slug: 'taurustal',
    title: 'Taurustal 3D configurator',
    date: '2017-08',
    industry: 'Steel industry',
    summary: 'My first 3D garage configurator: Vue.js and Three.js, with a WordPress admin panel for pricing.',
    description: [
      'Responsive 3D garage configurator for ordering custom garages. A custom WordPress plugin lets the company manage prices and parameters.'
    ],
    link: 'https://pl.taurustal.com',
    tags: ['Vue.js', 'Three.js', 'WordPress'],
    image: taurustal
  }
]

export const projects = allProjects.toSorted((a, b) => b.date.localeCompare(a.date))
export const featuredProjects = allProjects.filter(p => p.featured)
export const projectYear = (p: Project) => p.date.slice(0, 4)
export const projectPeriod = (p: Project) => p.period ?? projectYear(p)

// --- Localised getters -----------------------------------------------------


const localise = (p: Project, lang: Lang): Project => {
  const pl = lang === 'pl' ? projectsPl[p.slug] : undefined
  if (!pl) return p
  return {
    ...p,
    title: pl.title ?? p.title,
    period: pl.period ?? p.period,
    industry: pl.industry,
    summary: pl.summary,
    impact: pl.impact ?? p.impact,
    description: pl.description,
    tags: pl.tags ?? p.tags,
    gallery: p.gallery?.map((shot, i) => ({ ...shot, alt: pl.galleryAlts?.[i] ?? shot.alt }))
  }
}

export const getProjects = (lang: Lang) => projects.map(p => localise(p, lang))
export const getFeaturedProjects = (lang: Lang) => featuredProjects.map(p => localise(p, lang))
