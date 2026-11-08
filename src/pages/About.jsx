import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import {
  PageHero,
  Tabs,
  Reveal,
  Section,
  H2,
} from '../components/ui.jsx'

import {
  VISI,
  MISI,
  DEPTS,
  EXEC,
  LEGAL_DOCS,
} from '../data.js'

// ==========================================
// NAVIGASI
// ==========================================

const TABS = [
  { label: 'Sejarah Kami', to: '/tentang/sejarah' },
  { label: 'Struktur Operasional', to: '/tentang/struktur' },
  { label: 'Susunan Tim', to: '/tentang/tim' },
  { label: 'Legalitas', to: '/tentang/legalitas' },
]

// ==========================================
// DATA FOTO PERSONEL
// ==========================================

const TEAM = [
  { name: 'Bramasta', file: '2 Bramasta.png' },
  { name: 'Devon', file: '3 Devon.png' },
  { name: 'Katarina', file: '4 Katarina.png' },
  { name: 'Steven', file: '5 Steven.png' },
  { name: 'Martinus', file: '6 Martinus.png' },
  { name: 'Kenzo', file: '7 Kenzo.png' },
  { name: 'Ega', file: '8 Ega.png' },
  { name: 'James', file: '9 James.png' },
  { name: 'Richelle', file: '10 Richelle.png' },
  { name: 'Ganesha', file: '11 Ganesha.png' },
  { name: 'Wira', file: '12 Wira.png' },
  { name: 'Sungkar', file: '13 Sungkar.png' },
  { name: 'Julian', file: '14 Julian.png' },
  { name: 'Ignatius', file: '15 Ignatius.png' },
  { name: 'Jae', file: '16 Jae.png' },
  { name: 'Junan', file: '17 Junan.png' },
  { name: 'Shannan', file: '18 Shannan.png' },
  { name: 'Alexander', file: '19 Alexander.png' },
  { name: 'Jovous', file: '20 Joyous.png' },
  { name: 'Mike', file: '21 Mike.png' },
  { name: 'Gilbert', file: '22 Gilbert.png' },
  { name: 'Ocean', file: '23 Ocean.png' },
  { name: 'Ningrum', file: '24 Ningrum.png' },
  { name: 'Anthony', file: '25 Anthonny.png' },
  { name: 'Winona', file: '26 Winona.png' },
  { name: 'Wilhan', file: '27 Wilhan.png' },
]

// ==========================================
// DATA SERTIFIKAT DAN LEGALITAS
// ==========================================


// ==========================================
// SEJARAH PERUSAHAAN
// ==========================================

function Sejarah() {
  return (
    <>
      {/* SEJARAH PERUSAHAAN */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <H2 className="text-navy">
              Sembilan Tahun Dedikasi:
              Memadukan Presisi Sains dan Kemurnian Mutu
            </H2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="space-y-5 text-lg leading-relaxed text-deep/85"
          >
            <p>
              Selama sembilan tahun, Escita Pharma terus bertumbuh
              sebagai industri farmasi yang menghadirkan beragam
              sediaan obat, mulai dari tablet dan kapsul hingga
              sirup, suspensi, salep, dan krim.
            </p>

            <p>
              Didirikan pada tahun 2017, PT. Escita Pharma lahir
              dari keyakinan bahwa setiap produk farmasi berkualitas
              harus didukung oleh ilmu pengetahuan, ketelitian,
              proses produksi yang terstandar, serta integritas
              dalam menjaga mutu.
            </p>

            <p>
              Perjalanan kami merupakan komitmen berkelanjutan
              untuk mengembangkan proses produksi yang aman,
              efektif, dan dapat diandalkan dalam mendukung
              kebutuhan kesehatan masyarakat.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* IDENTITAS PERUSAHAAN */}
      <Section className="bg-cream/50">
        <Reveal className="max-w-3xl">
          <H2 className="text-navy">
            Terinspirasi dari Warisan Keunggulan
          </H2>

          <p className="mt-6 text-lg leading-relaxed text-deep/80">
            Nama Escita Pharma mencerminkan semangat pemulihan
            dan energi positif. Identitas visual perusahaan juga
            terinspirasi dari eksperimen monumental labu leher
            angsa (swan-neck flask) oleh Louis Pasteur.
            Eksperimen tersebut menjadi salah satu tonggak
            penting dalam pemahaman mikroorganisme dan
            pencegahan kontaminasi.
          </p>
        </Reveal>
      </Section>

      {/* FILOSOFI LOGO
      <Section>
        <Reveal className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <H2 className="text-navy">Filosofi Logo</H2>

            <p className="mt-4 text-deep/70">
              Identitas visual Escita Pharma merepresentasikan
              komitmen terhadap ilmu pengetahuan, kemurnian,
              dan kualitas dalam setiap proses.
            </p>
          </div>

          <div className="rounded-2xl bg-white/60 p-8">
            <img
              src="/images/filosofi-logo.png"
              onError={(e) => {
                e.currentTarget.src = '/images/logo-full.png'
              }}
              alt="Filosofi logo Escita Pharma"
              className="mx-auto max-h-80 w-auto"
            />
          </div>
        </Reveal>
      </Section> */}

      {/* VIDEO PROFIL */}
      <Section className="">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Mengenal Lebih Dekat
              </span>

              <H2 className="mt-3 text-navy">
                Video Profil
              </H2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-deep/70">
                Mengenal perjalanan, identitas, serta komitmen
                PT Escita Pharma dalam menghadirkan produk farmasi
                berkualitas melalui inovasi, integritas, dan
                dedikasi terhadap kesehatan masyarakat.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-deep shadow-2xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/9wg-u98F5QY"
                  title="Video Profil PT Escita Pharma"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="mt-5 text-center text-sm text-deep/50">
              PT Escita Pharma — 9 Tahun Melangkah,
              Terus Menghadirkan Makna.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* VISI & MISI */}
      <Section className="bg-cream/50">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-5xl font-semibold text-gold">
              Visi
            </h3>

            <p className="mt-5 text-lg leading-relaxed">
              {VISI}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="font-display text-5xl font-semibold text-gold">
              Misi
            </h3>

            <ol className="mt-5 list-decimal space-y-4 pl-5 text-lg leading-relaxed marker:font-semibold marker:text-gold">
              {MISI.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

// ==========================================
// STRUKTUR OPERASIONAL
// ==========================================


function Struktur() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Our Organization
          </span>

          <H2 className="mt-3 text-navy">
            Struktur Operasional
          </H2>

          <p className="mx-auto mt-4 max-w-2xl text-deep/70">
            Dua belas departemen yang bekerja secara terintegrasi
            untuk menjaga kualitas, inovasi, dan keberlangsungan
            operasional PT. Escita Pharma.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {DEPTS.map((dept, i) => (
          <Reveal
            key={dept.name}
            delay={(i % 3) * 0.08}
            y={20}
            className="group overflow-hidden rounded-2xl border border-navy/10 bg-white/70 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy/10 via-cream to-gold/20">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl text-gold">✧</span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                  Department Photo
                </span>
                <span className="mt-1 text-[10px] text-deep/40">
                  {dept.name}
                </span>
              </div>

              <img
                src={dept.image}
                alt={`Departemen ${dept.name}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-60" />

              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">
                DEPT. {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-semibold leading-snug text-navy">
                {dept.name}
              </h3>

              <div className="my-4 h-0.5 w-12 bg-gold transition-all duration-500 group-hover:w-20" />

              <p className="text-sm leading-relaxed text-deep/70">
                {dept.description}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold">
                {dept.people.length} Personnel
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}


// ==========================================
// SUSUNAN TIM
// ==========================================

function PersonCard({ person, executive = false }) {
  const initials = person.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

  const photo = person.photo
    ? `/images/tim/${encodeURIComponent(person.photo)}`
    : null

  return (
    <div className="group overflow-hidden rounded-2xl border border-navy/10 bg-white/80 transition duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative overflow-hidden bg-cream ${executive ? 'aspect-[4/5]' : 'aspect-[4/4]'}`}>
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy/10 to-gold/20">
          <span className="font-display text-5xl font-semibold text-navy/30">
            {initials}
          </span>
        </div>

        {photo && (
          <img
            src={photo}
            alt={person.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h4 className="font-display text-base font-semibold leading-snug text-navy">
          {person.name}
        </h4>

        <p className="mt-2 text-sm leading-relaxed text-gold">
          {person.role}
        </p>
      </div>
    </div>
  )
}

function Tim() {
  return (
    <>
      <Section>
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Executive Leadership
            </span>

            <H2 className="mt-3 text-navy">
              Susunan Organisasi Perusahaan
            </H2>

            <p className="mx-auto mt-4 max-w-2xl text-deep/70">
              Kepemimpinan strategis yang mengarahkan visi,
              tata kelola, dan operasional perusahaan.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-7 sm:grid-cols-3">
          {EXEC.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.1}>
              <PersonCard person={person} executive />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-cream/50">
        <Reveal>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Department Management
            </span>

            <H2 className="mt-3 text-navy">
              Tim Manajemen Departemen
            </H2>

            <p className="mx-auto mt-4 max-w-2xl text-deep/70">
              Didukung oleh tenaga profesional yang memiliki
              kompetensi dan tanggung jawab di bidang masing-masing.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-8">
          {DEPTS.map((dept, i) => (
            <Reveal key={dept.name} delay={0.04}>
              <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white/80">
                <div className="flex flex-col gap-3 border-b border-navy/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Department {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="mt-2 font-display text-xl font-semibold text-navy sm:text-2xl">
                      {dept.name}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full bg-cream px-4 py-2 text-xs font-semibold text-navy">
                    {dept.people.length} Members
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 sm:gap-6 sm:p-7">
                  {dept.people.map((person) => (
                    <PersonCard
                      key={person.name}
                      person={person}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}

// ==========================================
// LEGALITAS PERUSAHAAN
// ==========================================


function Legalitas() {
  return (
    <Section>
      <Reveal>
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Quality & Compliance
          </span>

          <H2 className="mt-3 text-navy">
            Legalitas Perusahaan
          </H2>

          <p className="mx-auto mt-4 max-w-2xl text-deep/70">
            Legalitas dan sertifikasi sebagai bagian dari
            komitmen perusahaan terhadap standar mutu,
            kepatuhan, dan kualitas operasional.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {LEGAL_DOCS.map((doc, i) => {
          const src = `/images/legal/${encodeURIComponent(doc.file)}`

          return (
            <Reveal key={doc.file} delay={(i % 3) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-gold/30 bg-white/80 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat ${doc.title}`}
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-cream/70 p-5"
                >
                  <img
                    src={src}
                    alt={doc.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </a>

                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {doc.category}
                  </span>

                  <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                    {doc.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-deep/70">
                    {doc.description}
                  </p>

                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-navy"
                  >
                    Lihat Sertifikat
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}


// ==========================================
// MAIN ABOUT PAGE
// ==========================================

export default function About() {
  const { tab } = useParams()

  const pages = {
    sejarah: <Sejarah />,
    struktur: <Struktur />,
    tim: <Tim />,
    legalitas: <Legalitas />,
  }

  const view = pages[tab]

  if (!view) {
    return <Navigate to="/tentang/sejarah" replace />
  }

  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="9 Tahun Melangkah, Terus Menghadirkan Makna"
        image="/images/headers/tentang.jpeg"
      />

      <Tabs items={TABS} />

      {view}
    </>
  )
}
