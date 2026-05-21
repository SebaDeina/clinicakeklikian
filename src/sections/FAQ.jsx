import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function FAQItem({ pregunta, respuesta }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 group-hover:text-[#0d0b2e] transition-colors pr-4 text-sm">
          {pregunta}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-[#e879a0]' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-gray-500 leading-relaxed text-sm">{respuesta}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const s = t.faq

  return (
    <section id="opiniones" className="py-24 bg-gray-50 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title mb-4">{s.title}</h2>
          <p className="text-gray-500 text-lg">{s.subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {s.items.map((faq) => (
            <FAQItem key={faq.pregunta} pregunta={faq.pregunta} respuesta={faq.respuesta} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">{s.otras}</p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pink-outline"
          >
            {s.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
