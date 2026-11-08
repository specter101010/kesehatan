import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHero, Reveal, Section, H2, Photo } from '../components/ui.jsx'
import { NEWS } from '../data.js'

export default function News() {
  const [open, setOpen] = useState(null)
  return (<>
    <PageHero eyebrow="Berita" title="Secita dengan Escita" sub="Merajut Dedikasi untuk Masyarakat dan Bumi" image="/images/headers/berita.jpg" />
    <Section>
      <Reveal className="max-w-3xl space-y-4 text-lg leading-relaxed text-deep/85">
        <p>Sejak pertama kali diluncurkan pada tahun 2023, program <strong>"Secita dengan Escita"</strong> telah menjadi pilar utama PT. Escita Pharma. Berawal dari semangat sederhana untuk merajut kepedulian, nama <em>"Secita"</em> mencerminkan kehangatan, cita-cita bersama, dan keterikatan emosional antara perusahaan dengan masyarakat.</p>
        <p>Wujud nyata komitmen sosial PT. Escita Pharma melalui rangkaian program penyuluhan kesehatan, sosialisasi edukatif, hingga aksi pelestarian lingkungan demi menciptakan kehidupan yang lebih sehat dan berkesinambungan.</p>
      </Reveal>
      <H2 className="mt-20 text-navy">Berita</H2>
      <div className="mt-8 divide-y divide-navy/15 border-y border-navy/15">
        {[...NEWS].reverse().map((n, i) => (
          <Reveal key={n.t} y={16} className="grid gap-6 py-8 md:grid-cols-[18rem_1fr]">
            <Photo src={`/images/berita-${NEWS.length - i}.jpg`} label="Foto kegiatan menyusul" className="aspect-[4/3] rounded-xl" />
            <div>
              <p className="text-sm text-deep/60">{n.d} · {n.loc}</p>
              <p className="mt-1 text-sm font-semibold text-gold">{n.cat}</p>
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-navy">{n.t}</h3>
              <p className="mt-3 text-deep/80">{n.body[0]}</p>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    {n.body.slice(1).map((p) => <p key={p} className="mt-4 text-deep/80">{p}</p>)}
                  </motion.div>
                )}
              </AnimatePresence>
              {n.body.length > 1 && <button onClick={() => setOpen(open === i ? null : i)} className="mt-4 text-sm font-semibold text-gold underline-offset-4 hover:underline">{open === i ? 'Tutup' : 'Selengkapnya'}</button>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  </>)
}
