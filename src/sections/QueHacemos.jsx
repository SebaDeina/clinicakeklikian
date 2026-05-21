import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAutoAdvance } from '../hooks/useAutoAdvance'
import ProgressBar from '../components/ProgressBar'
import imgPnie from '../img/Evaluación integral PNIE.avif'
import imgNeuro from '../img/QrSSupp6vLG5cjg29NdXKjgtgkM(2).png'
import imgBio from '../img/biofeedback.avif'
import imgQuiro from '../img/quimioterapia.avif'
import imgComplementarias from '../img/Terapias complementarias.avif'

const SERVICIO_IMAGES = [imgPnie, imgNeuro, imgBio, imgQuiro, imgComplementarias]
const AUTO_INTERVAL_MS = 5500
const NUM_COLOR = '#8BB8D9'

function ServicioImagen({ index, titulo }) {
  return (
    <div className="mt-6 flex justify-center lg:mt-8">
      <div className="h-40 w-full max-w-[260px] overflow-hidden rounded-2xl bg-slate-50 sm:h-44 lg:h-48">
        <img
          src={SERVICIO_IMAGES[index] ?? SERVICIO_IMAGES[0]}
          alt={titulo}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

function ServicioContenido({ serv, index }) {
  return (
    <div className="mt-4 w-full flex-1 opacity-0 animate-[fadeIn_0.45s_ease-out_forwards] motion-reduce:animate-none motion-reduce:opacity-100">
      <p className="text-sm leading-relaxed text-gray-600 lg:text-[15px]">{serv.descripcion}</p>
      <ServicioImagen index={index} titulo={serv.titulo} />
    </div>
  )
}

export default function QueHacemos() {
  const { lang, t } = useLanguage()
  const s = t.queHacemos
  const b = s.bannerConsultas
  const sectionRef = useRef(null)
  const [sectionInView, setSectionInView] = useState(false)
  const [carouselEnabled, setCarouselEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => setCarouselEnabled(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const { activeIndex, progress, reducedMotion, goTo } = useAutoAdvance(
    s.servicios.length,
    AUTO_INTERVAL_MS,
    { enabled: sectionInView && carouselEnabled }
  )

  const gridColumns = s.servicios
    .map((_, i) => (i === activeIndex ? '2.75fr' : '0.7fr'))
    .join(' ')

  return (
    <section
      ref={sectionRef}
      id="que-hacemos"
      className="scroll-mt-28 relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {s.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {s.subtitle}
          </p>
        </div>

        {/* Desktop: columnas que se expanden / achican (altura fija → sin saltos verticales) */}
        <div
          className="hidden min-h-[34rem] border-t border-gray-200 transition-[grid-template-columns] duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none md:grid"
          style={{ gridTemplateColumns: gridColumns }}
          role="tablist"
          aria-label={s.title}
        >
          {s.servicios.map((serv, i) => {
            const isActive = i === activeIndex
            const num = String(i + 1).padStart(2, '0')
            return (
              <button
                key={serv.titulo}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`servicio-tab-${i}`}
                onClick={() => goTo(i)}
                className={`relative flex min-h-[34rem] min-w-0 flex-col overflow-hidden py-8 text-left transition-[padding,background-color] duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${
                  i > 0 ? 'border-l border-gray-200' : ''
                } ${isActive ? 'bg-white px-6 lg:px-8' : 'bg-slate-50/40 px-3 hover:bg-slate-50/70 lg:px-4'}`}
              >
                <ProgressBar
                  active={isActive}
                  progress={progress}
                  reducedMotion={reducedMotion}
                  orientation="vertical"
                />
                <span
                  className={`font-light leading-none tracking-tight transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'
                  }`}
                  style={{ color: NUM_COLOR }}
                >
                  {num}
                </span>
                <h3
                  className={`mt-3 leading-snug transition-all duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] lg:mt-4 ${
                    isActive
                      ? 'text-sm font-bold text-gray-900 lg:text-[15px]'
                      : 'line-clamp-3 text-[11px] font-normal text-gray-600 lg:text-xs'
                  }`}
                >
                  {serv.titulo}
                </h3>
                {isActive && <ServicioContenido key={activeIndex} serv={serv} index={i} />}
              </button>
            )
          })}
        </div>

        {/* Móvil: todos los servicios desplegados */}
        <ul className="divide-y divide-gray-200 border-t border-gray-200 md:hidden">
          {s.servicios.map((serv, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <li key={serv.titulo} className="px-1 py-8 first:pt-10">
                <div className="flex gap-4">
                  <span
                    className="w-10 shrink-0 text-2xl font-light leading-none"
                    style={{ color: NUM_COLOR }}
                  >
                    {num}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-snug text-gray-900">{serv.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{serv.descripcion}</p>
                    <ServicioImagen index={i} titulo={serv.titulo} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Banner Consultas Online */}
        <div className="relative mt-12 flex flex-col gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0C008E] to-[#1a00ba] p-5 text-white shadow-xl sm:mt-16 sm:rounded-3xl sm:p-8 md:flex-row md:items-center md:justify-between md:gap-8 md:p-12">
          <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#e879a0]/20 blur-2xl sm:h-40 sm:w-40" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-white/10 blur-2xl sm:h-40 sm:w-40" />

          <div className="relative z-10 w-full max-w-xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4">
              <Sparkles className="h-4 w-4 shrink-0 text-[#fbcfe4]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbcfe4] sm:text-xs">
                {b.badge}
              </span>
            </div>
            <h3
              lang={lang}
              className="text-xl font-extrabold leading-tight tracking-tight break-words [overflow-wrap:anywhere] sm:text-2xl md:text-3xl"
            >
              {b.title} <span className="text-[#fbcfe4]">{b.titleAccent}</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">{b.description}</p>
          </div>

          <div className="relative z-10 w-full md:w-auto md:shrink-0">
            <Link
              to="/consultas-online"
              className="btn-pink flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold shadow-lg shadow-[#e879a0]/30 sm:px-8 sm:py-4 sm:text-base md:w-auto"
            >
              <span className="leading-snug">{b.cta}</span>
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
