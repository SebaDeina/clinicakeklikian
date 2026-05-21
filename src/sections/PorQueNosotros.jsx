import { Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useAutoAdvance } from '../hooks/useAutoAdvance'
import ProgressBar from '../components/ProgressBar'
import imgEstres from '../img/estres.png'
import imgNeuro from '../img/QrSSupp6vLG5cjg29NdXKjgtgkM(2).png'
import imgEvaluacion from '../img/home2.jpg'
import imgTecnologia from '../img/biofeedback.avif'

const RAZON_IMAGES = [imgEstres, imgNeuro, imgEvaluacion, imgTecnologia]
const AUTO_INTERVAL_MS = 6000

export default function PorQueNosotros() {
  const { t } = useLanguage()
  const s = t.porQueNosotros
  const { activeIndex, progress, reducedMotion, goTo } = useAutoAdvance(
    s.razones.length,
    AUTO_INTERVAL_MS
  )

  return (
    <section id="por-que-nosotros" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="min-h-0 lg:min-h-[520px]">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-[2rem]">
              {s.title}
            </h2>

            <ul className="mt-8 border-t border-gray-200" role="tablist" aria-label={s.title}>
              {s.razones.map((razon, i) => {
                const isActive = i === activeIndex
                return (
                  <li key={razon.titulo} className="relative border-b border-gray-200">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="razon-panel"
                      id={`razon-tab-${i}`}
                      onClick={() => goTo(i)}
                      className="flex min-h-[4.5rem] w-full gap-4 py-5 text-left sm:min-h-[5rem] sm:py-6"
                    >
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 stroke-[2.5] ${
                          isActive ? 'text-gray-400' : 'text-gray-300'
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`min-w-0 flex-1 text-base leading-snug sm:text-[17px] ${
                          isActive ? 'font-bold text-gray-900' : 'font-normal text-gray-500'
                        }`}
                      >
                        {razon.titulo}
                      </span>
                    </button>
                    <ProgressBar active={isActive} progress={progress} reducedMotion={reducedMotion} />
                  </li>
                )
              })}
            </ul>
          </div>

          <div
            className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_12px_48px_rgba(0,0,0,0.08)] sm:min-h-[400px] lg:min-h-[520px] lg:rounded-[2rem]"
            role="tabpanel"
            id="razon-panel"
            aria-labelledby={`razon-tab-${activeIndex}`}
          >
            <div className="absolute inset-0">
              {s.razones.map((razon, i) => (
                <img
                  key={razon.titulo}
                  src={RAZON_IMAGES[i] ?? RAZON_IMAGES[0]}
                  alt={razon.titulo}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                    i === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>

            <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
              <div className="min-h-[7.5rem] rounded-2xl bg-white px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:min-h-[8rem] sm:px-6 sm:py-5">
                {s.razones.map((razon, i) => (
                  <p
                    key={razon.titulo}
                    className={`text-sm leading-relaxed text-[#0C008E] sm:text-[15px] ${
                      i === activeIndex ? 'block' : 'hidden'
                    }`}
                  >
                    {razon.descripcion}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
