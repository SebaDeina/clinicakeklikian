import { useLanguage } from '../context/LanguageContext'

export default function Estadisticas() {
  const { t } = useLanguage()
  const s = t.estadisticas

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-gray-100 relative overflow-hidden">
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0C008E]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado limpio y alineado con la estética general */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[#0C008E] text-xs font-bold uppercase tracking-widest mb-3 bg-[#0C008E]/5 px-4 py-1.5 rounded-full border border-[#0C008E]/10">
            {s.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 tracking-tight">
            {s.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {s.subtitle}
          </p>
        </div>

        {/* Cuadrícula de estadísticas en tarjetas blancas premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {s.items.map((item) => (
            <div
              key={item.value}
              className="group bg-white hover:border-[#0C008E]/20 border border-gray-200/60 rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(12,0,142,0.08)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <p className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#0C008E] group-hover:text-[#e879a0] transition-colors duration-300 tracking-tight">
                  {item.value}
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                  {item.label}
                </p>
              </div>
              {item.source && (
                <p className="mt-6 pt-4 border-t border-gray-100 text-gray-400 text-xs font-mono tracking-wider uppercase transition-colors">
                  — {item.source}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Llamado a la acción (Callout + Botón) en formato barra horizontal premium */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white py-6 px-6 sm:px-8 rounded-3xl border border-gray-200/60 max-w-4xl mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <p className="text-gray-800 text-sm sm:text-base font-semibold leading-relaxed text-center sm:text-left m-0">
            {s.callout}
          </p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pink text-sm sm:text-base px-8 py-3.5 font-semibold shadow-lg shadow-[#e879a0]/20 whitespace-nowrap flex-shrink-0"
          >
            {s.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
