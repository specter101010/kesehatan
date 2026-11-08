import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  )
}

export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 2, ease, onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

// Kata-kata muncul bergantian dari bawah
export function SplitWords({ text, className = '', delay = 0 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden>
          <motion.span className="inline-block" initial={{ y: '110%' }} animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}


export function PageHero({
  eyebrow,
  title,
  sub,
  image = '/images/header-bg.jpg',
}) {
  return (
    <section className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-navy pb-16 pt-32 sm:min-h-[520px] sm:pt-36">

      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D35]/95 via-[#101D35]/75 to-[#101D35]/25" />

      {/* Decorative Circle */}
      <motion.div
        aria-hidden
        className="absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full border border-gold/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">

        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gold"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          <SplitWords text={title} />
        </motion.h1>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease }}
          style={{ originX: 0 }}
          className="mt-8 block h-1 w-20 bg-gold"
        />

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {sub}
          </motion.p>
        )}

      </div>
    </section>
  )
}


export function Tabs({ items }) {
  return (
    <div className="sticky top-[68px] z-30 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
        {items.map((it) => (
          <NavLink key={it.to} to={it.to} className={({ isActive }) => `relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors ${isActive ? 'text-navy' : 'text-navy/50 hover:text-navy'}`}>
            {({ isActive }) => (<>
              {it.label}
              {isActive && <motion.span layoutId="tab-underline" className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            </>)}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export function Section({ children, className = '', dark = false, id }) {
  return (
    <section id={id} className={`${dark ? 'bg-deep text-cream' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">{children}</div>
    </section>
  )
}

export function H2({ children, className = '' }) {
  return <h2 className={`font-display text-4xl font-semibold leading-tight sm:text-5xl ${className}`}>{children}</h2>
}

export function Photo({ src, alt = '', label, className = '' }) {
  const [err, setErr] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-navy to-deep ${className}`}>
      {!err && src && <img src={src} alt={alt} onError={() => setErr(true)} className="h-full w-full object-cover" loading="lazy" />}
      {(err || !src) && <div className="absolute inset-0 grid place-items-center p-4 text-center text-xs text-pale/70">{label || 'Foto menyusul'}</div>}
    </div>
  )
}
