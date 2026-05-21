import { Link } from 'react-router-dom'
import { getWhatsAppConsultaOnlineUrl } from '../constants/whatsapp'
import { useLanguage } from '../context/LanguageContext'
import {
  ArrowLeft,
  Video,
  Calendar,
  Clock,
  Activity,
  CheckCircle2,
  Laptop,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-start gap-3 mb-4 sm:mb-6">
      <span className="p-2 sm:p-2.5 bg-[#0C008E]/5 rounded-xl sm:rounded-2xl text-[#0C008E] shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-snug pt-0.5">
        {title}
      </h2>
    </div>
  )
}

function CardHeading({ icon: Icon, title, iconClass = 'bg-[#0C008E]/10 text-[#0C008E]' }) {
  return (
    <div className="flex items-start gap-3 mb-5 sm:mb-6">
      <span className={`p-2 rounded-xl shrink-0 ${iconClass}`}>
        <Icon className="w-5 h-5" />
      </span>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight leading-snug pt-0.5">
        {title}
      </h3>
    </div>
  )
}

export default function ConsultasOnline() {
  const { lang, t } = useLanguage()
  const p = t.consultasOnlinePage
  const whatsappUrl = getWhatsAppConsultaOnlineUrl(lang)

  return (
    <div className="bg-slate-50 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-200/60 p-5 sm:p-8 md:p-12 lg:p-16 relative overflow-x-clip">
        <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-[400px] h-48 sm:h-72 lg:h-[400px] bg-[#0C008E]/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-[400px] h-48 sm:h-72 lg:h-[400px] bg-[#e879a0]/[0.03] rounded-full blur-3xl pointer-events-none" />

        {/* Encabezado */}
        <div className="relative z-10 border-b border-gray-100 pb-8 sm:pb-10 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#e879a0]/10 border border-[#e879a0]/20 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-[#e879a0] shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e879a0]">
              {p.badge}
            </span>
          </div>
          <h1
            lang={lang}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 sm:mb-6 break-words [overflow-wrap:anywhere]"
          >
            {p.title}{' '}
            <span className="text-[#0C008E]">{p.titleAccent}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl">
            {p.intro}
          </p>
        </div>

        <div className="relative z-10 space-y-10 sm:space-y-14 md:space-y-16 text-gray-600 text-[15px] sm:text-base md:text-lg leading-relaxed">
          {/* ¿En qué consiste? */}
          <section className="space-y-3 sm:space-y-4">
            <SectionHeading icon={Video} title={p.whatIsIt.title} />
            <p className="bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 text-gray-700 leading-relaxed text-[15px] sm:text-base">
              {p.whatIsIt.body}
            </p>
          </section>

          {/* Estructura del servicio */}
          <section className="space-y-5 sm:space-y-8">
            <SectionHeading icon={Calendar} title={p.structure.title} />

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              {p.structure.steps.map((step) => (
                <div
                  key={step.label}
                  className="bg-white border border-gray-200/80 hover:border-[#0C008E]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5 sm:mb-6">
                    <span className="text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 bg-[#0C008E]/10 text-[#0C008E] rounded-full tracking-widest uppercase">
                      {step.label}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3 text-sm text-gray-600 list-none pl-0">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#e879a0] font-bold mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Áreas y herramientas */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
            <div className="bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100">
              <CardHeading icon={Activity} title={p.areas.title} />
              <ul className="space-y-3 sm:space-y-4 text-[15px] sm:text-base text-gray-700 list-none pl-0">
                {p.areas.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e879a0] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-gray-100">
              <CardHeading icon={ShieldCheck} title={p.tools.title} />
              <p className="text-sm text-gray-500 mb-4 sm:mb-6">{p.tools.subtitle}</p>
              <ul className="space-y-3 sm:space-y-4 text-[15px] sm:text-base text-gray-700 list-none pl-0">
                {p.tools.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0C008E] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Requisitos y ventajas */}
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 md:grid-cols-2">
            <div className="border border-gray-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 bg-white shadow-sm">
              <CardHeading
                icon={Laptop}
                title={p.requirements.title}
                iconClass="bg-gray-100 text-gray-700"
              />
              <ul className="space-y-3 sm:space-y-4 text-[15px] sm:text-base text-gray-600 list-none pl-0">
                {p.requirements.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0C008E] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#e879a0]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 bg-[#e879a0]/5 shadow-sm">
              <CardHeading
                icon={Sparkles}
                title={p.advantages.title}
                iconClass="bg-[#e879a0]/20 text-[#e879a0]"
              />
              <ul className="space-y-3 sm:space-y-4 text-[15px] sm:text-base text-gray-700 list-none pl-0 font-medium">
                {p.advantages.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#e879a0] font-bold mt-0.5 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <section className="bg-gradient-to-r from-[#0C008E] to-[#1a00ba] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#e879a0]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                {p.cta.title}
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal px-1">
                {p.cta.body}
              </p>
              <p className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-[#fbcfe4] max-w-full text-center">
                <span className="shrink-0" aria-hidden="true">
                  ⚠️
                </span>
                <span>{p.cta.warning}</span>
              </p>
              <div className="pt-2 sm:pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pink px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-lg shadow-[#e879a0]/30 w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>{p.cta.button}</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
              </div>
            </div>
          </section>

          <div className="pt-2 sm:pt-6 flex justify-stretch sm:justify-start">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-[#0C008E] hover:shadow-lg w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 shrink-0" />
              <span>{p.backHome}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
