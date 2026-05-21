import { useState, useEffect } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import MotivoSelect from '../components/MotivoSelect'

const emptyForm = { nombre: '', email: '', telefono: '', motivo: '', mensaje: '' }

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Cam%C3%AD%20Son%20Rapinya%201%2007013%20Palma%20de%20mallorca&z=16&output=embed'

function InfoItem({ item }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl sm:h-12 sm:w-12 sm:text-2xl"
        style={{ background: 'rgba(13,11,46,0.06)' }}
      >
        {item.icon}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="font-semibold text-gray-800">{item.titulo}</p>
        <p className="text-sm text-gray-600">{item.info}</p>
        {item.sub ? <p className="text-xs text-gray-400">{item.sub}</p> : null}
      </div>
    </div>
  )
}

export default function Contacto() {
  const { t } = useLanguage()
  const s = t.contacto
  const f = s.form
  const location = useLocation()

  const ubicacion = s.info.find((item) => item.map)
  const otrosContacto = s.info.filter((item) => !item.map)

  const [form, setForm] = useState(emptyForm)
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.search.includes('contacto=online')) {
      setForm((p) => ({
        ...p,
        motivo: 'Consulta Online PNIE',
        mensaje: 'Hola, me gustaría solicitar información y agendar una Consulta Online en PNIE.',
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
    <section id="contacto" className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado a ancho completo */}
        <div className="mb-10 lg:mb-12">
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title mb-4 max-w-2xl">{s.title}</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          {/* Columna izquierda: datos + mapa */}
          <div className="flex min-w-0 flex-col gap-6 lg:gap-7">
            {ubicacion ? <InfoItem item={ubicacion} /> : null}

            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <div className="relative aspect-[16/10] w-full sm:aspect-[5/3]">
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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
              {otrosContacto.map((item) => (
                <InfoItem key={item.titulo} item={item} />
              ))}
            </div>
          </div>

          {/* Columna derecha: formulario alineado arriba */}
          <div className="w-full min-w-0 lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-visible rounded-3xl border border-gray-100 bg-gray-50 p-5 sm:p-8">
              {enviado ? (
                <div className="py-10 text-center">
                  <CheckCircle className="mx-auto mb-4 h-14 w-14 text-[#e879a0]" />
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{f.exitoTitulo}</h3>
                  <p className="text-gray-500">{f.exitoTexto}</p>
                  <button
                    type="button"
                    className="mt-6 text-sm font-medium text-[#e879a0] hover:underline"
                    onClick={() => setEnviado(false)}
                  >
                    {f.exitoOtro}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{f.titulo}</h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        {f.nombre} *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder={f.nombrePlaceholder}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#e879a0]"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        {f.telefono}
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder={f.telefonoPlaceholder}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#e879a0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {f.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={f.emailPlaceholder}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#e879a0]"
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
                    <label className="mb-1.5 block text-sm font-medium text-gray-700">
                      {f.mensaje}
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={4}
                      placeholder={f.mensajePlaceholder}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#e879a0]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-pink w-full justify-center disabled:opacity-70"
                  >
                    {loading ? (
                      f.enviando
                    ) : (
                      <>
                        <Send size={16} /> {f.enviar}
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    {f.privacidad}{' '}
                    <Link to="/privacidad" className="underline hover:text-[#e879a0]">
                      {f.privacidadLink}
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
