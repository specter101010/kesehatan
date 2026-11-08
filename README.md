# PT Escita Pharma - Website
React + Vite + Tailwind + Framer Motion.

    npm install
    npm run dev      # development
    npm run build    # production

## Aset yang perlu kamu taruh (di folder `public/`)
- `videos/hero.mp4` : video background beranda (+ `images/hero-poster.jpg`)
- `images/header-bg.jpg` : foto header halaman dalam
- `images/peta-persebaran.png` : peta persebaran Indonesia
- `images/quote-1.jpg` .. `quote-3.jpg` : foto penyandang penyakit
- `images/pabrik.jpg` : foto industri (bagian lokasi)
- `images/filosofi-logo.png`, `images/tim/exec-1..3.jpg`, `images/berita-1..4.jpg`

## Yang perlu diisi di `src/data.js`
- `LINKTREE_URL` (E-Katalog), link sosmed di `SOCIALS`
- Video profil: ganti `VIDEO_ID` di `src/pages/About.jsx`
- Form (kontak & komunitas talenta) belum terhubung ke backend: sambungkan ke Formspree/EmailJS di handler `submit`.
