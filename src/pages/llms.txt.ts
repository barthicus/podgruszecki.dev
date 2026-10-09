// /llms.txt – plain-text summary for AI assistants and crawlers (https://llmstxt.org), generated from site data
import type { APIRoute } from 'astro'

import { getJobs } from '@/data/experience'
import { getProfile, getServices, getSkills } from '@/data/profile'
import { getProjects } from '@/data/projects'

export const GET: APIRoute = () => {
  const profile = getProfile('en')
  const site = profile.site
  const projects = getProjects('en')
  const jobs = getJobs('en')

  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.role} (${profile.tagline}) from ${profile.location}, building for the web since 2009. ${profile.workMode}. ${profile.availability}.`,
    '',
    profile.pitch,
    '',
    '## Pages',
    '',
    `- [Home (EN)](${site}/): overview, selected work, services, experience, skills, contact`,
    `- [Projects (EN)](${site}/projects): case studies and archive`,
    `- [CV (EN, HTML)](${site}/cv) and [CV (EN, PDF)](${site}${profile.cvPdf})`,
    `- [Strona główna (PL)](${site}/pl), [Projekty (PL)](${site}/pl/projects), [CV (PL)](${site}/pl/cv)`,
    '',
    '## Services',
    '',
    ...getServices('en').map(s => `- ${s.title}: ${s.text}`),
    '',
    '## Case studies',
    '',
    ...projects
      .filter(p => p.featured)
      .map(p => `- [${p.title}](${site}/projects#${p.slug}) (${p.period ?? p.date.slice(0, 4)}): ${p.summary} ${p.impact ?? ''}`.trim()),
    '',
    '## Experience',
    '',
    ...jobs.flatMap(j => [
      `- ${j.role}, ${j.company} (${j.end ? `${j.start}-${j.end}` : `since ${j.start}`}): ${j.summary}`,
      ...(j.engagements ?? []).map(e => `  - ${e.company} (${e.end ? `${e.start}-${e.end}` : `since ${e.start}`}): ${e.summary}`)
    ]),
    '',
    '## Skills',
    '',
    ...getSkills('en').map(s => `- ${s.group}: ${s.items.join(', ')}`),
    '',
    '## Contact',
    '',
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    ''
  ]

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
