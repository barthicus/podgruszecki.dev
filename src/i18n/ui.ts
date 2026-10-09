// Interface strings. Content (projects, experience, profile) lives in src/data with Polish overrides in ./pl.ts
export const ui = {
  en: {
    skip: 'Skip to content',
    nav: { work: 'Work', services: 'Services', experience: 'Experience', about: 'About', contact: 'Contact' },
    switchLang: 'Polski',
    switchLangLabel: 'Przełącz na polski',
    cv: 'CV',
    letsTalk: "Let's talk",
    downloadCv: 'Download CV',
    portraitAlt: (name: string) => `Portrait of ${name}`,
    selectedWork: 'Selected work',
    allProjects: 'All projects',
    howICanHelp: 'How I can help',
    experience: 'Experience',
    parallel: (n: number) => `${n} parallel engagements`,
    fullCv: 'Full CV (PDF)',
    skills: 'Skills',
    about: 'About',
    technologies: 'Technologies',
    contactTitle: 'Have a project in mind?',
    contactText:
      "New product, a 3D configurator, or an existing app that someone needs to take over and keep developing? Write to me and I'll get back within one business day.",
    emailMe: 'Email me',
    caseStudyLink: 'Case study & screens',
    opensInNewTab: '(opens in a new tab)',
    animationOf: (title: string) => `Animation of ${title}`,
    screenshotOf: (title: string) => `Screenshot of ${title}`,
    anonymisedShort: 'Screens anonymised for client confidentiality.',
    anonymisedTitle: 'Anonymised screens.',
    anonymisedText:
      'To respect client confidentiality, all names and personal data have been replaced with fictional ones, and where required also logos and branding. Layout and features reflect the real product.',
    projectsTitle: 'Projects',
    projectsIntro: 'Products I designed and built that are used every day, followed by an archive of earlier work.',
    caseStudies: 'Case studies',
    archive: 'Archive',
    onThisPage: 'On this page',
    enlarge: (alt: string) => `Enlarge: ${alt}`,
    imagePreview: 'Image preview',
    close: 'Close',
    previous: 'Previous',
    next: 'Next',
    cvHtml: 'CV (HTML)',
    backToWebsite: '← Back to website',
    downloadPdf: 'Download PDF',
    cvSections: { summary: 'Summary', experience: 'Experience', skills: 'Skills', education: 'Education', languages: 'Languages', interests: 'Interests' },
    about1: (location: string) =>
      `I'm a software engineer from ${location}, building for the web since 2009. I started with WordPress and PHP at an interactive agency; today I build products with <strong class="text-ink">TypeScript</strong>, <strong class="text-ink">React</strong> and <strong class="text-ink">TanStack Start</strong> for clients in the US and Poland. I usually work solo or in small teams and take projects from start to finish.`,
    about2: 'Outside of work, family comes first: my wife and our two daughters. I\'m a runner: I do parkrun regularly and take part in street and trail races, I love cooking spicy food and I\'m a big esports fan.',
    about3: "When everyone is asleep I definitely don't slay any 😈 in Diablo or Path of Exile. Nope. Not at all.",
    meta: {
      homeTitle: (name: string, role: string) => `${name} | ${role}`,
      homeDescription: (role: string, years: number) =>
        `${role} with ${years}+ years of experience: web apps, 3D product configurators and AI features in React, TypeScript and TanStack Start. Remote B2B.`,
      projectsTitle: (name: string) => `Projects | ${name}`,
      projectsDescription:
        'Case studies and projects by Bartosz Podgruszecki: route planning software, 3D product configurators, a telehealth platform, trade show software and more.',
      cvTitle: (name: string, role: string) => `CV | ${name}, ${role}`,
      cvDescription: (name: string, role: string, years: number) =>
        `Curriculum vitae of ${name}: ${role} with ${years}+ years of experience in React, TypeScript and web product development.`
    },
    cvSummary: (role: string, years: number) =>
      `I'm a ${role} with ${years}+ years of experience building web products used every day: a telehealth platform (~6,000 patients), trade show software for a global medtech company, route planning that has processed ~50,000 orders and real-time 3D configurators. I work independently or in small teams (up to 5) and own projects from research and estimate to production. I work with AI every day (Claude Code, Cursor), which lets me deliver about 3x faster, and I'm comfortable modernising legacy codebases. Remote only. Main stack: TypeScript, React, TanStack Start, Next.js, Node.js, Firebase, Three.js.`,
    cvInterests: 'Running: I run parkrun regularly and take part in street and trail races. I also enjoy cooking and follow esports.'
  },
  pl: {
    skip: 'Przejdź do treści',
    nav: { work: 'Realizacje', services: 'Usługi', experience: 'Doświadczenie', about: 'O mnie', contact: 'Kontakt' },
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    cv: 'CV',
    letsTalk: 'Porozmawiajmy',
    downloadCv: 'Pobierz CV',
    portraitAlt: (name: string) => `Zdjęcie: ${name}`,
    selectedWork: 'Wybrane realizacje',
    allProjects: 'Wszystkie projekty',
    howICanHelp: 'W czym mogę pomóc',
    experience: 'Doświadczenie',
    parallel: (n: number) => (n >= 2 && n <= 4 ? `${n} współprace prowadzone równolegle` : `${n} współprac prowadzonych równolegle`),
    fullCv: 'Pełne CV (PDF)',
    skills: 'Umiejętności',
    about: 'O mnie',
    technologies: 'Technologie',
    contactTitle: 'Masz projekt do zrealizowania?',
    contactText:
      'Nowy produkt, konfigurator 3D albo istniejąca aplikacja, którą trzeba przejąć i dalej rozwijać? Napisz, odpowiem w ciągu jednego dnia roboczego.',
    emailMe: 'Napisz do mnie',
    caseStudyLink: 'Szczegóły projektu',
    opensInNewTab: '(otwiera się w nowej karcie)',
    animationOf: (title: string) => `Animacja: ${title}`,
    screenshotOf: (title: string) => `Zrzut ekranu: ${title}`,
    anonymisedShort: 'Ekrany zanonimizowane ze względu na poufność danych klientów.',
    anonymisedTitle: 'Ekrany zanonimizowane.',
    anonymisedText:
      'Ze względu na poufność danych klientów wszystkie nazwiska i dane osobowe zostały zastąpione fikcyjnymi, a tam, gdzie było to wymagane, także logotypy i identyfikacja wizualna. Układ i funkcje odpowiadają prawdziwemu produktowi.',
    projectsTitle: 'Projekty',
    projectsIntro: 'Produkty, które zaprojektowałem i zbudowałem i z których klienci korzystają na co dzień. Niżej archiwum wcześniejszych prac.',
    caseStudies: 'Realizacje',
    archive: 'Archiwum',
    onThisPage: 'Na tej stronie',
    enlarge: (alt: string) => `Powiększ: ${alt}`,
    imagePreview: 'Podgląd zdjęcia',
    close: 'Zamknij',
    previous: 'Poprzednie',
    next: 'Następne',
    cvHtml: 'CV (HTML)',
    backToWebsite: '← Wróć na stronę',
    downloadPdf: 'Pobierz PDF',
    cvSections: { summary: 'Podsumowanie', experience: 'Doświadczenie', skills: 'Umiejętności', education: 'Wykształcenie', languages: 'Języki', interests: 'Zainteresowania' },
    about1: (_location: string) =>
      `Jestem programistą z Krotoszyna i tworzę aplikacje webowe od 2009 roku. Zaczynałem od WordPressa i PHP w agencji interaktywnej, a dziś buduję produkty z użyciem <strong class="text-ink">TypeScriptu</strong>, <strong class="text-ink">Reacta</strong> i <strong class="text-ink">TanStack Start</strong> dla klientów z USA i Polski. Najczęściej pracuję samodzielnie lub w małym zespole i prowadzę projekty od początku do końca.`,
    about2: 'Poza pracą najważniejsza jest dla mnie rodzina: żona i nasze dwie córki. Biegam: regularnie chodzę na parkrun i startuję w zawodach ulicznych oraz górskich, lubię gotować ostre dania i jestem wielkim fanem e-sportu.',
    about3: 'Kiedy wszyscy śpią, na pewno nie ubijam 😈 w Diablo ani w Path of Exile. Nie, no skąd. Ani trochę.',
    meta: {
      homeTitle: (name: string, _role: string) => `${name} | Aplikacje webowe i konfiguratory 3D`,
      homeDescription: (role: string, years: number) =>
        `${role} z ponad ${years}-letnim doświadczeniem. Tworzę aplikacje webowe, konfiguratory 3D i funkcje AI (React, TypeScript, Three.js). Zdalnie, B2B.`,
      projectsTitle: (name: string) => `Projekty | ${name}`,
      projectsDescription:
        'Realizacje Bartosza Podgruszeckiego: system planowania tras dostaw, konfiguratory 3D garaży i kojców, platforma telemedyczna, oprogramowanie targowe i inne.',
      cvTitle: (name: string, role: string) => `CV | ${name}, ${role}`,
      cvDescription: (name: string, role: string, years: number) =>
        `CV: ${name}, ${role} z ponad ${years}-letnim doświadczeniem w React, TypeScript i tworzeniu produktów webowych.`
    },
    cvSummary: (role: string, years: number) =>
      `Od ponad ${years} lat tworzę produkty webowe, dziś jako ${role}. Moje projekty działają na co dzień: platforma telemedyczna (~6 000 pacjentów), oprogramowanie targowe dla globalnej firmy medtech, system planowania tras, przez który przeszło ~50 000 zamówień, oraz konfiguratory 3D. Pracuję samodzielnie lub w małych zespołach (do 5 osób) i odpowiadam za projekty od analizy i wyceny po wdrożenie. Na co dzień korzystam z AI (Claude Code, Cursor), dzięki czemu dostarczam ok. 3 razy szybciej, i sprawnie modernizuję starszy kod. Wyłącznie praca zdalna. Główny stack: TypeScript, React, TanStack Start, Next.js, Node.js, Firebase, Three.js.`,
    cvInterests: 'Bieganie: regularnie biegam parkrun i startuję w zawodach ulicznych i górskich. Poza tym gotowanie i e-sport.'
  }
} as const
