export default function Brand({ full = false }) {
  if (full) {
    return <img className="brand-logo-full" src="/ishana-vastu.jpeg" alt="Ishana Vastu — Harmonizing spaces. Enriching lives." width="1254" height="1254" />
  }

  return <>
    <span className="brand-logo-emblem" aria-hidden="true">
      <img src="/ishana-vastu.jpeg" alt="" width="1254" height="1254" />
    </span>
    <span className="brand-wordmark"><span className="brand-name">ISHANA</span><span className="brand-vastu">VASTU</span><span className="brand-tagline">HARMONIZING SPACES. ENRICHING LIVES.</span></span>
  </>
}
