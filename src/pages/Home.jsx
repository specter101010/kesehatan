import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Reveal, CountUp, SplitWords, Section, H2, Photo } from '../components/ui.jsx'
import { STATS, QUOTES, CONTACT, GMAPS_URL } from '../data.js'

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 160])
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-deep text-cream">
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        {/* Taruh video di public/videos/hero.mp4 (poster: public/images/hero-poster.jpg) */}
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/60 to-deep/30" />
      <motion.div aria-hidden className="absolute -left-40 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-40">
        {/* <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
          src="/images/logo-full.png" alt="PT Escita Pharma" className="mb-10 w-72 max-w-[70vw] drop-shadow-2xl sm:w-96" /> */}
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-7xl">
          <SplitWords text="Precision in Every Process," delay={0.5} /><br />
          <SplitWords text="Purpose in Every Product" delay={0.9} className="shine" />
        </h1>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
          <Link to="/tentang/sejarah" className="btn-gold">Kenali Kami</Link>
          <Link to="/produk/obat-bebas" className="btn-line text-cream">Lihat Produk</Link>
        </motion.div>
      </div>
      <motion.div aria-hidden className="absolute bottom-6 left-1/2 h-10 w-px bg-pale/60" animate={{ scaleY: [0, 1, 0], originY: 0 }} transition={{ duration: 2.2, repeat: Infinity }} />
    </section>
  )
}

function About() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* KONTEN KIRI */}
        <Reveal>
          <p className="text-sm font-semibold text-gold">
            Sekilas Tentang Kami
          </p>

          <H2 className="mt-3 max-w-3xl text-navy">
            Menjaga Kemurnian, Mewariskan Kesembuhan
          </H2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-deep/80">
            Selamat datang di Escita Pharma, perusahaan industri farmasi
            terdepan yang berdedikasi untuk menghadirkan sediaan obat
            berkualitas tinggi guna meningkatkan standar kesehatan
            masyarakat. Kami percaya bahwa setiap produk farmasi yang
            aman dan efektif berawal dari komitmen mutlak terhadap
            kemurnian, sterilitas, dan ketelitian ilmiah.
          </p>
        </Reveal>

        {/* LOGO KANAN */}
        <Reveal delay={0.2} y={20}>
          <div className="flex items-center justify-center lg:justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src="/images/logo-full.png"
              alt="PT Escita Pharma"
              className="w-72 max-w-full object-contain drop-shadow-2xl sm:w-96 lg:w-full lg:max-w-md"
            />
          </div>
        </Reveal>
      </div>

      {/* STATISTIK */}
      <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-navy/15 pt-12 lg:grid-cols-5">
        {STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} y={18}>
            <p className="font-display text-6xl font-semibold text-navy">
              <CountUp to={s.v} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-deep/70">{s.l}</p>
          </Reveal>
        ))}
      </div>

      {/* PETA PERSEBARAN */}
      <Reveal className="mt-20">
        <Photo
          src="/images/peta-persebaran.png"
          label="Peta persebaran Indonesia (public/images/peta-persebaran.png)"
          className="h-72 rounded-2xl sm:h-96"
        />
        <p className="mt-4 text-center text-sm italic text-deep/70">
          Produk PT Escita Pharma telah hadir dan didistribusikan ke 27 kota di Indonesia
        </p>
      </Reveal>
    </Section>
  )
}

function Stories() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 8000); return () => clearInterval(t) }, [])
  const q = QUOTES[i]
  return (
    <section className="relative isolate overflow-hidden bg-deep text-cream">
      <AnimatePresence mode="sync">
        <motion.div key={i} className="absolute inset-0 -z-10" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4 }}>
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(/images/quote-${i + 1}.jpg)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-deep/40" />
        </motion.div>
      </AnimatePresence>
      <div className="mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-center px-6 py-24">
        <span aria-hidden className="font-display text-8xl leading-none text-pale">“</span>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.6 }}>
            <blockquote className="max-w-3xl font-display text-3xl leading-snug sm:text-5xl">{q.q}”</blockquote>
            <p className="mt-8 font-semibold text-pale">{q.n} ({q.a} Tahun)</p>
            <p className="text-sm text-cream/70">{q.c}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex gap-2">
          {QUOTES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Kisah ${k + 1}`} className="relative h-1.5 w-12 overflow-hidden rounded-full bg-cream/25">
              {k === i && <motion.span layoutId="dot" className="absolute inset-0 bg-pale" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className="relative isolate overflow-hidden bg-cream/50 text-navy">
      <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/images/pabrik.jpg)' }} />
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <H2>Lokasi PT Escita Pharma</H2>
          <p className="mt-6 max-w-xl text-lg text-deep/80">{CONTACT.address}</p>
          <a href={GMAPS_URL} target="_blank" rel="noreferrer" className="btn-gold mt-8">Buka di Google Maps</a>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (<><Hero /><About /><Stories /><Location /></>)
}
