import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'
import { Instagram, Youtube, Linkedin, Globe } from 'lucide-react'
import logoFooter from '../img/400x400_drkeklikian.png'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  const handleOpenCookies = () => {
    window.dispatchEvent(new CustomEvent('openCookieSettings'))
  }

  return (
    <footer className="bg-white py-10 sm:py-14 border-t border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Logo central compacto */}
        <div className="mb-6">
          <img
            src={logoFooter}
            alt="Clínica Dr. Keklikian"
            className="h-20 sm:h-24 w-auto mx-auto object-contain"
            width={160}
            height={160}
          />
        </div>

        {/* Lema central destacado en azul primario, tamaño ajustado */}
        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#0C008E] max-w-2xl mx-auto text-center leading-relaxed mb-8 tracking-tight">
          Un enfoque médico integral para cuidar tu mente y tu cuerpo desde la ciencia, la tecnología y la prevención.
        </p>

        {/* Iconos sociales en azul primario */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/drkeklikian_medicinadelestres/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-xl border border-[#0C008E]/20 flex items-center justify-center text-[#0C008E] hover:bg-[#0C008E] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@drkeklikian_pnie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 rounded-xl border border-[#0C008E]/20 flex items-center justify-center text-[#0C008E] hover:bg-[#0C008E] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95-.01 2.53.01 5.06-.02 7.59-.06 1.65-.55 3.3-1.45 4.69-1.1 1.71-2.88 2.89-4.91 3.32-2.03.42-4.17.2-6.07-.63-1.88-.82-3.41-2.31-4.26-4.19-.85-1.87-1.02-4.04-.49-6.02.53-1.97 1.69-3.71 3.34-4.82 1.65-1.1 3.65-1.56 5.64-1.33.1.01.2.03.3.05v4.06c-.84-.11-1.7-.01-2.48.29-.78.31-1.47.85-1.95 1.52-.47.67-.73 1.5-.72 2.35.02.85.31 1.67.82 2.33.51.66 1.23 1.14 2.05 1.36.81.23 1.69.18 2.47-.13.78-.32 1.45-.88 1.88-1.6.43-.71.65-1.55.63-2.4-.04-4.07-.01-8.14-.02-12.21.01-.19.01-.39.02-.58z"/>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@drKeklikian_medicinadelestres"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-xl border border-[#0C008E]/20 flex items-center justify-center text-[#0C008E] hover:bg-[#0C008E] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/clinicadrkeklikianmedicinadelestres/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl border border-[#0C008E]/20 flex items-center justify-center text-[#0C008E] hover:bg-[#0C008E] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://clinicakeklikian.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web"
            className="w-10 h-10 rounded-xl border border-[#0C008E]/20 flex items-center justify-center text-[#0C008E] hover:bg-[#0C008E] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>

        {/* Enlaces legales y de configuración de cookies en azul primario */}
        <div className="flex flex-col items-center gap-3 mb-8 text-sm sm:text-base font-semibold text-[#0C008E]">
          <button
            type="button"
            onClick={handleOpenCookies}
            className="hover:text-[#e879a0] transition-colors py-1 cursor-pointer"
          >
            Cookie Settings
          </button>
          <Link
            to="/privacidad"
            className="hover:text-[#e879a0] transition-colors py-1"
          >
            Política de Privacidad
          </Link>
        </div>

        {/* Copyright en azul primario */}
        <p className="text-xs sm:text-sm font-medium text-[#0C008E]/80 text-center tracking-wide">
          Copyright ©{year}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
