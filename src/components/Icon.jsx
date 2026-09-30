const paths = {
  arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
  'arrow-up': <path d="M6 18 18 6M6 6h12v12" />,
  home: <path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7" />,
  leaf: <><path d="M20 3C8 2 3 7 5 14c2 7 13 7 15-11Z" /><path d="M3 21 15 9M8 16l-1-5M12 12h5" /></>,
  sparkles: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4M18 4h4" />,
  crystal: <path d="m8 3-5 8 9 11 9-11-5-8H8ZM3 11h18M8 3l-1 8 5 11 5-11-1-8M7 11l5-8 5 8" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-3 5-5 3 3-5 5-3ZM12 1v2M12 21v2M1 12h2M21 12h2" /></>,
  heart: <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 6l-1.1-1.2a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></>,
  chat: <><path d="M21 11.5a9 9 0 0 1-9 9c-1.7 0-3.2-.4-4.6-1.2L3 21l1.7-4.4A9 9 0 1 1 21 11.5Z" /><path d="M8 11h8M8 14h5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 1v2M12 21v2M1 12h2M21 12h2M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2" /></>,
}
export default function Icon({ name = 'sparkles', size = 24, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name] || paths.sparkles}</svg>
}
