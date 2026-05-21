import { useState, useEffect } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import MotivoSelect from '../components/MotivoSelect'

const emptyForm = { nombre: '', email: '', telefono: '', motivo: '', mensaje: '' }

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Cam%C3%AD%20Son%20Rapinya%201%2007013%20Palma%20de%20mallorca&z=16&output=embed'

export default function Contacto() {
  const { t } = useLanguage()
  const s = t.contacto
  const f = s.form
  const location = useLocation()

  const [form, setForm] = useState(emptyForm)
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.search.includes('contacto=online')) {
      setForm((p) => ({
        ...p,
        motivo: 'Consulta Online PNIE',
        mensaje: 'Hola, me gustaría solicitar información y agendar una Consulta Online en PNIE.'
      }))
      const el = document.getElementById('contacto')
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300)
      }
    }
  }, [location.search])

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setEnviado(true)
    setForm(emptyForm)
  }

  return (
    <section id="contacto" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="section-tag">{s.tag}</span>
            <h2 className="section-title mb-6">{s.title}</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">{s.subtitle}</p>

            <div className="space-y-6">
              {s.info.map((item) => (
                <div key={item.titulo}>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                      style={{ background: 'rgba(13,11,46,0.06)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800">{item.titulo}</p>
                      <p className="text-sm text-gray-600">{item.info}</p>
                      <p className="text-xs text-gray-400">{item.sub}</p>
                    </div>
                  </div>
                  {item.map ? (
                    <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                      <div className="relative aspect-[4/3] w-full min-h-[220px] sm:min-h-[260px]">
                        <iframe
                          src={MAP_EMBED_URL}
                          title={s.mapTitle}
                          className="absolute inset-0 h-full w-full border-0"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-5 sm:p-8 border border-gray-100 overflow-visible">
            {enviado ? (
              <div className="text-center py-10">
                <CheckCircle className="text-[#e879a0] w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.exitoTitulo}</h3>
                <p className="text-gray-500">{f.exitoTexto}</p>
                <button className="mt-6 text-[#e879a0] text-sm font-medium hover:underline" onClick={() => setEnviado(false)}>
                  {f.exitoOtro}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.titulo}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.nombre} *</label>
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required
                      placeholder={f.nombrePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#e879a0] focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.telefono}</label>
                    <input type="tel" name="telefono" value={form.telefono} onChange={handleChange}
                      placeholder={f.telefonoPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#e879a0] focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.email} *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required
                    placeholder={f.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#e879a0] focus:border-transparent bg-white"
                  />
                </div>

                <MotivoSelect
                  label={f.motivo}
                  placeholder={f.motivoPlaceholder}
                  options={f.motivoOpciones}
                  value={form.motivo}
                  onChange={(motivo) => setForm((p) => ({ ...p, motivo }))}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{f.mensaje}</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} rows={4}
                    placeholder={f.mensajePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#e879a0] focus:border-transparent bg-white resize-none"
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-pink w-full justify-center disabled:opacity-70">
                  {loading ? f.enviando : <><Send size={16} /> {f.enviar}</>}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  {f.privacidad}{' '}
                  <Link to="/privacidad" className="underline hover:text-[#e879a0]">{f.privacidadLink}</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
