import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero, Reveal, Section } from '../components/ui.jsx'
import { CONTACT } from '../data.js'

export default function Contact() {
  const [done, setDone] = useState(false)
  const submit = (e) => { e.preventDefault(); /* TODO: sambungkan ke Formspree/EmailJS */ setDone(true) }
  return (<>
    <PageHero eyebrow="Kontak" title="Hubungi Kami" image="/images/headers/kontak.jpg"/>
    <Section>
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal className="space-y-5 text-lg leading-relaxed text-deep/85">
          <p>Komitmen kami adalah memberikan pelayanan terbaik bagi masyarakat dan tenaga medis. Hubungi kami untuk mendapatkan informasi resmi mengenai ragam sediaan obat, konsultasi ketersediaan produk, serta kemitraan strategis melalui saluran komunikasi di bawah ini.</p>
          <p>Demi mengutamakan keselamatan pasien, jika Anda menemukan adanya efek samping, reaksi berlebih, atau keluhan kualitas sediaan produk PT. Escita Pharma, mohon segera sampaikan laporan Anda melalui formulir atau kontak yang tersedia.</p>
          <div className="space-y-1 pt-4 text-base"><p>{CONTACT.email}</p><p>{CONTACT.phone}</p><p>{CONTACT.address}</p></div>
        </Reveal>
        <Reveal delay={0.1}>
          {done ? (
            <motion.p initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-pale/30 p-8 font-display text-3xl text-navy">Pesan Anda terkirim. Terima kasih!</motion.p>
          ) : (
            <form onSubmit={submit} className="space-y-5 rounded-2xl bg-white/60 p-8">
              <input required className="field" placeholder="Nama Anda*" />
              <input required type="email" className="field" placeholder="Email Anda*" />
              <textarea required rows="6" className="field" placeholder="Pesan Anda*" />
              <button className="btn-gold">Kirim</button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  </>)
}
