import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ChevronDown } from 'lucide-react'

export default function QueTratamos() {
  const { t, lang } = useLanguage()
  const s = t.queTratamos

  const [expandedIndex, setExpandedIndex] = useState(null)

  const howWeWorkLabel =
    lang === 'es' ? 'Cómo trabajamos:' : lang === 'en' ? 'How we work:' : 'Unser Ansatz:'
  const expandLabel =
    lang === 'es' ? 'Ver cómo lo tratamos' : lang === 'en' ? 'See how we treat it' : 'Behandlung ansehen'
  const collapseLabel =
    lang === 'es' ? 'Ocultar tratamiento' : lang === 'en' ? 'Hide treatment' : 'Behandlung ausblenden'

  return (
    <section id="que-tratamos" className="py-24 sm:py-32 bg-slate-50/50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title mb-6">{s.title}</h2>
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {s.condiciones.map((c, i) => {
            const num = String(i + 1).padStart(2, '0')
            const isExpanded = expandedIndex === i

            return (
              <div
                key={c.titulo}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="group bg-white hover:bg-[#0C008E] border border-gray-100 hover:border-transparent rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(12,0,142,0.15)] hover:-translate-y-1 cursor-pointer select-none"
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setExpandedIndex(isExpanded ? null : i)
                  }
                }}
              >
                <div>
                  {/* Header de la tarjeta: Círculo rosa con número y Título */}
                  <div className="flex items-center gap-3.5 mb-5 min-w-0">
                    {/* Círculo rosa con número blanco */}
                    <span className="w-8 h-8 rounded-full bg-[#e879a0] text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 shadow-sm">
                      {num}
                    </span>
                    {/* Título de la condición */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white transition-colors tracking-tight leading-snug truncate sm:overflow-visible sm:whitespace-normal">
                      {c.titulo}
                    </h3>
                  </div>

                  {/* Descripción de la condición */}
                  <p className="text-gray-600 group-hover:text-white/80 text-sm sm:text-base leading-relaxed mb-6 transition-colors">
                    {c.descripcion}
                  </p>
                </div>

                {/* Sección inferior interactiva: Indicador visual de despliegue */}
                <div className="mt-auto">
                  <div className="w-full flex items-center justify-between pt-5 border-t border-gray-200/80 group-hover:border-white/20 text-sm font-bold text-[#0C008E] group-hover:text-[#e879a0] transition-colors">
                    <span>{isExpanded ? collapseLabel : expandLabel}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Contenido desplegable: Cómo trabajamos */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-dashed border-gray-200/60 group-hover:border-white/20 animate-fade-in transition-all duration-300">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white/60 mb-2 transition-colors">
                        {howWeWorkLabel}
                      </h4>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-white leading-relaxed transition-colors">
                        {c.comoTrabajamos}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pink px-10 py-4 text-base font-semibold shadow-lg shadow-[#e879a0]/20"
          >
            {s.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
