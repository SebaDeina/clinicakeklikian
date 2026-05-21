import { useState, useEffect } from 'react'
import { Cookie, Settings, X, Check, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [preferences, setPreferences] = useState({
    technical: true, // Siempre activas por ley
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent_keklikian')
    if (!consent) {
      setShowBanner(true)
    } else {
      try {
        setPreferences(JSON.parse(consent))
      } catch (e) {
        setShowBanner(true)
      }
    }

    const handleOpenSettings = () => {
      console.log('Abriendo modal de configuración de cookies...')
      setShowModal(true)
    }
    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const handleAcceptAll = () => {
    const all = { technical: true, analytics: true, marketing: true }
    localStorage.setItem('cookieConsent_keklikian', JSON.stringify(all))
    setPreferences(all)
    setShowBanner(false)
    setShowModal(false)
  }

  const handleRejectAll = () => {
    const minimal = { technical: true, analytics: false, marketing: false }
    localStorage.setItem('cookieConsent_keklikian', JSON.stringify(minimal))
    setPreferences(minimal)
    setShowBanner(false)
    setShowModal(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent_keklikian', JSON.stringify(preferences))
    setShowBanner(false)
    setShowModal(false)
  }

  if (!showBanner && !showModal) return null

  return (
    <>
      {/* Banner flotante inferior */}
      {showBanner && !showModal && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8 pointer-events-none animate-fade-in">
          <div className="max-w-6xl mx-auto bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            <div className="flex items-start gap-5 max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-[#0C008E] flex items-center justify-center flex-shrink-0 border border-white/10 shadow-inner">
                <Cookie className="w-6 h-6 text-[#e879a0]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-bold tracking-tight text-white">Configuración y uso de Cookies</h3>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                    LSSI-CE / RGPD
                  </span>
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Utilizamos cookies propias y de terceros para fines analíticos, optimización de la experiencia de usuario y mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación. Puedes aceptar todas las cookies, rechazarlas o configurar tus preferencias.
                  {' '}<Link to="/cookies" className="text-[#e879a0] font-semibold hover:underline inline-flex items-center gap-1">Más información en nuestra Política de Cookies</Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end shrink-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 font-semibold text-sm transition-all duration-200"
              >
                <Settings className="w-4 h-4 inline mr-1.5" />
                Configurar
              </button>
              <button
                type="button"
                onClick={handleRejectAll}
                className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all duration-200"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#e879a0] hover:bg-[#c45980] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#e879a0]/20"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de configuración avanzada */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col text-gray-800">
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-10 rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0C008E]/10 flex items-center justify-center text-[#0C008E]">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Panel de Configuración de Cookies</h3>
                  <p className="text-xs text-gray-500">Selecciona tus preferencias de rastreo y navegación</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {/* Técnica / Necesaria */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-gray-200/60 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-900 text-base">Cookies Técnicas (Necesarias)</h4>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#0C008E]/10 text-[#0C008E]">
                      Obligatorio
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen, como controlar el tráfico, identificar la sesión o acceder a partes de acceso restringido.
                  </p>
                </div>
                <div className="flex items-center h-6 pt-1">
                  <ShieldCheck className="w-6 h-6 text-[#0C008E]" />
                </div>
              </div>

              {/* Analíticas */}
              <div className="p-5 rounded-2xl border border-gray-200/60 flex items-start justify-between gap-4 bg-white hover:border-[#0C008E]/30 transition-colors">
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-base">Cookies Analíticas o de Medición</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Permiten el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida se utiliza en la medición de la actividad del sitio web para introducir mejoras en función del análisis de los datos de uso.
                  </p>
                </div>
                <div className="flex items-center h-6 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0C008E]"></div>
                  </label>
                </div>
              </div>

              {/* Publicidad / Marketing */}
              <div className="p-5 rounded-2xl border border-gray-200/60 flex items-start justify-between gap-4 bg-white hover:border-[#0C008E]/30 transition-colors">
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-base">Cookies de Publicidad y Comportamiento</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.
                  </p>
                </div>
                <div className="flex items-center h-6 pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0C008E]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 sm:p-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 bg-white/95 backdrop-blur-sm rounded-b-3xl">
              <button
                type="button"
                onClick={handleRejectAll}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold text-sm transition-all duration-200"
              >
                Rechazar todas
              </button>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0C008E] hover:bg-[#08005e] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#0C008E]/10"
                >
                  <Check className="w-4 h-4 inline mr-1.5" />
                  Guardar preferencias
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#e879a0] hover:bg-[#c45980] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-[#e879a0]/20"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
