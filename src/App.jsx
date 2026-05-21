import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Hero from './sections/Hero'
import Filosofia from './sections/Filosofia'
import QueTratamos from './sections/QueTratamos'
import Estadisticas from './sections/Estadisticas'
import QueHacemos from './sections/QueHacemos'
import Proceso from './sections/Proceso'
import PorQueNosotros from './sections/PorQueNosotros'
import Invitacion from './sections/Invitacion'
import Equipo from './sections/Equipo'
import FAQ from './sections/FAQ'
import Contacto from './sections/Contacto'
import Privacidad from './pages/Privacidad'
import Cookies from './pages/Cookies'
import ConsultasOnline from './pages/ConsultasOnline'

function Home() {
  return (
    <main>
      <Hero />
      <Filosofia />
      <QueTratamos />
      <Estadisticas />
      <Proceso />
      <QueHacemos />
      <PorQueNosotros />
      <Invitacion />
      <Equipo />
      <FAQ />
      <Contacto />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/consultas-online" element={<ConsultasOnline />} />
      </Routes>
      <CookieBanner />
      <Footer />
    </BrowserRouter>
  )
}
