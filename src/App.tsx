// src/App.tsx
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import SiteNav from './components/SiteNav'
import Home from './pages/Home'
import About from './pages/About'
import Publications from './pages/Publications'
import Patents from './pages/Patents'
import Teaching from './pages/Teaching'
import Workshops from './pages/Workshops'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <SiteNav />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
