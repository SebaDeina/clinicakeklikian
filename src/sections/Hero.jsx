import { useLanguage } from '../context/LanguageContext'
import { WHATSAPP_URL_HOME } from '../constants/whatsapp'
import WhatsAppFloat from '../components/WhatsAppFloat'
import heroBg from '../img/home.png'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #06051a 0%, #0d0b2e 40%, #0C008E 70%, #1a0a2e 100%)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(6,5,26,0.35) 0%, rgba(6,5,26,0.20) 50%, rgba(6,5,26,0.05) 100%)' }}
      />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(6,5,26,0.65) 0%, rgba(6,5,26,0.20) 40%, transparent 75%)',
        }}
        aria-hidden
      />

      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-900/30 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-pink-900/20 blur-3xl pointer-events-none z-[1]" />

      <div className="relative z-10 flex flex-1 flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-14 sm:pb-20 lg:pb-24">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 lg:items-end">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/10">
                {t.hero.badge1}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/10">
                {t.hero.badge2}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.15]">
              {t.hero.title}
            </h1>
          </div>

          <div className="lg:pl-4 lg:pb-1">
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md lg:max-w-sm">
              {t.hero.subtitle}
            </p>
            <button
              type="button"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-pink text-base px-8 py-3.5"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>

      <WhatsAppFloat href={WHATSAPP_URL_HOME} />
    </section>
  )
}
