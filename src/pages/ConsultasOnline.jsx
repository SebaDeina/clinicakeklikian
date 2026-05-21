import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWhatsAppConsultaOnlineUrl } from '../constants/whatsapp'
import { useLanguage } from '../context/LanguageContext'
import { useRevealOnScroll, useReducedMotion } from '../hooks/useRevealOnScroll'
import {
  ArrowLeft,
  ArrowRight,
  Video,
  Calendar,
  Clock,
  Activity,
  CheckCircle2,
  Laptop,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mb-5 flex items-start gap-3 sm:mb-6">
      <span className="shrink-0 rounded-xl bg-[#0C008E]/5 p-2.5 text-[#0C008E] sm:rounded-2xl sm:p-3">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
      <h2 className="pt-0.5 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
        {title}
      </h2>
    </div>
  )
}

function CardHeading({ icon: Icon, title, iconClass = 'bg-[#0C008E]/10 text-[#0C008E]' }) {
  return (
    <div className="mb-5 flex items-start gap-3 sm:mb-6">
      <span className={`shrink-0 rounded-xl p-2 ${iconClass}`}>
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="pt-0.5 text-lg font-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
        {title}
      </h3>
    </div>
  )
}

function RevealBlock({ children, className = '', delayMs = 0 }) {
  const { ref, visible, reduced, className: motionClass } = useRevealOnScroll()

  return (
    <div
      ref={ref}
      className={`${motionClass} ${className}`}
      style={reduced || !visible ? undefined : { transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}

export default function ConsultasOnline() {
  const { lang, t } = useLanguage()
  const p = t.consultasOnlinePage
  const whatsappUrl = getWhatsAppConsultaOnlineUrl(lang)
  const reducedMotion = useReducedMotion()
  const [heroVisible, setHeroVisible] = useState(reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      setHeroVisible(true)
      return
    }
    const id = requestAnimationFrame(() => setHeroVisible(true))
    return () => cancelAnimationFrame(id)
  }, [reducedMotion])

  const heroMotion = heroVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-6'

  return (
    <main className="min-h-screen bg-slate-50 pt-28 sm:pt-32">
      {/* Encabezado */}
      <section className="relative overflow-hidden border-b border-gray-200/80 bg-white py-14 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#0C008E]/[0.04] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#e879a0]/[0.06] blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${heroMotion}`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e879a0]/20 bg-[#e879a0]/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 shrink-0 text-[#e879a0]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e879a0] sm:text-xs">
                {p.badge}
              </span>
            </div>
            <h1
              lang={lang}
              className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 break-words [overflow-wrap:anywhere] sm:text-3xl md:text-4xl lg:text-5xl"
            >
              {p.title}{' '}
              <span className="text-[#0C008E]">{p.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg md:text-xl">
              {p.intro}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:space-y-16 sm:px-6 sm:py-16 lg:space-y-20 lg:px-8 lg:py-20">
        {/* ¿En qué consiste? */}
        <RevealBlock>
          <section>
            <SectionHeading icon={Video} title={p.whatIsIt.title} />
            <p className="rounded-2xl border border-gray-100 bg-white p-5 text-[15px] leading-relaxed text-gray-700 shadow-sm sm:rounded-3xl sm:p-8 sm:text-base md:text-lg">
              {p.whatIsIt.body}
            </p>
          </section>
        </RevealBlock>

        {/* Estructura del servicio */}
        <RevealBlock>
          <section>
            <SectionHeading icon={Calendar} title={p.structure.title} />
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              {p.structure.steps.map((step, index) => (
                <RevealBlock
                  key={step.label}
                  delayMs={index * 120}
                  className="h-full"
                >
                  <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#0C008E]/25 hover:shadow-md sm:rounded-3xl sm:p-6 md:p-8">
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-2 sm:mb-6">
                      <span className="rounded-full bg-[#0C008E]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0C008E] sm:text-xs">
                        {step.label}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-base font-bold leading-snug tracking-tight text-gray-900 sm:mb-4 sm:text-lg">
                      {step.title}
                    </h3>
                    <ul className="space-y-2.5 pl-0 text-sm text-gray-600 sm:space-y-3 sm:text-[15px]">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 shrink-0 font-bold text-[#e879a0]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </RevealBlock>
              ))}
            </div>
          </section>
        </RevealBlock>

        {/* Áreas y herramientas */}
        <RevealBlock>
          <section className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
              <CardHeading icon={Activity} title={p.areas.title} />
              <ul className="space-y-3 pl-0 text-[15px] text-gray-700 sm:space-y-4 sm:text-base">
                {p.areas.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e879a0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
              <CardHeading icon={ShieldCheck} title={p.tools.title} />
              <p className="mb-4 text-sm text-gray-500 sm:mb-6 sm:text-base">{p.tools.subtitle}</p>
              <ul className="space-y-3 pl-0 text-[15px] text-gray-700 sm:space-y-4 sm:text-base">
                {p.tools.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0C008E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </RevealBlock>

        {/* Requisitos y ventajas */}
        <RevealBlock>
          <section className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
              <CardHeading
                icon={Laptop}
                title={p.requirements.title}
                iconClass="bg-gray-100 text-gray-700"
              />
              <ul className="space-y-3 pl-0 text-[15px] text-gray-600 sm:space-y-4 sm:text-base">
                {p.requirements.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0C008E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#e879a0]/30 bg-[#e879a0]/5 p-5 shadow-sm sm:rounded-3xl sm:p-8">
              <CardHeading
                icon={Sparkles}
                title={p.advantages.title}
                iconClass="bg-[#e879a0]/20 text-[#e879a0]"
              />
              <ul className="space-y-3 pl-0 text-[15px] font-medium text-gray-700 sm:space-y-4 sm:text-base">
                {p.advantages.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 font-bold text-[#e879a0]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </RevealBlock>

        {/* CTA */}
        <RevealBlock>
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0C008E] to-[#1a00ba] p-6 text-center text-white shadow-xl sm:rounded-3xl sm:p-8 md:p-12">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e879a0]/20 blur-2xl sm:h-40 sm:w-40"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl sm:h-40 sm:w-40"
              aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-2xl space-y-4 sm:space-y-6">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
                {p.cta.title}
              </h2>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                {p.cta.body}
              </p>
              <p className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#fbcfe4] sm:px-6 sm:text-sm">
                <span aria-hidden="true">⚠️</span>
                <span>{p.cta.warning}</span>
              </p>
              <div className="pt-2 sm:pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pink inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold shadow-lg shadow-[#e879a0]/30 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  <span>{p.cta.button}</span>
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </a>
              </div>
            </div>
          </section>
        </RevealBlock>

        <RevealBlock>
          <div className="flex justify-stretch sm:justify-start">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0C008E] hover:shadow-lg sm:w-auto sm:text-base"
            >
              <ArrowLeft className="h-5 w-5 shrink-0" />
              <span>{p.backHome}</span>
            </Link>
          </div>
        </RevealBlock>
      </div>
    </main>
  )
}
