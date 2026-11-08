export const LINKTREE_URL = 'https://linktr.ee/' // TODO: ganti dengan link linktree E-Katalog PT Escita Pharma
export const GMAPS_URL = 'https://maps.app.goo.gl/1oDzXPZBpxBKnJa66'
export const CONTACT = {
  email: 'contact@escitapharma.co.id',
  phone: '+62 21 2328 006',
  address: 'Jl. Alternatif Cibubur No.Km 4, RT.008/RW.011, Cibubur, Kec. Jatisampurna, Kota Bks, Jawa Barat 17435',
}
export const SOCIALS = [
  { name: 'Instagram', href: '#', path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM17.5 6a1 1 0 110 2 1 1 0 010-2z' },
  { name: 'X', href: '#', path: 'M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2.5 2h6.1l4.2 5.6L18.2 2zm-1 18h1.6L7.9 3.9H6.2L17.2 20z' },
  { name: 'Facebook', href: '#', path: 'M13.5 22v-8h2.7l.5-3.3h-3.2V8.6c0-.9.4-1.7 1.8-1.7h1.5V4.1S15.5 3.9 14.3 3.9c-2.6 0-4.3 1.6-4.3 4.4v2.4H7.3V14H10v8h3.5z' },
  { name: 'LinkedIn', href: '#', path: 'M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.8h4V21H3V9.8zm6.5 0h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6V21h-4v-4.8c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4V9.8z' },
  { name: 'YouTube', href: '#', path: 'M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z' },
]

export const NAV = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang/sejarah', children: [
    { label: 'Sejarah Kami', to: '/tentang/sejarah' },
    { label: 'Struktur Operasional', to: '/tentang/struktur' },
    { label: 'Susunan Tim', to: '/tentang/tim' },
    { label: 'Legalitas', to: '/tentang/legalitas' },
  ] },
  { label: 'Produk & Jasa', to: '/produk/obat-bebas', children: [
    { label: 'Obat Bebas', to: '/produk/obat-bebas' },
    { label: 'Obat Resep Etikal', to: '/produk/obat-resep-etikal' },
    { label: 'Obat Generik Berlogo', to: '/produk/obat-generik-berlogo' },
    { label: 'Obat E-Katalog', to: '/produk/e-katalog' },
  ] },
  { label: 'Berita', to: '/berita' },
  { label: 'Karir', to: '/karir/peluang', children: [
    { label: 'Peluang Karir', to: '/karir/peluang' },
    { label: 'Melamar Pekerjaan', to: '/karir/melamar' },
    { label: 'Komunitas Talenta', to: '/karir/komunitas' },
  ] },
  { label: 'Hubungi Kami', to: '/kontak' },
]

export const STATS = [
  { v: 500, suffix: '+', l: 'Tenaga Profesional Farmasi' },
  { v: 60, l: 'Produk Terdaftar' },
  { v: 16, l: 'Produk yang Telah Dipatenkan' },
  { v: 24, l: 'Izin BPOM Aktif' },
  { v: 8, l: 'Penghargaan yang Diraih' },
]

export const QUOTES = [
  { q: 'Saran saya untuk orang lain yang mengalaminya? Temukan pengobatan yang tepat sejak dini, selagi tubuh kita masih memiliki kesempatan untuk mengendalikannya dengan lebih baik.', n: 'Budi Santoso', a: 52, c: 'Menghadapi Diabetes Tipe 2' },
  { q: 'Jangan menunggu sampai kondisinya parah baru peduli. Disiplin minum obat dan kontrol rutin adalah kunci utama agar kita bisa kembali menikmati hidup tanpa rasa cemas.', n: 'Siti Rahmawati', a: 46, c: 'Menghadapi Hipertensi Kronis' },
  { q: 'Hal terbaik adalah tidak menyerah pada rasa sakit. Temukan produk dan penanganan medis yang tepat, agar kita bisa kembali aktif mendampingi keluarga tercinta.', n: 'Hendra Wijaya', a: 58, c: 'Menghadapi Osteoarthritis' },
]

export const VISI = 'Menjadi industri farmasi nasional terpercaya yang unggul dalam riset dan integritas ilmiah, dengan konsisten menghadirkan sediaan obat yang bermutu tinggi, aman, serta bermakna bagi peningkatan kualitas hidup dan kesehatan masyarakat.'
export const MISI = [
  'Menerapkan prinsip sterilisasi mutlak dan kontrol kualitas yang ketat pada setiap proses formulasi sediaan obat sesuai dengan standar CPOB nasional dan internasional.',
  'Memadukan presisi ilmu pengetahuan dengan riset berkelanjutan untuk menghasilkan beragam bentuk sediaan farmasi yang efektif dan tepat guna bagi kebutuhan medis.',
  'Menjalankan operasional industri yang berintegritas, ramah lingkungan, serta memberikan dampak positif yang nyata bagi kesehatan masyarakat secara luas.',
]


// ==========================================
// STRUKTUR DEPARTEMEN PERUSAHAAN
// ==========================================

export const DEPTS = [
  {
    name: 'Business Development & Strategy',
    description:
      'Mengidentifikasi peluang pasar baru, mengelola kemitraan strategis, dan merancang arah pertumbuhan bisnis jangka panjang perusahaan.',
    image: '/images/departments/business-development.jpg',
    people: [
      {
        name: 'Katarina Cathleen Yap, S.E., MBA.',
        role: 'Head of Business Development & Strategy',
        photo: '4 Katarina.png',
      },
      {
        name: 'Steven Sebastian Chandra, S.Farm.',
        role: 'Strategic Partnership Specialist',
        photo: '5 Steven.png',
      },
    ],
  },
  {
    name: 'Commercial Marketing',
    description:
      'Menyusun strategi pemasaran, membangun brand awareness, serta mengelola kampanye komersial untuk mengenalkan produk farmasi ke masyarakat dan tenaga medis.',
    image: '/images/departments/commercial-marketing.jpg',
    people: [
      {
        name: 'Martinus Edwards, S.E., M.M.',
        role: 'Head of Commercial Marketing',
        photo: '6 Martinus.png',
      },
      {
        name: 'Kenzo Andikha, S.Farm.',
        role: 'Product Brand Manager',
        photo: '7 Kenzo.png',
      },
    ],
  },
  {
    name: 'Digital & IT',
    description:
      'Mengembangkan dan memelihara infrastruktur teknologi, sistem informasi internal, serta keamanan data.',
    image: '/images/departments/digital-it.jpg',
    people: [
      {
        name: 'Joyous Leander, S.Kom.',
        role: 'Head of Digital & IT',
        photo: '20 Joyous.png',
      },
      {
        name: 'Mike Surya Origo, S.T.',
        role: 'IT Infrastructure Specialist',
        photo: '21 Mike.png',
      },
    ],
  },
  {
    name: 'Engineering & Technical',
    description:
      'Memastikan keandalan mesin produksi, fasilitas pemrosesan, dan sistem utilitas pabrik selalu berada dalam kondisi optimal serta terkalibrasi.',
    image: '/images/departments/engineering-technical.jpg',
    people: [
      {
        name: 'Ega Eunanda, M.T.',
        role: 'Head of Engineering & Technical',
        photo: '8 Ega.png',
      },
      {
        name: 'James Zhao, S.T.',
        role: 'Calibration & Maintenance Engineer',
        photo: '9 James.png',
      },
    ],
  },
  {
    name: 'Human Resource Management',
    description:
      'Mengelola rekrutmen talenta terbaik, pengembangan kompetensi karyawan, serta menciptakan lingkungan kerja yang kondusif dan produktif.',
    image: '/images/departments/human-resource.jpg',
    people: [
      {
        name: 'Richelle, S.Psi., M.M.',
        role: 'Head of Human Resource Management',
        photo: '10 Richelle.png',
      },
      {
        name: 'Ganesha Gani, S.H.',
        role: 'Talent Acquisition Specialist',
        photo: '11 Ganesha.png',
      },
    ],
  },
  {
    name: 'Legal, Compliance & Audit',
    description:
      'Memastikan seluruh operasional dan tata kelola perusahaan mematuhi regulasi hukum yang berlaku serta standar etika korporat.',
    image: '/images/departments/legal-compliance.jpg',
    people: [
      {
        name: 'Wira Bintang, S.H., M.H.',
        role: 'Head of Legal, Compliance & Audit',
        photo: '12 Wira.png',
      },
      {
        name: 'Sungkar Paranem, S.H.',
        role: 'Internal Corporate Auditor',
        photo: '13 Sungkar.png',
      },
    ],
  },
  {
    name: 'Manufacturing & Production',
    description:
      'Mengelola proses pembuatan sediaan farmasi mulai dari penimbangan bahan baku, formulasi, pengolahan, hingga pengemasan sesuai standar CPOB.',
    image: '/images/departments/manufacturing-production.jpg',
    people: [
      {
        name: 'Julian Honesta, M.Farm., Apt.',
        role: 'Head of Manufacturing & Production',
        photo: '14 Julian.png',
      },
      {
        name: 'Ignatius Sonora, A.Md.Farm.',
        role: 'Production Supervisor',
        photo: '15 Ignatius.png',
      },
    ],
  },
  {
    name: 'Procurement',
    description:
      'Menangani pengadaan bahan baku obat, bahan pengemas, dan peralatan industri bermutu tinggi dari pemasok terpercaya secara efisien.',
    image: '/images/departments/procurement.jpg',
    people: [
      {
        name: 'Jae Hendra Wijaya, S.E.',
        role: 'Head of Procurement',
        photo: '16 Jae.png',
      },
      {
        name: 'Junan Gitawa, S.Farm.',
        role: 'Raw Material Procurement Staff',
        photo: '17 Junan.png',
      },
    ],
  },
  {
    name: 'Quality Assurance & Quality Control (QA & QC)',
    description:
      'Menguji dan memastikan setiap tahapan produksi hingga produk akhir memenuhi spesifikasi mutu, keamanan, dan standar kualitas yang ketat.',
    image: '/images/departments/quality-assurance.jpg',
    people: [
      {
        name: 'Shannan Osaka, M.Sc., Apt.',
        role: 'Head of QA & QC',
        photo: '18 Shannan.png',
      },
      {
        name: 'Alexander Jusa, S.Farm., Apt.',
        role: 'Quality Control Manager',
        photo: '19 Alexander.png',
      },
    ],
  },
  {
    name: 'Regulatory Affairs & Safety Pharmacovigilance',
    description:
      'Mengurus legalitas izin edar produk ke BPOM serta memantau keamanan obat secara berkelanjutan demi keselamatan konsumen.',
    image: '/images/departments/regulatory-affairs.jpg',
    people: [
      {
        name: 'Gilbert Gestano, S.Farm., Apt.',
        role: 'Head of Regulatory Affairs & Pharmacovigilance',
        photo: '22 Gilbert.png',
      },
      {
        name: 'Ocean Hilmy, M.Kes.',
        role: 'Safety & Pharmacovigilance Officer',
        photo: '23 Ocean.png',
      },
    ],
  },
  {
    name: 'Research & Development (R&D)',
    description:
      'Melakukan riset mendalam dan inovasi formulasi untuk mengembangkan sediaan farmasi baru yang efektif dan berkualitas tinggi.',
    image: '/images/departments/research-development.jpg',
    people: [
      {
        name: 'Ningrum Kirana, M.Sc., Apt.',
        role: 'Head of R&D',
        photo: '24 Ningrum.png',
      },
      {
        name: 'Anthonny Young, S.Farm., Apt.',
        role: 'Senior Formulation Scientist',
        photo: '25 Anthonny.png',
      },
    ],
  },
  {
    name: 'Supply Chain',
    description:
      'Mengatur alur perencanaan, penyimpanan di gudang, hingga distribusi logistik produk secara tepat waktu dan terintegrasi ke seluruh rantai pasok.',
    image: '/images/departments/supply-chain.jpg',
    people: [
      {
        name: 'Winona Arta, M.Log.',
        role: 'Head of Supply Chain',
        photo: '26 Winona.png',
      },
      {
        name: 'Wilhan Pakpahan, S.E.',
        role: 'Logistics & Distribution Manager',
        photo: '27 Wilhan.png',
      },
    ],
  },
]

// ==========================================
// DEWAN KOMISARIS & DIREKSI
// ==========================================

export const EXEC = [
  {
    name: 'Novella Valenia, M.Farm., Apt.',
    role: 'President Commissioner',
    photo: null,
  },
  {
    name: 'Bramasta Youngky, M.Farm., Apt.',
    role: 'Chief Executive Officer / CEO',
    photo: '2 Bramasta.png',
  },
  {
    name: 'Devon Snare, M.Biomed., Apt.',
    role: 'Chief Operating Officer / COO',
    photo: '3 Devon.png',
  },
]

// ==========================================
// LEGALITAS DAN SERTIFIKASI
// ==========================================

export const LEGAL_DOCS = [
  {
    title: 'Izin Industri Farmasi (IIF)',
    description: 'Perizinan industri farmasi dari Kementerian Kesehatan Republik Indonesia.',
    file: 'Izin Kemenkes.png',
    category: 'Perizinan',
  },
  {
    title: 'CPOTB 2021',
    description: 'Cara Pembuatan Obat Tradisional yang Baik dari BPOM.',
    file: 'CPOTB.png',
    category: 'Sertifikasi',
  },
  {
    title: 'ISO 9001:2015',
    description: 'Standar Sistem Manajemen Mutu.',
    file: 'ISO-9001.png',
    category: 'International Standard',
  },
  {
    title: 'ISO 14001:2015',
    description: 'Standar Sistem Manajemen Lingkungan.',
    file: 'ISO-14001.png',
    category: 'International Standard',
  },
  {
    title: 'ISO 22000:2018',
    description: 'Standar Sistem Manajemen Keamanan Pangan.',
    file: 'ISO-22000.png',
    category: 'International Standard',
  },
  {
    title: 'ISO 17025:2017',
    description: 'Standar Kompetensi Laboratorium Pengujian dan Kalibrasi.',
    file: 'ISO-17025.png',
    category: 'International Standard',
  },
  {
    title: 'Sertifikat Halal SJPH',
    description: 'Sertifikasi berdasarkan Sistem Jaminan Produk Halal.',
    file: 'Halal SJPH.png',
    category: 'Sertifikasi',
  },
]


// ==========================================
// PRODUCT IMAGE HELPER
// ==========================================

const makeProduct = (
  folder,
  file,
  name,
  description,
  form
) => ({
  id: file,
  name,
  description,
  form,
  image: `/obat/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
})

// ==========================================
// PRODUCT DATABASE
// ==========================================

export const PRODUCTS = {

  // ========================================
  // 1. OBAT BEBAS
  // ========================================

  'obat-bebas': {
    title: 'Obat Bebas',

    groups: [
      {
        name: 'Produk Obat Bebas Bermerk',

        items: [
          makeProduct(
            'Obat Bebas',
            'Esciback.png',
            'Esciback',
            'Obat batuk hitam (OBH).',
            'Sirup'
          ),

          makeProduct(
            'Obat Bebas',
            'Escifen.png',
            'Escifen',
            'Produk obat bebas Escita Pharma.',
            'Produk farmasi'
          ),

          makeProduct(
            'Obat Bebas',
            'Escikids.png',
            'Escikids',
            'Produk multivitamin untuk anak.',
            'Sirup'
          ),

          makeProduct(
            'Obat Bebas',
            'Escilanta.png',
            'Escilanta',
            'Antasida untuk membantu meredakan gejala kelebihan asam lambung.',
            'Suspensi'
          ),

          makeProduct(
            'Obat Bebas',
            'Escimol.png',
            'Escimol',
            'Paracetamol untuk membantu meredakan demam dan nyeri.',
            'Tablet'
          ),

          makeProduct(
            'Obat Bebas',
            'Escitus.png',
            'Escitus',
            'Produk obat batuk Escita Pharma.',
            'Sirup'
          ),

          makeProduct(
            'Obat Bebas',
            'Rhinoscita.png',
            'Rhinoscita',
            'Produk sediaan tetes hidung.',
            'Tetes hidung'
          ),

          makeProduct(
            'Obat Bebas',
            'Scitaminat.png',
            'Scitaminat',
            'Dimenhidrinat untuk membantu mengatasi mual dan mabuk perjalanan.',
            'Suspensi'
          ),

          makeProduct(
            'Obat Bebas',
            'Scitaplex.png',
            'Scitaplex Extra',
            'Kombinasi paracetamol, aspirin, dan kafein.',
            'Kaplet'
          ),

          makeProduct(
            'Obat Bebas',
            'Scitavit.png',
            'Scitavit B-Complex',
            'Suplemen vitamin B kompleks.',
            'Tablet salut selaput'
          ),
        ],
      },
    ],
  },

  // ========================================
  // 2. OBAT RESEP ETIKAL
  // ========================================

  'obat-resep-etikal': {
    title: 'Obat Resep Etikal',

    groups: [
      {
        name: 'Produk Obat Resep Bermerk',

        items: [
          makeProduct(
            'Obat Resep Beretikal',
            'Alpranes.png',
            'Alpranes 1 mg',
            'Alprazolam 1 mg. Psikotropika.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Anxita.png',
            'Anxita 5 mg',
            'Diazepam 5 mg. Psikotropika.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Azithrom.png',
            'Azithrom 500 mg',
            'Azithromycin 500 mg. Antibiotik makrolida.',
            'Kaplet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Bisovask.png',
            'Bisovask 5 mg',
            'Bisoprolol 5 mg. Beta blocker.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Brocasa.png',
            'Brocasa 4 mg',
            'Salbutamol 4 mg. Bronkodilator.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Cefaril.png',
            'Cefaril',
            'Cefadroxil. Antibiotik golongan sefalosporin.',
            'Sirup kering'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Ceforil.png',
            'Ceforil 500 mg',
            'Cefadroxil 500 mg. Antibiotik sefalosporin.',
            'Kapsul'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Cifanes.png',
            'Cifanes 500 mg',
            'Ciprofloxacin 500 mg. Antibiotik kuinolon.',
            'Kaplet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Dometic.png',
            'Dometic 5 mg/5 mL',
            'Domperidone. Produk untuk keluhan mual dan muntah.',
            'Suspensi'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Esciclav.png',
            'Esciclav 500 mg',
            'Amoxicillin dan clavulanate. Antibiotik.',
            'Kaplet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Escimox.png',
            'Escimox 125 mg/5 mL',
            'Amoxicillin 125 mg/5 mL. Antibiotik.',
            'Sirup kering'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Glimepta.png',
            'Glimepta 3 mg',
            'Glimepiride 3 mg. Antidiabetes.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Lanzep.png',
            'Lanzep 30 mg',
            'Lansoprazole 30 mg. Proton pump inhibitor.',
            'Kapsul'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Melflam.png',
            'Melflam 15 mg',
            'Meloxicam 15 mg. Obat antiinflamasi nonsteroid.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Menizol.png',
            'Menizol',
            'Produk obat resep etikal Escita Pharma.',
            'Produk farmasi'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Metcort.png',
            'Metcort 8 mg',
            'Methylprednisolone 8 mg. Kortikosteroid.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Scitachlor.png',
            'Scitachlor 0.5%',
            'Chloramphenicol 0.5%.',
            'Tetes mata'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Scitaflam.png',
            'Scitaflam 50 mg',
            'Diclofenac sodium 50 mg. Obat antiinflamasi nonsteroid.',
            'Tablet'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Scitafusin.png',
            'Scitafusin',
            'Paracetamol untuk sediaan infus.',
            'Infus'
          ),

          makeProduct(
            'Obat Resep Beretikal',
            'Vascita.png',
            'Vascita 16 mg',
            'Candesartan 16 mg. Antihipertensi.',
            'Tablet'
          ),
        ],
      },
    ],
  },

  // ========================================
  // 3. OBAT GENERIK BERLOGO
  // ========================================

  'obat-generik-berlogo': {
    title: 'Obat Generik Berlogo',

    groups: [
      {
        name: 'Produk Obat Generik',

        items: [
          makeProduct(
            'Obat Generik Berlogo',
            'Paracetamol.png',
            'Paracetamol 500 mg',
            'Paracetamol 500 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Asam Mefenamat.png',
            'Asam Mefenamat 500 mg',
            'Asam mefenamat 500 mg.',
            'Kaplet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Ibuprofen.png',
            'Ibuprofen 400 mg',
            'Ibuprofen 400 mg.',
            'Tablet salut selaput'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Antasida DOEN.png',
            'Antasida DOEN',
            'Sediaan antasida untuk membantu mengatasi gejala kelebihan asam lambung.',
            'Tablet kunyah'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Kalsium Laktat.png',
            'Kalsium Laktat 500 mg',
            'Kalsium laktat 500 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Vitamin C.png',
            'Vitamin C 50 mg',
            'Vitamin C 50 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'CTM.png',
            'Chlorpheniramine Maleate 4 mg',
            'Chlorpheniramine maleate 4 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Asam Folat.png',
            'Asam Folat 1 mg',
            'Asam folat 1 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Attapulgite.png',
            'Attapulgite 600 mg',
            'Attapulgite 600 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Bisacodyl.png',
            'Bisakodil 5 mg',
            'Bisakodil 5 mg.',
            'Tablet salut enterik'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Miconazole.png',
            'Mikonazol Nitrat 2%',
            'Mikonazol nitrat 2%.',
            'Krim'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Cetirizine.png',
            'Cetirizine HCl 10 mg',
            'Cetirizine hydrochloride 10 mg.',
            'Tablet salut selaput'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Cefadroxil.png',
            'Cefadroxil 500 mg',
            'Cefadroxil 500 mg.',
            'Kapsul'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Amlodipine.png',
            'Amlodipine 10 mg',
            'Amlodipine 10 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Captopril.png',
            'Captopril 25 mg',
            'Captopril 25 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Simvastatin.png',
            'Simvastatin 20 mg',
            'Simvastatin 20 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Dexamethasone.png',
            'Dexamethasone 0.5 mg',
            'Dexamethasone 0.5 mg.',
            'Tablet'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'WFI.png',
            'Water for Injection',
            'Air untuk keperluan sediaan injeksi.',
            'Injeksi'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Ringer.png',
            'Ringer Lactate',
            'Larutan Ringer Lactate.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'NaCl 1.png',
            'Natrium Klorida 0.9%',
            'Larutan Natrium Klorida 0.9%.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'NaCl 2.png',
            'Natrium Klorida 3%',
            'Larutan Natrium Klorida 3%.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'NaCl 3.png',
            'Natrium Klorida 5%',
            'Larutan Natrium Klorida 5%.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Dextrose 1.png',
            'Dextrose 10%',
            'Larutan Dextrose 10%.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Dextrose 2.png',
            "Dextrose 5% in Lactated Ringer's Solution",
            'Larutan Dextrose 5% dalam Lactated Ringer.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Dextrose 3.png',
            'Dextrose 5% in 0.45% Sodium Chloride',
            'Larutan Dextrose 5% dalam Sodium Chloride 0.45%.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Dextrose 4.png',
            'Dextrose 5% in 0.9% Sodium Chloride',
            'Larutan Dextrose 5% dalam Sodium Chloride 0.9%.',
            'Infus 500 mL'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Bromhexine.png',
            'Bromhexine HCl 4 mg/5 mL',
            'Bromhexine hydrochloride 4 mg/5 mL.',
            'Sirup'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Ambroxol.png',
            'Ambroxol HCl 15 mg/5 mL',
            'Ambroxol hydrochloride 15 mg/5 mL.',
            'Sirup'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Ketoconazole.png',
            'Ketoconazole 2%',
            'Ketoconazole 2%.',
            'Krim'
          ),

          makeProduct(
            'Obat Generik Berlogo',
            'Klotrimazole.png',
            'Clotrimazole 1%',
            'Clotrimazole 1%.',
            'Krim'
          ),
        ],
      },
    ],
  },
}


export const NEWS = [
  { t: '"Secita dengan Escita": PT. Escita Pharma Gelar Edukasi Kesehatan Keluarga dan Lingkungan Sehat di Sidoarjo', cat: 'Edukasi & Aksi Lingkungan', loc: 'Sidoarjo, Jawa Timur', d: '12 November 2023', body: [
    'Sebagai wujud nyata kepedulian terhadap kesejahteraan masyarakat, PT. Escita Pharma kembali menyelenggarakan rangkaian kegiatan pengabdian masyarakat melalui program unggulannya, "Secita dengan Escita". Kegiatan yang dipusatkan di Kabupaten Sidoarjo, Jawa Timur ini berfokus pada penyuluhan kesehatan keluarga dan pentingnya menjaga kebersihan lingkungan hidup.',
    'Dalam sesi penyuluhan, tim ahli farmasi dan relawan memberikan edukasi mengenai penggunaan, penyimpanan, dan pembuangan obat rumah tangga yang aman (konsep D-O-D-I: Dapatkan, Gunakan, Simpan, dan Buang obat dengan benar), pencegahan penyakit menular, PHBS, serta pemilahan limbah rumah tangga.',
    'Momen ini secara resmi menandai peluncuran perdana program "Secita dengan Escita" ke tengah masyarakat, yang ke depan akan terus menjangkau lebih banyak wilayah dan komunitas di seluruh Indonesia.'] },
  { t: 'Komitmen Tanpa Kompromi: PT. Escita Pharma Berbagi Pemahaman Integritas Mutu Farmasi di Jember', cat: 'Inovasi & Edukasi Sains', loc: 'Jember, Jawa Timur', d: '22 Mei 2024', body: [
    'PT. Escita Pharma terus mengobarkan semangat kepemimpinan berintegritas di industri sediaan obat nasional. Melalui forum diskusi terbuka dan kuliah umum kolaboratif bersama praktisi industri di Kota Jember, tim manajemen dan pakar formulasi membagikan wawasan strategis mengenai penerapan prinsip Good Manufacturing Practice (CPOB) serta budaya integritas mutu yang ketat dalam setiap rantai produksi sediaan farmasi.',
    'Perwakilan manajemen menekankan bahwa industri farmasi bukan sekadar bisnis komersial, melainkan pilar kemanusiaan yang menuntut standar etika dan presisi ilmiah tanpa kompromi, dari pemilihan bahan baku hingga pengujian laboratorium yang independen.'] },
  { t: 'Menjangkau Komunitas: PT. Escita Pharma Gelar Bakti Sosial dan Edukasi Kesehatan Terpadu di Desa Ciangsana', cat: 'Pemberdayaan Komunitas', loc: 'Desa Ciangsana, Bogor', d: '15 Agustus 2025', body: [
    'Melalui pilar kepedulian sosial program "Secita dengan Escita", PT. Escita Pharma mengadakan aksi pengabdian masyarakat berskala luas yang merangkul ratusan warga di Desa Ciangsana, Kabupaten Bogor. Kegiatan ini meliputi pemeriksaan kesehatan gratis (tekanan darah dan kadar gula darah), konsultasi bersama apoteker profesional, serta pembagian paket nutrisi dan perlengkapan kebersihan keluarga.',
    'Kegiatan ini tidak hanya memberikan bantuan medis dasar, tetapi juga membangun jembatan komunikasi antara industri farmasi dan masyarakat agar informasi kesehatan yang benar dapat dirasakan seluruh lapisan warga.'] },
  { t: 'Aksi Hijau "Secita dengan Escita": PT. Escita Pharma Pelopori Penghijauan Berkelanjutan di Sleman', cat: 'Aksi Lingkungan', loc: 'Sleman, DI Yogyakarta', d: '18 Juni 2026', body: [
    'Melanjutkan komitmen jangka panjang terhadap kelestarian bumi dan keseimbangan ekosistem, PT. Escita Pharma menggelar aksi penanaman pohon dan penataan kawasan hijau di Kabupaten Sleman. Kegiatan ini melibatkan jajaran direksi, karyawan, serta komunitas pemuda dan warga lokal.',
    'Ratusan bibit pohon produktif dan pohon pelindung ditanam di area publik dan jalur hijau, disertai edukasi konservasi air dan pengelolaan sampah rumah tangga. Inisiatif ini menegaskan bahwa inovasi sains dan kelestarian lingkungan adalah dua hal yang tidak terpisahkan.'] },
]

export const AREAS = ['Business Development & Strategy', 'Commercial Marketing', 'Digital & IT', 'Engineering & Technical', 'Human Resource Management', 'Legal, Compliance & Audit', 'Manufacturing & Production', 'Procurement', 'QA & QC', 'Regulatory Affairs & Pharmacovigilance', 'Research & Development (R&D)', 'Supply Chain']
