// Polish translations of the content in src/data. Keys mirror the English data (by slug or position).
// When you change English content, update the matching entry here.

export const profilePl = {
  location: 'Krotoszyn, Polska',
  workMode: 'Wyłącznie zdalnie · B2B',
  availability: 'Dostępny od zaraz na nowe projekty',
  headline: 'Tworzę aplikacje webowe, na których firmy pracują każdego dnia.',
  pitch:
    'Na koncie mam m.in. platformę telemedyczną, z której codziennie korzysta ~30 lekarzy, oprogramowanie targowe dla globalnej firmy medtech i system planowania tras, przez który przeszło ~50 000 zamówień. Prowadzę produkty od pomysłu do wdrożenia, pracuję z AI i dobrze odnajduję się w starszym kodzie.',
  cvPdf: '/cv/bartosz-podgruszecki-cv-pl.pdf',
  languages: [
    { name: 'Polski', level: 'ojczysty' },
    { name: 'Angielski', level: 'B2+/C1 (swobodna komunikacja w pracy)' }
  ],
  education: [
    { school: 'Uniwersytet Ekonomiczny we Wrocławiu', degree: 'Magister, Informatyka i ekonometria', years: '2010-2012' },
    { school: 'Uniwersytet Ekonomiczny we Wrocławiu', degree: 'Licencjat, Informatyka i ekonometria', years: '2007-2010' }
  ]
}

export const highlightLabelsPl = [
  'lat tworzenia aplikacji webowych',
  'zamówień w moim systemie planowania tras',
  'pacjentów na platformie telemedycznej, którą rozwijam'
]

export const skillsPl = [
  { group: 'Frontend i mobile' },
  { group: 'Backend i platformy' },
  {
    group: 'AI i sposób pracy',
    items: ['Claude Code', 'Cursor', 'Chatboty i automatyzacje LLM', 'Asystenci głosowi', 'Testy automatyczne', 'Modernizacja starszego kodu']
  }
]

export const servicesPl = [
  {
    title: 'Nowy produkt od pomysłu do wdrożenia',
    text: 'Od MVP do stabilnego produktu: architektura, interfejs, backend, wdrożenie i utrzymanie. Jedna osoba odpowiedzialna za cały projekt.'
  },
  {
    title: 'Konfiguratory 3D produktów',
    text: 'Konfiguratory 3D z wyceną na żywo, eksportem do PDF i zamawianiem online. Działają już u 4 producentów konstrukcji stalowych.'
  },
  {
    title: 'Przejęcie istniejącej aplikacji',
    text: 'Przejmuję istniejący kod, stabilizuję go i rozwijam bez ryzykownego przepisywania od zera.'
  },
  {
    title: 'Funkcje AI i automatyzacja',
    text: 'Chatboty dla Twojego produktu, treści generowane przez AI, asystenci głosowi i automatyzacja procesów.'
  }
]

type JobPl = {
  company?: string
  type?: string
  summary: string
  bullets?: string[]
  engagements?: { company?: string; type?: string; summary: string; bullets: string[] }[]
}

export const jobsPl: JobPl[] = [
  {
    company: 'Własna działalność',
    type: 'Działalność gospodarcza od 2019 · B2B',
    summary:
      'Pracuję równolegle dla kilku stałych klientów, zwykle samodzielnie lub w zespołach do 5 osób, i odpowiadam za projekty od analizy i wyceny po wdrożenie i utrzymanie. Na co dzień korzystam z AI (Claude Code, Cursor): agenci piszą większość kodu, a ja planuję, robię code review i zabezpieczam zmiany testami automatycznymi. Dzięki temu dostarczam ok. 3 razy szybciej.',
    engagements: [
      {
        type: 'Wspólnik · B2B',
        summary: 'Usługi IT dla klientów z USA z branży medycznej i handlowej.',
        bullets: [
          'Prowadziłem rozwój platformy telemedycznej dla amerykańskiej praktyki lekarskiej i napisałem większość jej kodu od zera, a zespół wspierał mnie w wybranych obszarach (Next.js, Firebase, Twilio Video & Chat). Codziennie korzysta z niej ~30 lekarzy, obsłużyła już ~6 000 pacjentów i ~6 500 konsultacji.',
          'Główny programista platformy do prezentacji produktów na targach dla globalnej firmy medtech. Większość zbudowałem od zera, a zespół pomagał w wybranych obszarach (Next.js, Expo, Firebase). 15 targów rocznie, do ~1 000 użytkowników podczas 3-dniowych targów, check-in kodami QR i integracja z CRM.',
          'Rozwijam i utrzymuję stronę Neurosurgeons of New Jersey.',
          'Tworzyłem aplikacje mobilne w Expo / React Native oraz szybkie strony na headless CMS (Sanity.io, Storyblok, Strapi); przygotowuję wyceny i dokumentację oraz pomagam we wdrażaniu nowych programistów.'
        ]
      },
      {
        company: 'Własne produkty i klienci bezpośredni',
        summary: 'Produkty dla producentów i funkcje AI dla firm.',
        bullets: [
          'Zaprojektowałem i zbudowałem od podstaw Routes Planner (Vue.js, Symfony, MySQL, Mapbox), system planowania zamówień i tras dostaw, z którego codziennie korzysta 11 firm; przeszło przez niego ~50 000 zamówień. Prowadzę prace nad wersją SaaS.',
          'Zbudowałem i rozwijam konfigurator 3D garaży i kojców (React, Three.js) używany przez Robstal, At-Stal, Blach-Trans i Taurustal. Z prostego kalkulatora ceny w formularzu rozwinął się w model 3D z eksportem do PDF i zamawianiem online.',
          'Wdrożyłem funkcje oparte na LLM: chatbota odpowiadającego na pytania o firmę i jej system, wsparcie AI przy treściach (tytuły, opisy, podpowiedzi), generowanie grafik do artykułów oraz integrację z asystentem głosowym automatyzującą składanie zamówień.'
        ]
      },
      {
        summary: 'Platforma usługowa: strona, panel klienta i system rezerwacji.',
        bullets: [
          'Pracowałem nad frontendem i backendem platformy opartej na nowoczesnych, popularnych frameworkach.',
          'Utrzymywałem i rozwijałem stronę firmową oraz strony kampanii (landing page).',
          'Współtworzyłem panel klienta i system rezerwacji.'
        ]
      }
    ]
  },
  {
    company: 'Freelance',
    type: 'Projekty dla agencji i firm, m.in. BluePear',
    summary: 'Samodzielne projekty dla agencji i firm: strony, sklepy, aplikacje webowe i pierwsze konfiguratory 3D.',
    bullets: [
      'Tworzyłem aplikacje webowe w Vue.js i React z Three.js oraz backend w Laravelu i API Platform (REST, JWT).',
      'Napisałem system zarządzania sprawami z generatorem dokumentów PDF dla kancelarii prawnej oraz system zarządzania zamówieniami ze znacznikami na mapie dla producenta konstrukcji stalowych (pierwsza wersja Routes Plannera).',
      'Tworzyłem dedykowane motywy i wtyczki WordPress oraz strony na Bolt CMS, optymalizowałem strony pod SEO i szybkość ładowania.',
      'Projektowałem logotypy i responsywne layouty.'
    ]
  }
]

type ProjectPl = {
  title?: string
  period?: string
  industry: string
  summary: string
  impact?: string
  description: string[]
  galleryAlts?: string[]
  tags?: string[]
}

export const projectsPl: Record<string, ProjectPl> = {
  'routes-planner': {
    period: 'od 2012',
    industry: 'Produkcja · własny produkt',
    summary:
      'System zarządzania zamówieniami i planowania tras dostaw dla producentów. Zaprojektowałem go i zbudowałem od zera, od bazy danych po interfejs.',
    impact: '~50 000 zamówień · codziennie używany przez 11 firm',
    description: [
      'Dyspozytorzy widzą każde zamówienie jako znacznik na mapie i grupują zamówienia w trasy dla kierowców, a klienci dostają automatyczne powiadomienia e-mail i SMS. Zamówienia są importowane z zewnętrznych platform sprzedażowych (API Base.com).',
      'Wersja 2 to przepisanie systemu od zera: planowanie i optymalizacja tras, role użytkowników i pośrednicy, rozbudowane statusy zamówień, archiwum i kosz, dokumenty PDF/DOC dla tras i produkcji oraz szybka praca na dużej liczbie rekordów.',
      'Na co dzień korzysta z niego 11 firm, a w systemie obsłużono już ok. 50 000 zamówień. Powstaje wersja SaaS dla wielu firm.'
    ],
    galleryAlts: [
      'Routes Planner: lista zamówień obok mapy ze znacznikami',
      'Routes Planner: szczegóły trasy z przystankami, płatnościami i powiadomieniami'
    ]
  },
  '3d-configurator': {
    title: 'Konfigurator 3D garaży i kojców',
    period: 'od 2017',
    industry: 'Branża stalowa · e-commerce',
    summary:
      'Konfigurator 3D działający w czasie rzeczywistym. Klient projektuje garaż blaszany lub kojec, od razu widzi cenę i wysyła zamówienie.',
    impact: 'Używany przez Robstal, At-Stal, Blach-Trans i Taurustal · duża część ich zamówień zaczyna się właśnie tutaj',
    description: [
      'Zaczynał jako kalkulator ceny oparty na formularzu, a wyrósł na pełny konfigurator 3D: najpierw w Vue.js, dziś w React i Three.js.',
      'Klient wybiera wymiary, dach, bramy, profile konstrukcji i kolory, a model 3D i cena aktualizują się na żywo. Każdą konfigurację można pobrać jako PDF z rzutami technicznymi i wysłać jako zamówienie.'
    ],
    galleryAlts: [
      'Konfigurator garażu 3D: panel opcji i podgląd 3D na żywo',
      'Konfigurator: rodzaj, wymiary i położenie bramy',
      'Konfigurator: wybór profilu konstrukcji',
      'Konfigurator: wygenerowany PDF z rzutami technicznymi',
      'Konfigurator kojca 3D z ceną',
      'Konfigurator na telefonie'
    ]
  },
  'telehealth-platform': {
    title: 'Platforma telemedyczna',
    period: 'od 2018',
    industry: 'Medycyna · praktyka lekarska w USA',
    summary:
      'Platforma wideokonsultacji dla amerykańskiej praktyki lekarskiej: rezerwacje, rozmowy wideo i czat z pacjentami, dokumenty i płatności.',
    impact: '~30 lekarzy dziennie · ~6 000 pacjentów · ~6 500 konsultacji',
    description: [
      'Pacjent rezerwuje termin, płaci i dołącza do wideokonsultacji z czatem prosto z przeglądarki. Lekarze zarządzają kalendarzami, pacjentami i udostępnianą dokumentacją medyczną, a administratorzy mają raporty i eksport do CSV.',
      'Ruszyła tuż przed pandemią COVID-19 i codziennie korzysta z niej ok. 30 lekarzy. Obsłużyła już prawie 6 000 pacjentów i 6 500 konsultacji.'
    ],
    galleryAlts: [
      'Platforma telemedyczna: panel administratora z konsultacjami i pacjentami',
      'Platforma telemedyczna: profil pacjenta z konsultacjami, badaniami obrazowymi, płatnościami i dokumentami'
    ]
  },
  'trade-show-platform': {
    title: 'Platforma do prezentacji na targach',
    period: 'od 2022',
    industry: 'Medycyna · globalna firma medtech',
    summary:
      'Aplikacja webowa i mobilna do planowania i prowadzenia prezentacji produktów na targach w USA. Jako główny programista zbudowałem większość od zera.',
    impact: '15 targów rocznie · do ~1 000 użytkowników podczas 3-dniowych targów',
    description: [
      'Uczestnicy rezerwują prezentacje produktów, prezenterzy zarządzają swoim harmonogramem i zbierają leady, a obsługa rejestruje odwiedzających, skanując kody QR w aplikacji mobilnej. Raporty i zebrane rozmowy trafiają do CRM.',
      'Obsługuje ok. 15 targów rocznie, w tym 3 duże, z ok. 1 000 użytkowników w ciągu trzech dni. Prowadzę rozwój projektu, a dwóch innych programistów pomaga w wybranych obszarach.'
    ],
    galleryAlts: [
      'Platforma targowa: aktywne i nadchodzące targi oraz wyróżnione prezentacje produktów',
      'Platforma targowa: panel z prezentacjami, spotkaniami, leadami i raportami',
      'Platforma targowa: mobilny check-in kodem QR'
    ]
  },
  nsonj: {
    period: 'stała współpraca',
    industry: 'Medycyna · strona internetowa',
    summary: 'Stały rozwój i utrzymanie strony praktyki neurochirurgicznej z New Jersey.',
    description: ['Rozwijam nowe funkcje i utrzymuję kod strony; treściami zajmuje się osobna agencja.'],
    tags: ['Rozwój strony', 'Utrzymanie']
  },
  vmi: {
    industry: 'Agencja interaktywna',
    summary: 'Szybka, animowana strona agencji interaktywnej zarządzana przez Sanity.io.',
    description: [
      'Strona zbudowana w Next.js, TypeScript i Tailwind CSS, z treściami w Sanity.io i animacjami we Framer Motion.',
      'Wiadomości z formularza kontaktowego trafiają do agencji przez API SendGrid.'
    ]
  },
  portfolio: {
    title: 'To portfolio',
    industry: 'Projekt własny',
    summary: 'Statyczna strona w Astro bez frameworka po stronie przeglądarki, z generowanym CV i pełnym SEO.',
    description: [
      'Strona przepisana z Next.js na Astro: statyczny HTML, brak frameworka po stronie przeglądarki i zoptymalizowane obrazy.',
      'CV powstaje z tych samych danych co strona i jest eksportowane do PDF podczas budowania.'
    ]
  },
  'yt-without-spoilers': {
    industry: 'Projekt poboczny',
    summary: 'Oglądanie filmów z YouTube bez paska postępu i innych elementów zdradzających zakończenie.',
    description: [
      'Mała aplikacja, która odtwarza filmy z YouTube bez kontrolek odtwarzacza. Przydaje się przy powtórkach meczów i transmisji e-sportowych, gdzie pasek postępu zdradza wynik.'
    ]
  },
  'covid-entrance-ticket': {
    title: 'Bilet wstępu COVID',
    industry: 'Medycyna',
    summary: 'Generator biletów wstępu dla placówki medycznej w czasie pandemii COVID-19.',
    description: ['Aplikacja w Next.js i TypeScript z uwierzytelnianiem i bazą danych Firebase.']
  },
  'pain-tracker': {
    industry: 'Medycyna',
    summary: 'Śledzenie objawów pacjentów: aplikacja mobilna dla pacjentów i panel webowy dla lekarzy.',
    description: [
      'Lekarze zarządzają pacjentami, objawami i lekami w panelu webowym; pacjenci zapisują objawy w aplikacji mobilnej i wysyłają raporty lekarzom.',
      'Aplikacja mobilna w Expo z AWS Cognito, panel w React i Material UI, AWS S3 na zdjęcia i AWS Lambda do wysyłki raportów e-mailem.'
    ]
  },
  '3d-reconstruction-viewer': {
    title: 'Przeglądarka rekonstrukcji 3D',
    industry: 'Budownictwo',
    summary: 'Przeglądarka do poruszania się po rekonstrukcji 3D budynku.',
    description: [
      'Aplikacja w React i Three.js do oglądania modelu 3D budynku z wirtualnymi znacznikami, hostowana na AWS S3 + CloudFront, z interfejsem w Material UI.'
    ]
  },
  taurustal: {
    title: 'Konfigurator 3D Taurustal',
    industry: 'Branża stalowa',
    summary: 'Mój pierwszy konfigurator garaży 3D: Vue.js i Three.js, z panelem cen w WordPressie.',
    description: [
      'Responsywny konfigurator garaży 3D do zamawiania garaży na wymiar. Dedykowana wtyczka WordPress pozwala firmie zarządzać cenami i parametrami.'
    ]
  }
}
