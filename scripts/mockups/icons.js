// Replaces <i data-i="name"> with a simple stroke icon
const P = {
  home: 'M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  cal: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  video: 'M3 7h12v10H3zM15 10l6-3v10l-6-3',
  doc: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M17 11a3 3 0 1 0 0-6M22 21v-1a5 5 0 0 0-4-5',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-1a7 7 0 0 1 16 0v1',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  chat: 'M4 5h16v11H9l-5 4z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  radio: 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10',
  screen: 'M3 4h18v12H3zM8 20h8M12 16v4',
  store: 'M4 9l2-5h12l2 5M4 9v11h16V9M4 9h16',
  plus: 'M12 5v14M5 12h14',
  dl: 'M12 4v11m0 0-4-4m4 4 4-4M5 20h14',
  pin: 'M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  phone: 'M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail: 'M4 5h16v14H4zM4 6l8 7 8-7',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5',
  logs: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
  logout: 'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h11',
  qr: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2',
  star: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z',
  upload: 'M12 16V4m0 0-4 4m4-4 4 4M5 20h14',
  pdf: 'M6 3h9l4 4v14H6zM9 14h6',
  shield: 'M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z',
  menu: 'M4 6h16M4 12h16M4 18h16',
  dots: 'M12 5h.01M12 12h.01M12 19h.01',
  check: 'M5 12l5 5 9-10',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 15V9a4 4 0 0 1 4-4h6M18 9v6a4 4 0 0 1-4 4H8'
}
document.querySelectorAll('i[data-i]').forEach(el => {
  const s = el.getAttribute('style') || ''
  el.outerHTML = `<svg class="ico ${el.className}" style="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${P[el.dataset.i]}"/></svg>`
})
