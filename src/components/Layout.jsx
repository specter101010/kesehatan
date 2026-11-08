import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, CONTACT, SOCIALS } from '../data.js'

const whiten = { filter: 'brightness(0) invert(1)' }

export function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(null)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  const solid = scrolled || open
  const onHero = pathname === '/' && !solid
  const light = onHero // teks putih hanya saat di atas video hero

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${onHero ? 'bg-transparent' : 'bg-white/95 shadow-sm shadow-navy/10 backdrop-blur'}`}>
      <nav className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${solid ? 'h-[68px]' : 'h-24'}`}>
        <Link to="/" aria-label="PT Escita Pharma - Beranda">
          <img src="/images/logo-wordmark.png" alt="PT Escita Pharma" style={light ? whiten : undefined} className={`w-auto transition-all duration-500 ${solid ? 'h-9' : 'h-12'}`} />
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.label} className="relative" onMouseEnter={() => setHover(n.label)} onMouseLeave={() => setHover(null)}>
              <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${light ? (isActive ? 'text-pale' : 'text-white/90 hover:text-pale') : (isActive ? 'text-gold' : 'text-navy hover:text-gold')}`}>{n.label}</NavLink>
              <AnimatePresence>
                {n.children && hover === n.label && (
                  <motion.ul initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full w-60 overflow-hidden rounded-xl border border-navy/10 bg-white p-2 shadow-2xl shadow-navy/10">
                    {n.children.map((c) => (
                      <li key={c.to}><Link to={c.to} className="block rounded-lg px-3 py-2.5 text-sm text-navy transition hover:bg-cream hover:text-gold">{c.label}</Link></li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
        <button className={`grid h-10 w-10 place-items-center lg:hidden ${light ? 'text-white' : 'text-navy'}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span className="relative block h-3.5 w-6">
            <motion.span className="absolute left-0 top-0 h-0.5 w-6 bg-current" animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} />
            <motion.span className="absolute left-0 top-1.5 h-0.5 w-6 bg-current" animate={{ opacity: open ? 0 : 1 }} />
            <motion.span className="absolute left-0 top-3 h-0.5 w-6 bg-current" animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} />
          </span>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden bg-white lg:hidden">
            <ul className="max-h-[75vh] overflow-y-auto px-6 pb-6">
              {NAV.map((n) => (
                <li key={n.label} className="border-t border-navy/10 py-3">
                  <Link to={n.to} className="font-display text-2xl text-navy">{n.label}</Link>
                  {n.children && <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">{n.children.map((c) => <Link key={c.to} to={c.to} className="text-sm text-gold">{c.label}</Link>)}</div>}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#101D35] text-white">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <img
              src="/images/logo-wordmark.png"
              alt="PT Escita Pharma"
              className="h-14 w-auto brightness-0 invert"
            />

            <p className="mt-7 max-w-sm font-display text-2xl italic leading-relaxed text-[#D7B66D]">
              Precision in Every Process,
              Purpose in Every Product.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Berkomitmen menghadirkan produk farmasi berkualitas
              melalui proses yang presisi, inovasi, dan standar
              mutu yang terpercaya.
            </p>

            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition-all duration-300 hover:border-[#D7B66D] hover:bg-[#D7B66D] hover:text-[#101D35]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-[#D7B66D]">
              Navigasi
            </h3>

            <ul className="space-y-4 text-sm text-white/65">
              {[
                ['Beranda', '/'],
                ['Tentang Kami', '/tentang/sejarah'],
                ['Produk', '/produk/obat-bebas'],
                ['Berita', '/berita'],
                ['Karir', '/karir/peluang'],
                ['Kontak', '/kontak'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-[#D7B66D]"
                  >
                    <span className="h-px w-0 bg-[#D7B66D] transition-all duration-300 group-hover:w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-[#D7B66D]">
              Hubungi Kami
            </h3>

            <div className="space-y-6 text-sm">

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all leading-relaxed text-white/75 transition hover:text-[#D7B66D]"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
                  Telepon
                </p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="text-white/75 transition hover:text-[#D7B66D]"
                >
                  {CONTACT.phone}
                </a>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/35">
                  Alamat
                </p>
                <p className="max-w-xs leading-7 text-white/65">
                  {CONTACT.address}
                </p>
              </div>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-[#D7B66D]">
              Komitmen Kami
            </h3>

            <p className="text-sm leading-7 text-white/60">
              Mengutamakan kualitas, ketepatan proses,
              dan tanggung jawab dalam setiap tahapan
              pengembangan serta penyediaan produk farmasi.
            </p>

            <div className="mt-7 border-l-2 border-[#D7B66D] pl-4">
              <p className="font-display text-lg italic text-white/85">
                Quality. Integrity. Innovation.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-6 text-white/45">
            © {new Date().getFullYear()} PT Escita Pharma.
            All Rights Reserved.
          </p>

          <p className="text-xs tracking-wide text-white/45">
            Precision in Every Process, Purpose in Every Product.
          </p>

        </div>

      </div>
    </footer>
  )
}

