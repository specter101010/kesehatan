
import { useState, useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import {
  PageHero,
  Tabs,
  Reveal,
  Section,
  H2,
} from '../components/ui.jsx'

import { PRODUCTS } from '../data.js'

// ==========================================
// PRODUCT TABS
// ==========================================

const TABS = [
  { label: 'Obat Bebas', to: '/produk/obat-bebas' },
  { label: 'Obat Resep Etikal', to: '/produk/obat-resep-etikal' },
  { label: 'Obat Generik Berlogo', to: '/produk/obat-generik-berlogo' },
]

// ==========================================
// PRODUCT CARD
// ==========================================

function Card({ item, i }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.4,
        delay: Math.min(i, 8) * 0.035,
      }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-navy/10 bg-white/80 transition-shadow hover:shadow-xl"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-gradient-to-br from-cream via-white to-pale/40 p-5">

        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <svg
              viewBox="0 0 24 24"
              className="h-14 w-14 fill-none stroke-navy/30"
              strokeWidth="1.2"
            >
              <rect x="7" y="9" width="10" height="12" rx="2" />
              <path d="M9 9V6h6v3M10 14h4" />
            </svg>

            <span className="mt-3 text-xs text-deep/40">
              Foto produk menyusul
            </span>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full border border-navy/10 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">
          {item.form || 'Farmasi'}
        </span>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold leading-tight text-navy">
          {item.name}
        </h3>

        <div className="my-3 h-0.5 w-9 bg-gold transition-all duration-500 group-hover:w-16" />

        <p className="text-sm leading-relaxed text-deep/70">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

// ==========================================
// MAIN PRODUCTS PAGE
// ==========================================

export default function Products() {
  const { cat } = useParams()
  const [q, setQ] = useState('')

  const data = PRODUCTS[cat]

  // Redirect jika kategori tidak ditemukan
  if (!data) {
    return <Navigate to="/produk/obat-bebas" replace />
  }

  // FILTER PRODUCTS
  const groups = useMemo(() => {
    if (!data) return []

    return data.groups.map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const keyword = q.trim().toLowerCase()

        return (
          item.name.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword) ||
          (item.form || '').toLowerCase().includes(keyword)
        )
      }),
    }))
  }, [data, q])

  // TOTAL PRODUCTS
  const totalProducts = groups.reduce(
    (total, group) => total + group.items.length,
    0
  )

  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="Produk & Jasa"
        title="Produk Kami"
        image="/images/headers/product.jpg"
        sub="Beragam sediaan farmasi yang dikembangkan dengan memperhatikan standar mutu dan kebutuhan kesehatan."
      />

      {/* CATEGORY TABS */}
      <Tabs items={TABS} />

      <Section>
        {/* HEADER & SEARCH */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Product Collection
            </span>

            <H2 className="mt-2 text-navy">
              {data.title}
            </H2>

            <p className="mt-2 text-sm text-deep/60">
              Menampilkan {totalProducts} produk
            </p>
          </Reveal>

          {/* SEARCH INPUT */}
          <div className="w-full md:max-w-xs">
            <label
              htmlFor="product-search"
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy"
            >
              Cari Produk
            </label>

            <input
              id="product-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Nama atau jenis produk..."
              aria-label="Cari produk"
              className="field w-full"
            />
          </div>
        </div>

        {/* PRODUCT GROUPS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {groups.map((group) => (
              <div key={group.name} className="mt-14">
                {/* GROUP HEADER */}
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-gold/50 pb-3">
                  <h3 className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                    {group.name}
                  </h3>

                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy">
                    {group.items.length} Produk
                  </span>
                </div>

                {/* PRODUCT GRID */}
                {group.items.length > 0 ? (
                  <motion.div
                    layout
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  >
                    <AnimatePresence mode="popLayout">
                      {group.items.map((item, i) => (
                        <Card
                          key={item.id}
                          item={item}
                          i={i}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <p className="rounded-xl bg-cream/50 p-6 text-center text-sm text-deep/60">
                    Produk tidak ditemukan.
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* FOOTER NOTE */}
        <p className="mt-16 text-center text-xs leading-relaxed text-deep/50">
          Informasi produk ditampilkan sebagai katalog
          perusahaan. Untuk informasi lebih lanjut,
          silakan menghubungi pihak PT Escita Pharma.
        </p>
      </Section>
    </>
  )
}
