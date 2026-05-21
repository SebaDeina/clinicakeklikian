import { useState, useRef, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import LogoIcon from './LogoIcon'

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

const SECTION_IDS = ['inicio', 'que-tratamos', 'que-hacemos', 'opiniones']

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]

  useEffect(() => {
    function handlePointerDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-white/90 hover:text-white text-sm transition-colors px-2 py-1.5 rounded-lg hover:bg-white/15"
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:inline font-medium text-xs">{current.label}</span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 bg-[#08005e] border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px] z-[100]">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left ${
                lang === l.code
                  ? 'bg-[#e879a0]/20 text-[#e879a0]'
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { label: t.nav.inicio, href: '#inicio' },
    { label: t.nav.queTratamos, href: '#que-tratamos' },
    { label: t.nav.queHacemos, href: '#que-hacemos' },
    { label: t.nav.opiniones, href: '#opiniones' },
    { label: t.nav.consultasOnline, href: '/consultas-online' },
  ]

  const updateFromScroll = useCallback(() => {
    const y = window.scrollY
    setScrolled(y > 40)

    const marker = y + Math.min(180, window.innerHeight * 0.22)
    let active = 'inicio'
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) continue
      if (el.offsetTop <= marker) active = id
    }
    setActiveSection(active)
  }, [])

  useEffect(() => {
    updateFromScroll()
    window.addEventListener('scroll', updateFromScroll, { passive: true })
    window.addEventListener('resize', updateFromScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateFromScroll)
      window.removeEventListener('resize', updateFromScroll)
    }
  }, [updateFromScroll])

  const handleLink = (href) => {
    setMenuOpen(false)
    if (href.startsWith('/')) {
      navigate(href)
    } else if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        if (href === '#inicio') window.scrollTo({ top: 0, behavior: 'smooth' })
        else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      if (href === '#inicio') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const linkIsActive = (href) => {
    if (href.startsWith('/')) return location.pathname === href
    return activeSection === href.slice(1) && location.pathname === '/'
  }

  const NavLinkLabel = ({ link, active }) => (
    <span className="inline-flex items-center gap-1.5">
      {link.href === '/consultas-online' && (
        <Sparkles
          className={`w-3.5 h-3.5 shrink-0 transition-colors duration-300 ${
            active ? 'text-[#e879a0]' : 'text-white/75 group-hover:text-white'
          }`}
          aria-hidden="true"
        />
      )}
      {link.label}
    </span>
  )

  const desktopLinkClass = (href) => {
    const active = linkIsActive(href)
    return [
      'relative py-2 text-sm font-medium transition-colors duration-300',
      active ? 'text-white font-bold' : 'text-white/75 hover:text-white',
      "after:pointer-events-none after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-[#e879a0] after:transition-transform after:duration-300 after:origin-center motion-reduce:after:transition-none",
      active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-40',
    ].join(' ')
  }

  return (
    <header
      className={`fixed left-0 right-0 z-50 motion-reduce:transition-none transition-[padding,top,background-color] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
        scrolled ? 'top-3 sm:top-4 px-3 sm:px-6 lg:px-10 bg-transparent' : 'top-0 px-0 bg-[#0C008E]'
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl flex flex-col overflow-visible motion-reduce:transition-none transition-[border-radius,box-shadow,background-color] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
          scrolled
            ? 'rounded-2xl bg-[#0C008E] shadow-lg shadow-black/30'
            : 'rounded-none bg-transparent shadow-none'
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 motion-reduce:transition-none transition-[height,min-height] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
            scrolled ? 'h-14 min-h-[3.5rem]' : 'h-16 min-h-16'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (location.pathname !== '/') navigate('/')
                else window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`flex items-center shrink-0 motion-reduce:transition-none transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                scrolled ? 'scale-[0.96]' : 'scale-100'
              }`}
            >
              <LogoIcon className="h-9 w-9 text-white shrink-0" />
              <span className="sr-only">Clínica Dr. Keklikian</span>
            </a>
            <LanguageSwitcher />
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button type="button" onClick={() => handleLink(l.href)} className={`group ${desktopLinkClass(l.href)}`}>
                  <NavLinkLabel link={l} active={linkIsActive(l.href)} />
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <button type="button" onClick={() => handleLink('#contacto')} className="btn-pink">
              {t.nav.contactanos}
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-white/90 hover:text-white transition-transform duration-300 active:scale-95"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`lg:hidden grid overflow-hidden motion-reduce:transition-none transition-[grid-template-rows,opacity,border-radius] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
            scrolled ? 'rounded-b-2xl' : ''
          } ${
            menuOpen ? 'grid-rows-[1fr] opacity-100 border-t border-[#1e1c42] pointer-events-auto' : 'grid-rows-[0fr] opacity-0 border-t border-transparent pointer-events-none'
          }`}
        >
          <div className="min-h-0">
            <div className={`px-4 py-4 flex flex-col gap-1 bg-[#0C008E] ${scrolled ? 'rounded-b-2xl pb-5' : ''}`}>
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => handleLink(l.href)}
                  className={`group text-left font-medium py-3 px-2 rounded-xl transition-colors ${
                    linkIsActive(l.href)
                      ? 'text-[#e879a0] bg-white/5 font-bold'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <NavLinkLabel link={l} active={linkIsActive(l.href)} />
                </button>
              ))}
              <button type="button" onClick={() => handleLink('#contacto')} className="btn-pink mt-3">
                {t.nav.contactanos}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
