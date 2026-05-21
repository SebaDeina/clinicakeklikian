import { HeartPulse, Handshake, Cog } from 'lucide-react'
import drKeklikian from '../img/Dr. Esteban Keklikian.jpg'
import { useLanguage } from '../context/LanguageContext'

const CIRCLE_COLOR = '#EBB9D1'
const VALUE_ICONS = [HeartPulse, Handshake, Cog]

export default function Filosofia() {
  const { t } = useLanguage()
  const f = t.filosofia

  return (
    <section id="intro" className="scroll-mt-28 bg-white text-[#14141c]">
      {/* Bloque inicial — círculos + texto + valores */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative h-[240px] w-[360px] sm:h-[280px] sm:w-[420px]">
              <div
                className="absolute left-0 top-1/2 z-10 flex h-[200px] w-[200px] -translate-y-1/2 flex-col items-center justify-center rounded-full text-center shadow-[0_20px_50px_-12px_rgba(235,185,209,0.55)] sm:h-[224px] sm:w-[224px]"
                style={{ backgroundColor: CIRCLE_COLOR }}
              >
                <span className="text-[3rem] font-bold leading-none tracking-tight text-white drop-shadow-sm sm:text-[3.5rem]">
                  {f.introStats[0].value}
                </span>
                <span className="mt-2 max-w-[10rem] text-[11px] font-semibold uppercase tracking-[0.12em] text-white/95 sm:text-xs">
                  {f.introStats[0].label}
                </span>
              </div>
              <div
                className="absolute bottom-0 right-0 z-20 flex h-[148px] w-[148px] flex-col items-center justify-center rounded-full text-center shadow-lg sm:h-[164px] sm:w-[164px]"
                style={{ backgroundColor: CIRCLE_COLOR }}
              >
                <span className="text-[2rem] font-bold leading-none tracking-tight text-white sm:text-[2.25rem]">
                  {f.introStats[1].value}
                </span>
                <span className="mt-1.5 max-w-[7rem] text-center text-[10px] font-semibold uppercase leading-snug tracking-wide text-white/90 sm:text-[11px]">
                  {f.introStats[1].label}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-pretty text-lg leading-[1.65] text-[#2a2838] sm:text-xl sm:leading-relaxed">
              {f.introLead}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200/90 pt-6 sm:mt-16 sm:pt-10">
          <div className="mx-auto flex max-w-md flex-col items-stretch divide-y divide-gray-200/90 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:divide-y-0 sm:gap-2 md:gap-4">
            {f.introValues.map((item, i) => {
              const Icon = VALUE_ICONS[i] ?? Cog
              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-center gap-3 py-4 sm:flex-1 sm:justify-center sm:py-6 sm:px-2 md:px-6 ${
                    i < f.introValues.length - 1 ? 'sm:border-r sm:border-gray-200/90' : ''
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d0b2e]/[0.06] text-[#0d0b2e]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-base font-semibold tracking-tight text-[#0d0b2e]">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div
        className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        aria-hidden
      />

      {/* Bienestar — dos columnas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16 items-center">
          <div>
            <h2 className="text-pretty text-3xl font-bold leading-[1.15] tracking-tight text-[#0d0b2e] sm:text-4xl lg:text-[2.5rem]">
              {f.title}
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-[#2a2838] sm:text-xl">
              {f.description}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3">
              {f.pills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center justify-center rounded-full bg-[#f5f2f8] px-5 py-3 text-center text-sm font-medium text-[#0d0b2e] sm:text-[15px]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={drKeklikian}
              alt={f.imageAlt}
              className="w-full rounded-2xl object-cover shadow-[0_8px_40px_rgba(13,11,46,0.08)] aspect-[4/3] sm:aspect-auto sm:max-h-[520px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
