import { Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import fotoDr from '../img/Dr. Esteban Keklikian.jpg'
import fotoEstela from '../img/Estela Papalexiou.jpg'
import fotoAlexia from '../img/Alexia Lazarides.jpg'
import fotoFlorencia from '../img/Florencia Lazarides.jpg'

const FOTO_POR_NOMBRE = {
  'Dr. Esteban Keklikian': fotoDr,
  'Estela Papalexiou': fotoEstela,
  'Alexia Lazarides': fotoAlexia,
  'Florencia Lazarides': fotoFlorencia,
}

const INFO_BOX_BG = '#B7CCFB'

function cargoLinea(persona) {
  if (persona.cargo) return persona.cargo
  if (persona.especialidad) return `${persona.rol} – ${persona.especialidad}`
  return persona.rol
}

export default function Equipo() {
  const { t } = useLanguage()
  const s = t.equipo

  return (
    <section id="equipo" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title mb-4">{s.title}</h2>
          <p className="text-lg text-gray-500">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {s.miembros.map((persona) => {
            const foto = FOTO_POR_NOMBRE[persona.nombre]
            const linea = cargoLinea(persona)

            return (
              <article
                key={persona.nombre}
                className="group relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#e8e8ec] shadow-[0_8px_32px_rgba(26,22,79,0.08)] ring-1 ring-black/5 sm:max-w-none"
              >
                {foto ? (
                  <img
                    src={foto}
                    alt={persona.nombre}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}

                {/* Recuadro inferior: visible en móvil; en desktop solo al hover */}
                <div
                  className="absolute inset-x-4 bottom-4 z-10 rounded-2xl px-4 py-5 text-center shadow-sm transition-all duration-300 ease-out max-lg:translate-y-0 max-lg:opacity-100 lg:pointer-events-none lg:translate-y-3 lg:opacity-0 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
                  style={{ backgroundColor: INFO_BOX_BG }}
                >
                  <h3 className="text-base font-bold leading-snug text-[#1a164f]">{persona.nombre}</h3>
                  <p className="mt-2 text-xs font-bold leading-snug text-[#1a164f]">{linea}</p>
                  {persona.email ? (
                    <a
                      href={`mailto:${persona.email}`}
                      className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#1a164f] transition-colors hover:bg-[#1a164f]/10"
                      aria-label={`${persona.nombre}: ${persona.email}`}
                    >
                      <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
                    </a>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
