import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageHero, Tabs, Reveal, Section, H2 } from '../components/ui.jsx'
import { DEPTS, AREAS } from '../data.js'

const TABS = [
  { label: 'Peluang Karir', to: '/karir/peluang' },
  { label: 'Melamar Pekerjaan', to: '/karir/melamar' },
  { label: 'Komunitas Talenta', to: '/karir/komunitas' },
]


function Peluang() {
  return (
    <Section>
      <Reveal>
        <H2 className="text-navy">
          Bergabunglah Bersama PT. Escita Pharma
        </H2>

        <p className="mt-3 text-deep/70">
          Jelajahi berbagai bidang keahlian dan jadilah
          bagian dari tim PT. Escita Pharma.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {DEPTS.map((d, i) => (
          <Reveal
            key={d.name}
            delay={(i % 2) * 0.08}
            y={16}
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="h-full overflow-hidden rounded-2xl border border-navy/10 bg-white transition-shadow hover:shadow-xl"
            >
              {/* Department Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7">
                {/* Department Name */}
                <h3 className="font-display text-2xl font-semibold text-navy">
                  {d.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-deep/70">
                  {d.description}
                </p>

                {/* Team Members */}
                <div className="mt-6 border-t border-navy/10 pt-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
                    Struktur Tim
                  </p>

                  <div className="space-y-4">
                    {(d.people || []).map((person) => (
                      <div
                        key={person.name}
                        className="flex items-center gap-3"
                      >
                        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-pale">
                          <img
                            src={`/images/tim/${encodeURIComponent(person.photo)}`}
                            alt={person.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-navy">
                            {person.name}
                          </p>

                          <p className="mt-1 text-xs text-deep/60">
                            {person.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}


function Melamar() {
  return (
    <Section>
      <Reveal><H2 className="text-navy">Melamar Pekerjaan</H2></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-gold bg-pale/20 p-8">
          <h3 className="font-display text-3xl font-semibold text-navy">Peringatan Penipuan</h3>
          <p className="mt-4 leading-relaxed text-deep/85">Penipuan sering kali dilakukan oleh pihak tidak bertanggung jawab di platform media sosial, yang berpura-pura sebagai tim perekrut atau manajemen PT. Escita Pharma untuk meminta CV serta informasi pribadi Anda. Penipuan tersebut biasanya mengarahkan kandidat ke agen perjalanan tertentu untuk pemesanan dan pembayaran tiket atau akomodasi perjalanan ke Kantor Pusat/Pabrik PT. Escita Pharma dengan dalih wawancara kerja. Komunikasi dan permintaan semacam ini <strong>sama sekali tidak berasal dari PT. Escita Pharma</strong>. Seluruh proses rekrutmen kami <strong>bebas dari biaya apa pun</strong>. Kami menghimbau masyarakat dan calon pelamar untuk tetap waspada, tidak melakukan pembayaran dalam bentuk apa pun, serta tidak menanggapi permintaan yang mencurigakan tersebut.</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-navy p-8 text-cream">
          <h3 className="font-display text-3xl font-semibold text-pale">Bagaimana jika pekerjaan yang tepat saat ini tidak tersedia?</h3>
          <p className="mt-4 leading-relaxed text-cream/85">Jika saat ini kami tidak sedang mencari karyawan untuk posisi yang relevan dengan Anda, Anda dapat mendaftar <strong>Komunitas Talenta</strong> kami. Apabila posisi yang sesuai dengan profil Anda tersedia, kami akan memberi tahu Anda.</p>
          <a href="/karir/komunitas" className="btn-gold mt-6">Daftar Komunitas Talenta</a>
        </Reveal>
      </div>
    </Section>
  )
}

function Komunitas() {
  const [done, setDone] = useState(false)
  const submit = (e) => { e.preventDefault(); /* TODO: sambungkan ke Formspree/EmailJS/Google Form */ setDone(true) }
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <Reveal><H2 className="text-navy">Bergabung dengan Komunitas Talenta Kami</H2></Reveal>
        {done ? (
          <motion.p initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 rounded-2xl bg-pale/30 p-8 font-display text-3xl text-navy">Terima kasih! Data Anda sudah kami terima.</motion.p>
        ) : (
          <form onSubmit={submit} className="mt-10 grid gap-5 sm:grid-cols-2">
            <input required className="field" placeholder="Nama depan*" />
            <input required className="field" placeholder="Nama belakang*" />
            <input required type="email" className="field" placeholder="Email*" />
            <input required type="tel" className="field" placeholder="No. Telepon*" />
            <input required className="field" placeholder="Lokasi saat ini*" />
            <input required type="number" min="0" className="field" placeholder="Tahun pengalaman*" />
            <select required defaultValue="" className="field sm:col-span-2"><option value="" disabled>Area yang diminati*</option>{AREAS.map((a) => <option key={a}>{a}</option>)}</select>
            <label className="flex gap-3 text-sm sm:col-span-2"><input required type="checkbox" className="mt-1 accent-gold" />Ya, saya telah membaca dan menerima Pernyataan persetujuan dan pernyataan privasi</label>
            <label className="flex gap-3 text-sm sm:col-span-2"><input required type="checkbox" className="mt-1 accent-gold" />Ya, saya mengonfirmasi bahwa PT. Escita Pharma dapat menghubungi saya melalui email terkait peluang karier dan berita terkait karier</label>
            <button className="btn-gold justify-self-start sm:col-span-2">Submit</button>
          </form>
        )}
      </div>
    </Section>
  )
}

export default function Careers() {
  const { tab } = useParams()
  const view = { peluang: <Peluang />, melamar: <Melamar />, komunitas: <Komunitas /> }[tab]
  if (!view) return <Navigate to="/karir/peluang" replace />
  return (<>
    <PageHero eyebrow="Karir" title="Bergabunglah Bersama PT. Escita Pharma" sub="Jelajahi berbagai bidang keahlian dan jadilah bagian dari tim PT. Escita Pharma"  image="/images/headers/karir.jpg" />
    <Tabs items={TABS} />
    {view}
  </>)
}
