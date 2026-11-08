
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { Navbar, Footer } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import News from './pages/News.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />

            <Route
              path="/tentang"
              element={<Navigate to="/tentang/sejarah" replace />}
            />
            <Route path="/tentang/:tab" element={<About />} />

            <Route
              path="/produk"
              element={<Navigate to="/produk/obat-bebas" replace />}
            />
            <Route path="/produk/:cat" element={<Products />} />

            <Route path="/berita" element={<News />} />

            <Route
              path="/karir"
              element={<Navigate to="/karir/peluang" replace />}
            />
            <Route path="/karir/:tab" element={<Careers />} />

            <Route path="/kontak" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}
