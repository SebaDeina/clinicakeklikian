import { useLanguage } from '../context/LanguageContext'
import imgEquipo from '../img/team.jpg'

export default function Invitacion() {
  const { t } = useLanguage()
  const s = t.invitacion

  return (
    <section className="bg-[#B7CCFB] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="order-2 lg:order-1">
            <img
              src={imgEquipo}
              alt={s.imageAlt}
              className="mx-auto w-full max-w-lg rounded-[1.75rem] object-cover shadow-[0_12px_40px_rgba(12,0,142,0.08)] lg:max-w-none lg:rounded-[2rem]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
            <div className="mb-8 flex flex-col items-center gap-3 lg:items-start">
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="rounded-full border border-gray-900/15 bg-white px-4 py-2 text-sm font-medium text-gray-900">
                  {s.tags[0]}
                </span>
                <span className="rounded-full border border-gray-900/15 bg-white px-4 py-2 text-sm font-medium text-gray-900">
                  {s.tags[1]}
                </span>
              </div>
              <span className="rounded-full border border-gray-900/15 bg-white px-4 py-2 text-sm font-medium text-gray-900">
                {s.tags[2]}
              </span>
            </div>

            <p className="max-w-lg text-lg font-medium leading-relaxed text-gray-900 sm:text-xl lg:text-[1.35rem] lg:leading-snug">
              {s.text}
            </p>

            <button
              type="button"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-pink mt-10 px-10 py-3.5 text-base font-bold"
            >
              {s.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
